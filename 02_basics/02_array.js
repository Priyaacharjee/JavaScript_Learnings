const heroes=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//heroes.push(dc_heros)

//console.log(heroes);

// const allheros=heroes.concat(dc_heros)
// console.log(allheros);

const all_new_heros=[...heroes,...dc_heros]

//console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[8,9,[4,5]]]

const another1_array=another_array.flat(Infinity)
//console.log(another1_array);

console.log(Array.isArray("Priya"))
console.log(Array.from("Priya")) //forms array
console.log(Array.from({name:"Priya"})); //gives an empty array

let score1=100
let score2=200

console.log(Array.of(score1,score2));





