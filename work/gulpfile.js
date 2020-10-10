const gulp = require('gulp');

gulp.task('copy_html',function(){
    return gulp.src('index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});
gulp.task('copy_other',function(){
    return gulp.src(['*.html','!index.html'])
    .pipe(gulp.dest('dist/html'))
    .pipe(connect.reload());
})
gulp.task('scripts',function(){
    return gulp.src(['*.js','!gulpfile.js'])
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});
gulp.task('data',function(){
    return gulp.src(['*.json','!package.json'])
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());
});
gulp.task('images',function(){
    return gulp.src('images/*.{jpg,png}')
    .pipe(gulp.dest('dist/imgs'))
    .pipe(connect.reload());
});
gulp.task('phps',function(){
    return gulp.src('*.php')
    .pipe(gulp.dest('dist/php'))
    .pipe(connect.reload());
})
gulp.task('bulid',['copy_html','scripts','data','images','phps'],function(){
    console.log("项目建立成功");
})

const sass = require('gulp-sass');
const connect = require('gulp-connect');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename')

gulp.task('sass',function(){
    return gulp.src('*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});

gulp.task('watch',function(){
    gulp.watch('index.html',['copy_html']);
    gulp.watch(['*.js','!gulpfile.js'],['scripts']);
    gulp.watch(['*.json','!package.json'],['data']);
    gulp.watch('*.scss',['sass']);
    gulp.watch('images/*.{jpg,png}',['images']);
    gulp.watch(['*.html','!index.html'],['copy_other']);
    gulp.watch('*.php',['phps']);
});

gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:9999,
        livereload:true
    })
})

gulp.task('default',['watch','server']);

