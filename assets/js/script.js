// Variablen bestimmen

let max = document.getElementById("maxZahl");
let num1 = document.getElementById("ersteZahl");
let num2 = document.getElementById("zweiteZahl");
let arrayAusgabe = document.getElementById("arrayAusgabe");
let ausgabe = document.getElementById("ausgabe");
let numArray = [];
let summe = 0;

function berechne() {
	if (max.value === "") {
		alert("Eingabefeld darf nicht leer bleiben");
		return;
	}
	if (num1.value === num2.value) {
		alert("Erste und Zweite Zahl dürfen nicht identisch sein");
		return;
	}
	for (let c = 1; c <= max.value; c++) {
		if (c % num1.value == 0 || c % num2.value == 0) {
			numArray.push(c);
		}
	}
	// for (let i = 0; i > numArray.length; i++) {
	// 	summe += numArray[i];
	// }

	// Es werden immer alle neuen Arrays mit einander addiert bzw erstellt und dann addiert
	numArray.map((num) => {
		summe += num;
	});
	console.log(numArray);
	arrayAusgabe.innerHTML = numArray.join(" + ") + " = ";
	ausgabe.innerHTML = summe;
	numArray = [];
	summe = 0;
	// let sumArray = numArray.join("+");
}
// Wie mach ich das am besten???
// function reset() {
// 	ausgabe = "";
// 	summe = 0;
// 	max = 0;
// 	num1 = 0;
// 	num2 = 0;
// }
