/* @flow */

var foo = Object.freeze({bar: '12345'});
foo.bar = '23456'; // error

Object.assign(foo, {bar: '12345'}); // error

var baz = {baz: 12345};
var bliffl = Object.freeze({bar: '12345', ...baz});
bliffl.bar = '23456'; // error
bliffl.baz = 3456; // error
bliffl.corge; // error
bliffl.constructor = baz; // error
bliffl.toString = function () {}; // error

baz.baz = 0;

var x: number = Object.freeze(123);

var xx: {x: number} = Object.freeze({x: 'error'});

function f(x: Object) {
  Object.freeze({...x}) as Object; // ok

  let y = Object.freeze({...x});
  y.foo = 'bar'; // there is no frozen form of AnyT so this is "allowed"
}

var inexact: {...} = {p: 0};
Object.freeze({...inexact}) as {||}; // Error: inexact -> exact

const NegNumber = Object.freeze({
  foo: -1,
});
NegNumber.foo as 1; // error -1 ~> 1
NegNumber.foo as -1; // okay
1 as typeof NegNumber.foo; // error 1 ~> -1
-1 as typeof NegNumber.foo; // okay

module.exports = {
  inexact: Object.freeze({...inexact}),
  NegNumber,
};
