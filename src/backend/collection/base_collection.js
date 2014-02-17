define(function(require, exports, module) {
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

        push: function(data) {
            console.log('pus');
            this.data.push(data);
        },

        pop: function() {
            this.data.pop();
        }
    };

    module.exports = BaseCollection;
});