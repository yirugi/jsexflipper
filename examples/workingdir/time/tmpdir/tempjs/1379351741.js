f = (function(){return (function() {     /* https://www.wrike.com/open.htm?id=149391384 */
    /****** configuration -- edit here! ************/
    var adSizes = [
        {'width': 970,'height': 250},
        {'width': 970,'height': 90},
        {'width': 728,'height': 90},
        {'width': 300,'height': 250},
        {'width': 1168,'height': 250},
        {'width': 300,'height': 600},
        {'width': 1,'height': 5},
        {'width': 5,'height': 5},
        {'width': 101,'height': 1},
        {'width': 102,'height': 1},
        {'width': 120,'height': 60},
        {'width': 300,'height': 50},
        {'width': 300,'height': 140},
        {'width': 300,'height': 300},
        {'width': 300,'height': 150},
        {'width': 320,'height': 50},
        {'width': 900,'height': 500},
        {'width': 970,'height': 66},
    ];

    var knownInterstitials = [
        {'width': 1, 'height': 1, 'empty': false},
        {'advertiserId' : '1111111', 'labelId':'2222', 'lineItemId':'', 'name':'/8484/rsm/homepage', 'width':1,'height':1,'empty':false}
    ];

    var globalSuppressNames = ['exampleName'];
    var suppressAboveSlotWidth = 999;

    var globalSuppressCreativeIds = [];
    var globalSuppressAdvertiserIds = [];
    var globalSuppressLineItemIds = [];
    var globalSuppressLabelIds = [];

    var globalAllowAdvertiserIds = [];
    var globalAllowLineItemIds = [];
    var globalAllowLabelIds = [];

    var ignoreAdvertiserIds = ['24517214','24478574','25100174','24478934','58626134','151221494','179860214','170348294','25479494','25479614','23321730','4561149784','33097410','31710090','37654770','17609490','23521050','31710090','23458650','7396370','17396370','36870810','17609490','36029850'];
    var ignoreLineItemIds = [];
    var ignoreLabelIds = [];
    /**** end configuration ****/
    /***************************/

    function isTargetSize(slotJson) {
        var numAdSizes = adSizes.length;
        for (var i = 0; i < numAdSizes; i++) {
            if (slotJson.width == adSizes[i].width && slotJson.height == adSizes[i].height && !slotJson.empty) {
                return true;
            }
        }
        return false;
    }
    function isGlobalExclusion(slotJson) {
        if (aboveMaxWidth(slotJson)) {
            return true;
        }
        if (globalSuppressAdvertiserIds.indexOf(slotJson.advertiserId) > -1) {
            return true;
        }
        if (globalSuppressLineItemIds.indexOf(slotJson.lineItemId) > -1) {
            return true;
        }
        if (globalSuppressLabelIds.indexOf(slotJson.labelId) > -1) {
            return true;
        }
        if (globalSuppressCreativeIds.indexOf(slotJson.creativeId) > -1) {
            return true;
        }
        var numNames = globalSuppressNames.length;

        for (var i = 0; i < numNames; i++) {
            if (!slotJson.empty && typeof slotJson.name =='string' && slotJson.name.indexOf(globalSuppressNames[i]) > -1) { /* must handle string contains logic */
                return true;
            }
        }
        return false;
    }
    function isGlobalAllow(slotJson) {
        if (globalAllowAdvertiserIds.indexOf(slotJson.advertiserId) > -1) {
            return true;
        }
        if (globalAllowLineItemIds.indexOf(slotJson.lineItemId) > -1) {
            return true;
        }
        if (globalAllowLabelIds.indexOf(slotJson.labelId) > -1) {
            return true;
        }
        return false;
    }
    function aboveMaxWidth(slotJson) {
        if (suppressAboveSlotWidth) {
            return slotJson.width > suppressAboveSlotWidth;
        }
        return false;
    }
    function isIgnoredForSponsorship(slotJson) {
        if (ignoreAdvertiserIds.indexOf(slotJson.advertiserId) > -1) {
            return true;
        } else if (ignoreLabelIds.indexOf(slotJson.labelId) > -1) {
            return true;
        } else if (ignoreLineItemIds.indexOf(slotJson.lineItemId) > -1) {
            return true;
        } else {
            return false;
        }
    }
    function isSponsorshipExclusion(slotsArray) {
        var advertiserIdsCount = {};
        var numSlots = slotsArray.length;
        var realSizedSlots = 0;
        var minimumMatchingAdvertiserIds;
        for (var i = 0; i < numSlots; i++) {
            var slot = slotsArray[i];
            if (slot.advertiserId && slot.isTargetSize && !slot.isIgnoredForSponsorship) {
                realSizedSlots += 1;
                advertiserIdsCount[slot.advertiserId] = advertiserIdsCount[slot.advertiserId]? advertiserIdsCount[slot.advertiserId] + 1 : 1;
            }
        }
        if (realSizedSlots <= 2) {
            minimumMatchingAdvertiserIds = 2;
        } else if (realSizedSlots > 2) {
            minimumMatchingAdvertiserIds = 3;
        }

        for (var advertiserId in advertiserIdsCount) {
            if (advertiserIdsCount[advertiserId] >= minimumMatchingAdvertiserIds) {
                return true;
            }
        }
        return false;
    }
    function isInterstitial(slotsArray) {
        var numSlots = slotsArray.length;
        var numKnownInterstitials = knownInterstitials.length;
        for (var i = 0; i < numSlots; i++) {
            var slot = slotsArray[i];
            for (var j = 0; j < numKnownInterstitials; j++) {
                var interstitial = knownInterstitials[j];
                var matchesInterstitial = true;
                for (var key in interstitial) {
                    matchesInterstitial = matchesInterstitial && knownInterstitials[j][key] == slot[key];
                }
                if (matchesInterstitial) {
                    return true;
                }
            }
        }
        return false;
    }
    function getSlotInformation(slot) {
        var slotData = {};
        var slotLoaded = false;
        var info = slot.getResponseInformation();
        if (info) {
            slotData.advertiserId = info.advertiserId? info.advertiserId.toString(): '';
            slotData.lineItemId = info.lineItemId? info.lineItemId.toString(): '';
            slotData.labelId = info.labelIds? info.labelIds.toString(): '';
        } else {
            slotData.advertiserId = '';
            slotData.lineItemId = '';
            slotData.labelId = '';
        }

        slotData.name = slot.H;
        var sizeInformationLocation;
        var possibleKeysForSize = ['R','U','T','O','N','M','j'];/*this keeps changing*/
        for (var i =0; i < possibleKeysForSize.length; i++) {
            if (slot[possibleKeysForSize[i]] && slot[possibleKeysForSize[i]]._width_ && slot[possibleKeysForSize[i]]._height_) {
                sizeInformationLocation = slot[possibleKeysForSize[i]];
                dfpState.slotsLoaded = true;
                break;
            }
        }

        slotData.width = sizeInformationLocation && sizeInformationLocation._width_? sizeInformationLocation._width_ : '';
        slotData.height = sizeInformationLocation && sizeInformationLocation._height_? sizeInformationLocation._height_ : '';
        slotData.empty = sizeInformationLocation && sizeInformationLocation._empty_? sizeInformationLocation._empty_: '';
        slotData.creativeId = sizeInformationLocation && sizeInformationLocation._creative_ids_? sizeInformationLocation._creative_ids_.toString(): '';
        slotData.isTargetSize = isTargetSize(slotData);
        slotData.isIgnoredForSponsorship = isIgnoredForSponsorship(slotData);

        dfpState.globalAllow = dfpState.globalAllow || isGlobalAllow(slotData);
        dfpState.globalExclusion = dfpState.globalExclusion || isGlobalExclusion(slotData);
        return slotData;
    }
    function getAllSlotInformation(pubadsSlots) {
        var numSlots = pubadsSlots.length;
        var slotsArray = [];
        for (var i = 0; i < numSlots; i++) {
            slotsArray.push(getSlotInformation(pubadsSlots[i]));
        }
        return slotsArray;
    }

    var dfpState = {
        slotsLoaded: false,
        globalAllow: false,
        globalExclusion: false,
        interstitialPresent: false
    };

    if (window.googletag && window.googletag.apiReady && window.googletag.pubadsReady) {
        if (window.bouncex.dfpChecked) {
            return null;
        } else {
            var slots = getAllSlotInformation(googletag.pubads().getSlots());
            if (!dfpState.slotsLoaded) {
                if (!bouncex.website.gbi_enabled) {
                    window.bouncex.dfpChecked = true;
                    return 'disabled';
                }
                return 'not_ready';
            }
            dfpState.interstitialPresent = isInterstitial(slots);
            var interstitialLabel = dfpState.interstitialPresent? 'int_present' : 'int_not';
            window.bouncex.dfpChecked = true;
            if (dfpState.globalExclusion) {
                return 'global_exclusion,'+interstitialLabel;
            } else if (dfpState.globalAllow) {
                return 'global_allow,'+interstitialLabel;
            } else if (isSponsorshipExclusion(slots)) {
                return 'sponsor_exclusion,'+interstitialLabel;
            } else {
                return 'bx_allow,'+interstitialLabel;
            }
        }
    } else {
        return 'not_ready';
    }
})()});