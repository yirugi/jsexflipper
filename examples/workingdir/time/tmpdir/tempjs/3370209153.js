(function anonymous(Writer,types,util
) {
return function Browser$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.browserVersion!=null&&Object.hasOwnProperty.call(m,"browserVersion"))
  w.uint32(10).string(m.browserVersion)
  if(m.browserType!=null&&Object.hasOwnProperty.call(m,"browserType"))
  w.uint32(18).string(m.browserType)
  if(m.osCode!=null&&Object.hasOwnProperty.call(m,"osCode"))
  w.uint32(26).string(m.osCode)
  if(m.device!=null&&Object.hasOwnProperty.call(m,"device"))
  w.uint32(32).int32(m.device)
  return w
}
})