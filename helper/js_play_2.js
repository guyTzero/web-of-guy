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
  restoreString(s, indices, type = 1) {
    if (type == 1) {
      let _s = new Array(s.length).fill("");
      for (let i = 0; i < indices.length; i++) {
        _s[indices[i]] = s[i];
      }
      return _s.join("");
    } else {
      let [_s, obj] = [new Array(s.length).fill(""), {}];
      return _s
        .map((e, k) => {
          obj[indices[k]] = s[k];
        })
        .map((e, k) => obj[k])
        .join("");
    }
  },
  createTargetArray(nums, index) {
    let res = new Array(nums.length).fill(null);
    for (let i = 0; i < nums.length; i++) {
      res.splice(index[i], 0, nums[i]);
    }
    return res.filter((e) => e !== null);
  },
  makeTree() {
    function Node(value) {
      this.value = value;
      // this.left = null;
      // this.right = null;
    }

    function insertNode(tree, value) {
      var node = tree,
        key;
      while (node.value !== value) {
        key = value < node.value ? "left" : "right";
        if (!node[key]) {
          node[key] = new Node(value);
          break;
        }
        node = node[key];
      }
      return tree;
    }

    var array = [8, 10, 12, 5, 3, 6],
      tree = array.reduce((t, v) => (t ? insertNode(t, v) : new Node(v)), null);

    console.log(tree);
  },
  cellsInRange(s) {
    let _s = s.split(":");
    let start = _s[0][0].charCodeAt(0);
    let end = _s[1][0].charCodeAt(0);
    let s_start = _s[0][1];
    let s_end = _s[1][1];
    let res = [];
    for (let i = start; i <= end; i++) {
      for (let k = s_start; k <= s_end; k++) {
        res.push(String.fromCharCode(i) + k);
      }
    }
    return res;
  },
  countMatches(items, ruleKey, ruleValue) {
    return items.filter(
      (e, k) =>
        e[ruleKey == "type" ? 0 : ruleKey == "color" ? 1 : 2] == ruleValue
    ).length;
  },
  decodeWithXor(encoded, first) {
    let ans = [first];
    for (let i = 0; i < encoded.length; i++) {
      ans.push(ans[ans.length - 1] ^ encoded[i]);
    }
    return ans;
  },
  sumOddLengthSubarrays(arr) {
    // Stores the sum
    let sum = 0;

    // Size of array
    let l = arr.length;

    // Traverse the given array arr[]
    for (let i = 0; i < l; i++) {
      // Add to the sum for each
      // contribution of the arr[i]
      sum += Math.floor(((i + 1) * (l - i) + 1) / 2) * arr[i];
    }

    // Return the final sum
    return sum;
  },
  minMovesToSeat(seats, students) {
    let ans = 0;
    seats.sort(function (a, b) {
      return a - b;
    });
    students.sort(function (a, b) {
      return a - b;
    });
    for (let i = 0; i < seats.length; i++) {
      ans = ans + Math.abs(seats[i] - students[i]);
    }
    return ans;
  },
  countKDifference(nums, k) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
        if (Math.abs(nums[i] - nums[j]) == k) {
          res = res + 1;
        }
      }
    }
    return res;
  },
  countConsistentStrings(allowed, words) {
    allowed = allowed.split("");
    let res = 0;
    for (let i = 0; i < words.length; i++) {
      let c = 0;
      // console.log('------------'+ words[i] +'---------------')
      for (let j = 0; j < words[i].length; j++) {
        // console.log('============'+ words[i][j] +'===============')
        if (allowed.includes(words[i][j])) {
          // console.log('is_correct')
          c = c + 1;
        }
      }
      if (c == words[i].length) {
        // console.log('added')
        res = res + 1;
      }
    }
    return res;
  },
  truncateSentence(s, k) {
    return s.split(" ").slice(0, k).join(" ");
  },
  maxProductDifference(nums) {
    let max = 0;
    let min = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let k = 0; k < nums.length; k++) {
        if (k !== i) {
          if (nums[i] * nums[k] >= max) {
            max = nums[i] * nums[k];
            if (i == 0) {
              min = nums[i] * nums[k];
            }
          } else if (nums[i] * nums[k] <= min) {
            min = nums[i] * nums[k];
          }
        }
      }
    }
    return max - min;
  },
  uniqueMorseRepresentations(words) {
    let trans = [
      ".-",
      "-...",
      "-.-.",
      "-..",
      ".",
      "..-.",
      "--.",
      "....",
      "..",
      ".---",
      "-.-",
      ".-..",
      "--",
      "-.",
      "---",
      ".--.",
      "--.-",
      ".-.",
      "...",
      "-",
      "..-",
      "...-",
      ".--",
      "-..-",
      "-.--",
      "--..",
    ];
    let ans = [];
    for (let i = 0; i < words.length; i++) {
      let s = "";
      for (let j = 0; j < words[i].length; j++) {
        s = s + trans[words[i][j].charCodeAt(0) - 97];
      }
      ans.push(s);
    }
    let res = new Set(ans);
    return res.size;
  },
  diagonalSum(mat) {
    let sum = 0;
    let mid = Math.floor(mat.length / 2);
    let isOdd = mat.length % 2 == 0 ? false : true;

    for (let i = 0; i < mat.length; i++) {
      if (i == mid && isOdd) {
        sum = sum + mat[i][i];
      } else {
        sum = sum + mat[i][i];
      }
    }
    mat.reverse();
    for (let i = 0; i < mat.length; i++) {
      if (i == mid && isOdd) {
      } else {
        sum = sum + mat[i][i];
      }
    }

    return sum;
  },
  minTimeToVisitAllPoints(points) {
    let allCount = 0;
    for (let i = 0; i < points.length - 1; i++) {
      let x = points[i][0];
      let y = points[i][1];
      let _x = points[i + 1][0];
      let _y = points[i + 1][1];
      let count = 0;
      while (x !== _x || y !== _y) {
        if (x !== _x) {
          if (x < _x) {
            x = x + 1;
          } else {
            x = x - 1;
          }
        }
        if (y !== _y) {
          if (y < _y) {
            y = y + 1;
          } else {
            y = y - 1;
          }
        }
        count = count + 1;
      }
      allCount = allCount + count;
    }
    return allCount;
  },
  countGoodRectangles(rectangles) {
    // sexy code ayy?
    let box = rectangles.map((e) => (e[0] > e[1] ? e[1] : e[0]));
    const most = Math.max(...box);
    return box.filter((e) => e == most).length;
  },
  firstPalindrome(words) {
    for (let i = 0; i < words.length; i++) {
      if (words[i] == words[i].split("").reverse().join("")) {
        return words[i];
      }
    }
    return "";
  },
  maxProduct(nums) {
    nums = nums.sort(function (a, b) {
      return a - b;
    });
    return (nums[nums.length - 2] - 1) * (nums[nums.length - 1] - 1);
  },
  largestAltitude(gain) {
    let res = [0];
    for (let i = 0; i < gain.length; i++) {
      res.push(res[i] + gain[i]);
    }
    return Math.max(...res);
  },
  oddCells(n, m, indices) {
    const row = new Array(n).fill(0);
    const col = new Array(m).fill(0);
    console.log(row, col);

    for (let i = 0; i < indices.length; i++) {
      row[indices[i][0]]++;
      col[indices[i][1]]++;
    }

    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if ((row[i] + col[j]) % 2 !== 0) {
          count++;
        }
      }
    }

    return count;
  },
  targetIndices(nums, target) {
    nums.sort((a, b) => a - b);
    nums = nums.map((e, k) => {
      if (e == target) {
        return k;
      }
    });
    return nums.filter((e) => e > -1);
  },
  findGCD(nums) {
    function isInt(n) {
      return Number(n) === n && n % 1 == 0;
    }
    nums = nums.sort((a, b) => a - b);

    let min = nums[0];
    let max = nums[nums.length - 1];
    // let min = Math.min(...nums)
    // let max = Math.max(...nums)
    let res = null;
    for (let i = min; i > -1; i--) {
      if (isInt(min / i) && isInt(max / i)) {
        res = i;
        break;
      }
    }
    return res;
  },
  prefixCount(words, pref) {
    return words.filter((e) => e.substring(0, pref.length) == pref).length;
  },
  sumZero(n) {
    // faster
    if (n == 1) return [0];
    let res = [];
    if (n % 2 !== 0 ? true : false) res.push(0);
    for (let i = 1; i <= parseInt(n / 2); i++) {
      res.push(Math.abs(i));
      res.push(-Math.abs(i));
    }
    return res;
    // slower
    // if(n == 1) return [0]
    // const values = new Array(parseInt(n/2)).fill(1).reduce((acc, cur ,i) => {
    //     return acc.concat([Math.abs(i+1),-Math.abs(i+1)]);
    // }, []);
    // n % 2 !== 0 ? values.push(0) : null
    // return values
  },
  findNumbers(nums) {
    return nums.filter((e, k) => String(e).length % 2 == 0).length;
  },
  busyStudent(startTime, endTime, queryTime) {
    return startTime.filter((e, k) => e <= queryTime && endTime[k] >= queryTime)
      .length;
  },
  diStringMatch(s) {
    let numArr = [];
    for (let i = 0; i <= s.length; i++) {
      numArr.push(i);
    }
    let res = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "I") {
        let min = Math.min(...numArr);
        let index = numArr.indexOf(Math.min(...numArr));
        res.push(min);
        numArr.splice(index, 1);
      } else {
        let max = Math.max(...numArr);
        let index = numArr.indexOf(max);
        res.push(max);
        numArr.splice(index, 1);
      }
    }
    return res.concat(numArr);
  },
  arrayPairSum(nums) {
    nums.sort(function (a, b) {
      return a - b;
    });
    function splitToChunks(array, parts) {
      let result = [];
      for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
      }
      return result;
    }
    let sp = splitToChunks(nums, nums.length / 2);
    let res = [];
    for (let i = 0; i < sp.length; i++) {
      res.push(Math.min(...sp[i]));
    }
    return res.reduce((partialSum, a) => partialSum + a, 0);
  },
  divideArray(nums) {
    nums.sort(function (a, b) {
      return a - b;
    });
    function splitToChunks(array, parts) {
      let result = [];
      for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
      }
      return result;
    }
    let sp = splitToChunks(nums, nums.length / 2);
    let check = true;
    for (let i = 0; i < sp.length; i++) {
      if (sp[i][0] !== sp[i][1]) {
        check = false;
      }
    }
    return check;
  },
  //     const useDebouncedEffect = (effect, deps, delay) => {
  //     useEffect(() => {
  //       const handler = setTimeout(() => effect(), delay);

  //       return () => clearTimeout(handler);
  //     }, [...(deps || []), delay]);
  //   };
  //   useDebouncedEffect(
  //     () => {
  //       if (onScrollLoad > 1) {
  //         console.log('DebounceSetPage');
  //         setPage(page + 1);
  //       }
  //     },
  //     [onScrollLoad],
  //     1000,
  //   );
  //   const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  //     const paddingToBottom = 20;
  //     return (
  //       layoutMeasurement.height + contentOffset.y >=
  //       contentSize.height - paddingToBottom
  //     );
  //   };
  //   return (
  //     <View style={{flex: 1, height: '100%'}}>
  //         <ScrollView
  //           onScroll={({nativeEvent}) => {
  //             if (isCloseToBottom(nativeEvent) && onScrollLoad) {
  //               setOnScrollLoad(onScrollLoad + 1);
  //             }
  //           }}
  //           scrollEventThrottle={400}
  repeatedNTimes(nums) {
    // let q = nums.map(v => nums.filter(e => e == v)).filter(e => e.length == nums.length/2)
    // return q[0][0]
    for (let i = 0; i < nums.length; i++) {
      if (nums.filter((e) => e == nums[i]).length == nums.length / 2) {
        return nums[i];
      }
    }
  },
  minCostToMoveChips(position) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < position.length; i++) {
      if (position[i] % 2) {
        even++;
      } else {
        odd++;
      }
    }

    return even > odd ? odd : even;
  },
  canBeEqual(target, arr) {
    arr.sort();
    return target.sort().filter((e, k) => e == arr[k]).length == target.length;
  },
  kthDistinct(arr, k) {
    return (
      arr.filter((e) => arr.filter((x) => x == e).length == 1)[k - 1] ?? ""
    );
  },
  minSubsequence(nums) {
    let min = nums.sort(function (a, b) {
      return a - b;
    });
    let max = [];
    while (
      min.reduce((a, b) => a + b, 0) < max.reduce((a, b) => a + b, 0) ==
      false
    ) {
      max.push(min.pop());
    }
    return max;
  },
  sortedSquares(nums) {
    return nums
      .map((e) => e * e)
      .sort(function (a, b) {
        return a - b;
      });
  },
  smallestEqual(nums) {
    let res = nums
      .map((e, k) => (k % 10 == e ? k : null))
      .filter((e) => e !== null);
    return res.length > 1 ? res[0] : res.length == 0 ? -1 : res[0];
  },
  sortByBits(arr) {
    function dec2binOne(v) {
      let dec = "" + v;
      return ((dec >>> 0).toString(2).match(/1/g) || []).length;
    }
    let res = arr.map((e) => {
      return { val: dec2binOne(e), label: e };
    });
    res.sort((a, b) => {
      return a.val - b.val;
    });

    let num = res.map((e) => e.val);
    num = new Set(num);
    num = Array.from(num);

    let yo = num.map((val) => res.filter((e) => e.val == val));
    yo.map((val) => {
      val.sort((a, b) => {
        return a.label - b.label;
      });
    });

    let fin = [];
    yo.forEach((element) => {
      element.forEach((e) => {
        fin.push(e);
      });
    });

    return fin.map((e) => e.label);
  },
  uniqueOccurrences(arr) {
    // arr = [1,2,2,1,1,3]
    const countMap = arr.reduce((acc, num) => {
      acc[num] = (acc[num] || 0) + 1;
      return acc;
    }, {});
    console.log(countMap); //{ '1': 3, '2': 2, '3': 1 }
    const values = Object.values(countMap);
    console.log(values); //[ 3, 2, 1 ]
    const set = new Set(values);
    console.log(set); //Set(3) { 3, 2, 1 }

    return values.length === set.size;
  },
  shortestToChar(s, c) {
    let idx = s
      .split("")
      .map((e, k) => (e == c ? k : null))
      .filter((e) => e !== null);
    let res = [];
    for (let i = 0; i < s.length; i++) {
      let less = null;
      for (let j = 0; j < idx.length; j++) {
        let ans = Math.abs(i - idx[j]);
        if (less == null || less > ans) {
          less = ans;
        }
      }
      res.push(less);
    }
    return res;
  },
  nextGreaterElement(nums1, nums2) {
    let res = nums1.map((e) =>
      nums2
        .map((v, k) => {
          if (e == v) {
            let def = nums2
              .map((ele, i) => (i > k && ele > v ? ele : null))
              .filter((q) => q !== null);
            return def.length > 0 ? def[0] : -1;
          } else {
            return null;
          }
        })
        .filter((val) => val)
        .pop()
    );
    return res;
  },
  sortArrayByParityII(nums) {
    let even = nums.filter((e) => e % 2 == 0);
    let odd = nums.filter((e) => e % 2 !== 0);
    let res = [];
    even.forEach((e, k) => {
      res.push(e);
      res.push(odd[k]);
    });
    return res;
  },
  largestLocal(grid) {
    function splitToChunks(array, parts) {
      let result = [];
      for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
      }
      return result;
    }
    let box = [];
    let cc = 0;
    let rr = 0;
    let limit = grid.length - 2;
    while (cc < limit && rr < limit) {
      let prep = [];
      for (let r = rr; r < rr + 3; r++) {
        for (let c = cc; c < cc + 3; c++) {
          prep.push(grid[r][c]);
        }
      }
      box.push(prep);
      if (cc + 1 == limit) {
        cc = 0;
        rr = rr + 1;
      } else {
        cc = cc + 1;
      }
    }
    return splitToChunks(
      box.map((arr) => Math.max(...arr)),
      limit
    );
  },
  luckyNumbers(arr) {
    //     let luckyNum = null
    //     let dataInCollumn = []
    //     let dataInRow = []
    //     let check = matrix[0].length > matrix.length ? matrix[0].length : matrix.length
    //     for(let col = 0; col < check ; col++){
    //         let _dataInCollumn = []
    //         dataInRow.push(matrix[col])
    //         for(let row = 0; row < check ; row++){
    //             if(row < matrix.length && matrix[row][col]){
    //                 _dataInCollumn.push(matrix[row][col])
    //             }
    //         }
    //         dataInCollumn.push(_dataInCollumn.length > 0 ? _dataInCollumn : null)
    //     }
    //     dataInCollumn = dataInCollumn.filter(e => e)
    //     dataInRow = dataInRow.reverse().filter(e => e)

    //     console.log(dataInCollumn)
    //     console.log(dataInRow)

    //     for(let i = 0; i < dataInRow.length ; i++){
    //         for(let j = 0; j < dataInRow[i].length ; j++){
    //             console.log(dataInRow[i][j])
    //             if(Math.max(...dataInCollumn[j]) == dataInRow[i][j] && Math.min(...dataInRow[i]) == dataInRow[i][j] ){
    //                 return [dataInRow[i][j]]
    //             }

    //         }
    //     }
    // mr guy wait fix
    const column = arr.length;
    for (let c = 0; c < column; c++) {
      let minRow = Math.min(...arr[c]);
      let pos = arr[c].indexOf(minRow);
      if (minRow === arr[c][pos]) {
        let tmpMaxColumn = arr[c][pos];
        for (let j = 0; j < column; j++) {
          if (arr[j][pos] > tmpMaxColumn) {
            tmpMaxColumn = arr[j][pos];
            break;
          }
        }
        if (tmpMaxColumn === minRow) {
          return [tmpMaxColumn];
        }
      }
    }
    return [];
  },
  countWords(words1, words2) {
    let main = [];
    let sub = [];

    if (words1.length > words2.length) {
      main = words1;
      sub = words2;
    } else {
      main = words2;
      sub = words1;
    }
    return main.filter(
      (e) =>
        sub.includes(e) &&
        sub.filter((x) => x === e).length == 1 &&
        main.filter((x) => x === e).length == 1
    ).length;
  },
  minimumOperations(nums) {
    let action = 0;
    let array = nums;
    function allAreTrue(arr) {
      return arr.every((element) => element === 0);
    }
    while (allAreTrue(array) == false) {
      let min = Math.min.apply(null, array.filter(Boolean));
      for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
          if (array[i] == min) {
            array[i] = 0;
          } else {
            array[i] = array[i] - min;
          }
        }
      }
      action = action + 1;
    }
    return action;
  },
  intersection(nums1, nums2) {
    let arrLong = nums1.length > nums2.length ? nums1 : nums2;
    let arrShort = nums1.length < nums2.length ? nums1 : nums2;
    return Array.from(new Set(arrShort.filter((e) => arrLong.includes(e))));
  },
  balancedStringSplit(s) {
    let count = 0;
    let left = 0;
    let right = 0;
    while (s.length !== 0) {
      let curr = s[0];
      if (curr == "L") {
        left++;
      } else {
        right++;
      }
      if (left == right && right !== 0) {
        count++;
        left = 0;
        right = 0;
      }
      s = s.substring(1);
    }
    return count;
  },
  minDeletionSize(strs) {
    function arraysEqual(a, b) {
      if (a === b) return true;
      if (a == null || b == null) return false;
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
    let arr = [];
    for (let i = 0; i < strs[0].length; i++) {
      let prep = strs.map((e) => e[i]);
      arr.push(prep);
    }

    return arr
      .map((e) => {
        let a = e.map((e) => e);
        let b = e.sort();
        if (arraysEqual(a, b)) {
          return true;
        } else {
          false;
        }
      })
      .filter((e) => !e).length;
  },
  minimumAbsDifference(arr) {
    const ans = [];
    // Put smallest numbers first
    arr.sort((a, b) => a - b);
    // minDiff should be changed on the first iteration
    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
      // The new minDiff changes if the current diff is smaller
      minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }
    for (let i = 1; i < arr.length; i++) {
      // Push all pairs that equal the minDiff into ans
      if (arr[i] - arr[i - 1] === minDiff) ans.push([arr[i - 1], arr[i]]);
    }
    return ans;
  },
  islandPerimeter(grid) {
    let score = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j]) {
          let _score = 4;
          if (i > 0 && grid[i - 1][j]) {
            _score--;
          }
          if (i < grid.length - 1 && grid[i + 1][j]) {
            _score--;
          }
          if (j > 0 && grid[i][j - 1]) {
            _score--;
          }
          if (j < grid[i].length - 1 && grid[i][j + 1]) {
            _score--;
          }
          score = score + _score;
        }
      }
    }
    return score;
  },
  decodeMessage(key, message) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    key = key.replaceAll(" ", "");
    let res = "";
    for (let i = 0; i < key.length; i++) {
      if (!res.includes(key[i])) {
        res = res + key[i];
      }
    }
    let ans = "";
    for (let i = 0; i < message.length; i++) {
      if (message[i] !== " ") {
        ans = ans + alphabet[res.indexOf(message[i])];
      } else {
        ans = ans + " ";
      }
    }
    return ans;
  },
  maxDepth(s) {
    let count = 0;
    let st = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] == "(") st.push(i);
      else if (s[i] == ")") {
        if (count < st.length) count = st.length;
        st.pop();
      }
    }

    return count;
  },
  sortSentence(s) {
    return s
      .split(" ")
      .map((e) => {
        return {
          no: e[e.length - 1],
          val: e.substring(0, e.length - 1),
        };
      })
      .sort((a, b) => {
        return a.no - b.no;
      })
      .map((e) => e.val)
      .join(" ");
  },

  IDKhowToCreatePrototypeAndUse() {
    var OrderedStream = function (n) {};

    /**
     * @param {number} idKey
     * @param {string} value
     * @return {string[]}
     */

    var arr = [];
    var cur = 1;
    OrderedStream.prototype.insert = function (idKey, value) {
      arr.push({ key: idKey, val: value });
      // console.log(arr)
      if (cur == idKey) {
        arr.sort((a, b) => {
          return a.key - b.key;
        });
        let sortCorrect = true;

        for (let i = 0; i < arr.length; i++) {
          if (i > 0) {
            if (arr[i].key - arr[i - 1].key !== 1) {
              sortCorrect = false;
            }
          }
        }
        // console.log('sortCorrect',sortCorrect)

        let res;
        if (sortCorrect) {
          res = arr.map((e) => {
            if (e.key >= cur && e.key <= arr[arr.length - 1].key) {
              return e.val;
            }
          });
          cur = arr[arr.length - 1].key + 1;
        } else {
          res = arr.map((e) => {
            if (e.key == cur) {
              return e.val;
            }
          });
          cur++;
        }

        return res.filter((e) => e);
      } else {
        return [];
      }
    };
  },
  arithmeticTriplets(nums, diff) {
    let c = 0;
    let box = [];
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j) {
          if (Math.abs(nums[i] - nums[j]) == diff) {
            let res1 = nums[i];
            let res2 = nums[j];
            for (let k = 0; k < nums.length; k++) {
              if (nums[k] !== res1 && nums[k] !== res2) {
                if (Math.abs(nums[k] - res1) == diff) {
                  let arr = [nums[i], nums[j], nums[k]];
                  arr.sort((a, b) => a - b);
                  if (!box.includes(arr.toString())) {
                    c = c + 1;
                    box.push(arr.toString());
                  }
                }
                if (Math.abs(nums[k] - res2) == diff) {
                  let arr = [nums[i], nums[j], nums[k]];
                  arr.sort((a, b) => a - b);
                  if (!box.includes(arr.toString())) {
                    c = c + 1;
                    box.push(arr.toString());
                  }
                }
              }
            }
          }
        }
      }
    }
    return c;
  },
  countGoodTriplets(arr, a, b, c) {
    let sol = 0;
    let goodGood = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        for (let k = j + 1; k < len; k++) {
          // console.log(arr[i], arr[j], arr[k]);
          if (
            Math.abs(arr[i] - arr[j]) <= a &&
            Math.abs(arr[j] - arr[k]) <= b &&
            Math.abs(arr[i] - arr[k]) <= c
          ) {
            sol++;
            goodGood.push([arr[i], arr[j], arr[k]]);
          }
        }
      }
    }
    return sol;
  },
  countPairs(nums, k) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j] && (i * j) % k === 0) {
          result++;
        }
      }
    }
    return result;
  },
  flipAndInvertImage(image) {
    return image.map((e) => e.reverse().map((ele) => (ele ? 0 : 1)));
  },
  minOperations(nums) {
    let ans = 0;
    for (let i = 1; i < nums.length; i++) {
      let previous = nums[i - 1];
      let current = nums[i];

      if (current <= previous) {
        current = previous + 1;
        ans += current - nums[i];
        nums[i] = current;
      }
    }

    return ans;
  },
  replaceElements(arr) {
    return arr.map((e, k) =>
      isFinite(Math.max(...arr.filter((ele, key) => k < key)))
        ? Math.max(...arr.filter((ele, key) => k < key))
        : -1
    );
  },
  numberOfPairs(nums) {
    if (nums.length == 1) {
      return [0, 1];
    }
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      for (let k = i + 1; k < nums.length; k++) {
        if (nums[i] == nums[k]) {
          nums.splice(k, 1);
          nums.splice(i, 1);
          count++;
          i = -1;
          k = 0;
          break;
        }
      }
    }
    return [count, nums.length];
  },
  mergeSimilarItems(items1, items2) {
    var arrMost;
    var arrLess;
    if (items1.length >= items2.length) {
      arrMost = items1;
      arrLess = items2;
    } else {
      arrMost = items2;
      arrLess = items1;
    }
    let res = [];
    for (let i = 0; i < arrMost.length; i++) {
      let action = false;
      for (let j = 0; j < arrLess.length; j++) {
        if (arrMost[i][0] == arrLess[j][0]) {
          res.push([arrMost[i][0], arrMost[i][1] + arrLess[j][1]]);
          action = true;
          arrMost[i].push("done");
          arrLess[j].push("done");
        }
      }
      if (!action) {
        res.push([arrMost[i][0], arrMost[i][1]]);
        arrMost[i].push("done");
      }
    }
    for (let i = 0; i < arrMost.length; i++) {
      if (arrMost[i].length < 3) {
        res.push(arrMost[i]);
      }
    }
    for (let i = 0; i < arrLess.length; i++) {
      if (arrLess[i].length < 3) {
        res.push(arrLess[i]);
      }
    }
    return res.sort(function (a, b) {
      return a[0] - b[0];
    });
  },
  maximumUnits(boxTypes, truckSize) {
    boxTypes.sort(function (a, b) {
      return b[1] - a[1];
    });
    let box = 0;
    let unit = 0;
    for (let i = 0; i < boxTypes.length; i++) {
      if (box < truckSize) {
        if (box + boxTypes[i][0] < truckSize) {
          box = box + boxTypes[i][0];
          unit = unit + boxTypes[i][0] * boxTypes[i][1];
        } else {
          let left = truckSize - box;
          box = box + left;
          unit = unit + left * boxTypes[i][1];
        }
      } else {
        break;
      }
    }
    return unit;
  },
  sortPeople(names, heights) {
    return names
      .map((e, i) => {
        return { name: e, height: heights[i] };
      })
      .sort(function (a, b) {
        return b.height - a.height;
      })
      .map((e) => e.name);
  },
  checkDistances(s, distance) {
    const index1s = new Array(26).fill(-1);
    for (let i = 0; i < s.length; i++) {
      const code = s.charCodeAt(i) - 97;
      if (index1s[code] === -1) {
        index1s[code] = i;
      } else if (distance[code] !== i - index1s[code] - 1) {
        return false;
      }
    }
    return true;
  },
  sortedArrayToBST(nums) {
    if (!nums.length) return null;

    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);

    // Call the function recursively on each subtree
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
  },
  frequencySort(nums) {
    const map = new Map();
    for (let n of nums) {
      map.set(n, map.get(n) + 1 || 1);
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
  },
  relativeSortArray(arr1, arr2) {
    let result = {};
    let first = [];
    let last = [];
    //Creating an object with keys of second array elements : as an empty array
    for (let i = 0; i < arr2.length; i++) {
      result[" " + arr2[i]] = [];
    }
    for (let i = 0; i < arr1.length; i++) {
      if (result[" " + arr1[i]] !== undefined) {
        result[" " + arr1[i]].push(arr1[i]); //Adding the array elements in the specified key position.
      } else {
        last.push(arr1[i]); //adding the elements which are not present in second array to be appended later.
      }
    }
    last = last.sort((a, b) => a - b);
    for (const [key, value] of Object.entries(result)) {
      first.push(...value);
    }
    return first.concat(...last);
  },
  toLowerCase(s) {
    return s.toLowerCase();
  },
  findDifference(nums1, nums2) {
    return [
      Array.from(new Set(nums1.filter((e) => !nums2.includes(e)))),
      Array.from(new Set(nums2.filter((e) => !nums1.includes(e)))),
    ];
  },
  commonChars(A) {
    let result = [];

    A.sort((a, b) => a.length - b.length); // it will sort the array
    let firstString = A[0];
    let count = 1;

    for (let i = 0; i < firstString.length; i++) {
      //for loop for 1st string

      for (let j = 1; j < A.length; j++) {
        //for loop through array
        if (A[j].includes(firstString.charAt(i))) count++;
      }
      if (count == A.length) {
        result.push(firstString.charAt(i));

        for (let j = 0; j < A.length; j++) {
          //for loop through array
          A[j] = A[j].replace(firstString.charAt(i), "");
        }
      }
      count = 1;
    }
    return result;
  },
  projectionArea(grid) {
    const xy = grid.reduce((acc, curr) => {
      const area = curr.filter((value) => value > 0).length;
      return acc + area;
    }, 0);

    const yz = grid.reduce((acc, curr) => {
      const max = Math.max(...curr);
      return acc + max;
    }, 0);

    const xz = grid[0].reduce((acc, curr, index) => {
      const vertical = grid.map((value) => {
        return value[index];
      });
      const max = Math.max(...vertical);
      return acc + max;
    }, 0);

    return xy + yz + xz;
  },
  intersection(nums) {
    const res = [];
    const shortest = nums.shift();
    for (const num of shortest) {
      if (nums.every((arr) => arr.includes(num))) {
        res.push(num);
      }
    }
    res.sort((x, y) => x - y);
    return res;
  },
  allCellsDistOrder(R, C, r0, c0) {
    const result = [];
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        result.push([i, j]);
      }
    }
    result.sort(
      (a, b) =>
        Math.abs(a[0] - r0) +
        Math.abs(a[1] - c0) -
        (Math.abs(b[0] - r0) + Math.abs(b[1] - c0))
    );
    return result;
  },
  canMakeArithmeticProgression(arra) {
    arra.sort(function (a, b) {
      return a - b;
    });
    let diff = arra[1] - arra[0];
    for (let i = 1; i < arra.length - 1; i++) {
      let inDiff = arra[i + 1] - arra[i];
      if (inDiff !== diff) {
        return false;
        break;
      }
    }
    return true;
  },
  generatePascalsTriangle(numRows) {
    let ret = [];

    for (let i = 0; i < numRows; i++) {
      ret[i] = [];
      ret[i][0] = ret[i][i] = 1;
      for (let j = 1; j < i; j++) {
        ret[i][j] = ret[i - 1][j] + ret[i - 1][j - 1];
      }
    }
    return ret;
  },
  subsetXORSum(nums) {
    let bitOR = 0;
    for (let i = 0; i < nums.length; ++i) {
      bitOR |= nums[i];
    }
    return bitOR * Math.pow(2, nums.length - 1);
  },
  countPoints(rings) {
    let n = rings.length;

    let map = new Map(); // map of  rod nums  to their  set of colors
    for (let i = 0; i < n; i += 2) {
      let color = rings[i];
      let rod = +rings[i + 1];

      if (!map.has(rod)) map.set(rod, new Set());
      map.get(rod).add(color);
    }

    let count = 0;
    for (let [rod, setColors] of map) {
      if (setColors.size == 3) count++;
    }
    return count;
  },
  minStartValue(nums) {
    for (let i = 1; i <= 1890; i++) {
      let check = true;
      let sum = i;
      for (let j = 0; j < nums.length; j++) {
        sum = sum + nums[j];
        if (sum < 1) {
          check = false;
          break;
        }
      }
      if (check) {
        return i;
      }
    }
    return 1;
  },
  maxIncreaseKeepingSkyline(grid) {
    let rowMaxHeightArray = [];
    let columnMaxHeightArray = [];
    let howTallCanWeGo = 0;

    for (let i in grid) {
      rowMaxHeightArray.push(Math.max(...grid[i]));
      for (let j in grid) {
        if (grid[j][i] > columnMaxHeightArray[i] || !columnMaxHeightArray[i]) {
          columnMaxHeightArray[i] = grid[j][i];
        }
      }
    }

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        howTallCanWeGo +=
          Math.min(rowMaxHeightArray[i], columnMaxHeightArray[j]) - grid[i][j];
      }
    }
    return howTallCanWeGo;
  },
  twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i !== j && nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  },
  groupThePeople(groupSizes) {
    let result = [],
      groups = {};

    groupSizes.forEach((size, index) => {
      if (size in groups) {
        if (groups[size].length < size) {
          groups[size].push(index);
        }
      } else {
        groups[size] = [index];
      }

      if (groups[size].length === size) {
        result.push(groups[size]);
        groups[size] = [];
      }
    });
    return result;
  },
  findMedianSortedArrays(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const halfWayPoint = Math.floor(totalLength / 2);
    let nums1Pos = 0;
    let nums2Pos = 0;
    let lastNum, secondToLastNum;
    for (let i = 0; i <= halfWayPoint; i++) {
      secondToLastNum = lastNum;
      if (
        nums2[nums2Pos] == undefined ||
        (nums1[nums1Pos] != undefined && nums1[nums1Pos] <= nums2[nums2Pos])
      ) {
        lastNum = nums1[nums1Pos];
        nums1Pos++;
      } else {
        lastNum = nums2[nums2Pos];
        nums2Pos++;
      }
    }
    return totalLength % 2 ? lastNum : (lastNum + secondToLastNum) / 2;
  },
  garbageCollection(garbage, travel) {
    const exprense = [0];
    for (let i = 0; i < travel.length; i++) {
      exprense[i + 1] = exprense[i] + travel[i];
    }
    let M = 0;
    let P = 0;
    let G = 0;
    let mi = 0;
    let pi = 0;
    let gi = 0;
    for (let i = 0; i < garbage.length; i++) {
      for (const c of garbage[i]) {
        if (c === "M") {
          M++;
          mi = i;
        } else if (c === "P") {
          P++;
          pi = i;
        } else {
          G++;
          gi = i;
        }
      }
    }

    return M + P + G + exprense[mi] + exprense[pi] + exprense[gi];
  },
  uniquePathsIII() {
    var uniquePathsIII = function (grid) {
      let cnt = 1;
      let sx, sy;
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) {
            sx = i;
            sy = j;
          } else if (grid[i][j] === 0) {
            cnt++;
          }
        }
      }
      return dfs(sx, sy, cnt, grid);
    };

    let check = (sx, sy, grid) => {
      if (
        sx < 0 ||
        sx >= grid.length ||
        sy < 0 ||
        sy >= grid[0].length ||
        grid[sx][sy] == -1
      )
        return false;
      return true;
    };

    let dfs = (sx, sy, cnt, grid) => {
      if (!check(sx, sy, grid)) return 0;
      if (grid[sx][sy] === 2) {
        return cnt === 0 ? 1 : 0;
      }
      let res = 0;
      grid[sx][sy] = -1;
      res += dfs(sx + 1, sy, cnt - 1, grid);
      res += dfs(sx, sy + 1, cnt - 1, grid);
      res += dfs(sx - 1, sy, cnt - 1, grid);
      res += dfs(sx, sy - 1, cnt - 1, grid);
      grid[sx][sy] = 0;
      return res;
    };
  },
  earliestFullBloom(plantTime, growTime) {
    let n = plantTime.length;
    let plants = [];
    for (var i = 0; i < n; i++) {
      plants.push([plantTime[i], growTime[i]]);
    }
    plants.sort((a, b) => {
      if (a[1] === b[1]) return b[0] - a[0];
      return b[1] - a[1];
    });

    let time = 0,
      fullBloomTime = 0;
    for (i = 0; i < n; i++) {
      time += plants[i][0];
      fullBloomTime = Math.max(fullBloomTime, time + plants[i][1]);
    }
    return fullBloomTime;
  },
  diagonalSort(M) {
    let y = M.length,
      x = M[0].length - 1,
      diag = new Uint8Array(y),
      k;
    for (let i = 2 - y; i < x; i++) {
      diag.fill(101), (k = 0);
      for (let j = 0; j < y; j++)
        if (i + j >= 0 && i + j <= x) diag[k++] = M[j][i + j];
      diag.sort(), (k = 0);
      for (let j = 0; j < y; j++)
        if (i + j >= 0 && i + j <= x) M[j][i + j] = diag[k++];
    }
    return M;
  },
  findArray(pref) {
    let n = pref.length,
      res = Array(n);
    res[0] = pref[0];
    for (let i = 1; i < n; i++) {
      res[i] = pref[i - 1] ^ pref[i];
    }
    return res;
  },
  minOperations(boxes) {
    boxes = boxes.split("").map(Number);
    const ones = boxes
      .map((el, i) => [el, i])
      .filter(([el]) => el === 1)
      .map(([_, i]) => i);

    const res = Array.from({ length: boxes.length }, (_, i) =>
      ones.reduce((acc, oneIdx) => (acc += Math.abs(i - oneIdx)), 0)
    );
    return res;
  },
  constructMaximumBinaryTree(nums) {
    if (nums.length == 0) {
      //needed because the way this is coded doesn't check for nums length
      return null;
    }
    if (nums.length == 1) {
      // this is a base case for returning a node. Eventually your tree will go down to a single node, so you return it to construct the entire tree.
      return new TreeNode(nums[0]);
    }
    // the main idea here is to get the maxIndex and value of the given array, construct a tree node from it, and then construct a tree by slicing left of the max value and right of the max value.
    let maxIndex = getMaxIndex(nums);
    let maxVal = nums[maxIndex];
    let rootNode = new TreeNode(maxVal);
    rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    rootNode.right = constructMaximumBinaryTree(
      nums.slice(maxIndex + 1, nums.length)
    );
    return rootNode;
  },
  getMaxIndex(arr) {
    // just a utility function for getting the max index.
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
    }
    return maxIndex;
  },
  numberOfBeams(bank) {
    const getDeviceCount = (s) => s.split("").filter((x) => x === "1").length;
    let sum = 0;

    let prev = 0;
    for (let floor of bank) {
      let curr = getDeviceCount(floor);
      if (curr) {
        sum += curr * prev;
        prev = curr;
      }
    }

    return sum;
  },
  partitionLabels(S) {
    let last_index = new Map();
    for (let i = 0; i < S.length; i++) {
      last_index.set(S[i], i);
    }
    let res = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < S.length; i++) {
      end = Math.max(end, last_index.get(S[i]));
      if (i === end) {
        res.push(end - start + 1);
        start = end + 1;
      }
    }
    return res;
  },
  isBalanced(root) {
    const ckeckHeight = (node) => {
      if (node === null) return 0;

      const left = ckeckHeight(node.left);
      const right = ckeckHeight(node.right);

      if (
        // if a previous call has returned false,
        // we need to pass false all the way up
        left === false ||
        right === false ||
        Math.abs(left - right) > 1
      ) {
        return false;
      }

      // height of a node
      return Math.max(left, right) + 1;
    };
    if (root === null) return true;

    return ckeckHeight(root) !== false;
  },
  threeSum(nums) {
    // If less than 3 elements then we can't have 3 numbers that add to 0
    if (nums.length < 3) return [];
    const output = [];

    // Sort the array in descending order. Must add order function to sort. If not we will not get the right order. Sort converts everything to a string and sorts the array by charCode. Adding the order function to sort guarantees we will get the array in the proper descending order.
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
      // we don't want repeats, so skip numbers we've already seen
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      // Current number at i will be added to the current sum. We will move a left and a right pointer in the subarray of elements to the right of i to try and get a sum that will equal 0
      while (left < right) {
        // Get the current sum with with number at i and numbers at the left and right pointers
        const sum = nums[i] + nums[right] + nums[left];
        // If we get 0 then we add all the numbers to output and move our left and right pointers to look for more numbers that will add to 0 with the current number at i
        if (sum === 0) {
          output.push([nums[i], nums[left], nums[right]]);
          // We will move the pointers until we find a number that is not equal to each pointers current number
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right + 1]) right--;
          left++;
          right--;
        } else if (sum > 0) {
          // If the sum is greater than 0 that means we need smaller numbers to get 0 so we move the right pointer to the left
          right--;
        } else {
          // If the sum is less than 0 that means we need higher numbers to get 0 so we move the left pointer to the right
          left++;
        }
      }
    }

    return output;
  },
  unequalTriplets(nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
    let index = 0;
    while (index < nums.length) {
      const left = index;
      const num = nums[index];
      while (index < nums.length && nums[index] === num) {
        index++;
      }
      const mid = index - left;
      result += left * mid * (nums.length - left - mid);
    }

    return result;
  },
  getRow(rowIndex) {
    var res = Array(rowIndex + 1);
    res[0] = 1;
    for (var i = 1; i <= rowIndex; i++) {
      res[i] = res[i - 1] * ((rowIndex - i + 1) / i);
    }
    return res;
  },
  minDepth(root) {
    //if root is null, there is no depth
    if (!root) return 0;
    //if the root has no left child
    //keep traverse with right child and increment the level by one
    if (!root.left) return minDepth(root.right) + 1;
    //if the root has no right child
    //keep traverse with left child and increment the level by one
    if (!root.right) return minDepth(root.left) + 1;
    //compare left and right, choose the smaller value and add one level
    //return the depth
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  },
  isMatch(s, p) {
    const regex = new RegExp("^" + p + "$", "m");
    return regex.test(s);
  },
  maxArea(height) {
    let biggestFoundArea = 0;
    let left = 0;
    let right = height.length - 1;

    // Run until the left and right markers meet
    while (left < right) {
      // Set the maximum height of the current area
      const maxHeight = Math.min(height[left], height[right]);

      // Calculate the current area
      const currentArea = maxHeight * (right - left);

      // Update the biggest found area
      biggestFoundArea = Math.max(biggestFoundArea, currentArea);

      // Move the left or right marker inwards (whichever is smaller)
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }

    return biggestFoundArea;
  },
  maxDepth(root) {
    if (root === null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  },
  threeSumClosest(nums, target) {
    let len = nums.length,
      sum = 0;
    if (len === 0) return 0;
    if (len <= 3) {
      for (let i = 0; i < len; i++) {
        sum += nums[i];
      }
      return sum;
    }
    nums.sort(function (a, b) {
      return a - b;
    });

    let closest = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < len; i++) {
      for (let j = i + 1, k = len - 1; j < len - 1, j < k; ) {
        sum = nums[i] + nums[j] + nums[k];
        if (sum === target) {
          return sum;
        } else if (sum < target) {
          if (
            (closest < sum && sum < target) ||
            Math.abs(target - sum) < Math.abs(target - closest)
          ) {
            closest = sum;
          }
          j++;
        } else if (sum > target) {
          if (
            (closest > sum && sum > target) ||
            Math.abs(target - sum) < Math.abs(target - closest)
          ) {
            closest = sum;
          }
          k--; //to reduce sum decrease tail
        }
      }
    }
    return closest;
  },
  deleteGreatestValue(grid) {
    let total = 0;
    while (grid[0].length > 0) {
      let maxInRow = 0;
      for (let i = 0; i < grid.length; i++) {
        const max = Math.max(...grid[i]);
        maxInRow = Math.max(max, maxInRow);
        const index = grid[i].indexOf(max);
        grid[i].splice(index, 1);
      }
      total += maxInRow;
    }
    return total;
  },
  pivotArray(a, pivot) {
    let ans = new Array(a.length).fill(pivot);
    let j = 0;
    let k = a.length - 1;
    for (let i = 0; i < a.length; i++) {
      if (a[i] < pivot) {
        ans[j] = a[i];
        j++;
      }
      if (a[a.length - i - 1] > pivot) {
        ans[k] = a[a.length - i - 1];
        k--;
      }
    }
    return ans;
  },
  maxWidthOfVerticalArea(points) {
    if (!points.length) return 0;

    points.sort((a, b) => a[0] - b[0]);

    let res = 0;
    let prevX = points[0][0];
    for (let i = 1; i < points.length; i++) {
      let x = points[i][0];
      if (x === prevX) {
        continue;
      } else {
        res = Math.max(res, x - prevX);
      }
      prevX = x;
    }

    return res;
  },

  intToRoman(num) {
    const numerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    if (num < 1) return "";
    if (num >= 1000) return "M" + intToRoman(num - 1000);
    if (num >= 900) return "CM" + intToRoman(num - 900);
    if (num >= 500) return "D" + intToRoman(num - 500);
    if (num >= 400) return "CD" + intToRoman(num - 400);
    if (num >= 100) return "C" + intToRoman(num - 100);
    if (num >= 90) return "XC" + intToRoman(num - 90);
    if (num >= 50) return "L" + intToRoman(num - 50);
    if (num >= 40) return "XL" + intToRoman(num - 40);
    if (num >= 10) return "X" + intToRoman(num - 10);
    if (num >= 9) return "IX" + intToRoman(num - 9);
    if (num >= 5) return "V" + intToRoman(num - 5);
    if (num >= 4) return "IV" + intToRoman(num - 4);
    if (num >= 1) return "I" + intToRoman(num - 1);
    return num;
  },
  searchRange(nums, target) {
    let targetFirstOccurence = -1;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target && targetFirstOccurence === -1) {
        targetFirstOccurence = i;
      } else if (nums[i] > target) {
        if (targetFirstOccurence !== -1) {
          return [targetFirstOccurence, i - 1];
        } else {
          return [-1, -1];
        }
      }
    }

    return targetFirstOccurence === -1
      ? [-1, -1]
      : [targetFirstOccurence, nums.length - 1];
  },
};
