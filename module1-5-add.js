let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

let midSymbol = Math.floor(javaScriptDescription.length / 2);
let slicedStr = javaScriptDescription.slice(0, midSymbol);
let modifyStr = slicedStr.replaceAll(' ', '').replaceAll('a', 'A').replaceAll('а', 'А');
modifyStr = modifyStr.repeat(3);

let midSymbolModifyStr = Math.floor(modifyStr.length / 2);

console.log(modifyStr[midSymbolModifyStr]);
console.log(modifyStr);
