// console.log("Criamos o arquivo")

// JSON - ARRAY DE TRANSIÇÃO DE INFORMAÇÃO 
//NOTAÇÃO DE OBJETO JAVASCRIPT
//json converte en objeto
//parte 1 do exercicio
  var catalogo=require("./database/catalogo.json")
// //console.log(catalogo)
 var catalogostring=JSON.stringify(catalogo)//json stringfy converte objeto em string
// //console.log(catalogostring)
 var catalogoObj=JSON.parse(catalogostring)// json parse converte string em objeto
// //console.log(catalogoObj)

//parte 2 do exercicio 
// 1. listarTodosOsFilmes - criar 
// A função deve percorrer toda a lista de ﬁlmes armazenada no catálogo utilizando o loop for e retornar as informações de maneira amigável ao usuário.

// function listarTodosOsFilmes(filmes) {
//   for (var i = 0; i < filmes.length; i++) {
//     console.log(filmes[i].titulo);
//       }
// }
// listarTodosOsFilmes(catalogoObj.data);

// 2. listarFilmesEmCartaz - criar
// A função deve percorrer toda a lista de ﬁlmes armazenada no catálogo 
// utilizando o loop for e retornar os ﬁlmes disponíveis em cartaz - as 
// informações de maneira amigável ao usuário.

function listarFilmesEmCartaz(filmes){
  var filmesEmCartaz =filmes.filter((filme)=>{ //pecorrer o array filter verifica se determinada e verdadeira ou nao usando uma arron fuction
      if(filme.emCartaz===true){
          return true
      } 
  })  
  return filmesEmCartaz
}
console.log(listarFilmesEmCartaz(catalogoObj.data))


