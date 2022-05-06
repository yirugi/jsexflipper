(function anonymous(Writer,types,util
) {
return function ProtoPlayerStartRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.trackingRequestMeta!=null&&Object.hasOwnProperty.call(m,"trackingRequestMeta"))
  types[0].encode(m.trackingRequestMeta,w.uint32(10).fork()).ldelim()
  if(m.pageInsightIndexes!=null&&m.pageInsightIndexes.length){
  for(var i=0;i<m.pageInsightIndexes.length;++i)
  w.uint32(18).string(m.pageInsightIndexes[i])
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