#!/bin/bash
cd $(dirname $0)/../

cordova build android --release --buildConfig=./build.json
