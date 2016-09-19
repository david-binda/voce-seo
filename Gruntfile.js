/*
 * voce-seo 
 * https://github.com/voceconnect/voce-seo
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    "build": {
      "production": ["composer:install:no-dev:optimize-autoloader:prefer-dist"],
    }
  });

  //load the tasks
  grunt.loadNpmTasks('grunt-peon-build');
  grunt.loadNpmTasks('grunt-composer');

};
