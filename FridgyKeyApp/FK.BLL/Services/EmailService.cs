using FK.BLL.Interfaces;
using MailKit.Net.Smtp;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Services
{
    public class EmailService : IEmailService
    {
        async Task IEmailService.SendEmailAsync(string email, string subject, string message)
        {
            MimeMessage emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Администрация сайта", "AnyaTravel@yandex.by"));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.gmail.com", 587, false);
                await client.AuthenticateAsync("annaermakovich2018", "afuhob48");
                await client.SendAsync(emailMessage);

                await client.DisconnectAsync(true);
            }

        }
    }
}
