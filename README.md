# Example Jake setup

Comes with Uglify and JSHint. Comes with a watch task so you can save files and
it'll build all files for you.

## Setup

1. Clone the repo: `git@github.com:OscarGodson/jake-example.git;cd jake-example`

2. Install Jake: `sudo npm install -g Jake`.

3. Run: `jake setup`

## Usage
To just run linting on `example.js` run `jake lint`.

To just minify `example.js` run `jake minify`.

To lint, and if passing, minify run `jake build`.

To start watching for file changes to `example.js` run `jake watch`. This will
automatically run `jake minify` for you.
