//level 1

//1

let firstName = 'Ankit'
console.log(firstName)
console.log(typeof firstName)

let lastName = 'Singh'
console.log(lastName)
console.log(typeof lastName)

let country = 'India'
console.log(country)
console.log(typeof country)

let city = 'Kanpur'
console.log(city)
console.log(typeof city)

let age = 20
console.log(age)
console.log(typeof age)

let  marital_status= 'unmarried'
console.log(marital_status)
console.log(typeof marital_status)

let year = 2024
console.log(year)
console.log(typeof year)

//2
let num1 = '10'
let num2 = 10
console.log(typeof num1 == typeof num2) //false

//3
let num3 = parseInt(9.8)
let num4 = 10
console.log(num3 == num4) //false

//4 

//true
console.log(4 > 3)
console.log(0 == '') 
console.log(0 == false)
//false
console.log(5 < 3)
console.log(0 === '')
console.log(3 != 3) 

//5

let check = 4 > 3
console.log(check)

check = 4 >= 3
console.log(check)

check = 4 < 3
console.log(check)

check = 4 == 4
console.log(check)

check = 4 === 4
console.log(check)

check = (4 != 4)
console.log(check)

check = 4 !== 4
console.log(check)

check = 4 != '4'
console.log(check)

check = 4 == '4'
console.log(check)

check = 4 === '4'
console.log(check)

//6 

check = 4 > 3 && 10 < 12
console.log(check)

check = 4 > 3 && 10 > 12
console.log(check)

check = 4 > 3 || 10 < 12
console.log(check)

check = 4 > 3 || 10 > 12
console.log(check)

check =  !(4 > 3)
console.log(check)

check = !(4 < 3)
console.log(check)

check = !(false)
console.log(check)

check =  !(4 > 3 && 10 < 12)
console.log(check)

check =  !(4 > 3 && 10 > 12)
console.log(check)

check =  !(4 === '4')
console.log(check)

let word1 = 'dragon'
let word2 = 'python'
console.log(word1.includes('on') == word2.includes('on'))

//7

let now = new Date()
let year1 = now.getFullYear()
console.log(year1)

let month = now.getMonth()
console.log(month)

let date = now.getDate()
console.log(date)

let day = now.getDay()
console.log(day)

let hours = now.getHours()
console.log(hours)

let minutes = now.getMinutes()
console.log(minutes)

let allseconds = Date.now()
console.log(allseconds)

//level-2

//1
//let base = prompt("enter the base of tringle :")
//let height = prompt("enter the height of tringle :")
//let area = 0.5*base*height
//console.log(`The area of tringle is ${area}`)

// //2
// let side_a = parseInt(prompt("enter the side a of tringle :"))
// let side_b = parseInt(prompt("enter the side b of tringle :"))
// let side_c = parseInt(prompt("enter the side c of tringle :"))
// let parimeter = side_a+side_b+side_c
// console.log(`The parimeter of tringle is ${side_a+side_b+side_c}`)

//3
// let length = parseInt(prompt("enter the length of rectangle :"))
// let width = parseInt(prompt("enter the length of rectangle :"))

// let area_rect = length * width
// console.log(`The area of rectangle is ${area_rect}`)

// let para_rect = 2 * (length+width)
// console.log(`The parimeter of rectangle is ${para_rect}`)

//4
// let radius = parseInt(prompt("enter the radius of circle :"))
// let pi =3.14
// area_circle = pi*(radius**2)
// console.log(`The area of circle is ${area_circle}`)
// pari_circle = 2*pi*radius
// console.log(`The parimeter of circle is ${pari_circle}`)

//5  Calculate the slope, x-intercept and y-intercept of y = 2x -2

// let slope_x = prompt("enter the slope x :")
// let slope_y = 2*slope_x -2
// console.log(`The slope  is ${slope_y}`)

//6 Slope is m = (y2-y1)/(x2-x1). Ind the slope between point (2, 2) and point(6,10)

let x1 =2 
let y1 = 2
let x2 = 6
let y2 = 10
let m = (y2-y1)/(x2-x1)
console.log(`The slope m is ${m}`)

//7  Compare the slope of above two questions.

//9 Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    //Enter hours: 40 
    //Enter rate per hour: 28 
    //Your weekly earning is 1120

// let working_hours = parseInt(prompt("enter the hours :"))
// let rate_per_hour = 28
// pay_person = working_hours*rate_per_hour
// console.log(`Pay person is ${pay_person}`)

//10  If the length of your name is greater than 7 say, your name is long else say your name is short.

// length_name = prompt("enter your name :")
// length = length_name.length
// length > 7 
//     ? console.log("your name is long")
//     : console.log("your name is short")

//11 Compare your first name length and your family name length and you should get this output.

firstName = 'shubhankar'
let familyname = 'Nikhil'
firstName > familyname 
    ? console.log( `Your first name, ${firstName} is longer than your family name, ${familyname}`)
    : console.log( `Your family name, ${familyname} is longer than your first name, ${firstName}`)

//12

let myAge = 20
let yourage = 17
console.log(`I am ${myAge-yourage} years older than you`)

//13 
// let birth_year = prompt("Enter the birth year :")
// const now1 = new Date()
// let agee = now1.getFullYear() - birth_year
// agee >= 18
//     ? console.log( `You are ${agee} You are old enough to drive`)
//     : console.log(`you are ${agee}. you will be allowed to derive after ${18-agee} years.`)

//14

let now3 = new Date()
let current_year = now.getFullYear()
let current_month = now.getMonth()
let current_date = now.getDate()
let current_hour = String(now.getHours())
let current_minute = String(now.getMinutes())
console.log(`${current_year}-${current_month}-${current_date} ${current_hour}:${current_minute}`)
console.log(`${current_date}-${current_month}-${current_year} ${current_hour}:${current_minute}`)
console.log(`${current_date}/${current_month}/${current_year} ${current_hour}:${current_minute}`)

//level-3

let now4 = new Date()
let current_year1 = now.getFullYear()
let current_month1 = String(now.getMonth()).padStart(2, '0')
let current_date1 = String(now.getDate()).padStart(2, '0')
let current_hour1 = String(now.getHours()).padStart(2, '0')
let current_minute1 = String(now.getMinutes()).padStart(2, '0')
console.log(`${current_date1}-${current_month1}-${current_year1} ${current_hour1}:${current_minute1}`)
