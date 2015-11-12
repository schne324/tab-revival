
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var fs = require('fs-extra');
var gulp = require('gulp');
var path = require('path');
var Duo = require('duo');

var BUILD_DIR = 'build';

gulp.task('default', ['templates', 'scripts', 'styles']);

gulp.task('templates', function () {
  gulp.src(path.join('templates', '**/*.jade'))
    .pipe(jade())
    .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('styles', function () {
  gulp.src(path.join('styles', '**/*.styl'))
    .pipe(stylus())
    .pipe(gulp.dest(BUILD_DIR));
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

gulp.task('watch', function () {
  gulp.watch('templates/**/*.jade', ['templates']);
  gulp.watch('styles/**/*.styl', ['styles']);
  gulp.watch('scripts/**/*.js', ['scripts']);
});
