const navMenu=document.getElementById('nav-menu')
const navToggle=document.getElementById('nav-toggle')
const navclose=document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navclose){
    navclose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>{
    const navMenu=document.getElementsById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader=()=>{
    const header=document.getElementById('header');
    this.scrollY >= 50?header.classList.add('blur-header')
    :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm=document.getElementById('contact-form')
const contactMessage=document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault();

    const contactForm = document.getElementById('contact-form');  // Ensure this is correctly selected
    const contactMessage = document.getElementById('contact-message');  // Ensure this is correctly selected

    emailjs.sendForm('service_yjwmzxd', 'template_t9l9vwt', contactForm, '_PMSJFqqVyOccgN7y')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅';

            // Clear the message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            // Reset the form
            contactForm.reset();
        })
        .catch((error) => {
            console.error('EmailJS service error:', error); // Log error for debugging
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
};
document.getElementById('contact-form').addEventListener('submit', sendEmail);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp=document.getElementById('scroll-up')
    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROL(L SECTIONS ACTIVE LINK ===============*/
const sections=document.querySelectorAll('section[id]')
const scrollActive=()=>{
    const scrollDown=window.scrollY
    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight
        const sectionTop=current.offsetTop-58
        const sectionId=current.getAttribute('id');
        const sectionClass=document.querySelector('.nav__menu a[href*='+sectionId +']')

        if(scrollDown>sectionTop && scrollDown<=sectionTop +sectionHeight ){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})
sr.reveal(`.home__data,.experience,.skills,.contact__container`)
sr.reveal(`.home__img`,{delay:600})
sr.reveal(`.home__scroll`,{delay:800})
sr.reveal(`.work__card,.services__card`,{interval:100})
sr.reveal(`.about__content`,{origin:'right'})
sr.reveal(`.about__img`,{origin:'left'})