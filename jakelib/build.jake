var colorize = require('./colorize');

desc('Builds the project and lints before building');
task('build', {async: true}, function () {
  var lintTask = jake.Task.lint;
  var minifyTask = jake.Task.minify;

  // Listen for when the lint task is complete...
  lintTask.addListener('complete', function () {
    // ...if it gets here without errors then it means it passed linting
    // Do the same for minifying now.
    minifyTask.addListener('complete', function () {
      // Whoo! No errors anywhere!
      console.log(colorize('√ Build complete :)', 'green'));
    });
    minifyTask.invoke();
  });

  lintTask.invoke();
});
