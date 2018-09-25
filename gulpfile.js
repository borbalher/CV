'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');


gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        //.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('develop', function () {
    var stream = nodemon({
        script: 'app.js'
        , ext: 'html js'
        , tasks: ['sass']
    })

    stream
        .on('restart', function () {
            console.log('restarted!')
        })
        .on('crash', function () {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10)  // restart the server in 10 seconds
        })
})
gulp.task('default', ['develop']);