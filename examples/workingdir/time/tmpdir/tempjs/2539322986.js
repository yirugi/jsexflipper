(function anonymous(
) {
return function ProtoLineItem(p){
  this.trackers=[]
  this.renditions=[]
  this.floorPrices=[]
  this.advertiserContextualTargeting=[]
  this.publisherContextualTargeting=[]
  this.floorPriceData=[]
  if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)
  this[ks[i]]=p[ks[i]]
}
})