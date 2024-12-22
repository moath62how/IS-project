const form = document.querySelector('.login-form');
const submitBtn = document.querySelector('#submitBtn');

if (form && submitBtn) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      window.location.href = './index.html';
    } else {
      form.reportValidity();
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

console.log('Test');

const s = document.querySelector('main');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav>ul>li>a');
navLinks[0].classList.add('active');
s.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - s.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(sectionTop, sectionHeight);

    if (s.scrollTop >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  console.log('Current section:', current);

  navLinks.forEach((link) => {
    link.classList.remove('active');
    console.log(link.getAttribute('href'), current);

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
