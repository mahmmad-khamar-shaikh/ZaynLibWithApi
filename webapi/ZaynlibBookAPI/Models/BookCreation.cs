﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZaynlibBookAPI.Models
{
    public class BookCreation
    {
        public Guid AuthorId { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public bool IsAvailable { get; set; }
        public string Category { get; set; }


    }
}
