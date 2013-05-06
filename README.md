# Example Jake setup

Comes with Uglify and JSHint. Comes with a watch task so you can save files and
it'll build all files for you.

To just run linting on `example.js` run `jake lint`.

To just minify `example.js` run `jake minify`.

To lint, and if passing, minify run `jake build`.

To start watching for file changes to `example.js` run `jake watch`. This will
automatically run `jake minify` for you.
