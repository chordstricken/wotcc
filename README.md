# This repository has moved!
See [https://github.com/silvermast/wheeloftime-compendium-app](https://github.com/silvermast/wheeloftime-compendium-app)

Wheel of Time Character Compendium
==================================
by [Jason Wright](http://jasonwright.info) at [Silvermast LLC](https://silvermast.io)

Unofficial spoiler-resistant index of Wheel of Time characters, sorted by Book and Chapter. All data is stored on-device. No user information required.

![Screenshot](https://github.com/chordstricken/wotcc/raw/master/res/screenshot-2-md.png)

Libraries:
- [Cordova](http://cordova.apache.org)
- [VueJS](http://vuejs.org)
- [jQuery](http://jquery.com)
- [Bootstrap](http://getbootstrap.com)

Attributions:
- Authors: [Robert Jordan](https://en.wikipedia.org/wiki/Robert_Jordan) and [Brandon Sanderson](https://brandonsanderson.com/) for writing an incredible series
- [Karl Hammond's WoT Compendium](http://sites.ugcs.caltech.edu/~karlh/cgi-bin/wot.cgi)

## Troubleshooting & Tips

*emulator: ERROR: ANDROID_SDK_ROOT is undefined*
Find and set your ANDROID_SDK_ROOT
```
export ANDROID_SDK_ROOT="$HOME/Library/Android/sdk"
```

*List devices*
```
cordova run android --list
```
