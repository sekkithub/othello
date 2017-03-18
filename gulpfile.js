const gulp = require('gulp');
const gutil = require('gulp-util');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const eslint = require('gulp-eslint');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const browserify = require('browserify');
const watchify = require('watchify');

const paths = {
  styles: {
    all: './resources/styles/**/*',
    input: [
      './resources/styles/main.scss',
    ],
    output: './public/styles/',
  },
  scripts: {
    all: [
      './resources/scripts/main.js',
      './resources/scripts/modules/**/*',
    ],
    input: [
      './resources/scripts/main.js',
    ],
    output: './public/scripts/',
    outputName: 'main.js',
  },
  templates: {
    all: 'craft/templates/**/*',
  },
};

// Input file.
const bundler = browserify({
  entries: paths.scripts.input,
  cache: {},
  packageCache: {},
  plugin: [watchify],
  debug: true,
}).transform('babelify', {
  presets: ['es2015'],
});

gulp.task('lint', () => {
  gutil.log('Linting JS...');
  return gulp.src(paths.scripts.all)
    .pipe(eslint())
    .pipe(eslint.format());
});

function bundle() {
  gutil.log('Compiling JS...');
  return bundler
    .bundle()
    .on('error', (err) => {
      gutil.log(err.message);
      this.emit('end');
    })
    .pipe(source(paths.scripts.outputName))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scripts.output))
    .pipe(browserSync.stream());
}

// On updates recompile
bundler.on('update', bundle);
bundler.on('log', gutil.log);

gulp.task('watch:js', () => {
  gulp.watch(paths.scripts.all, ['lint']);
});

gulp.task('watch:sass', () => {
  gulp.watch(paths.styles.all, ['sass']);
});

gulp.task('watch:views', () => {
  gulp.watch(paths.templates.all, ['views']);
});

gulp.task('sass', () => {
  gutil.log('Sass task...');
  gulp.src(paths.styles.input)
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 3 version'] }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.styles.output))
    .pipe(browserSync.stream());
});

gulp.task('views', () => {
  gulp.src(paths.templates.all)
    .pipe(browserSync.stream());
});

gulp.task('initialBundle', () => {
  bundle();
});

gulp.task('browser-sync', () => {
  browserSync({
    proxy: 'othello.dev',
    port: 3000,
    open: true,
    notify: false,
  });
});

gulp.task('watch', ['watch:sass', 'watch:views', 'watch:js']);
gulp.task('default', ['watch', 'initialBundle', 'sass', 'views', 'browser-sync']);
