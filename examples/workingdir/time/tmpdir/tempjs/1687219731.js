(function anonymous(Reader,types,util
) {
return function ProtoPlayspace$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.playerId=r.string()
  break
  case 2:
  m.playbackMode=r.int32()
  break
  case 3:
  m.soundMode=r.int32()
  break
  case 4:
  m.endOfCycleMode=r.int32()
  break
  case 5:
  m.containerSelector=r.string()
  break
  case 6:
  m.position=r.int32()
  break
  case 7:
  m.insertPosition=r.int32()
  break
  case 8:
  m.forceInsertPath=r.bool()
  break
  case 9:
  m.renderInFrame=r.bool()
  break
  case 10:
  m.scrollHijackingProtection=r.bool()
  break
  case 11:
  m.preRollBreak=r.int32()
  break
  case 12:
  m.postRollBreak=r.int32()
  break
  case 13:
  m.midRollNumber=r.int32()
  break
  case 14:
  m.slidesBetweenAds=r.int32()
  break
  case 15:
  m.minSlidesBeforeFirstAd=r.int32()
  break
  case 16:
  m.adViewabilityPolicy=r.int32()
  break
  case 18:
  m.casting=r.bool()
  break
  case 19:
  if(!(m.sharingDestinations&&m.sharingDestinations.length))
  m.sharingDestinations=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.sharingDestinations.push(r.int32())
  }else
  m.sharingDestinations.push(r.int32())
  break
  case 20:
  m.expandButton=r.bool()
  break
  case 21:
  m.closeButtonMode=r.int32()
  break
  case 22:
  m.floatingMode=r.int32()
  break
  case 23:
  if(!(m.floatingDeviceMode&&m.floatingDeviceMode.length))
  m.floatingDeviceMode=[]
  if((t&7)===2){
  var c2=r.uint32()+r.pos
  while(r.pos<c2)
  m.floatingDeviceMode.push(r.int32())
  }else
  m.floatingDeviceMode.push(r.int32())
  break
  case 24:
  m.floatingCloseButtonMode=r.int32()
  break
  case 25:
  m.floatingFixedPosition=r.int32()
  break
  case 26:
  m.floatingPageElement=r.string()
  break
  case 27:
  m.floatingUseElementWidth=r.bool()
  break
  case 28:
  m.floatingScrollPosition=r.int32()
  break
  case 29:
  m.floatingGutterX=r.int32()
  break
  case 30:
  m.floatingGutterY=r.int32()
  break
  case 31:
  m.floatingWidth=r.int32()
  break
  case 35:
  m.html=r.string()
  break
  case 37:
  if(!(m.lineItems&&m.lineItems.length))
  m.lineItems=[]
  m.lineItems.push(types[31].decode(r,r.uint32()))
  break
  case 38:
  m.adPlaybackMode=r.int32()
  break
  case 39:
  m.css=r.string()
  break
  case 40:
  m.sessionId=r.string()
  break
  case 41:
  m.orientation=r.int32()
  break
  case 42:
  m.orientationBreakpoint=r.int32()
  break
  case 43:
  m.activeVersion=r.string()
  break
  case 44:
  m.storyId=r.string()
  break
  case 50:
  m.floatingAppendLocation=r.int32()
  break
  case 51:
  m.floatingYAxisPadding=r.int32()
  break
  case 57:
  m.contentTitleTextColor=r.string()
  break
  case 58:
  m.useAccentColorForProgressBar=r.bool()
  break
  case 59:
  m.primaryColorList=types[43].decode(r,r.uint32())
  break
  case 60:
  m.secondaryColorList=types[44].decode(r,r.uint32())
  break
  case 61:
  m.accentColorList=types[45].decode(r,r.uint32())
  break
  case 62:
  m.customJsCode=r.string()
  break
  case 63:
  m.initializationSettingsJson=r.string()
  break
  case 64:
  m.publisherName=r.string()
  break
  case 66:
  m.skipAdAfter=r.int32()
  break
  case 67:
  if(!(m.adBreaks&&m.adBreaks.length))
  m.adBreaks=[]
  m.adBreaks.push(types[50].decode(r,r.uint32()))
  break
  case 68:
  m.amazonTamSlotId=r.string()
  break
  case 69:
  m.limitClientSideApiUse=r.bool()
  break
  case 70:
  m.abTestId=r.string()
  break
  case 71:
  m.skipMin=r.int32()
  break
  case 72:
  m.skippability=r.int32()
  break
  case 73:
  m.logoResource=r.string()
  break
  case 74:
  m.activeVersionHasInsights=r.bool()
  break
  case 76:
  m.bandwidthLoggingState=r.int32()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})