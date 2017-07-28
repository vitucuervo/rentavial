var	fileinclude = require('gulp-file-include'),
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	browserSync = require('browser-sync').create();

var processors = [
	require('precss')(),
	require('postcss-cssnext')(),
	//require('postcss-quantity-queries')(),
	//require('postcss-short')(),
	//require('postcss-mixins')(),
	//require('postcss-custom-media'),
	require("postcss-apply")(),
    require("postcss-nesting")(),
    require("postcss-media-minmax")(),
    require("postcss-custom-media")(),
    require("postcss-custom-properties")(),
    require("postcss-custom-selectors")(),
    require("postcss-selector-matches")({ lineBreak: true }),
    require("postcss-selector-not")(),
    require("postcss-calc")({ precision: 5 }),
    require("postcss-color-function")(),
    require("postcss-remove-root")()
];

gulp.task('fileinclude', function() {
	return gulp.src('dev/index.html')
		.pipe(fileinclude({
			prefix: '@@',
			basepath: './dev/'
		}))
		.pipe(gulp.dest('prod'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('css', function() {
	return gulp.src('dev/main.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('prod'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('js', function() {
	return gulp.src('dev/js/**/*')
		.pipe(gulp.dest('prod/js'))
});

gulp.task('images', function() {
	return gulp.src('dev/images/**/*')
		.pipe(gulp.dest('prod/images'))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'prod'
		},
	})
});

gulp.task('watch', ['browserSync', 'css', 'fileinclude', 'images', 'js'], function() {
	gulp.watch('dev/**/*.css', ['css']);
	gulp.watch('dev/**/*.html', ['fileinclude']);
	gulp.watch('dev/**/*', ['images']);
	gulp.watch('dev/**/*.js', ['js']);
});
