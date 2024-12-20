const UpBtn = document.querySelector('#upButton');

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