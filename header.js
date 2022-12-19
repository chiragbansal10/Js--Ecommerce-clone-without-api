

const product_service=document.querySelectorAll('.product_service')
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