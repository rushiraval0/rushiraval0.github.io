/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');


function toggleSkills(){
    let itemClass = this.parentNode.className;
    console.log('hi');
    for(i=0;i<skillsContent.length;i++)
    {
        skillsContent[i].className='skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className='skills__content skills__open';
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills);
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtn = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtn.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i);
    })
})

modalCloses.forEach((modalCloses)=>{
    modalCloses.addEventListener('click',()=>{
        modalViews.forEach((modalViews)=>{
            modalViews.classList.remove('active-modal');
        })
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 