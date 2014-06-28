/**
 * Bria Shaw
 * WPF 1406 Section 01
 * Personal Function
 */

function onlineScarvesPrice() {

    var numofScarves = 5;
    var priceOfScarves = 15;
    var shippingCost= 9;
    var onlineScarvesPrice = numofScarves * priceOfScarves + shippingCost;
    console.log(onlineScarvesPrice);


}
 onlineScarvesPrice();

var amountOfScarves = 5;
var minAmountOfScarves = 5;

if(amountOfScarves >= minAmountOfScarves){
    console.log("Are you ready to check out?");

}else{
    console.log("Are you sure you don't see any other scarves you would like?")
}

