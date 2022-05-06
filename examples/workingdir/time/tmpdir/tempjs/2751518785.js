(function anonymous(types,util
) {
return function ProtoTrackingRequest$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.trackingRequestMeta!=null){
  if(typeof d.trackingRequestMeta!=="object")
  throw TypeError(".ProtoTrackingRequest.trackingRequestMeta: object expected")
  m.trackingRequestMeta=types[0].fromObject(d.trackingRequestMeta)
  }
  if(d.hasAdBlocker!=null){
  m.hasAdBlocker=Boolean(d.hasAdBlocker)
  }
  if(d.bundleName!=null){
  m.bundleName=String(d.bundleName)
  }
  if(d.playerWidth!=null){
  m.playerWidth=d.playerWidth|0
  }
  if(d.playerHeight!=null){
  m.playerHeight=d.playerHeight|0
  }
  if(d.pageInsightIndexes){
  if(!Array.isArray(d.pageInsightIndexes))
  throw TypeError(".ProtoTrackingRequest.pageInsightIndexes: array expected")
  m.pageInsightIndexes=[]
  for(var i=0;i<d.pageInsightIndexes.length;++i){
  m.pageInsightIndexes[i]=String(d.pageInsightIndexes[i])
  }
  }
  if(d.dynamicElkFieldsValues){
  if(typeof d.dynamicElkFieldsValues!=="object")
  throw TypeError(".ProtoTrackingRequest.dynamicElkFieldsValues: object expected")
  m.dynamicElkFieldsValues={}
  for(var ks=Object.keys(d.dynamicElkFieldsValues),i=0;i<ks.length;++i){
  m.dynamicElkFieldsValues[ks[i]]=String(d.dynamicElkFieldsValues[ks[i]])
  }
  }
  return m
}
})