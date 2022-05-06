(function anonymous(types,util
) {
return function ProtoContextualTargetingCaseModel$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.filters=[]
  }
  if(m.filters&&m.filters.length){
  d.filters=[]
  for(var j=0;j<m.filters.length;++j){
  d.filters[j]=types[0].toObject(m.filters[j],o)
  }
  }
  return d
}
})