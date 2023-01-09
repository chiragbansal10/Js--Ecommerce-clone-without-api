const contactForm = document.createElement("div");
contactForm.id = "contactForm";

const contactFormImg = document.createElement("img");
contactFormImg.src = "Capture.PNG";

const formaction = document.createElement("form");

const formH1 = document.createElement("h1");
formaction.appendChild(formH1);

const formLabel = document.createElement("label");
formLabel.innerText = "Name:";
formaction.appendChild(formLabel);

const formInput = document.createElement("input");
formInput.type = "text";
formInput.id = "name";
formaction.appendChild(formInput);

const formInputBr = document.createElement("br");
formInput.appendChild(formInputBr);

const formInputBr1 = document.createElement("br");
formInput.appendChild(formInputBr1);

const formLabelEmail = document.createElement("label");
formLabelEmail.innerText = "E-mail:";
formaction.appendChild(formLabelEmail);

const formLabelEmailBr = document.createElement("br");
formLabelEmail.appendChild(formLabelEmailBr);

const formLabelEmailInput = document.createElement("input");
formLabelEmailInput.type = "text";
formLabelEmailInput.id = "email";

const formLabelEmailInputBr = document.createElement("br");
formLabelEmailInput.appendChild(formLabelEmailInputBr);

const formLabelEmailInputBr1 = document.createElement("br");
formLabelEmailInput.appendChild(formLabelEmailInputBr1);

const formLabelMessage = document.createElement("label");
formLabelMessage.innerText = "Message:";

const formLabelMessageTextearea = document.createElement("textarea");
formLabelMessageTextearea.id = "message";
formLabelMessageTextearea.cols = "50";
formLabelMessageTextearea.rows = "5";
formLabelMessage.appendChild(formLabelMessageTextearea);

const formButtonSubmit = document.createElement("input");
formButtonSubmit.type = "button";
formButtonSubmit.value = "Submit";
