var P = new Proxy(Object.preventExtensions(Object.defineProperty({a:1}, "b", {value:1})), {
ownKeys: function() {
return ["a","a","b","b"];
} });
Object.getOwnPropertyNames(P) + "" === "a,a,b,b";