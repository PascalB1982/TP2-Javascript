class Details {
    constructor(el) {
        this._el = el;
        console.log(this._el);

		this._divTask = this._el.querySelector('[data-js-task]');
		this._divDetail = document.querySelector('[data-js-detail]');
		this._elBtnDetail = this._el.querySelector('[data-js-show]');



		this.init()
	}

		init = () => {
			this._elBtnDetail.addEventListener('click', this.detailsTask)
		}
	
		detailsTask = () => {
			console.log(this._divTask);

			
		
    }
};