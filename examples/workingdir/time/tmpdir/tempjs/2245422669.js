(function anonymous(types,util
) {
return function ProtoRtbRequestLineItemEntry$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.cachedFloorPriceOld!=null){
  m.cachedFloorPriceOld=Number(d.cachedFloorPriceOld)
  }
  if(d.predictedFloorPrice!=null){
  m.predictedFloorPrice=Number(d.predictedFloorPrice)
  }
  if(d.cachedFloorPrice!=null){
  if(typeof d.cachedFloorPrice!=="object")
  throw TypeError(".ProtoRtbRequestLineItemEntry.cachedFloorPrice: object expected")
  m.cachedFloorPrice=types[2].fromObject(d.cachedFloorPrice)
  }
  if(d.availableRequests!=null){
  m.availableRequests=d.availableRequests|0
  }
  if(d.gdprConsent!=null){
  m.gdprConsent=Boolean(d.gdprConsent)
  }
  if(d.publisherLineItemId!=null){
  m.publisherLineItemId=String(d.publisherLineItemId)
  }
  if(d.slotWidth!=null){
  m.slotWidth=d.slotWidth|0
  }
  if(d.slotHeight!=null){
  m.slotHeight=d.slotHeight|0
  }
  if(d.requestNumber!=null){
  m.requestNumber=d.requestNumber|0
  }
  switch(d.skip){
  case"No":
  case 0:
  m.skip=0
  break
  case"Yes":
  case 1:
  m.skip=1
  break
  }
  if(d.skipmin!=null){
  m.skipmin=d.skipmin|0
  }
  if(d.skipafter!=null){
  m.skipafter=d.skipafter|0
  }
  if(d.minDuration!=null){
  m.minDuration=d.minDuration|0
  }
  return m
}
})