(function anonymous(types,util
) {
return function ProtoRtbNoBid$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.connatixReason=o.enums===String?"RequestException":0
  d.partnerReason=o.enums===String?"Unknown":0
  d.syncedUser=false
  d.requestedFloorPrice=0
  d.floorPriceFactorIndex=0
  d.partnerCustomHeaders=""
  }
  if(m.connatixReason!=null&&m.hasOwnProperty("connatixReason")){
  d.connatixReason=o.enums===String?types[0].values[m.connatixReason]:m.connatixReason
  }
  if(m.partnerReason!=null&&m.hasOwnProperty("partnerReason")){
  d.partnerReason=o.enums===String?types[1].values[m.partnerReason]:m.partnerReason
  }
  if(m.syncedUser!=null&&m.hasOwnProperty("syncedUser")){
  d.syncedUser=m.syncedUser
  }
  if(m.requestedFloorPrice!=null&&m.hasOwnProperty("requestedFloorPrice")){
  d.requestedFloorPrice=o.json&&!isFinite(m.requestedFloorPrice)?String(m.requestedFloorPrice):m.requestedFloorPrice
  }
  if(m.floorPriceFactorIndex!=null&&m.hasOwnProperty("floorPriceFactorIndex")){
  d.floorPriceFactorIndex=m.floorPriceFactorIndex
  }
  if(m.partnerCustomHeaders!=null&&m.hasOwnProperty("partnerCustomHeaders")){
  d.partnerCustomHeaders=m.partnerCustomHeaders
  }
  return d
}
})