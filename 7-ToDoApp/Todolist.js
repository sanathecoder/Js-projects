const InputBox = document.getElementById('input-box')
const ListContainer = document.getElementById('list-container')

function addTask(){
    if(InputBox.value == ''){
        alert('You Must Write Something')

    }else{
        let li = document.createElement('li')
        li.textContent = InputBox.value;
        ListContainer.appendChild(li)
        let span = document.createElement('span')
        span.textContent = "\u00d7"
        li.appendChild(span)

    }
    InputBox.value = ""
    savedata()
}

ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked")
        savedata()

    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        savedata()
    }
}, false)


function savedata(){
    localStorage.setItem("data", ListContainer.innerHTML)
}

function showTask(){
    ListContainer.innerHTML = localStorage.getItem("data")
}
showTask()
localStorage.clear()