(function anonymous(Reader,types,util
) {
return function ProtoRtbResponse$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 3:
  if(!(m.lineItemResponses&&m.lineItemResponses.length))
  m.lineItemResponses=[]
  m.lineItemResponses.push(types[0].decode(r,r.uint32()))
  break
  case 4:
  m.liveRampEnvelopeStatus=r.int32()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})