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
let myLi, myCheck;
let c = 0;

myCheck = '<input class = "w-25" type = "checkbox">'

while (c < listaSpesa.length){
    myLi =`<li class = "list-group-item d-flex justify-content-center">${listaSpesa[c]}${myCheck}</li>`;
    
    myUl.innerHTML += myLi;
    
    c++;
}
document.body.append(myUl);
