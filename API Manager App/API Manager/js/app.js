﻿(function () {
    // requireJs configuration
    require.config({
        baseUrl: 'js',
        paths: {
            jquery: 'lib/jquery-2.2.2.min',
            kendo: 'lib/kendo.all.min',
            text: 'lib/text',
            underscore: 'lib/underscore-min',
            nicescroll: 'lib/nicescroll'
        },
        shim: {
            kendo: {
                deps: ['jquery'],
                exports: 'kendo'
            },
            nicescroll: {
                deps: ['jquery'],
                exports: 'nicescroll'
            }
        },
        waitSeconds: 0
    });

    require(['app/APIManager'], function (APIManagerApp) {
        //Start APIManager app
        var APIManager = new APIManagerApp();
        APIManager.start();
    });

})();