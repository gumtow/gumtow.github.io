
// OnLoad
$(()=>{

// =====================================================
// Define Global Variables
// =====================================================

// Const
const $user = $('#user');
const $cpu = $('#cpu');
const $squareToMatch = $('.square-to-match');
const $noMatchBtn = $('#no-match');
const $timer =$('#timer');
const valArray = [];
const valInPlay = [];
const $winnerModal = $('#winner-modal');
const $newGameModal = $('#new-game-modal');
const $modalText = $('#modal-text h1');
const $closeBtn = $('#close');
const $submit = $('#inputButton');
const $userName = $('#user-name');

// Let
let turn = "user";
let timeLeft = 10;
let myTimer;


// =====================================================
// Generate User Interface
// =====================================================

// Generate the Board
const generateBoard = (player) =>{
        player.empty();
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
        console.log(`values in play = ${valInPlay}`);
    }


// Generate Square to Match
const squareMatch=()=>{
    $squareToMatch.empty();
    $squareToMatch.text(valInPlay[Math.floor(Math.random()*valInPlay.length)]); 
    startTimer();    
}

// Open Modal
const openModal =(player)=>{
    stopTimer();
    if(player === "#user"){
        $modalText.text(`Congrats, You have won the game!`);
    };
    if(player === "#cpu"){
        $modalText.text(`Too bad, the CPU won the game!`);
        };
    $winnerModal.css('display', 'block');  
}

// Close Modal
const closeModal =()=>{
    $winnerModal.css('display', 'none');
    newGame();
}


// =====================================================
// Game Logic
// =====================================================

// Reset and start Timer
const startTimer = ()=>{
    clearInterval(myTimer);
    timeLeft = 10;
     myTimer = setInterval(()=>{
        timer();
        timeLeft--;
    }, 1000);
};

// Timer Function
const timer = ()=>{
    $timer.text(timeLeft);  
        if (timeLeft > 0){
            $timer.text(timeLeft);
        } else if (timeLeft <= 0){
            stopTimer();
            timeLeft = 10;
            cpuMatch();          
        }  
};

// stopTimer
const stopTimer=()=>{
    clearInterval(myTimer);
}


// Generate Value Array
const generateValues = () =>{
    valArray.splice(0,valArray.length);
    console.log(valArray);
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
            $cpuId.removeClass('open').addClass('matched').css({'background-color':'rgb(100, 104, 64)', 'color':'#ffffff'});
                    turn = "user";
                    const removeIndex = valInPlay.indexOf($cpuId.text());
                    valInPlay.splice(removeIndex, 1);         
        } else {
            turn = "user";
        }
    } 
    checkWinner('#cpu');
}

    // Generate Next Square to Match if no User Match
    const noMatch = (event) =>{
        $('audio#pop')[0].play();
        cpuMatch();
    }

// Check for a winner

const checkWinner =(player)=>{
    if ($(`${player} > #1`).hasClass('matched') && $(`${player} > #2`).hasClass('matched') && $(`${player} > #3`).hasClass('matched') && $(`${player} > #4`).hasClass('matched') && $(`${player} > #5`).hasClass('matched')) {
        openModal(player);    
    } else if ($(`${player} > #6`).hasClass('matched') && $(`${player} > #7`).hasClass('matched') && $(`${player} > #8`).hasClass('matched') && $(`${player} > #9`).hasClass('matched') && $(`${player} > #10`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #11`).hasClass('matched') && $(`${player} > #12`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #14`).hasClass('matched') && $(`${player} > #15`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #16`).hasClass('matched') && $(`${player} > #17`).hasClass('matched') && $(`${player} > #18`).hasClass('matched') && $(`${player} > #19`).hasClass('matched') && $(`${player} > #20`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #21`).hasClass('matched') && $(`${player} > #22`).hasClass('matched') && $(`${player} > #23`).hasClass('matched') && $(`${player} > #24`).hasClass('matched') && $(`${player} > #25`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #1`).hasClass('matched') && $(`${player} > #6`).hasClass('matched') && $(`${player} > #11`).hasClass('matched') && $(`${player} > #16`).hasClass('matched') && $(`${player} > #21`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #2`).hasClass('matched') && $(`${player} > #7`).hasClass('matched') && $(`${player} > #12`).hasClass('matched') && $(`${player} > #17`).hasClass('matched') && $(`${player} > #22`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #3`).hasClass('matched') && $(`${player} > #8`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #18`).hasClass('matched') && $(`${player} > #23`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #4`).hasClass('matched') && $(`${player} > #9`).hasClass('matched') && $(`${player} > #14`).hasClass('matched') && $(`${player} > #19`).hasClass('matched') && $(`${player} > #24`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #5`).hasClass('matched') && $(`${player} > #10`).hasClass('matched') && $(`${player} > #15`).hasClass('matched') && $(`${player} > #20`).hasClass('matched') && $(`${player} > #25`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #1`).hasClass('matched') && $(`${player} > #7`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #19`).hasClass('matched') && $(`${player} > #25`).hasClass('matched')) {
        openModal(player);
    } else if ($(`${player} > #5`).hasClass('matched') && $(`${player} > #9`).hasClass('matched') && $(`${player} > #13`).hasClass('matched') && $(`${player} > #17`).hasClass('matched') && $(`${player} > #21`).hasClass('matched')) {
        openModal(player);      
    } else {
        squareMatch();
    };
}

// =====================================================
// Start and reset Game
// =====================================================

// Start Game
const startGame =()=>{
    console.log('Start Game was run');
    valInPlay.splice(0,valInPlay.length);
    event.preventDefault();
    $newGameModal.css('display', 'none');
    $name = $('#player-name').val();
    $userName.text($name);
    generateBoard($user);
    generateBoard($cpu);
    squareMatch();
    
};

// New game Modal

const newGame = ()=>{
    $newGameModal.css('display', 'block');
}

newGame();


// =====================================================
// Event Handlers
// =====================================================

const takeTurn = (event)=>{
  
    // User Clicks on square
    if (turn === "user") {
        if ($(event.target).text() === $squareToMatch.text()){
            $('audio#pop')[0].play();
            $(event.target).removeClass('open').addClass('matched').css({'background-color':'rgb(212, 104, 64)', 'color':'#ffffff'});
            turn = "cpu";
            const removeIndex = valInPlay.indexOf($(event.target).text());
            valInPlay.splice(removeIndex, 1);
            cpuMatch();
            checkWinner('#user');
            
        };
    };
};

    // User Hover state
    const hover =(event)=>{
        if ($(event.target).hasClass('open')){
            if (turn === "user"){
                $(event.target).css({'background-color':'coral', 'color':'#ffffff'});
            };
        };
    };

    // Remove User Hover
    const hoverOut =(event)=>{
        if ($(event.target).hasClass('open')){
            $(event.target).css({'background-color':'cornsilk', 'color':'#000000'});
        };
    };

    // Next square to match
    $noMatchBtn.on('click', noMatch);

    // Close winner modal
    $closeBtn.on('click', closeModal);

    // Submit User Name and Start the game
    $submit.on('click', startGame);
});
