(function anonymous(
) {
return function ProtoBidTrackingsRequest(p){
  this.prebids=[]
  this.bids=[]
  this.postBids=[]
  if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)
  this[ks[i]]=p[ks[i]]
}
})