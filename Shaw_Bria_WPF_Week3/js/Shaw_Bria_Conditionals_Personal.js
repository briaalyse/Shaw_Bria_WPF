/**
 * Bria Shaw
 * WPF 1406 Section 01
 * Conditional Personal
 */
var hairArganOil = true
var deepConditioner = true

if(hairArganOil){
    //if I use the Hair Argan Oil, console will print "Your hair looks nice today!"
    console.log("Your hair looks nice today!")
}else{
    //If I don't use Hair Argan Oil, console will print "Oh geese, your hair looks pretty damaged."
    console.log("Oh geese, your hair looks pretty damaged.")
}

(hairArganOil= false && deepConditioner) ? console.log("Your hair looks nice today!") : console.log("Oh geese, your hair looks pretty damaged.")