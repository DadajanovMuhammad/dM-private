window.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>0);
    })
    const menuBTN = document.querySelector('.menu-btn')
     navigation = document.querySelector('.navigation')
     navigationItems=document.querySelectorAll('.navigation a')

     menuBTN.addEventListener('click',()=>{
        menuBTN.classList.toggle('active')
        navigation.classList.toggle('active')
     })

     navigationItems.forEach(navitem => {
        navitem.addEventListener('click',()=>{
            menuBTN.classList.remove('active')
            navigation.classList.remove('active')
        })
     })
     const scrollbtn =document.querySelector('.scrollToTop-btn')
     window.addEventListener('scroll',()=>{
        scrollbtn.classList.toggle('active',window.scrollY>500)
     })
     window.addEventListener('click',()=>{
        this.document.body.scrollTop=0;
        this.document.documentElement.scrollTop=0;
     })

     this.window.addEventListener('scroll',()=>{
        let reveals =this.document.querySelectorAll('.reveal')
        for(let i=0;i<reveals.length;i++){
            let windowHeight=this.window.innerHeight;
            let revealTop=reveals[i].getBoundingClientRect().top;
            let revealPoint =50;
            if(revealTop<windowHeight - revealPoint){
                reveals[i].classList.add('active');
            }
        }
        
     })
})