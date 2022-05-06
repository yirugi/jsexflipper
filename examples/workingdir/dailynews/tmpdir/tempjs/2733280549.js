f = (function(){return (function() {     if (!bouncex.dfpRan) {
        bouncex.dfpRan = true;
        return 'not_ready';
    }
    function check() {
        bouncex.dfp_loaded = false || bouncex.dfp_loaded;
        
        var event = bouncex.gbi2.getDfpEndPageViewEvent();
        
        if (event && event.dfp_status) {
            if (event.dfp_status == 'pending') {
                return 'not_ready';
            } 
            
            bouncex.dfp_loaded = true;

            if (event.dfp_status == 'suppressed') {
                return 'sponsor';
            }

            return 'allow';
        }

        return 'not_ready';
    }

    if (bouncex.website.gbi.rblocks) {
        if (!bouncex.website.gbi_enabled) {
            return 'disabled';
        } else if (bouncex.dfp_loaded) {
            return null;
        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady && bouncex.gbi2) {
            return check();
        } else if (typeof window.googletag === 'undefined') {
            return 'no_googletag';
        }
        return 'fallback';
    } else {
        return 'not_ready';
    }
})()});