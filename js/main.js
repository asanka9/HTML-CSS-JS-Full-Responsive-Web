var home = document.querySelector(".home");
var contactUs = document.querySelector(".contactUs");
var sizeChart = document.querySelector(".sizeChart");
var ourTeam = document.querySelector(".ourTeam");
var change_image = document.querySelector(".image-change");
var index = 0;



window.addEventListener('scroll', function () {
    let header = document.querySelector('.navItems');
    if (window.scrollY > 60) {
        header.style.backgroundColor  = "#365C9A";
    }else{
        header.style.backgroundColor = "transparent";
    }
    
});


/*
change_image.innerHTML = '<img src="images/bestseller3.jpg" width="100%">';
index++;
window.setInterval(function(){
    var img_list = ['<img src="images/bestseller3.jpg" width="100%">','<img src="images/bestseller2.jpg" width="100%">','<img src="images/bestseller1.jpg" width="100%"></img>'];
    /// call your function here
    change_image.innerHTML = img_list[index]
    index++;
    index = index%3;
  }, 3000);
*/

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}




function homeClick_(){
    home.style.display = "Block";
    contactUs.style.display = "None";
    sizeChart.style.display = "None";
    ourTeam.style.display = "None";
}

function sizeChart_(){
    home.style.display = "None";
    contactUs.style.display = "None";
    sizeChart.style.display = "Block";
    ourTeam.style.display = "None";
}

function ourTeam_(){
    home.style.display = "None";
    contactUs.style.display = "None";
    sizeChart.style.display = "None";
    ourTeam.style.display = "Block";
}


function contactUs_(){
    home.style.display = "None";
    contactUs.style.display = "Block";
    sizeChart.style.display = "None";
    ourTeam.style.display = "None";
}




