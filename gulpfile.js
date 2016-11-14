var gulp = require('gulp');
gulp.task('default', function() {
  console.log('Howdy!!');
});

var babel = require('gulp-babel');
gulp.task('babel', function() {
  return gulp.src('src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/'));
});

var run = require('gulp-run');
gulp.task('bookmarkletter', function() {
  return gulp.src('dist/*.js')
    .pipe(run('$(npm bin)/bookmarkletter'))
    .pipe(gulp.dest('dist_bookmarklet/'));
});

var runS = require('run-sequence');
gulp.task('build', ['clean'], function(cb) {
  runS('babel', 'bookmarkletter', cb);
});

var watch = require('gulp-watch');
// var plumber = require('gulp-plumber');
gulp.task('watch', function () {
  watch('src/*.js', { ignoreInitial: false }, function() {
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
