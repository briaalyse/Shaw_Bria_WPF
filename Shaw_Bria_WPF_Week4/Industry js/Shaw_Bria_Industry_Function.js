/**
 * Bria Shaw
 * WPF 1406 Section 01
 * Industry Function
 * */


var totalOfWeeks = semesterLength(4,6);

function semesterLength(courseInWeeks, numOfCourses){


    var semesterLength = courseInWeeks * numOfCourses;
    return semesterLength;

}
console.log("You have " +totalOfWeeks+ " weeks in this semester.");

