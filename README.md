cordova-gen-icon
-----------------------------------------------------------------------------
Cordova Generate Icon is a support tool for cordova application project.
cordova-gen-icon generates the icon image files for native applications from a logo image file.

Supported Platforms

* iOS(iPhone and iPad)
* Android

Install
-----------------------------------------------------------------------------

    $ npm install cordova-gen-icon

Usage
-----------------------------------------------------------------------------

Command

    % cordova-gen-icon [options]

Options

* -h, --help            output usage information
* -V, --version         output the version number
* -p, --project [path]  Cordova(PhoneGap) project path
* -s, --source [path]   original icon file path
* -v, --verbose         Verbose actions
* -a, --android         Generate android icons
* -i, --ios             Generate iOS icons

Example

    % cordova create helloworld
    Creating a new cordova project with name "HelloCordova" and id "io.cordova.hellocordova" at location "helloworld"
    % cd helloworld 
    % cordova platform add ios
    Creating ios project...
    Preparing ios project
    % cordova-gen-icon -i
    generate iOS icons
    success generate icon set

