/* eslint-disable import/no-anonymous-default-export */
export default {
  twoSum(nums, target) {
    //  * @param {number[]} nums
    //  * @param {number} target
    //  * @return {number[]}
    // let nums = [2,7,11,15]
    // let target = 9
    let r = 0;
    let i = 0;
    let ans = [];
    for (; i < nums.length - 1; i++) {
      if (nums[r] + nums[i + 1] == target) {
        ans.push(r);
        ans.push(i + 1);
      }

      if (i == nums.length - 2 && r !== nums.length - 2) {
        r = r + 1;
        i = 0;
      }
    }
    let res = new Set(ans);
    Array.from(res);
    let final = Array.from(res);
    return final.length > 2 ? [final[0], final[1]] : final;
  },

  addTwoNumbers(l1, l2) {
    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    // /**
    //  * @param {ListNode} l1
    //  * @param {ListNode} l2
    //  * @return {ListNode}
    //  */
    // Initialise a new ListNode to be returned
    var newListNode = new ListNode(0);
    var headOfNewListNode = newListNode;

    // Initialise variables to be utilised on each run
    var sum = 0;
    var carry = 0;

    // While there are elements (or a carried number) to add
    while (l1 !== null || l2 !== null || sum > 0) {
      // If there's an element in l1 to be added, add it to the sum and move to the next l1 node
      if (l1 !== null) {
        sum = sum + l1.val;
        l1 = l1.next;
      }

      // If there's an element in l2 to be added, add it to the sum and move to the next l2 node
      if (l2 !== null) {
        sum = sum + l2.val;
        l2 = l2.next;
      }

      // Check if the sum for these nodes exceeds 10
      if (sum >= 10) {
        carry = 1;
        sum = sum - 10;
      }

      // Add the sum to the new ListNode, and then move it to the next entry
      headOfNewListNode.next = new ListNode(sum);
      headOfNewListNode = headOfNewListNode.next;

      // Set the sum for the next addition to equal the carry-over (if there was one)
      sum = carry;
      carry = 0;
    }

    // Return the constructed ListNode (ignoring the first dummy entry)
    return newListNode.next;
  },
  isPalindrome(x) {
    //   /**
    //  * @param {number} x
    //  * @return {boolean}
    //  */
    let _isPalindrome = false;

    if (x.toString().length == 1) {
      _isPalindrome = true;
    } else {
      if (x > 0 && x % 1 === 0) {
        let reversed = x.toString().split("").reverse().join("");
        if (reversed == x) {
          _isPalindrome = true;
        }
      }
    }

    return _isPalindrome;
  },

  romanToInt(s) {
    //   /**
    //  * @param {string} s
    //  * @return {number}
    //  */
    let bigData = [[], [], [], []];

    let max = 3999;

    for (let i = 0; i < max; i++) {
      let number = i.toString();
      number.split("").reverse().join("");

      for (let k = 0; k < number.length; k++) {
        let current = parseInt(number[k]);
        // หน่วย
        if (k == 0 && bigData[0].length < 10) {
          if (current == 4) {
            prefix = "";
            bigData[0].push({ roman: "IV", val: current });
          } else if (current == 9) {
            bigData[0].push({ roman: "IX", val: current });
          } else if (current < 4) {
            bigData[0].push({ roman: "I".repeat(current), val: current });
          } else if (current == 5) {
            bigData[0].push({ roman: "V", val: current });
          } else if (current > 5) {
            bigData[0].push({
              roman: "V" + "I".repeat(current - 5),
              val: current,
            });
          }
        }
        // สิบ
        if (k == 0 && bigData[1].length < 10) {
          if (current == 4) {
            prefix = "";
            bigData[1].push({ roman: "XL", val: current });
          } else if (current == 9) {
            bigData[1].push({ roman: "XC", val: current });
          } else if (current < 4) {
            bigData[1].push({ roman: "X".repeat(current), val: current });
          } else if (current == 5) {
            bigData[1].push({ roman: "L", val: current });
          } else if (current > 5) {
            bigData[1].push({
              roman: "L" + "X".repeat(current - 5),
              val: current,
            });
          }
        }
        // ร้อย
        if (k == 2 && bigData[2].length < 10) {
          if (current == 4) {
            prefix = "";
            bigData[2].push({ roman: "CD", val: current });
          } else if (current == 9) {
            bigData[2].push({ roman: "CM", val: current });
          } else if (current < 4) {
            bigData[2].push({ roman: "C".repeat(current), val: current });
          } else if (current == 5) {
            bigData[2].push({ roman: "D", val: current });
          } else if (current > 5) {
            bigData[2].push({
              roman: "D" + "C".repeat(current - 5),
              val: current,
            });
          }
        }
        // พัน
        if (k == 3 && bigData[3].length < 4) {
          if (current == 4) {
            prefix = "";
            bigData[3].push({ roman: "", val: current });
          } else if (current == 9) {
            bigData[3].push({ roman: "", val: current });
          } else if (current < 4) {
            bigData[3].push({ roman: "M".repeat(current), val: current });
          } else if (current == 5) {
            bigData[3].push({ roman: "", val: current });
          } else if (current > 5) {
            bigData[3].push({
              roman: "" + "".repeat(current - 5),
              val: current,
            });
          }
        }
      }
    }
    // console.log(bigData)
    bigData.reverse();
    let BiggerData = [];

    for (let i = 0; i < bigData[0].length; i++) {
      for (let o = 0; o < bigData[1].length; o++) {
        for (let p = 0; p < bigData[2].length; p++) {
          for (let n = 0; n < bigData[3].length; n++) {
            BiggerData.push({
              roman:
                bigData[0][i].roman +
                bigData[1][o].roman +
                bigData[2][p].roman +
                bigData[3][n].roman,
              val:
                bigData[0][i].val.toString() +
                bigData[1][o].val.toString() +
                bigData[2][p].val.toString() +
                bigData[3][n].val.toString(),
            });
          }
        }
      }
    }

    console.log(BiggerData);
    let ans = "";
    for (let i = 0; i < BiggerData.length; i++) {
      if (BiggerData[i].roman == s) {
        ans = parseInt(BiggerData[i].val);
      }
    }
    return ans;
  },
  //   /**
  //  * @param {string[]} strs
  //  * @return {string}
  //  */
  longestCommonPrefix(strs) {
    if (!strs.length) return "";

    for (let i = 0; i <= strs[0].length; i++) {
      if (!strs.every((string) => string[i] === strs[0][i])) {
        return strs[0].slice(0, i);
      }
    }

    return strs[0];
  },
  // var longestCommonPrefix = function(strs) {
  //     // let strs =["dog","racecar","car"]
  //     let _amt_word = [{name:'',count:0}]

  //     for (let i = 0; i < strs.length; i++) {
  //         let prepName = strs[i]

  //      for (let k = 0; k < strs[i].length; k++) {

  //         for (let l = i; l < strs.length; l++) {
  //             if(strs[l].includes(prepName)){
  //             let foundDuplicate = false
  //             for (let q = 0; q < _amt_word.length; q++) {
  //                 if(_amt_word[q].name == prepName){
  //                    let clone = _amt_word
  //                    clone[q].count =   clone[q].count + 1
  //                    _amt_word = clone
  //                    foundDuplicate = true
  //                 }
  //             }
  //             if(foundDuplicate == false){
  //                 _amt_word.push({name: prepName , count : 1 })
  //              }
  //             }

  //         }
  //          prepName = prepName.slice(0, -1);
  //          // console.log(prepName)
  //      }
  //     }
  //     // console.log(_amt_word)
  //     let top = [{name:'',count:0}]
  //     for (let k = 0; k < _amt_word.length; k++) {
  //         if(_amt_word[k].count > top[0].count){
  //            top[0] = _amt_word[k]
  //         }
  //     }
  //    let checkWhat = 0
  //     if(top[0].name.length == 1){

  //         for (let k = 0; k < strs.length; k++) {
  //             console.log(strs[k][0] , top[0].name)
  //             if(strs[k][0] == top[0].name){
  //                 checkWhat = checkWhat + 1
  //                }
  //         }
  //     }
  //     console.log(checkWhat)
  //     if(top[0].name.length == 1 && checkWhat == 1){
  //         console.log('-----------')
  //        top[0].name = ''
  //      }
  //      console.log(top)
  //     return strs.length == 1 ? strs[0] :  top[0].name
  // };
  isValid(s) {
    //     /**
    //  * @param {string} s
    //  * @return {boolean}
    //  */
    let startFun = new Date();
    if (!s) {
      return false;
    }
    if (s.length % 2 !== 0) {
      return false;
    }

    let string = s;

    let i = 0;
    for (; i < string.length; ) {
      let match = false;
      if (string[i] == "(" || string[i] == "{" || string[i] == "[") {
        if (
          (string[i] == "(" && string[i + 1] == ")") ||
          (string[i] == "{" && string[i + 1] == "}") ||
          (string[i] == "[" && string[i + 1] == "]")
        ) {
          string = string.slice(0, i) + string.slice(i + 2);
          match = true;
        }
      }
      // console.log(i)
      if (match) {
        match = false;
        i = 0;
      } else {
        i = i + 1;
      }
    }
    let endFun = new Date();
    console.log("perf", (endFun.getTime() - startFun.getTime()) / 1000);
    return !string ? true : false;
  },
  mergeTwoLists(l1, l2) {
    // /**
    //  * Definition for singly-linked list.
    //  * function ListNode(val, next) {
    //  *     this.val = (val===undefined ? 0 : val)
    //  *     this.next = (next===undefined ? null : next)
    //  * }
    //  */
    // /**
    //  * @param {ListNode} list1
    //  * @param {ListNode} list2
    //  * @return {ListNode}
    //  */
    var newListNode = new ListNode(0);
    var headOfNewListNode = newListNode;

    var sum = 0;
    var carry = 0;
    var from = 0;
    var equal = false;

    while (l1 !== null || l2 !== null) {
      if (l1 !== null && l2 !== null) {
        let l1_val = l1.val;
        let l2_val = l2.val;
        if (carry !== 0 && from == 1) {
          l1_val = carry;
        } else if (carry !== 0 && from == 2) {
          l2_val = carry;
        }
        // console.log(l1 , l2)
        // console.log(l1_val < l2_val)
        if (l1_val < l2_val) {
          sum = l1.val;
          l1 = l1.next;
          carry = l2.val;
          from = 2;
          equal = false;
        } else if (l1_val > l2_val) {
          sum = l2.val;
          l2 = l2.next;
          carry = l1.val;
          from = 1;
          equal = false;
        } else if (l1_val == l2_val) {
          equal = true;
          sum = l1.val;
          carry = 0;
          from = 0;
          l1 = l1.next;
          l2 = l2.next;
        }
      } else {
        carry = 0;
        from = 0;
        equal = false;
        if (l1 !== null) {
          sum = l1.val;
          l1 = l1.next;
        }

        if (l2 !== null) {
          sum = l2.val;
          l2 = l2.next;
        }
      }

      if (equal == true) {
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;
        equel = false;
      } else {
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;
      }
    }
    console.log(newListNode);
    return newListNode.next;
  },
  removeDuplicates(nums) {
    //   /**
    //  * @param {number[]} nums
    //  * @return {number}
    //  */
    if (!nums || nums.length == 0) {
      return 0;
    }
    let i = 0;
    let j = 1;

    while (j < nums.length) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
        j++;
      } else {
        j++;
      }
    }

    return i + 1;
  },
  strStr(haystack, needle) {
    if (needle.length === 0) return 0;

    if (needle === haystack) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
      if (needle === haystack.substring(i, i + needle.length)) {
        return i;
      }
    }

    return -1;
  },
  searchInsert(nums, target) {
    //   /**
    //  * @param {number[]} nums
    //  * @param {number} target
    //  * @return {number}
    //  */
    if (!nums || nums.length == 0) {
      return;
    }
    const half = Math.ceil(nums.length / 2);
    let head = [];
    let tail = [];
    let answer = null;
    if (nums.length % 2 == 0) {
      head = nums.slice(0, half);
      tail = nums.slice(-half);
    } else if (nums.length == 1) {
      head = nums;
      tail = [];
    } else {
      head = nums.slice(0, half);
      tail = nums.slice(half, nums.length);
    }

    if (target > tail[0]) {
      for (let i = 0; i < tail.length; i++) {
        if (target > tail[i]) {
          answer = i + head.length + 1;
        } else if (target == tail[i]) {
          answer = i + head.length;
        }
      }
    } else {
      for (let i = 0; i < head.length; i++) {
        if (target > head[0] || target == head[0]) {
          if (target > head[i]) {
            answer = i + 1;
          } else if (target == head[i]) {
            answer = i;
          }
        } else {
          answer = 0;
        }
      }
    }
    console.log(head);
    console.log(tail);
    return answer;
  },
  maxSubArray(nums) {
    //   /**
    //  * @param {number[]} nums
    //  * @return {number}
    //  */
    let currSum = -Infinity;
    let maxSum = -Infinity;
    // console.log('start_currSum',currSum)
    // console.log('start_maxSum',maxSum)
    for (let i = 0; i < nums.length; i++) {
      // console.log('------------'+i+'----------------')
      currSum = Math.max(0, currSum);
      // console.log('currSum = Math.max(0, currSum) =>',currSum)
      currSum += nums[i];
      // console.log('currSum += nums[i] =>',currSum)
      maxSum = Math.max(maxSum, currSum);
      // console.log('maxSum = Math.max(maxSum, currSum) =>',maxSum)
      // console.log('---------------------------------')
    }
    // console.log('end_currSum',currSum)
    // console.log('end_maxSum',maxSum)
    return maxSum;
  },
  lengthOfLastWord(s) {
    if (!s) {
      return;
    }
    let string = s.split(" ");
    console.log(string);
    let answer = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i]) {
        answer = string[i].length;
      }
    }
    return answer;
  },
  vplusOne(digits) {
    //  /*
    //  * @param {number[]} digits
    //  * @return {number[]}
    //  */
    if (!digits || digits.length == 0) {
      return;
    }
    let number = [];
    let moreThanNine = 0;

    for (let i = digits.length - 1; i >= 0; i--) {
      if (moreThanNine > 0) {
        if (digits[i] + 1 > 9) {
          number.push(0);
        } else {
          moreThanNine = 0;
          number.push(digits[i] + 1);
        }
      } else {
        if (i == digits.length - 1) {
          if (digits[i] + 1 > 9) {
            moreThanNine = 1;
            number.push(0);
          } else {
            number.push(digits[i] + 1);
          }
        } else {
          number.push(digits[i]);
        }
      }
    }
    if (moreThanNine > 0) {
      number.push(moreThanNine);
    }
    let answer = number.reverse();
    return answer;
  },
  addBinary(a, b) {
    //   /**
    //  * @param {string} a
    //  * @param {string} b
    //  * @return {string}
    //  */
    let result = "";
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
      console.log("----" + "i = " + i + " | j = " + j + "------");
      let sum = carry;
      console.log("sum => ", sum);
      if (i >= 0) {
        sum += a[i--] - "0";
        console.log("sum in i => ", sum);
      }
      if (j >= 0) {
        sum += b[j--] - "0";
        console.log("sum in j => ", sum);
      }
      result = (sum % 2) + result;
      console.log("result => ", result);
      carry = parseInt(sum / 2);
      console.log("carry => ", carry);
    }
    if (carry > 0) {
      result = 1 + result;
    }
    console.log("final => ", result);
    return result;
  },
};
