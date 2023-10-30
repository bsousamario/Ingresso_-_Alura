

function comprar () {
    
    let ticketType = document.getElementById("tipo-ingresso").value;
    let ticketQty = document.getElementById("qtd").value;
    console.log(ticketType);
    console.log(ticketQty);

    let pistaTotal = document.getElementById("qtd-pista");
    let cadeiraSuperiorTotal = document.getElementById("qtd-superior");
    let cadeiraInferiorTotal = document.getElementById("qtd-inferior");

    console.log(pistaTotal);
    console.log(cadeiraSuperiorTotal);
    console.log(cadeiraInferiorTotal);
 
    if (ticketType == "pista") { 
        if (Number(ticketQty) > Number(pistaTotal.innerHTML)) {
            alert ("A quantidade de ingressos selecionada não está disponível.")
        } else {
            pistaTotal.innerHTML = pistaTotal.innerHTML - ticketQty;
        }    
    } else if (ticketType == "superior") {
        if (Number(ticketQty) > Number(cadeiraSuperiorTotal.innerHTML)) {
            alert ("A quantidade de ingressos selecionada não está disponível.")
        } else {  
            cadeiraSuperiorTotal.innerHTML = cadeiraSuperiorTotal.innerHTML - ticketQty;
        }    
    } else {
        if (Number(ticketQty) > Number(cadeiraInferiorTotal.innerHTML)) {
            alert ("A quantidade de ingressos selecionada não está disponível.")
        } else { 
            cadeiraInferiorTotal.innerHTML = cadeiraInferiorTotal.innerHTML - ticketQty;
        }  
    } 
}
