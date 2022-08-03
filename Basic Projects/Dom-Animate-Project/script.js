

function move(){
    let animate = document.getElementById("animate");
    let posi = 0;
 
    setInterval(function(){
     if(posi < 350){
         posi++;
         animate.style.top = `${posi}px`;
         animate.style.left = `${posi}px`;
     }
     else{
         clearInterval();
     }
 
    }, 5);
 }