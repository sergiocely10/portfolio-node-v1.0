const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    if (response.status === 200) {
      Swal.fire({
        title: "Message Delivered!",
        text: "Your message was sent successfully",
        icon: "success"
      })
    } else {
      Swal.fire("Message Not Delivered!")
    }
    //return response.json();
  });
};