var names = ["As","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho"
, "Nueve","Diez","J","Q","K"];
function actualizarTabla(){
    
    var cuerpo = document.getElementById("tabla1");
    var upd= document.createElement("tbody");
    let cur=1;
    
    for(var i in localStorage){
        if(!localStorage.getItem(i))break;
        const fila = document.createElement("tr");
        var datos = JSON.parse(localStorage.getItem(i));
        fila.innerHTML =` 
            <tr>
                <td>${cur}</td>
                <td>${names[datos.numero-1] + " de " + datos.carta}</td>
                <td>${datos.cantidad}</td>
            </tr>
        `;
        upd.appendChild(fila);
        cur++;
    }
    cuerpo.innerHTML=upd.innerHTML;
}
function registrarCarta(){
    let numero = parseInt(document.getElementById("form-numero").value);
    let carta = (document.getElementById("form-carta").value).toLowerCase();
    if(localStorage.getItem(numero+" "+carta)){
        localStorage.setItem(numero+" "+carta,JSON.stringify({"numero":numero,"carta":carta,"cantidad":JSON.parse(localStorage.getItem(numero+" "+carta)).cantidad+1}));
    }
    else{
        localStorage.setItem(numero+" "+carta,JSON.stringify({"numero":numero,"carta":carta,"cantidad":1}));
    }
    actualizarTabla();
}
function aumentarCarta(numero,carta){
    if(localStorage.getItem(numero+" "+carta)){
        localStorage.setItem(numero+" "+carta,JSON.stringify({"numero":numero,"carta":carta,"cantidad":JSON.parse(localStorage.getItem(numero+" "+carta)).cantidad+1}));
        actualizarTabla();  
    }
    else{
        alert("La carta no está registrada.");
    }
}
actualizarTabla();