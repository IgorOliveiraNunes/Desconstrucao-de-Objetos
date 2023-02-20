let pessoa = {
    nome:'igor',
    sobrenome:'oliveira',
    idade:20,
    social:{
        facebook:'igor oliveira',
        instagram:{
            url:'@igoron3008',
            seguidores:2000
        }
    },
    nomeCompleto: function(){
    return `${this.nome} ${this.sobrenome}`}
    };

    let{ nome, sobrenome , idade, 
        social:{instagram:{
            url:instagram}}} = pessoa;
    console.log(nome, idade,instagram )

    
   function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url:instagram}}}){
    return `${nome} ${sobrenome} siga ${instagram} no imstagram`
   }
   console.log( pegarNomeCompleto(pessoa))