define(function(require, exports, module) {
    var Utils = require('backend/utils');
    var utils = new Utils();

    var lineNumberContainer = document.getElementsByClassName('line-number-container')[0];
    var textArea = document.getElementsByClassName('text-area')[0];

    textArea.style.width = textArea.offsetWidth - lineNumberContainer.offsetWidth + 'px';
    textArea.setAttribute('style', 'margin-left: ' + lineNumberContainer.offsetWidth + 'px');
});