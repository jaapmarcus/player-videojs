window.onload = function () {
  //loadAnchor();
 preloadPreBid();
};

function preloadPreBid() {
  var pbjs = pbjs || {};
      pbjs.que = pbjs.que || [];

      pbjs.que.push(function () {
          pbjs.setConfig({
              video: {
                  providers: [{
                      divId: 'player',
                      vendorCode: 2, // videojs vendorCode
                      playerConfig: {
                          params: {
                              adPluginConfig: {
                                  numRedirects: 10,
                                  adLabel: "Using Prebid Video Module!"
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

          pbjs.addAdUnits(adUnits);

          pbjs.onEvent('videoSetupComplete', e => {
            console.log(e);
              // Load media with its Metadata when the video player is done instantiating.
              videojs('player').loadMedia({
                  id: 'XYXYXYXY',
                  src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
                  title: 'Subaru Outback On Street And Dirt',
                  description: 'Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.',
                  type: 'video/mp4'
              });
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

function loadAnchor() {
    /*console.log(adsight_config);
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
    div.innerHTML = `<div id="adsight-video-parent"><video id="player" controls class="video-js" muted="muted" playsinline="playsinline" preload="metadate" fluid="true">
      Your browser does not support the video tag.
      </video></div><div id="adsight-video-title" class="adsight-slider-header-not-active" style="display:none"><div id="adsight-close-button"><a href="" id="adsight-close-link-mobile" height="16px" width="16px"><img src="https://cdn.adsight.nl/close-darker.svg" style="max-height:16px !important" /></a></div></div>`
  preloadPreBid();*/
  

}