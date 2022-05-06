(function anonymous(types,util
) {
return function ProtoPlayspaceRequest$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.tokens){
  if(!Array.isArray(d.tokens))
  throw TypeError(".ProtoPlayspaceRequest.tokens: array expected")
  m.tokens=[]
  for(var i=0;i<d.tokens.length;++i){
  m.tokens[i]=String(d.tokens[i])
  }
  }
  if(d.pageUrl!=null){
  m.pageUrl=String(d.pageUrl)
  }
  if(d.userId!=null){
  m.userId=String(d.userId)
  }
  if(d.forcePlayerId!=null){
  m.forcePlayerId=String(d.forcePlayerId)
  }
  if(d.forceStoryId!=null){
  m.forceStoryId=String(d.forceStoryId)
  }
  if(d.version!=null){
  m.version=d.version|0
  }
  if(d.clientAb0!=null){
  m.clientAb0=d.clientAb0|0
  }
  if(d.clientAb1!=null){
  m.clientAb1=d.clientAb1|0
  }
  if(d.forceLineItemIds){
  if(!Array.isArray(d.forceLineItemIds))
  throw TypeError(".ProtoPlayspaceRequest.forceLineItemIds: array expected")
  m.forceLineItemIds=[]
  for(var i=0;i<d.forceLineItemIds.length;++i){
  m.forceLineItemIds[i]=String(d.forceLineItemIds[i])
  }
  }
  if(d.customParam1!=null){
  m.customParam1=String(d.customParam1)
  }
  if(d.customParam2!=null){
  m.customParam2=String(d.customParam2)
  }
  if(d.customParam3!=null){
  m.customParam3=String(d.customParam3)
  }
  if(d.forceExploration!=null){
  m.forceExploration=Boolean(d.forceExploration)
  }
  if(d.es6!=null){
  m.es6=Boolean(d.es6)
  }
  if(d.bundleId!=null){
  m.bundleId=String(d.bundleId)
  }
  if(d.parseDomain!=null){
  m.parseDomain=Boolean(d.parseDomain)
  }
  switch(d.implementationType){
  case"Web":
  case 0:
  m.implementationType=0
  break
  case"Amp":
  case 1:
  m.implementationType=1
  break
  }
  if(d.queryJsTargeting){
  if(typeof d.queryJsTargeting!=="object")
  throw TypeError(".ProtoPlayspaceRequest.queryJsTargeting: object expected")
  m.queryJsTargeting={}
  for(var ks=Object.keys(d.queryJsTargeting),i=0;i<ks.length;++i){
  m.queryJsTargeting[ks[i]]=String(d.queryJsTargeting[ks[i]])
  }
  }
  if(d.isConsentConnatix!=null){
  m.isConsentConnatix=Boolean(d.isConsentConnatix)
  }
  if(d.reloadedPlayers){
  if(typeof d.reloadedPlayers!=="object")
  throw TypeError(".ProtoPlayspaceRequest.reloadedPlayers: object expected")
  m.reloadedPlayers={}
  for(var ks=Object.keys(d.reloadedPlayers),i=0;i<ks.length;++i){
  m.reloadedPlayers[ks[i]]=String(d.reloadedPlayers[ks[i]])
  }
  }
  if(d.disableTracking!=null){
  m.disableTracking=Boolean(d.disableTracking)
  }
  if(d.referrer!=null){
  m.referrer=String(d.referrer)
  }
  if(d.customParam4!=null){
  m.customParam4=String(d.customParam4)
  }
  if(d.customParam5!=null){
  m.customParam5=String(d.customParam5)
  }
  if(d.servingRuleId!=null){
  m.servingRuleId=String(d.servingRuleId)
  }
  return m
}
})