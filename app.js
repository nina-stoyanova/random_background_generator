
function getRandomIndex(){
    var randomIndex = Math.floor(Math.random() * 16); //randomIndex = for instance 12
    return randomIndex;
}



$(document).ready(function() { 
    $("button").click(function() {
         
        var colors = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
        var first = colors[getRandomIndex()];  // 1 - c
        var second = colors[getRandomIndex()]; // c
        var third = colors[getRandomIndex()]; // c
        var fourd = colors[getRandomIndex()]; //c
        var fifth = colors[getRandomIndex()]; //c
        var six = colors[getRandomIndex()];   
        var summery = "#" + first + second + third + fourd+ fifth + six;

        
        $("section").css("background-color", summery);    // red = #a5f2b6
    })
})

