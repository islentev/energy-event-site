const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const leadForm = document.getElementById('lead-form');
if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    leadForm.reset();
  });
}
