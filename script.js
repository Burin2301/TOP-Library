const btn = document.querySelector('#btn')

const form = document.querySelector('#form')

const bookContainer = document.querySelector('#books')

const myLibrary = []

function book(title, author, pages, read, indexNumber){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.indexNumber = indexNumber
}

btn.addEventListener('click', addBookToLibrary)
function addBookToLibrary(title,author,pages,read, indexNumber){
    if(!form.title.value == '' | !form.author.value| !form.pages.value ){

        const bookTitle = form.title.value
        const bookAuthor = form.author.value
        const bookPages = form.pages.value
        const bookRead = form.isRead.value
        const bookIndex = myLibrary.length+1
    
        const newBook = new book(bookTitle, bookAuthor,bookPages,bookRead, bookIndex)
    
        myLibrary.push(newBook)
        form.reset()
        
    
        showBook(newBook)
    }else{
        alert('Enter the information of the book, please')
    }
}


// showBook(myLibrary[0])
function showBook(a){
    const bookDiv = document.createElement('div')
    bookDiv.innerHTML=
    `
    <div id="bookCard${a.indexNumber}" class='bookCard' data-index="${a.indexNumber}" >
        <div>
            <h3>Title: ${a.title}</h3>
            <h4>Author: ${a.author}</h4>
            <h4>Number of pages: ${a.pages} pages</h4>
            <h4>Have you read this book?: ${a.read}</h4>
        </div>
        <button id=removeBook${a.indexNumber}>X</button>
        <p class="hidden ${a.indexNumber}">${a.indexNumber}</p>
    </div>
    `
    bookContainer.appendChild(bookDiv)
    
    const removeBtn = document.querySelector(`#removeBook${a.indexNumber}`)
    const cardContainer = document.querySelector(`#bookCard${a.indexNumber}`)
    
    const indexbook = parseInt(cardContainer.dataset.index)-1

    removeBtn.addEventListener('click', ()=>removeDiv(cardContainer, indexbook)
    )}
    
    
function removeDiv(a, b){
    a.remove()
    myLibrary.splice(b,1)
}