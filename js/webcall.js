
var Webcall = function (settings) {

    var options = settings || {};
    var key = options['key'] || null;
    var baseUrl = options['baseUrl'] || 'http://call.mobilon.ru/';

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

    var makeRequest = function (url) {
        return fetch(url).then(function (response) {
            return response.json();
        });
    };

    var makeOrder = function (opts) {
        checkKey();

        var url = prepareOrderUrl(opts);
        
        return makeRequest(url);
    };

    var getConfig = function () {
        checkKey();

        var subUrl = 'api/config/';
        var url = [baseUrl, subUrl, key].join("");

        return makeRequest(url);
    };

    var getStatus = function (opts) {
        if (!opts.callid) {
            return Promise.reject('No callid');
        }
        checkKey();

        var subUrl = 'api/status/';
        var url = [baseUrl, subUrl, opts.callid].join("");

        return makeRequest(url);
    };

    return {
        makeOrder: makeOrder,
        getConfig: getConfig,
        getStatus: getStatus
    };
};