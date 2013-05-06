// For fun and profit!
// Simply colorizes the output to the terminal
function colorize(str, color) {
  var colors = {
    'green': '32m',
    'red': '31m',
    'yellow': '33m'
  }
  return colors[color] ? '\033[' + colors[color] + str + '\033[39m' : str
}

module.exports = colorize;
