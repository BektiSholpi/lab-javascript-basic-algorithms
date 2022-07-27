// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops
// Iteration 1: Names and Input
//

let hacker1 = "JoseMaria";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "JuanCarlo";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

let counthacker1 = hacker1.length;
let counthacker2 = hacker2.length;
if (counthacker1 > counthacker2){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (counthacker2 > counthacker1){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)

}


// Iteration 3: Loops

let string = hacker1.split("").join(" ").toUpperCase();
console.log(string);


let reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverse += hacker2[i]
}
console.log(reverse);



let name1 = hacker1.toUpperCase();
let name2 = hacker2.toUpperCase();
if (name1 < name2) {
    console.log(`The driver's name goes first.`)
} else if (name1 > name2) {
    console.log(`Yo, the navigator goes first definitely.`)
} else if (name1 === name2) {
    console.log(` What?! You both have the same name?`)
}








