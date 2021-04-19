var names = ["As","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho"
, "Nueve","Diez","J","Q","K"];
var almacenamiento=[{"numero":"","carta":"","cantidad":""}];
function comparador(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
  
function actualizarTabla(){
    
    var cuerpo = document.getElementById("tabla1");
    var upd= document.createElement("tbody");
    let cur=1;
    almacenamiento=[];
    for(var i in localStorage){
        if(!localStorage.getItem(i))break;
        let datos = JSON.parse(localStorage.getItem(i));
        almacenamiento.push(datos);
    }
    almacenamiento.sort(comparador("cantidad"));
    for(var i in almacenamiento){
        const fila = document.createElement("tr");
        let datos =almacenamiento[i];
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