var gulp = require("gulp");
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var del = require('del');
var buildProduction = utilities.env.production;
var browserSync = require('browser-sync').create();
var jshint = require('gulp-jshint');
var watchify = require('watchify');
var lib = require('bower-files')({
  "overrides":{
    "bootstrap":{
      "main":[
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

//linter to run on all npfiles in js folder//
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// BUILD~~~~~~~~~~~~~~~~~~
//concatenate js interface files, pipe to tmp
gulp.task('concatInterface', function(){
  return gulp.src(['./js/*-interface.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify',['concatInterface'], function(){
  return browserify({ entries: ['./tmp/allConcat.js'] })
  //babelify goes here
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('minifyScripts', ['jsBrowserify'], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function(){
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('clean', function(){
  return del(['build'], 'tmp')
});

gulp.task('build', ['clean'], function() {
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
    //start bower and cssBuild here
  }
  gulp.start('bower');
  gulp.start('cssBuild');
});

//SERVE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
gulp.task('serve', ['build'], function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
    //watch tasks go here (js, bower, html, sass)
    //subtasks for gulp watch to reload the for each watch task change go here
  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch(['*.html'], ['htmlBuild']);
  gulp.watch(["scss/*.scss", "scss/**/*.scss"], ['cssBuild']);
});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function() {
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
})

gulp.task('htmlBuild', function(){
  browserSync.reload();
});

//map changes to .scss files to .css files
gulp.task('cssBuild', function(){
  return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});


//TEST ~~~~~~~~~~~~~~~~~~~~~~~~

//install jasmine, initialize, install watchify, install karma and karma, etc
