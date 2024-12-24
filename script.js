var boxes = document.querySelectorAll(".button")
var msgBox = document.querySelector(".msgBox")
turnX =true;
var count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnX){
            msgBox.innerText = "Turn of Player 2 (O)";
            box.innerText ="X";
            turnX= false;
        }
        else{
            msgBox.innerText = "Turn of Player 1 (X)";
            box.innerText ="O";
            turnX= true;
        }
        box.disabled = true;
        count++;
        if (count == "9" && !checkWinner()){
            msgBox.innerText = "Its a Draw";
        }
        checkWinner();
    })
});
function checkWinner(){
    for(let pattern of winPatterns){
        var pos1val = boxes[pattern[0]].innerText;
        var pos2val = boxes[pattern[1]].innerText;
        var pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "", pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                msgBox.innerText =`${pos1val} Won The Match `;
                disable();
                return true;
            }
        }
    }
    return false;
};
function restart(){
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    });
    count = 0;
    turnX =true;
    msgBox.innerText = "Turn of Player 1 (X)";
};
function disable(){
    if (checkWinner){
        boxes.forEach((box)=>{
            box.disabled = true;
        });
    }
}


