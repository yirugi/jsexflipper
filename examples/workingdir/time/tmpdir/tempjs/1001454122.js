(function anonymous(Reader,types,util
) {
return function ProtoRtbLineItem$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 5:
  m.predictedFloorPrice=r.double()
  break
  case 6:
  m.cachedFloorPrice=types[1].decode(r,r.uint32())
  break
  case 1:
  m.id=r.string()
  break
  case 2:
  m.cachedFloorPriceOld=r.double()
  break
  case 3:
  if(!(m.bids&&m.bids.length))
  m.bids=[]
  m.bids.push(types[4].decode(r,r.uint32()))
  break
  case 4:
  if(!(m.noBids&&m.noBids.length))
  m.noBids=[]
  m.noBids.push(types[5].decode(r,r.uint32()))
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})