(function anonymous(Reader,types,util
) {
return function GeoLocation$decode(r,l){
  if(!(r instanceof Reader))
  r=Reader.create(r)
  var c=l===undefined?r.len:r.pos+l,m=new this.ctor
  while(r.pos<c){
  var t=r.uint32()
  switch(t>>>3){
  case 1:
  m.countryGeoId=r.int32()
  break
  case 2:
  m.cityId=r.int32()
  break
  case 3:
  m.subdivisionId=r.int32()
  break
  case 4:
  m.dmaId=r.int32()
  break
  case 5:
  m.ip=r.string()
  break
  case 6:
  m.lat=r.double()
  break
  case 7:
  m.lon=r.double()
  break
  case 8:
  m.zipcode=r.string()
  break
  default:
  r.skipType(t&7)
  break
  }
  }
  return m
}
})