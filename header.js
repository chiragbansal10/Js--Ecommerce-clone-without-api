header();
function header(){
const nav= document.createElement('nav')
const logo=document.createElement('div').classList='logo' 
const h1= document.createElement('h1')
const ecommerce = document.write("Ecommerce")

const search =document.createElement('div').className='search'
const input= document.createElement('input').id='search'
input.setAttribute("type", "text")
input.setAttribute("value","Product name, Category name, etc." )
const button=document.createElement('button').value='search'
// const div= document.createElement('div')
const login_bucket=document.createElement('div').className='login_bucket'

const login= document.createElement('button').innerHTML='login'
const bucket =document.createElement('button')


nav.appendChild(logo)
logo.appendChild(h1)
h1.appendChild(ecommerce)
nav.appendChild(search)
search.appendChild(input)
nav.appendChild(button)
nav.appendChild(login_bucket)
nav.appendChild(login)
nav.appendChild(bucket)

const product_navbar=document.createElement('div').className='product_navbar'
const service=document.createElement('div').className='service'

// const product_service=document.querySelectorAll('.product_service')
const product_service=document.querySelectorAll()
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