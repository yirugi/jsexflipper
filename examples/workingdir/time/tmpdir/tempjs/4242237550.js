(function anonymous(types,util
) {
return function ProtoRtbRequest$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.metadata!=null){
  if(typeof d.metadata!=="object")
  throw TypeError(".ProtoRtbRequest.metadata: object expected")
  m.metadata=types[0].fromObject(d.metadata)
  }
  if(d.coppa!=null){
  m.coppa=Boolean(d.coppa)
  }
  if(d.refererUrl!=null){
  m.refererUrl=String(d.refererUrl)
  }
  if(d.testMode!=null){
  m.testMode=Boolean(d.testMode)
  }
  if(d.videoWidth!=null){
  m.videoWidth=d.videoWidth|0
  }
  if(d.videoHeight!=null){
  m.videoHeight=d.videoHeight|0
  }
  if(d.gdprCompliant!=null){
  m.gdprCompliant=Boolean(d.gdprCompliant)
  }
  if(d.soundOn!=null){
  m.soundOn=Boolean(d.soundOn)
  }
  if(d.gdprConsentData!=null){
  m.gdprConsentData=String(d.gdprConsentData)
  }
  if(d.explorationMode!=null){
  m.explorationMode=Boolean(d.explorationMode)
  }
  if(d.viewability!=null){
  m.viewability=Boolean(d.viewability)
  }
  if(d.outstream!=null){
  m.outstream=Boolean(d.outstream)
  }
  if(d.domainURL!=null){
  m.domainURL=String(d.domainURL)
  }
  if(d.isClickToPlay!=null){
  m.isClickToPlay=Boolean(d.isClickToPlay)
  }
  if(d.appVersion!=null){
  m.appVersion=String(d.appVersion)
  }
  if(d.deviceID!=null){
  m.deviceID=String(d.deviceID)
  }
  if(d.lineItems){
  if(typeof d.lineItems!=="object")
  throw TypeError(".ProtoRtbRequest.lineItems: object expected")
  m.lineItems={}
  for(var ks=Object.keys(d.lineItems),i=0;i<ks.length;++i){
  if(typeof d.lineItems[ks[i]]!=="object")
  throw TypeError(".ProtoRtbRequest.lineItems: object expected")
  m.lineItems[ks[i]]=types[16].fromObject(d.lineItems[ks[i]])
  }
  }
  if(d.isCcpaBlockingUserInfo!=null){
  m.isCcpaBlockingUserInfo=Boolean(d.isCcpaBlockingUserInfo)
  }
  if(d.usPrivacyString!=null){
  m.usPrivacyString=String(d.usPrivacyString)
  }
  switch(d.gdprConsentMode){
  case"Unknown":
  case 0:
  m.gdprConsentMode=0
  break
  case"NoCmp":
  case 1:
  m.gdprConsentMode=1
  break
  case"NoConsent":
  case 2:
  m.gdprConsentMode=2
  break
  case"NoConnatixConsent":
  case 3:
  m.gdprConsentMode=3
  break
  case"NotAllDemandConsent":
  case 4:
  m.gdprConsentMode=4
  break
  case"AllGood":
  case 5:
  m.gdprConsentMode=5
  break
  }
  if(d.maxAdDuration!=null){
  m.maxAdDuration=d.maxAdDuration|0
  }
  if(d.customMacros){
  if(typeof d.customMacros!=="object")
  throw TypeError(".ProtoRtbRequest.customMacros: object expected")
  m.customMacros={}
  for(var ks=Object.keys(d.customMacros),i=0;i<ks.length;++i){
  m.customMacros[ks[i]]=String(d.customMacros[ks[i]])
  }
  }
  if(d.maxBidPrice!=null){
  m.maxBidPrice=Number(d.maxBidPrice)
  }
  if(d.playerWidth!=null){
  m.playerWidth=d.playerWidth|0
  }
  if(d.playerHeight!=null){
  m.playerHeight=d.playerHeight|0
  }
  if(d.useNewSkippability!=null){
  m.useNewSkippability=Boolean(d.useNewSkippability)
  }
  if(d.liveRampAtsEnvelope!=null){
  m.liveRampAtsEnvelope=String(d.liveRampAtsEnvelope)
  }
  return m
}
})