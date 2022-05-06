(function() { function bxBootstrap() {
	var re = /bot|crawl|slurp|spider|mediapartners|headlesschrome/i;
	if (re.test(navigator.userAgent) || navigator.userAgent == '') {
		return;
	}

	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":1709,"name":"Time.com","cookie_name":"bounceClientVisit1709","domain":"","ct":"bind_to_subdomain","ally":0,"ei":1,"tcjs":"","cjs":"if (bouncex.cookie.vpv === 1) {\n\tbouncex.setVarAndReload('time_on_site', true);\n\tbouncex.setTimeout2(function(){\n\t\tbouncex.setVarAndReload('time_on_site', false);\n\t}, 30000);\n}\n\n/* segment analytics integration https://www.wrike.com/open.htm?id=183275976 */\n// //bouncex.report_ga = function(action, label, bypass) {\n//    try {\n//        var eventName = 'BounceX ' + action.charAt(0).toUpperCase() + action.slice(1);\n//        var labelData = parseGaLabel(label);\n//        \n//        var ca = bouncex.campaigns[labelData.campaignId];\n        \n//        var segmentData = {\n//           timeIncBrand: window.location.hostname,\n//            purpose: labelData.purpose,\n//            subpurpose: labelData.subpurpose,\n//            campaignId: labelData.campaignId,\n//            parentId: ca.pid,\n//            type: ca.type,\n//            control: ca.control,\n//            mobile: bouncex.state.mobile,\n//            userAgent: window.navigator.userAgent,\n//            country: bouncex.state.geo.country_code,\n//            city: bouncex.state.geo.city\n//        };\n    \n//        if (typeof window.analytics == 'object' && typeof window.analytics.track == 'function') {\n//            window.analytics.track(eventName, segmentData);\n//        }\n//    } catch(e) {}\n//\n//function parseGaLabel(label) {\n//    try {\n//        var campaignIdMatches = label.match(/\\((\\d+)\\)/g);\n//        \n//        var purposeMatches = label.match(/[^-]*/);\n//        var purpose = purposeMatches && purposeMatches.length > 0? jQuery.trim(purposeMatches[0]) : '';\n//        var subpurposeMatches = label.match(/-([^-]+)-/);\n//        var subpurpose = subpurposeMatches && subpurposeMatches.length > 0? jQuery.trim(subpurposeMatches[0].replace(/-/g,'')) : '';\n        \n//        var data = {\n//            campaignId: campaignId,\n//            purpose: purpose,\n//            subpurpose: subpurpose\n//       };\n//        return data;\n//    } catch (e) {}\n//}\n/* end segment analytics integration */\n\n// // dbm and beeswax uniquecount\n// var $body = jQuery('body');\n// var axel = Math.random() + \"\";\n// var a = axel * 10000000000000;\n// var dbmPixel = '<img src=\"https://ad.doubleclick.net/ddm/activity/src=5777706;type=invmedia;cat=sqayow3p;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?\" width=\"1\" height=\"1\" alt=\"\"/>';\n// var beeswaxPixel = '<img src=\"https://cnv.event.prod.bidr.io/log/cnv?tag_id=24&buzz_key=bouncex&value=&segment_key=&order=&ord='+a+'\" height=\"0\" width=\"0\">';\n\n// $body.append(dbmPixel);\n// $body.append(beeswaxPixel);\n// // uniquecount end\n\n/* START Multi-optin Functionality https://www.wrike.com/open.htm?id=390951819 */\nbouncex.multioptin = {\n  newsletterIds: [],\n  init: function(config) {\n    this.newsletterIds = bouncex.campaigns[config.ca_id].obj1.find('.bx-step-'+config.multiOptStep+' input[name=newsletter_id]').val().split(',');\n    this.copyEmail(config);\n    this.copyOptin(config);\n    this.listenToSubmit(config);\n  },\n  copyEmail: function(config) {\n    bouncex.campaigns[config.ca_id].obj1.find('input[name=email_address]').val(config.email);\n  },\n  copyOptin: function(config) {\n    bouncex.campaigns[config.ca_id].obj1.find('.bx-step-'+config.multiOptStep+' input[name=optin]').val(config.optin.val());\n  },\n  listenToSubmit: function(config) {\n    var $submitButton = bouncex.campaigns[config.ca_id].obj1.find('.bx-step-'+config.multiOptStep+' .bx-row-submit-default');\n    $submitButton.off('click.bx-'+config.ca_id);\n    $submitButton.on('click.bx-'+config.ca_id, function() {\n        this.setNewsletters(config);\n        $submitButton.off('click.bx-'+config.ca_id);\n    }.bind(this));\n  },\n  setNewsletters: function(config) {\n    var newsletterCheckboxes = bouncex.campaigns[config.ca_id].obj2.find('input[type=checkbox]').filter('input[name*=newsletter_]');\n    var newsletterIds = newsletterCheckboxes.map(function(idx, obj) {\n      if (jQuery(obj).is(':checked')) {\n        var id = jQuery(obj).attr('name').split('_')[1];\n        return id;\n      }\n    }).toArray();\n\n    this.newsletterIds = this.newsletterIds.concat(newsletterIds);\n    bouncex.campaigns[config.ca_id].obj1.find('.bx-step-'+config.multiOptStep+' input[name=newsletter_id]').val(this.newsletterIds.join(','));\n  },\n};\n\nif (!bouncex.utils.gtmLookup('timeUserloginstatus') || !bouncex.utils.gtmLookup('timeUsertype')) {\n    bouncex.setVarAndReload('time_user_not_loaded', bouncex.vars.time_user_not_loaded + 1);\n}\n/* END Multi-optin Functionality */","force_https":false,"waypoints":false,"content_width":0,"gai":"UA-97981691-1","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":0,"gmp":0,"whitelist_check":0},"burls":[{"prop":"contains","val":"partner"},{"prop":"contains","val":"next-generation-leaders"},{"prop":"contains","val":"owners-benefits/"},{"prop":"contains","val":"church-choir-video"},{"prop":"contains","val":"seniors-daycare-onegeneration"},{"prop":"contains","val":"robot-dance-duet"},{"prop":"contains","val":"discipline-to-exercise"},{"prop":"contains","val":"t-rex-goes-viral"},{"prop":"contains","val":"addiction-america"},{"prop":"contains","val":"epidemic-in-america"},{"prop":"contains","val":"addiction-help"},{"prop":"contains","val":"epidemic-america"},{"prop":"contains","val":"longform"},{"prop":"contains","val":"dogs-cross-country-trip"},{"prop":"contains","val":"for-homeless-veterans"},{"prop":"contains","val":"gets-free-teeth"},{"prop":"contains","val":"to-improve-posture"},{"prop":"contains","val":"-clean-health-tips"},{"prop":"contains","val":"time-health"},{"prop":"contains","val":"dog-yoga"},{"prop":"contains","val":"single-mom-community-single-momtreal"},{"prop":"contains","val":"women-across-america"},{"prop":"contains","val":"/shop"},{"prop":"contains","val":"/sweepstakes/"},{"prop":"contains","val":"/guns-in-america"},{"prop":"contains","val":"/featured/"},{"prop":"contains","val":"specialoffers.meredith.com"},{"prop":"contains","val":"/dev.time.com/time-100-reader-poll-2020-poll-test"},{"prop":"contains","val":"/time.com/person-of-the-year-reader-poll-2021"},{"prop":"contains","val":"/partners.time.com/partners/unicef-usa/why-we-need-equitable-vaccine-delivery-now/"},{"prop":"contains","val":"time.com/6157144/brent-renaud/"}],"ple":false,"fbe":false,"mas":3,"map":1,"gar":true,"ete":1,"ettm":false,"etjs":"var DOMAIN                   = 'time.com',\n    SUBSCRIPTION_DOMAINS     = [\"get.time.com\", \"w1.buysub.com\"],  \n    TEST_MODE                = false,\n    subscriptionPaths        = [\n        \"/subscribe/primary-offer/\",\n        \"/subscribe/gift-offer/\",\n        \"/subscribe/student-offer/\",\n        \"/subscribe/health/\",\n        \"subscribe/primary-short/\"\n    ],\n    determineTestMode        = makeToggleCheck(TEST_MODE, bouncex.testmode.bxdev);\n\n/********************************** HELPERS ***********************************/\n\n// returns a bool based on a toggle set in above vars\nfunction makeToggleCheck(constantBool, conditionValue) {\n    if (constantBool) {\n        return !!conditionValue;\n    }\n\n    return true;\n}\n\nfunction isValidDomain() {\n    var url = bouncex.utils.url.allowParams();\n    return url.indexOf(DOMAIN) > -1 || url.indexOf(SUBSCRIPTION_DOMAINS[0]) > -1 || url.indexOf(SUBSCRIPTION_DOMAINS[1]) > -1;\n}\n\n/******************************* SUPSCRIPTION EVENT ***************************/\n\nfunction initializeSubscriptionEvent() {\n    if (subscriptionPaths.indexOf(window.location.pathname) > -1 || SUBSCRIPTION_DOMAINS.indexOf(window.location.hostname) > -1 ) {\n        bouncex.push(['view_subscription']);\n    }\n    return;\n}\n\nfunction initializeTrackingSiteWide() {\n    if (isValidDomain() && determineTestMode) {\n        initializeSubscriptionEvent();\n        initializeUserTracking();\n    }\n}\n\n/******************************* USER  EVENTS ***************************/\n\nfunction initializeUserTracking() {\n    bouncex.log('initializeUserTracking');\n   // bouncex.et.onTrue(emailMapped, fireUserEvent,100);\n   if(isLoginPage() || isCheckoutPage()) {\n       bouncex.log('is login or checkout page');\n        var iframe = isLoginPage() ? jQuery('iframe').eq(0).contents() : jQuery('iframe').eq(1).contents();\n        bouncex.log('iframe', iframe);\n        var emailInputElement = jQuery(iframe[0]).find('#email');\n        bouncex.log('emailInputElement', emailInputElement);\n        var email = '';\n        emailInputElement.blur(function() {\n            bouncex.log( \"Handler for on  NEW blur called.\" );\n            email = emailInputElement.val();\n            fireUserEvent(email);\n        });\n   }\n   \n}\n\nfunction isLoginPage() {\n    return window.location.pathname.indexOf('/login/') > -1;\n}\n\nfunction isCheckoutPage() {\n    return window.location.pathname.indexOf('/subscribe/checkout/') > -1;\n}\n\n\n// function emailMapped() {\n//     bouncex.log('%c IN EMAIL MAPPED', 'color:magenta')\n//     var email = getUserEmail();\n//     bouncex.log('EMAIL: ', email)\n//     return email.length > 0;\n// }\n\n// function getUserEmail() {\n//     var iframe = isLoginPage() ? jQuery('iframe').eq(0).contents() : jQuery('iframe').eq(1).contents();\n//     var emailInputElement = jQuery(iframe[0]).find('#email');\n//     var email = '';\n//     emailInputElement.blur(function() {\n//         bouncex.log( \"Handler for on  blur called.\" );\n//         email = emailInputElement.val();\n//         return email;\n//     });\n//      bouncex.log('EMAIL before return : ', email)\n// \treturn email;\n// }\n\nfunction fireUserEvent(userEmail) {\n    if (bouncex.utils.validate.email(userEmail)) {\n\t\tbouncex.push(['user', {\n\t\t\temail: userEmail,\n\t\t\tsource: 'input'\n\t\t}]);\n\t}\n}\n/************************* INITIALIZE EVENTS SITEWIDE *************************/\n\ninitializeTrackingSiteWide();\n","dge":true,"bxidLoadFirst":false,"pie":true,"cme":true,"gbi_enabled":0,"gbi":{"rblocks":[]},"bpush":false,"pt":{"article":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.template-article, .collection-article').length > 0;"}]]},"category":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('.template-section').length > 0;"}]]},"gallery":{"testmode":true,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"(jQuery('.template-article,.template-listicle').length > 0 && jQuery('#article-body .image-wrapper,#article-body .video-wrapper').length > 5 ) || jQuery('.photoGallery,.template-longform').length > 0 ;"}]]},"home":{"testmode":false,"val":[[{"activation":"js","prop":"","prop2":"","prop3":"","val":"document.querySelectorAll('link[rel=\"canonical\"][href=\"https://time.com\"]').length > 0;"}]]},"search":{"testmode":false,"val":[[{"activation":"current_page_url","prop":"contains","prop2":"","prop3":"","val":"/search"}]]}},"els":null,"vars":[{"name":"items_in_cart","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"0","code":"+jQuery('.link-cart').text().trim();","trigger":""},{"name":"value_in_cart","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"0","code":"(function () {\n    if (document.location.pathname == '/storefront/view-cart.ep'){\n        var subtotalContainer = jQuery(\"#cartTotalValue\");\n        return subtotalContainer.length ? +subtotalContainer.text().trim().replace(/\\D/, '') : 0;\n    }else{\n        return null;\n    }\n})();","trigger":""},{"name":"video_playing","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.video-js').hasClass('vjs-playing')","trigger":""},{"name":"ref_persist","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"document.referrer.indexOf(window.top.location.hostname) > -1? null: document.referrer","trigger":""},{"name":"sponsorship_present","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    /* https://www.wrike.com/open.htm?id=149391384 */\n    /****** configuration -- edit here! ************/\n    var adSizes = [\n        {'width': 970,'height': 250},\n        {'width': 970,'height': 90},\n        {'width': 728,'height': 90},\n        {'width': 300,'height': 250},\n        {'width': 1168,'height': 250},\n        {'width': 300,'height': 600},\n        {'width': 1,'height': 5},\n        {'width': 5,'height': 5},\n        {'width': 101,'height': 1},\n        {'width': 102,'height': 1},\n        {'width': 120,'height': 60},\n        {'width': 300,'height': 50},\n        {'width': 300,'height': 140},\n        {'width': 300,'height': 300},\n        {'width': 300,'height': 150},\n        {'width': 320,'height': 50},\n        {'width': 900,'height': 500},\n        {'width': 970,'height': 66},\n    ];\n\n    var knownInterstitials = [\n        {'width': 1, 'height': 1, 'empty': false},\n        {'advertiserId' : '1111111', 'labelId':'2222', 'lineItemId':'', 'name':'/8484/rsm/homepage', 'width':1,'height':1,'empty':false}\n    ];\n\n    var globalSuppressNames = ['exampleName'];\n    var suppressAboveSlotWidth = 999;\n\n    var globalSuppressCreativeIds = [];\n    var globalSuppressAdvertiserIds = [];\n    var globalSuppressLineItemIds = [];\n    var globalSuppressLabelIds = [];\n\n    var globalAllowAdvertiserIds = [];\n    var globalAllowLineItemIds = [];\n    var globalAllowLabelIds = [];\n\n    var ignoreAdvertiserIds = ['24517214','24478574','25100174','24478934','58626134','151221494','179860214','170348294','25479494','25479614','23321730','4561149784','33097410','31710090','37654770','17609490','23521050','31710090','23458650','7396370','17396370','36870810','17609490','36029850'];\n    var ignoreLineItemIds = [];\n    var ignoreLabelIds = [];\n    /**** end configuration ****/\n    /***************************/\n\n    function isTargetSize(slotJson) {\n        var numAdSizes = adSizes.length;\n        for (var i = 0; i < numAdSizes; i++) {\n            if (slotJson.width == adSizes[i].width && slotJson.height == adSizes[i].height && !slotJson.empty) {\n                return true;\n            }\n        }\n        return false;\n    }\n    function isGlobalExclusion(slotJson) {\n        if (aboveMaxWidth(slotJson)) {\n            return true;\n        }\n        if (globalSuppressAdvertiserIds.indexOf(slotJson.advertiserId) > -1) {\n            return true;\n        }\n        if (globalSuppressLineItemIds.indexOf(slotJson.lineItemId) > -1) {\n            return true;\n        }\n        if (globalSuppressLabelIds.indexOf(slotJson.labelId) > -1) {\n            return true;\n        }\n        if (globalSuppressCreativeIds.indexOf(slotJson.creativeId) > -1) {\n            return true;\n        }\n        var numNames = globalSuppressNames.length;\n\n        for (var i = 0; i < numNames; i++) {\n            if (!slotJson.empty && typeof slotJson.name =='string' && slotJson.name.indexOf(globalSuppressNames[i]) > -1) { /* must handle string contains logic */\n                return true;\n            }\n        }\n        return false;\n    }\n    function isGlobalAllow(slotJson) {\n        if (globalAllowAdvertiserIds.indexOf(slotJson.advertiserId) > -1) {\n            return true;\n        }\n        if (globalAllowLineItemIds.indexOf(slotJson.lineItemId) > -1) {\n            return true;\n        }\n        if (globalAllowLabelIds.indexOf(slotJson.labelId) > -1) {\n            return true;\n        }\n        return false;\n    }\n    function aboveMaxWidth(slotJson) {\n        if (suppressAboveSlotWidth) {\n            return slotJson.width > suppressAboveSlotWidth;\n        }\n        return false;\n    }\n    function isIgnoredForSponsorship(slotJson) {\n        if (ignoreAdvertiserIds.indexOf(slotJson.advertiserId) > -1) {\n            return true;\n        } else if (ignoreLabelIds.indexOf(slotJson.labelId) > -1) {\n            return true;\n        } else if (ignoreLineItemIds.indexOf(slotJson.lineItemId) > -1) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    function isSponsorshipExclusion(slotsArray) {\n        var advertiserIdsCount = {};\n        var numSlots = slotsArray.length;\n        var realSizedSlots = 0;\n        var minimumMatchingAdvertiserIds;\n        for (var i = 0; i < numSlots; i++) {\n            var slot = slotsArray[i];\n            if (slot.advertiserId && slot.isTargetSize && !slot.isIgnoredForSponsorship) {\n                realSizedSlots += 1;\n                advertiserIdsCount[slot.advertiserId] = advertiserIdsCount[slot.advertiserId]? advertiserIdsCount[slot.advertiserId] + 1 : 1;\n            }\n        }\n        if (realSizedSlots <= 2) {\n            minimumMatchingAdvertiserIds = 2;\n        } else if (realSizedSlots > 2) {\n            minimumMatchingAdvertiserIds = 3;\n        }\n\n        for (var advertiserId in advertiserIdsCount) {\n            if (advertiserIdsCount[advertiserId] >= minimumMatchingAdvertiserIds) {\n                return true;\n            }\n        }\n        return false;\n    }\n    function isInterstitial(slotsArray) {\n        var numSlots = slotsArray.length;\n        var numKnownInterstitials = knownInterstitials.length;\n        for (var i = 0; i < numSlots; i++) {\n            var slot = slotsArray[i];\n            for (var j = 0; j < numKnownInterstitials; j++) {\n                var interstitial = knownInterstitials[j];\n                var matchesInterstitial = true;\n                for (var key in interstitial) {\n                    matchesInterstitial = matchesInterstitial && knownInterstitials[j][key] == slot[key];\n                }\n                if (matchesInterstitial) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n    function getSlotInformation(slot) {\n        var slotData = {};\n        var slotLoaded = false;\n        var info = slot.getResponseInformation();\n        if (info) {\n            slotData.advertiserId = info.advertiserId? info.advertiserId.toString(): '';\n            slotData.lineItemId = info.lineItemId? info.lineItemId.toString(): '';\n            slotData.labelId = info.labelIds? info.labelIds.toString(): '';\n        } else {\n            slotData.advertiserId = '';\n            slotData.lineItemId = '';\n            slotData.labelId = '';\n        }\n\n        slotData.name = slot.H;\n        var sizeInformationLocation;\n        var possibleKeysForSize = ['R','U','T','O','N','M','j'];/*this keeps changing*/\n        for (var i =0; i < possibleKeysForSize.length; i++) {\n            if (slot[possibleKeysForSize[i]] && slot[possibleKeysForSize[i]]._width_ && slot[possibleKeysForSize[i]]._height_) {\n                sizeInformationLocation = slot[possibleKeysForSize[i]];\n                dfpState.slotsLoaded = true;\n                break;\n            }\n        }\n\n        slotData.width = sizeInformationLocation && sizeInformationLocation._width_? sizeInformationLocation._width_ : '';\n        slotData.height = sizeInformationLocation && sizeInformationLocation._height_? sizeInformationLocation._height_ : '';\n        slotData.empty = sizeInformationLocation && sizeInformationLocation._empty_? sizeInformationLocation._empty_: '';\n        slotData.creativeId = sizeInformationLocation && sizeInformationLocation._creative_ids_? sizeInformationLocation._creative_ids_.toString(): '';\n        slotData.isTargetSize = isTargetSize(slotData);\n        slotData.isIgnoredForSponsorship = isIgnoredForSponsorship(slotData);\n\n        dfpState.globalAllow = dfpState.globalAllow || isGlobalAllow(slotData);\n        dfpState.globalExclusion = dfpState.globalExclusion || isGlobalExclusion(slotData);\n        return slotData;\n    }\n    function getAllSlotInformation(pubadsSlots) {\n        var numSlots = pubadsSlots.length;\n        var slotsArray = [];\n        for (var i = 0; i < numSlots; i++) {\n            slotsArray.push(getSlotInformation(pubadsSlots[i]));\n        }\n        return slotsArray;\n    }\n\n    var dfpState = {\n        slotsLoaded: false,\n        globalAllow: false,\n        globalExclusion: false,\n        interstitialPresent: false\n    };\n\n    if (window.googletag && window.googletag.apiReady && window.googletag.pubadsReady) {\n        if (window.bouncex.dfpChecked) {\n            return null;\n        } else {\n            var slots = getAllSlotInformation(googletag.pubads().getSlots());\n            if (!dfpState.slotsLoaded) {\n                if (!bouncex.website.gbi_enabled) {\n                    window.bouncex.dfpChecked = true;\n                    return 'disabled';\n                }\n                return 'not_ready';\n            }\n            dfpState.interstitialPresent = isInterstitial(slots);\n            var interstitialLabel = dfpState.interstitialPresent? 'int_present' : 'int_not';\n            window.bouncex.dfpChecked = true;\n            if (dfpState.globalExclusion) {\n                return 'global_exclusion,'+interstitialLabel;\n            } else if (dfpState.globalAllow) {\n                return 'global_allow,'+interstitialLabel;\n            } else if (isSponsorshipExclusion(slots)) {\n                return 'sponsor_exclusion,'+interstitialLabel;\n            } else {\n                return 'bx_allow,'+interstitialLabel;\n            }\n        }\n    } else {\n        return 'not_ready';\n    }\n})()","trigger":""},{"name":"subscribed_today","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"Math.floor(Math.random() * (369 - 109 + 1)) + 109;","trigger":""},{"name":"subscribed_this_week","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(Math.floor(Math.random() * (1636 - 949 + 1)) + 949).toString().replace(/\\B(?=(?:\\d{3})+(?!\\d))/g, \",\");","trigger":""},{"name":"page_tag","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('#editorial-article-wrapper-container a[href*=\"time.com/tag/\"]').eq(0).text();","trigger":""},{"name":"page_type","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts;","trigger":""},{"name":"breadcrumb","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.partial.breadcrumbs').text().trim().length != 0 ? jQuery('.partial.breadcrumbs').text().trim() : false;","trigger":""},{"name":"article_class","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('article').attr('class').trim();","trigger":""},{"name":"dfp_rblock","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    if (!bouncex.dfpRan) {\n        bouncex.dfpRan = true;\n        return 'not_ready';\n    }\n    function check() {\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\n        var slots = window.googletag && typeof googletag.pubads == 'function' && typeof googletag.pubads().getSlots == 'function'? googletag.pubads().getSlots() : [];\n        var numSlots = slots.length;\n        for (var i = 0; i < numSlots; i++) {\n            var slotInfo = slots[i] && typeof slots[i].getResponseInformation == 'function'? slots[i].getResponseInformation() : false;\n            if (slotInfo && slotInfo.lineItemId) {\n                bouncex.dfp_loaded = true;\n                if (bouncex.website.gbi.rblocks && bouncex.website.gbi.rblocks.indexOf(slotInfo.lineItemId) > -1) {\n                    return 'sponsor';\n                }\n            }\n        }\n        if (bouncex.dfp_loaded) {\n            return 'allow';\n        }\n        return 'not_ready';\n    }\n    if (bouncex.website.gbi.rblocks) {\n        if (!bouncex.website.gbi_enabled) {\n            return 'disabled';\n        } else if (bouncex.dfp_loaded) {\n            return null;\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady) {\n            return check();\n        } else if (typeof window.googletag === 'undefined') {\n            return 'no_googletag';\n        }\n        return 'fallback';\n    } else {\n        return 'not_ready';\n    }\n})()","trigger":"pageload"},{"name":"backfill_deployment","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"","code":"bouncex.gbi2 ? bouncex.gbi2.getFailedDeployments().join(',') : '';","trigger":"pageload"},{"name":"time_on_site","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"category","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    var articlePage = bouncex.utils.getNestedProp('karma.config.targeting.ctype', false) === 'article';\n    var videoPage = bouncex.utils.getNestedProp('karma.config.targeting.ctype', false) === 'video_article';\n    var category = bouncex.utils.getNestedProp('karma.config.targeting.ch', false);\n    if (articlePage || videoPage) {\n        return category;\n    }\n    return false;\n})();","trigger":"pageload"},{"name":"submitted_onsite","polling":"all","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"jQuery('.newsletter-signup-confirmation-message').is(':visible') || null;","trigger":"pageload"},{"name":"article_name","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts === 'article' && jQuery('.article-header .headline').text();","trigger":"pageload"},{"name":"article_category","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.website.pts === 'article' && (jQuery('.breadcrumb-title').last().text().trim() || jQuery('.collection-name').text().trim());","trigger":"pageload"},{"name":"content_category","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"!!jQuery('meta[name=\"keywords\"]').attr('content') && jQuery('meta[name=\"keywords\"]').attr('content');","trigger":"pageload"},{"name":"ecap_seen_visit","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"logged_in_print","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n\tif (!window.dataLayer) {\n\t\treturn false;\n\t}\n\tvar i = 0;\n\tvar dataLength = dataLayer.length;\n\tvar loggedIn;\n\tvar printSub;\n\t\n\tfor (i; i < dataLength; i++) {\n\t\tloggedIn = bouncex.utils.getNestedProp('window.dataLayer[' + String(i) + '].timeUserloginstatus', false);\n\t\tprintSub = /TIM/.test(bouncex.utils.getNestedProp('window.dataLayer[' + String(i) + '].timeUsertype', ''));\n\t\t\n\t\tif (loggedIn === 'true' && printSub === true) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();","trigger":"pageload"},{"name":"logged_in","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"(function(){\n    if (jQuery('.signin-button').is(':visible') || jQuery('.login-create').is(':visible')){\n        return false;\n    }\n    if (jQuery('.account-dropdown').is(':visible') || jQuery('.signout-button').is(':visible')){\n        return true;\n    }\n    return null;\n})();","trigger":"pageload"},{"name":"reg_wall_present","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n\t\n\tvar wallState;\n\t\n\tif (document.querySelectorAll('.component.registration-wall').length > 0 && document.querySelectorAll('.component.registration-wall.hidden').length === 0) {\n\t\tif (document.querySelectorAll('.component.registration-wall.can-animate.minimized').length > 0) {\n\t\t\twallState = \"minimized\";\n\t\t} else {\n\t\t\twallState = \"expanded\";\n\t\t}\n\t} else {\n\t\twallState = false;\n\t}\n\t\n\treturn wallState;\n\t\n})();","trigger":"pageload"},{"name":"player_loaded","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function () {\n\tif (!window.dataLayer) {\n\t\treturn false;\n\t}\n\n\tfor (var i = 0; i < dataLayer.length; i++) {\n\t\tif (dataLayer[i][0] === 'event' && dataLayer[i][1] === 'player loaded') {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();","trigger":"pageload"},{"name":"logged_in_digital","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n\tvar i = 0;\n\tvar dataLength = dataLayer.length;\n    var loggedIn;\n    var digitalSub;\n    \n    for (i; i < dataLength; i++) {\n        loggedIn = bouncex.utils.getNestedProp('window.dataLayer[' + String(i) + '].timeUserloginstatus', false);\n        digitalSub = /^time_dig|TIM/.test(bouncex.utils.getNestedProp('window.dataLayer[' + String(i) + '].timeUsertype', ''));\n \n\t\tif (loggedIn === 'true' && digitalSub === true) {\n            return true\n        }\n\t}\n    return false;\n})();","trigger":"pageload"},{"name":"paywall_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.hard-paywall-content:visible').length > 0 || jQuery('.registration-wall-content:visible').length > 0 || jQuery('.meter-wall.paywall:visible').length > 0;","trigger":"pageload"},{"name":"confirmation_page","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"bouncex.utils.getNestedProp('document.location.href', '').indexOf('&step=confirmation') > -1;","trigger":"pageload"},{"name":"checkout_price","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function(){\n\tif (window.location.pathname.indexOf('checkout') > -1){\n\t\treturn jQuery('[name=\"subscription-plan\"]').filter(':checked').siblings('span').text().replace(/\\n\\s+/g, \" \").trim();\n\t} else if (window.location.pathname.indexOf('/pubs') > -1 && window.location.pathname.indexOf('RENEWAL') > -1) {\n\t\tvar $firstOffer = jQuery('.offers input[name=\"cds_term_value\"]')[0];\n\t\tvar offerStringMatches = bouncex.utils.getNestedProp('nextSibling.textContent', '', $firstOffer).match(/\\$[0-9.]+/);\n\t\treturn offerStringMatches && offerStringMatches.length ? offerStringMatches[0] : false;\n\t}\n\treturn false;\n})();","trigger":"pageload"},{"name":"lytics_segment","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function(){\n    var segments = bouncex.parseJSON(localStorage.getItem('lytics_segments'));\n\n    return segments.length > 0 ? segments.join(', ') : false;\n})();","trigger":"pageload"},{"name":"reg_confirmation_page","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"window.location.pathname.indexOf('/create-account/') > -1 && jQuery('iframe[src=\"/iframe/create-account\"]').contents().find('.bottom-padding-5').text().toLowerCase().indexOf('thank you') > -1;","trigger":"pageload"},{"name":"my_account_present","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.account-dropdown button:visible:contains(\"My Account\")')\n.length > 0 && jQuery('.button-group .subscribe-link:visible:contains(\"Subscribe\")').length === 0;","trigger":"pageload"},{"name":"time_user_not_loaded","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"0","code":"null;","trigger":"pageload"},{"name":"datalayer_ready","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"!!window.authCompleted;","trigger":"pageload"},{"name":"meter_wall_present","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('.meter-wall .roadblock-wrapper:visible').length > 0;","trigger":"pageload"},{"name":"logged_in_tfk","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('a.sign-out').length > 0;","trigger":"pageload"},{"name":"age_verify","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"document.querySelectorAll('.c-modal-gate[data-open=\"1\"]').length > 0 || jQuery('.c-header__age-gate:visible').length > 0;","trigger":"pageload"},{"name":"logged_in_free","polling":"none","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"(function() {\n\tvar i = 0;\n\tvar dataLength = dataLayer.length;\n    var loggedIn;\n    var digitalSub;\n    \n    for (i; i < dataLength; i++) {\n        loggedIn = bouncex.utils.getNestedProp('window.dataLayer[' + String(i) + '].timeUserloginstatus', false);\n        digitalSub = /^free|TIM/.test(bouncex.utils.getNestedProp('window.dataLayer[' + String(i) + '].timeUsertype', ''));\n \n\t\tif (loggedIn === 'true' && digitalSub === true) {\n            return true\n        }\n\t}\n    return false;\n})();","trigger":"pageload"},{"name":"submitted_the_brief","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_leadership","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"roadblock_expanded","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"true","code":"!jQuery('.expanded-content').hasClass('hidden') && jQuery('.roadblock-minimized-content').hasClass('hidden');","trigger":"pageload"},{"name":"content_cms_category","polling":"all","persist":"no","page_types":["article"],"testmode":false,"default":"false","code":"jQuery('.breadcrumb-title:first').text().trim();","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":1,"mibcx":1,"te":1,"cart_rep":{"get":"","set":""},"ulpj":{"et_rid":"espemailid"},"cus":"","miw_exclude":"input[data-item=\"recipient-email\"]","enabled":1},"etjson":null,"osre":true,"osru":"osr.bounceexchange.com/v1/osr/items","checkDfp":true,"spa":0,"spatm":1,"preinit_cjs":"","mat":0,"math":0,"cpnu":"coupons.bounceexchange.com","dfpcms":0,"sms":{"optm":"","eventSharing":false,"shqId":"","enabled":0},"pde":false,"fmc":["US","CA"],"fme":true,"fmx":"input[data-item=recipient-email]","sdk":{"android":false,"ios":false,"javascript":false},"onsite":{"enabled":1},"ads":{"enabled":0}}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.client = {
			supportsBrotli: 1
		};
		bouncex.assets = {"creativesBaseStyles":"96663738"};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tag/versioned/br-ijs_all_modules_cjs_min_78fa01f79ccac624a0a6251a69352b99.js');
		script.setAttribute('async', 'async');

		var scriptAttrs = [{"Key":"id","Value":"c.js"},{"Key":"async","Value":"true"},{"Key":"data-apikey","Value":"2^HIykD"},{"Key":"data-cb","Value":"bouncex.dg.initPostDeviceGraph"},{"Key":"data-bx","Value":"1"},{"Key":"data-gm","Value":"1"},{"Key":"data-fire","Value":"1"}];
		if (scriptAttrs) {
			for (var i = 0; i < scriptAttrs.length; i++) {
				script.setAttribute(scriptAttrs[i].Key, scriptAttrs[i].Value);
			}
		}

		document.body.appendChild(script);
	}


}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();