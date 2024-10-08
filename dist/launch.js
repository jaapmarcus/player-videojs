window.onload = function () {
    fireWhenReady();
};

var attemps = 0;
function fireWhenReady() {
    if (typeof __cmp != "undefined") {
      __cmp("addEventListener", ["consent", loadAdsight, false], null);
      let result = __cmp("getCMPData");
      if (result) {
        loadAdsight();
      }
    } else {
      if (typeof __tcfapi != "undefined") {
        __tcfapi("addEventListener", 2, loadAdsight_tcf);
      } else setTimeout(fireWhenReady, 100);
    }
    if (attemps > 20) {
      return;
    }
    attemps++;
}


function loadAdsight() {
    if (success && tcData.eventStatus === "useractioncomplete") {
        tfcData = tcData;
        tcConsentString = tcData.tcString;
        
      }
      if (success && tcData.eventStatus === "tcloaded") {
        tfcData = tcData;
        tcConsentString = tcData.tcString;
        
      }
}

function loadAdsight_tcf() {
    if (success && tcData.eventStatus === "useractioncomplete") {
        tfcData = tcData;
        tcConsentString = tcData.tcString;
        
      }
      if (success && tcData.eventStatus === "tcloaded") {
        tfcData = tcData;
        tcConsentString = tcData.tcString;
        
      }
    };
    
    function loadAdsight() {
      if (typeof MediaElementPlayer == "undefined") {
        setTimeout(firePlayer, 100);
      } else {

      }
}

function firePlayer() {
    
  }