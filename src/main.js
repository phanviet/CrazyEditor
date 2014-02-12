define(function(require, exports, module) {
    var Utils = require('backend/utils');
    var utils = new Utils();

<<<<<<< HEAD
    var WindowApp = require('backend/window');
    var windowApp = new WindowApp();
    cursor = windowApp.views[0].mainCursor();
    cursor.bind($('.cursor')).show();
    $(window).click(function(event) {
        var x = event.pageX;
        var y = event.pageY;
        cursor.goToWithXY(x,y);
    
    });

    // console.log(utils.max(0,5));

=======
    var WindowApp = require('backend/window')
    var windowApp = new WindowApp();
    cursor = windowApp.views[0].mainCursor().bindCursor($('.cursor'));
    console.log(cursor);
    cursor1 = windowApp.views[0].mainCursor();
    cursor1.showCursor(cursor);
    $(window).click(function(event){
        x = event.pageX;
        y = event.pageY;
        console.log(x +":"+ y);
       cursor1.goToXY(x, y);
       cursor1.showClick(cursor);
    
    });
    // console.log(utils.max(0,5));

>>>>>>> d61c96943ae3081940956fd8793ac3c44a468f91
    // var lineNumberContainer = document.getElementsByClassName('line-number-container')[0];
    // var textArea = document.getElementsByClassName('text-area')[0];

    // textArea.style.width = textArea.offsetWidth - lineNumberContainer.offsetWidth + 'px';
    // textArea.setAttribute('style', 'margin-left: ' + lineNumberContainer.offsetWidth + 'px');
});