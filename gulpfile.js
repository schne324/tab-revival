
var stylus = require('gulp-stylus');
var shell = require('gulp-shell');
var jade = require('gulp-jade');
var fs = require('fs-extra');
var gulp = require('gulp');
var path = require('path');
var Duo = require('duo');

var BUILD_DIR = 'build';

gulp.task('default', ['scripts', 'styles']);

gulp.task('styles', function () {
  gulp.src(path.join('styles', '**/*.styl'))
    .pipe(stylus())
    .pipe(gulp.dest(path.join(BUILD_DIR, 'styles')));
});

gulp.task('scripts', function () {
  new Duo(__dirname)
    .entry('scripts/index.js')
    .write(function (err) {
      if (err) throw err;
    });
  fs.copySync('scripts/tabs.js', path.join(BUILD_DIR, 'scripts', 'tabs.js'));
  fs.copySync('scripts/jquery-1.10.2.min.js', path.join(BUILD_DIR, 'scripts', 'jquery.min.js'));
});

gulp.task('install', shell.task([
  'rm -rf node_modules',
  'npm i'
]));

gulp.task('watch', function () {
  gulp.watch('styles/**/*.styl', ['styles']);
  gulp.watch('scripts/**/*.js', ['scripts']);
});
