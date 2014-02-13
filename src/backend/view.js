define(function(require, exports, module) {

	var Buffer = require('backend/buffer');
    var Line = function(){

    };
	var View = function() {

	};
    var Line = function(){

    }
	Line.prototype.cursors = [];
	Line.prototype.buffer = function(buffer){
    	this.buffer = buffer || new Buffer();
	};
	Line.prototype.len = function(){
    	return this.buffer.size();
	};

	var Cursor = function(col, row, view, line) {
		this.col = col || 1;
		this.row = row || 1;
		this.x = 40;
		this.y = 0;

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
			alert(x+":"+y);
			this.convertToColRow(x, y);
			var col = 12;
			var row = 2;
			this.goTo(col, row);
		};
        this.bindCursor = function(){
            return this;
        };
        this.bindCursor = function(element){
            this.element = element;
            return this;
        };

        this.showCursor = function(element){
            this.element.removeClass('hide');
            this.element.css({'top': this.getCurrentY() + 'px', 'left' : this.getCurrentX() + 'px'}); 
    	};

    	this.goToXY = function(a, b){ //convert x,y to col and row
        	this.col = b / (16 * this.col);
        	this.row = a / (9 * this.row);
    	};

		this.convertToColRow = function(x, y) {
			//convert
			
		};

		this.getY = function() {
			this.y = this.y + (16 * this.col);
			return this.y;
		};

		this.goTo = function(col, row) {
			this.col = col;
			this.row = row;
            return this.col + this.row;
		};

		this.goToEndOfView = function() {
             //this.goTo(this.col,this.row);
		};

		this.goToBeginOfView = function() {
			this.goTo(1, 1);
		};

		this.goToEndOfLine = function(line) {
			this.goTo(this.line.len() + 1, this.row);
            return this.line.len();
		};

		this.goToFirstOfLine = function() {
			this.goTo(1, this.row);
		};
	};


	
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
	View.prototype.popAtIndex = function(index){
 	return this.cursors.splice(index,1);
	};
	module.exports.View = View;
	module.exports.Line = Line;
	module.exports.Cursor = Cursor;
	

});