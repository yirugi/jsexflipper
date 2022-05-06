(function anonymous(Writer,types,util
) {
return function ProtoUserSyncRequest$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.userId!=null&&Object.hasOwnProperty.call(m,"userId"))
  w.uint32(10).string(m.userId)
  if(m.demandPartner!=null&&Object.hasOwnProperty.call(m,"demandPartner"))
  w.uint32(16).int32(m.demandPartner)
  if(m.demandPartnerUserId!=null&&Object.hasOwnProperty.call(m,"demandPartnerUserId"))
  w.uint32(26).string(m.demandPartnerUserId)
  return w
}
})