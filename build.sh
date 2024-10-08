#!/bin/bash

if [ ! -f './dist/' ]; then
    mkdir -p ./dist/
fi 
if [ ! -f './temp/' ]; then
    mkdir -p ./temp/
fi 
rm -fr /dist/*


if [ -f './node_modules/' ]; then 
    echo "node_modules folder missing"
    exit;
fi

cp ./node_modules/video.js/dist/video.min.js ./temp/
cp ./node_modules/videojs-contrib-ads/dist/videojs.ads.min.js ./temp/
cp ./node_modules/videojs-ima/dist/videojs.ima.min.js ./temp/


cp ./node_modules/video.js/dist/video-js.min.css ./temp/
cp ./node_modules/videojs-contrib-ads/dist/videojs-contrib-ads.css ./temp/
cp ./node_modules/videojs-ima/dist/videojs.ima.css ./temp/

echo "Files copied to temp folder"
{
    cat ./temp/video.min.js
    cat ./temp/videojs.ads.min.js
    cat ./temp/videojs.ima.min.js
} > ./dist/video.min.js

{
    cat ./temp/video-js.min.css
    cat ./temp/videojs-contrib-ads.css
    cat ./temp/videojs.ima.css
} > ./dist/video-js.min.css
echo "Files merged to dist folder"


cp ./launch.js ./dist/launch.js
echo "Copy launch.js to dist folder"

scp ./dist/* root@ad.adsight.nl:/var/www/html/videojs/
echo "Files copied to server"
