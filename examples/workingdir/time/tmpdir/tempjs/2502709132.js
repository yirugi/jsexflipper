(function anonymous(Reader,types,util
) {
return function ProtoPlayspaceSlideMetadata$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.mediaType=r.int32()
  break
  case 2:
  m.title=r.string()
  break
  case 3:
  m.clickUrl=r.string()
  break
  case 4:
  m.imageUrl=r.string()
  break
  case 5:
  m.slideDuration=r.int32()
  break
  case 6:
  m.videoRendition=types[5].decode(r,r.uint32())
  break
  case 7:
  m.type=r.int32()
  break
  case 8:
  m.coverMetadata=types[7].decode(r,r.uint32())
  break
  case 9:
  m.descriptionMetadata=types[8].decode(r,r.uint32())
  break
  case 10:
  m.bulletListMetadata=types[9].decode(r,r.uint32())
  break
  case 12:
  m.quoteMetadata=types[10].decode(r,r.uint32())
  break
  case 16:
  m.instagramMetadata=types[11].decode(r,r.uint32())
  break
  case 13:
  if(!(m.capabilityList&&m.capabilityList.length))
  m.capabilityList=[]
  m.capabilityList.push(types[12].decode(r,r.uint32()))
  break
  case 14:
  m.portraitImageUrl=r.string()
  break
  case 15:
  m.mediaContext=r.int32()
  break
  case 17:
  m.altText=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})