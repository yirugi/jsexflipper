var get = [];
var p = new Proxy({}, { get: function(o, k) { get.push(k); return o[k]; }});
Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get.call(p);
(get + "" === "global,ignoreCase,multiline,unicode,sticky");