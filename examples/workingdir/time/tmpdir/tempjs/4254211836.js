(function anonymous(types,util
) {
return function ProtoUserInformation$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.userId=""
  d.lookupId=""
  d.lookupResponseCode=0
  d.callFraudSensor=false
  d.publisherAdsTxt=""
  }
  if(m.userId!=null&&m.hasOwnProperty("userId")){
  d.userId=m.userId
  }
  if(m.lookupId!=null&&m.hasOwnProperty("lookupId")){
  d.lookupId=m.lookupId
  }
  if(m.lookupResponseCode!=null&&m.hasOwnProperty("lookupResponseCode")){
  d.lookupResponseCode=m.lookupResponseCode
  }
  if(m.callFraudSensor!=null&&m.hasOwnProperty("callFraudSensor")){
  d.callFraudSensor=m.callFraudSensor
  }
  if(m.publisherAdsTxt!=null&&m.hasOwnProperty("publisherAdsTxt")){
  d.publisherAdsTxt=m.publisherAdsTxt
  }
  return d
}
})