
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
                break;
            case 68:
                blueBoxPosi1+=10;
                blueBox.style.left=blueBoxPosi1+"px";
                break;
        }
    ;}
;}




// sample
// window.onload = function(){
//     var redBoxposition=0;
//     var blueBoxPosi1=0;
//     document.addEventListener("keydown",moveBox);

//     var player1 = document.getElementById("player1");
//     var player2 = document.getElementById("player2");

//     function moveBox(e) {
//         switch(e.keyCode) {
//             case 90:
//                 player1position+=10;
//                 player1.style.left=player1position+"px";
//                 break;
//             case 39:
//                 player2position+=10;
//                 player2.style.left=player2position+"px";
//                 break;
//         }
//     }
// }








// scratch
// function movePlayer() {
//     var key = key just hit
//     element.addEventListener("keydown", keyDownTextField, true);
//     var player = if rightArrow then 'red'
//         if d then blue

// document.getElementById("red").addEventListener("keydown", myFunction);

// function myFunction() { console.log('you hit somethign');}
//     // document.getElementById("demo").innerHTML = "Hello World";
// }
