//
// Backbobe Loader
// ******************************************************************
//

define(function (require) {
  'use strict';


  var _         = require('underscore'),
      Backbone  = require('backbone');


  require('backbone_route_filter');
  require('backbone_route_manager');

  require('bootstrap/bootstrap-button');
  require('bootstrap/bootstrap-dropdown');
  require('bootstrap/bootstrap-tab');

  // Add a view for handling the close event
  Backbone.View.prototype.addSubView = function (view) {
      //we add the subviews to an array
      //init it here
      this.subViews = this.subViews || [];


      //add this view to our subviews
      this.subViews.push(view);

      //lets make it chain(able)
      return this;
    };


    //Remove a subview from the stack
    Backbone.View.prototype.removeSubView = function (view) {
      //if there is no array to hold the subviews created
      if (!_.isArray(this.subViews)) {
        return this;
      }

      //call close to remove any subviews
      view.close();


      //remove the view from array
      this.subviews = _.without(this.subviews, view);

      //return this to allow chaining.
      return this;
    };


    Backbone.View.prototype.close = function () {

        //close all the subviews
        _.each(this.subviews, function (subView) {
          subView.close();
        });

        //unbing any events that could become zombies
        this.unbind();

        this.remove();

        if (_.isFunction(this.onClose)) {
          this.onClose();
        }

        return this;
    };

    return Backbone;

});

// end of file backbone_loader.js
