/*global LazyLoad: false, jQuery: false*/
/*jslint indent: 4*/

(function() {
    var jquery, ui, timepicker, test, js, css,
        parts = location.search.replace(/^\?/, '').split('&'),
        n = parts.length, params = {};

    for (var i = 0; n > 1 && i < n; i = i + 1) {
        parts[i] = parts[i].split('=');
        params[parts[i][0]] = parts[i][1];
    }

    jquery = params['jquery-version'] || '1.7.1';
    ui = params['jquery-ui-version'] || '1.8.2';
    timepicker = params.timepicker || 'normal';
    test = params.test || 'core';

    js = ['../external/jquery-'+jquery+'.min.js',
          '../external/jquery-ui-'+ui+'/jquery-ui-'+ui+'.custom.min.js',
          '../external/jquery.simulate.js',
          '../external/qunit.js',
          '../jquery.timepicker'+(timepicker === 'normal' ? '' : '.min')+'.js',
          'timepicker-'+test+'-test.js'];

    css = ['../external/jquery-ui'+ui+'/jquery-ui-'+ui+'.custom.css',
           '../jquery.timepicker.css'];

    LazyLoad.css(css, function() {
        // console.log('CSS Ready!');
    });

    LazyLoad.js(js, function() {
        // console.log('JS Ready!');
        if (jQuery.fn.timepicker.test) {
            jQuery.fn.timepicker.test();
        }
    });
})();