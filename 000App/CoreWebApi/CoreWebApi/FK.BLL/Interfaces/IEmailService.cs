using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Interfaces
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
