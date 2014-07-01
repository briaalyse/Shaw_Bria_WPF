/**
 * Bria Shaw
 * WPF 1406 Section 01
 * Personal Function
 */

var shoppingAmount = onlineScarvesTotal(5, 15, 9);

function onlineScarvesTotal(numOfScarves, priceOfScarves, shippingCost){

    var onlineScarvesTotal = numOfScarves * priceOfScarves + Number(shippingCost);
    return onlineScarvesTotal;



}
console.log("Your shopping total is $" +shoppingAmount+ ".00. Are you ready to checkout?.");


var minShoppingTotal = 50;

if(shoppingAmount <= minShoppingTotal){
    console.log("Are you sure you don't see anything else you like?");

}else{
    console.log("Thank you for ordering with us.")
}
