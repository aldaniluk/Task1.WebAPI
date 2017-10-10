using System;

namespace Task1.WebAPI.Models
{
    public class CurrencyRate
    {
        public DateTime Date;
        public decimal Rate;
        public int CurrencyId;

        public CurrencyRate(DateTime date, decimal rate, int currId)
        {
            Date = date;
            Rate = rate;
            CurrencyId = currId;
        }
    }
}