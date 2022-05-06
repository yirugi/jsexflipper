(function anonymous(Reader,types,util
) {
return function ProtoAdBreak$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  if(!(m.types&&m.types.length))
  m.types=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.types.push(r.int32())
  }else
  m.types.push(r.int32())
  break
  case 2:
  m.maxAdPodDuration=r.int32()
  break
  case 3:
  m.maxAdSlotDuration=r.int32()
  break
  case 4:
  m.numberOfAdSlots=r.int32()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})