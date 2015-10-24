var gulp = require('gulp'),
  browserSync = require('browser-sync');


gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: './html'
    }

  });

  gulp.watch('html/**/*.html').on('change', browserSync.reload);
});
  
  