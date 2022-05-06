(function anonymous(types,util
) {
return function ProtoRtbLineItem$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.bids=[]
  d.noBids=[]
  }
  if(o.defaults){
  d.id=""
  d.cachedFloorPriceOld=0
  }
  if(m.id!=null&&m.hasOwnProperty("id")){
  d.id=m.id
  }
  if(m.cachedFloorPriceOld!=null&&m.hasOwnProperty("cachedFloorPriceOld")){
  d.cachedFloorPriceOld=o.json&&!isFinite(m.cachedFloorPriceOld)?String(m.cachedFloorPriceOld):m.cachedFloorPriceOld
  }
  if(m.bids&&m.bids.length){
  d.bids=[]
  for(var j=0;j<m.bids.length;++j){
  d.bids[j]=types[4].toObject(m.bids[j],o)
  }
  }
  if(m.noBids&&m.noBids.length){
  d.noBids=[]
  for(var j=0;j<m.noBids.length;++j){
  d.noBids[j]=types[5].toObject(m.noBids[j],o)
  }
  }
  if(m.predictedFloorPrice!=null&&m.hasOwnProperty("predictedFloorPrice")){
  d.predictedFloorPrice=o.json&&!isFinite(m.predictedFloorPrice)?String(m.predictedFloorPrice):m.predictedFloorPrice
  if(o.oneofs)
  d.ta="predictedFloorPrice"
  }
  if(m.cachedFloorPrice!=null&&m.hasOwnProperty("cachedFloorPrice")){
  d.cachedFloorPrice=types[1].toObject(m.cachedFloorPrice,o)
  if(o.oneofs)
  d.sa="cachedFloorPrice"
  }
  return d
}
})