
/**
 * @file
 * Cordova Generate Icon.
 *
 * @author Naoki Takimura <n.takimura@gmail.com>
 */
var util = require("util"),
    genicon = require("./GenIcon");

/**
 * @constructor
 * @summary Cordova Generate Icon.
 * @param options options
 */
function CordovaGenIcon(options) {
  this.verbose = (options && options.verbose !== undefined && options.silent === undefined) ?
      options.verbose : false;
  this.silent = (options && options.silent !== undefined) ?
      options.silent : false;
  this.project = (options && options.project !== undefined) ?
      options.project : ".";
  this.icon = (options && options.icon !== undefined) ?
      options.icon : undefined;

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
    this.target.push("amazon-fireos");
  }
}
util.inherits(CordovaGenIcon, genicon.GenIcon);
exports.CordovaGenIcon = CordovaGenIcon;

/**
 * @summary Generate Amazon Fire OS Icon.
 * @param {String} name projectn name.
 * @param {String} src source image path.
 * @param {String} platforms platforms directory path.
 * @param {Function} clbk callback function.
 */
CordovaGenIcon.prototype.generateAmazonFireOSIcon = function(name, src, platforms, clbk) {
  var dests = [{
      dest: platforms + "/amazon-fireos/res/drawable/icon.png",
      width: 96, height: 96
  }, {
      dest: platforms + "/amazon-fireos/res/drawable-ldpi/icon.png",
      width: 48, height: 48
  }, {
      dest: platforms + "/amazon-fireos/res/drawable-mdpi/icon.png",
      width: 48, height: 48
  }, {
      dest: platforms + "/amazon-fireos/res/drawable-hdpi/icon.png",
      width: 72, height: 72
  }, {
      dest: platforms + "/amazon-fireos/res/drawable-xhdpi/icon.png",
      width: 96, height: 96
  }];

  this.resize(src, dests, clbk);
};

/**
 * generateFirefoxOSIcon generates the Firefox OS icon image files.
 * Thats images are trimed as circle automatically.
 * @summary Generate Firefox OS Icon.
 * @param {String} name projectn name.
 * @param {String} src source image path.
 * @param {String} platforms platforms directory path.
 * @param {Function} clbk callback function.
 */
CordovaGenIcon.prototype.generateFirefoxOSIcon = function(name, src, platforms, clbk) {
  var self = this,
      dests = [{
      dest: platforms + "/firefoxos/www/img/icon-30.png",
      width: 30, height: 30
  }, {
      dest: platforms + "/firefoxos/www/img/icon-60.png",
      width: 60, height: 60
  }, {
      dest: platforms + "/firefoxos/www/img/icon-128.png",
      width: 128, height: 128
  }];

  this.resize(src, dests, {
    circle: true
  }, function(err) {
    var i, dest;

    if (!self.silent) {
      if (err === null || err === undefined) {
        console.log("Insert 'icons' field into '" + platforms + "/firefoxos/www/manifest.web'.");
        console.log();
        console.log("\"icons:\": {");
        for (i in dests) {
          dest = dests[i];
          console.log("  \"" + dest.width + "\": " +
              dest.dest.replace(platforms + "/firefoxos/www", "") +
              ((Number(i) === dests.length - 1) ? "" : ","));
        }
        console.log("}");
        console.log();
      }
    }
    clbk(err);
  });
};

/**
 * generateIOSIcon generates the iOS icon image files.
 * Thats images have round corner automatically.
 * @summary Generate iOS Icon.
 * @param {String} name project name.
 * @param {String} src source image path.
 * @param {String} platforms platforms directory path.
 * @param {Function} clbk callback function.
 */
CordovaGenIcon.prototype.generateIOSIcon = function(name, src, platforms, clbk) {
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
      dest: platforms + "/ios/" + name + "/Resources/icons/iTunesArtwork.png",
      width: 512, height: 512
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
  }, {
      dest: platforms + "/ios/" + name + "/Resources/icons/iTunesArtwork@2x.png",
      width: 1024, height: 1024
  }];

  this.resize(src, dests, { roundCorner: true }, clbk);
};

/**
 * @summary Generate Android Icon.
 * @param {String} name projectn name.
 * @param {String} src source image path.
 * @param {String} platforms platforms directory path.
 * @param {Function} clbk callback function.
 */
CordovaGenIcon.prototype.generateAndroidIcon = function(src, platforms, clbk) {
  var dests = [{
      dest: platforms + "/android/res/drawable/icon.png",
      width: 96, height: 96
  }, {
      dest: platforms + "/android/res/drawable-ldpi/icon.png",
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

