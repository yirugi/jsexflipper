(function anonymous(types,util
) {
return function ProtoPlayspaceColorAccent$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.background=""
  d.foreground=""
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