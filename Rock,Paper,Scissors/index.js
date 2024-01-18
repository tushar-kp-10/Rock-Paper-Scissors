let userScore=0;
let compScore=0;
const choice=document.querySelectorAll(".choices");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user_score");
const compScorePara=document.querySelector("#comp_score");

const genCompChoice=()=>
{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor='green';
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose!  ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor='red';
    }
}

const drawGame=()=>{
    msg.innerText="Game was draw.Play again";
    msg.style.backgroundColor='#081b31';
}
const playGame=(userChoice)=>
{
    const CompChoice=genCompChoice();
    if(userChoice===CompChoice)
    {
        drawGame();//Draw Game
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin= CompChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin= CompChoice==="scissor"?false:true;
        }
        else
        {
                userWin= CompChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
};


choice.forEach((choices)=>{
    choices.addEventListener("click",()=>
    {
        const userChoice=choices.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});