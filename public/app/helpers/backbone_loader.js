

define(function (require) {
  'use strict';


    var _         = require('underscore'),
        Backbone  = require('backbone');


    require('bootstrap/bootstrap-button');
    require('bootstrap/bootstrap-dropdown');
    require('bootstrap/bootstrap-tab');

    //Add a view for handling the close event
    Backbone.View.prototype.addSubView = function(view) {
      //we add the subviews to an array
      //init it here
      this.subViews = this.subViews || [];


      //add this view to our subviews
      this.subViews.push(view);

      //lets make it chain(able)
      return this;
    };

})
