const gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
var versionAppend = require('gulp-version-append');

var src = './src';
var dist = './dist';

gulp.task('css', function() {
  return gulp.src(src + '/style/*')
  .pipe(csso())
  .pipe(gulp.dest(dist + '/style'));
});

gulp.task('js', function() {
  return gulp.src(src + '/js/*')
  .pipe(uglify())
  .pipe(gulp.dest(dist + '/js'));
});

gulp.task('html', function() {
  return gulp.src(src + '/*.html')
  .pipe(versionAppend(['html', 'js', 'css']))
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest(dist));
});

gulp.task('images', function() {
  return gulp.src(src + '/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest(dist + '/images'))
});

gulp.task('favicons', function() {
  return gulp.src(src + '/favicons/*')
  .pipe(gulp.dest(dist + '/favicons'))
});

gulp.task('default', gulp.series(['css', 'js', 'html', 'images', 'favicons']));