define(function(require, exports, module) {
    var Utils = require('./utils');
    var utils = new Utils();

    var Region = function(a, b) {
        "use strict";
        var self = this;
        self.a = a || 0;
        self.b = b || 0;

        self.toString = function() {
            return '(' + a + ', ' + b + ')';
        };

        self.begin = function() {
            return utils.min(self.a, self.b);
        };

        self.end = function() {
            return utils.max(self.a, self.b);
        };

        self.isContain = function(position) {
            return position >= self.begin() && position < self.end();
        };

        self.isEmpty = function() {
            return self.a == self.b;
        };

        self.size = function() {
            return self.end() - self.begin();
        };

        self.cover = function(other) {
            return new Region(utils.min(self.begin(), other.begin()), utils.max(self.end(), other.end()));
        };

        self.clip = function(other) {
            return new Region(utils.clamp(self.a, other.begin(), other.end()),
                    utils.clamp(self.b, other.begin(), other.end()));
        };
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
