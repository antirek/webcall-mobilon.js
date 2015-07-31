
var Webcall = function (settings) {
    var options = settings || {};
    var key = options['key'] || null;
    var base_url = 'http://call.mobilon.ru/';

    var prepareUrl = function (opts) {
        var qs = '';
        for (var prop in opts) {
            if (opts.hasOwnProperty(prop)) {
                qs += prop + '=' + opts[prop];
            };
        }; 

        return [base_url, key, '/save?', qs].join("");
    };

    var makeOrder = function (opts) {
        var url = prepareUrl(opts);
        return fetch(url);        
    };

    return {
        makeOrder: makeOrder
    }
};