(function anonymous(types,util
) {
return function ProtoAdBreak$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.arrays||o.defaults){
  d.types=[]
  }
  if(o.defaults){
  d.maxAdPodDuration=0
  d.maxAdSlotDuration=180
  d.numberOfAdSlots=1
  }
  if(m.types&&m.types.length){
  d.types=[]
  for(var j=0;j<m.types.length;++j){
  d.types[j]=o.enums===String?types[0].values[m.types[j]]:m.types[j]
  }
  }
  if(m.maxAdPodDuration!=null&&m.hasOwnProperty("maxAdPodDuration")){
  d.maxAdPodDuration=m.maxAdPodDuration
  }
  if(m.maxAdSlotDuration!=null&&m.hasOwnProperty("maxAdSlotDuration")){
  d.maxAdSlotDuration=m.maxAdSlotDuration
  }
  if(m.numberOfAdSlots!=null&&m.hasOwnProperty("numberOfAdSlots")){
  d.numberOfAdSlots=m.numberOfAdSlots
  }
  return d
}
})