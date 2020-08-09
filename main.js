let boton = document.getElementById("icono");
let nav1 = document.getElementById("nav1");
let contador = 0;

boton.addEventListener("click",function(){
    if (contador == 0) {
        nav1.className = ('nav1 dos');
        contador=1;
        
    } else {
        nav1.classList.remove('dos');
        nav1.className = ( 'nav1 uno');
        contador = 0;
        
    }
})

window.addEventListener('resize',function(){
    if(screen.width>758){
        contador=0;
        enlaces.className=('nav1 uno');
    }
})