define(function(require, exports, module) {
    "use strict";
    var Buffer = require('./buffer');

    var Line = function(buffer) {
        this.buffer = buffer || new Buffer();
        this.element = null;
    };

    Line.prototype = {
        size: function() {
            return this.buffer.size();
        },

        bind: function(element) {
            this.element = element;
            return this;
        },

        charWidth: function() {
            var el = this.element;
        }
    };

    module.exports = Line;
});