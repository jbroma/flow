/*       */
// @nolint

// Regular import
import {
  Something,
                
                       
} from 'some-module';

// Import types
                                            

// Typed function
async function test(x      , y /*.*/   /*.*/ , z /*.*/   /*.*/                = 123)         {
  // Typed expression
  return await (x     );
}

// Interface
               
            

                  
 

// Exported interface
                         
                 
 

// Interface extends
                                
                
 

// Implements interface
class Bar extends Other            /*.*/                 {
  // Class Property with default value
  answer         = 42;

  // Class Property with default value and variance
   covariant         = 42;

  // Class Property
            

  // Class Property with variance
                  

  method()        {
    return;
  }
}

// Class expression implements interface
var SomeClass = class Baz                {
            

  method()        {
    return;
  }
};

// Parametric class
class Wrapper    {
  get()    {
    return this.value;
  }

  map   ()             {
    // do something
  }
}

// Extends Parametric class
class StringWrapper extends Wrapper         {
  // ...
}

// Declare class
                   
                  
 

// Declare funtion
                                  

// Declare interface
                              
                 
 

// Declare module
                     
                                                   
 

// Declare type alias
                         
              
             
  

// Declare variable
                               

// Type alias
                

// Export type
                  

// Export type *
                                 

// Regular export
export { Wrapper };

// Exported type alias
                                  

// Object with types within
var someObj = {
  objMethod()       {
    // do nothing.
  }
}

// Example from README
import SomeClass from 'some-module'
                                                

export class MyClass    extends SomeClass                          {

          

  constructor(value   ) {
    this.value = value
  }

  get()    {
    return this.value
  }

}

// Test async/await functions
async function asyncFunction   (input   )             {
  return await t;
}

// Test read-only data
                             
                             
   

// Test covariant type variant class with constaint and default.
export class TestClassWithDefault                                  {

  constructor() {}
}

var newline_arrow = () => 
          42;

var newline_arrow_2 = () =>  
        42;

// Test calling a function with explicit type arguments
doSomething        (3);
doSomething       (3);

// Test invoking a constructor with explicit type arguments
new Event        ();

// Test type union and intersection syntax with leading "operator"
var union         ;
var intersection         ;

// Test generic async arrow funcion
const f = async    ()    => {};

// Comment type annotations are preserved
var X /*: {
  version: string,
} */ = { version: '42'};

function method(param /*: string */) /*: number */ {
  // ...
}

// declared class fields
class MyClass {
                       
}

// Comment type includes are not emptied out
class MyClass {
  /*:: prop: string; */
}

// Inferred predicate
function inferredPredicateWithType(arg       )                  {
  return !!arg;
}

function inferredPredicateWithoutType(arg       )          {
  return !!arg;
}

// Type guards
function typeGuardFunction(x       )               {
  return typeof x === "boolean";
}

const typeGuardArrow = (x       )               => (typeof x === "boolean");

function typeGuardInComments(x /*: mixed */) /*: x is boolean */ {
  return typeof x === "boolean";
}

function typeAssertsFunction1(x       )                       {
  if (typeof x !== "boolean") throw new Error;
}

function typeAssertsFunction2(x       )            {
  if (!x) throw new Error;
}

// Test function with default type parameter
function f          () {}

// Opaque types
                       
                               
                      
                              
                              

// Declare export
                             
                                  
                         

// `this` params

                                         
                                
function z (             ) {}
function u (               ...a) {}
function v (             
     ...a) {}
function w (    
          

    ) {}
function x (    
          

    
   ...a) {}
function i(
          
) {}
function j(
          
  a        
) {}

function jj(
          
  a        
) {
  function jjj(         a        ) {}
}

const f = function(            ) {}
const g = function(              ...a) {}
const h = function(    
         
...a) {}
const k = function(    
        

 ) {}
const kk = function(    
         
a        ,) {}

// `as` cast
1          ;
1                   ;
[1]       ;

// `as` cast with generics
'm'                         ;
'n'                                ;
['a', 'b', 'c']                                            ;
['x', 'y', 'z']                                     ;
const ga = {a: 'b'}                                              ;
const gb = {a: 'x', b: 1}                                  ;

// `as const`
's'         ;
['s']         ;
