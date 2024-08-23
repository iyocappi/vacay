function sendMail(event) {
  event.preventDefault();

  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    field: document.getElementById("field").value,
    start: document.getElementById("start").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_7mctdci", "template_hq23dy2", parms).then(() => {
    alert("Message Sent! We will contact you soon.");
    document.getElementById("contactForm").reset();
  });
}

function sendContact(event) {
  event.preventDefault();
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_7mctdci", "template_hrz6vyf", parms).then(() => {
    alert("Message Sent! We will contact you soon.");
    document.getElementById("contactForm").reset();
  });
}
