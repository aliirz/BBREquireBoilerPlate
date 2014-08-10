//
// Build Task
// ***************************************************************
//
// Author: Ali Raza (ali@sweetpixelstudios.com)
//
// ***************************************************************

/*global process: true, module: true*/


module.exports = function (grunt) {
	'use strict';

	var fs			= require('fs'),
		path		= require('path'),
		Mustache	= require('mustache'),
		_			= require('underscore'),
		minify		= require('html-minifier');

	// index
	grunt.task.registerMultiTask('index',
	'Build the index html file', function () {

		var name	= this.target,
			data	= this.data,
			tmpl	= path.resolve(this.data.src),
			output	= path.resolve(this.data.dest),
			config	= this.data.options,
			index;

		// Lets tell the user where the file is being created
		grunt.verbose.or.write(
			'Writing index file to ' + output.replace(process.cwd(), '') + '...'
		);

		// Add package data to the template
		_.extend(config, { 'pkg': grunt.config("pkg") });

		// Run through mustache and get the result
		index = Mustache.to_html(tmpl, config);

		if (config.compress) {
			index = index.minify.minify(index, {
				collapseBooleanAttributes	: true,
				removeComments				: false,
				removeCommentsFromCDATA		: true,
				collapseWhitespace			: true,
				removeEmptyAttributes		: true
			});
		}

		// Write the file
		grunt.file.write(output, index);
		grunt.verbose.or.ok();
	});
};

// End of file build.js 