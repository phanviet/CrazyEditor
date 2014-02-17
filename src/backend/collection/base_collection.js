define(function(require, exports, module) {
    var Utils = require('../utils');
    var utils = new Utils();

    var BaseCollection = function(data) {
        this.data = [];

        if (data instanceof Array) {
            this.data = data;
        };
    };

    BaseCollection.prototype = {
        size: function() {
            return this.data.length;
        },

        first: function() {
            return this.data[0];
        },

        last: function() {
            return this.data[this.size() - 1];
        },

        push: function(data) {
            this.data.push(data);
        },

        pop: function() {
            return this.data.pop();
        },

        slice: function(from, to) {
            var from = utils.clamp(0, from, this.size());
            var to = utils.clamp(0, to, this.size());
            return this.data.slice(from, to);
        }
    };

    module.exports = BaseCollection;
});