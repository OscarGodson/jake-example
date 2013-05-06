var watch = require('watch');
var colorize = require('./colorize');

desc('Watches for changes inthe files and rebuilds when they change');
task('watch', function () {
  console.log(colorize('Files are being watched for changes', 'yellow'));
  var rebuild = function () {
    jake.Task.minify.execute();
  };
  watch.createMonitor('./', function (monitor) {
    // Just for example we'll just monitor the example.js file
    monitor.files['./js/example.js'];
    monitor.on("changed", rebuild);
  });
});
