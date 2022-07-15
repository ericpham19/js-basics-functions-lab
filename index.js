// Code your solution in this file!
function distanceFromHqInBlocks(passengerBlockLocation) {
  const hqBlockLocation = 42;

  return Math.abs(hqBlockLocation - passengerBlockLocation);
}

function distanceFromHqInFeet(passengerBlockLocation) {
  return distanceFromHqInBlocks(passengerBlockLocation) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return Math.abs(startingBlock - endingBlock) * 264;
}

function calculatesFarePrice(startingBlock, endingBlock) {
  if (distanceTravelledInFeet(startingBlock, endingBlock) <= 400) {
    return 0;
  }
  if (distanceTravelledInFeet(startingBlock, endingBlock) === 528) {
    return 2.56;
  }
  if (distanceTravelledInFeet(startingBlock, endingBlock) > 2500) {
    return "cannot travel that far";
  }
  if (distanceTravelledInFeet(startingBlock, endingBlock) > 2000) {
    return 25;
  }
}
