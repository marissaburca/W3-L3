const pulsante1 = document.getElementById('press')
pulsante1.addEventListener('submit', function(e) {
    e.preventDefault()
    const elemenT = document.getElementById('amb')
    
    const newEl = {
        campo: elemenT.value,
    }
    console.log(newEl)

  
    const lists = document.createElement('div')
    lists.classList.add('elemList')
    lists.innerHTML =`
    <p>${newEl.campo}</p>
    <br>
    <button onclick="deleteLists(event)">Delete</button>
    `
    const contL = document.getElementById('list')
    contL.appendChild(lists)

    
})
const deleteLists = function (e) {
    const pressBut = e.target
    const reallyRemove = confirm ('Are you sure?')
    if (reallyRemove) {
      pressBut.parentElement.remove()}
    }

   
