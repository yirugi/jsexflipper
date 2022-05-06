(function anonymous(types,util
) {
return function ProtoBidTrackingsRequest$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.trackingRequestMeta!=null){
  if(typeof d.trackingRequestMeta!=="object")
  throw TypeError(".ProtoBidTrackingsRequest.trackingRequestMeta: object expected")
  m.trackingRequestMeta=types[0].fromObject(d.trackingRequestMeta)
  }
  if(d.mediaGuid!=null){
  m.mediaGuid=String(d.mediaGuid)
  }
  if(d.prebids){
  if(!Array.isArray(d.prebids))
  throw TypeError(".ProtoBidTrackingsRequest.prebids: array expected")
  m.prebids=[]
  for(var i=0;i<d.prebids.length;++i){
  if(typeof d.prebids[i]!=="object")
  throw TypeError(".ProtoBidTrackingsRequest.prebids: object expected")
  m.prebids[i]=types[2].fromObject(d.prebids[i])
  }
  }
  if(d.bids){
  if(!Array.isArray(d.bids))
  throw TypeError(".ProtoBidTrackingsRequest.bids: array expected")
  m.bids=[]
  for(var i=0;i<d.bids.length;++i){
  if(typeof d.bids[i]!=="object")
  throw TypeError(".ProtoBidTrackingsRequest.bids: object expected")
  m.bids[i]=types[3].fromObject(d.bids[i])
  }
  }
  if(d.postBids){
  if(!Array.isArray(d.postBids))
  throw TypeError(".ProtoBidTrackingsRequest.postBids: array expected")
  m.postBids=[]
  for(var i=0;i<d.postBids.length;++i){
  if(typeof d.postBids[i]!=="object")
  throw TypeError(".ProtoBidTrackingsRequest.postBids: object expected")
  m.postBids[i]=types[4].fromObject(d.postBids[i])
  }
  }
  if(d.logEveryting!=null){
  m.logEveryting=Boolean(d.logEveryting)
  }
  if(d.hasGdprConsentPayload!=null){
  m.hasGdprConsentPayload=Boolean(d.hasGdprConsentPayload)
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
  if(d.useExploration!=null){
  m.useExploration=Boolean(d.useExploration)
  }
  return m
}
})