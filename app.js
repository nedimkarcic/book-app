// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const isbn = document.querySelector("#isbn");
// const form = document.querySelector("#input-form");

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
	// let icon = "<i class='fas fa-trash'></i>";



	// <i class="fas fa-trash"></i>

	tdata1.innerHTML = this.title.value;
	tdata2.innerHTML = this.author.value;
	tdata3.innerHTML = this.isbn.value;
	deleteBook.innerHTML = "<i class='fas fa-trash'></i>";
	// icon.classList.add("fas");
	// icon.classList.add("fa-trash");

	row.appendChild(tdata1);
	row.appendChild(tdata2);
	row.appendChild(tdata3);
	row.appendChild(deleteBook);


	table.appendChild(row);

}


};

//instanca ima parametre; šta ako nam input daje argumente, a onda se oni prebacuju u tabelu
let book = new Book();
console.log(title.value);






// function bookSubmit (e){
// 	e.preventDefault();

// 	let table = document.querySelector("#table");
// 	let row = document.createElement("tr");
// 	let tdata1 = document.createElement("td");
// 	let tdata2 = document.createElement("td");
// 	let tdata3 = document.createElement("td");

// 	tdata1.innerHTML = title.value;
// 	tdata2.innerHTML = author.value;
// 	tdata3.innerHTML = isbn.value;

// 	row.appendChild(tdata1);
// 	row.appendChild(tdata2);
// 	row.appendChild(tdata3);

// 	table.appendChild(row);
// }

// form.addEventListener('submit', bookSubmit);
