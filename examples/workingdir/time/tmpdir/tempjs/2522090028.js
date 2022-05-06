var obj = [];
obj.constructor = {};
obj.constructor[Symbol.species] = function() {
    return { foo: 1 };
};
(Array.prototype.filter.call(obj, Boolean).foo === 1)