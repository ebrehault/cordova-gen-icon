/**
 * @file
 * cordova-gen-icon is Apache Cordova Icon Generator node module.
 * It generates the icon files for your project.
 *
 * @example
 * var genicon = require("cordova-gen-icon");
 * genicon.generate(function(err) {
 *   if (err) {
 *     console.error(err);
 *   }
 * });
 * @author Naoki Takimura <n.takimura@gmail.com>
 */

var genicon = require("./libs/CordovaGenIcon");

/**
 * 'generate' makes cordova icon files from source icon file.
 * It based on option.project and option.icon.
 * If there is not set, it uses default parameters.
 *
 * @summary Generate cordova icon files.
 * @param {Object} options options
 * @param {Function} clbk callback function
 */
function generate(options, clbk) {
  if (clbk === undefined) {
    clbk = options;
  }

  var generator = new genicon.CordovaGenIcon(options);
  generator.generate(function(err) {
    if (typeof clbk === "function") {
      clbk(err);
    }
  });
}

exports.generate = generate;

exports.CordovaGenIcon = genicon.CordovaGenIcon;

// vim: ts=2 sw=2

