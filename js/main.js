/*
JAK NAZYWAĆ ZMIENNE:

1. nie zaczynam od 1,2,4 i od DuZyCh LiTer

2. długie słowa piszeTakLub_tak nie używam . - 

3. tylko po angelisku

4. const myBoxX to nie myBoxx
*/

// const x = 3
// const y = 990
// const color = 'blue'
// const newColor = 'blue'
// const promo = '23%'

// if (x > y) {
// 	console.log(`${x} is greater that ${y}`)
// } else if(x < y){
//     console.log(`${x} is smaller that ${y}`);
// } else {
//     console.log(`are equal`);
// }

// if(color == newColor){
//     console.log(`are equal`);
// } else{
//     console.log(`are not equal`);
// }

// switch (promo){
//     case '10%':
//     case '20%':
//     case '30%':
//         console.log(`Only today promotion is ${promo}!`);
//         break;
//     default:
//         console.log(`promotion is ${promo}.`);
// }

// let text

// if (x >= 100) {
//    text = (`X is greater`);
// } else if(x < 100 && x > 30){
//    text = (`X is medium large`);
// } else {
//    text = (`X is small`);
// }

// console.log(text.toUpperCase());

// // M tak optymalizuję kod

// const array = ['implicit', 'explicit', 'frank', 'retrive', 'caveat']

