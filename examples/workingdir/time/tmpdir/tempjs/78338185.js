(function anonymous(types,util
) {
return function Browser$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.browserVersion=""
  d.browserType=""
  d.osCode=""
  d.device=o.enums===String?"Desktop":0
  }
  if(m.browserVersion!=null&&m.hasOwnProperty("browserVersion")){
  d.browserVersion=m.browserVersion
  }
  if(m.browserType!=null&&m.hasOwnProperty("browserType")){
  d.browserType=m.browserType
  }
  if(m.osCode!=null&&m.hasOwnProperty("osCode")){
  d.osCode=m.osCode
  }
  if(m.device!=null&&m.hasOwnProperty("device")){
  d.device=o.enums===String?types[3].values[m.device]:m.device
  }
  return d
}
})