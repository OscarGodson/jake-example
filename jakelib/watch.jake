var watch = require('node-watch');
var colorize = require('./colorize');

desc('Watches for changes inthe files and rebuilds when they change');
task('watch', function () {
  console.log(colorize('================================================\n| Files are now being watched. ctrl+c to exit. |\n================================================', 'yellow'));
  watch('./js/example.js', function(filename) {
    jake.Task.minify.execute();
  });
});
