let colors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let btn = document.querySelector('.btn');
let text = document.querySelector('.colorCode'); 
let colorCode = "#";


btn.addEventListener('click',function(){
   for ( let i=0; i<6; i++){
       colorCode += colors[randomCode()];
       
   }
       document.body.style.backgroundColor = colorCode;
       text.textContent = colorCode;

       colorCode = "#";
});

function randomCode(){
    return (Math.floor (Math.random() * colors.length ));
    

    

}

