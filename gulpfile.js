
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var gulp = require('gulp');
var path = require('path');

var BUILD_DIR = 'build';

gulp.task('default', ['scripts', 'styles']);

gulp.task('styles', function () {
  gulp.src(path.join('client', '**/*.styl'))
    .pipe(stylus())
    .pipe(gulp.dest(path.join(BUILD_DIR)));
});

gulp.task('scripts', function () {
  gulp.src(path.join('client', '**/*.js'))
    .pipe(gulp.dest(path.join(BUILD_DIR)));
});

gulp.task('watch', function () {
  gulp.watch('client/**/*.styl', ['styles']);
  gulp.watch('client/**/*.js', ['scripts']);
});
