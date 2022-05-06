(function anonymous(types,util
) {
return function Browser$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.browserVersion!=null){
  m.browserVersion=String(d.browserVersion)
  }
  if(d.browserType!=null){
  m.browserType=String(d.browserType)
  }
  if(d.osCode!=null){
  m.osCode=String(d.osCode)
  }
  switch(d.device){
  case"Desktop":
  case 0:
  m.device=0
  break
  case"Smartphone":
  case 1:
  m.device=1
  break
  case"Tablet":
  case 2:
  m.device=2
  break
  case"GameConsole":
  case 3:
  m.device=3
  break
  case"SmartTV":
  case 4:
  m.device=4
  break
  case"WearableComputer":
  case 5:
  m.device=5
  break
  case"PDA":
  case 6:
  m.device=6
  break
  case"Unrecognized":
  case 7:
  m.device=7
  break
  }
  return m
}
})