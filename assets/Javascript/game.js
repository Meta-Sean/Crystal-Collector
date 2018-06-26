    // Global Variables
//Win Counter and Loss Counter
var winCounter = 0;
var lossCounter = 0;
// Random Number and Crystal Numbers;
var randomNum = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
// Running Score / Sum of crystals
var crystalSum = 0;


//Game Start Function, resets randomNum, crystal values and crystalSum.
function gameStart(){
    crystalSum = 0;

    randomNum = Math.floor(Math.random()*101) + 19;
    console.log(randomNum);

    crystalOne = Math.floor(Math.random()*12)+1;
    crystalTwo = Math.floor(Math.random()*12)+1;
    crystalThree = Math.floor(Math.random()*12)+1;
    crystalFour = Math.floor(Math.random()*12)+1;
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);
   
    $('.randomNum').html(randomNum);
    $('.total').html(crystalSum);
}
gameStart();

// Win / Loss Conditional Function to alert > increment win/loss > reset game
function gameOver(){
    if(crystalSum === randomNum){
        winCounter++;
        alert('You Win!');
        $('.win').html('<p>Wins: ' + winCounter + '</p>');
        gameStart();
    }
    else if (crystalSum >= randomNum){
        lossCounter++;
        alert('You Lose!');
        $('.loss').html('<p>Losses: ' + lossCounter + '</p>')
        gameStart();
    }
}
$('#crystalOne').on('click',function(){
    crystalSum += crystalOne;
    $('.total').html(crystalSum);
    gameOver();
});
$('#crystalTwo').on('click',function(){
    crystalSum += crystalTwo;
    $('.total').html(crystalSum);
    gameOver();
});
$('#crystalThree').on('click',function(){
    crystalSum += crystalThree;
    $('.total').html(crystalSum);
    gameOver();
});
$('#crystalFour').on('click',function(){
    crystalSum += crystalFour;
    $('.total').html(crystalSum);
    gameOver();
});