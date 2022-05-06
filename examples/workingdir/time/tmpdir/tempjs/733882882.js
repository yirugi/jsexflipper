// SetIntegrityLevel -> [[OwnPropertyKeys]]
var ownKeysCalled = 0;
var p = new Proxy({}, { ownKeys: function(o) { ownKeysCalled++; return Object.keys(o); }});
Object.freeze(p);
(ownKeysCalled === 1)