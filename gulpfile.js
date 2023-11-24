const gulp = require("gulp");
const fileinclude = require("gulp-file-include");

const path = {
  scripts: {
    src: "./src/",
    dest: "./build/",
  },
};

const includeHTML = async () => {
  return gulp
    .src([
      "./src/pages/*.html",
      "!./src/components/*.html", // ignore
    ])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(path.scripts.dest));
};

exports.default = includeHTML;
