
var path = require("path"),
    fs = require("fs"),
    domjs = require("dom-js"),
    imagemagick = require("imagemagick");

function GenIcon() {
}
exports.GenIcon = GenIcon;

GenIcon.prototype.generate = function(clbk) {
  var self = this,
      src,
      platforms,
      targets = self.target;

  if (clbk === undefined) {
    clbk = function(){};
  }

  src = (self.icon) ? self.icon : self.project + "/www/img/logo.png";
  platforms = self.project + "/platforms";

  fs.readFile(self.project + "/www/config.xml", function(err, data) {
    if (err) {
      return clbk(err);
    }
    (new domjs.DomJS()).parse(data.toString(), function(err, dom) {
      if (err) {
        return clbk(err);
      }

      var name, i;
      for (i in dom.children) {
        if (dom.children[i].name === "name") {
          name = dom.children[i].children[0].text;
        }
      }

      (function _generate(err){
        if (err) {
          return clbk(err);
        }

        var target = targets.shift();
        if (target === null || typeof target === undefined) {
          return clbk();
        }

        fs.exists(platforms + "/" + target, function(exists) {
          if (exists) {
            if (target === "android") {
              self.generateAndroidIcon(src, platforms, function(err) {
                _generate(err);
              });
            } else if (target === "ios") {
              self.generateIOSIcon(name, src, platforms, function(err) {
                _generate(err);
              });
            } else if (target === "amazon-fireos") {
              self.generateAmazonFireOSIcon(name, src, platforms, function(err) {
                _generate(err);
              });
            } else if (target === "firefoxos") {
              self.generateFirefoxOSIcon(name, src, platforms, function(err) {
                _generate(err);
              });
            }
          } else {
            console.log("platform \"" + target + "\" does not exist.");
            _generate();
          }
        });
      })();

    });
  });

};

GenIcon.prototype.convert = function(src, dest, width, height, options, clbk) {
  if (this.verbose) {
    console.log("resize");
    console.log("from  : " + src);
    console.log("dest  : " + dest);
    console.log("width : " + width);
    console.log("height: " + height);
    console.log();
  }

  if (clbk === undefined) {
    clbk = options;
    options = {};
  }

  var dir = path.dirname(dest);
  this.mkdir(dir, function(err) {
    if (err && err.code !== "EEXIST") {
      return clbk(err);
    }
    imagemagick.resize({
      srcPath: src,
      dstPath: dest,
      width: width,
      height: height + "!",
    }, function(err) {
      if (err) {
        clbk(err);
      }

      if (options && options.circle === true) {
        imagemagick.convert([
          "-size", width + "x" + height,
          "xc:none",
          "-fill", dest,
          "-draw",
          "circle " + (width / 2) + "," + (width / 2) + " " + (width / 2) + ",1",
          dest
        ], function(err) {
          clbk(err);
        });
      } else {
        clbk(err);
      }
    });
  });

};

GenIcon.prototype.resize = function(src, dests, options, clbk) {
  var self = this,
      targets = [].concat(dests);

  if (clbk === undefined) {
    clbk = options;
    options = undefined;
  }

  (function _resize(err) {
    if (err) {
      return clbk(err);
    }
    var target = targets.shift();
    if (target === null || target === undefined) {
      return clbk(err);
    }

    self.convert(src, target.dest, target.width, target.height, options, function(err) {
      _resize(err);
    });
  })();
};

GenIcon.prototype.mkdir = function(dir, clbk) {
  var self = this;
  fs.exists(path.dirname(dir), function(exists) {
    if (!exists) {
      self.mkdir(path.dirname(dir), function(err) {
        if (err) {
          return clbk(err);
        }
        self.mkdir(dir, function(err) {
          clbk(err);
        });
      });
    } else {
      fs.mkdir(dir, function(err) {
        clbk(err);
      });
    }
  });
};

// vim: ts=2 sw=2
