const UpBtn = document.querySelector('#upButton');

if (UpBtn) {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);

        if (window.scrollY >= 500) {
            UpBtn.classList.remove('hidden');
        } else {
            UpBtn.classList.add('hidden');
        }
    })

    UpBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}

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