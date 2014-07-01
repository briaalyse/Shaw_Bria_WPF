/**
 * Bria Shaw
 * WPF 1406 Section 01
 * Wacky Function
 */


var totalOfMinions;
totalOfMinions = function (numOfShips, numOfMinionsPerShip) {
    var minionsPresent = numOfShips * numOfMinionsPerShip;
    return minionsPresent;

};

var a = totalOfMinions(34,10);

console.log("There are " +a+ " Minions coming off the Spaceships!");


maxNumOfMinions = 34;

(totalOfMinions<= maxNumOfMinions) ? console.log("Wow! This is a great surprise") : console.log("There is way too many of you little yellow guys!");


