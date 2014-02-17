define(function(require, exports, module) {
    var Buffer = require('../../src/backend/buffer.js'),
        Region = require('../../src/backend/region.js'),
        Action = require('../../src/backend/action.js');
        buffer = new Buffer();

    QUnit.test("insertAction function test", function() {
        buffer.data = "hello";
        var insert = new Action.InsertAction(buffer, 0, "e");
        insert.apply();
        QUnit.equal(buffer.data, "ehello");
        insert.undo();
        QUnit.equal(buffer.data, "hello");

        buffer.data = "hello";
        insert = new Action.InsertAction(buffer, -1, "e");
        insert.apply();
        QUnit.equal(buffer.data, "ehello");
        insert.undo();
        QUnit.equal(buffer.data, "hello");

        buffer.data = "hello";
        insert = new Action.InsertAction(buffer, 1, "e");
        insert.apply();
        QUnit.equal(buffer.data, "heello");
        insert.undo();
        QUnit.equal(buffer.data, "hello");

        buffer.data = "hello";
        insert = new Action.InsertAction(buffer, 5, "e");
        insert.apply();
        QUnit.equal(buffer.data, "helloe");
        insert.undo();
        QUnit.equal(buffer.data, "hello");

        buffer.data = "hello";
        insert = new Action.InsertAction(buffer, 6, "e");
        insert.apply();
        QUnit.equal(buffer.data, "helloe");
        insert.undo();
        QUnit.equal(buffer.data, "hello");

        buffer.data = "hello";
        insert = new Action.InsertAction(buffer, 4, "e");
        insert.apply();
        QUnit.equal(buffer.data, "helleo");
        insert.undo();
        QUnit.equal(buffer.data, "hello");
    });

    QUnit.test("eraseAction function test", function() {
        buffer.data = "hello world";
        var erase = new Action.EraseAction(buffer, 0, 0);
        erase.apply();
        QUnit.equal(buffer.data, "hello world");
        erase.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        erase = new Action.EraseAction(buffer, 0, 1);
        erase.apply();
        QUnit.equal(buffer.data, "ello world");
        erase.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        erase = new Action.EraseAction(buffer, 0, -1);
        erase.apply();
        QUnit.equal(buffer.data, "hello world");
        erase.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        erase = new Action.EraseAction(buffer, 1, 2);
        erase.apply();
        QUnit.equal(buffer.data, "hlo world");
        erase.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        erase = new Action.EraseAction(buffer, -1, 2);
        erase.apply();
        QUnit.equal(buffer.data, "llo world");
        erase.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        erase = new Action.EraseAction(buffer, 10, 2);
        erase.apply();
        QUnit.equal(buffer.data, "hello worl");
        erase.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        erase7 = new Action.EraseAction(buffer, 11, 1);
        erase7.apply();
        QUnit.equal(buffer.data, "hello world");
        erase7.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        erase = new Action.EraseAction(buffer, 12, 2);
        erase.apply();
        QUnit.equal(buffer.data, "hello world");
        erase.undo();
        QUnit.equal(buffer.data, "hello world");
    });

    QUnit.test("compositeAction function test", function() {
        buffer.data = "hello world";
        var action1 = new Action.InsertAction(buffer, 0, "e2");
        var action2 = new Action.InsertAction(buffer, 1, "1");
        var actions = [action1, action2];
        var action3 = new Action.CompositeAction(actions);
        action3.apply();
        QUnit.equal(buffer.data, "e12hello world");
        action3.undo();
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        action1 = new Action.InsertAction(buffer, 0, "e2");
        action2 = new Action.EraseAction(buffer, 1, 1);
        actions = [action1, action2];
        action3 = new Action.CompositeAction(actions);
        action3.apply();
        QUnit.equal(buffer.data, "ehello world");
        action3.undo();
        QUnit.equal(buffer.data, "hello world");
    });
});
