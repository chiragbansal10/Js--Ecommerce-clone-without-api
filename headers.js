header();
function header() {
  const nav = document.createElement("nav");
  nav.className = "nav";
  const logo = document.createElement("div");
  logo.classList = "logo";

  const h1 = document.createElement("h1");
  h1.innerHTML = "Ecommerce";
  logo.appendChild(h1);

  const search = document.createElement("div");
  search.className = "search";

  const input_search = document.createElement("input");
  input_search.id = "search";
  input_search.type = "search";
  input_search.name = "search";
  input_search.placeholder = "Product name, Category name, etc.";

  const button = document.createElement("button");
  button.innerHTML = "search";
  search.appendChild(input_search);
  search.appendChild(button);
  // const div= document.createElement('div')
  const login_bucket_div = document.createElement("div");

  login_bucket_div.className = "login_bucket";

  const login_button = document.createElement("button");
  login_button.innerHTML = "login";

  const bucket_button = document.createElement("button");

  bucket_button.innerHTML = "Bucket";

  login_bucket_div.appendChild(login_button);
  login_bucket_div.appendChild(bucket_button);
  nav.appendChild(logo);
  nav.appendChild(search);
  nav.appendChild(login_bucket_div);

  header = document.getElementById("header");
  header.appendChild(nav);

  const product_navbar = document.createElement("div");
  product_navbar.className = "product_navbar";
  const service = document.createElement("div");
  service.className = "service";
  // const product_service=document.querySelectorAll('.product_service')
  const product_service = document.createElement("div");
  product_service.classList = "product_service";
  product_service.innerHTML = "Home";
  service.appendChild(product_service);

  const product_service1 = document.createElement("div");
  product_service1.classList = "product_service";
  product_service1.innerHTML = "All Products";
  service.appendChild(product_service1);

  const div1 = document.createElement("div");

  const product_service2 = document.createElement("div");
  product_service2.classList = "product_service";
  product_service2.innerHTML = "Women";
  div1.appendChild(product_service2);
  service.appendChild(div1);
  const hide_sub_nav = document.createElement("div");
  hide_sub_nav.className = "hide_sub_nav";
  div1.appendChild(hide_sub_nav);

  const unlist = document.createElement("ul");
  hide_sub_nav.appendChild(unlist);

  const multiple_list = document.createElement("div");
  multiple_list.className = "multiple_list";
  unlist.appendChild(multiple_list);

  const all = document.createElement("li");
  all.innerHTML = "All";
  unlist.appendChild(all);

  const dresses = document.createElement("li");
  dresses.innerHTML = "Dresses";
  unlist.appendChild(dresses);

  const pants = document.createElement("li");
  pants.innerHTML = "Pants";
  unlist.appendChild(pants);

  const skirts = document.createElement("li");
  skirts.innerHTML = "Skirts";
  unlist.appendChild(skirts);

  const product_service3 = document.createElement("div");
  product_service3.classList = "product_service";
  product_service3.innerHTML = "Men";
  service.appendChild(product_service3);

  const product_service4 = document.createElement("div");
  product_service4.classList = "product_service";
  product_service4.innerHTML = "Kids";
  service.appendChild(product_service4);

  const product_service5 = document.createElement("div");
  product_service5.classList = "product_service";
  product_service5.innerHTML = "Contact";
  service.appendChild(product_service5);
  header.appendChild(product_navbar);
  product_navbar.appendChild(service);

  const product_service_bar = document.querySelectorAll('.product_service');

  for (let i of product_service_bar) {
    console.log(i);
    i.addEventListener("mouseover", () => {
      let classList = i.nextElementSibling.classList;
      
        classList.remove("hide_sub_nav");
      
    });
    i.addEventListener("mouseleave", () => {
      let classList = i.nextElementSibling.classList;
      
        classList.add("hide_sub_nav");
      
    });
  }
}
