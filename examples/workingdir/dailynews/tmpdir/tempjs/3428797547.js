(function(jQuery, clickContext, eventContext) {{
return Math.round(1/(1+Math.exp(-[
blueConicClient.profile.getProfile().getValue('averagetime'),
blueConicClient.profile.getProfile().getValue('clickcount'),
blueConicClient.profile.getProfile().getValue('frequency'),
blueConicClient.profile.getProfile().getValue('intensity'),
blueConicClient.profile.getProfile().getValue('momentum'),
blueConicClient.profile.getProfile().getValue('recency'),
blueConicClient.profile.getProfile().getValue('recent_intensity'),
blueConicClient.profile.getProfile().getValue('visitclicks'),
blueConicClient.profile.getProfile().getValue('visits')
  ].reduce((s,x,i)=>{
    return s+[0.000385,0.005404,-0.006595,0.035599,-0.007341,0.096832,-0.006155,0.18397,-0.002353][i]*x
  }, -14.13244157)))*100)/100
}}(jQuery, clickContext, eventContext))