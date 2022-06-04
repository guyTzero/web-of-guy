export default {
  makeCircle() {
    function makeCircle(centerX, centerY, radius, a, arrayWidth, arrayHeight) {
      var x, y, d, yDiff, threshold, radiusSq;
      radius = radius * 2 + 1;
      radiusSq = (radius * radius) / 4;
      for (y = 0; y < arrayHeight; y++) {
        yDiff = y - centerY;
        threshold = radiusSq - yDiff * yDiff;
        for (x = 0; x < arrayWidth; x++) {
          d = x - centerX;
          a[y][x] = d * d > threshold ? 0 : 1;
        }
      }
    }

    // test code:
    var width = 20;
    var dim = width * 2 + 1;
    var array = new Array(dim);
    for (let row = 0; row < dim; row++) array[row] = new Array(dim);

    makeCircle(width, width, width, array, dim, dim);
    for (var y = 0, s = ""; y < dim; y++) {
      for (var x = 0; x < dim; x++) {
        s += array[y][x];
      }
      s = s + ",";
    }
    s = s.split(",");
  },
};
