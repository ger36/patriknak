
	const myList = document.getElementById('myList')
	const newListItem = document.createElement('li')
	const inputadd = document.getElementById('inputadd')
	inputadd.addEventListener('click', e => {
		if (document.getElementById('inputsection').value !== '') {

			newListItem.appendChild(document.createTextNode(document.getElementById('inputsection').value));
			myList.appendChild(newListItem);
			document.getElementById('inputsection').value = '';
		
		} else {
			document.getElementById('inputsection').placeholder = 'please enter a task'
	}