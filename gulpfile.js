const gulp             = require('gulp');
const sass             = require('gulp-sass');   // => convert to css
const concat           = require('gulp-concat'); // => compile to 1 file
const clean            = require('gulp-clean');  // => DELETE FILES
const webpack          = require('webpack');
const webpackConfig    = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

gulp.task("webpackDevServer", function() {
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

gulp.task('default', function(){
  gulp.start("clean");
  gulp.start("styles");
  gulp.start("webpackDevServer");


  gulp.watch('app/styles/**/*.scss',['styles']);
});
