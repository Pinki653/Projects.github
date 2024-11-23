let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let reset2 = document.querySelector("#reset2");
let msg = document.querySelector(".msg");
let ms = document.querySelector("#ms");
let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>{
    turnO = true;
    formovement();
    msg.classList.add("hide");
}
const formovement = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 
boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turnO){
        box.innerText = "O";
        turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
       check();
    });
});
const stopthemovement = () => {
    for(let box of boxes){
        box.disabled = true;
    }
} 
const showwinner = (winner) => {
    ms.innerText = `Congratulations , Winner is ${winner}`;
    msg.classList.remove("hide");
    stopthemovement();
}
const check = () => {
    for(let pattern of winpatterns){
     
      
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
        if (val1 === val2 && val2 === val3 && val1 !== "") {
          console.log("Winner",val1);
          showwinner(val1);
        }
        
        }
    }
}
reset2.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);