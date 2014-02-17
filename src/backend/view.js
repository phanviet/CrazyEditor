define(function(require, exports, module) {
    var Cursor = require('./cursor');

	var View = function() {
        this.cursors = [new Cursor()];
        this.lines = [];
        this.element = null;
	};

	View.prototype = {
		mainCursor: function() {
			return this.cursors[0];
		},

		subCursors: function() {
            return this.cursors.slice(1, this.cursors.length);
		},

		pushCursor: function(cursor) {
            this.cursors.push(cursor);
		},

		popCursor: function(cursor) {
			this.cursors.pop();
		},

        popAt: function(index) {
        	return this.cursors.splice(index, 1);
        },

        bind: function(element) {
            this.element = element;
            return this;
        }
	};

	module.exports = View;
});
