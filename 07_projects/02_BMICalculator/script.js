const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    if(height === '' || height <= 0 || isNaN(height)) {
        result.textContent = `Please enter valid weight and height ${height}.`;
        return;
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)) {
        result.textContent = `Please enter valid weight and weight ${weight}.`;
        return;
    }
    else {
        const bmi = (weight / (height * height / 10000)).toFixed(2);
        result.textContent = `<span>Your BMI is ${bmi}</span>.`;
    }