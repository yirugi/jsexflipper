(function anonymous(types,util
) {
return function ProtoPlayspaceColorPrimary$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.background="#F1F1F1"
  d.foreground="#000000"
  }
  if(m.background!=null&&m.hasOwnProperty("background")){
  d.background=m.background
  }
  if(m.foreground!=null&&m.hasOwnProperty("foreground")){
  d.foreground=m.foreground
  }
  return d
}
})