// Proměnné pro menu manipulaci menu
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

const btnUp = document.querySelector('.btn-up');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 560) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }

})



// Verifikace hesla
const pass1 = document.querySelector(".pass1")
const pass2 = document.querySelector(".pass2")
const passChecker = document.querySelector(".pass-checker")

pass1.addEventListener("input", () => {
    const pass1Value = pass1.value
    const pass2Value = pass2.value
    if (pass1Value == pass2Value) {
        passChecker.textContent = "Hesla jsou shodná"
        passChecker.classList.add("valid")
        passChecker.classList.remove("invalid")
    } else {
        passChecker.textContent = "Hesla nejsou shodná!"
        passChecker.classList.add("invalid")
        passChecker.classList.remove("valid")
    }

    if(pass1Value == "" && pass2Value == "") {
        passChecker.textContent = ""
    }
})

    pass2.addEventListener("input", () => {
        const pass1Value = pass1.value
        const pass2Value = pass2.value
        if (pass1Value == pass2Value) {
            passChecker.textContent = "Hesla jsou shodná"
            passChecker.classList.add("valid")
            passChecker.classList.remove("invalid")
        } else {
            passChecker.textContent = "Hesla nejsou shodná!"
            passChecker.classList.add("invalid")
            passChecker.classList.remove("valid")
        }
        
        if (pass1Value == "" && pass2Value == "") {
            passChecker.textContent = ""
            
        }

    })

        // dark/light přepínač 

        const header = document.querySelector("header")
        const headerContainer = document.querySelector(".header-container")
        const contentSection = document.querySelector(".content-section")
        const footer = document.querySelector("footer")
        const darkLightSwitch = document.querySelector(".dark-light")
        const contactForm = document.querySelector(".contact-form")
        const registerForm = document.querySelector(".register-form")
        const body = document.querySelector('body')
        const aboutSection = document.querySelector('.about-section')
        const blog = document.querySelector('.blog-section')


        
        darkLightSwitch.addEventListener("click", () => {

            headerContainer.classList.toggle('dark-header')
            header.classList.toggle('dark-header')
            footer.classList.toggle('dark-footer')
            darkLightSwitch.classList.toggle('dark-light-switch')
            contactForm.classList.toggle('dark-forms')
            registerForm.classList.toggle('dark-forms')   
            btnUp.classList.toggle('button-up') 
            body.classList.toggle('dark-content')
            aboutSection.classList.toggle('dark-black')
            blog.classList.toggle('dark-black')
                    
        })
