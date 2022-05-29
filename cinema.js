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

// function listarFilmesEmCartaz(filmes){
//   var filmesEmCartaz =filmes.filter((filme)=>{ //pecorrer o array filter verifica se determinada e verdadeira ou nao usando uma arron fuction
//       if(filme.emCartaz===true){
//           return true
//       } 
//   })  
//   return filmesEmCartaz
// }
// console.log(listarFilmesEmCartaz(catalogoObj.data))

// refatorando o codigo
// function listarFilmesEmCartaz(filmes){
//   return filmes.filter((filme)=>filme.emCartaz )
// }//pecorrer o array filter verifica se determinada e verdadeira ou nao usando uma arron fuction
     
// console.log(listarFilmesEmCartaz(catalogoObj.data))

// var listarFilmesEmCartaz=(filmes)=>
//   filmes.filter((filme)=>filme.emCartaz )
//    console.log(listarFilmesEmCartaz(catalogoObj.data))

// 3. alterarStatusEmCartaz - alterar
// A função deve receber como parâmetro o número identiﬁcador do ﬁlme escolhido, buscar o ﬁlme com base no parâmetro recebido e alterar o status existente da propriedade emCartaz (se estava como true, alterar para false, e vice e versa

function alterarStatusEmCartaz (id,filmes){ //id é uma convenção para chamar o codigo
 var idxFilme= filmes.findIndex((filme)=>{// findIndex retorna a posição do elemento
     if(filme.codigo===id) {
         return true
     }   
     })
 if(idxFilme>=0){
     filmes[idxFilme].emCartaz=!filmes[idxFilme].emCartaz //! valor negado //e alterar o status
     //existente da propriedade emCartaz (se estava como true, alterar para false, e vise versa
 return true
 } else {
     return false
 }   
 }
console.log(alterarStatusEmCartaz(1,catalogoObj.data))
console.log(catalogoObj.data)

