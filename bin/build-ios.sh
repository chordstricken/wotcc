#!/bin/bash
cd $(dirname $0)/../

cordova plugin save
cordova platform rm ios
cordova platform add ios
cordova build ios --buildFlag="-UseModernBuildSystem=0"

#plutil \
#    -replace NSPhotoLibraryUsageDescription \
#    -string "Allows users to import Adventure photos and profile headshots" \
#    platforms/ios/Awayn/Awayn-Info.plist
#
#plutil \
#    -replace NSCameraUsageDescription \
#    -string "Allows users to import Adventure photos and profile headshots" \
#    platforms/ios/Awayn/Awayn-Info.plist
