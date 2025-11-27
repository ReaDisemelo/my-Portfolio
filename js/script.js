document.addEventListener("DOMContentLoaded", () => {
  // ✅ Your actual EmailJS Public Key
  emailjs.init("elZBHy1RCBoZ57hbk");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // ✅ Using your Service ID and Template ID
      emailjs.sendForm("service_pha7nop", "template_emkgy5v", form)
        .then(() => {
          alert("✅ Message sent successfully! I'll get back to you soon.");
          form.reset();
        })
        .catch((error) => {
          alert("❌ Failed to send message: " + JSON.stringify(error));
        });
    });
  }
});