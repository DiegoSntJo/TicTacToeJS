contadorVez = 1;

player1 = "<p> X </p>";
player2 = "<p> O </p>";

slotX = [];
slotO = [];
tabela = [];

aviso = "";


function jogada() {
    vezDaJogada();
    contadorVez = (contadorVez) + 1;
    gravarEspaço = document.getElementById(espaço);
    gravarEspaço.innerHTML = jogador;

    if(jogador == "<p> X </p>"){
        slotX.push(espaço);
        tabela.push(espaço);
        verificadorJogoX();
    }else{
        slotO.push(espaço);
        tabela.push(espaço);
        verificadorJogoO();
    }

    console.log(tabela);
    setTimeout(verificadorJogoEmpate, 1500);//verificadorJogoEmpate();
}

function vezDaJogada() {
    if (contadorVez%2  == 0){
        jogador = player2;
    }else{
        jogador = player1;
    }
}

function ganhou(){
    aviso = ganhador + "ganhou !";
    alert(aviso);
    history.go(0);
}

function verificadorJogoX(){
    ganhador = "Jogador X ";

    um = slotX.includes('1');
    dois = slotX.includes('2');
    tres = slotX.includes('3');
    quatro = slotX.includes('4');
    cinco = slotX.includes('5');
    seis = slotX.includes('6');
    sete = slotX.includes('7');
    oito = slotX.includes('8');
    nove = slotX.includes('9');
    
    if(um == true && dois == true && tres == true){
        ganhou(ganhador);
    }else if(quatro == true && cinco == true && seis == true){
        ganhou(ganhador);
    }else if(sete == true && oito == true && nove == true){
        ganhou(ganhador);
    }else if(um == true && quatro == true && sete == true){
        ganhou(ganhador);
    }else if(dois == true && cinco == true && oito == true){
        ganhou(ganhador);
    }else if(tres == true && seis == true && nove == true){
        ganhou(ganhador);
    }else if(um == true && cinco == true && nove == true){
        ganhou(ganhador);
    }else if(tres == true && cinco == true && sete == true){
        ganhou(ganhador);
    }
}

function verificadorJogoO(){
    ganhador = "Jogador O ";

    um = slotO.includes('1');
    dois = slotO.includes('2');
    tres = slotO.includes('3');
    quatro = slotO.includes('4');
    cinco = slotO.includes('5');
    seis = slotO.includes('6');
    sete = slotO.includes('7');
    oito = slotO.includes('8');
    nove = slotO.includes('9');
    
    if(um == true && dois == true && tres == true){
        ganhou(ganhador);
    }else if(quatro == true && cinco == true && seis == true){
        ganhou(ganhador);
    }else if(sete == true && oito == true && nove == true){
        ganhou(ganhador);
    }else if(um == true && quatro == true && sete == true){
        ganhou(ganhador);
    }else if(dois == true && cinco == true && oito == true){
        ganhou(ganhador);
    }else if(tres == true && seis == true && nove == true){
        ganhou(ganhador);
    }else if(um == true && cinco == true && nove == true){
        ganhou(ganhador);
    }else if(tres == true && cinco == true && sete == true){
        ganhou(ganhador);
    }
}

function verificadorJogoEmpate(){
    if(tabela.length == 9){
        if(aviso == ""){
            aviso = "Deu velha !";
            alert(aviso);
            history.go(0);
        }
    }
}