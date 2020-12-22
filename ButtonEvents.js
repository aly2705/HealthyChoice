
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log(document.getElementById("myDropdown"));
}

function myFunctionSmall() {
    document.getElementById("drd-small").classList.toggle("show");
    console.log(document.getElementById("drd-small"));
}

function showBarsContent() {
    document.getElementById("contentHidden").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
} 

