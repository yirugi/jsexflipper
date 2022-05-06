(function anonymous(types,util
) {
return function ProtoUserSyncRequest$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.userId!=null){
  m.userId=String(d.userId)
  }
  if(d.demandPartner!=null){
  m.demandPartner=d.demandPartner|0
  }
  if(d.demandPartnerUserId!=null){
  m.demandPartnerUserId=String(d.demandPartnerUserId)
  }
  return m
}
})