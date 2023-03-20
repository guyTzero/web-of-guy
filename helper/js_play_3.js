export default {
    fourSum(nums, target) {
        nums.sort((a, b) => a - b);
        let res = [];
        for (let i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            for (let j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;
                let left = j + 1, right = nums.length - 1;
                while (left < right) {
                    let sum = nums[i] + nums[j] + nums[left] + nums[right];
                    if (sum === target) {
                        res.push([nums[i], nums[j], nums[left], nums[right]]);
                        while (left < right && nums[left] === nums[left + 1]) left++;
                        while (left < right && nums[right] === nums[right - 1]) right--;
                        left++;
                        right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        return res;
    },
    differenceOfSum(nums) {

        function sum(arr) {
            let total = 0
            for (let i = 0; i < arr.length; i++) {
                total = total + arr[i]
            }
            return total
        }

        let box1 = []
        let box2 = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= 10) {
                let box = nums[i].toString().split('')
                for (let j = 0; j < box.length; j++) {
                    box1.push(parseInt(box[j]))
                }
            } else {
                box2.push(nums[i])
            }
        }
        let a = sum(box1.concat(box2))
        let b = sum(nums)
        if (a > b) {
            return a - b
        } else {
            return b - a
        }

    },
    myAtoi(s) {
        const len = s.length;
        let max = 2147483647;
        let min = -2147483648;
        let numberMatch = /^[\d ()+-]+$/;

        for (let i = 0, j = i; i < len; i++) {
            let current = s[i];

            if (current != " " && !current.match(numberMatch)) {
                return 0;
            } else if (current != " " && current.match(numberMatch)) {
                let result = "";

                while (j < len && current.match(numberMatch)) {
                    result += s[j];
                    j++;
                }
                let output = parseInt(result);
                if (isNaN(output)) return 0;
                else if (output > max) return max;
                else if (output < min) return min;
                else return output;
            }
        }
        return 0;
    },
    letterCombinations(digits) {
        var mapOfNumbers = {
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'],
        };
        // Return early if no digits were supplied
        if (!digits.length) {
            return [];
        }

        // Initialise an array to store all possible letter combinations up to the previous digit
        let lastDigitPossibilities = [''];

        // Loop through each digit
        for (let i = 0; i < digits.length; i++) {
            // Initialise an array to store the possibilties for this digit
            let newPossibilities = [];

            // Loop through the last set of possibilities
            for (let x = 0; x < lastDigitPossibilities.length; x++) {
                // Loop through the possible letters for the current number
                for (let letter of mapOfNumbers[digits[i]]) {
                    // Add the current number to each of the last set of possibilities
                    newPossibilities.push(lastDigitPossibilities[x].concat(letter));
                }
            }

            // Check if this was the last digit
            if (i == digits.length - 1) {
                // Return the latest batch of possibilities as the answer
                return newPossibilities;
            }

            lastDigitPossibilities = newPossibilities;
        }
    },
    countStudents(students, sandwiches) {
        let circularSandwiches = 0;
        let squareSandwiches = 0;

        for (let i = 0; i < students.length; ++i) {
            if (students[i] === 0) {
                ++circularSandwiches;
            } else {
                ++squareSandwiches;
            }
        }

        for (let i = 0; i < sandwiches.length; ++i) {
            if (sandwiches[i] === 0) {
                if (circularSandwiches === 0) {
                    return squareSandwiches;
                }

                --circularSandwiches;
            } else {
                if (squareSandwiches === 0) {
                    return circularSandwiches;
                }

                --squareSandwiches;
            }
        }

        return circularSandwiches + squareSandwiches;
    },
    removeNthFromEnd(head, n) {
        let newLinkedList = new ListNode(0);
        newLinkedList.next = head;

        let fastPointer = newLinkedList;
        let slowPointer = newLinkedList;

        for (let i = 1; i <= n + 1; i++) {
            fastPointer = fastPointer.next;
        }

        while (fastPointer != null) {
            fastPointer = fastPointer.next;
            slowPointer = slowPointer.next;
        }

        slowPointer.next = slowPointer.next.next;

        return newLinkedList.next;
    },
    search(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) return i;
        }
        return -1;
    },
    swapPairs(head) {
        let dummyList = new ListNode(null, head);
        let current = dummyList;
        while (current.next && current.next.next) {
            let first = current.next;
            current.next = current.next.next;
            first.next = current.next.next;
            current.next.next = first;
            current = current.next.next;
        }
        return dummyList.next;
    },
    maxScoreWords(words, letters, score) {

        let letterCounts = new Array(26);
        for (let i = 0; i < 26; i++) {
            letterCounts[i] = 0;
        }
        for (let letter = 0; letter < letters.length; letter++)
            letterCounts[letters[letter].charCodeAt(0) -
                'a'.charCodeAt(0)]++;

        return helper(words, 0,
            letterCounts,
            score);
    },

    helper(words, start, letterCounts, score) {
        if (start == words.length)
            return 0;

        let currScore = 0;

        let wordScore = 0;

        let nextCounts
            = [...letterCounts];

        for (let i = 0;
            i < words[start].length;
            ++i) {

            let idx = words[start][i].charCodeAt(0) -
                'a'.charCodeAt(0);

            if (nextCounts[idx] == 0) {

                wordScore = -1;
                break;
            }

            wordScore += score[idx];

            nextCounts[idx]--;
        }

        if (wordScore > 0)
            currScore = helper(words,
                start + 1,
                nextCounts,
                score)
                + wordScore;

        currScore = Math.max(
            currScore, helper(words, start + 1,
                letterCounts,
                score));

        return currScore;
    },
    processQueries(queries, m) {
        let result = [];
        let p = [];
        for (let i = 1; i <= m; i++) {
            p.push(i);
        }

        for (let i of queries) {
            let idx = p.indexOf(i);
            result.push(idx);
            let num = p.splice(idx, 1)[0];
            p.unshift(num);
        }

        return result;
    },
    validSudoku(board) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const value = board[i][j];
                if (value !== '.') {
                    if (!validRow(board, i, j, value) || !validColumn(board, i, j, value) | !validBox(board, i, j, value)) {
                        return false;
                    }
                }
            }
        }
        return true;
    },
    validRow(board, row, col, value) {
        for (let j = 0; j < 8; j++) {
            if (j !== col) {
                if (board[row][j] === value) {
                    return false;
                }
            }
        }

        return true;
    },
    validColumn(board, row, col, value) {
        for (let i = 0; i < 8; i++) {
            if (i !== row) {
                if (board[i][col] === value) {
                    return false;
                }
            }
        }

        return true;
    },
    validBox(board, row, col, value) {
        const startRow = row - (row % 3), startCol = col - (col % 3);

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (i !== row && j !== col) {
                    if (board[i][j] === value) {
                        return false;
                    }
                }
            }
        }

        return true;
    },
    hasPathSum(root, targetSum) {
        if (!root) {
            return false;
        }

        if (!root.left && !root.right && targetSum - root.val === 0) {
            return true;
        }

        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    },
    countAndSay(n) {
        var str = '1';
        var tmp = '';
        var last = '';
        var count = 0;
        var len = 0;

        for (var i = 1; i < n; i++) {
            tmp = '';
            last = '';
            count = 0;
            len = str.length;

            for (var j = 0; j < len; j++) {
                if (last === '') {
                    last = str[j];
                    count = 1;
                    continue;
                }
                if (str[j] === last) {
                    count += 1;
                } else {
                    tmp += '' + count + last;
                    last = str[j];
                    count = 1;
                }
            }

            if (last) {
                tmp += '' + count + last;
            }

            str = tmp;
        }

        return str;
    },
    combinationSum(nums, target) {
        let combinations = [];
        nums.sort((a, b) => a - b);

        function backtrack(tempList, remaining, start) {
            for (let i = start; i < nums.length && nums[i] <= remaining; i++) {
                if (nums[i] === remaining) {
                    combinations.push([...tempList, nums[i]]);
                } else {
                    backtrack([...tempList, nums[i]], remaining - nums[i], i);
                }
            }
        }

        backtrack([], target, 0);
        return combinations;
    },
    someFunc(){
        return 'some val'
    },
