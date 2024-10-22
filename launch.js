adsight_config = {
  'paragraphs': 4,    
  'video' : [
      { 'url' : 'https://cdn.adsight.nl/AS-tips5.mp4' },
      { 'url' : 'https://cdn.adsight.nl/AS-tips5.mp4' }
  ],
  'readtext' : 'Je leest nu:<br />',
}

var adUnits = [{
  code: 'adsight-video',
  mediaTypes: {
    video: {
      context: 'outstream',
      mimes: ['video/x-ms-wmv', 'video/mp4'],
      maxduration: 30,
      api: [1, 2, 3, ,5, 6],
      protocols: [1, 2, 3, 4, 5, 6, 7, 8],
      playerSize: [640, 480],
      playbackmethod: [6],
      placement: 3,
      plcmt: 4,
      skip: 1,
      linearity: 2
      }
  },
  video: {
    divId: 'adsight-video',
  },

  bids: [{
      bidder: 'rubicon',
      params: {
          accountId: 24676,
          siteId: 564248,
          zoneId: 3567354
      }
  }, {
      bidder: 'teads',
      params: {
          pageId: 148824,
          placementId: 162940
      }
    },
    { bidder: 'smartadserver', params: { 'networkId': 4411, 'siteId': 678265, 'pageId': 2022362, 'formatId': 135028 }}
  ]
}];

  window.mobileCheck = function () {
    let check = false;
    (function (a) {
      /* eslint-disable */
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a,
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4),
        )
      )
        /* eslint-enable */
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  
  let isMobile = window.mobileCheck();

window.onload = function () {
  loadAnchor();
  loadClickPlay();
};


function loadClickPlay() {
  console.log('adsight click play');
  let videojs = document.getElementsByTagName('video');
  videojs = Array.from(videojs);
  console.log(videojs); 
  videojs.forEach(function (video) {
    console.log(video);
  });
}

var i = 0;
function loadAnchor() {
  console.log(sliderPlaying);
  console.log(adsight_config);
  //check if adsight_config is defined
  if (!document.getElementById('adsight-anchor')) {
      return;
  }
  console.log('adsight anchor loaded');
  parentNode = document.getElementById('adsight-anchor').parentNode;
  para = parentNode.getElementsByTagName('p');
  para = Array.from(para);
  console.log(para[adsight_config.paragraphs]);
  div = document.createElement('div');
  div.id = 'adsight-video-container';
  parentNode.insertBefore(div, para[adsight_config.paragraphs]);
    div.innerHTML = `<div id="adsight-video-parent"><video id="adsight-video${i}" controls class="video-js" muted="muted" playsinline="playsinline" preload="metadate" fluid="true">
    Your browser does not support the video tag.
    </video></div><div id="adsight-video-title" class="adsight-slider-header-not-active">${adsight_config.readtext}${document.title} <div id="adsight-close-button"><a href="" id="adsight-close-link-mobile" height="16px" width="16px"><img src="https://cdn.adsight.nl/close-darker.svg" style="max-height:16px !important" /></a></div></div>`;
    div2 = document.createElement('div');   
  div2.id = 'adsight-video-resize';
  console.log(div2);
    parentNode.insertBefore(div2, para[adsight_config.paragraphs]);
  pbjs.que.push(function () {

    console.log('Prebid loaded');
    
    pbjs.setConfig({
        video: {
            providers: [{
                divId: 'adsight-video'+ i,
                vendorCode: 2, // videojs vendorCode
                playerConfig: {
                    params: {
                        adPluginConfig: {
                        numRedirects: 10,
                        adLabel: "Deze advertentie eindigt over",
                        },
                        vendorConfig: {
                            controls: true,
                            autoplay: false,
                            preload: "auto",
                        }
                    }
                },
                // Configure your Ad Server Integration
                adServer: {
                    vendorCode: 'gam',
                    baseAdTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?iu=/22999307524/tipsenideetjes.nl/video&description_url=https%3A%2F%2Fwww.tipsenweetjes.nl%2F&tfcd=0&npa=0&sz=400x300%7C640x480&gdfp_req=1&unviewed_position_start=1&output=vast&env=vp&impl=s&correlator='
                },
            },]
        },
        cache: {
            url: 'https://prebid.adnxs.com/pbc/v1/cache'
        },
        targetingControls: {
            allowTargetingKeys: ['BIDDER', 'AD_ID', 'PRICE_BUCKET', 'SIZE', 'DEAL', 'SOURCE', 'FORMAT', 'UUID', 'CACHE_ID', 'CACHE_HOST', 'ADOMAIN']
        },
    });

    pbjs.setConfig({
      priceGranularity: "high"
  });
  pbjs.setConfig({consentManagement: {gdpr: { cmpApi: 'iab', timeout: 500, actionTimeout: 10000, defaultGdprScope: true }}});
pbjs.bidderSettings = {
      standard: {
storageAllowed: true
      }
};
pbjs.setConfig({
userSync: {
userIds: [{ name: "criteo" }, {name: "teads"}],
filterSettings: { iframe: { bidders: ['criteo','teads','rubicon','smartadserver','appnexus','aniview'], filter: 'include'}}
}
});
 pbjs.setConfig({
      currency: {
          adServerCurrency: "EUR",
          conversionRateFile: "https://currency.prebid.org/latest.json"
      }
  });


    console.log(adUnits[0]);
    //adUnits[0].video = adUnits[0].code = 'adsight-video' + i;
    adUnits[0].video.divId = 'adsight-video' + i;
    pbjs.addAdUnits(adUnits);

    pbjs.onEvent('videoSetupComplete', e => {
        // Load media with its Metadata when the video player is done instantiating.
        videojs('adsight-video' + i).loadMedia({
            id: 'adsight-video-bron',
            src: adsight_config.video[Math.floor(Math.random() * adsight_config.video.length)].url,
            type: 'video/mp4'
        });
      videojs('adsight-video' + i).on('ended', function () {
        videojs('adsight-video' + i).dispose();
        document.getElementById('adsight-video-container').remove();
        console.log(i);
        i++;
        sliderPlaying = false;
        loadAnchor();
      });
      window.onscroll = checkScroll;
      if(sliderActive) {
        checkScroll();
      } 
    });

    pbjs.onEvent('videoSetupFailed', e => {
        console.log('The player setup failed: ', e);
    });

    pbjs.onEvent('videoAdRequest', (e) => {
        console.log('An ad request was made: ', e);
    });

    pbjs.onEvent('videoBidError', e => {
        console.log('An Ad Error came from a Bid: ', e);
    });

    pbjs.onEvent('videoBidImpression', e => {
        console.log('An Ad Impression came from a Bid: ', e);
    });

    pbjs.requestBids(adUnits);
}); 
}

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

function elementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
  

function isElementAboveViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < 0;
}

let sliderPlaying = false;
let sliderActive = false;  
function checkScroll() {
  console.log(i);
  var adsightDivResize = document.getElementById("adsight-video-resize");
  if (sliderActive && !sliderPlaying) {
    sliderPlaying = true;
    videojs('adsight-video' + i).play();

  }
    if (elementInViewport(adsightDivResize)) {
        if (!sliderPlaying) {
            sliderPlaying = true;
          console.log('Playing video');
          console.log(videojs('adsight-video' + i));  
          videojs('adsight-video' + i).play();
          sliderActive = true;
        }
        if (!isMobile) {
          if (
            document
              .getElementById("adsight-video-container")
              .classList.contains("adsight-slider-active")
          ) {
            document
              .getElementById("adsight-video-container")
              .classList.remove("adsight-slider-active");
            window.dispatchEvent(new Event("resize"));
          }
        } else {
          if (
            document
              .getElementById("adsight-video-container")
              .classList.contains("adsight-slider-header")
          ) {
            document
              .getElementById("adsight-video-container")
              .classList.remove("adsight-slider-header");
            document
              .getElementById("adsight-video-parent")
              .classList.remove("adsight-video-parent");
            document
              .getElementById("adsight-video-title")
              .classList.add("adsight-slider-header-not-active");
            window.dispatchEvent(new Event("resize"));
          }
        }
    } else {
        if (!isMobile && sliderPlaying) {
          if (!isElementAboveViewport(adsightDivResize)) {
            return;
          }
          //Check if class exists
          if (
            !document
              .getElementById("adsight-video-container")
              .classList.contains("adsight-slider-active")
          ) {
              console.log('Slider active');
              console.log(document.getElementById("adsight-video-container"));  
            document
              .getElementById("adsight-video-container")
              .classList.add("adsight-slider-active");
            window.dispatchEvent(new Event("resize"));
          }
        } else if (sliderPlaying) {
          if (!isElementAboveViewport(adsightDivResize)) {
            return;
          }
          if (
            !document
              .getElementById("adsight-video-container")
              .classList.contains("adsight-slider-header")
          ) {
            document
              .getElementById("adsight-video-container")
              .classList.add("adsight-slider-header");
            document
              .getElementById("adsight-video-parent")
              .classList.add("adsight-video-parent");
            document
              .getElementById("adsight-video-title")
              .classList.remove("adsight-slider-header-not-active");
            window.dispatchEvent(new Event("resize"));
          }
        }
      }
}