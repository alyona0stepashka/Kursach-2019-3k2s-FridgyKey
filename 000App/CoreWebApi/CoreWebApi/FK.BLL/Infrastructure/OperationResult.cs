using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Infrastructure
{
    public class OperationResult
    {
        public bool Result { get; set; }
        public IEnumerable<string> Errors { get; set; }

        public OperationResult()
        {
            Errors = new List<string>();
        }
    }
}
