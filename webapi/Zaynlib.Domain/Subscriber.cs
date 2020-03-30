using System;
using System.Collections.Generic;
using System.Text;

namespace Zaynlib.Domain
{
    public class Subscriber
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public string Email { get; set; }
        public Subscription Subscription { get; set; }
    }
}
