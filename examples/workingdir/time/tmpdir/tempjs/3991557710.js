var passed = false;
var _set = WeakMap.prototype.set;
WeakMap.prototype.set = function(k, v) {
passed = true;
};
new WeakMap([ [{ }, 42] ]);
WeakMap.prototype.set = _set;
(!!passed)