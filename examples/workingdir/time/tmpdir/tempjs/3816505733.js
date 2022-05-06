(function anonymous(
) {
return function ProtoRtbRequest(p){
  this.lineItems={}
  this.customMacros={}
  if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)
  this[ks[i]]=p[ks[i]]
}
})