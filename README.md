cordova-gen-icon
-----------------------------------------------------------------------------
Cordova Generate Icon is a support tool for the [Cordova][cordova] application project.
`cordova-gen-icon` generates the icon image files for native applications from a logo image file.

Supported Platforms

* iOS(iPhone and iPad)
    * the iOS icon images have round corner
* Android
* Firefox OS
    * the Firefox OS icon images are trimmed as circle.
* Amazon Fire OS
* Windows Phone 8

Install
-----------------------------------------------------------------------------

    $ npm install -g cordova-gen-icon

Node plugin `imagemagick` depends on [ImageMagick][imagemagick]. Please install it.

On Linux(Ubuntu)

    $ apt-get install imagemagick

On Mac OS X(Homebrew)

    $ brew install imagemagick

Usage
-----------------------------------------------------------------------------

Command

    $ cordova-gen-icon [options]

Options

* -h, --help            output usage information
* -V, --version         output the version number
* -v, --verbose         verbose actions
* -s, --silent          silent actions
* -a, --android         generate Android icons
* -i, --ios             generate iOS icons
* -f, --firefoxos       generate FirefoxOS icons
* -z, --amazonfire      generate Amazon Fire OS icons
* -8, --windowsphone8   generate Windows Phone 8 icons
* -p, --project [path]  Cordova(PhoneGap) project path
* -c, --icon [path]     original icon file path

Example
-----------------------------------------------------------------------------
At first, create your project by `cordova create [project] [id]`,
and install platform by `cordova platform add [platform]`.
After that, create the icon image files by `cordova-gen-icon`.

    $ cordova create hello com.example.hello
    Creating a new cordova project with name "HelloCordova" and id "com.example.hello" at location "hello"
    $ cd hello
    $ cordova platform add ios
    Creating ios project...
    Preparing ios project
    $ cordova-gen-icon 
    Generate cordova icons with
    project: .
    icon   : ./www/img/logo.png
    target : 

    generate iOS icons
    Success generate icon set


License
-----------------------------------------------------------------------------
Copyright 2013 Naoki Takimura under the [WTFPL][wtfpl].

[cordova]: http://cordova.apache.org/ "Apache Cordova"
[imagemagick]: http://www.imagemagick.org/ "ImageMagick"
[wtfpl]: http://www.wtfpl.net/about/ "WTFPL"

