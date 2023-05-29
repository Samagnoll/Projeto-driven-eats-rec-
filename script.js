




let pratoSalgado = '';
let bebida = '';
let sobremesa = '';
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;


function verificarBotao(){
//verificar se o prato foi selecionado
if (pratoSalgado !== ''){
    //verificar bebida
    if(bebida !== ''){
        //verificar sobremesa
        if(sobremesa !== ''){
            const habilitarOBotao = document.querySelector('.botão-pra-habilitar');
            habilitarOBotao.classList.add('botao-habilitado');
            const mudarEscrito = document.querySelector('.escrito-branco');
            mudarEscrito.innerHTML = 'Fechar pedido';
        }
    }
}
}


function selecionarPrato(seletor){
    pratoSalgado = seletor.innerHTML;
//primeiro verificar se existe botao já está selecionado
//buscando um botao com a classe selecionado
    let botaoSelecionadoAnteriormente = document.querySelector('.todos-os-pratos .selecionado');
    //se existir botao selecionado
    if (botaoSelecionadoAnteriormente !== null){
    //remove a classe selecionado desse botao
    botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }

    let botao = document.querySelector(seletor);
     botao.classList.add('selecionado');
    console.log(botao);

    verificarBotao()

    //let titulo = botao.querySelector('.titulo-comida').innerHTML

     precoPrato = Number((botao.querySelector('.valor').innerHTML).replace("R$", "").replace("," , "."));
    console.log(precoPrato)

      nomePrato = botao.querySelector('.titulo-comida').innerHTML;
    console.log(nomePrato)



}

function selecionarBebida(seletor){

    bebida = seletor.innerHTML;

    let botaoSelecionadoAnteriormente = document.querySelector('.todas-as-bebidas .selecionado');

    if (botaoSelecionadoAnteriormente !== null){

    botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    let botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    verificarBotao()
     precoBebida = Number((botao.querySelector('.valor').innerHTML).replace("R$", " ").replace("," , "."));
    console.log(precoBebida)
      nomeBebida = botao.querySelector('.titulo-bebida').innerHTML;
    console.log(nomeBebida)
}

function selecionarSobremesa(seletor){

    sobremesa = seletor.innerHTML;

    let botaoSelecionadoAnteriormente = document.querySelector('.todas-as-sobremesas .selecionado');

    if (botaoSelecionadoAnteriormente !== null){

    botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    let botao = document.querySelector(seletor);
    botao.classList.add('selecionado');
    //console.log(seletor)
    verificarBotao()
     precoSobremesa = Number((botao.querySelector('.valor').innerHTML).replace("R$", "").replace("," , "."));
    console.log(precoSobremesa);
     nomeSobremesa = botao.querySelector('.titulo-sobremesa').innerHTML;
    console.log(nomeSobremesa);
}


function whatzapp(){

    let valorTotal = 0;
    valorTotal = precoPrato + precoBebida + precoSobremesa;
    console.log(valorTotal);
    let mensagemDeEnvio="Olá, gostaria de fazer o pedido:" + 
    "\n- Prato: " + nomePrato + 
    "\n- Bebida: " + nomeBebida +
    "\n- Sobremesa: " + nomeSobremesa +
    "\nTotal: R$ " +valorTotal.toFixed(2).replace(".", ",");
    let msg = encodeURIComponent(mensagemDeEnvio);
    
    window.open(`https://wa.me/5599999999?text=${msg}`);
}