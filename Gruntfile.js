/*jshint node: true*/
module.exports = function (grunt) {
	'use strict';
	// mannual grunt task loading:
	grunt.loadNpmTasks('grunt-contrib-watch');

	// install and turn on package below to automatically load grunt tasks listed in the initConfig
	// require('load-grunt-tasks')(grunt);

	/*  ========================================================================
								CUSTOM TASKS
	======================================================================== */

	// stub

	/*  ========================================================================
								INIT CONFIG
	======================================================================== */
	grunt.initConfig({
		//pkg: grunt.file.readJSON('package.json'),

		//directories
		dirs: {
			src: '.',
			release: '~release'
		},

		watch: {
			livereload: {
				options: {
					livereload: 35729
				},
				files: [
					'<%= dirs.src %>/*.html',
					'<%= dirs.src %>/css/*.css',
					'<%= dirs.src %>/js/*.js',
					'<%= dirs.src %>/img/**/*.{gif,jpeg,jpg,png,svg,webp}'
				]
			}
		}
	});

	/*  ========================================================================
							TASK COMPOSITION (ALIASING)
	======================================================================== */

	/*******************
	 * TESTING
	 *******************/
	grunt.registerTask('serve', function (/*target*/) {
		grunt.task.run([
			'watch'
		]);
	});

	/*******************
	 * DEFAULT TASK
	 *******************/

	grunt.registerTask('default', ['serve']);
};