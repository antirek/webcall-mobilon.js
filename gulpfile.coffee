gulp = require 'gulp'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'


gulp.task 'build', ()->  
  gulp.src [
    './bower_components/fetch/fetch.js',
    './bower_components/promise-polyfill/Promise.js',
    './js/webcall.js']
  .pipe concat 'webcall.js'
  .pipe gulp.dest './dist'


gulp.task 'build-minify', ()->  
  gulp.src [
    './bower_components/fetch/fetch.js',
    './bower_components/promise-polyfill/Promise.js',
    './js/webcall.js']
  .pipe uglify()
  .pipe concat 'webcall.min.js'
  .pipe gulp.dest './dist'


gulp.task 'default', ['build', 'build-minify']


gulp.task 'watch', ()->
  gulp.watch ['js/**'], ['default']