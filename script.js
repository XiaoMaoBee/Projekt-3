// Proměnné pro menu manipulaci 
const menuIcon = document.querySelector('.menu-icon')
const menuList = document.querySelector('nav')
const hamburgerIcon = document.querySelector('.fa-solid')   

// Menu manipulace 
menuIcon.addEventListener('click', () => {
    console.log('kliknutí');
    if(hamburgerIcon.classList[1] === 'fa-bars') {
        hamburgerIcon.classList.add('fa-xmark')
        hamburgerIcon.classList.remove('fa-bars')
        menuList.style.display = 'block'
        
    } else {
        hamburgerIcon.classList.remove('fa-xmark')
        hamburgerIcon.classList.add('fa-bars')
        menuList.style.display = 'none'
    }
})

// Button nahoru 

const btnUp = document.querySelector('.fa-angles-up');

btnUp.addEventListener('click', () => {
    
})