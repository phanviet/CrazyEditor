define(function(require, exports, module) {
    "use strict";
    var Utils = require('./utils');
    var utils = new Utils();

    var Region = function(a, b) {
        this.a = a || 0;
        this.b = b || 0;
    };

    Region.prototype = {
        toString: function() {
            return '(' + a + ', ' + b + ')';
        },

        begin: function() {
            return utils.min(this.a, this.b);
        },

        end: function() {
            return utils.max(this.a, this.b);
        },

        isContain: function(position) {
            return position >= this.begin() && position < this.end();
        },

        isEmpty: function() {
            return this.a === this.b;
        },

        size: function() {
            return this.end() - this.begin();
        },

        cover: function(other) {
            return new Region(utils.min(this.begin(), other.begin()), utils.max(this.end(), other.end()));
        },

        clip: function(other) {
            return new Region(utils.clamp(this.a, other.begin(), other.end()),
                    utils.clamp(this.b, other.begin(), other.end()));
        }
    };

    // var RegionSet = function() {
    //     var self = this;
    //     self.regions = [];

    //     self.adjust = function(position, delta) {
    //         self.regions.forEach(function(region) {
    //             if (region.a > position) {
    //                 region.a += delta;
    //             }
    //             if (region.b > position) {
    //                 region.b += delta;
    //             }
    //         });
    //     };
    // };

    module.exports = Region;
});
