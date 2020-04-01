console.log('hey');
console.log($);
$(()=>{

// Define Global Variables

const $user = $('#user');
const $cpu = $('#cpu');
const $boardContainer = $('<div>').addClass('container');
const $squareToMatch = $('.square-to-match');
const $timer =$('#timer');


$('body').append($boardContainer);

// Generate Random Number
const randomNum = () =>{
    let num = Math.floor((Math.random()*50)+1);
    return num;
}

// Generate the Board
const generateBoard = (player) =>{
        $boardContainer.empty();
        for (let i=1; i<=25; i++){
            const $square = $('<div>').addClass('child').addClass(`child-${i}`).text(randomNum());
            $square.on('click', (event)=>{
                $(event.target).css({'background-color':'rgb(212, 104, 64)', 'color':'#ffffff'});
                console.log('clicked!')
            });
            $square.mouseenter((evt)=>{
                $(event.target).css({'background-color':'coral', 'color':'#ffffff'});
            });
            $square.mouseleave((evt)=>{
                $(event.target).css({'background-color':'cornsilk', 'color':'#000000'});
            });
            player.append($square);
        }
    }

// Generate Square to Match
const squareMatch=()=>{
    $squareToMatch.empty();
    $squareToMatch.text(randomNum());
    
    timer(10);
    
}

// Set and start Timer
const timer = (time)=>{
    let timeLeft = time;
    $timer.text(timeLeft);
    myVar = setInterval(()=>{
        timeLeft--;
        if (timeLeft >= 0){
            $timer.text(timeLeft);
        } else if (timeLeft < 0){
            $timer.text(timeLeft);
            clearInterval(myVar);
            squareMatch();
            // console.log(myVar);
              
        }
    }, 1000);
    
};





    generateBoard($user);
    generateBoard($cpu);
    squareMatch();
    // timer(10);
});
