"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWindowVersion = void 0;
function logWindowVersion() {
    console.log("Window version is: " + window.myVersion);
    window.alert("Built-in window types still work! Hooray!"); /*  */
}
exports.logWindowVersion = logWindowVersion;
function logData(data) {
    console.log("data version " + data.version);
}
logData(globallyDeclared);
// logData(locallyDeclared);
// Error: Cannot find name 'locallyDeclared'.
