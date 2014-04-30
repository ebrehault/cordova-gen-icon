
var genicon = require("../index.js");
var assert = require("assert");

describe("bin", function() {
  it("cordova-gen-icon exists", function(done) {
    var fs = require("fs");
    fs.exists("bin/cordova-gen-icon", function(exists) {
      if (!exists) {
        done("cordova-gen-icon not found");
      }
      done();
    });
  });
});

describe("cordova-gen-icon", function() {
  var child_process = require("child_process");

  this.timeout(5000);

  describe("no error", function() {
    it("-h", function(done) {
      child_process.exec("bin/cordova-gen-icon -h", function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--help", function(done) {
      child_process.exec("bin/cordova-gen-icon --help", function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-V", function(done) {
      child_process.exec("bin/cordova-gen-icon -V", function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--version", function(done) {
      child_process.exec("bin/cordova-gen-icon --version", function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-a", function(done) {
      child_process.exec("../../bin/cordova-gen-icon -a", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--android", function(done) {
      child_process.exec("../../bin/cordova-gen-icon --android", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-i", function(done) {
      child_process.exec("../../bin/cordova-gen-icon -i", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--ios", function(done) {
      child_process.exec("../../bin/cordova-gen-icon --ios", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-f", function(done) {
      child_process.exec("../../bin/cordova-gen-icon -f", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--firefoxos", function(done) {
      child_process.exec("../../bin/cordova-gen-icon --firefoxos", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-z", function(done) {
      child_process.exec("../../bin/cordova-gen-icon -z", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--amazonfireos", function(done) {
      child_process.exec("../../bin/cordova-gen-icon --amazonfireos", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--windowsphone8", function(done) {
      child_process.exec("../../bin/cordova-gen-icon --windowsphone8", {
        cwd: "tests/cordova-test"
      }, function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-p", function(done) {
      child_process.exec("bin/cordova-gen-icon -p tests/cordova-test",
      function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--project", function(done) {
      child_process.exec("bin/cordova-gen-icon --project tests/cordova-test",
      function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-c", function(done) {
      child_process.exec("bin/cordova-gen-icon --project tests/cordova-test -i -a -f -z -c tests/icon.png",
      function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--icon", function(done) {
      child_process.exec("bin/cordova-gen-icon --project tests/cordova-test -i -a -f -z --icon tests/icon.png",
      function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-s", function(done) {
      child_process.exec("bin/cordova-gen-icon --project tests/cordova-test -s",
      function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--silent", function(done) {
      child_process.exec("bin/cordova-gen-icon --project tests/cordova-test --silent",
      function(error, stdout, stderr) {
        done(error);
      });
    });
    it("-v", function(done) {
      child_process.exec("bin/cordova-gen-icon --project tests/cordova-test -v",
      function(error, stdout, stderr) {
        done(error);
      });
    });
    it("--verbose", function(done) {
      child_process.exec("bin/cordova-gen-icon --project tests/cordova-test --verbose",
      function(error, stdout, stderr) {
        done(error);
      });
    });
  });
  describe("error code", function() {
    it("-?", function(done) {
      child_process.exec("bin/cordova-gen-icon -?", function(error, stdout, stderr) {
        if (error === null) {
          done("no error");
        }
        assert.equal(error.code, 1);
        done();
      });
    });
    it("not project", function(done) {
      child_process.exec("bin/cordova-gen-icon", function(error, stdout, stderr) {
        if (error === null) {
          done("no error");
        }
        assert.equal(error.code, 1);
        done();
      });
    });
    it("not project, -p", function(done) {
      child_process.exec("bin/cordova-gen-icon -p tests",
      function(error, stdout, stderr) {
        if (error === null) {
          done("no error");
        }
        assert.equal(error.code, 1);
        done();
      });
    });
    it("not project, -s", function(done) {
      child_process.exec("bin/cordova-gen-icon -s", function(error, stdout, stderr) {
        if (error === null) {
          done("no error");
        }
        assert.equal(error.code, 1);
        done();
      });
    });
    it("not project, -v", function(done) {
      child_process.exec("bin/cordova-gen-icon -v", function(error, stdout, stderr) {
        if (error === null) {
          done("no error");
        }
        assert.equal(error.code, 1);
        done();
      });
    });
  });
});


