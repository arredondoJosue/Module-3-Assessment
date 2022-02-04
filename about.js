console.log("hello world");

const compliment = () => {
	// event.preventDefault()

	alert('Wort, wort, wort.')
}

function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('Your responses submitted successfully!')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let quackliment = document.getElementById('Master-Duck')
quackliment.addEventListener('mouseover', compliment)