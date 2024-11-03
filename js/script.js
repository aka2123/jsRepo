// // , errorInfo, addBtn, ulList, newTodo
// let todoInput
// let errorInfo
// let addBtn
// let ulList
// let newTodo
// //
// let toolsDiv
// let toolsBtnComplete
// let toolsBtnEdit
// let toolsBtnDelete
// let iconCheck
// let iconX

// let popup
// let popupInfo
// let popupToEdit
// let popupInput
// let popupAddBtn
// let popupCloseBtn

// const main = () => {
// 	prepareDOMEvents()
// 	prepareDOMElements()
// }

// const prepareDOMElements = () => {
// 	todoInput = document.querySelector('.todo-input')
// 	errorInfo = document.querySelector('.error-info')
// 	addBtn = document.querySelector('.btn-add')
// 	ulList = document.querySelector('.todolist ul')
// 	popup = document.querySelector('.popup')
// 	popupInput = document.querySelector('.popup-input')
// 	popupInfo = document.querySelector('.popup-info')
// 	popupAddBtn = document.querySelector('.accect')
// 	popupCloseBtn = document.querySelector('.cancel')
// }

// const prepareDOMEvents = () => {
// 	addBtn.addEventListener('click', addNewTodo)
// 	ulList.addEventListener('click', checkClick)
// 	popupCloseBtn.addEventListener('click', closePopup)
// 	popupInput.addEventListener('keyup', keyEnterTodoInput)
// }

// const addNewTodo = () => {
// 	if (todoInput.value !== '') {
// 		newTodo = document.createElement('li')
// 		newTodo.textContent = todoInput.value
// 		createToolsDiv()
// 		ulList.append(newTodo)
// 		errorInfo.textContent = ''
// 		todoInput.value = ''
// 	} else {
// 		errorInfo.textContent = 'Wpisz treść zadania!'
// 	}
// }

// const createToolsDiv = () => {
// 	toolsDiv = document.createElement('div')
// 	toolsBtnComplete = document.createElement('button')
// 	toolsBtnEdit = document.createElement('button')
// 	toolsBtnDelete = document.createElement('button')
// 	iconCheck = document.createElement('i')
// 	iconX = document.createElement('i')

// 	newTodo.append(toolsDiv)
// 	// M - gdy mam let to zmienne są dostępne wszedzie
// 	// M - gdy mam const to zmienne nie są dostępne lokalnie - tak jak się nauczyłem
// 	toolsDiv.classList.add('tools')
// 	toolsBtnComplete.classList.add('complete')
// 	toolsBtnEdit.classList.add('edit')
// 	toolsBtnDelete.classList.add('delete')
// 	iconCheck.classList.add('fas fa-check')
// 	iconX.classList.add('fas fa-times')
// 	// M - sposób - innerHTML
// 	toolsDiv.append(toolsBtnComplete, toolsBtnEdit, toolsBtnDelete)
// 	toolsBtnComplete.append(iconCheck)
// 	toolsBtnDelete.append(iconX)
// 	toolsBtnEdit.textContent = 'EDIT'
// }

// const checkClick = e => {
// 	const target = e.target
// 	if (e.target.matches('complete')) {
// 		e.target.closest('li').classList.toggle('completed')
// 	} else if (target.mathces('edit')) {

// 		editTodo(e)
// 	} else if (target.mathces('delete')) {
// 		deleteTodo()
// 	}
// }

// const closePopup = () => {
// 	popupInfo.textContent = ''
// 	popup.style.display = 'none'
// }

// const editTodo = e => {
// 	popup.style.display = 'flex'
// 	const todoTaskText = e.target.closest('li').firstChild.textContent
// 	popupInput.value = todoTaskText
// }

// const changeTodoText = () => {
// 	if (popupInput.value !== '') {
// 		todoTaskText = popupInput.value
// 		popup.style.display = 'none'
// 		popupInfo.textContent = ''
// 	} else {
// 		popupInfo.textContent = 'Wpisz text!'
// 	}
// }

// const deleteTodo = (e) =>{
// 	 e.target.closest('li').remove()
// 	 const allLi = ulList.querySelectorAll('li').length
// }

// const keyEnterTodoInput = e => {
// 	if (e.key === 'Enter'){
// 		addNewTodo()
// 	}
// }

// document.addEventListener('DOMContentLoaded', main)

// OBJECTS

// const horseDish = 'grass'
// const horseBeverage = 'water'
// const horseDinner = 'fish'

// const horse = {
// 	'stable-color': 'red',
// 	'stable-date': 2000,
// 	horseDish,
// 	horseBeverage,
// 	horseDinner,
// }

// horse['abc-1'] = null
// // M null?

// for (const data in horse) {
// 	// console.log(data + ': ' + horse[data]);
// }

// // this

// const user = {
// 	username: 'Simon',
// 	username2: 'Simon2',
// 	username3: 'Simon3',
// 	consoleLogUsername() {
// 		console.log(this.username)
// 		console.log(this)
// 	},
// }

// user.consoleLogUsername()

// // constructor

// function User(name, age) {
// 	this.username = name
// 	this.userAge = age
// }

// const userSimon = new User('Simon', 12)
// const userAdam = new User('Adam', 121)
// const userLiil = new User('Liil', 2)
// // prototype
// User.prototype.userFunction = function(){
// 	console.log(this.username + ' ' + this.userAge);
// }

// userLiil.userFunction()

// const btn1 = document.querySelector('button')

// function MenuConstr(mealName, mealPrice) {
// 	this.meal = mealName
// 	this.price = mealPrice
// }

// const fish = new MenuConstr('dorsh', '23$')
// const chicken = new MenuConstr('chicken', '13$')
// const lamb = new MenuConstr('lamb', '53$')

// // Różnica między THIS w funkcjach
// MenuConstr.prototype.showMealData = function()  {
// 	console.log(`${this.meal} costs ${this.price}`)
// 	console.log(this);
// }
// MenuConstr.prototype.showMealData = () => {
// 	console.log(`${this.meal} costs ${this.price}`)
// 	console.log(this);
// }

// btn1.addEventListener('click', () => {
// 	chicken.showMealData()
// })

// CLASS
// zapis normalny

function Dictionary(topic, pages) {
	this.dictionaryTopic = topic
	this.dictionaryPages = pages
}

Dictionary.prototype.dictionaryShow = function () {
	console.log(`this ${this.dictionaryTopic} dictionary has ${this.dictionaryPages} pages`)
}

const dictionaryEnglish = new Dictionary('English', 453)
// check grammary Eng or eng
console.log(dictionaryEnglish);
dictionaryEnglish.dictionaryShow()
// class

class Dictionary2 {
	constructor(topic, pages) {
		this.dictionaryTopic = topic
		this.dictionaryPages = pages
	}

	dictionaryShow(){
		console.log(`this ${this.dictionaryTopic} dictionary has ${this.dictionaryPages} pages`)
	}
}

const dictionaryGerman = new Dictionary2('German', 499)
dictionaryGerman.dictionaryShow()



class Animals {
	constructor(name){
		this.name = name
	}
	sound(){
		console.log(`"hau hau"`);
	}
}

class Dog extends Animals{
	constructor(name, age){
		super(name)
		this.age = age
	}
}



const food = {
	breakfast:{
		carbs: 'bread',
		fat: 'oil'
	}
}

const food2 = {
		protein: 'ham',
		fat: 'olive'
}


const showFood2 = ({breakfast: {carbs, fat}}, {protein}) => {
	


	console.log(`protein is in ${protein} and fats are in ${fat}`);
}

showFood2(food, food2)