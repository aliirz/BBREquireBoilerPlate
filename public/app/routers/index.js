// Index Router
// **************************************************
//
// Author: Ali Raza (ali@sweetpixelstudios.com)
//
//***************************************************
//

define(function (require) {
	'use strict';

	var app			= require('app'),
		Backbone	= require('backbone_loader'),
		IndexView	= require('views/index/index');

	return Backbone.Router.extend({
		routes: {
			'': 'index'
		},

		index: function () {
			var view = new IndexView({});
			app.mainView.show(view);
		}
	});
});

// End of file index.js