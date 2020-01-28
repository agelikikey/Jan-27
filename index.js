//let x = 'anything with quotes'

//let x = [ 1, 2, 3, true, 5, 'hello', ['t',9]]

// console.log( x[4])

// x = { 
// one: 1,
// two: 2,
// name: 'Angel',
// age: false

// }

// y = [1,2,3,4, [], {}, '']

// console.log(x.age)
// console.log( y)

//console.log(x[5] + ' ' + 'angel')

//for (let index in x) {
 // console.log( typeof index )
// } 

//for (let index of x) {
 // console.log( typeof index )
// } 

//for (let i=0; i< x.length; i++) {
//console.log(i)
//}


// let var1 = 'angel'
// let var2 = 5
// let var3 = true
// let var4 = ['a','b','c', var2]
// let var5 = {
//   'key': 'value',
//   'num': 3
// }

// if (true && true && true) {
//   console.log('true')
// }
// else {
//   console.log('false')
// }

// if (true || 1==1 || false) {
//   console.log('true')
// }
// else {
//   console.log('false')
// }

// console.log( var4[3] + 10)
// console.log( var5['num'] + var4)

// only thing that will go here is true or false.  it will only run if its true if its false it wont run. 
// if (var2 == 5) [
//   console.log('this was true')
// ]
// else {
//   console.log('it was false')
// }

// if (var1 !== 'string') [
//   console.log('this was true')
// ]
// else {
//   console.log('it was false')
// }

// if (typeof var5 === 'object') [
//   console.log('this was true')
// ]
// else {
//   console.log('it was false')
// }
// if ('4444') [
//   console.log('this was true')
// ]
// else {
//   console.log('it was false')
// }
// if ('') [
//   console.log('this was true')
// ]
// else if (0) {
//   console.log('else if true')
// }
// else if ('hello') {
//   console.log('hello')
// }
// else {
//   console.log('it was false')
// }

//console.log the string 'hello world'
// let var1 = 'Hello World'
// console.log( var1 )

// // save num 7 in a var and console.log it
// let var2 = 7
// console.log ( var2 )


// // x = 5
// let x = 5
// console.log(x)

// // create a var set it equal to x plus 10, console.log it

// let var3 = x + 10
// console.log (var3)

// // create var set it equal to 'hello', create another equal to 'world' .. cocatenate them with a space in the middle, console.log it
 
//  let var4 = 'Hello'
//  let var5 = "World"
//   console.log( var4 + ' ' + var5)

// // use x = [9,8,7,6]
// let y = [9,8,7,6]
//   console.log(y)

// // console.log num 8 from the list x
// console.log(y[1])

// // console.log num 6 from the list x
// console.log(y[3])
// // use obj = {
// //   name: 'Joe'
// //   age: 5
// // }

// z = {
//   name: 'Joe',
//   age: 5
// }

// // console.log 'Joe' from the var obj
// console.log(z.name)
// // console.log 5 from the var obj
// console.log(z.age)
// //google how to create a random number with javascript
// Math.floor (Math.random()* 4) ;
// // use that random number to get a random item from the list x used about, ask if lost
// ranNum = Math.floor(Math.random() *4)
// console.log( y[ranNum] )

name = [ 'angel', 'vicky', 'andrew', 'eloy']
lastName = ['key','eley','vazquez']


ranLastName = Math.floor (Math.random()* lastName.length) ;

for (let i=0; i<100; i++){
ranNumName = Math.floor (Math.random()* name.length) ;
ranNumLast = Math.floor (Math.random () * lastName.length)
console.log( name[ranNumName] + ' ' + lastName[ranNumLast])
}

// console.log ( name[ranNumName] + '  ' + lastName[ranLastName]); 
// console.log (lastName);
// console.log (lastName[2])