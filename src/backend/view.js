define(function(require, exports, module) {
	var Buffer = require('backend/buffer');

	var View = function() {

	};

	var Cursor = function(col, row, view, line) {
		this.col = col || 1;
		this.row = row || 1;
		this.x = 40;
		this.y = 1;

		this.view = view || new View();
		this.line = line || new Line();

		this.getX = function() {
			this.x = this.x + (9 * this.row);
			return this.x;
		};

		this.bind = function(element) {
			this.element = element;
			return this.element;
		};

		this.show = function() {
			this.element.removeClass('hide');
		};

		this.hide = function() {
			this.element.addClass('hide');
		};

		this.goToWithXY = function(x, y) {
			//alert(x+":"+y);
			this.convertToColRow(x, y);
			var col=12;
			var row=2;
			this.goTo(col, row);
		};

		this.convertToColRow = function(x, y) {
			this.col= x/40;
			this.row= y/1;
			
		};

		this.getY = function() {
			this.y = this.y + (16 * this.col);
			return this.y;
		};

		this.goTo = function(col, row) {
			this.col = col;
			this.row = row;
		};

		this.goToEndOfView = function() {
             this.goTo(this.col,this.row);
		};

		this.goToBeginOfView = function() {
			this.goTo(1, 1);
		};

		this.goToEndOfLine = function() {
			this.goTo(this.line.len() + 1, this.row);
		};

		this.goToFirstOfLine = function() {
			this.goTo(1, this.row);
		};
	};


	var Line = function(buffer) {
		this.cursors = [];
		this.buffer = buffer || new Buffer();
		this.number = 1;

		this.len = function() {
			return this.buffer.size();
		};
	}

	// var CursorSet = function() {
	// 	this.cursors = [];
	// 	this.

	// }

	View.prototype.cursors = [new Cursor()];


	View.prototype.mainCursor = function() {
		return this.cursors[0];
	};

	View.prototype.subCursors = function() {
		// return this.cursors.splice(1,)
	};

	View.prototype.pushCursor = function(cursor) {
		View.prototype.cursors.push(cursor);
	};

	View.prototype.popCursor = function(cursor) {
		View.prototype.cursors.pop();
	};

	View.prototype.popCursorAt = function(index) {
		return;
	};
	module.exports = View;
});