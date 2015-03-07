var gulp = require('gulp');
var gutil = require('gulp-util');
//var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('gulp-webpack');

gulp.task("webpack", function(cb) {
  return gulp.src('./frontend/src/js/index.js')
    .pipe(webpack({
      output: {
        filename: "main.js"
      }
    }))
    .pipe(gulp.dest('./frontend/build/js/'));
});







