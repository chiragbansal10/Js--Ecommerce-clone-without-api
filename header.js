header();
function header(){
const nav= document.createElement('nav')
const logo=document.createElement('div')
logo.classList='logo' 

const h1= document.createElement('h1')
const ecommerce = document.write("Ecommerce")

const search =document.createElement('div')
search.className='search'

const input= document.createElement('input')
input.id='search';
input.type='text';
input.value='Product name, Category name, etc.';



const button=document.createElement('button')
button.innerHTML='search'

// const div= document.createElement('div')
const login_bucket=document.createElement('div')
login_bucket.id='login_bucket'
login_bucket.className='login_bucket'

const login= document.createElement('button')
login.innerHTML='login'

const bucket =document.createElement('button')
bucket.id='bucket'
bucket.innerHTML='Bucket'

nav.appendChild(logo)
logo.appendChild(h1)
 //h1.appendChild(ecommerce)
nav.appendChild(search)
search.appendChild(input)
nav.appendChild(button)
nav.appendChild(login_bucket)
nav.appendChild(login)
nav.appendChild(bucket)
header=document.getElementById('header')
header.appendChild(nav)
const product_navbar=document.createElement('div')
product_navbar.className='product_navbar';
const service=document.createElement('div')
service.className='service';
// const product_service=document.querySelectorAll('.product_service')
const product_service=document.createElement('div');
product_service.classList="product_service";
product_service.innerHTML='Home'
product_service.innerHTML='All Products'

header.appendChild(product_navbar)
product_navbar.appendChild(service)
service.appendChild(product_service)
 product_service=document.querySelectorAll()
console.log(product_service)
for(let i of product_service)
{
    console.log(i)
    i.addEventListener('mouseover',()=>{
        let classList =i.nextElementSibling.classList;
        if(classList.value.includes('hide_sub_nav')){
            classList.toggle('hide_sub_nav');
        }
      
        
    })
}
}