define(function(require, exports, module) {
	var View = require('backend/view');
	var WindowApp = function (views){
       this.views = views || [new View.View()];
	};
	module.exports = WindowApp;
});