using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Zaynlib.Data;
using Zaynlib.Domain;
using ZaynlibBookAPI.Service;

namespace ZaynlibBookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly ZainlibBooksContext _context;
        private readonly BookRepository _bookService;

        public BooksController(ZainlibBooksContext context, BookRepository bookService)
        {
            _context = context;
            _bookService = bookService;
        }

        // GET: api/Books
        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var bookList = await _bookService.GetBooksAsync();
            return Ok(bookList);
        }

        // GET: api/Books/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(Guid id)
        {
            var book = await _bookService.GetBookAsync(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        // PUT: api/Books/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(Guid id, Book book)
        {
            if (id != book.Id)
            {
                return BadRequest();
            }

            _context.Entry(book).State = EntityState.Modified;

            try
            {
                _bookService.UpdateBook(id, book);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (! await _bookService.BookExists(id))
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

     

        // POST: api/Books
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        //[HttpPost]
        //public  Task<ActionResult<Book>> PostBook(Book book)
        //{
        //    _bookService.CreateBook(book);
        //    return CreatedAtAction("GetBook", new { id = book.Id }, book);
        //}

        //// DELETE: api/Books/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Book>> DeleteBook(Guid id)
        //{
        //    var book = await _bookService.Get(id);
        //    if (book == null)
        //    {
        //        return NotFound();
        //    }
        //    await _bookService.Remove(book);
        //    return book;
        //}
      
    }
}
