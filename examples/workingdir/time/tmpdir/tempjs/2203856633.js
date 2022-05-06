(function anonymous(types,util
) {
return function ProtoPlayspaceSlideMetadata$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.capabilityList=[]
  }
  if(o.defaults){
  d.mediaType=o.enums===String?"Image":0
  d.title=""
  d.clickUrl=""
  d.imageUrl=""
  d.slideDuration=0
  d.videoRendition=null
  d.type=o.enums===String?"Default":0
  d.coverMetadata=null
  d.descriptionMetadata=null
  d.bulletListMetadata=null
  d.quoteMetadata=null
  d.portraitImageUrl=""
  d.mediaContext=o.enums===String?"None":0
  d.instagramMetadata=null
  d.altText=""
  }
  if(m.mediaType!=null&&m.hasOwnProperty("mediaType")){
  d.mediaType=o.enums===String?types[0].values[m.mediaType]:m.mediaType
  }
  if(m.title!=null&&m.hasOwnProperty("title")){
  d.title=m.title
  }
  if(m.clickUrl!=null&&m.hasOwnProperty("clickUrl")){
  d.clickUrl=m.clickUrl
  }
  if(m.imageUrl!=null&&m.hasOwnProperty("imageUrl")){
  d.imageUrl=m.imageUrl
  }
  if(m.slideDuration!=null&&m.hasOwnProperty("slideDuration")){
  d.slideDuration=m.slideDuration
  }
  if(m.videoRendition!=null&&m.hasOwnProperty("videoRendition")){
  d.videoRendition=types[5].toObject(m.videoRendition,o)
  }
  if(m.type!=null&&m.hasOwnProperty("type")){
  d.type=o.enums===String?types[6].values[m.type]:m.type
  }
  if(m.coverMetadata!=null&&m.hasOwnProperty("coverMetadata")){
  d.coverMetadata=types[7].toObject(m.coverMetadata,o)
  }
  if(m.descriptionMetadata!=null&&m.hasOwnProperty("descriptionMetadata")){
  d.descriptionMetadata=types[8].toObject(m.descriptionMetadata,o)
  }
  if(m.bulletListMetadata!=null&&m.hasOwnProperty("bulletListMetadata")){
  d.bulletListMetadata=types[9].toObject(m.bulletListMetadata,o)
  }
  if(m.quoteMetadata!=null&&m.hasOwnProperty("quoteMetadata")){
  d.quoteMetadata=types[10].toObject(m.quoteMetadata,o)
  }
  if(m.capabilityList&&m.capabilityList.length){
  d.capabilityList=[]
  for(var j=0;j<m.capabilityList.length;++j){
  d.capabilityList[j]=types[12].toObject(m.capabilityList[j],o)
  }
  }
  if(m.portraitImageUrl!=null&&m.hasOwnProperty("portraitImageUrl")){
  d.portraitImageUrl=m.portraitImageUrl
  }
  if(m.mediaContext!=null&&m.hasOwnProperty("mediaContext")){
  d.mediaContext=o.enums===String?types[14].values[m.mediaContext]:m.mediaContext
  }
  if(m.instagramMetadata!=null&&m.hasOwnProperty("instagramMetadata")){
  d.instagramMetadata=types[11].toObject(m.instagramMetadata,o)
  }
  if(m.altText!=null&&m.hasOwnProperty("altText")){
  d.altText=m.altText
  }
  return d
}
})