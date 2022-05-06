(function anonymous(Writer,types,util
) {
return function ProtoAdOpportunityRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.sessionId!=null&&Object.hasOwnProperty.call(m,"sessionId"))
  w.uint32(10).string(m.sessionId)
  if(m.trackingRequestMeta!=null&&Object.hasOwnProperty.call(m,"trackingRequestMeta"))
  types[1].encode(m.trackingRequestMeta,w.uint32(18).fork()).ldelim()
  if(m.adBreak!=null&&Object.hasOwnProperty.call(m,"adBreak"))
  w.uint32(24).int32(m.adBreak)
  if(m.playerWidth!=null&&Object.hasOwnProperty.call(m,"playerWidth"))
  w.uint32(32).int32(m.playerWidth)
  if(m.pageInsightIndexes!=null&&m.pageInsightIndexes.length){
  for(var i=0;i<m.pageInsightIndexes.length;++i)
  w.uint32(42).string(m.pageInsightIndexes[i])
  }
  return w
}
})