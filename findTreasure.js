/**
 * Created by Crofty on 11/5/17.
 */

    //get random number from 0 to size-1

var getRandomNumber = function (size) {

        return Math.floor(Math.random() * size);

    };

//calculate distance between click(event) to treasure (target)

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;

    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

//hint how far you from treasure

var getDistanceHint = function (distance) {

    if (distance < 20) {
        return "You're so close!";
    }

    else if (distance < 40) {
        return "You're closer!";
    }

    else if (distance < 80) {
        return "Actually you on the right way!";
    }

    else if (distance < 100) {
        return "Common,you almost there!";
    }

    else if (distance < 160) {
        return "It's no here!";
    }
    else if (distance < 320) {
        return "You're so far!";
    }

};


//create variables

var width = 400;
var height = 400;
var clicks = 0;

//random position of treasure

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

//give element img click handler

$("#map").click(function (event) {
    clicks++;

    //show how many clicks gamer made

    document.getElementById("clicks").innerHTML = clicks;

    //get distance between click and treasure

    var distance = getDistance(event, target);

    //transform distance into hint

    var distanceHint = getDistanceHint(distance);

    //write into element #distance new hint

    $("#distance").text(distanceHint);

    //if click was too close, we congrats with victory

    if (distance < 10) {
        alert("Treasure was found! Clicks were made:" + clicks);
    }

    //if gamer made more than 50 clicks,would show massage "game over"

    if (clicks > 50) {

        alert("Sorry,but your game is over...")
    }

});
