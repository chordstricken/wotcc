/**
 * Local Storage database
 * @type {{set: DB.set, get: DB.get, del: DB.del}}
 */
const DB = {
    set(key, val) {
        localStorage.setItem(key, json_encode(val));
    },
    get(key) {
        return json_decode(localStorage.getItem(key));
    },
    del(key) {
        localStorage.removeItem(key);
    },
};

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

/**
 * jQuery Ready Function
 */
$(function() {

    // On Android devices, selecting a text input compresses the screen height as the keyboard appears.
    var $metaViewport = $('meta[name=viewport]'),
        vpContent     = $metaViewport.attr('content');

    $metaViewport.attr('content', vpContent.replace(/height=[\d\.]+px,?/, '') + ', height=' + window.outerHeight + 'px');

});