
let altura = Math.floor(Math.random() * 100);
let largura =  Math.floor(Math.random() * 100);
let area = altura * largura;

console.log(altura, largura, area);
console.log("Área: " + area + " m2");

//Interpolação - Template Literals
console.log(`Área: ${area} m2`);
console.log("Segundo commit");