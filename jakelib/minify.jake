var fs = require('fs');
var uglifyjs = require("uglify-js");
var colorize = require('./colorize');

/**
 * Minifies JS
 */
desc('Build all the assets');
task('minify', {async: true}, function () {
  var file = uglifyjs.minify('js/example.js');
  fs.writeFile('js/example.min.js', file.code, function (err) {
    if (err) throw new Error(colorize(err, 'red'));
    
    console.log(colorize('√ Minify success', 'green'));
    complete();
  });
});


