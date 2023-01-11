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

  const login_button = document.createElement("a");
  login_button.innerHTML = "login";
  login_button.target = "_blank";
  login_button.href = "login.html";
  login_button.id = "login_button";

  const bucket_button = document.createElement("a");
  bucket_button.id = "login_button";
  bucket_button.innerHTML = "Bucket";
  bucket_button.target = "_blank";
  bucket_button.href = "";

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
  const product_null = document.createElement("div");
  service.appendChild(product_null);

  const product_service = document.createElement("div");
  product_service.classList = "product_service";
  product_service.innerHTML = "Home";
  product_null.appendChild(product_service);

  const hide_sub_nav5 = document.createElement("div");
  hide_sub_nav5.classList = "hide_sub_nav";
  product_null.appendChild(hide_sub_nav5);

  const product_null1 = document.createElement("div");
  service.appendChild(product_null1);

  const product_service1 = document.createElement("div");
  product_service1.classList = "product_service";
  product_service1.innerHTML = "All Products";
  product_null1.appendChild(product_service1);

  const hide_sub_nav6 = document.createElement("div");
  hide_sub_nav6.classList = "hide_sub_nav";
  product_null1.appendChild(hide_sub_nav6);

  const div1 = document.createElement("div");

  const product_service2 = document.createElement("div");
  product_service2.classList = "product_service";
  product_service2.innerHTML = "Women";
  div1.appendChild(product_service2);
  service.appendChild(div1);
  const hide_sub_nav = document.createElement("div");
  hide_sub_nav.className = "hide_sub_nav";
  div1.appendChild(hide_sub_nav);

  const multiple_list = document.createElement("div");
  multiple_list.className = "multiple_list";
  hide_sub_nav.appendChild(multiple_list);

  const unlist = document.createElement("ul");
  multiple_list.appendChild(unlist);

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

  const product_null2 = document.createElement("div");
  service.appendChild(product_null2);

  const product_service3 = document.createElement("div");
  product_service3.classList = "product_service";
  product_service3.innerHTML = "Men";
  product_null2.appendChild(product_service3);

  const hide_sub_nav1 = document.createElement("div");
  hide_sub_nav1.classList = "hide_sub_nav";
  product_null2.appendChild(hide_sub_nav1);

  const multiple_list3 = document.createElement("div");
  multiple_list3.className = "multiple_list";
  hide_sub_nav1.appendChild(multiple_list3);

  const unlist4 = document.createElement("ul");
  multiple_list3.appendChild(unlist4);

  const product_service4 = document.createElement("li");
  product_service4.innerHTML = "All Products";
  unlist4.appendChild(product_service4);

  const shirts = document.createElement("li");
  shirts.innerHTML = "Shirts";
  unlist4.appendChild(shirts);

  const pants1 = document.createElement("li");
  pants1.innerHTML = "Pants";
  unlist4.appendChild(pants1);

  const hoodies = document.createElement("li");
  hoodies.innerHTML = "Hoodies";
  unlist4.appendChild(hoodies);

  const product_null3 = document.createElement("div");
  service.appendChild(product_null3);

  const product_service5 = document.createElement("div");
  product_service5.classList = "product_service";
  product_service5.innerHTML = "Kids";
  product_null3.appendChild(product_service5);

  const hide_sub_nav3 = document.createElement("div");
  hide_sub_nav3.classList = "hide_sub_nav";
  product_null3.appendChild(hide_sub_nav3);

  const product_null4 = document.createElement("div");
  service.appendChild(product_null4);

  const product_service6 = document.createElement("a");
  product_service6.classList = "product_service";
  product_service6.innerHTML = "Contact";
  product_service6.href = "contact.html";
  product_service6.id = "contact";
  product_null4.appendChild(product_service6);

  const hide_sub_nav4 = document.createElement("div");
  hide_sub_nav4.classList = "hide_sub_nav";

  product_null4.appendChild(hide_sub_nav4);

  header.appendChild(product_navbar);
  product_navbar.appendChild(service);

  const product_service_bar = document.querySelectorAll(".product_service");

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
