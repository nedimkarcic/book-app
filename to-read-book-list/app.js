class Book {
	constructor (title, author, isbn){
		this.form = document.querySelector("#form");
		this.title = document.querySelector("#title");
		this.author = document.querySelector("#author");
		this.isbn = document.querySelector("#isbn");
		this.newBookAlert = document.querySelector(".added-book-alert");
		this.table = document.querySelector("#table");
		this.form.addEventListener('submit', this.bookSubmit);
		this.form.addEventListener('submit', this.addedBookAlert);
		this.table.addEventListener('click', this.removeBookFromTheList)
	};

	// method for creating a new title in the book list
	bookSubmit = (e) => {

	e.preventDefault();

	if(this.title.value !== '' && this.author.value !== '' && this.isbn.value !== ''){

		let tdata1 = document.createElement("td");
		let tdata2 = document.createElement("td");
		let tdata3 = document.createElement("td");
		let deleteBook = document.createElement("td");
		let row = document.createElement("tr");
	
		tdata1.innerHTML = this.title.value;
		tdata2.innerHTML = this.author.value;
		tdata3.innerHTML = this.isbn.value;
		deleteBook.innerHTML = "<i class='fas fa-trash trashIcon'></i>";
	
		row.appendChild(tdata1);
		row.appendChild(tdata2);
		row.appendChild(tdata3);
		row.appendChild(deleteBook);
	
		this.table.appendChild(row);
	};

};
	//method for displaying the green alert when you add a new book in the list
	addedBookAlert = (e) => {

		e.preventDefault();

		if(this.title.value !== '' && this.author.value !== '' && this.isbn.value !== ''){

			this.newBookAlert.style.display = 'block';
			setTimeout(this.clearAlert, 4000);
		};

		this.title.value = '';
		this.author.value = '';
		this.isbn.value = '';
	};

	//method for removing the green alert
	clearAlert = () => {
		this.newBookAlert.style.display = 'none';
	};

	//method for deleting the book from the list
	removeBookFromTheList = (e) => {
		// e.preventDefault();

		if(e.target.classList.contains('trashIcon')){

			const listItem = e.target.parentElement.parentElement;
			this.table.removeChild(listItem);
	}
	};
};

let book = new Book();
console.log(title.value);
