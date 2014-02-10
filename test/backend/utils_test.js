define(function(require, exports, module) {
    var Utils = require('backend/utils');
    var utils = new Utils();

    QUnit.test( "min function test", function() {
        QUnit.equal(utils.min(0, 5), 0);
        QUnit.equal(utils.min(5, 0), 0);
        QUnit.equal(utils.min(-1, 1), -1);
    });

    QUnit.test("max function test", function() {
        QUnit.equal(utils.max(0, 5), 5);
        QUnit.equal(utils.max(5, 0), 5);
        QUnit.equal(utils.max(-1, 1), 1);
    });

    QUnit.test("clamp function test", function() {
        QUnit.equal(utils.clamp(0, 1, 2), 1);
        QUnit.equal(utils.clamp(-1, 2, -5), -1);
        QUnit.equal(utils.clamp(0, 8, -2), 0);
    });
});