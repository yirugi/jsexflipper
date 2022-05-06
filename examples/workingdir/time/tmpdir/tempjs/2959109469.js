(function anonymous(types,util
) {
return function MetadataModel$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.version!=null){
  m.version=d.version|0
  }
  if(d.sessionId!=null){
  m.sessionId=String(d.sessionId)
  }
  if(d.playerId!=null){
  m.playerId=String(d.playerId)
  }
  if(d.userId!=null){
  m.userId=String(d.userId)
  }
  if(d.browser!=null){
  if(typeof d.browser!=="object")
  throw TypeError(".MetadataModel.browser: object expected")
  m.browser=types[4].fromObject(d.browser)
  }
  if(d.geo!=null){
  if(typeof d.geo!=="object")
  throw TypeError(".MetadataModel.geo: object expected")
  m.geo=types[5].fromObject(d.geo)
  }
  if(d.clientAb0!=null){
  m.clientAb0=d.clientAb0|0
  }
  if(d.clientAb1!=null){
  m.clientAb1=d.clientAb1|0
  }
  if(d.serverAb0!=null){
  m.serverAb0=d.serverAb0|0
  }
  if(d.serverAb1!=null){
  m.serverAb1=d.serverAb1|0
  }
  if(d.pageUrl!=null){
  m.pageUrl=String(d.pageUrl)
  }
  if(d.bundleId!=null){
  m.bundleId=String(d.bundleId)
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
  if(d.trackAllRequests!=null){
  m.trackAllRequests=Boolean(d.trackAllRequests)
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
  if(d.abTestId!=null){
  m.abTestId=String(d.abTestId)
  }
  if(d.pageInFocus!=null){
  m.pageInFocus=Boolean(d.pageInFocus)
  }
  if(d.customParam4!=null){
  m.customParam4=String(d.customParam4)
  }
  if(d.customParam5!=null){
  m.customParam5=String(d.customParam5)
  }
  if(d.bundleAbId!=null){
  m.bundleAbId=String(d.bundleAbId)
  }
  if(d.bundlePart!=null){
  m.bundlePart=String(d.bundlePart)
  }
  return m
}
})