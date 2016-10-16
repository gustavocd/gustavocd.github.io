const gulp = require("gulp"),
    gulpSass = require("gulp-sass"),
    gulpPug = require("gulp-pug"),
    gulpBabel = require("gulp-babel"),
    browserSync = require("browser-sync").create()

gulp.task("browser-sync", ["sass"], () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    })

    gulp.watch("./src/sass/**/*.sass", ["sass"])
    gulp.watch("./src/views/*.pug", ["pug"])
    gulp.watch("./src/js/*.js", ["babel"])
    gulp.watch("./src/sass/**/*.sass")
        .on("change", browserSync.reload)
    gulp.watch("./src/js/*.js")
        .on("change", browserSync.reload)
    gulp.watch("./src/views/*.pug")
        .on("change", browserSync.reload)
})

gulp.task("sass", ["pug"],() => {
    return gulp.src("./src/sass/**/*.sass")
        .pipe(gulpSass())
        .pipe(gulp.dest("./dist/css/"))
        .pipe(browserSync.stream())
})

gulp.task("pug", () => {
    return gulp.src("./src/views/*.pug")
        .pipe(gulpPug({
            pretty: true
        }))
        .pipe(gulp.dest("./dist/"))
})

gulp.task("babel", () => {
    return gulp.src("./src/js/main.js")
        .pipe(gulpBabel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("./dist/js"))
})

gulp.task("default", ["browser-sync", "babel"])