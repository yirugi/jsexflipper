(function anonymous(Reader,types,util
) {
return function ProtoPlayspaceResponse$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor,k,value
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.errorMessage=r.string()
  break
  case 10:
  if(!(m.players&&m.players.length))
  m.players=[]
  m.players.push(types[1].decode(r,r.uint32()))
  break
  case 11:
  m.browser=types[2].decode(r,r.uint32())
  break
  case 12:
  m.geoLocation=types[3].decode(r,r.uint32())
  break
  case 13:
  if(!(m.lineItems&&m.lineItems.length))
  m.lineItems=[]
  m.lineItems.push(types[4].decode(r,r.uint32()))
  break
  case 14:
  if(m.cookieSyncUrls===util.emptyObject)
  m.cookieSyncUrls={}
  var c2 = r.uint32()+r.pos
  k=0
  value=""
  while(r.pos<c2){
  var tag2=r.uint32()
  switch(tag2>>>3){
  case 1: k=r.int32(); break
  case 2:
  value=r.string()
  break
  default:
  r.skipType(tag2&7)
  break
  }
  }
  m.cookieSyncUrls[k]=value
  break
  case 15:
  m.explorationMode=r.bool()
  break
  case 17:
  m.supplyChain=types[7].decode(r,r.uint32())
  break
  case 18:
  m.secondLevelDomain=r.string()
  break
  case 20:
  m.userInformation=types[9].decode(r,r.uint32())
  break
  case 21:
  m.serverAb0=r.int32()
  break
  case 22:
  m.serverAb1=r.int32()
  break
  case 23:
  m.isSeoTraffic=r.bool()
  break
  case 24:
  m.apiHostUrl=r.string()
  break
  case 26:
  m.publisherNetworkCode=r.string()
  break
  case 27:
  m.iOSAppID=r.string()
  break
  case 28:
  m.hashedPageUrl=r.string()
  break
  case 29:
  m.bundleAbId=r.string()
  break
  case 30:
  m.bundlePart=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})