using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zaynlib.Data;
using Zaynlib.Domain;
using ZaynlibBookAPI.Services;

namespace ZaynlibBookAPI.Services
{
    public class BookRepository : IBookRepository
    {
        private readonly ZainlibBooksContext _context;

        

        public BookRepository(ZainlibBooksContext context)
        {
            this._context = context;
        }

        public async Task<IEnumerable<Book>> GetBooksAsync()
            => await _context.Books.ToListAsync();

        public async Task<Book> GetBookAsync(Guid id) =>
            await _context.Books.Where(book => book.Id == id).FirstOrDefaultAsync();

        public void CreateBook(Book book)
        {

            if(book== null)
            {
                throw new ArgumentNullException(nameof(book));
            }
            _context.Books.Add(book);
           
        }

        public void UpdateBook(Guid id, Book bookToUpdate)
        {
            if(bookToUpdate == null)
            {
                throw new ArgumentNullException(nameof(bookToUpdate));
            }
            _context.Entry(bookToUpdate).State = EntityState.Modified;
            
        }
        public void RemoveBook(Book bookToRemove)
        {
            _context.Books.Remove(bookToRemove);
        }

        public async Task<bool> BookExists(Guid bookdId)
        {
            return await _context.Books.AnyAsync(book => book.Id == bookdId);
        }

        public async Task<int> SaveBookEntityAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
