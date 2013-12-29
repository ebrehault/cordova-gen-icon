
var util = require("util"),
    genicon = require("./GenIcon");

function PhoneGapGenIcon(options) {
  this.verbose = (options && options.verbose !== undefined) ?
      options.verbose : false;
  this.project = (options && options.project !== undefined) ?
      options.project : ".";
  this.icon = (options && options.icon !== undefined) ?
      options.icon : this.project + "/www/img/logo.png";

  this.target = [];
  if (options && options.android === true) {
    this.target.push("android");
  }
  if (options && options.ios === true) {
    this.target.push("ios");
  }
  if (options && options.firefoxos === true) {
    this.target.push("firefoxos");
  }
  if (options && options.amazonfireos === true) {
    this.target.push("amazonfireos");
  }

  if (this.verbose) {
    console.log("generate cordova icons with");
    console.log("project: " + this.project);
    console.log("icon   : " + this.icon);
    console.log("target : " + this.target);
    console.log();
  }

}
util.inherits(PhoneGapGenIcon, genicon.GenIcon);
exports.PhoneGapGenIcon = PhoneGapGenIcon;

PhoneGapGenIcon.prototype.generateAmazonFireOSIcon = function(clbk) {
  console.log("generate AmazonFire OS icons");
  clbk();
};

PhoneGapGenIcon.prototype.generateFirefoxOSIcon = function(clbk) {
  console.log("generate Firefox OS icons");
  clbk();
};

PhoneGapGenIcon.prototype.generateIOSIcon = function(name, src, platforms, clbk) {
  console.log("generate iOS icons");
  if (this.verbose) {
    console.log(name);
  }

  var dests = [{
      dest: platforms + "/ios/" + name + "/Resources/icons/icon.png",
      width: 57, height: 57
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-40.png",
      width: 40, height: 40
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-50.png",
      width: 50, height: 50
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-60.png",
      width: 60, height: 60
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-72.png",
      width: 72, height: 72
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-76.png",
      width: 76, height: 76
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-small.png",
      width: 29, height: 29
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon@2x.png",
      width: 114, height: 114
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-40@2x.png",
      width: 80, height: 80
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-50@2x.png",
      width: 100, height: 100
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-60@2x.png",
      width: 120, height: 120
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-72@2x.png",
      width: 144, height: 144
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-76@2x.png",
      width: 152, height: 152
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/icon-small@2x.png",
      width: 58, height: 58
  }];

  this.resize(src, dests, clbk);
};

PhoneGapGenIcon.prototype.generateAndroidIcon = function(src, platforms, clbk) {
  console.log("generate android icons");
  var dests = [{
      dest: platforms + "/android/res/drawable/icon.png",
      width: 96, height: 96
  }, {
      dest: platforms + "/android/res/drawable-mdpi/icon.png",
      width: 48, height: 48
  }, {
      dest: platforms + "/android/res/drawable-mdpi/icon.png",
      width: 48, height: 48
  }, {
      dest: platforms + "/android/res/drawable-hdpi/icon.png",
      width: 72, height: 72
  }, {
      dest: platforms + "/android/res/drawable-xhdpi/icon.png",
      width: 96, height: 96
  }];

  this.resize(src, dests, clbk);
};

// vim: ts=2 sw=2


