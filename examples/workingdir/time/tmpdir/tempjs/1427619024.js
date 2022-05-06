(function anonymous(
) {
return function ProtoPlayspaceRequest(p){
  this.tokens=[]
  this.forceLineItemIds=[]
  this.queryJsTargeting={}
  this.reloadedPlayers={}
  if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)
  this[ks[i]]=p[ks[i]]
}
})