define(function(require, exports, module) {
    "use strict";
    var Utils = function() {
        this.min = function(a, b) {
            if (a < b) {
                return a;
            }

            return b;
        };

        this.max = function(a, b) {
            if (a > b) {
                return a;
            }

            return b;
        };

        this.clamp = function(a, b, c) {
            return this.max(a, this.min(b, c));
        };
    };

    module.exports = Utils;
});

