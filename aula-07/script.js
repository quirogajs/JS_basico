// lista
let list = [];
let itemAdded;

// mensagens
const menuCommand = `Olá usuário! Digite o número da opção desejada:`;
const menuOption1 = `   1. Cadastrar um item na lista`;
const menuOption2 = `   2. Mostrar itens cadastrados`;
const menuOption3 = `   3. Sair do programa`;
const menuAlert = `${menuCommand}\n${menuOption1}\n${menuOption2}\n${menuOption3}`;
const menuOptionInvalid = `Você deve digitar somente o número da opção desejada.`;
const menuAddItem = `Insira o item que gostaria de adicionar à lista:`;

// menu option
let menuOptionSelected;
let stillRunning = true;

while (stillRunning) {
menuOptionSelected = Number(prompt(menuAlert));

switch(menuOptionSelected) {
    case 1:
        itemAdded = prompt(menuAddItem);
        list.push(itemAdded);
        break;

    case 2:
        if (list.length == 0) {
            alert(`A lista ainda está vazia.`);
        } else {
            alert(list);
            }           
        break;

    case 3:
        stillRunning = false;
        break;

    default:
        alert(menuOptionInvalid);
        break;
}

}

alert(`Fim.`)