(function () {window.aax = window.aax || {};var publisherId = 'AAX5DN745';var aax = window.aax; aax.initTime = new Date().getTime();aax.pubId = publisherId;aax.ver = '1.2';aax.hst = window.location.hostname;var aaxEndpoint = 'https://c.aaxads.com/aax.js?pub=' + aax.pubId + '&hst=' + aax.hst + '&ver=' + aax.ver; function loadScript(endpoint) {var scriptTag = document.createElement('script'), placeTag = document.getElementsByTagName('script')[0];scriptTag.type = 'text/javascript';scriptTag.async = true;scriptTag.src = endpoint;placeTag.parentNode.insertBefore(scriptTag, placeTag);}loadScript(aaxEndpoint);window.aax = window.aax || {};window.aax.cmd = window.aax.cmd || [];window.aax.cmd.push(function () {window.aax.incrementPage();});})();;var liveRampPropertyId = '13444';
if (!window.ats && liveRampPropertyId && liveRampPropertyId.charAt(0) !== '%') {
    var liverampScript = document.createElement('script');
    liverampScript.src = '//ats.rlcdn.com/ats.js';
    liverampScript['onload'] = function(e) {
        window.ats.start({
            'placementID': liveRampPropertyId,
            'storageType': 'localStorage',
            'detectDynamicNodes': true,
            'detectionEventType': 'onblur',
            'detectionType': 'scrapeAndUrl',
            'urlParameter': 'user_id',
            'cssSelectors': [
              'input[type=text]',
              'input[type=email]'
            ],
            'logging': 'error'
        });
    };
    document.head.appendChild(liverampScript);
  };if (!window.PublisherCommonId) {
    var pubcommonScript = document.createElement('script');
    pubcommonScript.src = '//secure.cdn.fastclick.net/js/pubcid/latest/pubcid.min.js';
    document.head.appendChild(pubcommonScript);
};var id5PropertyId = '209';
if (id5PropertyId && id5PropertyId.charAt(0) !== '%') {
    var id5Script = document.createElement('script');
    id5Script.src = '//cdn.id5-sync.com/api/1.0/id5-api.js';
    id5Script['onload'] = function(e) { 
        ID5.init({ partnerId: Number(id5PropertyId) , provider: 'aps' })
    };
    document.head.appendChild(id5Script);
}