using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FK.Models
{
    public class EventLog
    {
        [Key]
        public int Id { get; set; }

        public int EventId { get; set; }

        public string LogLevel { get; set; }

        public string Message { get; set; }

        public DateTime CreatedTime { get; set; }
    }
}
