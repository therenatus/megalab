let lists = document.getElementById('todo-list');
let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];


window.addEventListener('load', function() {
    for(let i = 0; i<tasks.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('class', 'task'); 
        li.innerHTML = tasks[i];
        console.log(li)
        lists.appendChild(li)
    }
})