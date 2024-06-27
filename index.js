// Code your solution in this file!
// Function to calculate distance in blocks from Scuber's headquarters (42nd Street)
function distanceFromHqInBlocks(pickupLocation) {
    const hq = 42;
    return Math.abs(pickupLocation - hq);
}

// Function to calculate distance in feet from Scuber's headquarters (42nd Street)
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}

// Function to calculate distance in feet between two given blocks
function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * 264;
}

// Function to calculate fare price based on distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};

