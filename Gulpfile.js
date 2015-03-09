var gulp = require('gulp');
var gutil = require('gulp-util');
//var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('gulp-webpack');
var less = require('gulp-less');
var path = require('path');

gulp.task('webpack', function() {
  return gulp.src('./frontend/src/js/index.js')
    .pipe(webpack({
      output: {
        filename: "main.js"
      }
    }))
    .pipe(gulp.dest('./frontend/build/js/'));
});


gulp.task('less', function() {
  return gulp.src('./frontend/src/stylesheets/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname,'frontend', 'src', 'stylesheets') ]
    }))
    .on('error', logger)
    .pipe(gulp.dest('./frontend/build/stylesheets'))
});


gulp.task('default', function() {


});






function logger() {
  return console.log.apply(console, arguments);
}



