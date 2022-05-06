(function anonymous(Writer,types,util
) {
return function ProtoSessionTimeTrackingRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.trackingRequestMeta!=null&&Object.hasOwnProperty.call(m,"trackingRequestMeta"))
  types[0].encode(m.trackingRequestMeta,w.uint32(10).fork()).ldelim()
  if(m.timePlayed!=null&&Object.hasOwnProperty.call(m,"timePlayed"))
  w.uint32(16).int32(m.timePlayed)
  if(m.timePlayedInView!=null&&Object.hasOwnProperty.call(m,"timePlayedInView"))
  w.uint32(24).int32(m.timePlayedInView)
  if(m.sessionTime!=null&&Object.hasOwnProperty.call(m,"sessionTime"))
  w.uint32(32).int32(m.sessionTime)
  if(m.pageInsightIndexes!=null&&m.pageInsightIndexes.length){
  for(var i=0;i<m.pageInsightIndexes.length;++i)
  w.uint32(42).string(m.pageInsightIndexes[i])
  }
  return w
}
})