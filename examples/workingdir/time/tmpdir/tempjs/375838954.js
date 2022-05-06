(function anonymous(Writer,types,util
) {
return function GeoLocation$encode(m,w){
  if(!w)
  w=Writer.create()
  if(m.countryGeoId!=null&&Object.hasOwnProperty.call(m,"countryGeoId"))
  w.uint32(8).int32(m.countryGeoId)
  if(m.cityId!=null&&Object.hasOwnProperty.call(m,"cityId"))
  w.uint32(16).int32(m.cityId)
  if(m.subdivisionId!=null&&Object.hasOwnProperty.call(m,"subdivisionId"))
  w.uint32(24).int32(m.subdivisionId)
  if(m.dmaId!=null&&Object.hasOwnProperty.call(m,"dmaId"))
  w.uint32(32).int32(m.dmaId)
  if(m.ip!=null&&Object.hasOwnProperty.call(m,"ip"))
  w.uint32(42).string(m.ip)
  if(m.lat!=null&&Object.hasOwnProperty.call(m,"lat"))
  w.uint32(49).double(m.lat)
  if(m.lon!=null&&Object.hasOwnProperty.call(m,"lon"))
  w.uint32(57).double(m.lon)
  if(m.zipcode!=null&&Object.hasOwnProperty.call(m,"zipcode"))
  w.uint32(66).string(m.zipcode)
  return w
}
})