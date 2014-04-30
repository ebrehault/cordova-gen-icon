
var assert = require("assert");

describe("jshint", function() {
  var child_process = require("child_process");
  it("libs", function(done) {
    child_process.exec("jshint index.js libs/*.js", function(err, stdout, stderr) {
      if (err) {
        console.log(stdout);
        console.log(stderr);
        return done(err);
      }
      done();
    });
  });
  it("bin", function(done) {
    child_process.exec("jshint bin/*", function(err, stdout, stderr) {
      if (err) {
        console.log(stdout);
        console.log(stderr);
        return done(err);
      }
      done();
    });
  });
});

// vim: ts=2 sw=2


