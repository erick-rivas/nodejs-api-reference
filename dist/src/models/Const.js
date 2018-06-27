"use strict";
exports.__esModule = true;
var Lang;
(function (Lang) {
    Lang["EN"] = "EN";
    Lang["ES"] = "ES";
})(Lang || (Lang = {}));
exports.Lang = Lang;
;
var getEnum = function (data, val, def) {
    if (val)
        val = val.toUpperCase();
    for (var d in data)
        if (data[d].toUpperCase() == val)
            return d;
    return def;
};
exports.getEnum = getEnum;
//# sourceMappingURL=Const.js.map