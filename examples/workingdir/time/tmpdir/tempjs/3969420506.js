(function anonymous(Writer,types,util
) {
return function ProtoTrackingRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.trackingRequestMeta!=null&&Object.hasOwnProperty.call(m,"trackingRequestMeta"))
  types[0].encode(m.trackingRequestMeta,w.uint32(10).fork()).ldelim()
  if(m.hasAdBlocker!=null&&Object.hasOwnProperty.call(m,"hasAdBlocker"))
  w.uint32(32).bool(m.hasAdBlocker)
  if(m.bundleName!=null&&Object.hasOwnProperty.call(m,"bundleName"))
  w.uint32(42).string(m.bundleName)
  if(m.playerWidth!=null&&Object.hasOwnProperty.call(m,"playerWidth"))
  w.uint32(48).int32(m.playerWidth)
  if(m.playerHeight!=null&&Object.hasOwnProperty.call(m,"playerHeight"))
  w.uint32(56).int32(m.playerHeight)
  if(m.pageInsightIndexes!=null&&m.pageInsightIndexes.length){
  for(var i=0;i<m.pageInsightIndexes.length;++i)
  w.uint32(66).string(m.pageInsightIndexes[i])
  }
  if(m.dynamicElkFieldsValues!=null&&Object.hasOwnProperty.call(m,"dynamicElkFieldsValues")){
  for(var ks=Object.keys(m.dynamicElkFieldsValues),i=0;i<ks.length;++i){
  w.uint32(802).fork().uint32(10).string(ks[i])
  .uint32(18).string(m.dynamicElkFieldsValues[ks[i]]).ldelim()
  }
  }
  return w
}
})