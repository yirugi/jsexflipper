(function anonymous(types,util
) {
return function ProtoInsightsResponse$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.insights=[]
  }
  if(o.defaults){
  d.sentimentAnalysis=null
  }
  if(m.insights&&m.insights.length){
  d.insights=[]
  for(var j=0;j<m.insights.length;++j){
  d.insights[j]=types[0].toObject(m.insights[j],o)
  }
  }
  if(m.sentimentAnalysis!=null&&m.hasOwnProperty("sentimentAnalysis")){
  d.sentimentAnalysis=types[1].toObject(m.sentimentAnalysis,o)
  }
  return d
}
})