// Code your solution in this file!
function distanceFromHqInBlocks(block){
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(b1, b2){
  return Math.abs( b1 - b2) * 264
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  switch(true){
    case distance < 400:
      return 0;
    case distance < 2000:
      return (distance - 400)* .02;
    case distance > 2500:
      return 'cannot travel that far';
    default:
      return 25;
  }
}
