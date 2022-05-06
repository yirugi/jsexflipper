(function anonymous(Writer,types,util
) {
return function ProtoRtbRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.metadata!=null&&Object.hasOwnProperty.call(m,"metadata"))
  types[0].encode(m.metadata,w.uint32(10).fork()).ldelim()
  if(m.coppa!=null&&Object.hasOwnProperty.call(m,"coppa"))
  w.uint32(32).bool(m.coppa)
  if(m.refererUrl!=null&&Object.hasOwnProperty.call(m,"refererUrl"))
  w.uint32(42).string(m.refererUrl)
  if(m.testMode!=null&&Object.hasOwnProperty.call(m,"testMode"))
  w.uint32(48).bool(m.testMode)
  if(m.videoWidth!=null&&Object.hasOwnProperty.call(m,"videoWidth"))
  w.uint32(56).int32(m.videoWidth)
  if(m.videoHeight!=null&&Object.hasOwnProperty.call(m,"videoHeight"))
  w.uint32(64).int32(m.videoHeight)
  if(m.gdprCompliant!=null&&Object.hasOwnProperty.call(m,"gdprCompliant"))
  w.uint32(72).bool(m.gdprCompliant)
  if(m.soundOn!=null&&Object.hasOwnProperty.call(m,"soundOn"))
  w.uint32(80).bool(m.soundOn)
  if(m.gdprConsentData!=null&&Object.hasOwnProperty.call(m,"gdprConsentData"))
  w.uint32(90).string(m.gdprConsentData)
  if(m.explorationMode!=null&&Object.hasOwnProperty.call(m,"explorationMode"))
  w.uint32(96).bool(m.explorationMode)
  if(m.viewability!=null&&Object.hasOwnProperty.call(m,"viewability"))
  w.uint32(104).bool(m.viewability)
  if(m.outstream!=null&&Object.hasOwnProperty.call(m,"outstream"))
  w.uint32(112).bool(m.outstream)
  if(m.domainURL!=null&&Object.hasOwnProperty.call(m,"domainURL"))
  w.uint32(130).string(m.domainURL)
  if(m.isClickToPlay!=null&&Object.hasOwnProperty.call(m,"isClickToPlay"))
  w.uint32(144).bool(m.isClickToPlay)
  if(m.appVersion!=null&&Object.hasOwnProperty.call(m,"appVersion"))
  w.uint32(170).string(m.appVersion)
  if(m.deviceID!=null&&Object.hasOwnProperty.call(m,"deviceID"))
  w.uint32(194).string(m.deviceID)
  if(m.lineItems!=null&&Object.hasOwnProperty.call(m,"lineItems")){
  for(var ks=Object.keys(m.lineItems),i=0;i<ks.length;++i){
  w.uint32(202).fork().uint32(10).string(ks[i])
  types[16].encode(m.lineItems[ks[i]],w.uint32(18).fork()).ldelim().ldelim()
  }
  }
  if(m.isCcpaBlockingUserInfo!=null&&Object.hasOwnProperty.call(m,"isCcpaBlockingUserInfo"))
  w.uint32(208).bool(m.isCcpaBlockingUserInfo)
  if(m.usPrivacyString!=null&&Object.hasOwnProperty.call(m,"usPrivacyString"))
  w.uint32(218).string(m.usPrivacyString)
  if(m.gdprConsentMode!=null&&Object.hasOwnProperty.call(m,"gdprConsentMode"))
  w.uint32(288).int32(m.gdprConsentMode)
  if(m.maxAdDuration!=null&&Object.hasOwnProperty.call(m,"maxAdDuration"))
  w.uint32(296).int32(m.maxAdDuration)
  if(m.customMacros!=null&&Object.hasOwnProperty.call(m,"customMacros")){
  for(var ks=Object.keys(m.customMacros),i=0;i<ks.length;++i){
  w.uint32(306).fork().uint32(10).string(ks[i])
  .uint32(18).string(m.customMacros[ks[i]]).ldelim()
  }
  }
  if(m.maxBidPrice!=null&&Object.hasOwnProperty.call(m,"maxBidPrice"))
  w.uint32(313).double(m.maxBidPrice)
  if(m.useNewSkippability!=null&&Object.hasOwnProperty.call(m,"useNewSkippability"))
  w.uint32(336).bool(m.useNewSkippability)
  if(m.playerWidth!=null&&Object.hasOwnProperty.call(m,"playerWidth"))
  w.uint32(344).int32(m.playerWidth)
  if(m.playerHeight!=null&&Object.hasOwnProperty.call(m,"playerHeight"))
  w.uint32(352).int32(m.playerHeight)
  if(m.liveRampAtsEnvelope!=null&&Object.hasOwnProperty.call(m,"liveRampAtsEnvelope"))
  w.uint32(362).string(m.liveRampAtsEnvelope)
  return w
}
})