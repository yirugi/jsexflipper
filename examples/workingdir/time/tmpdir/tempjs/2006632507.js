
        try{ 
          prdom.query(window).bind('ready load', function () { PostRelease.disableAdsFromElement(prdom.query('.ntv1124334-473789-25629')); }); 
        } catch (error) { 
          const encodedCode = `prdom.query(window).bind('ready load', function () { PostRelease.disableAdsFromElement(prdom.query('.ntv1124334-473789-25629')); });`;
          encodedCode.replace(/'/g,`'`);
          encodedCode.replace(/"/g,`"`);
          const errorMessage = "[Client Error] Script Injection - Script:"+encodedCode+" Cause:" + error.message;
          if(ntv && ntv.Util) { ntv.Util.postError(new Error(errorMessage), true); }
        }
        