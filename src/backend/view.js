define(function(require, exports, module) {
    "use strict";
    var Cursor = require('./cursor'),
        Line = require('./line'),
        CursorCollection = require('./collection/cursor_collection'),
        LineCollection = require('./collection/line_collection');

	var View = function() {
        this.cursorCollection = new CursorCollection([new Cursor()]);
        this.lineCollection = new LineCollection([new Line()]);
        this.element = null;
	};

	View.prototype = {
		mainCursor: function() {
			return this.cursorCollection.first();
		},

		subCursors: function() {
            return this.cursorCollection.slice(1, this.cursorCollection.size());
		},

        pushLine: function(line) {
            this.lineCollection.push(line);
        },

        popLine: function() {
            this.lineCollection.pop();
        },

		pushCursorIntoLine: function(cursor, line) {
            line.cursorCollection.push(cursor);
		},

		popCursorFromLine: function(line) {
            return line.cursorCollection.pop();
		},

        bind: function(element) {
            this.element = element;
            return this;
        }
	};

	module.exports = View;
});
