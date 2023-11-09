document.addEventListener('DOMContentLoaded', function() {
    const temperatureInput = document.getElementById('temperatureInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertButton = document.getElementById('convertButton');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function() {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;
        let convertedTemperature;
        
        if (isNaN(temperature)) {
            result.textContent = 'Please enter a valid number.';
            return;
        }

        if (unit === 'celsius') {
            convertedTemperature = convertToCelsius(temperature);
            result.textContent = `Converted Temperature: ${convertedTemperature} °C`;
        } else if (unit === 'fahrenheit') {
            convertedTemperature = convertToFahrenheit(temperature);
            result.textContent = `Converted Temperature: ${convertedTemperature} °F`;
        } else if (unit === 'kelvin') {
            convertedTemperature = convertToKelvin(temperature);
            result.textContent = `Converted Temperature: ${convertedTemperature} K`;
        }
    });

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    function convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function convertToKelvin(celsius) {
        return celsius + 273.15;
    }
});
