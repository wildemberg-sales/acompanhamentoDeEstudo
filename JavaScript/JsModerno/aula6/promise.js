function testes(){
    return new Promise(function(resolve, reject){

        //definir um delay para mostrar a async
        setTimeout(function(){
            const erro = false;

            if(erro){
                reject("ERRO...");
            }else{
                resolve("A promisse foi resolvida com sucesso");
            }
        }, 2000)
        

    })
}

/*
testes().then(function(res){
    //se der tudo certo
    alert(res);

}).catch(function(err){
    //se der errado
    alert(err);
})
*/

//função assincrona

async function teste2(){
    //espera a outra ser executada para continuar
    await testes().then(function(res){
        alert(res);
    });

    alert("Ola");
}

teste2();