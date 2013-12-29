
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

describe("exports", function() {
  it("generate", function(done) {
    if (typeof genicon.generate === "function") {
      done();
    } else {
      done("generate is not function");
    }
  });
  it("CordovaGenIcon", function(done) {
    if (typeof genicon.CordovaGenIcon === "function"
        && typeof (new genicon.CordovaGenIcon) === "object") {
      done();
    } else {
      done("CordovaGenIcon is not object");
    }
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

});

// vim: ts=2 sw=2

