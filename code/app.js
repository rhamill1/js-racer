
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

        // var blueBox = document.getElementById('blueBox');

        if (redBoxPosi1 > 500 && blueBoxPosi1 < 500) {
            console.log('Red Wins!!!');}
        else if (blueBoxPosi1 > 500 && redBoxPosi1 < 500) {
            console.log('Blue Wins!!!');}
        else {console.log("it's a race to the party!!!");};}


    // function declareWin(a, b) {

    //     var scoreBoard = document.getElementById('scoreBoard');

    //     if (redBoxPosi1 > 500 && blueBoxPosi1 < 500) {
    //         // console.log('Red Wins!!!');}
    //         var status = document.createTextNode('Red Wins!!!');}
    //         scoreboard.appendChild(status);
    //     else if (blueBoxPosi1 > 500 && redBoxPosi1 < 500) {
    //         // console.log('Blue Wins!!!');}
    //         var status = document.createTextNode('Blue Wins!!!');
    //         scoreboard.appendChild(status);}
    //     else if (blueBoxPosi1 > 500 && redBoxPosi1 > 500) {
    //         // console.log('Blue Wins!!!');}
    //         var status = status;
    //         scoreboard.appendChild(status);}

    //     else {console.log("it's a race to the party!!!")
    //         var status = status;
    //         scoreboard.appendChild(status);};}


// ideas
    // have declareWin() upate the scoreboard div
    // exit for loop
    // players select parrots
    // reset game and keep track of prior wins
    // andrew wk 'Welcome to the party friend.  Enjoy a slice of fine pizza and the festivities, winner!'
    // background and images scale right

    // can go backwards


;}
