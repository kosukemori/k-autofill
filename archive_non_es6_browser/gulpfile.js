var gulp = require('gulp');
gulp.task('default', function() {
  console.log('Howdy!!');
});

var babel = require('gulp-babel');
gulp.task('babel', function() {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist_babel/'));
});

var webpack = require('gulp-webpack');
// Plugin for each name of file.
// Now, 'webpack.config.js' configure these settings.
// var named = require('vinyl-named'); 
gulp.task('webpack', function() {
  return gulp.src('dist_babel/*.js')
    // .pipe(named())
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist_webpack'));
});

var bookmarklet = require('gulp-bookmarklet');
gulp.task('bookmarklet', function() {
  return gulp.src('dist_webpack/*.js')
    .pipe(bookmarklet())
    .pipe(gulp.dest('dist_bookmarklet/'));
});

var runS = require('run-sequence');
gulp.task('build', ['clean'], function(cb) {
  runS('babel', 'webpack', 'bookmarklet', cb);
});

var watch = require('gulp-watch');
// var plumber = require('gulp-plumber');
gulp.task('watch', function () {
  watch('src/main.js', { ignoreInitial: false }, function() {
    gulp.start('build');
  })
    // .pipe(plumber()); // It's not make sense for my case
});

var eslint = require('gulp-eslint');
gulp.task('lint', function() {
  // ESLint ignores files with "node_modules" paths. 
  // So, it's best to have gulp ignore the directory as well. 
  // Also, Be sure to return the stream from the task; 
  // Otherwise, the task may end before the stream has finished. 
  return gulp.src(['src/*.js','!node_modules/**'])
    // eslint() attaches the lint output to the "eslint" property 
    // of the file object so it can be used by other modules. 
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console. 
    // Alternatively use eslint.formatEach() (see Docs). 
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on 
    // lint error, return the stream and pipe to failAfterError last. 
    .pipe(eslint.failAfterError());
});

var del = require('del');
gulp.task('clean', function() {
  return del(['dist*/*.js']);
});

gulp.task('test', function() {
  console.log("Test flow: 1. npm run lint, 2. npm run build");
});
