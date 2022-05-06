(function anonymous(Reader,types,util
) {
return function ProtoRtbNoBid$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.connatixReason=r.int32()
  break
  case 2:
  m.partnerReason=r.int32()
  break
  case 3:
  m.syncedUser=r.bool()
  break
  case 4:
  m.requestedFloorPrice=r.double()
  break
  case 5:
  m.floorPriceFactorIndex=r.int32()
  break
  case 6:
  m.partnerCustomHeaders=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})