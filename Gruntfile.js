/*global module, __dirname, process, require */


var path = require('path');

module.exports = function (grunt) {
	'use strict';

	var config = require('load-grunt-config')(grunt, {
		init		: false,
		configPath  : path.join(__dirname, 'build/tasks/options'),
		config		: {
			env			: process.env,
			projectRoot : __dirname
		}
	});
	// Load the tasks
	grunt.loadTasks('build/tasks/custom');
	grunt.initConfig(config);
};

// End of file Gruntfile.js