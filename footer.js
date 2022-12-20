header('header');
function footer(id){
    let table
    let footer = document.getElementById(id);
let div=document.createElement('div');
let hr=document.createElement('hr');
let p=document.createElement('p');
p.innerHTML='copyright @Ecommerce 2022-23';
div.appendChild(hr);
div.appendChild(p);
footer.appendChild(div);
}


