let keywords="College Sports";keywords=keywords.split(',');function findDataLayer(){if(typeof dataLayer!=="undefined"){for(let[index,data]of dataLayer.entries()){if(data["Taxonomy1"]){if(keywords.indexOf(data["Taxonomy1"])!=-1){return true}else{return false}}if(index===(dataLayer.length-1)){return false}}}else{return false}}findDataLayer();