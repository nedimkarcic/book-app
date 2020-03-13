class Book {
	constructor (form, title, author, isbn, newBookAlert){
		this.form = document.querySelector("#input-form");
		this.title = document.querySelector("#title");
		this.author = document.querySelector("#author");
		this.isbn = document.querySelector("#isbn");
		this.newBookAlert = document.querySelector(".added-book-alert");
		this.form.addEventListener('submit', this.bookSubmit);
		this.form.addEventListener('submit', this.addedBookAlert);
	};

	// metoda 
	bookSubmit = (e) => {

	e.preventDefault();

	let table = document.querySelector("#table");
	let row = document.createElement("tr");
	let tdata1 = document.createElement("td");
	let tdata2 = document.createElement("td");
	let tdata3 = document.createElement("td");
	let deleteBook = document.createElement("td");

	tdata1.innerHTML = this.title.value;
	tdata2.innerHTML = this.author.value;
	tdata3.innerHTML = this.isbn.value;
	deleteBook.innerHTML = "<i class='fas fa-trash'></i>";

	row.appendChild(tdata1);
	row.appendChild(tdata2);
	row.appendChild(tdata3);
	row.appendChild(deleteBook);


	table.appendChild(row);

};

	addedBookAlert = (e) => {
		e.preventDefault();
		this.newBookAlert.style.display = 'block';
		setTimeout(this.clearAlert, 4000);
	};

	clearAlert = () => {
		this.newBookAlert.style.display = 'none';
	};


};

let book = new Book();
console.log(title.value);