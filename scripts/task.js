class Task {
    constructor(el) {
        this._el = el;
        console.log(this._el);

		
		this._eltaskDetails = document.querySelector('[data-js-detail]');
		this._elTaskIndex = this._el.dataset.jsTask;
		this._elTask = this._el.querySelector('[data-js-taskContent]');
		this._elBtnDetail = this._el.querySelector('[data-js-show]');
		this._elBtnDelete = this._el.querySelector('[data-js-delete]');
		console.log(this._elBtnDelete);
		console.log(this._elBtnDetail);
		console.log(this._elTaskIndex);

		this.init()
    }


	init = () => {

		this._elBtnDelete.addEventListener('click', this.deleteTask);
		this._elBtnDetail.addEventListener('click', this.detailsTask);
		
	}

	deleteTask = () => {
		this._el.remove();
		toDoList.splice(toDoList[this._elTaskIndex], 1);
	}

	detailsTask = () => {
		console.log(this._elTaskIndex);
		console.log(toDoList[this._elTaskIndex].tache);

		this._eltaskDetails.innerHTML = `
									<div>
									<p> Tâche: ${toDoList[this._elTaskIndex].tache}</p>
									<p> Description: ${toDoList[this._elTaskIndex].description}</p>
									<p>Importance: ${toDoList[this._elTaskIndex].importance}</p>
									</div>
									`;

	}


	


};