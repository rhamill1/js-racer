
window.onload = function() {

    document.addEventListener("keydown", moveBox);

    var redBox = document.getElementById('redBox');
    var blueBox = document.getElementById('blueBox');

    var redBoxPosi1 = 0;
    var blueBoxPosi1 = 0;

    function moveBox(e) {
        switch(e.keyCode) {
            case 39:
                redBoxPosi1+=10;
                redBox.style.left=redBoxPosi1+"px";
                // console.log(redBoxPosi1);
                declareWin(redBoxPosi1, blueBoxPosi1);
                break;
            case 68:
                blueBoxPosi1+=11;
                blueBox.style.left=blueBoxPosi1+"px";
                declareWin(redBoxPosi1, blueBoxPosi1);
                // console.log(blueBoxPosi1);
                break;
            case 37:
                redBoxPosi1-=10;
                redBox.style.left=redBoxPosi1+"px";
                // console.log(redBoxPosi1);
                declareWin(redBoxPosi1, blueBoxPosi1);
                break;
            case 65:
                blueBoxPosi1-=11;
                blueBox.style.left=blueBoxPosi1+"px";
                // console.log(redBoxPosi1);
                declareWin(redBoxPosi1, blueBoxPosi1);
                break;};}


    function declareWin(a, b) {

        var scoreBoard = document.getElementById('scoreBoard');
        scoreBoard.style.fontSize="40px";

        if (redBoxPosi1 > 500 && blueBoxPosi1 <= 500) {
            status = 'Original Party Parrot Wins!!!'
            scoreBoard.innerHTML = status;
            congrats();}
        else if (blueBoxPosi1 > 500 && redBoxPosi1 <= 500) {
            status = 'Pizza Party Parrot Wins!!!';
            scoreBoard.innerHTML = status;
            congrats();}
        else if (blueBoxPosi1 > 500 && redBoxPosi1 > 500) {
            scoreBoard.innerHTML = status;
            congrats();}
        else {scoreBoard.innerHTML = "it's a race to the party!!!";};}


    function congrats() {
        document.getElementById("congrats").style.display="inline-block";}
    //    document.getElementById("newGame").style.display="inline-block";}
    //         newGame()}


    // function newGame() {
    //     var newGame = document.getElementById("newGame");
    //     newGame.addEventListener("mousedown", console.log("click worked"));


    //     // on click reset game
    //     // on click capture winner's name and score +=1

    // }

;}

// ideas
    // players select parrots
    // reset game and keep track of prior wins
    // background and images scale right - office hours (I'm shooting in the dark on CSS)
    // better layout - how to make more portfolio calibre


// done
    // can go backwards
    // have declareWin() upate the scoreboard div
    // exit for loop
    // directions top right corner
    // andrew wk 'Welcome to the party friend.  Enjoy the festivities and a slice of fine pizza, winner!'
