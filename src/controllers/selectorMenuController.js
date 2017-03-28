/**
 * Selector menu controller
 * @param $
 * @param selector
 * @returns {{init: init}}
 * @constructor
 */
var SelectorMenuController = function ($, selector) {
    var contentDocument = null;
    var iframeCtrl = Ioc.get('iframeController');

    /*
     Called from IframeController._showMenuItem to initialize view
     */
    var init = function (iframe) {
        contentDocument = iframe.contentDocument;
        bindEvents();
        startSelector();
    };

    var bindEvents = function () {
        var menuEvents = {
            '.close': close,
            '.btn-default': close
        };
        Object.keys(menuEvents).forEach(function (item) {
            $(contentDocument.querySelectorAll(item)).on('click', menuEvents[item]);
        });
    };

    var close = function () {
        iframeCtrl.removeIframe();
    };

    var startSelector = function () {
        selector.reset();
        selector.init(onElementSelected);
    };

    var onElementSelected = function (element) {
        iframeCtrl.showSliderMenu(element);
    };

    iframeCtrl.onCloseMenu.attach(selector.close);

    return {
        init: init
    };
};