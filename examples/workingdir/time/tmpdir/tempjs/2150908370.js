(function anonymous(Reader,types,util
) {
return function Browser$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.browserVersion=r.string()
  break
  case 2:
  m.browserType=r.string()
  break
  case 3:
  m.osCode=r.string()
  break
  case 4:
  m.device=r.int32()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})