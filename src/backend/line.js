define(function(require, exports, module) {
    "use strict";
    var Buffer = require('./buffer');
    var CursorCollection = require('./collection/cursor_collection');

    var Line = function(buffer) {
        this.buffer = buffer || new Buffer();
        this.cursorCollection = new CursorCollection();
    };

    Line.prototype = {
        size: function() {
            return this.buffer.size();
        }
    };

    module.exports = Line;
});