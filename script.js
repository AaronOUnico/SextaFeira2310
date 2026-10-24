let nome = "f"
let valor = 1.2
let quantidade = 4
let categoria = ""
const listaProd = [{
nome: "eu",
valor: 1.20,
quantidade:5,
categoria:" info"

},
{
nome: "certop",
valor: 1.20,
quantidade:5,
categoria:" info"

}]

const lista = document.getElementById("lista")
function atualizarLista(){
    for(let i = 0; i<listaProd.length;i++){
        let item = document.createElement("li")

        item.textContent = listaProd[i].nome + " R$ " + listaProd[i].valor+" Disponível: "
        + listaProd[i].quantidade
        lista.appendChild(item)
    }
}
atualizarLista();