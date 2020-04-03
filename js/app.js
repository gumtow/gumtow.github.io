
// OnLoad
$(()=>{

// =====================================================
// Define Global Variables
// 
// =====================================================


// Const
const $user = $('#user');
const $cpu = $('#cpu');
const $squareToMatch = $('.square-to-match');
const $noMatchBtn = $('#no-match');
const $timer =$('#timer');
const valArray = [];
const valInPlay = [];

// Let
let turn = "user";
let myTimer;





// =====================================================
// Generate User Interface
// 
// =====================================================

// Generate the Board
const generateBoard = (player) =>{
        generateValues();
        for (let i=1; i<=25; i++){    
            // generate 25 squares with randoms numbers
            const $square = $('<div>').addClass('child').attr('id', i).addClass('open').text(randomIndex());
            valInPlay.push($square.text());
            if (player === $user){
                $square.on('click', takeTurn);
                $square.mouseenter(hover);
                $square.mouseleave(hoverOut);
            }
            // Append square to the board
            player.append($square);
        }
    }


// Generate Square to Match
const squareMatch=()=>{
    $squareToMatch.empty();
    $squareToMatch.text(valInPlay[Math.floor(Math.random()*valInPlay.length)]); 
    // timer(10);    
}

// Set and start Timer
// const timer = (time)=>{
//     let timeLeft = time;
//     $timer.text(timeLeft);
//     myTimer = setInterval(()=>{
//         timeLeft--;
//         if (timeLeft >= 0){
//             $timer.text(timeLeft);
//         } else if (timeLeft < 0){
//             $timer.text(timeLeft);
//             clearInterval(myTimer);
//             squareMatch();          
//         }
//     }, 1000);
    
// };

// =====================================================
// Event Handlers
// 
// =====================================================

const takeTurn = (event)=>{
    
    if (turn === "user") {
        if ($(event.target).text() === $squareToMatch.text()){
            $('audio#pop')[0].play();
            $(event.target).removeClass('open').addClass('matched').css({'background-color':'rgb(212, 104, 64)', 'color':'#ffffff'});
            turn = "cpu";
            const removeIndex = valInPlay.indexOf($(event.target).text());
            valInPlay.splice(removeIndex, 1);
            checkWinner('#user');
            cpuMatch();
            squareMatch();
        };
    };
};
const hover =(event)=>{
    if ($(event.target).hasClass('open')){
        if (turn === "user"){
            $(event.target).css({'background-color':'coral', 'color':'#ffffff'});
        };
    };
};
const hoverOut =(event)=>{
    if ($(event.target).hasClass('open')){
        $(event.target).css({'background-color':'cornsilk', 'color':'#000000'});
    };
};





// =====================================================
// Game Logic
// 
// =====================================================


// Generate Value Array
const generateValues = () =>{
    valArray.splice(0, valArray.length);
    for (let i=1; i<=50; i++){
        valArray.push(i);
    };
    console.log(valArray);
}

// Generate Random Number
const randomIndex = () =>{
    let num = Math.floor((Math.random()*valArray.length));
    let randomNum = valArray[num];
    valArray.splice(num, 1);
    return randomNum;
}

// check to see if CPU has match
const cpuMatch = () =>{
    for (let i=1; i<=25; i++){
            const $cpuId = $(`#cpu > #${i}`);
            if ($cpuId.text() === $squareToMatch.text()){
                $cpuId.removeClass('open').addClass('matched').css({'background-color':'rgb(212, 104, 64)', 'color':'#ffffff'});
                        turn = "user";
                        const removeIndex = valInPlay.indexOf($cpuId.text());
                        console.log(removeIndex);
                        valInPlay.splice(removeIndex, 1);
                        // console.log(valInPlay);
                        
            }
    }
    turn = "user";
    checkWinner('#cpu');
    squareMatch();
}

$noMatchBtn.on('click', cpuMatch);

// Check for a winner

const checkWinner =(player)=>{
    if ($(`${player} > #1`).hasClass('matched') && $(`${player} > #2`).hasClass('matched') && $(`${player} > #3`).hasClass('matched') && $(`${player} > #4`).hasClass('matched') && $(`${player} > #5`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #6`).hasClass('matched') && $(`${player} > #7`).hasClass('matched') && $(`${player} > #8`).hasClass('matched') && $(`${player} > #9`).hasClass('matched') && $(`${player} > #10`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #11`).hasClass('matched') && $(`${player} > #12`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #14`).hasClass('matched') && $(`${player} > #15`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #16`).hasClass('matched') && $(`${player} > #17`).hasClass('matched') && $(`${player} > #18`).hasClass('matched') && $(`${player} > #19`).hasClass('matched') && $(`${player} > #20`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #21`).hasClass('matched') && $(`${player} > #22`).hasClass('matched') && $(`${player} > #23`).hasClass('matched') && $(`${player} > #24`).hasClass('matched') && $(`${player} > #25`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #1`).hasClass('matched') && $(`${player} > #6`).hasClass('matched') && $(`${player} > #11`).hasClass('matched') && $(`${player} > #16`).hasClass('matched') && $(`${player} > #21`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #2`).hasClass('matched') && $(`${player} > #7`).hasClass('matched') && $(`${player} > #12`).hasClass('matched') && $(`${player} > #17`).hasClass('matched') && $(`${player} > #22`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #3`).hasClass('matched') && $(`${player} > #8`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #18`).hasClass('matched') && $(`${player} > #23`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #4`).hasClass('matched') && $(`${player} > #9`).hasClass('matched') && $(`${player} > #14`).hasClass('matched') && $(`${player} > #19`).hasClass('matched') && $(`${player} > #24`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #5`).hasClass('matched') && $(`${player} > #10`).hasClass('matched') && $(`${player} > #15`).hasClass('matched') && $(`${player} > #20`).hasClass('matched') && $(`${player} > #25`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #1`).hasClass('matched') && $(`${player} > #7`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #19`).hasClass('matched') && $(`${player} > #25`).hasClass('matched')) {
        endGame(player);
    } else if ($(`${player} > #5`).hasClass('matched') && $(`${player} > #9`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #17`).hasClass('matched') && $(`${player} > #21`).hasClass('matched')) {
        endGame(player);
        
    };
}

const endGame=(player)=>{
    alert(`${player} won!!!`);
    
    clearInterval(myTimer);
}





    generateBoard($user);
    generateBoard($cpu);
    // console.log(valInPlay);
    squareMatch();
    // const whichPlayer = '#user';
    // console.log($(`${whichPlayer} > #1`));
});
