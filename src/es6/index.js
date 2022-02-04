function newFuction(name, age, country){
    var name = name || 'Yahir';
    var age = age || 12;
    var country = country || 'PE'
    console.log(name, age, country)
}

//es6
function newFunction2(name = 'Yahir', age = 12, country = "PE") {
    console.log(name, age, country);
  };
  
  newFunction2();
  newFunction2('Luis', '9', 'PE');

  let hello = "Hello";
  let world = "World";
  let epicPhrase = hello + ' ' + world;
  console.log(epicPhrase);
  let epicPhrase2 = `${hello} ${world}`;
    console.log(epicPhrase2);

{
  var globalvar = "Globak var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalvar);
