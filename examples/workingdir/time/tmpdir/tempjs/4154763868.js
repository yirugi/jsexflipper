(function anonymous(Writer,types,util
) {
return function ProtoPlayspaceRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.tokens!=null&&m.tokens.length){
  for(var i=0;i<m.tokens.length;++i)
  w.uint32(10).string(m.tokens[i])
  }
  if(m.pageUrl!=null&&Object.hasOwnProperty.call(m,"pageUrl"))
  w.uint32(26).string(m.pageUrl)
  if(m.userId!=null&&Object.hasOwnProperty.call(m,"userId"))
  w.uint32(42).string(m.userId)
  if(m.forcePlayerId!=null&&Object.hasOwnProperty.call(m,"forcePlayerId"))
  w.uint32(58).string(m.forcePlayerId)
  if(m.forceStoryId!=null&&Object.hasOwnProperty.call(m,"forceStoryId"))
  w.uint32(66).string(m.forceStoryId)
  if(m.version!=null&&Object.hasOwnProperty.call(m,"version"))
  w.uint32(72).int32(m.version)
  if(m.clientAb0!=null&&Object.hasOwnProperty.call(m,"clientAb0"))
  w.uint32(80).int32(m.clientAb0)
  if(m.clientAb1!=null&&Object.hasOwnProperty.call(m,"clientAb1"))
  w.uint32(88).int32(m.clientAb1)
  if(m.forceLineItemIds!=null&&m.forceLineItemIds.length){
  for(var i=0;i<m.forceLineItemIds.length;++i)
  w.uint32(98).string(m.forceLineItemIds[i])
  }
  if(m.customParam1!=null&&Object.hasOwnProperty.call(m,"customParam1"))
  w.uint32(114).string(m.customParam1)
  if(m.customParam2!=null&&Object.hasOwnProperty.call(m,"customParam2"))
  w.uint32(122).string(m.customParam2)
  if(m.customParam3!=null&&Object.hasOwnProperty.call(m,"customParam3"))
  w.uint32(130).string(m.customParam3)
  if(m.forceExploration!=null&&Object.hasOwnProperty.call(m,"forceExploration"))
  w.uint32(136).bool(m.forceExploration)
  if(m.es6!=null&&Object.hasOwnProperty.call(m,"es6"))
  w.uint32(144).bool(m.es6)
  if(m.bundleId!=null&&Object.hasOwnProperty.call(m,"bundleId"))
  w.uint32(154).string(m.bundleId)
  if(m.parseDomain!=null&&Object.hasOwnProperty.call(m,"parseDomain"))
  w.uint32(160).bool(m.parseDomain)
  if(m.implementationType!=null&&Object.hasOwnProperty.call(m,"implementationType"))
  w.uint32(168).int32(m.implementationType)
  if(m.queryJsTargeting!=null&&Object.hasOwnProperty.call(m,"queryJsTargeting")){
  for(var ks=Object.keys(m.queryJsTargeting),i=0;i<ks.length;++i){
  w.uint32(178).fork().uint32(10).string(ks[i])
  .uint32(18).string(m.queryJsTargeting[ks[i]]).ldelim()
  }
  }
  if(m.isConsentConnatix!=null&&Object.hasOwnProperty.call(m,"isConsentConnatix"))
  w.uint32(184).bool(m.isConsentConnatix)
  if(m.reloadedPlayers!=null&&Object.hasOwnProperty.call(m,"reloadedPlayers")){
  for(var ks=Object.keys(m.reloadedPlayers),i=0;i<ks.length;++i){
  w.uint32(202).fork().uint32(10).string(ks[i])
  .uint32(18).string(m.reloadedPlayers[ks[i]]).ldelim()
  }
  }
  if(m.disableTracking!=null&&Object.hasOwnProperty.call(m,"disableTracking"))
  w.uint32(216).bool(m.disableTracking)
  if(m.referrer!=null&&Object.hasOwnProperty.call(m,"referrer"))
  w.uint32(226).string(m.referrer)
  if(m.customParam4!=null&&Object.hasOwnProperty.call(m,"customParam4"))
  w.uint32(234).string(m.customParam4)
  if(m.customParam5!=null&&Object.hasOwnProperty.call(m,"customParam5"))
  w.uint32(242).string(m.customParam5)
  if(m.servingRuleId!=null&&Object.hasOwnProperty.call(m,"servingRuleId"))
  w.uint32(250).string(m.servingRuleId)
  return w
}
})