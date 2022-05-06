(function anonymous(Writer,types,util
) {
return function ProtoBidTrackingsRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.trackingRequestMeta!=null&&Object.hasOwnProperty.call(m,"trackingRequestMeta"))
  types[0].encode(m.trackingRequestMeta,w.uint32(10).fork()).ldelim()
  if(m.mediaGuid!=null&&Object.hasOwnProperty.call(m,"mediaGuid"))
  w.uint32(18).string(m.mediaGuid)
  if(m.prebids!=null&&m.prebids.length){
  for(var i=0;i<m.prebids.length;++i)
  types[2].encode(m.prebids[i],w.uint32(34).fork()).ldelim()
  }
  if(m.bids!=null&&m.bids.length){
  for(var i=0;i<m.bids.length;++i)
  types[3].encode(m.bids[i],w.uint32(42).fork()).ldelim()
  }
  if(m.postBids!=null&&m.postBids.length){
  for(var i=0;i<m.postBids.length;++i)
  types[4].encode(m.postBids[i],w.uint32(50).fork()).ldelim()
  }
  if(m.logEveryting!=null&&Object.hasOwnProperty.call(m,"logEveryting"))
  w.uint32(56).bool(m.logEveryting)
  if(m.hasGdprConsentPayload!=null&&Object.hasOwnProperty.call(m,"hasGdprConsentPayload"))
  w.uint32(80).bool(m.hasGdprConsentPayload)
  if(m.gdprConsentMode!=null&&Object.hasOwnProperty.call(m,"gdprConsentMode"))
  w.uint32(88).int32(m.gdprConsentMode)
  if(m.useExploration!=null&&Object.hasOwnProperty.call(m,"useExploration"))
  w.uint32(96).bool(m.useExploration)
  return w
}
})