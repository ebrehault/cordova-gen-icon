cordova-gen-icon
-----------------------------------------------------------------------------
Cordova Generate Icon is a support tool for cordova application project.
cordova-gen-icon generates the icon image files for native applications from a logo image file.

Supported Platforms

* iOS(iPhone and iPad)
* Android
* Firefox OS
* Amazon Fire OS

Install
-----------------------------------------------------------------------------

    $ npm install cordova-gen-icon

Usage
-----------------------------------------------------------------------------

Command

    $ cordova-gen-icon [options]

Options

* -h, --help            output usage information
* -V, --version         output the version number
* -v, --verbose         verbose actions
* -a, --android         generate Android icons
* -i, --ios             generate iOS icons
* -f, --firefoxos       generate FirefoxOS icons
* -z, --amazonfire      generate Amazon Fire OS icons
* -p, --project [path]  Cordova(PhoneGap) project path
* -s, --source [path]   original icon file path

Example
-----------------------------------------------------------------------------
At first, create your project by `cordova create [project]`,
and install platform by `cordova platform add [platform]`.
After that, create the icon image files by `cordova-gen-icon` with platform options.

    $ cordova create helloworld
    Creating a new cordova project with name "HelloCordova" and id "io.cordova.hellocordova" at location "helloworld"
    $ cd helloworld 
    $ cordova platform add ios
    Creating ios project...
    Preparing ios project
    $ cordova-gen-icon -i
    generate iOS icons
    success generate icon set


