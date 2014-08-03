//
// Base View
// ***********************************
//
//

define(function (require) {
	'use strict';

	var app			= require('app'),
		$			= require('jquery'),
		_			= require('underscore'),
		Backbone	= require('backbone_loader');

	return Backbone.View.extend({
		attributes: {},

		initialize: function (options) {
			// Attach a promise so we can check for a callback completion
			this.deferred = $.Deferred();

			// Give it a promise interface
			this.deferred.promise(this);

			// Keep the template if it's been assigned
			if (!_.isUndefined(options.template)) {
				this.template = options.template;
			}
		},

		render: function () {
			app.fetchTemplate(this.template).done(_.bind(function (tmpl) {
				// no model attached
				this.$el.html(tmpl(this.options));
				this.deferred.resolve();
			}, this));
			return this;
		}
	});
});

// End of file base.js