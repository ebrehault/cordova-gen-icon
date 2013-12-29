
var genicon = require("./libs/CordovaGenIcon");

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

exports.CordovaGenIcon = genicon.CordovaGenIcon;
exports.generate = generate;

// vim: ts=2 sw=2

