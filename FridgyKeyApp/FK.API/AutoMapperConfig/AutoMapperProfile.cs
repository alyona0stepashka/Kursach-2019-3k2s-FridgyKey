using AutoMapper;
using FK.API.ViewModels.Auth;
using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.AutoMapperConfig
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            // Add as many of these lines as you need to map your objects
            CreateMap<ApplicationUser, SignInViewModel>().PreserveReferences().ReverseMap(); 
            CreateMap<ApplicationUser, SignUpViewModel>().PreserveReferences().ReverseMap(); 
        }
    }
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile(new AutoMapperProfile());
            });
        }
    }
}
