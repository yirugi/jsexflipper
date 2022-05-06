(function anonymous(types,util
) {
return function GeoLocation$fromObject(d){
  if(d instanceof this.ctor)
  return d
  var m=new this.ctor
  if(d.countryGeoId!=null){
  m.countryGeoId=d.countryGeoId|0
  }
  if(d.cityId!=null){
  m.cityId=d.cityId|0
  }
  if(d.subdivisionId!=null){
  m.subdivisionId=d.subdivisionId|0
  }
  if(d.dmaId!=null){
  m.dmaId=d.dmaId|0
  }
  if(d.ip!=null){
  m.ip=String(d.ip)
  }
  if(d.lat!=null){
  m.lat=Number(d.lat)
  }
  if(d.lon!=null){
  m.lon=Number(d.lon)
  }
  if(d.zipcode!=null){
  m.zipcode=String(d.zipcode)
  }
  return m
}
})