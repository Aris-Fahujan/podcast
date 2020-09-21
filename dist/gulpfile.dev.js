"use strict";

// gulpfile.js
var gulp = require('gulp');

var paths = {
  src: 'src',
  srcHTML: 'src/*.html',
  srcCSS: 'src/*.css',
  srcJS: 'src/*.js',
  tmp: 'tmp',
  tmpIndex: 'tmp/index.html',
  tmpCSS: 'tmp',
  tmpJS: 'tmp',
  dist: 'dist',
  distIndex: 'dist/index.html',
  distCSS: 'dist',
  distJS: 'dist'
};

var uglify = require('gulp-uglify');

var minify = require('gulp-minify-css');

var webserver = require('gulp-webserver');

gulp.task('default', function () {
  console.log('Hello World!');
});
gulp.task('copy', function () {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp)), gulp.src(paths.srcJS).pipe(uglify({
    mangle: false
  })).pipe(gulp.dest(paths.tmpJS)), gulp.src(paths.srcCSS).pipe(minify()).pipe(gulp.dest(paths.tmpCSS));
});
gulp.task('serve', function () {
  return gulp.src(paths.src).pipe(webserver({
    port: 3000,
    livereload: true
  }));
});