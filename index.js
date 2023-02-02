// Code your solution in this file!

const returnFirstTwoDrivers = function(array1) {
    let array2 = array1.slice(0,2)
    return array2
}

const returnLastTwoDrivers = function(array1) {
    let array2 = array1.slice(-2)
    return array2
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(inT) {
    return function() {
        return inT * 5;
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(arrayOfDrivers, funct) {
    if (funct === returnFirstTwoDrivers) {
        let array2 = arrayOfDrivers.slice(0,2)
        return array2
    } else if (funct === returnLastTwoDrivers) {
        let array2 = arrayOfDrivers.slice(-2)
        return array2
    }
}