class A { constructor(pp) { this.pp = pp; }
 call() { return this.pp; }
 }
 class B extends A { tS(a) { return super.call(); }
 tT(a){ return this.call(); } }
  const obj = new B("cab");  (obj.tS() !== obj.tT()); 