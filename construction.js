const button = document.querySelector('#ham') 

const menu = document.querySelector('.menu')

const li = document.querySelectorAll('.list a')



button.addEventListener('click', () => {
    menu.classList.toggle('showMenu')
    
    })

    li.forEach((list) => {
        list.addEventListener("click", () => {
            menu.classList.remove('showMenu')
    
    
        })
    })