const contactForm = document.createElement("div");
contactForm.id = "contactForm";

const contactFormImg = document.createElement("img");
contactFormImg.src = "Capture.PNG";
contactForm.appendChild(contactFormImg);

const formaction = document.createElement("form");

const formH1 = document.createElement("h1");
formaction.appendChild(formH1);

const nameDiv = document.createElement("div");
formaction.appendChild(nameDiv);

const nameDivlabel = document.createElement("div");
nameDiv.appendChild(nameDivlabel);

const formLabel = document.createElement("label");
formLabel.innerText = "Name:";
nameDivlabel.appendChild(formLabel);

const nameDivInput = document.createElement("div");
nameDiv.appendChild(nameDivInput);

const formInput = document.createElement("input");
formInput.type = "text";
formInput.id = "name";
nameDivInput.appendChild(formInput);

const emailDiv = document.createElement("div");
formaction.appendChild(emailDiv);

const emailDivlabel = document.createElement("div");
nameDiv.appendChild(emailDivlabel);

// const formInputBr = document.createElement("br");
// formaction.appendChild(formInputBr);

// const formInputBr1 = document.createElement("br");
// formaction.appendChild(formInputBr1);

const formLabelEmail = document.createElement("label");
formLabelEmail.innerText = "E-mail:";
emailDivlabel.appendChild(formLabelEmail);

const emailDivInput = document.createElement("div");
emailDiv.appendChild(emailDivInput);

const formLabelEmailInput = document.createElement("input");
formLabelEmailInput.type = "text";
formLabelEmailInput.id = "email";
emailDivInput.appendChild(formLabelEmailInput);

const messageDiv = document.createElement("div");
formaction.appendChild(messageDiv);

const messageDivlabel = document.createElement("div");
messageDiv.appendChild(messageDivlabel);

const formLabelMessage = document.createElement("label");
formLabelMessage.innerText = "Message:";
messageDivlabel.appendChild(formLabelMessage);

const textareDivInput = document.createElement("div");
messageDiv.appendChild(textareDivInput);

const formLabelMessageTextearea = document.createElement("textarea");
formLabelMessageTextearea.id = "message";
formLabelMessageTextearea.cols = "50";
formLabelMessageTextearea.rows = "5";
textareDivInput.appendChild(formLabelMessageTextearea);

const submitDivInput = document.createElement("div");
formaction.appendChild(submitDivInput);

const formButtonSubmit = document.createElement("input");
formButtonSubmit.type = "button";
formButtonSubmit.value = "Submit";

submitDivInput.appendChild(formButtonSubmit);

contact = document.getElementById("contact");
contact.appendChild(contactForm);
contactForm.appendChild(formaction);
