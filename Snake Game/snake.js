let directon = {x:0 , y:0};
let snakePlayGraound = document.querySelector(".snake-play-graound");
let leftBn = document.getElementById("lefBtn");
let rightBtn = document.getElementById("rightBtn");
let topBtn = document.getElementById("topBtn");
let downBtn = document.getElementById("downBtn");
let score = document.getElementById("score");
let score1 = 0; 
let speed = 5;
let lasttime = 0;

let snakeArr = [
    {x:13 , y:15}
];

food = {x:15,y:20}

// Game function
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lasttime)/1000 < 1/speed){
       return;
    }
    lasttime = ctime;
    gameEngine();

}
// iscollide functionn
function isCollide(snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        // body condion collide
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }    

     // playground condion collide
     if (snake[0].x >=30 || snake[0].x <= 0 || snake[0].y >=30 || snake[0].y <= 0) {
            return true;
            
     }
}


function gameEngine () {
    // update snake arr and food 
     if(isCollide(snakeArr)){
       directon = {x:0 , y:0};
       alert("Game Over ! , Press Any key to play agian");
       let snakeArr = [
        {x:13 , y:15}
        ];
        score1 = 0;
    }
    // eat have eten food regenrat food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score1 +=1;
        score.innerHTML=score1;
        snakeArr.unshift({x: snakeArr[0].x + directon.x , y: snakeArr[0].y + directon.y})
        let a = 2;
        let b = 28;
        food = {x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
        
    }
    // moving the snake 
    for (let i = snakeArr.length -2 ; i >=0; i--) {
        //const element = array[i];
        snakeArr[i+1] = {...snakeArr[i]};
        
    }
      snakeArr[0].x += directon.x ;
      snakeArr[0].y += directon.y ;

    // disple and creat  snake 
    snakePlayGraound.innerHTML = "";
    snakeArr.forEach((e,index)=>{
     snakeBody = document.createElement("div");
     snakeBody.style.gridRowStart = e.y;
     snakeBody.style.gridColumnStart =e.x;
     snakeBody.style.backgroundColor = "yellow";
     snakeBody.style.border = "1px solid black";
     if(index === 0){
        snakeBody.style.backgroundColor = "red";
     }
     snakePlayGraound.appendChild(snakeBody);
    });
    // display and craat food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart =food.x;
    foodElement.style.backgroundColor = "green";
    foodElement.style.height = "20px";
    foodElement.style.width = "20px";
    foodElement.style.borderRadius = "100%";
    snakePlayGraound.appendChild(foodElement);
    
    
}


// main logic start here
window.requestAnimationFrame(main);

window.addEventListener("keydown", e =>{
    directon = {x:0,y:1}// start the Game

    switch (e.key) {
        case "ArrowUp":
            directon.x = 0;
            directon.y = -1; 
            break;

        case "ArrowDown":
            directon.x = 0;
            directon.y = 1; 
            break;

        case "ArrowLeft":
            directon.x = -1;
            directon.y = 0; 
            break;

        case "ArrowRight":
            directon.x = 1;
            directon.y = 0; 
            break;  

        default:
            break;
    }
});

/// craet btn controll snake for withauth keybord
leftBn.addEventListener("click",()=>{
    //ArrowLeft
    directon.x = -1;
    directon.y = 0; 
});
rightBtn.addEventListener("click",()=>{
    //Arrowright
    directon.x = 1;
    directon.y = 0; 
});
topBtn.addEventListener("click",()=>{
    //Arrowtop
    directon.x = 0;
    directon.y = -1; 
});
downBtn.addEventListener("click",()=>{
    //Arrowdown
    directon.x = 0;
    directon.y = 1; 
})
