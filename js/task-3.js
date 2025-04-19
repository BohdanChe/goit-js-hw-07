

const inEl = document.querySelector('#name-input');
const outEl = document.querySelector('#name-output');

inEl.addEventListener('input', () => { 
    const trimValue = inEl.value.trim();
    outEl.textContent = trimValue === '' ? 'Anonymous' : trimValue;
});