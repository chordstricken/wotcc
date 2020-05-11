#!/bin/bash
##

root=$(realpath $(dirname "$0")/../)
splash="$root/res/splash.png"

# ios
mkdir -p "$root/res/screen/ios"
set -x
convert $splash -gravity center -crop 2048x1536+0+0 "$root/res/screen/ios/screen-ipad-landscape-2x.png"
convert $splash -gravity center -crop 1024x768+0+0  "$root/res/screen/ios/screen-ipad-landscape.png"
convert $splash -gravity center -crop 1536x2048+0+0 "$root/res/screen/ios/screen-ipad-portrait-2x.png"
convert $splash -resize 1024x1024 -gravity center -crop 768x1024+0+0  "$root/res/screen/ios/screen-ipad-portrait.png"
convert $splash -gravity center -crop 960x640+0+0   "$root/res/screen/ios/screen-iphone-landscape-2x.png"
convert $splash -resize 1024x1024 -gravity center -crop 480x320+0+0   "$root/res/screen/ios/screen-iphone-landscape.png"
convert $splash -resize 1024x1024 -gravity center -crop 640x960+0+0   "$root/res/screen/ios/screen-iphone-portrait-2x.png"
convert $splash -resize 1536x1536 -gravity center -crop 640x1136+0+0  "$root/res/screen/ios/screen-iphone-portrait-568h-2x.png"
convert $splash -resize 512x512 -gravity center -crop 320x480+0+0   "$root/res/screen/ios/screen-iphone-portrait.png"
convert $splash -gravity center -crop 750x1334+0+0  "$root/res/screen/ios/Default-667h.png"
convert $splash -gravity center -crop 1242x2208+0+0 "$root/res/screen/ios/Default-736h.png"
convert $splash -gravity center -crop 1125x2436+0+0 "$root/res/screen/ios/Default-2436h.png"
convert $splash -gravity center -crop 2208x1242+0+0 "$root/res/screen/ios/Default-Landscape-736h.png"
convert $splash -gravity center -crop 2436x1125+0+0 "$root/res/screen/ios/Default-Landscape-2436h.png"
