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

  getCount(node, low, high) {
    //Function to count number of nodes in BST that lie in the given range.
    if (node == null) return 0;

    // If current node is in range, then
    // include it in count and recur for
    // left and right children of it
    if (node.data >= low && node.data <= high)
      return (
        1 +
        this.getCount(node.left, low, high) +
        this.getCount(node.right, low, high)
      );
    // If current node is smaller than low,
    // then recur for right child
    else if (node.data < low) return this.getCount(node.right, low, high);
    // Else recur for left child
    else return this.getCount(node.left, low, high);
  },
  isInterleave(A, B, C) {
    // The main function that
    // returns true if C is
    // an interleaving of A
    // and B, otherwise false.

    // Find lengths of the two strings
    let M = A.length,
      N = B.length;

    // Let us create a 2D table
    // to store solutions of
    // subproblems.  C[i][j] will
    // be true if C[0..i+j-1]
    // is an interleaving of
    // A[0..i-1] and B[0..j-1].
    // Initialize all values as false.
    let IL = new Array(M + 1);

    for (let i = 0; i < M + 1; i++) {
      IL[i] = new Array(N + 1).fill(0);
    }

    // C can be an interleaving of
    // A and B only of the sum
    // of lengths of A & B is equal
    // to the length of C.
    if (M + N != C.length) return false;

    // Process all characters of A and B
    for (let i = 0; i <= M; ++i) {
      for (let j = 0; j <= N; ++j) {
        // two empty strings have an
        // empty string as interleaving
        if (i == 0 && j == 0) IL[i][j] = true;
        // A is empty
        else if (i == 0) {
          if (B[j - 1] == C[j - 1]) IL[i][j] = IL[i][j - 1];
        }

        // B is empty
        else if (j == 0) {
          if (A[i - 1] == C[i - 1]) IL[i][j] = IL[i - 1][j];
        }

        // Current character of C matches
        // with current character of A,
        // but doesn't match with current
        // character of B
        else if (A[i - 1] == C[i + j - 1] && B[j - 1] != C[i + j - 1])
          IL[i][j] = IL[i - 1][j];
        // Current character of C matches
        // with current character of B,
        // but doesn't match with current
        // character of A
        else if (A[i - 1] != C[i + j - 1] && B[j - 1] == C[i + j - 1])
          IL[i][j] = IL[i][j - 1];
        // Current character of C matches
        // with that of both A and B
        else if (A[i - 1] == C[i + j - 1] && B[j - 1] == C[i + j - 1])
          IL[i][j] = IL[i - 1][j] || IL[i][j - 1];
      }
    }

    return IL[M][N];
  },
  findTriplets(arr, n) {
    let found = false;

    // sort array elements
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 1; i++) {
      // initialize left and right
      let l = i + 1;
      let r = n - 1;
      let x = arr[i];
      while (l < r) {
        if (x + arr[l] + arr[r] == 0) {
          // print elements if it's sum is zero

          l++;
          r--;
          found = true;
          return 1;
        }

        // If sum of three elements is less
        // than zero then increment in left
        else if (x + arr[l] + arr[r] < 0) l++;
        // if sum is greater than zero then
        // decrement in right side
        else r--;
      }
    }

    if (found == false) return 0;
    //     let res = 0
    //   for(let i = 0 ; i < arr.length-2 ; i++){
    //       for(let j = i+1 ; j < arr.length-1 ; j++){
    //           for(let k = j + 1 ; k < arr.length ; k++){
    //               if(arr[i] + arr[j] + arr[k] == 0 ){
    //                   res = 1
    //               }
    //           }
    //       }
    //   }
    //   return res
  },
  findLongestWord(s, d) {
    let res = "";
    function check(d, s) {
      let i = 0;
      let j = 0;
      while (i < d.length && j < s.length) {
        if (d[i] == s[j]) {
          i++;
          j++;
        } else j++;
      }
      if (i == d.length && res.length < d.length) {
        res = d;
      }
    }
    function LongestWord(d, S) {
      // sort the dictionary word
      // for smallest lexicographical order
      d.sort();
      for (let c of d) {
        check(c, S);
      }
      return res;
    }
    return LongestWord(d, s);
  },
  goalParserInterpretation(command) {
    return command.replaceAll("(al)", "al").replaceAll("()", "o");
  },
  kidsWithCandies(candies, extraCandies) {
    let res = [];
    let checker = (arr) => arr.every((v) => v === true);
    for (let i = 0; i < candies.length; i++) {
      let ans = [];
      let curr = candies[i] + extraCandies;
      for (let j = 0; j < candies.length; j++) {
        if (curr >= candies[j]) {
          ans.push(true);
        } else {
          ans.push(false);
        }
      }
      res.push(checker(ans));
    }
    return res;
  },
  lengthOfLongestSubstringSlow(s) {
    if (!s) {
      return 0;
    }
    let c = 1;
    for (let i = 1; i < s.length; i++) {
      for (let j = 0; j < i; j++) {
        let str = s.split("");
        str = str.slice(j, i + 1);
        let _set = new Set(str);
        _set = Array.from(_set);
        if (str.length == _set.length) {
          c = c > str.length ? c : str.length;
        }
      }
    }
    return c;
  },
  lengthOfLongestSubstringFast(s) {
    // Store counters for the biggest string, the start of the window, and the current letter's position (end of window)
    let longestStringLength = 0,
      startOfWindow = 0,
      currentPosition = 0;

    // Initialise a Set to store the characters
    let characterSet = new Set();

    // Loop through the provided string
    while (currentPosition < s.length) {
      // Check if the current character exists in the Set
      if (characterSet.has(s[currentPosition])) {
        // If so, delete it from the Set (as it will be picked up on the next run), and move the window's start forwards
        characterSet.delete(s[startOfWindow++]);
      } else {
        // If not, add the current character to the Set, and move the current character forwards
        characterSet.add(s[currentPosition++]);
        longestStringLength = Math.max(longestStringLength, characterSet.size);
      }
    }

    return longestStringLength;
  },
};
