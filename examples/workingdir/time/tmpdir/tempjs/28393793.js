(function anonymous(Reader,types,util
) {
return function ProtoLineItem$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 49:
  m.predictedFloorPrice=r.double()
  break
  case 57:
  m.floorPricesNew=types[1].decode(r,r.uint32())
  break
  case 1:
  m.publisherLineItemId=r.string()
  break
  case 2:
  m.advertiserLineItemId=r.string()
  break
  case 3:
  m.adTag=r.string()
  break
  case 4:
  m.creativeType=r.int32()
  break
  case 6:
  m.sound=r.bool()
  break
  case 7:
  m.viewability=r.bool()
  break
  case 9:
  m.impressionTimeSpent=r.int32()
  break
  case 10:
  m.vendorId=r.string()
  break
  case 12:
  if(!(m.trackers&&m.trackers.length))
  m.trackers=[]
  m.trackers.push(types[10].decode(r,r.uint32()))
  break
  case 13:
  m.duration=r.int32()
  break
  case 14:
  if(!(m.renditions&&m.renditions.length))
  m.renditions=[]
  m.renditions.push(types[12].decode(r,r.uint32()))
  break
  case 15:
  m.mediaCreativeId=r.string()
  break
  case 16:
  m.ignoreFilledRequests=r.bool()
  break
  case 17:
  m.requestCap=r.int32()
  break
  case 18:
  m.impressionCap=r.int32()
  break
  case 19:
  m.successRate=r.double()
  break
  case 20:
  m.lineItemPriority=r.int32()
  break
  case 21:
  m.headerBidderBids=r.string()
  break
  case 22:
  m.headerBidderTimeout=r.int32()
  break
  case 23:
  m.mediaCreativeClickUrl=r.string()
  break
  case 24:
  m.resetRequestsCapTime=r.int32()
  break
  case 25:
  m.resetImpressionsCapTime=r.int32()
  break
  case 26:
  m.resetCapType=r.int32()
  break
  case 27:
  m.creativeHlsFileName=r.string()
  break
  case 28:
  m.timeBetweenRequests=r.int32()
  break
  case 29:
  m.skipMode=r.int32()
  break
  case 30:
  m.mediaIdTargeting=types[28].decode(r,r.uint32())
  break
  case 31:
  m.mediaKeywordsTargeting=types[29].decode(r,r.uint32())
  break
  case 32:
  m.mediaLanguageTargeting=types[30].decode(r,r.uint32())
  break
  case 33:
  m.adType=r.int32()
  break
  case 34:
  m.overlayTime=r.int32()
  break
  case 35:
  m.floorPrice=r.double()
  break
  case 36:
  m.adBreakSettings=types[34].decode(r,r.uint32())
  break
  case 38:
  if(!(m.floorPrices&&m.floorPrices.length))
  m.floorPrices=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.floorPrices.push(r.double())
  }else
  m.floorPrices.push(r.double())
  break
  case 39:
  m.bidRate=r.double()
  break
  case 40:
  m.pauseAdOutOfView=r.int32()
  break
  case 41:
  m.moatTrackingEnabled=r.bool()
  break
  case 42:
  m.cnxCreativeId=r.string()
  break
  case 44:
  m.blockedDomainsRevisionNumber=r.int32()
  break
  case 45:
  if(!(m.advertiserContextualTargeting&&m.advertiserContextualTargeting.length))
  m.advertiserContextualTargeting=[]
  m.advertiserContextualTargeting.push(types[41].decode(r,r.uint32()))
  break
  case 46:
  if(!(m.publisherContextualTargeting&&m.publisherContextualTargeting.length))
  m.publisherContextualTargeting=[]
  m.publisherContextualTargeting.push(types[42].decode(r,r.uint32()))
  break
  case 47:
  m.playerSizeTargetings=types[43].decode(r,r.uint32())
  break
  case 48:
  m.amazonDealId=r.string()
  break
  case 50:
  m.playerOrientationTargeting=r.int32()
  break
  case 51:
  m.skipMin=r.int32()
  break
  case 52:
  m.skippability=r.int32()
  break
  case 53:
  m.forceCallingInEveryAO=r.bool()
  break
  case 54:
  m.networkExpiryTimeSeconds=r.int32()
  break
  case 55:
  m.nonlinearLineItemSettings=types[50].decode(r,r.uint32())
  break
  case 56:
  if(!(m.floorPriceData&&m.floorPriceData.length))
  m.floorPriceData=[]
  m.floorPriceData.push(types[51].decode(r,r.uint32()))
  break
  case 58:
  m.prebidJsBidParamsJSONString=r.string()
  break
  case 101:
  m.playerSize=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})