let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slides = document.querySelectorAll('.slide');
let slidesLength = slides.length;
let sum = 0;

next.onclick = () =>{
    slides.forEach((s) => {
        s.classList.remove('active');
    })
    sum ++;
    if(sum > slidesLength - 1){
        sum = 0;
    }
    slides[sum].classList.add('active');
}

prev.onclick = () =>{
    slides.forEach((s)=>{
        s.classList.remove('active');
    })
    sum--;
    if(sum < 0){
        sum = slidesLength - 1;
    }
    slides[sum].classList.add('active');
}