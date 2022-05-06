var baz = false;
class C {
get foo() { return "foo"; }
set bar(x) { baz = x; }
}
new C().bar = true;
(new C().foo === "foo" && baz);