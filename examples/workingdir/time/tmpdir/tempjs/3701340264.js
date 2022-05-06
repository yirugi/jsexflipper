(function anonymous(Writer,types,util
) {
return function MetadataModel$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.version!=null&&Object.hasOwnProperty.call(m,"version"))
  w.uint32(8).int32(m.version)
  if(m.sessionId!=null&&Object.hasOwnProperty.call(m,"sessionId"))
  w.uint32(18).string(m.sessionId)
  if(m.playerId!=null&&Object.hasOwnProperty.call(m,"playerId"))
  w.uint32(26).string(m.playerId)
  if(m.userId!=null&&Object.hasOwnProperty.call(m,"userId"))
  w.uint32(34).string(m.userId)
  if(m.browser!=null&&Object.hasOwnProperty.call(m,"browser"))
  types[4].encode(m.browser,w.uint32(42).fork()).ldelim()
  if(m.geo!=null&&Object.hasOwnProperty.call(m,"geo"))
  types[5].encode(m.geo,w.uint32(50).fork()).ldelim()
  if(m.clientAb0!=null&&Object.hasOwnProperty.call(m,"clientAb0"))
  w.uint32(56).int32(m.clientAb0)
  if(m.clientAb1!=null&&Object.hasOwnProperty.call(m,"clientAb1"))
  w.uint32(64).int32(m.clientAb1)
  if(m.serverAb0!=null&&Object.hasOwnProperty.call(m,"serverAb0"))
  w.uint32(72).int32(m.serverAb0)
  if(m.serverAb1!=null&&Object.hasOwnProperty.call(m,"serverAb1"))
  w.uint32(80).int32(m.serverAb1)
  if(m.pageUrl!=null&&Object.hasOwnProperty.call(m,"pageUrl"))
  w.uint32(122).string(m.pageUrl)
  if(m.bundleId!=null&&Object.hasOwnProperty.call(m,"bundleId"))
  w.uint32(138).string(m.bundleId)
  if(m.implementationType!=null&&Object.hasOwnProperty.call(m,"implementationType"))
  w.uint32(144).int32(m.implementationType)
  if(m.trackAllRequests!=null&&Object.hasOwnProperty.call(m,"trackAllRequests"))
  w.uint32(152).bool(m.trackAllRequests)
  if(m.customParam1!=null&&Object.hasOwnProperty.call(m,"customParam1"))
  w.uint32(162).string(m.customParam1)
  if(m.customParam2!=null&&Object.hasOwnProperty.call(m,"customParam2"))
  w.uint32(170).string(m.customParam2)
  if(m.customParam3!=null&&Object.hasOwnProperty.call(m,"customParam3"))
  w.uint32(178).string(m.customParam3)
  if(m.abTestId!=null&&Object.hasOwnProperty.call(m,"abTestId"))
  w.uint32(194).string(m.abTestId)
  if(m.pageInFocus!=null&&Object.hasOwnProperty.call(m,"pageInFocus"))
  w.uint32(200).bool(m.pageInFocus)
  if(m.customParam4!=null&&Object.hasOwnProperty.call(m,"customParam4"))
  w.uint32(210).string(m.customParam4)
  if(m.customParam5!=null&&Object.hasOwnProperty.call(m,"customParam5"))
  w.uint32(218).string(m.customParam5)
  if(m.bundleAbId!=null&&Object.hasOwnProperty.call(m,"bundleAbId"))
  w.uint32(226).string(m.bundleAbId)
  if(m.bundlePart!=null&&Object.hasOwnProperty.call(m,"bundlePart"))
  w.uint32(234).string(m.bundlePart)
  return w
}
})