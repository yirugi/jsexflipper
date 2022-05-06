(function anonymous(Reader,types,util
) {
return function ProtoPlayspaceMediaMetadataResponse$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  if(!(m.slides&&m.slides.length))
  m.slides=[]
  m.slides.push(types[0].decode(r,r.uint32()))
  break
  case 2:
  m.storyTitle=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})