using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Zaynlib.Domain;

namespace ZaynlibBookAPI.Services
{
    public interface IAuthorRepository
    {
        public Task<IEnumerable<Author>> GetAuthorsAsync();
        public Task<IEnumerable<Author>> GetAuthorsByIdsAsync(IEnumerable<Guid> Ids);
        public Task<Author> GetAuthorAsync(Guid authorId);
        public void CreateAuthor(Author author);
        public void RemoveAuthor(Author authorToRemove);
        public void UpdateAuthor(Guid authorId, Author author);
        public Task<int> SaveAuthorAsync();
    }
}
