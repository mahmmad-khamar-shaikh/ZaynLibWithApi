using System;
using Microsoft.EntityFrameworkCore;
using Zaynlib.Domain;

namespace Zaynlib.Data
{
    public class ZainlibBooksContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Subscriber> Subscribers { get; set; }
        public ZainlibBooksContext(DbContextOptions<ZainlibBooksContext> options) :base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subscription>().HasKey(s => new { s.SubscriberId, s.BookId });

        }
    }
}
    