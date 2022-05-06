var DOMAIN                   = 'time.com',
    SUBSCRIPTION_DOMAINS     = ["get.time.com", "w1.buysub.com"],  
    TEST_MODE                = false,
    subscriptionPaths        = [
        "/subscribe/primary-offer/",
        "/subscribe/gift-offer/",
        "/subscribe/student-offer/",
        "/subscribe/health/",
        "subscribe/primary-short/"
    ],
    determineTestMode        = makeToggleCheck(TEST_MODE, bouncex.testmode.bxdev);

/********************************** HELPERS ***********************************/

// returns a bool based on a toggle set in above vars
function makeToggleCheck(constantBool, conditionValue) {
    if (constantBool) {
        return !!conditionValue;
    }

    return true;
}

function isValidDomain() {
    var url = bouncex.utils.url.allowParams();
    return url.indexOf(DOMAIN) > -1 || url.indexOf(SUBSCRIPTION_DOMAINS[0]) > -1 || url.indexOf(SUBSCRIPTION_DOMAINS[1]) > -1;
}

/******************************* SUPSCRIPTION EVENT ***************************/

function initializeSubscriptionEvent() {
    if (subscriptionPaths.indexOf(window.location.pathname) > -1 || SUBSCRIPTION_DOMAINS.indexOf(window.location.hostname) > -1 ) {
        bouncex.push(['view_subscription']);
    }
    return;
}

function initializeTrackingSiteWide() {
    if (isValidDomain() && determineTestMode) {
        initializeSubscriptionEvent();
        initializeUserTracking();
    }
}

/******************************* USER  EVENTS ***************************/

function initializeUserTracking() {
    bouncex.log('initializeUserTracking');
   // bouncex.et.onTrue(emailMapped, fireUserEvent,100);
   if(isLoginPage() || isCheckoutPage()) {
       bouncex.log('is login or checkout page');
        var iframe = isLoginPage() ? jQuery('iframe').eq(0).contents() : jQuery('iframe').eq(1).contents();
        bouncex.log('iframe', iframe);
        var emailInputElement = jQuery(iframe[0]).find('#email');
        bouncex.log('emailInputElement', emailInputElement);
        var email = '';
        emailInputElement.blur(function() {
            bouncex.log( "Handler for on  NEW blur called." );
            email = emailInputElement.val();
            fireUserEvent(email);
        });
   }
   
}

function isLoginPage() {
    return window.location.pathname.indexOf('/login/') > -1;
}

function isCheckoutPage() {
    return window.location.pathname.indexOf('/subscribe/checkout/') > -1;
}


// function emailMapped() {
//     bouncex.log('%c IN EMAIL MAPPED', 'color:magenta')
//     var email = getUserEmail();
//     bouncex.log('EMAIL: ', email)
//     return email.length > 0;
// }

// function getUserEmail() {
//     var iframe = isLoginPage() ? jQuery('iframe').eq(0).contents() : jQuery('iframe').eq(1).contents();
//     var emailInputElement = jQuery(iframe[0]).find('#email');
//     var email = '';
//     emailInputElement.blur(function() {
//         bouncex.log( "Handler for on  blur called." );
//         email = emailInputElement.val();
//         return email;
//     });
//      bouncex.log('EMAIL before return : ', email)
// 	return email;
// }

function fireUserEvent(userEmail) {
    if (bouncex.utils.validate.email(userEmail)) {
		bouncex.push(['user', {
			email: userEmail,
			source: 'input'
		}]);
	}
}
/************************* INITIALIZE EVENTS SITEWIDE *************************/

initializeTrackingSiteWide();
