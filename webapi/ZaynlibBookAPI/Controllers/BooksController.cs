using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zaynlib.Data;
using Zaynlib.Domain;
using ZaynlibBookAPI.Filters;
using ZaynlibBookAPI.Models;
using ZaynlibBookAPI.Services;

namespace ZaynlibBookAPI.Controllers
{
    [Route("api/Books")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly ZainlibBooksStoreContext _boookContext;
        private readonly IBookRepository _bookService;
        private readonly IMapper _mapper;

        public BooksController(ZainlibBooksStoreContext context,
            IBookRepository bookService, IMapper mapper)
        {
            _boookContext = context ?? throw new ArgumentNullException(nameof(bookService));
            _bookService = bookService ?? throw new ArgumentNullException(nameof(bookService));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));

        }

        [HttpGet]
        [BooksResultFilter]
        public async Task<IActionResult> GetBooks()
        {
            var bookList = await _bookService.GetBooksAsync();
            return Ok(bookList);
        }


        [HttpGet("{id}", Name = "GetBook")]
        [BookResultFilter]
        public async Task<ActionResult<Book>> GetBook(Guid id)
        {
            var book = await _bookService.GetBookAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(Guid id, Book book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            _boookContext.Entry(book).State = EntityState.Modified;

            try
            {
                _bookService.UpdateBook(id, book);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _bookService.BookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        [BookResultFilter] // either add filter here or add to GetBook Method.
        public async Task<ActionResult<Book>> PostBook(BookCreationDTO book)
        {
            var bookEntity = _mapper.Map<Book>(book);

            _bookService.CreateBook(bookEntity);
            await _bookService.SaveBookEntityAsync();
            // Fetch Fresh Book.
            var freshBook = await _bookService.GetBookAsync(bookEntity.Id);

            return CreatedAtAction("GetBook", new { id = freshBook.Id }, freshBook);
        }


        [HttpDelete("{id}")]
        public async Task<bool> DeleteBook(Guid id)
        {
            var book = await _bookService.GetBookAsync(id);
            if (book == null)
            {
                throw new ArgumentNullException(nameof(id));
            }
            _bookService.RemoveBook(book);
            return await _bookService.SaveBookEntityAsync() > 0;
        }

    }
}
