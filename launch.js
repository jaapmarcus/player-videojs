window.onload = function () {
    fireWhenReady();
};

console.log('test');
var attemps = 0;
function fireWhenReady() {
    console.log('fireWhenReady');
    if (typeof __cmp != "undefined") {
        console.log('fireWhenReady __cmp');
      __cmp("addEventListener", ["consent", loadAdsight, false], null);
      let result = __cmp("getCMPData");
        if (result) {
        console.log(result);
        loadAdsight();
        console.log('fireWhenReady __cmp result');
        }
    } else {
      if (typeof __tcfapi != "undefined") {
        __tcfapi("addEventListener", 2, loadAdsight);
      } else setTimeout(fireWhenReady, 100);
    }
    if (attemps > 20) {
      return;
    }
    attemps++;
}


function loadAdsight() {
    loadAnchor();
}

const loadAdsight_tcf = (tcData, success) => {
    console.log('loadAdsight');
    console.log(tcData);
    console.log(success);   
    if (success && tcData.eventStatus === "useractioncomplete") {
        tfcData = tcData;
        tcConsentString = tcData.tcString;
        loadAnchor();
      }
      if (success && tcData.eventStatus === "tcloaded") {
        tfcData = tcData;
        tcConsentString = tcData.tcString;
        loadAnchor();
      }
};

function firePlayer() {
    
}
  
function loadAnchor() {
    console.log(adsight_config);
    //check if adsight_config is defined
    if (!document.getElementById('adsight-anchor')) {
        return;
    }
    parentNode = document.getElementById('adsight-anchor').parentNode;
    para = parentNode.getElementsByTagName('p');
    para = Array.from(para);
    console.log(para[adsight_config.paragraphs]);
    div = document.createElement('div');
    div.id = 'adsight-video-container';
    parentNode.insertBefore(div, para[adsight_config.paragraphs]);
    div.innerHTML = `<div id="adsight-video-parent"><video id="adsight-video" controls class="video-js" muted="muted" playsinline="playsinline" preload="metadate" fluid="true">
      Your browser does not support the video tag.
      </video></div><div id="adsight-video-title" class="adsight-slider-header-not-active" style="display:none"><div id="adsight-close-button"><a href="" id="adsight-close-link-mobile" height="16px" width="16px"><img src="https://cdn.adsight.nl/close-darker.svg" style="max-height:16px !important" /></a></div></div>`
    //document.getElementById('adsight-video').src = adsight_config.video[0].url; 
    videojs('adsight-video').loadMedia({
        id: 'XYXYXYXY',
        src: adsight_config.video[0].url,
        type: 'video/mp4',
        width: '100%',
    });

}