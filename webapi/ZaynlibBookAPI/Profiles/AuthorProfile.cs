using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ZaynlibBookAPI.Profiles
{
    public class AuthorProfile : Profile
    {
        public AuthorProfile()
        {
            CreateMap<Zaynlib.Domain.Author, Models.AuthorDTO>()
                   .ForMember(outputEntity =>
                   outputEntity.BookList, dbAuthorEntity => dbAuthorEntity.MapFrom(src => src.Books.Select(b => b.Title).ToList()));

        }

    }
}
