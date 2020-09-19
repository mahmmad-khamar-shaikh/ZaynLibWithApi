using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Zaynlib.Domain
{
    [Table("Subscription")]
    public class Subscription
    {

        public Guid BookId { get; set; }
        public Guid SubscriberId { get; set; }
        public Book Book { get; set; }
        public Subscriber Subscriber { get; set; }
    }
}
