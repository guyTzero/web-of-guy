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
  countPoints(points, queries) {
    /**
     * @param {number[][]} points
     * @param {number[][]} queries
     * @return {number[]}
     */
    let res = queries.map((e) => solve(e));

    function solve([qX, qY, qR]) {
      let res = 0;
      for (let [x, y] of points) {
        let [nX, nY] = [x - qX, y - qY];
        console.log([nX, nY]);
        console.log(nX ** 2, nY ** 2);
        console.log(nX ** 2 + nY ** 2);
        console.log("Math.sqrt", Math.sqrt(nX ** 2 + nY ** 2));
        console.log("qR ", qR);
        console.log("res", Math.sqrt(nX ** 2 + nY ** 2) <= qR);
        res += Math.sqrt(nX ** 2 + nY ** 2) <= qR;
        console.log("result ", res);
      }
      return res;
    }

    return res;
  },
  subarraySum(nums, k) {
    let to = 0; // total
    let pr = 0; // prefix sum
    let ma = new Map(); // map of  prefix sums & their count

    ma.set(pr, (ma.get(pr) || 0) + 1);

    console.log(ma);

    for (let num of nums) {
      pr += num;
      to += ma.get(pr - k) || 0;
      ma.set(pr, (ma.get(pr) || 0) + 1);
    }

    return to;
  },
  singleNumber(arr) {
    let s = new Set();
    for (let i = 0; i < arr.length; i++) {
      if (s.has(arr[i])) s.delete(arr[i]);
      else s.add(arr[i]);
    }
    return Array.from(s).sort(function (a, b) {
      return a - b;
    });
    //   let box = []
    //   for(let i = 0 ;i < nums.length ; i++ ){
    //       let ele = nums[i]
    //       nums[i] = null
    //       if(!nums.includes(ele)){
    //           box.push(ele)
    //       }
    //       nums[i] = ele
    //   }
    //   return box.sort(function(a, b){return a - b});
  },
  maxIndexDiff(arr, n) {
    var rightMax = new Array(n).fill(0);
    rightMax[n - 1] = arr[n - 1];
    for (var i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], arr[i]);
    }

    // rightMax[i] = max{ arr[i...(n-1] }
    var maxDist = Number.MIN_VALUE;
    var i = 0;
    var j = 0;
    while (i < n && j < n) {
      if (rightMax[j] >= arr[i]) {
        maxDist = Math.max(maxDist, j - i);
        j++;
      } // if(rightMax[j] < leftMin[i])
      else {
        i++;
      }
    }
    return maxDist == 5e-324 ? 0 : maxDist;
  },
};
