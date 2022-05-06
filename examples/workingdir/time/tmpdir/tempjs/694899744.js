(function anonymous(Reader,types,util
) {
return function ProtoPlayspaceVideoSlideRendition$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.width=r.int32()
  break
  case 2:
  m.height=r.int32()
  break
  case 3:
  m.videoUrl=r.string()
  break
  case 4:
  m.codec=r.int32()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})