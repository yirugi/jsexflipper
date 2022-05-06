(function anonymous(types,util
) {
return function ProtoPlayspaceColorSecondary$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.background="#000000 "
  d.foreground="#F1F1F1"
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