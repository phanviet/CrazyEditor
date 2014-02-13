define(function(require, exports, module) {
    var Utils = require('backend/utils');
    var utils = new Utils();


    var WindowApp = require('backend/window');
    var windowApp = new WindowApp();
    cursor = windowApp.views[0].mainCursor().bindCursor($('.hide'));
    cursor.show();
    $(window).click(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        cursor.goToWithXY(x,y);
    
    });

    // console.log(utils.max(0,5));


    // var lineNumberContainer = document.getElementsByClassName('line-number-container')[0];
    // var textArea = document.getElementsByClassName('text-area')[0];

    // textArea.style.width = textArea.offsetWidth - lineNumberContainer.offsetWidth + 'px';
    // textArea.setAttribute('style', 'margin-left: ' + lineNumberContainer.offsetWidth + 'px');
});