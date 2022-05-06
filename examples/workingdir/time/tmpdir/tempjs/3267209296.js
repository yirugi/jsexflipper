(function anonymous(
) {
return function ProtoPlayspace(p){
  this.sharingDestinations=[]
  this.floatingDeviceMode=[]
  this.lineItems=[]
  this.adBreaks=[]
  if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)
  this[ks[i]]=p[ks[i]]
}
})