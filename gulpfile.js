const gulp             = require('gulp');
const sass             = require('gulp-sass');       // => Convert to css
const concat           = require('gulp-concat');     // => Compile to 1 file
const clean            = require('gulp-clean');      // => Delete files
const livereload       = require("gulp-livereload");
const connect          = require('gulp-connect');

const webpackStream    = require('webpack-stream');  // => Compiles jsx files
const webpackConfig    = require('./webpack.config');

LOCAL_SERVER_PORT = 8000;

gulp.task('serve', function() {
  connect.server({
    port: LOCAL_SERVER_PORT,
    root: 'dist/'
  });
});

gulp.task('webpackStream', function() {
  return gulp.src('src/entry.js')
    .pipe(webpackStream({
      config : webpackConfig
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload());
});

gulp.task('styles', function() {
  gulp.src('app/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('master.css'))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(livereload());
});

gulp.task('clean', function() {
  gulp.src('dist/css/*')
  .pipe(clean());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/components/**/*.jsx', ['webpackStream'])
  gulp.watch('app/styles/**/*.scss',['styles']);
});

gulp.task('default', ['watch', 'clean', 'styles', 'webpackStream', 'serve'])
