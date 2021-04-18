let navLink = document.querySelector('#navLink');
let underLink = document.querySelector('#underLink');

navLink.addEventListener('mouseover', function() {
        underLink.classList.remove("hide");

    navLink.addEventListener('mouseout', function() {
            underLink.classList.add("hide");  
    })


})

$(document).ready(function(){
        $(".owl-carousel").owlCarousel({
                
                loop: true,
                nav: true,
                navText: [],
                
        });
      });