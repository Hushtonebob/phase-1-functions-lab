// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
let blocks = 42;
    if (distance > 42) {
        return distance - blocks;
    } else { 
        return blocks - distance;
    }
} 


function distanceFromHqInFeet(feet) {
    if (feet > 42) { 
        return ((feet - 42)  * 264);   
    } else {
        return ((42 - feet) * 264);
    }
}

function distanceTravelledInFeet(num1,num2) {
    if (num1 > num2) {
        return ((num1 - num2) * 264);
    }
    else {
        return ((num2 - num1) * 264);
    }
    }

function calculatesFarePrice(start,end) {
    const distance = distanceTravelledInFeet(start,end)
    if (distance < 400) {
        return (0);
    }
    else if (distance > 400 && distance < 2000) {
        return (((distance) - 400) * .02); 
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
    }
    
