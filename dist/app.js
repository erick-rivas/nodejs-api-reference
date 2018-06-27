"use strict";
exports.__esModule = true;
require("module-alias/register");
var bodyParser = require("body-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var cors = require("cors");
var dotenv = require("dotenv");
var express_1 = require("express");
var routes_1 = require("@http/routes");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.app.use(logger("dev"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        dotenv.config();
        var rootDir = path.dirname(require.main.filename) + "/../";
        this.app.use('/resources', express.static(rootDir + 'assets/public'));
        this.app.use('/docs', express.static(rootDir + 'docs'));
        this.app.use("/v1", new v1().init());
        var port = this.normalizePort(process.env.PORT || "4000");
        this.server = this.app.listen(port);
        console.log("Listening port: " + port);
    }
    App.start = function () {
        return new App();
    };
    App.prototype.normalizePort = function (val) {
        var port = parseInt(val, 10);
        if (isNaN(port))
            return val;
        if (port >= 0)
            return port;
        return false;
    };
    return App;
}());
exports.App = App;
//v1
var v1 = /** @class */ (function () {
    function v1() {
        this.router = express_1.Router();
    }
    v1.prototype.init = function () {
        this.router.use("/", new routes_1["default"]().init());
        return this.router;
    };
    return v1;
}());
//# sourceMappingURL=app.js.map