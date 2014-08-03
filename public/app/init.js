//
//  Initialization and Setup
// =============================================================================
//
// * Author: [Ali Raza](ali@sweetpixelstudios.com)
//
// -----------------------------------------------------------------------------
//


require([
	'app',
	'jquery',
	'underscore',
	'backbone_loader',
	'routers/index'
], function (
		app, $, _, Backbone, IndexRouter
	) {
		'use strict';

		// Organize Initializers
		var main = {init : {} };

		// Remove the loading message
		main.init.removeLoadingMessage = function () {
			$('body').removeClass('loading').find('#main').html('');
			return this;
		};

		main.init.setupRouters = function () {
			var AppRouter = Backbone.RouteManager.extend({

				routes: {
					'' : IndexRouter
				}
			});
			app.router = new AppRouter();
			return this;
		};

		main.init.startBackboneHistory = function () {
			Backbone.history.start({ pushState: true, root: app.root });
			return this;
		};

		$(function () {
			// If its test env we just return false.
			if (app.env() === 'test') { return false; }

			// Initialize the env and start Backbone
			main.init
				.setupRouters()
				.removeLoadingMessage()
				.startBackboneHistory();

		});

		// To help in navigation if data-bypass is present then it bypasses the
		// delegation completely.
		$(document).on('click', 'a[href]:not([data-bypass])', function (evt) {
			var href, root;

			// Get the absolute anchor href.
			href = { prop: $(this).prop('href'), attr: $(this).attr('href') };

			// Get the absolute root.
			root = location.protocol + '//' + location.host + app.root;

			// Ensure the root is part of the anchor href, meaning it's relative.
			if (href.prop.slice(0, root.length) === root) {
			// Stop the default event to ensure the link will not cause a page
			// refresh.

				evt.preventDefault();
				Backbone.history.navigate(href.attr, { trigger: true, replace: false });
			}
		});
	
	});

// End of file init.js