// Index Views
//
// ******************************************************
//
// Author: Ali Raza (ali@sweetpixelstudios.com)
//
// ******************************************************
//
define(function (require) {
	'use strict';

	var $			= require('jquery'),
		BaseView	= require('views/ui/base');

	return BaseView.extend({
		template: 'index/index'
	});
});

// End of file index.js