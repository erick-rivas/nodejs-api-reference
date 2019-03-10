require("module-alias/register");
var Generators = require("../dist/src/support/controllers/Generators");
new Generators["default"]().generate();
console.log("Done!... Check /assets/dev/gen dir");