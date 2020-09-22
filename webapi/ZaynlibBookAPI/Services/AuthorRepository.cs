using Microsoft.EntityFrameworkCore;
using SQLitePCL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zaynlib.Data;
using Zaynlib.Domain;

namespace ZaynlibBookAPI.Services
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly ZainlibBooksStoreContext _context;

        public AuthorRepository(ZainlibBooksStoreContext context)
        {
            _context = context?? throw new ArgumentNullException(nameof(context));
        }
        public void CreateAuthor(Author author)
        {
          if(author == null)
            {
                throw new ArgumentNullException(nameof(author));
            }
            _context.Authors.Add(author);
        }

        public async Task<Author> GetAuthorAsync(Guid authorId)
        {
            return await  _context.Authors.Include(auth => auth.Books)
                 .Where(author => author.Id == authorId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Author>> GetAuthorsAsync()
        {
            return await _context.Authors.Include(author => author.Books).ToListAsync();
        }

        public void RemoveAuthor(Author authorToRemove)
        {
            _context.Authors.Remove(authorToRemove);
        }

        public async Task<int> SaveAuthorAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void UpdateAuthor(Guid authorId, Author authortoUpdate)
        {
            if (null == authortoUpdate)
            {
                throw new ArgumentNullException(nameof(authortoUpdate));
            }
        }

    }
}
