(function anonymous(types,util
) {
return function GeoLocation$toObject(m,o){
  if(!o)
  o={}
  var d={}
  if(o.defaults){
  d.countryGeoId=0
  d.cityId=0
  d.subdivisionId=0
  d.dmaId=0
  d.ip=""
  d.lat=0
  d.lon=0
  d.zipcode=""
  }
  if(m.countryGeoId!=null&&m.hasOwnProperty("countryGeoId")){
  d.countryGeoId=m.countryGeoId
  }
  if(m.cityId!=null&&m.hasOwnProperty("cityId")){
  d.cityId=m.cityId
  }
  if(m.subdivisionId!=null&&m.hasOwnProperty("subdivisionId")){
  d.subdivisionId=m.subdivisionId
  }
  if(m.dmaId!=null&&m.hasOwnProperty("dmaId")){
  d.dmaId=m.dmaId
  }
  if(m.ip!=null&&m.hasOwnProperty("ip")){
  d.ip=m.ip
  }
  if(m.lat!=null&&m.hasOwnProperty("lat")){
  d.lat=o.json&&!isFinite(m.lat)?String(m.lat):m.lat
  }
  if(m.lon!=null&&m.hasOwnProperty("lon")){
  d.lon=o.json&&!isFinite(m.lon)?String(m.lon):m.lon
  }
  if(m.zipcode!=null&&m.hasOwnProperty("zipcode")){
  d.zipcode=m.zipcode
  }
  return d
}
})