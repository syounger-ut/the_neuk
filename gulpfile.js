const gulp             = require('gulp');
const sass             = require('gulp-sass');
const concat           = require('gulp-concat');
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
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', function(){
  gulp.start("styles");
  gulp.start("webpackDevServer");


  gulp.watch('app/styles/**/*.scss',['styles']);
});
