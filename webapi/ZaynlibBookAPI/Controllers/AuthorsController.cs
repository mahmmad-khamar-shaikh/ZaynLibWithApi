using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zaynlib.Data;
using Zaynlib.Domain;
using ZaynlibBookAPI.Filters;
using ZaynlibBookAPI.Services;

namespace ZaynlibBookAPI.Controllers
{
    [Route("api/Authors")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly ZainlibBooksStoreContext _authorDbContext;
        private readonly IAuthorRepository _authorRepository;
        private readonly IMapper _mapper;

        public AuthorsController(ZainlibBooksStoreContext context,
            IAuthorRepository authorRepository, IMapper mapper)
        {
            _authorDbContext = context ?? throw new ArgumentNullException(nameof(context));
            _authorRepository = authorRepository ?? throw new ArgumentNullException(nameof(authorRepository));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet]
        [AuthorsResultFilter]
        public async Task<IActionResult> GetAuthors()
        {
            var authorList = await _authorRepository.GetAuthorsAsync();
            if (authorList == null)
            {
                return NotFound();
            }
            return Ok(authorList);
        }

        [HttpGet("{id}")]
        [AuthorResultFilter]
        public async Task<ActionResult<Author>> GetAuthor(Guid id)
        {
            var author = await _authorRepository.GetAuthorAsync(id);
            if(null == author)
            {
                return NotFound();
            }
            return Ok(author);
        }
    }
}
