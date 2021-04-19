function validarLogin(){
    var usuario = document.getElementById("login").value;
    var contraseña = document.getElementById("password").value;
    if(usuario =='admin' && contraseña == '1234') location.href = "home.html";
    else alert("Datos erróneos.");
}