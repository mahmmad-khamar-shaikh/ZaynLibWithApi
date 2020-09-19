using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Zaynlib.Domain
{
    [Table("Books")]
    public class Book
    {

        [Key]
        public Guid Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Title { get; set; }
        
        [Required]
        public string Category { get; set; }

        [Required]
        public bool IsAvailable { get; set; }

        [MaxLength(2000)]
        public string Description { get; set; }

        public Guid AuthorId { get; set; }
        
        public Author Author { get; set; }
        
        public Subscription Subscription { get; set; }
    }
}
