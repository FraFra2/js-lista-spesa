let listaSpesa = [
    "Latte",
    "Uova",
    "Pane",
    "Frutta",
    "Verdura",
    "Carne",
    "Pasta",
    "Riso",
    "Olio d'oliva",
    "Sapone"
  ];

let myUl = document.createElement("ul");
myUl.classList.add("list-group");
let myLi;
let c = 0;


while (c < listaSpesa.length){
    myLi =`<li class = "list-group-item">${listaSpesa[c]}</li>`;
    myUl.innerHTML += myLi;
    
    c++;
}
document.body.append(myUl);
