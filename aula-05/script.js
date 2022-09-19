let listaDeCompras = [];

for (let i = 0; i < 10; i++) {

    let item = prompt(`Insira o item ${i + 1}:`);
    listaDeCompras.push(item);
};

alert(`${listaDeCompras}`);