var ButtonClick = document.querySelector(".btnAgregar")
var texto = 'lista: '
var listaAmigos  = []
ButtonClick.addEventListener("click", function()
{   
    
    var nombre = document.getElementsByClassName("inputAmigo")[0].value
    if (nombre === ""){
        alert("Campo vacio! Agregue un nombre")
        return;
    }
    
    listaAmigos.push(nombre)
    texto+= ( nombre +" "+"-"+" ")
    document.getElementById("divLista").textContent = (texto)
    document.getElementsByClassName("inputAmigo")[0]. value = "";

}

)

function Sortear(){
    if (listaAmigos.length === 0) {
        alert("Por favor, agrega al menos un nombre antes de sortear.");
        return;
    }
    alert("Se sortea!")
    let NumeroRandom = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[NumeroRandom];
    console.log(listaAmigos[NumeroRandom])
    document.querySelector(".amigoSorteado").textContent = `El amigo secreto es: ${amigoSecreto}!!`;
}
