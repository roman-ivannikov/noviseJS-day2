let modal = document.querySelector('.modal'),
	btnClose = document.querySelector('.close'),
	inputName = document.getElementsByName('name')[0],
	inputMessage = document.getElementsByName('message')[0],
	btnReceive = document.getElementById('receive');

btnReceive.addEventListener('click', function() {
	modal.style.display = 'block'
});

btnClose.addEventListener('click', function() {
	modal.style.display = 'none'
});

inputName.addEventListener('input', function() {
	inputMessage.value = "Привет! Меня зовут " + inputName.value + ". Я хочу спросить: ";
	if (inputName.value == '') {
		inputMessage.value = ""
	}
})