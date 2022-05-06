(function anonymous(Reader,types,util
) {
return function ProtoContextualTargetingFilterModel$decode(r,l){
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
  if(!(m.items&&m.items.length))
  m.items=[]
  m.items.push(r.string())
  break
  case 3:
  m.level=r.int32()
  break
  case 4:
  if(!(m.hashedItemsIds&&m.hashedItemsIds.length))
  m.hashedItemsIds=[]
  m.hashedItemsIds.push(r.string())
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})