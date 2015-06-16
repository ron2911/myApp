/*global MyApp, Backbone*/

MyApp.Collections = MyApp.Collections || {};

(function () {
    'use strict';

    MyApp.Collections.Myapp = Backbone.Collection.extend({

        model: MyApp.Models.Myapp

    });

})();
