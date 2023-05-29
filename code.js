// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
// Prompt the user for input
let temperature = parseFloat(prompt("Enter the temperature:"));
let conversionType = prompt(
  "Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)"
);

if (conversionType.toLowerCase() === "celsius to fahrenheit") {
  let result = celsiusToFahrenheit(temperature);
  alert(result + " °F");
} else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
  let result = fahrenheitToCelsius(temperature);
  alert(result + " °C");
} else {
  alert("Invalid conversion type.");
}
