(function anonymous(types,util
) {
return function ProtoPlayspaceSlideCapability$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.type=o.enums===String?"VolumeControls":0
  d.metadata=null
  }
  if(m.type!=null&&m.hasOwnProperty("type")){
  d.type=o.enums===String?types[0].values[m.type]:m.type
  }
  if(m.metadata!=null&&m.hasOwnProperty("metadata")){
  d.metadata=types[1].toObject(m.metadata,o)
  }
  return d
}
})