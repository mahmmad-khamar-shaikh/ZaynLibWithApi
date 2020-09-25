using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZaynlibBookAPI.Models
{
    public class Author
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IEnumerable<string> BookList { get; set; }
    }
}
