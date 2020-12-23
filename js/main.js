var home = document.querySelector(".home");
var contactUs = document.querySelector(".contactUs");
var sizeChart = document.querySelector(".sizeChart");
var ourTeam = document.querySelector(".ourTeam");



window.addEventListener('scroll', function () {
    let header = document.querySelector('.navItems');
    if (window.scrollY > 60) {
        header.style.backgroundColor  = "#365C9A";
    }else{
        header.style.backgroundColor = "transparent";
    }
    
});

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




