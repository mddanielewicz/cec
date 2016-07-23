'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps');

gulp.task('concatScripts', function() {
  return gulp.src(['public/js/index.js'])
  .pipe(maps.init())
  .pipe(concat('app.js'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('public/js/'));
});

gulp.task('minifyScripts', ['concatScripts'], function() {
  return gulp.src('public/js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watchFiles', function(){
  gulp.watch('public/js/*.js', ['concatScripts']);
});

gulp.task('build', ['minifyScripts']);

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['build']);