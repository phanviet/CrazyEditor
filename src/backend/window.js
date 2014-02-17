define(function(require, exports, module) {
    "use strict";
	var View = require('./view');

	var WindowApp = function (views){
        this.views = views || [new View()];
	};

    WindowApp.prototype = {
        firstView: function() {
            return this.views[0];
        },

        lastView: function() {
            return this.views[this.views.length - 1];
        }
    }

    module.exports = WindowApp;
});