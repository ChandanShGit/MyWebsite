
var shift;
window.onscroll = function() {scrollFunction()};

function init(){
  setIdAClass("cks","line-home");
  setIdAClass("cks2","line-home");
  shift='fr';
}

function setIdAClass(id,cl){
  document.getElementById(id).className=cl;
}


function forword(){
  if(shift=='fr'){
    setIdAClass("profile-view","card-hide");
    setIdAClass("timeline-view","card-show");
    shift="sc";
  }
  else if(shift=="sc"){
    setIdAClass("timeline-view","card-hide");
    setIdAClass("project-view","card-show");
    shift="thr";
  }
  else{
    setIdAClass("project-view","card-hide");
    setIdAClass("profile-view","card-show");
    shift="fr";
  }
}

function backword(){

  if(shift=="fr"){
    setIdAClass("profile-view","card-hide");
    setIdAClass("project-view","card-show");
    shift="thr";
  }
else if(shift=="sc"){
    setIdAClass("timeline-view","card-hide");
    setIdAClass("profile-view","card-show");
    shift="fr";
  }
  else{
    setIdAClass("project-view","card-hide");
    setIdAClass("timeline-view","card-show");
    shift="sc";
  }
}


function showNav(){
  var x = document.getElementById("myTopnav");
 if (x.className === "topnav") {
   x.className += " responsive";
 } else {
   x.className = "topnav";
 }
}

function scrollFunction() {
  document.getElementById("body").classList.remove("overflow");

  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    setIdAClass("navbar","nav-after");
    setIdAClass("brand","brand-after");
    
    //document.getElementById("myTopnav").style.marginTop="10px":
  } else {
    setIdAClass("navbar","nav-before");
    setIdAClass("brand","brand-before");
  }


  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    setIdAClass("open-resume","rotate-360d");
  }else{
    document.getElementById('open-resume').classList.remove("rotate-360d")
  }
}
