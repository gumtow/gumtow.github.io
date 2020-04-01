console.log('hey');
console.log($);
$(()=>{

// Define Global Variables

const $user = $('#user');
const $cpu = $('#cpu');
const $boardContainer = $('<div>').addClass('container');
const $squareToMatch = $('.square-to-match');
let time;
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
                $(event.target).css('background-color', 'black');
            })
            player.append($square);
        }
    }

// Generate Square to Match
const squareMatch=()=>{
    $squareToMatch.empty();
    $squareToMatch.text(randomNum());
}

// Set and start Timer
let timeLeft = setInterval(timer, 1000)



    generateBoard($user);
    generateBoard($cpu);
    squareMatch();
});
