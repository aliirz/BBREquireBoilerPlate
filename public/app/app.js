//
// Backbone Require Boiler Plate
//

define([
  'jquery',
  'underscore',
  'backbone_loader',
  'handlebars',
  'handlebars_helpers',
  'templates'
], function (
    $, _, Backbone, Handlebars, HandlebarsHelpers, JST
    ) {
    'use strict';

    // Global Template Object
    window.JST = JST;

    // Keeping active application instances under an app object
    var app = {
      // Serving the app from /
      root: '/',

      // View instances to be accessible globally
      views: {},

      // Similarly models sharing the lifetime of the app
      models: {},

      // Configure the url
      urls: window.config,


      // A namespace based router
      router: {},

      // Lets give our app a name

      name : 'BBR-BoilerPlate'
    };

    // Its always nice to have multiple environments to work in.
    app.env = function () {
      if (window.jasmine) {
        return 'test';
      }

      return $('script[data-env]').attr('data-env');
    };


    // Load a template from the server, compile and return it

    app.fetchTemplate = function (path, done) {
      var self = this,
      JST  = window.JST = window.JST || {},
      def  = new $.Deferred();


      // If the template is available in JST then lets make it quick
      if (JST[path]) {
        if (_.isFunction(done)) {
          done(JST[path]);
        }
        return def.resolve(JST[path]);
      }

      // Lets fetch it asynchronously if it was not available form JST

      // jQuery FTW
      $.ajax({
        type      : 'GET',
        dataType  : 'text',
        url       : '/app/templates/' + path + '.html'
      }).done(function (response) {
        // The request came back with the template 
        // lets compile and prepare it for use.
        JST[path] = Handlebars.compile(response);

        // Its possible there is a callback return the template via it.
        if (_.isFunction(done)) {
          done(JST[path]);
        }
        def.resolve(JST[path]);
      }).fail(function () {
        // Lets just show an error alert
        JST[path] = Handlebars.compile(
          '<span class="alert alert-danger">404: ' +
          path +
          '.html was not found.</span>'
          );
        if (_.isFunction(done)) { done(JST[path]); }
        def.resolve(JST[path]);
      });
      // Promise
      return def.promise();
    };

    app.setTitle = function (title) {
      title = (title) ? title += ' : ' : '';
      window.document.title = title + 'BBR-BoilerPlate';
      return this;
    };


    // A simple class to manage the Views. 
    // It closes a previously already opened view.
    app.mainView = {
      // Main Container
      $el: $('#main'),

      // Reference to the currently loaded view
      currentView: undefined,

      show: function (view) {
        var promise;

        // Reseting the title to it stays synced
        app.setTitle();
        
        // If there is already a view here close it
        if (!_.isUndefined(this.currentView)) {
          this.currentView.close();
        }

        // Scroll to the top
        window.scrollTo(0, 0);

        // Save a ref and render the detached el
        this.currentView = view;
        promise = this.currentView.render();

        // Empty the main contiainer and place the view's node in it
        this.$el.html('').append(this.currentView.el);

        return promise;
      }
    };

    return _.extend({}, app, Backbone.Events);

  });


// End of file app.js
