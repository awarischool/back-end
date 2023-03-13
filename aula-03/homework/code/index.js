const btnCalculate = document.getElementById('btnCalculate');
const result = document.getElementById('result');

btnCalculate.addEventListener('click', (e) => {
    e.preventDefault();

    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;

    result.innerHTML = Number(firstNumber)+Number(secondNumber);
})