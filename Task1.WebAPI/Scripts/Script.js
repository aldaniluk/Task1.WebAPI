var currencyRateModule = (function () {
    var DATE = "01.01.2003";

    $(document).ready(function () {
        _getCurrencyRates();
    });

    var _getCurrencyRates = function() {
        $.ajax({
            url: '/api/values/',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                _fillTags(data);
            }
        })
    };

    var _fillTags = function(data) {
        var currencies = { 1: "USD", 2: "RUB", 3: "BYN", 4: "EUR", 5: "GBP", 6: "PLN" };

        for (var i = 1; i <= Object.keys(currencies).length; i++) {
            $("#currencies").append("<p>From " + currencies[1] + " to " + currencies[i] +
                " > " + _conversionService(data, 1, 1, i, DATE) + "</p>");
        }
    }

    var _conversionService = function(rates, value, currencyFrom, currencyTo, date) {
        var currFrom, currTo;
        var currFromFound = false, currToFound = false;

        for (var i = 0; i < rates.length; i++) {
            if (!currFromFound && rates[i].CurrencyId == currencyFrom) {
                if (currFrom == undefined)
                    currFrom = rates[i];
                if (new Date(rates[i].Date).valueOf() == new Date(date).valueOf()) {
                    currFromFound = true;
                    currFrom = rates[i];
                }
                if (new Date(currFrom.Date) < new Date(rates[i].Date) &&
                    new Date(date) > new Date(rates[i].Date)) {
                    currFrom = rates[i];
                }
            }
            if (!currToFound && rates[i].CurrencyId == currencyTo) {
                if (currTo == undefined)
                    currTo = rates[i];
                if (new Date(rates[i].Date).valueOf() == new Date(date).valueOf()) {
                    currToFound = true;
                    currTo = rates[i];
                }
                if (new Date(currTo.Date) < new Date(rates[i].Date) &&
                    new Date(date) > new Date(rates[i].Date)) {
                    currTo = rates[i];
                }
            }
        }

        return value / currFrom.Rate * currTo.Rate;
    }
}());