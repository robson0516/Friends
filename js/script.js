var user = "Roxo&Roxa";
var senha = "Friends2021";

function confirmar(){
    var name = document.querySelector("#user").value;
    var password = document.querySelector("#password").value;
    var resultado = false;
    if(name == user && password == senha){
        resultado = true;
    }
    else{
        resultado = false;
    }

    return resultado;
}

function b(){
    var a = confirmar();
    if(a == true){
        window.location.href = "friends.html";
    }
    else{
        alert("Usuário ou senha estão incorretos! Tente novamente!");
    }
}
