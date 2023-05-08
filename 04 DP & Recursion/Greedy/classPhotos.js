function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights = redShirtHeights.sort((a,b) => a-b);
  blueShirtHeights = blueShirtHeights.sort((a,b) => a-b);

  if(redShirtHeights[0] > blueShirtHeights[0]) {
    return redShirtHeights.every((s, index) => s > blueShirtHeights[index]);
  } else {
    return redShirtHeights.every((s, index) => s < blueShirtHeights[index]);
  }
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
