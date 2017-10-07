const gulp             = require('gulp');
const sass             = require('gulp-sass');       // => Convert to css
const concat           = require('gulp-concat');     // => Compile to 1 file
const clean            = require('gulp-clean');      // => Delete files
const livereload       = require('gulp-livereload'); // => Live reload browser
const webpack          = require('webpack');
const webpackConfig    = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('webpackDevServer', function() {
  var compiler = webpack(webpackConfig);
  var server   = new WebpackDevServer(compiler, webpackConfig.devServer);
  server.listen(8000);
});

gulp.task('styles', function() {
  gulp.src('app/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('master.css'))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('clean', function() {
  gulp.src('dist/css/*')
  .pipe(clean());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/styles/**/*.scss',['styles']);
});

gulp.task('default', function(){
  gulp.start('watch');
  gulp.start('clean');
  gulp.start('styles');
  gulp.start('webpackDevServer');
});
