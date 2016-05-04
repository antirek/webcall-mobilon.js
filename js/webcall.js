
var Webcall = function (settings) {

    var options = settings || {};
    var key = options['key'] || null;
    var baseUrl = 'http://call.mobilon.ru/';

    var prepareOrderUrl = function (opts) {
        var qs = '';
        for (var prop in opts) {
            if (opts.hasOwnProperty(prop)) {
                qs += prop + '=' + opts[prop] + '&';
            };
        }; 

        return [baseUrl, key, '/save?', qs].join("");
    };

    var checkKey = function () {
        if (!key) {
            return Promise.reject('No key');
        }
    };

    var makeOrder = function (opts) {
        checkKey();

        var url = prepareOrderUrl(opts);
        
        return fetch(url);
    };

    var getConfig = function () {
        checkKey();

        var subUrl = 'api/config/';
        var url = [baseUrl, subUrl, key].join("");

        return fetch(url);
    };

    var getStatus = function (callid) {
        checkKey();

        var subUrl = 'api/status/';
        var url = [baseUrl, subUrl, callid].join("");

        return fetch(url);
    };

    return {
        makeOrder: makeOrder,
        getConfig: getConfig,
        getStatus: getStatus
    };
};