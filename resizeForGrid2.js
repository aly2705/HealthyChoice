var elChanged=document.getElementById("grid-container");
        var elFlex=document.getElementById("title");
        console.log(elFlex.clientWidth);
        var home=document.getElementById("home")
        var carbs=document.getElementById("carbs");
        var proteins=document.getElementById("proteins");
        var fats=document.getElementById("fats");
        var micro=document.getElementById("micro");
        var bmr=document.getElementById("dropbtn");
        var size=document.querySelectorAll(".size");
        var siteName=document.getElementById("siteName");
        var onResize = function () {
            if(elFlex.clientWidth < 550){
                elChanged.style.gridTemplateColumns= "100px auto 100px";
                
                if(elFlex.clientWidth < 550) {
                    elChanged.style.gridTemplateColumns= "0px auto 0px";
                    for (var i=0; i< size.length; i++) {
                        size[i].style.fontSize= "15px";
                    }
                    siteName.style.fontSize="35px";
                    home.innerHTML = "H...";
                    carbs.innerHTML = "Carb...";
                    proteins.innerHTML = "Prot...";
                    fats.innerHTML = "Fat...";
                    micro.innerHTML = "Micro...";
                }
            }
            if(elFlex.clientWidth > 750) {
                elChanged.style.gridTemplateColumns= "100px auto 100px";
                for (var i=0; i< size.length; i++) {
                        size[i].style.fontSize= "20px";
                    }
                    siteName.style.fontSize="40px";
                        home.innerHTML = "Home";
                        carbs.innerHTML = "Carbohydrates";
                        proteins.innerHTML = "Proteins";
                        fats.innerHTML = "Fats";
                        micro.innerHTML = "Micronutrients";
                
                if(elFlex.clientWidth > 900) {
                    elChanged.style.gridTemplateColumns= "175px auto 175px";
                    
                }
            }
            
        }
        window.addEventListener("resize",onResize);
        window.addEventListener("load",onResize);