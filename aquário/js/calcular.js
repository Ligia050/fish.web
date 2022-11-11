

function calcular(){
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var largura = parseFloat(document.getElementById("largura").value);

    let volume = (comprimento*altura*largura/1000).toFixed(0);
    let watts = (volume)
    let bomba = (volume*5).toFixed(0)

    document.getElementById("volume").innerHTML = 'Volume = ' +volume+'L';

    let cont = 0;
    const constante = 50;

    while(true){
        cont+=1;
        if (cont*constante >= volume){
            document.getElementById("watts").innerHTML = 'Aquecedor = ' +watts+'w';
            break
        }
    }

    document.getElementById("bomba").innerHTML = 'Bomba = ' +bomba+'L/h';
}
