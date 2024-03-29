
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Chuyển ảnh sau 2 giây
}


function animateNumber(finalNumber, delay, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, delay)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      currentNumber++
      callback(currentNumber)
    }
  }
}
// Tăng dần số 1:38 AM 26/3/2024
function animateNumber(finalNumber,delay,startNumber = 0, callback){
    let currentNumber = startNumber
    const interval =
    window.setInterval(updateNumber,delay)
    function updateNumber(){
        if(currentNumber >= finalNumber){
            clearInterval(interval)
        }else{
            currentNumber++
            callback(currentNumber)
        }
    }
}

document.addEventListener('DOMContentLoaded',
function(){
    animateNumber(6,100,0,function
        (number){
            const formattedNumber = number.toLocaleString()
            document.getElementById('count1').innerText = formattedNumber
        })
}
)

document.addEventListener('DOMContentLoaded',
function(){
    animateNumber(24,10,0,function
        (number){
            const formattedNumber = number.toLocaleString()
            document.getElementById('count2').innerText = formattedNumber
        })
}
)

document.addEventListener('DOMContentLoaded',
function(){
    animateNumber(200,5,0,function
        (number){
            const formattedNumber = number.toLocaleString()
            document.getElementById('count3').innerText = formattedNumber
        })
}
)

document.addEventListener('DOMContentLoaded',
function(){
    animateNumber(999,1,0,function
        (number){
            const formattedNumber = number.toLocaleString()
            document.getElementById('count4').innerText = formattedNumber
        })
}
)