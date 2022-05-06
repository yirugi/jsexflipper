(function anonymous(types,util
) {
return function ProtoSessionTimeTrackingRequest$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.trackingRequestMeta!=null){
  if(typeof d.trackingRequestMeta!=="object")
  throw TypeError(".ProtoSessionTimeTrackingRequest.trackingRequestMeta: object expected")
  m.trackingRequestMeta=types[0].fromObject(d.trackingRequestMeta)
  }
  if(d.timePlayed!=null){
  m.timePlayed=d.timePlayed|0
  }
  if(d.timePlayedInView!=null){
  m.timePlayedInView=d.timePlayedInView|0
  }
  if(d.sessionTime!=null){
  m.sessionTime=d.sessionTime|0
  }
  if(d.pageInsightIndexes){
  if(!Array.isArray(d.pageInsightIndexes))
  throw TypeError(".ProtoSessionTimeTrackingRequest.pageInsightIndexes: array expected")
  m.pageInsightIndexes=[]
  for(var i=0;i<d.pageInsightIndexes.length;++i){
  m.pageInsightIndexes[i]=String(d.pageInsightIndexes[i])
  }
  }
  return m
}
})