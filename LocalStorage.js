// запись данных в локальную память 

const checkbox = document.querySelector('#checkbox'),
form = document.querySelector('form'),
change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'green';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'blue';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'green';
    }
});
