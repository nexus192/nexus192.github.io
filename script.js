document.addEventListener('DOMContentLoaded', function () {
  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Анимация секций при скролле
  const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    });
  };

  // Инициализация анимаций
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
