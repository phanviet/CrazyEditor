define(function(require, exports, module) {
    "use strict";
    var Cursor = require('./cursor'),
        Line = require('./line'),
        LineCollection = require('./collection/line_collection');

	var View = function() {
        this.cursors = [new Cursor()];
        this.lineCollection = new LineCollection([new Line()]);
        this.element = null;
	};

	View.prototype = {
		mainCursor: function() {
			return this.cursors[0];
		},

		subCursors: function() {
            return this.cursors.slice(1, this.cursors.length);
		},

        pushLine: function(line) {
            this.lineCollection.push(line);
        },

        popLine: function() {
            this.lineCollection.pop();
        },

		pushCursorIntoLine: function(cursor, line) {
            line.cursors.push(cursor);
		},

		popCursorFromLine: function(line) {
            line.cursors.pop();
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
