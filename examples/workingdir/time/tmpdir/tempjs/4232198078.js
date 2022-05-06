(function anonymous(
) {
return function ProtoPlayspaceResponse(p){
  this.players=[]
  this.lineItems=[]
  this.cookieSyncUrls={}
  if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)
  this[ks[i]]=p[ks[i]]
}
})