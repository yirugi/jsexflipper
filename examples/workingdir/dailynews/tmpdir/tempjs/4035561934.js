(function(window){'use strict';var cache=[];function inArray(elem,array){var i,length;for(i=0,length=array.length;i<length;i+=1){if(array[i]===elem){return i}}return -1}function each(object,callback){var name;for(name in object){if(object.hasOwnProperty(name)&&callback.call(object[name],name,object[name])===false){break}}}function throttle(func,wait){var context,args,result;var timeout=null;var previous=0;var later=function(){previous=new Date;timeout=null;result=func.apply(context,args)};return function(){var now=new Date;if(!previous){previous=now}var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args)}else if(!timeout){timeout=setTimeout(later,remaining)}return result}}function calculatePercentages(docHeight){return{'15':parseInt(docHeight*0.15,10),'25':parseInt(docHeight*0.25,10),'50':parseInt(docHeight*0.50,10),'75':parseInt(docHeight*0.75,10),'100':docHeight-5}}function checkPercentages(percentages,scrollDistance){each(percentages,function(key,val){if(inArray(key,cache)===-1&&scrollDistance>=val){let scrollPercent='0';switch(key){case '15':scrollPercent='Scroll15';break;case '25':scrollPercent='Scroll25';break;case '50':scrollPercent='Scroll50';break;case '75':scrollPercent='Scroll75';break;case '100':scrollPercent='Scroll100';break;default:break}var event=new Event(scrollPercent);document.dispatchEvent(event);cache.push(key)}})}window.onscroll=throttle(function(){var body=document.body,html=document.documentElement,docHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight),winHeight=window.innerHeight||html.clientHeight,scrollTop=body.scrollTop||html.scrollTop,percentages=calculatePercentages(docHeight),scrollDistance=scrollTop+winHeight;if(cache.length>=4){return}checkPercentages(percentages,scrollDistance)},500)}(window));