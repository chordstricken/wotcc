/**
 * Local Storage database
 * @type {{set: DB.set, get: DB.get, del: DB.del}}
 */
var DB = {
    set: function(key, val) {
        localStorage.setItem(key, json_encode(val));
    },
    get: function(key) {
        return json_decode(localStorage.getItem(key));
    },
    del: function(key) {
        localStorage.removeItem(key);
    },
};

var _asynccache = {};
function loadStylesheet(path) {
    path = encodeURI(path);
    if (_asynccache[path]) return;
    $('body').append("<link rel='stylesheet' type='text/css' href='" + path + "'>");
    _asynccache[path] = true;
}
function loadScript(path) {
    path = encodeURI(path);
    if (_asynccache[path]) return;
    $('body').append("<script type='text/javascript' src='" + path + "'></script>");
    _asynccache[path] = true;
}

/**
 * Selects the element
 * @param $event
 */
function selectText($event) {
    $event.target.select();
}

/**
 * Generates a page-unique string
 * @returns {string}
 */
function uniqueId() {
    return 'r' + Math.random().toString().replace(/^\d+\./, '');
}

/**
 * Safely encodes an object
 * @param param
 * @returns {null}
 */
function json_encode(param) {
    try {
        return JSON.stringify(param);
    } catch (e) {
        console.error(e);
        return null;
    }
}
/**
 * Safely decodes a json string
 * @param param
 * @returns {null}
 */
function json_decode(param) {
    try {
        return JSON.parse(param);
    } catch (e) {
        return null;
    }
}

/**
 * Clones an object
 * @param obj
 */
function clone(obj) {
    return $.extend(true, {}, obj);
}

/**
 * @param obj
 * @returns {*}
 */
function count(obj) {
    return isObject(obj) ? Object.keys(obj).length : 0;
}

/**
 * Decodes html entities
 * @param text
 * @returns {*|jQuery}
 */
function htmlEntityDecode(text) {
    return $('<textarea />').html(text).text();
}

/**
 * Prepends http:// to a URL if it doesn't exist
 * @param url
 */
function addHttp(url) {
    if (url.substr(0, 4) !== 'http')
        return 'http://' + url;
    return url;
}

/**
 * Converts a timestamp into date.toLocaleString
 * @param timestamp
 * @returns {*}
 */
function getDateTime(timestamp) {
    if (!timestamp || timestamp < 2000)
        return '';

    var d = new Date(timestamp * 1000);
    return d.toLocaleString()
}

/**
 * Rounds a Number to {precision} decimal places (default 2)
 * @param num
 * @param precision
 * @returns {string}
 */
function numberFormat(num, precision) {
    precision = precision === undefined ? 2 : precision;
    return parseFloat(num).toFixed(precision)
}

/**
 * Formats a Number into a readable time-elapsed string (e.g. 3d 12h 15m 32s)
 * @param seconds
 * @returns {*}
 */
function timeFormat(seconds) {
    var res = '';
    if (!seconds)
        return 'N/A';

    if (seconds >= 86400) {
        var days = Math.floor(seconds / 86400);
        seconds -= 86400 * days;
        res += days + 'd';
    }

    if (seconds >= 3600) {
        var hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;
        res += ' ' + hours + 'h';
    }

    if (seconds >= 60) {
        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        res += ' ' + minutes + 'm';
    }

    if (seconds >= 0)
        res += ' ' + seconds + 's';

    return res.trim();
}

/**
 * @param param
 * @returns {boolean}
 */
function isNumber(param) {
    return typeof param === "number";
}
/**
 * @param param
 * @returns {boolean}
 */
function isObject(param) {
    return typeof param === "object";
}
/**
 * @param param
 * @returns {boolean}
 */
function isString(param) {
    return typeof param === "string";
}

/**
 * Object.values replacement
 * @param obj
 * @returns {*}
 */
function objectValues(obj) {
    return Object.keys(obj).reduce(function(total, curr) {
        total.push(obj[curr]);
        return total;
    }, []);
}