
        window.addEventListener('message', function(e) {
          if (e.data.type === 'innerBridgeIframeLoaded') {
            window.frameElement.parentElement
              .querySelector('#goog_244500531').contentWindow
              .postMessage({type: 'omidIframeLoaded'}, '*');
          }
        });
      