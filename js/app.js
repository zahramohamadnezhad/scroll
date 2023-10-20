const navbar = document.querySelector('#navbar')
let lastScrollTop = 0

window.addEventListener('scroll',() =>{
    let nowScrollTop = document.documentElement.scrollTop

    console.log("nowScrollTop:", nowScrollTop ,'&& lastScrollTop', lastScrollTop);
    if (nowScrollTop > lastScrollTop) {
        navbar.style.top = '-80px'
    }else{
        navbar.style.top = '0px'
    }

    lastScrollTop = nowScrollTop
})