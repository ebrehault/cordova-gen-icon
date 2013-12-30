
var genicon = require("../index.js");
var assert = require("assert");

describe("format", function() {
  var child_process = require("child_process");
  it("jshint", function(done) {
    child_process.exec(
        "jshint index.js bin/* libs/*.js tests/*.js",
        function(error, stdout, stderr) {
          if (stderr) {
            console.error(stderr);
          }
          done(error);
        }
    );
  });
});

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

describe("exports", function() {
  it("generate", function(done) {
    if (typeof genicon.generate === "function") {
      done();
    } else {
      done("generate is not function");
    }
  });
  it("CordovaGenIcon", function(done) {
    if (typeof genicon.CordovaGenIcon === "function" &&
        typeof (new genicon.CordovaGenIcon()) === "object") {
      done();
    } else {
      done("CordovaGenIcon is not object");
    }
  });
});

describe("cordova-gen-icon", function() {
  var child_process = require("child_process");
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

describe("CordovaGenerateIcon", function() {
  before(function(done) {
    done();
  });

  describe("no param", function() {
    it("generate standard", function(done) {
      genicon.generate(function(err) {
        if (err) {
          done();
        } else {
          done("no error");
        }
      });
    });
    it("generate standard, empty option", function(done) {
      genicon.generate({
      }, function(err) {
        if (err) {
          done();
        } else {
          done("no error");
        }
      });
    });
  });

  describe("android", function() {
    it("generate standard", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        android: true
      }, function(err) {
        done(err);
      });
    });
    it("generate standard, verbose", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        android: true,
        verbose: true
      }, function(err) {
        done(err);
      });
    });
  });

  describe("ios", function() {
    it("generate standard", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        ios: true
      }, function(err) {
        done(err);
      });
    });
    it("generate standard", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        ios: true,
        verbose: true
      }, function(err) {
        done(err);
      });
    });
  });


  describe("firefoxos", function() {
    it("generate standard", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        firefoxos: true
      }, function(err) {
        done(err);
      });
    });
    it("generate standard", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        firefoxos: true,
        verbose: true
      }, function(err) {
        done(err);
      });
    });
  });


  describe("amazonfireos", function() {
    it("generate standard", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        amazonfireos: true
      }, function(err) {
        done(err);
      });
    });
    it("generate standard", function(done) {
      genicon.generate({
        project: "tests/cordova-test",
        amazonfireos: true,
        verbose: true
      }, function(err) {
        done(err);
      });
    });
  });

});

// vim: ts=2 sw=2

