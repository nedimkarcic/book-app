class Book {
	constructor (form, title, author, isbn){
		this.form = document.querySelector("#input-form");
		this.title = document.querySelector("#title");
		this.author = document.querySelector("#author");
		this.isbn = document.querySelector("#isbn");
		this.form.addEventListener('submit', this.bookSubmit);
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

}


};

let book = new Book();
console.log(title.value);