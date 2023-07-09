/*Methods:
1. Array Prototype Filter
Metode ini digunakan untuk membuat array baru dengan elemen-elemen dari array yang memenuhi kondisi tertentu.*/
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

/*2. Array Prototype reduce
Metode ini digunakan untuk mengurangi elemen-elemen array menjadi satu nilai dengan menerapkan fungsi pada setiap elemen.*/
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // Output: 15

/*3. Array Prototype Find
Metode ini digunakan untuk mencari elemen pertama dalam array yang memenuhi kondisi tertentu.*/
const foundNumber = numbers.find(number => number > 3);
console.log(foundNumber); // Output: 4

/*4. Array Prototype Find Index
Metode ini digunakan untuk mencari indeks pertama dalam array di mana elemen memenuhi kondisi tertentu.*/
const index = numbers.findIndex(number => number === 3);
console.log(index); // Output: 2

/*5. Array Protoype Some
Metode ini digunakan untuk memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi tertentu.*/
const hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber); // Output: true

/*6. Array Prototype Every
Metode ini digunakan untuk memeriksa apakah semua elemen dalam array memenuhi kondisi tertentu.*/
const allPositive = numbers.every(number => number > 0);
console.log(allPositive); // Output: true

/*7. Array Prototype Include
Metode ini digunakan untuk memeriksa apakah array berisi elemen tertentu.*/
const includesNumber = numbers.includes(3);
console.log(includesNumber); // Output: true

/*8. String prototype to Upper Case
Metode ini digunakan untuk mengubah semua karakter dalam string menjadi huruf besar.*/
const message = "Hello, World!";
const upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage); // Output: "HELLO, WORLD!"

/*9. String Prototype to lower case
Metode ini digunakan untuk mengubah semua karakter dalam string menjadi huruf kecil.*/
const lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage); // Output: "hello, world!"

/*10. Math Random
Metode ini digunakan untuk menghasilkan bilangan acak antara 0 (inklusif) dan 1 (eksklusif).*/
const randomNum = Math.random();
console.log(randomNum); // Output: a random number between 0 and 1