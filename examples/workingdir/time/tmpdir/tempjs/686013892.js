(function anonymous(types,util
) {
return function ProtoPlayspaceMediaMetadataResponse$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.slides=[]
  }
  if(o.defaults){
  d.storyTitle=""
  }
  if(m.slides&&m.slides.length){
  d.slides=[]
  for(var j=0;j<m.slides.length;++j){
  d.slides[j]=types[0].toObject(m.slides[j],o)
  }
  }
  if(m.storyTitle!=null&&m.hasOwnProperty("storyTitle")){
  d.storyTitle=m.storyTitle
  }
  return d
}
})