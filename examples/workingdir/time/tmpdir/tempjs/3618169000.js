(function anonymous(types,util
) {
return function ProtoAdOpportunityRequest$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.sessionId!=null){
  m.sessionId=String(d.sessionId)
  }
  if(d.trackingRequestMeta!=null){
  if(typeof d.trackingRequestMeta!=="object")
  throw TypeError(".ProtoAdOpportunityRequest.trackingRequestMeta: object expected")
  m.trackingRequestMeta=types[1].fromObject(d.trackingRequestMeta)
  }
  switch(d.adBreak){
  case"None":
  case 0:
  m.adBreak=0
  break
  case"PreRoll":
  case 1:
  m.adBreak=1
  break
  case"MidRoll":
  case 2:
  m.adBreak=2
  break
  case"PostRoll":
  case 3:
  m.adBreak=3
  break
  }
  if(d.playerWidth!=null){
  m.playerWidth=d.playerWidth|0
  }
  if(d.pageInsightIndexes){
  if(!Array.isArray(d.pageInsightIndexes))
  throw TypeError(".ProtoAdOpportunityRequest.pageInsightIndexes: array expected")
  m.pageInsightIndexes=[]
  for(var i=0;i<d.pageInsightIndexes.length;++i){
  m.pageInsightIndexes[i]=String(d.pageInsightIndexes[i])
  }
  }
  return m
}
})