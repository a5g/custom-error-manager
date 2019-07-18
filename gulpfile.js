const gulp = require('gulp')
const del = require('del')
const fs = require('fs')
const mocha = require('gulp-mocha')
const run = require('gulp-run-command').default

gulp.task('clean', () => {
  return del(['target/']).then(() => {
    if (!fs.existsSync('target')) {
      fs.mkdirSync('target')
    }
    if (!fs.existsSync('target/allure-results')) {
      fs.mkdirSync('target/allure-results')
    }

    if (!fs.existsSync('target/junit-results')) {
      fs.mkdirSync('target/junit-results')
    }
  })
})

gulp.task('run:tests', () => {
  return gulp.src(['./test/**/*.spec.ts'], { read: false }).pipe(
    mocha({
      reporter: 'mocha-multi-reporters',
      reporterOptions: {
        configFile: 'reports-config.json',
      },
      require: ['ts-node/register', 'tsconfig-paths/register'],
      timeout: 10 * 1000,
    }),
  )
})

gulp.task('test', gulp.series(['clean', 'run:tests']))
gulp.task('report', run('npm run allure-report'))
gulp.task('report:junit', run('npm run junit-report'))
