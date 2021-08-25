console.log('morning loops')

// For loops
// for(statement1, statement2, statemen3) {
//     do something
// }
// 2- 
// for of
// 3-
// for in

// for(start; condition; step) {
//     loop body
// }

for (let i = 0; i < 10; i++) {
    console.log('hello world')
}

// Sum 2+2+3+...+99+100
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
    console.log(sum)
}
console.log(sum)

// Aufgabe 1
// x5 *****

for (let i = 0; i < 5; i++) {
    console.log("*****")
}

// Aufgabe 2 
// *
// ** 
// ***
// ****
// *****

let trees = ""
for (let i = 0; i < 5; i++) {
    trees += "*"
    console.log(trees)
}

// Aufgabe 3
// 5-10

for (let i = 5; i < 11; i++) {
    console.log(i)
}

for (let i = 5; i <= 10; i++) {
    console.log(i)
}
// Aufgabe 4

for (let i = 100; i >= 95; i--) {
    console.log(i)
}

// Aufgabe 5

for (let i = 0; i <= 5; i++) {

    let stars = ''
    for (let i = 0; i <= 50; i++) {
        stars = stars + '*'
    }
    console.log(stars)

}

// iterables
// arrays, string, object
// forEach => arrays
// for loop = arrays

let countries = ['France', 'Germany', 'Italy', 'Spain', 'Japan']
countries.forEach(elt => console.log(elt))

console.log('first:', countries[0])
console.log('last:', countries[countries.length - 1])

// coountries.length
for (let i = 0; i < countries.length; i++) {
    console.log(i)
    console.log(countries[i].toUpperCase())
    console.log(countries[i].charAt(0).toUpperCase() + countries[i].slice(i))
}

// FRANCE
// France
// ....

let str = 'sjksdkllsdöadmöad'
let res = ' '
for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

let newStr = ''

for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
        newStr += str[i]
    } else {
        newStr += str[i].toUpperCase()
    }
    console.log(str[i])
}

console.log(newStr)

// for of: Only Arrays and numbers
let numbers = [1, 4, 77];

for (let i of numbers) {
    console.log(i)
}

for (let i of newStr) {
    console.log(i)
}

// [10, 40, 50]
// output: 
// 20
// 80
// 100

let numbers1 = [10, 40, 50]
for (let i of numbers1) {
    console.log(i * 2)
}

//while(conditions) {
//  
//}

let i = 0
while (i < 3) {
    i = i + 1
    console.log(i)
}

let j = 0
while (j < 3) {
    console.log(i)
    j = j + 1
}

let w = 0
do {
    console.log(w)
    w = w + 1
} while (w < 5);

let counter = 0
let index = 0
function count() {
    counter++
    while (index < counter) {
        document.body.style.background = `rgb(${Math.floor(Math.random() * 255)
            }, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        index++
    }
    document.getElementById("result").innerHTML = counter
}