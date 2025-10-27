let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})

const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.style.display = 'block';
      form.reset();
    } else {
      status.style.display = 'block';
      status.style.color = 'red';
      status.textContent = 'Oops! Something went wrong. Please try again.';
    }
  });

  function openWhatsApp(productName, productLink) {
  const phoneNumber = "4407932597224"; // Your WhatsApp number (no + sign)
  const message = `Hey, I wanted to know more about this product — ${productName}. Here’s the link: ${productLink}`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
}