// noinspection SpellCheckingInspection

"use strict";

/*
Pabandykime atlikti 5 masyvo (Array) operacijas.

1 Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
2 Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
3 Viduryje esančią reikšmę pakeiskite „Classics“.
4 Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
5 Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.

Rezultatai:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Jazz
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

const styles = [
  "Jazz",
  "Blues"
];
console.assert(styles.toString() === "Jazz,Blues", "1");

styles.push("Rock-n-Roll")
console.assert(styles.toString() === "Jazz,Blues,Rock-n-Roll", "2");

styles[Math.floor(styles.length / 2)] = "Classics";
console.assert(styles.toString() === "Jazz,Classics,Rock-n-Roll", "3");

const first = styles.shift();
console.assert(first === "Jazz", "4");

console.assert(styles.toString() === "Classics,Rock-n-Roll", "5");

styles.unshift("Rap", "Reggae");
console.assert(styles.toString() === "Rap,Reggae,Classics,Rock-n-Roll", "6");
