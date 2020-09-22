using System;
using Microsoft.EntityFrameworkCore;
using Zaynlib.Domain;

namespace Zaynlib.Data
{
    public class ZainlibBooksStoreContext : DbContext
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Subscriber> Subscribers { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }

        public ZainlibBooksStoreContext(DbContextOptions<ZainlibBooksStoreContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subscription>().HasKey(s => new { s.SubscriberId, s.BookId });

        }
    }
}
