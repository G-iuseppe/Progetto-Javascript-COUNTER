const counter=document.getElementById("counter");
const increase=document.getElementById("increaseBtn");
const reset=document.getElementById("reset");
const decrease=document.getElementById("decreaseBtn");
let contatore=0;

increase.addEventListener("click",function(){
contatore++;
counter.textContent=contatore; 
}
)

decrease.addEventListener("click",function(){
contatore--;
counter.textContent=contatore; 
}
)

reset.addEventListener("click",function(){
contatore=0;
counter.textContent=contatore; 
}
)