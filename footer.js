footer();
function footer() {
  // let footer = document.getElementById(id);
  const footer = document.getElementById("footer");

  const footerbar = document.createElement("div");
  footerbar.className = "footerBar";
  footer.appendChild(footerbar);

  const servicebar = document.createElement("div");
  servicebar.classList = "servicebar";
  footerbar.appendChild(servicebar);

  const product_servicebar = document.createElement("div");
  product_servicebar.classList = "product_servicebar";
  product_servicebar.innerHTML = "Women";
  servicebar.appendChild(product_servicebar);

  const hide_sub_nav_bar = document.createElement("div");
  hide_sub_nav_bar.classList = "hide_sub_nav_bar";
  product_servicebar.appendChild(hide_sub_nav_bar);

  const unlist = document.createElement("ul");
  hide_sub_nav_bar.appendChild(unlist);

  const multiple_list = document.createElement("div");
  multiple_list.classList = "multiple_list";
  unlist.appendChild(multiple_list);

  const dresses = document.createElement("li");
  dresses.innerHTML = "Dresses";
  unlist.appendChild(dresses);

  const pants = document.createElement("li");
  pants.innerHTML = "Pants";
  unlist.appendChild(pants);

  const skirts = document.createElement("li");
  skirts.innerHTML = "Skirts";
  unlist.appendChild(skirts);

  const servicebar1 = document.createElement("div");
  servicebar1.classList = "servicebar";
  footerbar.appendChild(servicebar1);

  const product_servicebar1 = document.createElement("div");
  product_servicebar1.classList = "product_servicebar";
  product_servicebar1.innerHTML = "Men";
  servicebar1.appendChild(product_servicebar1);

  const hide_sub_nav_bar1 = document.createElement("div");
  hide_sub_nav_bar1.classList = "hide_sub_nav_bar";
  product_servicebar1.appendChild(hide_sub_nav_bar1);

  const unlist1 = document.createElement("ul");
  hide_sub_nav_bar1.appendChild(unlist1);

  const multiple_list1 = document.createElement("div");
  multiple_list1.classList = "multiple_list";
  unlist1.appendChild(multiple_list1);

  const shirts1 = document.createElement("li");
  shirts1.innerHTML = "Shirts";
  unlist1.appendChild(shirts1);

  const pants1 = document.createElement("li");
  pants1.innerHTML = "Pants";
  unlist1.appendChild(pants1);

  const hoodies = document.createElement("li");
  hoodies.innerHTML = "Hoodies";
  unlist1.appendChild(hoodies);

  const servicebar2 = document.createElement("div");
  servicebar2.classList = "servicebar";
  footerbar.appendChild(servicebar2);

  const product_servicebar2 = document.createElement("div");
  product_servicebar2.classList = "product_servicebar";
  product_servicebar2.innerHTML = "Kids";
  servicebar2.appendChild(product_servicebar2);

  const servicebar3 = document.createElement("div");
  servicebar3.classList = "servicebar";
  footerbar.appendChild(servicebar3);

  const product_servicebar3 = document.createElement("div");
  product_servicebar3.classList = "product_servicebar";
  product_servicebar3.innerHTML = "Links";
  servicebar3.appendChild(product_servicebar3);

  const hide_sub_nav_bar2 = document.createElement("div");
  hide_sub_nav_bar2.classList = "hide_sub_nav_bar";
  servicebar3.appendChild(hide_sub_nav_bar2);

  const unlist2 = document.createElement("ul");
  hide_sub_nav_bar2.appendChild(unlist2);

  const multiple_list2 = document.createElement("div");
  multiple_list2.classList = "multiple_list";
  unlist2.appendChild(multiple_list2);

  const home = document.createElement("li");
  home.innerHTML = "Home";
  unlist2.appendChild(home);

  const login = document.createElement("li");
  login.innerHTML = "Login";
  unlist2.appendChild(login);

  const contact = document.createElement("li");
  contact.innerHTML = "Contact";
  unlist2.appendChild(contact);

  const hr = document.createElement("hr");
  footer.appendChild(hr);
  const copyright = document.createElement("div");
  copyright.id="copyright"
  copyright.innerHTML = "copyright @Ecommerce 2022-23";
  footer.appendChild(copyright);
}
