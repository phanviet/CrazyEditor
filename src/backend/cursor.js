define(function(require, exports, module) {
    "use strict";
    var Line = require('./line');

    var Cursor = function(col, row) {
        this.col = col || 1;
        this.row = row || 1;
        this.x = 40;
        this.y = 0;

        this.element = null;
    };

    Cursor.prototype = {
        show: function() {
            this.element.removeClass('hide');
        },

        hide: function() {
            this.element.addClass('hide');
        },

        goToWithXY: function(x, y) {
            this.convertToColRow(x, y);
            this.goTo(this.row, this.col);
        },

        bind: function(element) {
            this.element = element;
            return this;
        },

        convertToColRow: function(x, y) {
            this.row = x / (9 * this.row);
            this.col = y / (16 * this.col);
        },

        goTo: function(row, col) {
            this.row = row;
            this.col = col;
        },

        goToEndOfView: function() {

        },

        goToBeginOfView: function() {
            this.goTo(1, 1);
        },

        goToEndOfLine: function(line) {
            this.goTo(line.size() + 1, this.row);
        },

        goToFirstOfLine: function() {
            this.goTo(1, this.row);
        }
    };

    module.exports = Cursor;
});