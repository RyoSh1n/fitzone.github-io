const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

const pricingButtons = document.querySelectorAll('.pricing-plan button');
pricingButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Ваше сообщение отправлено!'); // Здесь можно добавить логику отправки
});

const buttons = document.querySelectorAll('.pricing-plan button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Спасибо за ваш выбор!'); // Заменить на модальное окно
    });
});
