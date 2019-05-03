using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;


namespace FK.BLL.Interfaces
{
    public interface ISessionHelper
    {
        T GetObjectFromJson<T>(ISession session, string key);
        void SetObjectAsJson(ISession session, string key, object value);
    }
}
