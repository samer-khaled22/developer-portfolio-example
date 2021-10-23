// Changing NavBar's background on scroll and showing/hiding top button 

let aboutOffset = $("#about").offset().top;

$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll > aboutOffset - 90){
        $("#main-nav").css("backgroundColor" , "#fff")
        $("#main-nav a").css("color" , "#09c")
        $("#navbar-icon").css("color" , "#09c")
        $("#main-nav").css("transition" , "all 0.5s")
        $("#btnUp").fadeIn(500)
    }else{
        $("#main-nav").css("backgroundColor" , "transparent")
        $("#main-nav a").css("color" , "#fff")
        $("#navbar-icon").css("color" , "#fff")
        $("#btnUp").fadeOut(500)
    }
})

// Back to the top Button 

$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},1500)
})

// Smooth scroll for Navbar links

$("#main-nav a").click(function(e){
    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html , body").animate({scrollTop:sectionOffset},1000)
})

// Counter section
$('.counter').counterUp({
    delay: 10,
    time: 2000,
    offset: 70,
    beginAt: 0,
})


// Work section slider
let imgs = Array.from(document.querySelectorAll(".work-item img"));
let lightBoxContainer = document.getElementById("lightBoxContainer");
let lightBoxItem = document.getElementById("lightBoxItem");
let close = document.getElementById("close");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let currentIndex = 0 ;

for(let i = 0 ; i < imgs.length; i ++){
    $(imgs[i]).click(function(e){
        currentIndex = imgs.indexOf(e.target)
        let imgSrc = e.target.getAttribute("src");
        lightBoxItem.style.backgroundImage=`url(${imgSrc})`
        lightBoxContainer.style.display = "flex"; 
    })
 }

//  Close button function

 function closeBtn(){
    lightBoxContainer.style.display = "none";

}
close.addEventListener("click" , closeBtn);

// Next slide function

function nextSlide(){
   
    currentIndex++;
    if (currentIndex == imgs.length){
        currentIndex = 0;
    }

    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc+")";

}

nextBtn.addEventListener("click" , nextSlide );


// Previous slide function

function prevSlide(){
    currentIndex--;
    if (currentIndex < 0 ){
        currentIndex = imgs.length -1;
    }

    let imgSrc = imgs[currentIndex].getAttribute("src");
    lightBoxItem.style.backgroundImage = "url("+imgSrc+")"
}

prevBtn.addEventListener("click" , prevSlide);

// Using slider with keyboard

document.addEventListener("keydown", function(eventInfo){

    if (eventInfo.key == "ArrowRight"){
        nextSlide();
    }
    else if (eventInfo.key == "ArrowLeft"){
        prevSlide();
    }
    else if (eventInfo.key == "Escape"){
        closeBtn();
    }
})

// Contact Section Validation for Name and Email

let nameRegex = /^([a-zA-Z ]+$)/;
let emailRegex = /^([a-zA-Z\d\.\-_]+)@([a-z]+)\.([a-z]{2,8}$)/;

function nameValidation() {
    let nameInput = document.getElementById("nameInput");
    if (nameRegex.test(nameInput.value) == true) {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        return true;

    }
    else {
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        return false;

    }
}
nameInput.addEventListener("keyup", nameValidation)

function emailValidation() {
    let emailInput = document.getElementById("emailInput");
    if (emailRegex.test(emailInput.value) == true) {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        return true;
    }
    else {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return false;
    }
}
emailInput.addEventListener("keyup", emailValidation)






       
