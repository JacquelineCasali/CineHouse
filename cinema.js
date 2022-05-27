// console.log("Criamos o arquivo")

// JSON - ARRAY DE TRANSIÇÃO DE INFORMAÇÃO 
//NOTAÇÃO DE OBJETO JAVASCRIPT
//json converte en objeto

var catalogo=require("./database/catalogo.json")
// console.log(catalogo)
var catalogostring=JSON.stringify(catalogo)//json stringfy converte objeto em string
console.log(catalogostring)
var catalogoObj=JSON.parse(catalogostring)
console.log(catalogoObj)


 console.log(catalogo)
//console.log(catalogo.data)