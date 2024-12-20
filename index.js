const UpBtn = document.querySelector('#upButton');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);

    if (window.scrollY >= 500) {
        UpBtn.style.display = 'block';
    } else {
        UpBtn.style.display = 'none';
    }
})

UpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})