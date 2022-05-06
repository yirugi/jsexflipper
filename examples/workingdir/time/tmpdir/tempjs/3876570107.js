(function anonymous(types,util
) {
return function ProtoSlideCapabilityMetadata$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.label=""
  }
  if(m.label!=null&&m.hasOwnProperty("label")){
  d.label=m.label
  }
  return d
}
})