/**
 * Bria Shaw
 * WPF 1406 Section 01
 * Conditional Industry
 */

var deadlineTimeMet = 15;
var maxTestTime = 12;
var testSubmissionTime = 1;
var allowedExtenstion = true;

//if the student meets the 12 o'clock deadline for the test, print to console "Your test has been submitted."
//if the deadline met is 15
if(deadlineTimeMet + testSubmissionTime< maxTestTime){
    //code performed if submission time is 12.
    console.log("Your test has been submitted.");
}else{
    console.log("Your test has not submitted, you have missed the deadline.")
}

(deadlineTimeMet && allowedExtenstion) ? console.log("Your test has been submitted.") :
    console.log("Your test has not submitted, you have missed the deadline.")

