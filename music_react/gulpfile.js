var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browsersync = require('browser-sync').create();

//gulp.task('sass', function () {
//    return gulp.src('./src/sass/**/*.sass')//localizacion archivos sass
//        .pipe(sourcemaps.init())
//        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))//comprime archivos
//        .pipe(sourcemaps.write())
//        .pipe(gulp.dest('./src/css'))//destino archivos css generados
//        .pipe(browsersync.stream())//recargar browsersync
//});

//gulp.task('serve', function () {
//    browsersync.init({
//        server: { //server arranca en raiz de proyecto
//            baseDir: "./"
//        }
//    });
//    gulp.watch('./src/sass/**/*.sass', gulp.series('sass')); //ejecuta task 'sass' ante algun cambio en archivos '.sass'
//});

///gulp.task('default', gulp.series('sass', 'serve'), function() {});