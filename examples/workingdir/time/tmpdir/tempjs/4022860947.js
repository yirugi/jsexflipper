var set = [];
var p = new Proxy([1,2,3,4,5,6], { set: function(o, k, v) { set.push(k); o[k] = v; return true; }});
p.copyWithin(0, 3);
(set + "" === "0,1,2");