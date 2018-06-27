"use strict";
exports.__esModule = true;
require("module-alias/register");
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.sendOk = function (res) {
        res.send();
    };
    Util.sendObject = function (res, result) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(result ? result : {}));
    };
    Util.sendList = function (res, result) {
        res.setHeader("Content-Type", "application/json");
        var out = [];
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var r = result_1[_i];
            out.push(r.toJSON());
        }
        res.send(JSON.stringify(out ? out : []));
    };
    Util.sendModel = function (res, result) {
        res.setHeader("Content-Type", "application/json");
        res.send(JSON.stringify(result ? result.toJSON() : {}));
    };
    return Util;
}());
exports["default"] = Util;
//# sourceMappingURL=util.js.map