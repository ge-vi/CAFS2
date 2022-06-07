// Testuosime šį masyvą
// noinspection SpellCheckingInspection

let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];


// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

const arrDoubled = arr => arr.map(value => value * 2);
// test
console.log("arrDoubled", arrDoubled(numbers));


// 2. Parašykite funkciją arrMultiplied(arr, n), kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

const arrMultiplied = (arr, mult) => arr.map(value => value * mult);
// test
console.log("arrMultiplied by 3", arrMultiplied(numbers, 3));


// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

const arrCountTwos = numbers => numbers.reduce((acc, val) => (val === 2 ? ++acc : acc), 0);
// test
console.assert(arrCountTwos(numbers) === 3, "arrCountTwos should find 3 items");


// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve.
// Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfFirst = (arr, need) => arr.indexOf(need);
// test
console.assert(arrIndexOfFirst(numbers, 11) === -1, "arrIndexOfFirst should return -1");
console.assert(arrIndexOfFirst(numbers, 5) === 0, "arrIndexOfFirst should return 0");
console.assert(arrIndexOfFirst(numbers, 7) === 2, "arrIndexOfFirst should return 2");


// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve.
// Jei skaičius nerastas funkcija turi grąžinti -1.

const arrIndexOfLast = (arr, last) => arr.lastIndexOf(last);
// test
console.assert(arrIndexOfLast(numbers, 11) === -1, "arrIndexOfLast should return -1");
console.assert(arrIndexOfLast(numbers, -4) === 13, "arrIndexOfFirst should return 13");


// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad
// pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

const reverseNumbers = numToReverse => Number(`${numToReverse}`.split("").reverse().join(""));
// test v2
console.assert(reverseNumbers(32243) === 34223, "reverseNumbers should reverse 32243 to 34223");


// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

const findMinMax = arr => `Mažiausas: ${Math.min(...arr)}, Didžiausas: ${Math.max(...arr)}`;
// test
console.assert(findMinMax([8, 5, 4, 2, 7, 1, 9]) === "Mažiausas: 1, Didžiausas: 9", "findMinMax not working as expected");


// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus:
// Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir
// antras argumentas bus raidė (kaip string).
// Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir
// gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.

const checkForLetters = (term, letter) => {
  let count = [...term].reduce((acc, value) => {
    return value === letter ? ++acc : acc;
  }, 0);
  return `Raidė ${letter} sakinyje rasta ${count} kartus`;
};
// test
// console.log(checkForLetters("Lorem ipsum dolor sit amet, consectetur adipisicing elit", "e"));
console.assert(checkForLetters("Lorem ipsum dolor sit amet, consectetur adipisicing elit", "e") === "Raidė e sakinyje rasta 5 kartus", "checkForLetters failed");


// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą.
// Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", , 10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

const findAndSortNumbers = arr => {
  return arr.filter((value) => {
    if (typeof value === "number") {
      return value;
    }
  }).sort((n1, n2) => n1 - n2);
};
// test
console.log(findAndSortNumbers(arr2));


// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų
// ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
// Pvz.: Turime masyvą: let arr1 = [2, 7, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

const checkIfAllSmaller = (arr, max) => {
  let found = true;
  for (let i = 0; arr.length > i; i++) {
    if (arr[i] <= max) {
      found = false;
      break;
    }
  }
  return found;
};
// test
console.assert(checkIfAllSmaller([2, 7, 6, 9, 5], 1) === true, "checkIfAllSmaller failed with 1");
console.assert(checkIfAllSmaller([2, 7, 6, 9, 5], 5) === false, "checkIfAllSmaller failed with 5");


// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė.
// Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai,
// kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];

const filteredByLetter = (citiesArr, letter) => {
  return citiesArr.reduce((acc, city) => {
    if (city.toUpperCase().includes(letter.toUpperCase())) {
      acc.push(city);
      return acc;
    } else {
      return acc;
    }
  }, []);
};
// test
console.log(filteredByLetter(citiesOfLithuania, "u"));

// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus:
// a) num1 - skaičius;
// b) num2 - skaičius;
// c) action - (matematinis veiksmas kaip string pvz. “substraction”).
// Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir
// kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas
// calculateValue() viduje, o aprašomos išorėje.

const addition = (num1, num2) => (isNaN(num1) || isNaN(num2)) ? false : num1 + num2;
const subtraction = (num1, num2) => (isNaN(num1) || isNaN(num2)) ? false : num1 - num2;
const multiplication = (num1, num2) => (isNaN(num1) || isNaN(num2)) ? false : num1 * num2;
const division = (num1, num2) => (isNaN(num1) || isNaN(num2) || num2 === 0) ? false : num1 / num2;

const calculateValue = (num1, num2, action) => {
  switch (action) {
    case "+":
      return addition(num1, num2);

    case "-":
      return subtraction(num1, num2);

    case "*":
      return multiplication(num1, num2);

    case "/":
      return division(num1, num2);

    default:
      return false;
  }
}
// test
console.log("sum", calculateValue(10, 5, "+"));
console.log("sum", calculateValue(10, "a", "+"));

console.log("sub", calculateValue(10, 5, "-"));
console.log("sub", calculateValue(10, "a", "-"));

console.log("mul", calculateValue(10, 5, "*"));
console.log("mul", calculateValue(10, "a", "*"));

console.log("div", calculateValue(10, 5, "/"));
console.log("div", calculateValue(10, 0, "/"));
console.log("div", calculateValue(10, "a", "/"));
