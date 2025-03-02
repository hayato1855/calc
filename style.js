const buttonContainer = document.getElementById('buttonContainer');

const buttons = [
    'C', '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '=', '+'
];

buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button;
    btn.classList.add(button === 'C' ? 'btn' : 'btn');
    btn.classList.add(button === '=' ? 'equals' : button === '/' || button === '*' || button === '-' || button === '+' ? 'operator' : '');
    
    btn.addEventListener('click', () => handleButtonClick(button));
    buttonContainer.appendChild(btn);
});

function handleButtonClick(value) {
    const resultField = document.getElementById('result');
    
    if (value === 'C') {
        resultField.value = '';
    } else if (value === '=') {
        try {
            resultField.value = eval(resultField.value);
        } catch {
            resultField.value = 'エラー';
        }
    } else {
        resultField.value += value;
    }
}
