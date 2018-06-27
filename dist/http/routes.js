"use strict";
exports.__esModule = true;
require("module-alias/register");
var express_1 = require("express");
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
    }
    Routes.prototype.init = function () {
        return this.router;
    };
    return Routes;
}());
exports["default"] = Routes;
//# sourceMappingURL=routes.js.map