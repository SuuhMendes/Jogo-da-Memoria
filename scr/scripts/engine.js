const cards=[
    'brook',
    'chopper',
    'nami',
    'frank',
    'sanji',
    'luffy',
    'zorinho',
    'robin',
    'brook',
    'chopper',
    'nami',
    'frank',
    'sanji',
    'luffy',
    'zorinho',
    'robin',

];


let openCards=[];
let shuffleCards=cards.sort(()=>(Math.random()>0.5? 2 : -1));

for(let i=0; i< cards.length; i++){
    let box= document.createElement("div");
    box.className="item";
    box.onclick=handleClick;
    box.style.backgroundImage =`url('./scr/imagens/${cards[i]}.jpg')`;
    box.style.backgroundSize="cover"; 
    document.querySelector(".game").
    appendChild(box);

}

function handleClick(){
    if(openCards.length<2){
        this.classList.add("boxOpen");
        openCards.push(this);

        if(openCards.length==2){
            setTimeout(checkMatch,500)
        }
    }

}
function checkMatch(){
    if(openCards[0].outerHTML==openCards[1].outerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }
     else{
                openCards[0].classList.remove("boxOpen");
                openCards[1].classList.remove("boxOpen");
        }
        openCards=[];

         if(document.querySelectorAll(".boxMatch").length===cards.length){
          
           
            document.getElementById("win").innerHTML="Oba! você venceuu";
         
}}

   
  
  