let valor_tempo = 0;
let interval = null

function contagem(tempo){
    valor_tempo = tempo;

    clearInterval(interval);
    interval = setInterval(function(){
        if(valor_tempo > 0){
            valor_tempo = valor_tempo - 1
            document.querySelector('.cont').innerHTML = valor_tempo;
        }
    }, 1000)
}

let timeoutRed = null;

function red(){
    contagem(12)
    document.querySelector('.status').innerHTML = 'Status: Carros Parados!'
    var cor = document.getElementById('red');
    cor.style.backgroundColor = "red"

    timeoutRed = setTimeout(function(){
        cor.style.backgroundColor = "rgb(80, 24, 24)"
        yellow()
    }, valor_tempo * 1000)
}

function ReduzTempo() {
    var color_bt = document.getElementById('bt1')

    if (valor_tempo > 1 && document.querySelector('.status').innerHTML.includes('Parados')) {

        color_bt.style.backgroundColor = "rgb(9, 65, 21)"

        setTimeout(function(){
            color_bt.style.backgroundColor = 'rgb(75, 77, 74)'
        }, 500)

        valor_tempo = valor_tempo - 1;
        if (valor_tempo < 1) {
            valor_tempo = 1;
        }

        clearTimeout(timeoutRed);
        timeoutRed = setTimeout(function(){
            document.getElementById('red').style.backgroundColor = "rgb(80, 24, 24)";
            yellow();
        }, valor_tempo * 1000);
    }
}


function yellow(){
    contagem(5)

    document.querySelector('.status').innerHTML = 'Status: Atenção!'

    var cor = document.getElementById('yellow');
    
    var clear = setInterval(function(){
        cor.style.backgroundColor = "yellow"
        setTimeout(function(){
            cor.style.backgroundColor = "rgb(75, 71, 17)"
        }, 500)
    }, 1000)
    setTimeout(function(){
        clearInterval(clear)
        cor.style.backgroundColor = "rgb(75, 71, 17)"
        green()
    }, 5000)
}
function green(){
    contagem(9)
    document.querySelector('.status').innerHTML = 'Status: Carros Passando!'
    
    var cor = document.getElementById('green');
    cor.style.backgroundColor = "rgb(47, 189, 12)"
    
    setTimeout(function(){
        cor.style.backgroundColor = "rgb(22, 49, 15)"
        red()
    }, 9000)
}
red()

