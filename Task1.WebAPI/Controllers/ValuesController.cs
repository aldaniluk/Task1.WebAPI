using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Task1.WebAPI.Models;

namespace Task1.WebAPI.Controllers
{
    public class ValuesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult GetCurrencyRates()
        {
            List<CurrencyRate> currRates = new List<CurrencyRate>()
            {
                new CurrencyRate(new DateTime(2000, 1, 1), 1, 1),
                new CurrencyRate(new DateTime(2000, 1, 1), 10, 2),
                new CurrencyRate(new DateTime(2001, 1, 1), 100, 2),
                new CurrencyRate(new DateTime(2000, 1, 1), 50, 3),
                new CurrencyRate(new DateTime(2002, 1, 1), 5, 3),
                new CurrencyRate(new DateTime(2001, 1, 1), 25, 4),
                new CurrencyRate(new DateTime(2005, 1, 1), 20, 4),
                new CurrencyRate(new DateTime(2000, 1, 1), 50, 5),
                new CurrencyRate(new DateTime(2000, 1, 1), 80, 6)
            };

            return Json(currRates);
        }

    }
}
