const btnContrast = document.querySelector('#altocontraste');
const body = document.body;


btnContrast.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(btnContrast);
    body.classList.toggle('contrast');
});