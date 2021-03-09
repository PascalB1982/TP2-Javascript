class Form {
	constructor(el) {
		this._el = el,
		
		this.btnImpOrder = document.querySelector('[data-js-impOrder]'),
		this.btnAlphaOrder = document.querySelector('[data-js-alphaOrder]'),
		this.submit = this._el.querySelector('[data-js-submit]'),
		this.taskList = document.querySelector('[data-js-listTasks]'),
		this.details = document.querySelector('[data-js-detail]'),
		this._task = this._el.querySelector('[data-js-name]'),
		this._description = this._el.querySelector('[data-js-description]'),
		this._importance = this._el.querySelectorAll('input[name="importance"]');

	
	
	
		this.init();
	}


	init = () => {

		this.submit.addEventListener('click', this.submitForm);
		this.btnImpOrder.addEventListener('click', this.impOrder);
		this.btnAlphaOrder.addEventListener('click', this.alphaOrder);
	}

	submitForm = (e) => {
		e.preventDefault();

		let importanceValue;
		for (let i = 0, l = this._importance.length; i < l; i++) {
			if (this._importance[i].checked) importanceValue = this._importance[i].value;
		}


		let object = {
			'tache': this._task.value,
			'description': this._description.value,
			'importance': importanceValue // valeur du radio coché
		}
		console.log(object);

		toDoList.push(object);

		let lastIndex = toDoList.length - 1;

		console.log(toDoList[lastIndex]);

		console.log(toDoList[lastIndex].description);

		if (toDoList[lastIndex].description === "") {
			
			toDoList[lastIndex].description = "Aucune description disponible";
		}

		this.taskList.innerHTML += `
									<div data-js-task="${lastIndex}">
									<p data-js-taskContent> Tâche: ${toDoList[lastIndex].tache} - Importance: ${toDoList[lastIndex].importance} <button class="btn_list" data-js-show>Afficher le détail</button> <button data-js-delete>Supprimer</button></p>
									</div>
									`;

		let elTask = document.querySelectorAll('[data-js-task]');

		for (let i = 0; i < elTask.length; i++) {
			new Task(elTask[i]);
			
		}
		
		console.log(toDoList)

		
		
	

	}

	impOrder = () => {
		
	
	
		toDoList.sort((a, b) => (a.importance > b.importance) ? 1 : -1)
		console.log(toDoList);

		this.taskList.innerHTML = "";

		for (let i = 0; i < toDoList.length; i++) {
			
			this.taskList.innerHTML += `
									<div data-js-task="${i}">
									<p data-js-taskContent> Tâche: ${toDoList[i].tache} - Importance: ${toDoList[i].importance} <button data-js-show>Afficher le détail</button> <button data-js-delete>Supprimer</button></p>
									</div>
									`;

		let elTask = document.querySelectorAll('[data-js-task]');

		for (let i = 0; i < elTask.length; i++) {
			new Task(elTask[i]);
										
		}
			
		}
	}

	alphaOrder = () => {
		
	
	
		toDoList.sort((a, b) => (a.tache > b.tache) ? 1 : -1)
		console.log(toDoList);

		this.taskList.innerHTML = "";

		for (let i = 0; i < toDoList.length; i++) {
			
			this.taskList.innerHTML += `
									<div data-js-task="${i}">
									<p data-js-taskContent> Tâche: ${toDoList[i].tache} - Importance: ${toDoList[i].importance} <button data-js-show>Afficher le détail</button> <button data-js-delete>Supprimer</button></p>
									</div>
									`;
		
		let elTask = document.querySelectorAll('[data-js-task]');
		
		for (let i = 0; i < elTask.length; i++) {
			new Task(elTask[i]);
																	
		}
			
		}
	}

};