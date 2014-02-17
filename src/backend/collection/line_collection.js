define(function(require, exports, module) {
    var BaseCollection = require('./base_collection');
    var LineCollection = function(data) {
        BaseCollection.apply(this, [data]);
    };
    LineCollection.prototype = new BaseCollection();
    LineCollection.prototype.constructor = LineCollection;

    module.exports = LineCollection;
});