<a href="https://wa.me/79998935291?text=Привет!%20Хочу%20присоединиться%20к%20курсу." target="_blank" class="btn">
  🚀 Присоединяйся!
</a>

// pulse при наведении
const btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', () => {
  btn.classList.add('pulse');
});

btn.addEventListener('mouseleave', () => {
  btn.classList.remove('pulse');
});

document.querySelector('.btn').addEventListener('click', () => {
  console.log('Пользователь нажал на кнопку WhatsApp');
  // можно отправить ивент в Google Analytics, Yandex.Metrica, etc.
});

document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  const link = e.currentTarget.href;

  e.currentTarget.textContent = '⏳ Подключаюсь...';

  setTimeout(() => {
    window.open(link, '_blank');
  }, 600);
});
