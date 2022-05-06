var liveRampPropertyId = '13257';
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
  };window.creativeVendorLibraryLoaded = true;