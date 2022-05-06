(function anonymous(Reader,types,util
) {
return function ProtoPlayspaceSlideCapability$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.type=r.int32()
  break
  case 2:
  m.metadata=types[1].decode(r,r.uint32())
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})