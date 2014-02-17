define(function(require, exports, module) {
    var BaseCollection = require('./base_collection');

    var CursorCollection = function(data) {
        BaseCollection.apply(this, [data]);
    };
    CursorCollection.prototype = new BaseCollection();
    CursorCollection.prototype.constructor = CursorCollection;

    module.exports = CursorCollection;
});