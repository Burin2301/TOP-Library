const btn = document.querySelector('#btn')
const form = document.querySelector('#form')
const bookContainer = document.querySelector('#books')
const myLibrary = []

class Book {
    constructor (title, author, pages, read, indexNumber){
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read,
        this.indexNumber = indexNumber
    }

}

// function book(title, author, pages, read, indexNumber){
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = read,
//     this.indexNumber = indexNumber
// }

btn.addEventListener('click', addBookToLibrary)



function addBookToLibrary(title,author,pages,read, indexNumber){
    if(form.title.value == '' | form.author.value == ''| form.pages.value == ''){
        alert('Enter the information of the book, please')

    }else if(!form.title.value == '' | !form.author.value == ''| !form.pages.value == ''){
        const bookTitle = form.title.value
        const bookAuthor = form.author.value
        const bookPages = form.pages.value
        const bookRead = form.isRead.checked ? "Yes" : "No"
        const bookIndex = myLibrary.length+1

        const newBook = new Book(bookTitle, bookAuthor,bookPages,bookRead, bookIndex)

        myLibrary.push(newBook)
        form.reset()

        showBook(newBook)
    }
}

function showBook(a){
    const bookDiv = document.createElement('div')

    newDivBook = bookDiv

    bookDiv.innerHTML=
    `
    <div id="bookCard${a.indexNumber}" class='bookCard' data-index="${a.indexNumber}" >
        <div>
            <h3>Title: ${a.title}</h3>
            <h4>Author: ${a.author}</h4>
            <h4>Pages: ${a.pages} pages</h4>
            <h4 id="read${a.indexNumber}">Completed: ${a.read}</h4>
        </div>
        <div class="bookCardButtons">
            <button class="bookCardBtnStyle" id="changeRead${a.indexNumber}" type="button">Complete</button>
            <button class="bookCardBtnStyle" id=removeBook${a.indexNumber}>X</button>
        </div>

    </div>
    `
    bookContainer.appendChild(bookDiv)

    const removeBtn = document.querySelector(`#removeBook${a.indexNumber}`)


    const cardContainer = document.querySelector(`#bookCard${a.indexNumber}`)
    const indexbook = parseInt(cardContainer.dataset.index)-1

    removeBtn.addEventListener('click', ()=>removeDiv(cardContainer, indexbook))

    const readBtn = document.querySelector(`#changeRead${a.indexNumber}`)

    readBtn.addEventListener('click', ()=>{
        changeRead(indexbook)
    })
}

function removeDiv(a, b){
    a.remove()
    myLibrary.splice(b,1)
}

function changeRead(a){
    const book = myLibrary[a]

    book.read = !book.read

    const completedRead = book.read ? "Completed: Yes" : "Completed: No"
    const readState = document.querySelector(`#read${book.indexNumber}`)

    readState.innerText = completedRead

}


// SHOW FORM BUTTON
const showBtn = document.querySelector('#showForm')
const formContainer = document.querySelector('#formContainer')


showBtn.addEventListener('click', function(){
    formContainer.classList.toggle('inactive')
})
