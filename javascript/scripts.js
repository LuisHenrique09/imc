function calculate(){
var height = document.getElementById("height").value
var weight = document.getElementById("weight").value

var imc = weight / height ** 2;
if (imc < 18.5) {
    window.alert("Você está abaixo do peso");

}else if (imc < 24.9) {
    window.alert("Você está normal");

}else if (imc < 29.9) {
    window.alert ("Você está com sobrepeso");

}else if (imc < 39.9) {
    window.alert ("Você está com obesidade");

}else if (imc > 39.9) {
    window.alert ("Você está com obesidade morbida");

}
}