var fs = require('fs');
var jshint = require("jshint").JSHINT;
var colorize = require("./colorize");

/**
 * LINT CODE
 */
desc('Lint code')
task('lint', {async: true}, function () {
  // First, get the file contents
  fs.readFile('js/example.js', 'utf8', function (err, data) {
    // Make sure there wasn't an error trying to read the file
    if (err) throw new Error(colorize('Error reading file: ' + err));
    // Lint the code and return the the value. Will return true if it passes
    var success = jshint(data);
    if (!success) {
      for (x in jshint.errors) {
        console.log(colorize('- Error on line ' + jshint.errors[x].line + ': ' + jshint.errors[x].reason, 'yellow'));
      }
      throw new Error(colorize('× Lint failed', 'red'));
    }
    console.log(colorize('√ Lint success', 'green'));
    complete();
  });
});