// for (let i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// M znak < > ma duże znaczenie bo wływa na cały kod

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (const number of array){
//     console.log(number.toUpperCase());
// }

// let i = 0
// while (i < array.length) {
// 	console.log(array[i])
// 	i++
// }

// do {
// 	console.log(array[i])
// 	i++
// } while (i < array.length)

// const numbers = [1, 2, 3, 4, 5]
// const drinks = ['water', 'beverages']
// const meals = ['steak', 'beef']
// const menu = drinks.concat(meals)
// const menu2 = [...drinks, ...meals]

// console.log(...drinks)
// console.log(...meals)
// console.log(menu)
// console.log(menu2)

// function multiply(x){
//     return x*2
// }

// const multiplitedNum = numbers.map(multiply)
// console.log(multiplitedNum);

// const numbers = [1,5,13,26,48]

// function times2 (number){
//     return number * 5;
// }

// const newNumbers = numbers.map(number => number * 2)
// console.log(newNumbers);

// // check the evenness x % 2 === 0 forEach
// // clg every element of newNumbers
// // add if

// function checkNumEvenOdd(number){
//     if(number % 2 === 0){
// console.log(`number is even: ${number}`)
//     } else {
//         console.log(`number is odd: ${number}`)
//     }
// }

// newNumbers.forEach(checkNumEvenOdd)

//

// const myNameLogFunction = name => console.log(name)
// const numAdd = (num1, num2) => console.log(num1 + num2)
// myNameLogFunction('lisa')
// numAdd(1, 2)

// const numMultiply = (num1, num2) => {
// 	console.log(`cześć`)
// 	return num1 * num2
// }
// console.log(numMultiply(3, 5))

// const days = ['pon', 'wt', 'sr']
// const daysLog = days.forEach(day => console.log(day))
// const daysLog2 = days.forEach(item => console.log(item))
// const newUser = (name = 'Dear customer', email = 'your e-mail') => {
// 	console.log(`${name} this is your email: "${email}"`)
// }
// newUser('Klaudia', '12@gmail.com')

// console.log('-----');
// const names = ['k','l','d']

// const logNames = name => console.log(name.toUpperCase());

// names.forEach(el => console.log(el.toUpperCase()))
// names.forEach(logNames)

// let score
// const add = (num1, num2) => {
// 	score = num1 + num2
// 	if (score % 2 === 0) {
// 		console.log(`${score} is even`)
// 	} else {
// 		console.log(`${score} is odd`)
// 	}
// }

// add(593, 6)

// const farenheit = celsius => {
// 	const temp = celsius * 1.8 + 32
// 	console.log(`${celsius}'C = ${temp}'F`)
// }
// farenheit(0)

// const num = 10
// const numbers = []

// for (let i = 0; i < num; i++) {
// 	numbers.push(i)
// }
// console.log(numbers)

// const checkDevidedBy3 = num => {
// 	if (num % 3 === 0 && num !== 0) {
// 		console.log(`${num} is devides by 3.`)
// 	} else if (num !== 0) {
// 		console.log(`${num} is NOT devides by 3.`)
// 	} else {
// 		console.log(`${num} = 0`)
// 	}
// }
// checkDevidedBy3(9)

// let score2

// const add2 = (x, y) => {
// 	score2 = x + y
// 	if (score2 % 2 === 0) {
// 		console.log(`${score2} is even`)
// 	} else {
// 		console.log(`${score2} is odd`)
// 	}
// }
// add2(345, 21314)
// const numAdd = (num1 = 1, num2 = 2) => {
// 	const num3 = 3
// 	return num1 + num2
// }
// console.log(numAdd(4, 5))

// console.log('____')

// const arr = [1, 2, 3, 4]

// const time2 = num => {
// 	console.log(num * 2)
// }
// // arr.forEach(el => console.log(el * 2))
// arr.forEach(time2)

// console.log(`_____________________________-`)

// const num2 = 10
// const numbers2 = []

// for (let i = 0; i < num2; i++) {
// 	numbers2.push(i)
// }

// const chechDevidedBy3 = numToDevide => {
// 	if (numToDevide === 0) {
// 		console.log(`${numToDevide} = 0`)
// 	} else if (numToDevide % 3 !== 0) {
// 		console.log(`${numToDevide} not`)
// 	} else {
// 		console.log(`${numToDevide} is devided`)
// 	}
// }

// numbers2.forEach(chechDevidedBy3)

// const btns = document.querySelectorAll('.btn')

// const dblclick = () => {
//     console.log(`doubled clicked`);
// }

// btns.forEach(btn => btn.addEventListener('dblclick', dblclick))

// const text = document.querySelector('p')

// const event = (e) => {
//     e.stopPropagation
//     console.log(e.target.classList);
// }

// text.addEventListener('click', event)

// const newUl = document.createElement('ul')
// document.body.append(newUl)
// let newLi

// for (let i = 1; i < 11; i++) {
// 	newLi = document.createElement('li')
// 	newLi.textContent = i
// 	newUl.append(newLi)
// }

// const lastLi = document.querySelector('li:last-child')
// lastLi.style.backgroundColor = "blue"
// lastLi.style.padding = '20px 40px'
// lastLi.textContent = "I'm last"
// lastLi.classList.add('li--blue')

// const wrapper = document.querySelector('[data-text="shed a tear"]')
// const btn1 = document.querySelector('[data-btn-number="1"]')
// wrapper.setAttribute('data-num-two', '123')
// console.log(btn1.dataset.btnNumber);

// const img = document.querySelector('img')
// // console.log(img.closest('.wrapper'));
// // closest działa tylko w górę
// img.setAttribute('scr', './img/img1.png')
// img.setAttribute('alt', 'Photograf of tear')

// const delayed = timeForDelay => {
// 	console.log('anyone')
// }
// setTimeout(delayed, 10000)
// setInterval(delayed, 2000)

// const wrapper = document.querySelector('.wrapper')
// const liItems = document.querySelectorAll('.wrapper li')
// let num =1

// for(liItem of liItems){
// 	liItem.dataset.id = num
// 	// M dataset po .
// 	liItem.textContent = num
// 	num++
// }

// for (let i =0; i < liItems.length; i++) {
// 	liItems[i].textContent = i+1
// 	liItems[i].setAttribute('data-id', i+1)
// 	console.log(liItems[i].getAttribute('data-id'))
// }

// const liItemNum3 = document.querySelector('[data-id="3"]')
// console.log(liItemNum3.parentElement.parentElement);
// console.log(liItemNum3.closest('.wrapper'));

// nadaj clase hide na item1 i fas-rotate na icone w środku po naciśnięciu btn

// const btnPlus = document.querySelector('.sizeUp')
// const btnMinus = document.querySelector('.sizeDown')
// const btnColor = document.querySelector('.color')
// const text = document.querySelector('.text p')
// let fontSize = 36
// const sizeUp = () => {
// 	fontSize++
// 	text.style.fontSize = fontSize + 'px'
// }
// const sizeDown = () => {
// 	if (fontSize < 30) return
// 	fontSize--
// 	text.style.fontSize = fontSize + 'px'
// }
// // M  -  return po if koniec działania
// const changeTextColor = () => {
// 	const r = Math.floor(Math.random() * 255)
// 	const g = Math.floor(Math.random() * 255)
// 	const b = Math.floor(Math.random() * 255)

// 	text.style.color = `(${r},${b},${g})`
// }

// btnPlus.addEventListener('click', sizeUp)
// btnMinus.addEventListener('click', sizeDown)
// btnColor.addEventListener('click', changeTextColor)

// ------------ ZAD 3
// const pass = document.querySelector('#password')
// const p = document.querySelector('.passinfo')
// const letters = /[a-z]/i
// const numbers = /[0-9]/
// const special = /[!@#$%^&*()]/
// const minValue = 10

// const showMsg = () => {
// 	if (pass.value.length === 0) {
// 		p.style.color = ''
// 		p.textContent = 'Nie podałeś hasła...'
// 	} else if (
// 		pass.value.length > minValue &&
// 		pass.value.match(letters) &&
// 		pass.value.match(numbers) &&
// 		pass.value.match(special)
// 	) {
// 		p.textContent = 'bardzo bodre'
// 		p.style.color = 'lime'
// 	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
// 		p.style.color = 'gold'
// 		p.textContent = 'ok'
// 	} else {
// 		p.style.color = 'red'
// 		p.textContent = 'bad'
// 	}
// }

// pass.addEventListener('keyup', showMsg)

// -------------- ZAD 4

// const inputConverter = document.querySelector('#converter')
// const oneCToF = document.querySelector('.one')
// const twoFToC = document.querySelector('.two')
// const result = document.querySelector('.result')
// const btnConvert = document.querySelector('.conv')
// const btnReset = document.querySelector('.reset')
// const btnChange = document.querySelector('.change')
// let farenheit
// let celsius

// const convertChange = () => {
// 	if (oneCToF.textContent.includes('°C')) {
// 		oneCToF.textContent = '°F'
// 		twoFToC.textContent = '°C'
// 	} else if (oneCToF.textContent === '°F') {
// 		oneCToF.textContent = '°C'
// 		twoFToC.textContent = '°F'
// 	}
// }

// const convert = () => {
// 	if (oneCToF.textContent.includes('C')) {
// 		farenheit = (inputConverter.value * 1.8 + 32)
// 		celsius = inputConverter.value
// 		result.textContent = `${celsius}C to ${farenheit.toFixed(1)}F`
// 		inputConverter.value = ''
// 	} else {
// 		celsius = (inputConverter.value - 32) / 1.8
// 		farenheit = inputConverter.value
// 		result.textContent = `${farenheit}F to ${celsius.toFixed(1)}C`
// 		inputConverter.value = ''
// 	}
// }

// // M nie pisz textContent z style

// const convertReset = () => {
// 	inputConverter.value = ''
// 	result.textContent = ''
// }

// btnConvert.addEventListener('click', convert)
// btnReset.addEventListener('click', convertReset)
// btnChange.addEventListener('click', convertChange)

// const burgerBtn = document.querySelector('.burger')
// const iconX = document.querySelector('.fa-times')
// const iconBars = document.querySelector('.fa-bars')
// const menuToshow = document.querySelector('.nav ul')


// const showMenu = () => {
// 	menuToshow.classList.toggle('active')
// 	burgerBtn.classList.toggle('active')
// 	iconBars.classList.toggle('hide')
// 	iconX.classList.toggle('hide')
// }

// burgerBtn.addEventListener('click', showMenu)



// const day = new Date()
// const currentDay = day.toLocaleString('pl', {weekday: 'short'})

const ar = [1,2,41,24,12,'sd',1]

const showFunFact = () => {	
	const num= Math.floor(Math.random()*(ar.length-1))	
	const text= ar[num]
	console.log(text);
}

showFunFact()