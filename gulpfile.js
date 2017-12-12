const gulp          = require('gulp');
const sass          = require('gulp-sass');       // => Convert to css
const concat        = require('gulp-concat');     // => Compile to 1 file
const clean         = require('gulp-clean');      // => Delete files
const livereload    = require("gulp-livereload");
const nodemon       = require('gulp-nodemon');

gulp.task('nodemon', () => {
  nodemon({
		// the script to run the app
		script: 'server.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('server.js')
			.pipe(livereload());
	});
});

gulp.task('styles', function() {
  gulp.src('src/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('master.css'))
  .pipe(gulp.dest('./public/css/'))
  .pipe(livereload());
});

gulp.task('fonts', function() {
  gulp.src(['node_modules/font-awesome/fonts/fontawesome-webfont.*'])
  .pipe(gulp.dest('public/fonts/'));
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

gulp.task('default', ['watch', 'clean', 'styles', 'fonts', 'nodemon'])
