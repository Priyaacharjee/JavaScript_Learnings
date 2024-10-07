const nameIs= new String('Priya Acharjee')

console.log(nameIs[0]);
console.log(nameIs.__proto__);

console.log(nameIs.toUpperCase());
console.log(nameIs.charAt(2));
console.log(nameIs.indexOf('A'));

const newString=nameIs.substring(0,4);
console.log(newString);

const anotherString=nameIs.slice(-2,4);
console.log(anotherString);

const newString1="   Priya    "
console.log(newString1);
console.log(newString1.trim());

const url="https:/hizibizi20%/new.com"

console.log(url.replace("20%","_"));

console.log(url.includes('sundar'))

console.log(url.split('/'));





