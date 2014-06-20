/**
 * Bria Shaw
 * WPF 1406 Section 01
 * Conditional Wacky
 */


var heelHeight = 3;
var minHeelHeight = 5;
var wedgeHeel = 1;

if(heelHeight < minHeelHeight){
    //if heel height is lower than min heel height, console will print "OMG, you look so short!"
    console.log("OMG, you look so short!")
}else{
    console.log("You look about average height.")
}

(heelHeight > minHeelHeight && wedgeHeel) ? console.log("You look so tall today!") : console.log("You look about average height.")