combinationSum2(candidates, target) {
  var dfs = function (res, stack, index, len, candidates, target) {
  var tmp = null;
  if (target < 0) return;
  if (target === 0) return res.push(stack);
  for (var i = index; i < len; i++) {
    if (candidates[i] > target) break;
    if (i > index && candidates[i] === candidates[i - 1]) continue;
    tmp = Array.from(stack);
    tmp.push(candidates[i]);
    dfs(res, tmp, i + 1, len, candidates, target - candidates[i]);
  }
};
  var res = [];
  var len = candidates.length;
  candidates.sort((a, b) => (a - b));
  dfs(res, [], 0, len, candidates, target);
  return res;
},
     divide  (dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    // Check for overflow
    if (divisor === 0 || (dividend === MIN && divisor === -1)) {
        return MAX;
    }
    if (divisor === dividend) {
        return 1;
    }
    // Sign of result
    const sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
    // Quotient
    let quotient = 0;
    // Take the absolute value
    let absoluteDividend = Math.abs(dividend);
    let absoluteDivisor = Math.abs(divisor);
    // Loop until the  dividend is greater than divisor
    while (absoluteDividend >= absoluteDivisor) {
        // This represents the number of bits shifted or
        // how many times we can double the number
        let shift = 0;
        let shiftedDivisor = absoluteDivisor;
        while (absoluteDividend >= shiftedDivisor) {
            shift++;
            shiftedDivisor = absoluteDivisor << shift;
            // To handle overflow using left shift operator in JS
            if (shiftedDivisor < 0) {
                break;
            }
        }
        // Add the number of times we shifted to the quotient
        quotient += (1 << (shift - 1));
        // Update the dividend for the next iteration
        absoluteDividend -= absoluteDivisor << (shift - 1);
    }
    return sign === -1 ? -quotient : quotient;
},
    minPathSum(grid) {

    const dp = new Array(grid.length).fill(0).map(() => Array(grid[0].length).fill(Infinity));

    dp[0][0] = grid[0][0]

    for (let i = 0; i < dp.length; i++) {
        for(let j = 0; j < dp[0].length; j++) {
   
            if(i+1 < dp.length) dp[i+1][j] = Math.min(dp[i+1][j], dp[i][j]+grid[i+1][j])
            if(j+1 < dp[0].length) dp[i][j+1] = Math.min(dp[i][j+1], dp[i][j]+grid[i][j+1])
        }
    }
    return dp[dp.length-1][dp[0].length-1]
},
  jump(nums) {
    let newMax = 0;
    let jump = 0;
    let oldMax = 0;
    for (let i=0;i<nums.length-1;i++) {
        newMax = Math.max(newMax, i+nums[i]);
        if (i == oldMax) {
            jump++;
            oldMax = newMax;
        }
    }
    return jump;
},
    permute (choices, temp = [], permutations = []) {
    // Base case 
    if(choices.length === 0){
      permutations.push([...temp]);
    } 

    for(let i = 0; i < choices.length; i++){
        // Create new array without current letter
        let newChoices = choices.filter((choice, index) => index !== i)
        // Add current to the temp array which is our current permutation
        temp.push(choices[i])
        permute(newChoices, temp, permutations)
        // Once we have explored options remove the current letter from our current permuataion
        temp.pop()
    }

    return permutations
},
     solveNQueens (n) {
        function backtrack(output, n, board = [], r = 0) {
    // If we have placed n queens on the board, create board as a string
    // and push it into our output
    if (r === n) {
        output.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
        return;
    }
    // Find the column to saftely place a queen in the current row (r)
    for (let c = 0; c < n; c++) {
        // Check if the current column is safe from a vertical, horizontal, or diagonal attack
        // from previously placed queens on the board
        if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
            // place a queen in the current column (c)
            board.push(c);
            // move to the next row
            backtrack(output, n, board, r + 1);
            // remove column from the board
            board.pop();
        }
    }
}
    const output = [];
    backtrack(output, n);
    return output;
},
   multiply(num1, num2) {
    return (BigInt(num1) * BigInt(num2)).toString();
},
 vowelStrings(words, left, right) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = left; i <= right; i++) {
    if (vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])) {
      count++;
    }
  }
  return count;
},
  rotate (matrix) {
      var swap = function (matrix, x1, y1, x2, y2) {
          var tmp = matrix[x1][y1];
          matrix[x1][y1] = matrix[x2][y2];
          matrix[x2][y2] = tmp;
      };
  var n = matrix.length;
  var n2 = Math.floor(n / 2);
  // 1 2 3     7 8 9
  // 4 5 6  => 4 5 6
  // 7 8 9     1 2 3
  for (var i = 0; i < n2; i++) {
    for (var j = 0; j < n; j++) {
      swap(matrix, i, j, n - 1 - i, j);
    }
  }
  // 7 8 9     7 4 1
  // 4 5 6  => 8 5 2
  // 1 2 3     9 6 3
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      swap(matrix, i, j, j, i);
    }
  }
};
}
