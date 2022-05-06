(function anonymous(types,util
) {
return function ProtoPrebid$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.publisherLineItemId!=null){
  m.publisherLineItemId=String(d.publisherLineItemId)
  }
  if(d.advertiserLineItemId!=null){
  m.advertiserLineItemId=String(d.advertiserLineItemId)
  }
  if(d.syncedUser!=null){
  m.syncedUser=Boolean(d.syncedUser)
  }
  if(d.timeSpent!=null){
  m.timeSpent=d.timeSpent|0
  }
  switch(d.reason){
  case"RequestException":
  case 0:
  m.reason=0
  break
  case"Timeout":
  case 1:
  m.reason=1
  break
  case"EmptyResponse":
  case 2:
  m.reason=2
  break
  case"InvalidResponse":
  case 3:
  m.reason=3
  break
  case"NoBid":
  case 4:
  m.reason=4
  break
  case"BidBelowFloor":
  case 5:
  m.reason=5
  break
  case"DealIdMismatch":
  case 6:
  m.reason=6
  break
  case"CsInvalidResponse":
  case 7:
  m.reason=7
  break
  case"CsRequestException":
  case 8:
  m.reason=8
  break
  case"CsEmptyResponse":
  case 9:
  m.reason=9
  break
  case"NoLibInPage":
  case 11:
  m.reason=11
  break
  case"BidIsNotTargetingAllowedEver":
  case 12:
  m.reason=12
  break
  }
  if(d.requestNumber!=null){
  m.requestNumber=d.requestNumber|0
  }
  switch(d.partnerReason){
  case"Unknown":
  case 0:
  m.partnerReason=0
  break
  case"TechnicalError":
  case 1:
  m.partnerReason=1
  break
  case"InvalidRequest":
  case 2:
  m.partnerReason=2
  break
  case"KnownWebSpider":
  case 3:
  m.partnerReason=3
  break
  case"SuspectedNonHumanTraffic":
  case 4:
  m.partnerReason=4
  break
  case"CloudIP":
  case 5:
  m.partnerReason=5
  break
  case"UnsupportedDevice":
  case 6:
  m.partnerReason=6
  break
  case"BlockedPublisher":
  case 7:
  m.partnerReason=7
  break
  case"UnmatchedUser":
  case 8:
  m.partnerReason=8
  break
  case"DailyReaderCapMet":
  case 9:
  m.partnerReason=9
  break
  case"DailyDomainCapMet":
  case 10:
  m.partnerReason=10
  break
  }
  if(d.requestedFloorPrice!=null){
  m.requestedFloorPrice=Number(d.requestedFloorPrice)
  }
  if(d.partnerCustomHeaders!=null){
  m.partnerCustomHeaders=String(d.partnerCustomHeaders)
  }
  if(d.prebidJsBidderName!=null){
  m.prebidJsBidderName=String(d.prebidJsBidderName)
  }
  if(d.predictedFloorPrice!=null){
  m.predictedFloorPrice=Number(d.predictedFloorPrice)
  }
  if(d.playerWidth!=null){
  m.playerWidth=d.playerWidth|0
  }
  if(d.playerHeight!=null){
  m.playerHeight=d.playerHeight|0
  }
  if(d.floorPriceInformation!=null){
  if(typeof d.floorPriceInformation!=="object")
  throw TypeError(".ProtoPrebid.floorPriceInformation: object expected")
  m.floorPriceInformation=types[13].fromObject(d.floorPriceInformation)
  }
  return m
}
})