let search = document.querySelector('.search_id');
let i = document.querySelector('#search-btn');
i.addEventListener('click', () => {
    search.classList.toggle('active')
})
let user = document.querySelector('.login');
let j =document.querySelector('#us');
j.addEventListener('click' , ()=>{
    user.classList.toggle('use');
})