define(function(require, exports, module) {
    "use strict";
    var Utils = require('./utils');
    var Region = require('./region');
    var utils = new Utils();

    var Buffer = function() {
        this.data = '';
        this.callbacks = [];
    };

    Buffer.prototype = {
        size: function() {
            return this.data.length;
        },

        subStr: function(region) {
            var from = utils.clamp(region.begin(), 0, this.size());
            var to = utils.clamp(region.end(), 0, this.size());
            return this.data.substring(from, to);
        },

        notify: function(position, delta) {
            this.callbacks.forEach(function(callback) {
                callback.apply(this, [position, delta]);
            });
        },

        insert: function(position, value) {
            this.data = this.subStr(new Region(0, position)) + value
                    + this.subStr(new Region(position, this.size()));
            this.notify(position, value.length);
        },

        erase: function(position, length) {
            if (position < 0) {
                position = 0;
            }
            if (length < 0) {
                length = 0;
            }
            this.data = this.subStr(new Region(0, position))
                    + this.subStr(new Region(position + length, this.size()));
            this.notify(position, -length);
        },

        replace: function(position, length, value) {
            this.erase(position, length);
            this.insert(position, value);
        }
    };

    module.exports = Buffer;
});
