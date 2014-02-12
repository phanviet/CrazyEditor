define(function(require, exports, module) {
var Buffer = require('backend/buffer')
var View = function(){

};
 var Line = function(){

};
Line.prototype.cursors = [];
Line.prototype.buffer = function(buffer){
    this.buffer = buffer || new Buffer();
};
Line.prototype.len = function(){
    return this.buffer.size();
};
var Cursor = function(col, row, line){
   this.col = col || 1;
   this.row = row || 1;
   this.x = 40;
   this.y = 0;
   this.line = line;

    this.getX = function(){
    	this.x = this.x + (9 * this.row);
    	return this.x;
    };
    this.getCurrentY = function(){
        return this.y;
    };
    this.getCurrentX = function(){
        return this.x;
    };
    this.getY = function(){
    	this.y = this.y + (16 * this.col);
    	return this.y;
    };
    this.goTo = function(col,row){
    	this.col = col;
    	this.row = row;
        return this.col + this.row;
    };

    this.goToBeginOfView = function(){
    	this.col = 1;
    	this.row = 1;
    	this.x = 40;
    	this.y = 0;
    };
    this.goToEndOfView = function(){
        
    };

    this.goToEndOfLine = function(line){
    	this.goTo(this.line.len() + 1, this.row);
        return this.line.len();
    };
    this.goToFirstOfLine = function(){
    	this.goTo(1, this.row);
    };
    this.bindCursor = function(element){
        this.element = element;
        return element;
    };
    this.showCursor = function(element){
        this.element.removeClass('hide');
        this.element.css({'top': this.getCurrentY() + 'px', 'left' : this.getCurrentX() + 'px'}); 
    };
    this.showClick = function(element){
        this.element.css({'top': this.col + 'px', 'left' : this.row + 'px'});  
    };
    this.hide = function(element){
        this.element.addClass('hide');
    };
    this.goToXY = function(a, b){ //convert x,y to col and row
        this.col = b / (16 * this.col);
        this.row = a / (9 * this.row);
    };
};

View.prototype.cursors = [new Cursor()];
 
View.prototype.mainCursor = function(){
 	return this.cursors[0];
};

View.prototype.subCursor = function(){
 	return this.cursors.splice(0,1);
};

View.prototype.pushCursor = function(cursor){
 	View.prototype.cursors.push(cursor);
};

View.prototype.popCursor = function(){
 	View.prototype.cursors.pop();
};
View.prototype.popAtIndex = function(index){
 	return this.cursors.splice(index,1);
};
module.exports.View = View;
module.exports.Line = Line;
module.exports.Cursor = Cursor;
});