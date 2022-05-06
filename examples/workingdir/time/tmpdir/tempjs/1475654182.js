(function anonymous(Reader,types,util
) {
return function ProtoTrackingResponse$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 5:
  m.viewability=r.bool()
  break
  case 1:
  m.errorMessage=r.string()
  break
  case 2:
  if(!(m.platformCappedLineItemIdList&&m.platformCappedLineItemIdList.length))
  m.platformCappedLineItemIdList=[]
  m.platformCappedLineItemIdList.push(r.string())
  break
  case 3:
  m.impressionRevenue=r.double()
  break
  case 4:
  m.adServerLineItemName=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})