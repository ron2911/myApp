/*global MyApp, Backbone*/

MyApp.Models = MyApp.Models || {};

(function () {
    'use strict';

    MyApp.Models.Myapp = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
