(function anonymous(Reader,types,util
) {
return function ProtoUserInformation$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.userId=r.string()
  break
  case 3:
  m.lookupId=r.string()
  break
  case 4:
  m.lookupResponseCode=r.int32()
  break
  case 5:
  m.callFraudSensor=r.bool()
  break
  case 6:
  m.publisherAdsTxt=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})