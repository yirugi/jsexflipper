
        try{ 
          PostRelease._initMoatTracking = function (container, ids, duration, partnerCode, url) {
        var protocol = window.location.protocol,
            sub = (protocol === 'https:') ? 'z' : 'js',
            script = document.createElement("script"),
            events = [],
            moatapi = {
                "adData": { "ids": ids, "duration": duration, "url": url },
                "dispatchEvent": function (ev) {
                    if (this.sendEvent) {
                        if (events) { events.push(ev); ev = events; events = false; }
                        this.sendEvent(ev);
                    } else {
                        events.push(ev);
                    }
                }
            },
            moatApiName = "_moatApi" + Math.floor(Math.random() * 100000000);
        window[moatApiName] = moatapi;
        script.type = 'text/javascript';
        container && container.insertBefore(script, container.childNodes[0]);
        script.src = protocol + '//' + sub + '.moatads.com/' + partnerCode + '/moatvideo.js#' + moatApiName;

        prdom.query(window).bind('ntvVideoStart', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoStart", volume) });
        prdom.query(window).bind('ntvVideoFirstQuartile', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoFirstQuartile", volume) });
        prdom.query(window).bind('ntvVideoMidpoint', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoMidpoint", volume) });
        prdom.query(window).bind('ntvVideoThirdQuartile', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoThirdQuartile", volume) });
        prdom.query(window).bind('ntvVideoComplete', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoComplete", volume) });
        prdom.query(window).bind('ntvVideoPause', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdPaused", volume) });
        prdom.query(window).bind('ntvVideoResume', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdPlaying", volume) });
        prdom.query(window).bind('ntvVideoVolumeChange', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVolumeChange", volume) });
        prdom.query(window).bind('ntvVideoCanceled', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdStopped", volume) });

        return moatapi;
    }

    PostRelease._dispatchMoatEvent = function (type, adVolune) {
        try {
            PostRelease.MoatApiReference.dispatchEvent({
                "type": type,
                "adVolume": adVolune
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }

    var container483827 = prdom.query("#ntvVideoIframe483827")[0];
    !function (Tracker) {
        function MOATInstantiated(passedInUrl) {
            if(!passedInUrl) return 0;
            PostRelease.MoatApiReference = PostRelease._initMoatTracking(container483827,
            { "level1": "6823", "level2": "173333", "level3": "483827", "level4": "5471833", "slicer1": "0", "slicer2": "0" },
            0, "nativo483ETsY34", passedInUrl);
            return !0;
        }
        if(!MOATInstantiated("//ntvassets-a.akamaihd.net/C5F1F2D4CA174CE6B870BD5E24927179.m3u8"))
            Tracker.InstantiateMOAT = MOATInstantiated; 
    }(ntv.Video.Tracker) 
        } catch (error) { 
          const encodedCode = `PostRelease._initMoatTracking = function (container, ids, duration, partnerCode, url) {
        var protocol = window.location.protocol,
            sub = (protocol === 'https:') ? 'z' : 'js',
            script = document.createElement("script"),
            events = [],
            moatapi = {
                "adData": { "ids": ids, "duration": duration, "url": url },
                "dispatchEvent": function (ev) {
                    if (this.sendEvent) {
                        if (events) { events.push(ev); ev = events; events = false; }
                        this.sendEvent(ev);
                    } else {
                        events.push(ev);
                    }
                }
            },
            moatApiName = "_moatApi" + Math.floor(Math.random() * 100000000);
        window[moatApiName] = moatapi;
        script.type = 'text/javascript';
        container && container.insertBefore(script, container.childNodes[0]);
        script.src = protocol + '//' + sub + '.moatads.com/' + partnerCode + '/moatvideo.js#' + moatApiName;

        prdom.query(window).bind('ntvVideoStart', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoStart", volume) });
        prdom.query(window).bind('ntvVideoFirstQuartile', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoFirstQuartile", volume) });
        prdom.query(window).bind('ntvVideoMidpoint', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoMidpoint", volume) });
        prdom.query(window).bind('ntvVideoThirdQuartile', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoThirdQuartile", volume) });
        prdom.query(window).bind('ntvVideoComplete', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVideoComplete", volume) });
        prdom.query(window).bind('ntvVideoPause', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdPaused", volume) });
        prdom.query(window).bind('ntvVideoResume', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdPlaying", volume) });
        prdom.query(window).bind('ntvVideoVolumeChange', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdVolumeChange", volume) });
        prdom.query(window).bind('ntvVideoCanceled', function (e, adID, volume) { if (adID == ids.level3) PostRelease._dispatchMoatEvent("AdStopped", volume) });

        return moatapi;
    }

    PostRelease._dispatchMoatEvent = function (type, adVolune) {
        try {
            PostRelease.MoatApiReference.dispatchEvent({
                "type": type,
                "adVolume": adVolune
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }

    var container483827 = prdom.query("#ntvVideoIframe483827")[0];
    !function (Tracker) {
        function MOATInstantiated(passedInUrl) {
            if(!passedInUrl) return 0;
            PostRelease.MoatApiReference = PostRelease._initMoatTracking(container483827,
            { "level1": "6823", "level2": "173333", "level3": "483827", "level4": "5471833", "slicer1": "0", "slicer2": "0" },
            0, "nativo483ETsY34", passedInUrl);
            return !0;
        }
        if(!MOATInstantiated("//ntvassets-a.akamaihd.net/C5F1F2D4CA174CE6B870BD5E24927179.m3u8"))
            Tracker.InstantiateMOAT = MOATInstantiated; 
    }(ntv.Video.Tracker)`;
          encodedCode.replace(/'/g,`'`);
          encodedCode.replace(/"/g,`"`);
          const errorMessage = "[Client Error] Script Injection - Script:"+encodedCode+" Cause:" + error.message;
          if(ntv && ntv.Util) { ntv.Util.postError(new Error(errorMessage), true); }
        }
        