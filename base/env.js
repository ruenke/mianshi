var _global = (function () { return this || (0, eval)('this'); }());

if (typeof module !== "undefined" && module.exports) {
    console.log("current env is node")
} else if (typeof define === "function" && define.amd) {
    console.log("current env is node")
} else {
    !('plugin' in _global) && (_global.plugin = plugin);
}