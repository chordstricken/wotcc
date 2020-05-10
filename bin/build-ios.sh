#!/bin/bash
cd $(dirname $0)/../

cordova plugin save
cordova platform rm ios
cordova platform add ios
cordova build ios --buildFlag="-UseModernBuildSystem=0"
