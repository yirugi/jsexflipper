(function(){var c="UA-6144066-95",b="_"+c+"_originalSendTask";return function(d){window[b]=window[b]||d.get("sendHitTask");d.set("sendHitTask",function(a){var e=a.get("hitPayload"),f=new RegExp(a.get("trackingId"),"gi");window[b](a);a.set("hitPayload",e.replace(f,c),!0);window[b](a)})}})();