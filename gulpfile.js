var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    wiredep = require('wiredep').stream,
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');

gulp.task('default', ['clean'], function() {
    gulp.start('bower','styles', 'scripts', 'images', 'views', 'css');
});

gulp.task('styles', function() {
    return sass('src/styles/main.scss')
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('css', function() {
    return gulp.src('src/styles/css/*.css')
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('scripts', function() {
    return gulp.src(['src/*.js','src/features/**/*.js', 'src/services/*.js'],
        {base: 'src/'})
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('views', function(){
    console.log('called');
    return gulp.src('src/features/**/*.html')
        .pipe(gulp.dest('dist/assets/views'))
});

gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('src/styles/*.scss', ['styles']);

    // Watch .js files
    gulp.watch(['src/features/**/*.js', 'src/app.js', 'src/services/*.js'], ['scripts']);

    // Watch html files
    gulp.watch('src/features/**/*.html', ['views']);

    // Watch image files
    gulp.watch('src/images/*', ['images']);

    // Watch image files
    gulp.watch('src/index.html', ['bower']);

    // Watch css files
    gulp.watch('src/styles/css/*.css', ['css']);

});

gulp.task('bower', function () {
    return gulp.src('src/index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/assets/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img', 'dist/assets/views'], cb)
});