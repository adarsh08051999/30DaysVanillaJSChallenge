let prev=null;
window.addEventListener('keydown',function(e){
    if(prev!== null){prev.classList.remove("special");}
    
    let x= "a"+e.keyCode;
    let Elem = document.getElementById(e.keyCode);
    let Aud = document.getElementById(x);
    prev=Elem;
    Elem.classList.add("special");
    Aud.currentTime=0;
    Aud.play();
    console.log("hell");
});




