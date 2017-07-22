var	fileinclude = require('gulp-file-include'),
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	browserSync = require('browser-sync').create();

var processors = [
	require('precss')(),
	require('postcss-cssnext')(),
	require('postcss-quantity-queries')(),
	require('postcss-short')(),
	require('postcss-mixins')(),
	require('postcss-custom-media')
];

gulp.task('fileinclude', function() {
  return gulp.src('dev/index.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './dev/'
    }))
    .pipe(gulp.dest('prod'));
});

gulp.task('css', function() {
	return gulp.src('dev/main.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('prod'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'prod'
		},
	})
});

gulp.task('watch', ['browserSync', 'css', 'fileinclude'], function() {
	gulp.watch('dev/**/*.css', ['css']);
	gulp.watch('dev/*.html', ['fileinclude']);
});
