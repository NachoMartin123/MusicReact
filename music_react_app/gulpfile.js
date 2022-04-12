var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.sass')//localizacion archivos sass
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//comprime archivos
        .pipe(autoprefixer())
        .pipe(gulp.dest('./src/css'))//destino archivos css generados
});

gulp.task('serve', function () {
    browserSync.init({
        server: { //server arranca en raiz de proyecto
            baseDir: "./",
            port: 3000
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('./src/sass/**/*.sass', gulp.series('sass')); //ejecuta task 'sass' ante algun cambio en archivos '.sass'
});

gulp.task('default', gulp.series('sass', 'watch'));