
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if((document.body.clientWidth > 769 || document.documentElement.clientWidth > 769)){
        if ((document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) ) {
            document.getElementById("NavCerca").style.display = "none";
            document.getElementById("NavCentrale").style.display = "none";
            document.getElementById("NavOpzioni").style.display = "none";
            document.getElementById("NavScrollGrande").style.display = "flex";

            document.getElementById("NavScrollGrande").parentElement.parentElement.className = "fixed-top";
            
        } else {
            document.getElementById("NavCerca").style.display = "";
            document.getElementById("NavCentrale").style.display = "";
            document.getElementById("NavOpzioni").style.display = "";

            document.getElementById("NavScrollGrande").style.display = "none";
            document.getElementById("NavScrollGrande").parentElement.parentElement.className = " ";
        }
    }

}



