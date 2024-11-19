
let listaComprasParaButeco = [];
for (let i = 0; i < 3; i++) {
    let item = prompt(`Adicione o item ${i + 1} à lista de compras:`);
    listaComprasParaButeco.push(item);
}
if (listaComprasParaButeco [listaComprasParaButeco.length - 1] !== "Cachaça") {
    listaComprasParaButeco.push("Cachaça");
}
console.log("Lista de compras:", listaComprasParaButeco);
