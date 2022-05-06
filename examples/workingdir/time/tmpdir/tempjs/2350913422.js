(function anonymous(types,util
) {
return function ProtoLineItem$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.trackers=[]
  d.renditions=[]
  d.floorPrices=[]
  d.advertiserContextualTargeting=[]
  d.publisherContextualTargeting=[]
  d.floorPriceData=[]
  }
  if(o.defaults){
  d.publisherLineItemId=""
  d.advertiserLineItemId=""
  d.adTag=""
  d.creativeType=o.enums===String?"ThirdParty":0
  d.sound=false
  d.viewability=false
  d.impressionTimeSpent=0
  d.vendorId=""
  d.duration=0
  d.mediaCreativeId=""
  d.ignoreFilledRequests=false
  d.requestCap=3
  d.impressionCap=0
  d.successRate=0
  d.lineItemPriority=o.enums===String?"House":0
  d.headerBidderBids=""
  d.headerBidderTimeout=0
  d.mediaCreativeClickUrl=""
  d.resetRequestsCapTime=60
  d.resetImpressionsCapTime=60
  d.resetCapType=o.enums===String?"TimeCapping":0
  d.creativeHlsFileName=""
  d.timeBetweenRequests=0
  d.skipMode=o.enums===String?"IfLongerThan31Sec":0
  d.mediaIdTargeting=null
  d.mediaKeywordsTargeting=null
  d.mediaLanguageTargeting=null
  d.adType=o.enums===String?"Video":0
  d.overlayTime=30
  d.floorPrice=0
  d.adBreakSettings=null
  d.bidRate=0
  d.pauseAdOutOfView=o.enums===String?"Default":0
  d.moatTrackingEnabled=false
  d.cnxCreativeId=""
  d.blockedDomainsRevisionNumber=0
  d.playerSizeTargetings=null
  d.amazonDealId=""
  d.playerOrientationTargeting=o.enums===String?"Both":0
  d.skipMin=6
  d.skippability=o.enums===String?"AllowPublisherToDetermineSkippability":0
  d.forceCallingInEveryAO=false
  d.networkExpiryTimeSeconds=21600
  d.nonlinearLineItemSettings=null
  d.prebidJsBidParamsJSONString=""
  d.playerSize=""
  }
  if(m.publisherLineItemId!=null&&m.hasOwnProperty("publisherLineItemId")){
  d.publisherLineItemId=m.publisherLineItemId
  }
  if(m.advertiserLineItemId!=null&&m.hasOwnProperty("advertiserLineItemId")){
  d.advertiserLineItemId=m.advertiserLineItemId
  }
  if(m.adTag!=null&&m.hasOwnProperty("adTag")){
  d.adTag=m.adTag
  }
  if(m.creativeType!=null&&m.hasOwnProperty("creativeType")){
  d.creativeType=o.enums===String?types[5].values[m.creativeType]:m.creativeType
  }
  if(m.sound!=null&&m.hasOwnProperty("sound")){
  d.sound=m.sound
  }
  if(m.viewability!=null&&m.hasOwnProperty("viewability")){
  d.viewability=m.viewability
  }
  if(m.impressionTimeSpent!=null&&m.hasOwnProperty("impressionTimeSpent")){
  d.impressionTimeSpent=m.impressionTimeSpent
  }
  if(m.vendorId!=null&&m.hasOwnProperty("vendorId")){
  d.vendorId=m.vendorId
  }
  if(m.trackers&&m.trackers.length){
  d.trackers=[]
  for(var j=0;j<m.trackers.length;++j){
  d.trackers[j]=types[10].toObject(m.trackers[j],o)
  }
  }
  if(m.duration!=null&&m.hasOwnProperty("duration")){
  d.duration=m.duration
  }
  if(m.renditions&&m.renditions.length){
  d.renditions=[]
  for(var j=0;j<m.renditions.length;++j){
  d.renditions[j]=types[12].toObject(m.renditions[j],o)
  }
  }
  if(m.mediaCreativeId!=null&&m.hasOwnProperty("mediaCreativeId")){
  d.mediaCreativeId=m.mediaCreativeId
  }
  if(m.ignoreFilledRequests!=null&&m.hasOwnProperty("ignoreFilledRequests")){
  d.ignoreFilledRequests=m.ignoreFilledRequests
  }
  if(m.requestCap!=null&&m.hasOwnProperty("requestCap")){
  d.requestCap=m.requestCap
  }
  if(m.impressionCap!=null&&m.hasOwnProperty("impressionCap")){
  d.impressionCap=m.impressionCap
  }
  if(m.successRate!=null&&m.hasOwnProperty("successRate")){
  d.successRate=o.json&&!isFinite(m.successRate)?String(m.successRate):m.successRate
  }
  if(m.lineItemPriority!=null&&m.hasOwnProperty("lineItemPriority")){
  d.lineItemPriority=o.enums===String?types[18].values[m.lineItemPriority]:m.lineItemPriority
  }
  if(m.headerBidderBids!=null&&m.hasOwnProperty("headerBidderBids")){
  d.headerBidderBids=m.headerBidderBids
  }
  if(m.headerBidderTimeout!=null&&m.hasOwnProperty("headerBidderTimeout")){
  d.headerBidderTimeout=m.headerBidderTimeout
  }
  if(m.mediaCreativeClickUrl!=null&&m.hasOwnProperty("mediaCreativeClickUrl")){
  d.mediaCreativeClickUrl=m.mediaCreativeClickUrl
  }
  if(m.resetRequestsCapTime!=null&&m.hasOwnProperty("resetRequestsCapTime")){
  d.resetRequestsCapTime=m.resetRequestsCapTime
  }
  if(m.resetImpressionsCapTime!=null&&m.hasOwnProperty("resetImpressionsCapTime")){
  d.resetImpressionsCapTime=m.resetImpressionsCapTime
  }
  if(m.resetCapType!=null&&m.hasOwnProperty("resetCapType")){
  d.resetCapType=o.enums===String?types[24].values[m.resetCapType]:m.resetCapType
  }
  if(m.creativeHlsFileName!=null&&m.hasOwnProperty("creativeHlsFileName")){
  d.creativeHlsFileName=m.creativeHlsFileName
  }
  if(m.timeBetweenRequests!=null&&m.hasOwnProperty("timeBetweenRequests")){
  d.timeBetweenRequests=m.timeBetweenRequests
  }
  if(m.skipMode!=null&&m.hasOwnProperty("skipMode")){
  d.skipMode=o.enums===String?types[27].values[m.skipMode]:m.skipMode
  }
  if(m.mediaIdTargeting!=null&&m.hasOwnProperty("mediaIdTargeting")){
  d.mediaIdTargeting=types[28].toObject(m.mediaIdTargeting,o)
  }
  if(m.mediaKeywordsTargeting!=null&&m.hasOwnProperty("mediaKeywordsTargeting")){
  d.mediaKeywordsTargeting=types[29].toObject(m.mediaKeywordsTargeting,o)
  }
  if(m.mediaLanguageTargeting!=null&&m.hasOwnProperty("mediaLanguageTargeting")){
  d.mediaLanguageTargeting=types[30].toObject(m.mediaLanguageTargeting,o)
  }
  if(m.adType!=null&&m.hasOwnProperty("adType")){
  d.adType=o.enums===String?types[31].values[m.adType]:m.adType
  }
  if(m.overlayTime!=null&&m.hasOwnProperty("overlayTime")){
  d.overlayTime=m.overlayTime
  }
  if(m.floorPrice!=null&&m.hasOwnProperty("floorPrice")){
  d.floorPrice=o.json&&!isFinite(m.floorPrice)?String(m.floorPrice):m.floorPrice
  }
  if(m.adBreakSettings!=null&&m.hasOwnProperty("adBreakSettings")){
  d.adBreakSettings=types[34].toObject(m.adBreakSettings,o)
  }
  if(m.floorPrices&&m.floorPrices.length){
  d.floorPrices=[]
  for(var j=0;j<m.floorPrices.length;++j){
  d.floorPrices[j]=o.json&&!isFinite(m.floorPrices[j])?String(m.floorPrices[j]):m.floorPrices[j]
  }
  }
  if(m.bidRate!=null&&m.hasOwnProperty("bidRate")){
  d.bidRate=o.json&&!isFinite(m.bidRate)?String(m.bidRate):m.bidRate
  }
  if(m.pauseAdOutOfView!=null&&m.hasOwnProperty("pauseAdOutOfView")){
  d.pauseAdOutOfView=o.enums===String?types[37].values[m.pauseAdOutOfView]:m.pauseAdOutOfView
  }
  if(m.moatTrackingEnabled!=null&&m.hasOwnProperty("moatTrackingEnabled")){
  d.moatTrackingEnabled=m.moatTrackingEnabled
  }
  if(m.cnxCreativeId!=null&&m.hasOwnProperty("cnxCreativeId")){
  d.cnxCreativeId=m.cnxCreativeId
  }
  if(m.blockedDomainsRevisionNumber!=null&&m.hasOwnProperty("blockedDomainsRevisionNumber")){
  d.blockedDomainsRevisionNumber=m.blockedDomainsRevisionNumber
  }
  if(m.advertiserContextualTargeting&&m.advertiserContextualTargeting.length){
  d.advertiserContextualTargeting=[]
  for(var j=0;j<m.advertiserContextualTargeting.length;++j){
  d.advertiserContextualTargeting[j]=types[41].toObject(m.advertiserContextualTargeting[j],o)
  }
  }
  if(m.publisherContextualTargeting&&m.publisherContextualTargeting.length){
  d.publisherContextualTargeting=[]
  for(var j=0;j<m.publisherContextualTargeting.length;++j){
  d.publisherContextualTargeting[j]=types[42].toObject(m.publisherContextualTargeting[j],o)
  }
  }
  if(m.playerSizeTargetings!=null&&m.hasOwnProperty("playerSizeTargetings")){
  d.playerSizeTargetings=types[43].toObject(m.playerSizeTargetings,o)
  }
  if(m.amazonDealId!=null&&m.hasOwnProperty("amazonDealId")){
  d.amazonDealId=m.amazonDealId
  }
  if(m.predictedFloorPrice!=null&&m.hasOwnProperty("predictedFloorPrice")){
  d.predictedFloorPrice=o.json&&!isFinite(m.predictedFloorPrice)?String(m.predictedFloorPrice):m.predictedFloorPrice
  if(o.oneofs)
  d.ta="predictedFloorPrice"
  }
  if(m.playerOrientationTargeting!=null&&m.hasOwnProperty("playerOrientationTargeting")){
  d.playerOrientationTargeting=o.enums===String?types[45].values[m.playerOrientationTargeting]:m.playerOrientationTargeting
  }
  if(m.skipMin!=null&&m.hasOwnProperty("skipMin")){
  d.skipMin=m.skipMin
  }
  if(m.skippability!=null&&m.hasOwnProperty("skippability")){
  d.skippability=o.enums===String?types[47].values[m.skippability]:m.skippability
  }
  if(m.forceCallingInEveryAO!=null&&m.hasOwnProperty("forceCallingInEveryAO")){
  d.forceCallingInEveryAO=m.forceCallingInEveryAO
  }
  if(m.networkExpiryTimeSeconds!=null&&m.hasOwnProperty("networkExpiryTimeSeconds")){
  d.networkExpiryTimeSeconds=m.networkExpiryTimeSeconds
  }
  if(m.nonlinearLineItemSettings!=null&&m.hasOwnProperty("nonlinearLineItemSettings")){
  d.nonlinearLineItemSettings=types[50].toObject(m.nonlinearLineItemSettings,o)
  }
  if(m.floorPriceData&&m.floorPriceData.length){
  d.floorPriceData=[]
  for(var j=0;j<m.floorPriceData.length;++j){
  d.floorPriceData[j]=types[51].toObject(m.floorPriceData[j],o)
  }
  }
  if(m.floorPricesNew!=null&&m.hasOwnProperty("floorPricesNew")){
  d.floorPricesNew=types[1].toObject(m.floorPricesNew,o)
  if(o.oneofs)
  d.ia="floorPricesNew"
  }
  if(m.prebidJsBidParamsJSONString!=null&&m.hasOwnProperty("prebidJsBidParamsJSONString")){
  d.prebidJsBidParamsJSONString=m.prebidJsBidParamsJSONString
  }
  if(m.playerSize!=null&&m.hasOwnProperty("playerSize")){
  d.playerSize=m.playerSize
  }
  return d
}
})