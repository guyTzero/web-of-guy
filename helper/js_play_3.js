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

    function sum(arr){
        let total = 0
        for(let i = 0 ; i < arr.length ;i++){
            total = total + arr[i]
        }
        return total
    }

    let box1 = []
    let box2 = []
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] >= 10){
            let box = nums[i].toString().split('')
            for(let j = 0 ; j < box.length ; j++){
             box1.push(parseInt(box[j]))
             }
        }else{
            box2.push(nums[i])
        }
    }
    let a = sum(box1.concat(box2))
    let b = sum(nums)
    if(a > b){
        return a - b
    }else{
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
maxScoreWords(words,letters,score){
 
    let letterCounts = new Array(26);
    for(let i=0;i<26;i++)
    {
        letterCounts[i]=0;
    }
    for (let letter=0;letter< letters.length;letter++)
            letterCounts[letters[letter].charCodeAt(0) -
            'a'.charCodeAt(0)]++;
  
        return helper(words, 0,
                      letterCounts,
                      score);
}

function helper(words,start,letterCounts,score)
{
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
 processQueries (queries, m) {
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
}
}
