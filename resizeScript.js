

var elChanged=document.getElementById("grid-container");
var elFlex=document.getElementById("title");
var home=document.getElementById("home")
var carbs=document.getElementById("carbs");
var proteins=document.getElementById("proteins");
var fats=document.getElementById("fats");
var micro=document.getElementById("micro");
var bmr=document.getElementById("bmr");
var size=document.querySelectorAll(".size");
var dropdown=document.getElementById("dropdown");
var siteName=document.getElementById("siteName");
var onResize = function() {
    if(elFlex.clientWidth < 400){
        elChanged.style.gridTemplateColumns= "0px 1fr";
        home.innerHTML = "H...";
        carbs.innerHTML = "Carb...";
        proteins.innerHTML = "Prot...";
        fats.innerHTML = "Fat...";
        micro.innerHTML = "Micro...";
        console.log(elFlex.clientWidth);
        
    }
    if(elFlex.clientWidth < 650) {
        for (var i=0; i< size.length; i++) {
                size[i].style.fontSize= "15px";
        }
        siteName.style.fontSize="35px";
    }
    if(elFlex.clientWidth > 650) {
        for (var i=0; i< size.length; i++) {
                size[i].style.fontSize= "20px";
        }
        if(elChanged.style.gridTemplateColumns === "400px 1fr") {
            siteName.style.fontSize="40px";
        }
    }
    
    if(elFlex.clientWidth > 800 && elChanged.style.gridTemplateColumns === "0px 1fr") {
        elChanged.style.gridTemplateColumns= "400px 1fr"; 
        home.innerHTML = "Home";
        carbs.innerHTML = "Carbohydrates";
        proteins.innerHTML = "Proteins";
        fats.innerHTML = "Fats";
        micro.innerHTML = "Micronutrients";
    
    }
}
window.addEventListener("resize",onResize);
window.addEventListener("load",onResize);