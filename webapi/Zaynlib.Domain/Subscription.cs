using System;
using System.Collections.Generic;
using System.Text;

namespace Zaynlib.Domain
{
    public class Subscription
    {
        public int BookId { get; set; }
        public int SubscriberId { get; set; }
        public Book Book { get; set; }
        public Subscriber Subscriber { get; set; }
    }
}
