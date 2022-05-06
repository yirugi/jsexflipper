(function anonymous(types,util
) {
return function ProtoPlayspaceVideoSettings$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.renditions=[]
  }
  if(m.renditions&&m.renditions.length){
  d.renditions=[]
  for(var j=0;j<m.renditions.length;++j){
  d.renditions[j]=types[0].toObject(m.renditions[j],o)
  }
  }
  return d
}
})