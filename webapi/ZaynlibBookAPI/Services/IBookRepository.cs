using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zaynlib.Domain;

namespace ZaynlibBookAPI.Services
{
    public interface IBookRepository
    {
        public Task<IEnumerable<Book>> GetBooksAsync();
        public Task<Book> GetBookAsync(Guid bookId);
        public void CreateBook(Book book);
        public void UpdateBook(Guid bookId, Book bookToUpdate);
        public void RemoveBook(Book bookToRemove);
        public Task<int> SaveBookEntityAsync();

    }
}
