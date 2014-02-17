define(function(require, exports, module) {
    "use strict";
    var Buffer = require('./buffer');
    var Region = require('./region');

    var Action = function() {
        this.apply = function() {};
        this.undo = function() {};
    };

    var InsertAction = function(buffer, position, value) {
        this.buffer = buffer || new Buffer();
        this.position = position || 0;
        this.value = value || "";

        if (this.position < 0) {
            this.position = 0;
        }
        if (this.position > this.buffer.data.length) {
            this.position = this.buffer.data.length;
        }
    };

    InsertAction.prototype = new Action();
    InsertAction.prototype.constructor = InsertAction;
    InsertAction.prototype = {
        apply: function() {
            this.buffer.insert(this.position, this.value);
        },

        undo: function() {
            this.buffer.erase(this.position, this.value.length);
        }
    };

    var CompositeAction = function(actions) {
        this.actions = actions || [];
    };

    CompositeAction.prototype = new Action();
    CompositeAction.prototype.constructor = CompositeAction;
    CompositeAction.prototype = {
        apply: function() {
            this.actions.forEach(function(action) {
                action.apply();
            });
        },

        undo: function() {
            length = this.actions.length - 1;
            for (var i = 0; i < this.actions.length; i++) {
                this.actions[length - i].undo();
            }
        }
    };

    var EraseAction = function(buffer, position, length) {
        this.buffer = buffer || new Buffer();
        this.position = position || 0;
        this.length = length || 0;
        this.value = '';

        if (this.position < 0) {
            this.position = 0;
        }
        if (this.position > this.buffer.data.length) {
            this.position = this.buffer.data.length;
        }
    }

    EraseAction.prototype = new Action();
    EraseAction.prototype.constructor = EraseAction;
    EraseAction.prototype = {
        apply: function() {
            this.value = this.buffer.subStr(new Region(this.position, this.position + this.length));
            this.buffer.erase(this.position, this.length);
        },

        undo: function() {
            this.buffer.insert(this.position, this.value);
        }
    }

    module.exports.Action = Action;
    module.exports.InsertAction = InsertAction;
    module.exports.EraseAction = EraseAction;
    module.exports.CompositeAction = CompositeAction;
});
