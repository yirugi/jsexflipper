(function anonymous(types,util
) {
return function ProtoTrackingResponse$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.platformCappedLineItemIdList=[]
  }
  if(o.defaults){
  d.errorMessage=""
  d.impressionRevenue=0
  d.adServerLineItemName=""
  }
  if(m.errorMessage!=null&&m.hasOwnProperty("errorMessage")){
  d.errorMessage=m.errorMessage
  }
  if(m.platformCappedLineItemIdList&&m.platformCappedLineItemIdList.length){
  d.platformCappedLineItemIdList=[]
  for(var j=0;j<m.platformCappedLineItemIdList.length;++j){
  d.platformCappedLineItemIdList[j]=m.platformCappedLineItemIdList[j]
  }
  }
  if(m.impressionRevenue!=null&&m.hasOwnProperty("impressionRevenue")){
  d.impressionRevenue=o.json&&!isFinite(m.impressionRevenue)?String(m.impressionRevenue):m.impressionRevenue
  }
  if(m.adServerLineItemName!=null&&m.hasOwnProperty("adServerLineItemName")){
  d.adServerLineItemName=m.adServerLineItemName
  }
  if(m.viewability!=null&&m.hasOwnProperty("viewability")){
  d.viewability=m.viewability
  if(o.oneofs)
  d.oa="viewability"
  }
  return d
}
})