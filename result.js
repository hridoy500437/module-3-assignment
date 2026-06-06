//! Task 4: Pass or Fail Program

let marks = 55;

if(marks > 100  || marks < 0 || isNaN(marks) || typeof marks !== "number" ){
    console.log("Invalid Marks");
}

else if(marks < 50){
    console.log("Your Grade: Fail");
}

else if(marks < 60){
    console.log("Your Grade: C");
}

else if(marks < 70){
    console.log("Your Grade: B");
}

else if(marks < 80){
    console.log("Your Grade: A");
}

else{
    console.log("Your Grade: A+");
}
