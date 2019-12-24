
    'use strict';

    let calc = require('./parts/calc.js'),
        timer = require('./parts/timer.js'),
        slider = require('./parts/slider.js'),
        modal = require('./parts/modal.js'),
        form = require('./parts/form.js'),
        tabs = require('./parts/tabs.js');

    calc();
    form();
    modal();
    slider();
    timer();
    tabs();

    exports.calc = calc;
    exports.timer = timer;
    exports.slider = slider;
    exports.modal = modal;
    exports.form = form;
    exports.tabs = tabs;

