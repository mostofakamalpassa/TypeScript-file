"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logVersion = void 0;
var globals_1 = require("./types/globals");
function logVersion() {
    console.log("Version: " + globals_1.version); // Ok
}
exports.logVersion = logVersion;
