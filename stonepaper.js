/*let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");*/
let userScore=document.querySelector("#userscore");
let compScore=document.querySelector("#computerscore");

let mssg=document.querySelector("button");
let choices=document.querySelectorAll(".choice");

 const computerchoice=()=>
 {
    let options=["rock","paper","scissors"];
    let x=Math.floor(Math.random()*3);
    return options[x];

 }


 const playGame=(choosenone)=>
 {
    console.log("user choice is:",choosenone);
    
    // now i have to generate the computer choice we will make fuctuon of it
    let compchoice=computerchoice();
    console.log(" computers choice is:",compchoice);
    if(compchoice===choosenone)
    {
   console.log("draw");
   mssg.innerText=("it was draw babe");
   mssg.style.backgroundColor="black";
   
    }
    else
    {
        /*if(compchoice==='rock' && choosenone==='paper')
        {
             console.log("you won");
             return 0;
        }
      
        if(compchoice==='paper'&& choosenone==='scissors')
        {
            console.log("you won");
            return 0;
        }
      
        if(compchoice==='scissors'&& choosenone==='rock')
        {
            console.log("you won");
            return 0;
        }
        else{
            console.log("you lost");
            
        }
        */

       // now i am going to write the different logic usign the ternary operator
       let userwin=true;
    if(compchoice==='rock')
         userwin=(choosenone==="paper")? true:false;
   else if(compchoice==='paper')
         userwin=(choosenone==="scissors")? true:false;
    else if(compchoice==='scissors')
         userwin=(choosenone==="rock")? true:false;
        if(userwin)
        {
        console.log("you win");
        mssg.innerText=("you have won babe");
        userScore.innerText++;
        mssg.style.backgroundColor="blue";
        }
        else
        {
        console.log("you lost")
        mssg.innerText=("you have lost babe");
        compScore.innerText++;
        mssg.style.backgroundColor="red";
        }
    }

     
 }
choices.forEach( 
    (choice)=>
{
    choice.addEventListener("click",()=>{
        const choosenone=choice.getAttribute("id");
       // let userscore=document.querySelectorAll("#userscore");
       playGame(choosenone);


    });
});
// above i have created the choicses to choose in inside the for each looop i have created a fuction 


