let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame = () => {
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner ();
    });
});
const disableboxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showwinner = (winner) => {
    msg.innerText=`Congratulations, the winner is ${winner}`;;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for(let patterns of winpatterns){
               /* console.log(pattern[0],pattern[1],pattern[2]);
                console.log(
                    boxes[patterns[0]].innerText,
                    boxes[patterns[1]].innerText,
                    boxes[patterns[2]].innerText
                );*/
                
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val!="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                        showwinner(pos1val);
                        return;
            }
        }
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
