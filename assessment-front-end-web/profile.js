// console.log('hey');
function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('Form Submitted!');
}

function color(evt){
    evt.preventDefault();

    window.alert('My favorite color is red!')
}

function place(evt){
    evt.preventDefault();

    window.alert('My favorite place is Washington State!')
}

function ritual(evt){
    evt.preventDefault();

    window.alert('My favorite ritual is going to the gym first thing in the morning!')
}

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')
let hire = document.querySelector('#hire')

colorBtn.addEventListener('click', color)
placeBtn.addEventListener('click', place)
ritualBtn.addEventListener('click', ritual)
hire.addEventListener('submit', handleSubmit);