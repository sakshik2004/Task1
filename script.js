document.getElementById('convertBtn').addEventListener('click', () => {
  const temperatureInput = document.getElementById('temperatureInput').value.trim();
  const unit = document.getElementById('unitSelect').value;
  const resultDiv = document.getElementById('result');

  // Clear previous result
  resultDiv.textContent = "";

  // Validate input
  if (temperatureInput === "" || isNaN(temperatureInput)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
  }

  const temperature = parseFloat(temperatureInput);
  let result;

  // Perform the conversion based on the selected unit
  switch (unit) {
      case 'Celsius':
          const toFahrenheit = (temperature * 9 / 5 + 32).toFixed(2);
          const toKelvin = (temperature + 273.15).toFixed(2);
          result = `Fahrenheit: ${toFahrenheit}°F | Kelvin: ${toKelvin}K`;
          break;

      case 'Fahrenheit':
          const toCelsius = ((temperature - 32) * 5 / 9).toFixed(2);
          const toKelvinFromF = (((temperature - 32) * 5 / 9) + 273.15).toFixed(2);
          result = `Celsius: ${toCelsius}°C | Kelvin: ${toKelvinFromF}K`;
          break;

      case 'Kelvin':
          const toCelsiusFromK = (temperature - 273.15).toFixed(2);
          const toFahrenheitFromK = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
          result = `Celsius: ${toCelsiusFromK}°C | Fahrenheit: ${toFahrenheitFromK}°F`;
          break;

      default:
          result = "Invalid unit selected.";
  }

  // Display the result
  resultDiv.textContent = result;
});
