//If user adds a note, add it to the localStorage

showNotes()

//Function to add elements
let addBtn = document.getElementById('addBtn')
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')

    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    addTxt.value = ''
    console.log(notesObj)
    showNotes()
})

//Function to show element elements from localstorage
function showNotes() {
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = ''
    notesObj.forEach(function (element, index) {
        html += `
            <div class="my-2 mx-2 noteCard card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element + 1}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
                </div>
            </div>
        `
    });
    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html
    }
    else{
        notesElm.innerHTML = `Nothing to show! Please add notes`
    }
}


//Functions to Delete Notes
function deleteNote(index){
    // console.log('I am deleing', index)

    let notes = localStorage.getItem('notes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1)
    localStorage.setItem('notes', JSON.stringify(notesObj))
    showNotes()
}

//Search function for notes
let search = document.getElementById('searchTxt')
search.addEventListener('input', function(e){
    let inputVal = search.value
    console.log('input event fired', inputVal)

    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText
        // console.log('cardTxt')

        if(cardTxt.includes(inputVal)){
            element.style.display = 'block'
        }
        else{
            element.style.display = 'none'
        }
    })
})

//Object Literals : Object Prototype
let obj = {
    name: 'parth',
    channel: 'DSA',
    address: 'India'
}

function Obj(givenName){
    this.name = givenName
}

let obj2 = new Obj('parth')
console.log(obj2)