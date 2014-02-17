define(function(require, exports, module) {
    "use strict";
    var Buffer = require('./buffer');

    var Line = function(buffer) {
        this.buffer = buffer || new Buffer();
    };

    Line.prototype = {
        size: function() {
            return this.buffer.size();
        }
    };

    module.exports = Line;
});