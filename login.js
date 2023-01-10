const loginform = document.createElement("div");
loginform.id = "loginform";

const form = document.createElement("form");
loginform.appendChild(form);

const h1 = document.createElement("h1");
h1.innerText = "Login";
form.appendChild(h1);

const emaillabel = document.createElement("label");
emaillabel.for = "email";
emaillabel.innerText = "E-mail:";
form.appendChild(emaillabel);

const br = document.createElement("br");
form.appendChild(br);

const emailinput = document.createElement("input");
emailinput.type = "text";
emailinput.id = "email";
form.appendChild(emailinput);

const br1 = document.createElement("br");
form.appendChild(br1);

const br2 = document.createElement("br");
form.appendChild(br2);

const passwordLabel = document.createElement("label");
passwordLabel.for = "password";
passwordLabel.innerText = "Password:";
form.appendChild(passwordLabel);

const passwordLbaelBr = document.createElement("br");
form.appendChild(passwordLbaelBr);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
form.appendChild(passwordInput);

const passwordInputBr = document.createElement("br");
form.appendChild(passwordInputBr);

const passwordInputBr1 = document.createElement("br");
form.appendChild(passwordInputBr1);

const loginButton = document.createElement("input");
loginButton.id = "Login";
loginButton.type = "button";
form.appendChild(loginButton);

logiUi=document.getElementById("logiUi")
logiUi.appendChild(loginform)
