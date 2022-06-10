console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('Form Submitted!');
}
function duck(evt){
	evt.preventDefault();

	window.alert('The duck is almost as cute as you!')
}

let form = document.querySelector('#contact');
let duck1 = document.querySelector('#duck');

form.addEventListener('submit', handleSubmit);
duck1.addEventListener('mouseover', duck);