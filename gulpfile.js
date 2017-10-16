const gulp          = require('gulp');
const sass          = require('gulp-sass');       // => Convert to css
const concat        = require('gulp-concat');     // => Compile to 1 file
const clean         = require('gulp-clean');      // => Delete files
const livereload    = require("gulp-livereload");
const connect       = require('gulp-connect');
const nodemon       = require('gulp-nodemon');

gulp.task('nodemon', () => {
  return nodemon({
    script: 'server.js'
  }).on('readable', () => {
    this.stdout.on('data', chunk => {
      if (/^listening/.test(chunk)) {
        livereload.reload();
      }
      process.stdout.write(chunk);
    });
  });
});

gulp.task('styles', function() {
  gulp.src('src/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('master.css'))
  .pipe(gulp.dest('./public/css/'))
  .pipe(livereload());
});

gulp.task('clean', function() {
  gulp.src('public/css/*')
  .pipe(clean());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.jsx', ['nodemon'])
  gulp.watch('src/styles/**/*.scss',['styles']);
});

gulp.task('default', ['watch', 'clean', 'styles', 'nodemon'])
