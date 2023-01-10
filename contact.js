const contactForm = document.createElement("div");
contactForm.id = "contactForm";

const contactFormImg = document.createElement("img");
contactFormImg.src = "Capture.PNG";
contactForm.appendChild(contactFormImg)

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
formaction.appendChild(formInputBr);

const formInputBr1 = document.createElement("br");
formaction.appendChild(formInputBr1);

const formLabelEmail = document.createElement("label");
formLabelEmail.innerText = "E-mail:";
formaction.appendChild(formLabelEmail);

const formLabelEmailBr = document.createElement("br");
formaction.appendChild(formLabelEmailBr);

const formLabelEmailInput = document.createElement("input");
formLabelEmailInput.type = "text";
formLabelEmailInput.id = "email";
formaction.appendChild(formLabelEmailInput)

const formLabelEmailInputBr = document.createElement("br");
formaction.appendChild(formLabelEmailInputBr);

const formLabelEmailInputBr1 = document.createElement("br");
formaction.appendChild(formLabelEmailInputBr1);

const formLabelMessage = document.createElement("label");
formLabelMessage.innerText = "Message:";
formaction.appendChild(formLabelMessage)


const formLabelMessageTextearea = document.createElement("textarea");
formLabelMessageTextearea.id = "message";
formLabelMessageTextearea.cols = "50";
formLabelMessageTextearea.rows = "5";
formaction.appendChild(formLabelMessageTextearea);

const formButtonSubmit = document.createElement("input");
formButtonSubmit.type = "button";
formButtonSubmit.value = "Submit";

contact=document.getElementById("contact")
contact.appendChild(contactForm);
contactForm.appendChild(formaction)
