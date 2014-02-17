define(function(require, exports, module) {
    "use strict";
    var Buffer = require('./buffer');
    var Region = require('./region');

    var Action = function() {
        var self = this;

        self.apply = function() {};
        self.undo = function() {};
    };

    var InsertAction = function(buffer, position, value) {
        var self = this;
        // Action.call(self);

        self.buffer = buffer || new Buffer();
        self.position = position || 0;
        self.value = value || "";

        if (self.position < 0) {
            self.position = 0;
        }
        if (self.position > self.buffer.data.length) {
            self.position = self.buffer.data.length;
        }
    };

    InsertAction.prototype = new Action();
    InsertAction.prototype.apply = function() {
        this.buffer.insert(this.position, this.value);
    };

    InsertAction.prototype.undo = function() {
        this.buffer.erase(this.position, this.value.length);
    };

    var CompositeAction = function(actions) {
        var self = this;
        // Action.call(self);

        self.actions = actions || [];
    };

    CompositeAction.prototype = new Action();
    CompositeAction.prototype.apply = function() {
        this.actions.forEach(function(action) {
            action.apply();
        });
    };

    CompositeAction.prototype.undo = function() {
        length = this.actions.length - 1;
        for (var i = 0; i < this.actions.length; i++) {
            this.actions[length - i].undo();
        }
    };

    var EraseAction = function(buffer, position, length) {
        var self = this;
        // Action.call(self);

        self.buffer = buffer || new Buffer();
        self.position = position || 0;
        self.length = length || 0;
        self.value = '';

        if (self.position < 0) {
            self.position = 0;
        }
        if (self.position > self.buffer.data.length) {
            self.position = self.buffer.data.length;
        }
    }

    EraseAction.prototype = new Action();
    EraseAction.prototype.apply = function() {
        this.value = this.buffer.subStr(new Region(this.position, this.position + this.length));
        this.buffer.erase(this.position, this.length);
    };
    EraseAction.prototype.undo = function() {
        this.buffer.insert(this.position, this.value);
    };

    module.exports.Action = Action;
    module.exports.InsertAction = InsertAction;
    module.exports.EraseAction = EraseAction;
    module.exports.CompositeAction = CompositeAction;
});
