(function anonymous(Reader,types,util
) {
return function ProtoInsightsResponse$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  if(!(m.insights&&m.insights.length))
  m.insights=[]
  m.insights.push(types[0].decode(r,r.uint32()))
  break
  case 2:
  m.sentimentAnalysis=types[1].decode(r,r.uint32())
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})