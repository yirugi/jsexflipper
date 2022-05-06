(function anonymous(types,util
) {
return function Insights$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.key=""
  }
  if(m.key!=null&&m.hasOwnProperty("key")){
  d.key=m.key
  }
  return d
}
})