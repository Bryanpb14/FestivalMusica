const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');



//funcion que compila sass
function css() {
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function watchArchivos() {
    watch(' src/scss/**/*.scss', css); // * = la carpeta actual - ** = todos los archivos con esa extencion
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.watchArchivos = watchArchivos;