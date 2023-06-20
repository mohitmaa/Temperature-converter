

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert() {
    
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
  
  if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }
  


    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}


function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
} 


