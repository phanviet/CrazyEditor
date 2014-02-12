define(function(require, exports, module) {
    var Buffer = require('../../src/backend/buffer.js'),
    	buffer = new Buffer(),
        View = require('../../src/backend/view.js'),
        view = new View.View(),
        line = new View.Line();
        cursor = new View.Cursor(1,1,'hello');
  		
     QUnit.test("getX function test", function() {
        QUnit.equal(cursor.getX(), 49);
     });
     QUnit.test("getY function test", function() {
        QUnit.equal(cursor.getY(), 16);
     });
      QUnit.test("goTo function test", function() {
        QUnit.equal(cursor.goTo(2,2), 4);
     });
     QUnit.test("goToEndOfLine function test", function() {
     	cursor = new View.Cursor(1, 1, line);
     	buffer.data = 'hello word';
     	line.buffer(buffer);
     	console.log(line.len());
        QUnit.equal(cursor.goToEndOfLine(line), 10);
     });
	/*QUnit.test("mainCursor function test", function() {
        QUnit.equal(view.mainCursor(), [new Cursor()]);
     });*/
 });