define(function(require, exports, module) {
    var Buffer = require('backend/buffer'),
        Region = require('backend/region'),
        buffer = new Buffer();

    QUnit.test("subStr function test", function() {
        buffer.data = "hello";
        QUnit.equal(buffer.subStr(new Region(0, 2)), "he");
        QUnit.equal(buffer.subStr(new Region(-1, 3)), "hel");
        QUnit.equal(buffer.subStr(new Region(0, 5)), "hello");
        QUnit.equal(buffer.subStr(new Region(0, 7)), "hello");
        QUnit.equal(buffer.subStr(new Region(-1, 6)), "hello");
    });

    QUnit.test("insert function test", function() {
        buffer.data = "hello";
        buffer.insert(0, "e");
        QUnit.equal(buffer.data, "ehello");
        buffer.data = "hello";
        buffer.insert(-1, "a");
        QUnit.equal(buffer.data, "ahello");
        buffer.data = "hello";
        buffer.insert(5, "c");
        QUnit.equal(buffer.data, "helloc");
        buffer.data = "hello";
        buffer.insert(6, "d");
        QUnit.equal(buffer.data, "hellod");
    });

    QUnit.test("erase function test", function() {
        buffer.data = "hello world";
        buffer.erase(0, 0);
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        buffer.erase(1, 0);
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        buffer.erase(1, -2);
        QUnit.equal(buffer.data, "hello world");

        buffer.data = "hello world";
        buffer.erase(-2, 2);
        QUnit.equal(buffer.data, "llo world");

        buffer.data = "hello world";
        buffer.erase(0, 5);
        QUnit.equal(buffer.data, " world");

        buffer.data = "hello world";
        buffer.erase(-1, 1);
        QUnit.equal(buffer.data, "ello world");

        buffer.data = "hello world";
        buffer.erase(0, 11);
        QUnit.equal(buffer.data, "");
        buffer.data = "hello world";
        buffer.erase(0, 12);
        QUnit.equal(buffer.data, "");
    });
});
