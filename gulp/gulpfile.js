var gulp = require('gulp')

var minifycss = require('gulp-minify-css'), // css 压缩
	uglify = require('gulp-uglify'), // js 压缩
	concat = require('gulp-concat'), // 文件合并
	imagemin = require('gulp-imagemin') // 图片压缩

gulp.task('img', function(argument){
	gulp.src('./imgs/*')
		.pipe(imagemin())
		.pipe(gulp.dest('src/dist/imgs'));
} )

gulp.task('css', function(argument){
	gulp.src('./src/css/*.css')
		.pipe(minifycss())
		.pipe(concat('merge.css'))
		.pipe(gulp.dest('src/dist/css'))
})

gulp.task('js', function(argument) {
    gulp.src('./src/js/com/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('src/dist/js'));
});

gulp.task('build', ['img', 'css', 'js']);