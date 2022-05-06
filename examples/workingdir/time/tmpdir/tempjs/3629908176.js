(function anonymous(types,util
) {
return function ProtoContextualTargetingFilterModel$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.items=[]
  d.hashedItemsIds=[]
  }
  if(o.defaults){
  d.type=o.enums===String?"IncludeAny":0
  d.level=o.enums===String?"Media":0
  }
  if(m.type!=null&&m.hasOwnProperty("type")){
  d.type=o.enums===String?types[0].values[m.type]:m.type
  }
  if(m.items&&m.items.length){
  d.items=[]
  for(var j=0;j<m.items.length;++j){
  d.items[j]=m.items[j]
  }
  }
  if(m.level!=null&&m.hasOwnProperty("level")){
  d.level=o.enums===String?types[2].values[m.level]:m.level
  }
  if(m.hashedItemsIds&&m.hashedItemsIds.length){
  d.hashedItemsIds=[]
  for(var j=0;j<m.hashedItemsIds.length;++j){
  d.hashedItemsIds[j]=m.hashedItemsIds[j]
  }
  }
  return d
}
})