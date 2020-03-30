using System;

namespace Zaynlib.Domain
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public string Author { get; set; }
        public bool IsAvailable { get; set; }
        public Subscription Subscription { get; set; }
    }
}
