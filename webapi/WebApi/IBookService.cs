using System.Collections.Generic;
using BooksApi.Models;

namespace BooksApi.Service
{
    public interface IBookService
    {
        public List<Book> Get();
        public Book Get(string id);
        public Book Create(Book book);
        public Book Update(string id, Book book);
        public void Remove(string id);



    }



}