function correctProtoBound(proto) {
var f = function(){};
if (Object.setPrototypeOf) {
Object.setPrototypeOf(f, proto);
}
else {
f.__proto__ = proto;
}
var boundF = Function.prototype.bind.call(f, null);
return Object.getPrototypeOf(boundF) === proto;
}
(
correctProtoBound(Function.prototype)
&& correctProtoBound({})
&& correctProtoBound(null)
);