
var Webcall = function (settings) {

    var options = settings || {};
    var key = options['key'] || null;
    var baseUrl = 'http://call.mobilon.ru/';

    var prepareUrl = function (opts) {
        var qs = '';
        for (var prop in opts) {
            if (opts.hasOwnProperty(prop)) {
                qs += prop + '=' + opts[prop] + '&';
            };
        }; 

        return [baseUrl, key, '/save?', qs].join("");
    };

    var makeOrder = function (opts) {
        if (key) {
            var url = prepareUrl(opts);
            return fetch(url);
        } else {
            return Promise.reject('No key');
        }
    };

    return {
        makeOrder: makeOrder
    };

};