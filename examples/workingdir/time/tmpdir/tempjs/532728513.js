(function anonymous(types,util
) {
return function ProtoPlayspaceVideoSlideRendition$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.width=0
  d.height=0
  d.videoUrl=""
  d.codec=o.enums===String?"h264":0
  }
  if(m.width!=null&&m.hasOwnProperty("width")){
  d.width=m.width
  }
  if(m.height!=null&&m.hasOwnProperty("height")){
  d.height=m.height
  }
  if(m.videoUrl!=null&&m.hasOwnProperty("videoUrl")){
  d.videoUrl=m.videoUrl
  }
  if(m.codec!=null&&m.hasOwnProperty("codec")){
  d.codec=o.enums===String?types[3].values[m.codec]:m.codec
  }
  return d
}
})