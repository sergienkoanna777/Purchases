const windowInput = document.querySelector('.windowInput');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');
btn.addEventListener('click', ()=> {
    const item = document.createElement('li');
    item.innerText = windowInput.value;
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    windowInput.value = '';
    item.addEventListener('click', ()=> {
        item.classList.add('toDoCompleted');
    })
item.addEventListener('dblclick',()=> {
    toDoContainer.removeChild(item);
})
})