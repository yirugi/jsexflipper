(function anonymous(types,util
) {
return function ProtoRtbResponse$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.lineItemResponses=[]
  }
  if(o.defaults){
  d.liveRampEnvelopeStatus=o.enums===String?"Ok":0
  }
  if(m.lineItemResponses&&m.lineItemResponses.length){
  d.lineItemResponses=[]
  for(var j=0;j<m.lineItemResponses.length;++j){
  d.lineItemResponses[j]=types[0].toObject(m.lineItemResponses[j],o)
  }
  }
  if(m.liveRampEnvelopeStatus!=null&&m.hasOwnProperty("liveRampEnvelopeStatus")){
  d.liveRampEnvelopeStatus=o.enums===String?types[1].values[m.liveRampEnvelopeStatus]:m.liveRampEnvelopeStatus
  }
  return d
}
})