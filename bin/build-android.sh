#!/bin/bash
cd $(dirname $0)/../
export ANDROID_SDK_ROOT="$HOME/Library/Android/sdk"

cordova build android --release --buildConfig=./build.json
