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
    div.id = 'adsight';
    div.style.boder = '1px solid red';
    parentNode.insertBefore(div, para[adsight_config.paragraphs]);

}