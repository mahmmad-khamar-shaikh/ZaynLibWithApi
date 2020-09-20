using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZaynlibBookAPI.Profiles
{
    public class BookPrfile : Profile
    {
        public BookPrfile()
        {
            CreateMap<Zaynlib.Domain.Book, Models.Book>()
                .ForMember(outputEntity => outputEntity.Author, dbEntityBook => dbEntityBook.MapFrom(src => $"{src.Author.FirstName} {src.Author.LastName}"));

            CreateMap<Models.BookCreation, Zaynlib.Domain.Book>();
        }

    }
}
