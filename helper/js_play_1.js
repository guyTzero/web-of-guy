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
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
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
    /**
     * @param {number} x
     * @return {boolean}
     */
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
    /**
     * @param {string} s
     * @return {number}
     */
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
  /**
   * @param {string[]} strs
   * @return {string}
   */
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
    /**
     * @param {string} s
     * @return {boolean}
     */
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
    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
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
    /**
     * @param {number[]} nums
     * @return {number}
     */
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
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
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
    /**
     * @param {number[]} nums
     * @return {number}
     */
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
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
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
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */
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
  mySqrt(x) {
    let left = 1;
    let right = x;
    if (x < 2) return x;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (mid * mid === x) return mid;
      else if (mid * mid > x) right = mid;
      else left = mid + 1;
    }
    return left - 1;
  },
  climbStairs(n) {
    /**
     * @param {number} n
     * @return {number}
     */
    if (n == 1 || n == 0) return 1;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
      let third = first + second;
      first = second;
      second = third;
    }
    return second;
  },
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  // /**
  //  * @param {ListNode} head
  //  * @return {ListNode}
  //  */
  deleteDuplicates(head) {
    if (!head) return head;
    var cur = head;
    while (cur.next != null) {
      var nextnode = cur.next;
      if (cur.val == nextnode.val) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
    return head;
  },
  inorderTraversal(root) {
    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    var stack = [];
    var now = root;
    var res = [];

    while (now || stack.length) {
      while (now) {
        stack.push(now);
        now = now.left;
      }
      now = stack.pop();
      res.push(now.val);
      now = now.right;
    }

    return res;
  },
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  // /**
  //  * @param {TreeNode} p
  //  * @param {TreeNode} q
  //  * @return {boolean}
  //  */

  //  class Node {
  //   constructor(item) {
  //     this.data = item;
  //     this.left = null;
  //     this.right = null;
  //   }
  // }

  // /* Class to find size of Binary Tree */
  // class BinaryTree {
  //   constructor() {
  //     this.root = null;
  //   }
  //   /* computes number of nodes in tree */
  //   size(node = this.root) {
  //     if (node == null) {
  //       return 0;
  //     } else {
  //       return this.size(node.left) + 1 + this.size(node.right);
  //     }
  //   }
  // }
  // var tree = new BinaryTree();
  // tree.root = new Node(1);
  // tree.root.left = new Node(2);
  // tree.root.right = new Node(3);
  // tree.root.left.left = new Node(4);
  // tree.root.left.right = new Node(5);

  // console.log("Size of the tree is " + tree.size())

  isSameTree(p, q) {
    if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
    if (p && q)
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    return true;
  },

  // var isSameTree = function(p, q) {

  //    function inorderTraversal(root) {
  //     var stack = [];
  //     var now = root;
  //     var res = [];
  //     var checkNull = 0

  //     while (now || stack.length) {
  //         if(!now){
  //             checkNull = checkNull + 1
  //         }
  //       while (now) {
  //         stack.push(now);
  //         now = now.left;
  //       }
  //       now = stack.pop();
  //       res.push(now.val);
  //       now = now.right;
  //     }
  //     return [res,checkNull];
  //     }
  //     function arraysEqual(a, b) {
  //       if (a === b) return true;
  //       if (a == null || b == null) return false;
  //       if (a.length !== b.length) return false;

  //       for (var i = 0; i < a.length; ++i) {
  //         if (a[i] !== b[i]) return false;
  //       }
  //       return true;
  //     }
  //     let treeA = inorderTraversal(p)
  //     let treeB = inorderTraversal(q)
  //     let check = false

  //     console.log('treeA',treeA[0])
  //     console.log('treeB',treeB[0])

  //     if(treeA[1] == treeB[1] &&  arraysEqual(treeA[0],treeB[0])){
  //        check = true
  //     }

  //     return check
  // };
  singleNumber(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    if (!nums || nums.length == 0) {
      return;
    }
    if (nums.length == 1) {
      return nums[0];
    }
    let box = [];
    for (let i = 0; i < nums.length; i++) {
      if (box.includes(nums[i])) {
        let index = box.indexOf(nums[i]);
        if (index > -1) {
          box.splice(index, 1);
        }
      } else {
        box.push(nums[i]);
      }
    }
    return box[0];
  },
  isSymmetric(root) {
    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    function helper(p, q) {
      if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
      if (p && q) return helper(p.left, q.right) && helper(p.right, q.left);
      return true;
    }
    if (!root) return true;
    return helper(root.left, root.right);
  },
  isPalindrome(s) {
    /**
     * @param {string} s
     * @return {boolean}
     */
    if (s.length === 0) return true;

    s = s.toLowerCase();
    let i = 0,
      j = s.length - 1;
    while (i < j) {
      if ((s[i] < "a" || s[i] > "z") && (s[i] < "0" || s[i] > "9")) {
        i++;
        continue;
      }
      if ((s[j] < "a" || s[j] > "z") && (s[j] < "0" || s[j] > "9")) {
        j--;
        continue;
      }
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }

    return true;
  },
  lengthOfLongestSubstring(s) {
    /**
     * @param {string} s
     * @return {number}
     */
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
      let currentStringSet = new Set();

      for (let x = i; x < s.length; x++) {
        if (currentStringSet.has(s[x])) {
          break;
        } else {
          currentStringSet.add(s[x]);
        }
      }
      longestStringLength = Math.max(
        longestStringLength,
        currentStringSet.size
      );
    }

    return longestStringLength;
  },
  zigzag_conversion(s, numRows) {
    /**
     * @param {string} s
     * @param {number} numRows
     * @return {string}
     */
    let res = [];
    let way = "down";
    let index = 0;

    for (let i = 0; i < s.length; i++) {
      res.push({ val: s[i], num: index });
      if (way == "down") {
        index = index + 1;
        if (index == numRows - 1) {
          way = "up";
        }
      } else {
        index = index - 1;
        if (index == 0) {
          way = "down";
        }
      }
    }
    let ans = "";
    for (let i = 0; i < numRows; i++) {
      for (let p = 0; p < res.length; p++) {
        if (res[p].num == i) {
          ans = ans + res[p].val;
        }
      }
    }

    return numRows == 1 ? s : ans;
  },
  longestPalindrome(string) {
    if (!string) return;

    let ll = 0;
    let rr = 0;

    for (let i = 0; i < string.length; i++) {
      console.log("--------------------------------------------------");
      for (let j of [i, i + 1]) {
        console.log("_______________ " + j + " ___________________");
        for (let l = i, r = j; string[l] && string[l] === string[r]; l--, r++) {
          [ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];
          console.log("+++++++++++++++++++++");
          console.log("result", [ll, rr]);
        }
      }
    }
    return string.substring(ll, rr + 1);
  },
  removeElement(nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[j++] = nums[i];
      }
    }

    return j;
  },
  reverseInt32(x) {
    if (!x) {
      return 0;
    }
    let isNegative = x < 0 ? true : false;
    let abs = Math.abs(x);
    let x_str = abs.toString();
    x_str = x_str.split("").reverse().join("");
    if (x_str[0] == "0") {
      x_str = x_str.substring(1);
    }
    parseInt(x_str);
    if (isNegative) {
      x_str = -Math.abs(x_str);
    }
    if (x_str > 2147483647 || x_str < -2147483647) {
      return 0;
    }
    return x_str;
  },
  nextPermutation(nums) {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    if (nums.length <= 1) return;

    let leftHandSwap;

    // Loop through the provided numbers from right to left (excluding the first as we need something to compare it to)
    for (let i = nums.length - 2; i >= 0; i--) {
      // Check if this number is lower than the previous one (marks our left-hand swap)
      if (nums[i] < nums[i + 1]) {
        leftHandSwap = i;
        break;
      }
    }

    // Loop through the provided numbers from right to left
    for (let i = nums.length - 1; i > leftHandSwap; i--) {
      // If the number is bigger than the left-hand one
      if (nums[i] > nums[leftHandSwap]) {
        // Swap the numbers round
        [nums[i], nums[leftHandSwap]] = [nums[leftHandSwap], nums[i]];

        // Reverse the rest of the array
        let chopped = nums.splice(leftHandSwap + 1);
        chopped.sort((a, b) => a - b);
        nums.push(...chopped);
        return;
      }
    }

    // Right-hand swap not found, return lowest permutation instead
    nums.sort((a, b) => a - b);
  },
  generateParenthesis(n) {
    /**
     * @param {number} n
     * @return {string[]}
     */
    const result = [];
    breathFirstSearch("", 0, 0);
    return result;
    function breathFirstSearch(str, left, right) {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left !== n) {
        breathFirstSearch(str + "(", left + 1, right);
      }
      if (left > right) {
        breathFirstSearch(str + ")", left, right + 1);
      }
    }
    // let init = "";
    // for (let i = 0; i < n; i++) {
    //   init = init + "()";
    // }
    // let l = init.length / 2 - 1;
    // let r = init.length - 1;
    // let act = "";

    // while (l !== 0 && r !== 0) {
    //   let def = init;
    //   init[l] = def[r];
    //   init[r] = def[l];

    //   // x = x.split('');
    //   // x[0] = y[0]
    //   // x = x.join('');

    //   if (l + 1 !== r && !act) {
    //     r = r - 1;
    //     l = l + 1;
    //   }
    //   if (l + 1 == r && !act) {
    //     act = "right";
    //     l = init.length / 2 + 2;
    //     r = init.length / 2 + 3;
    //   }

    //   if (act == "right" && r + 1 !== init.length - 1) {
    //     l = l + 1;
    //     r = r + 1;
    //   }
    //   if (act == "right" && r + 1 == init.length - 1) {
    //     act = "left";
    //     l = 0;
    //     r = 1;
    //   }

    //   if (act == "left" && l + 1 !== init.length / 2 - 1) {
    //     l = l + 1;
    //     r = r + 1;
    //   }
    //   if (act == "left" && l + 1 == init.length / 2 - 1) {
    //     act = "";
    //     l = 0;
    //     r = 0;
    //   }
    // }
  },
  merge(nums1, m, nums2, n) {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    m--;
    n--;
    let i = nums1.length - 1;
    while (i >= 0) {
      if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
        nums1[i] = nums1[m];
        nums1[m] = nums2[n];
        m--;
      } else if (n > -1) {
        nums1[i] = nums2[n--];
      }
      i--;
    }
  },
  isHappy(n) {
    /**
     * @param {number} n
     * @return {boolean}
     */
    if (!n) {
      return false;
    }
    let n_string = n.toString();

    n_string = n_string.split("");

    let res = [];
    let isTrue = false;
    let i = 0;

    while (i < 100 && !isTrue) {
      if (n_string) {
        res = n_string;
        n_string = null;
      }
      let box = [];
      for (let k = 0; k < res.length; k++) {
        let pow = Math.pow(parseInt(res[k]), 2);
        box.push(pow);
      }
      box = box.reduce((a, b) => a + b, 0);
      if (box == 1) {
        isTrue = true;
      }
      box = box.toString();
      box = box.split("");
      res = box;

      console.log(res);

      i++;
    }

    return isTrue;
  },
  /**
   * @param {number[][]} graph
   * @return {boolean}
   */
  isBipartite(graph) {
    let len = graph.length,
      s = [],
      vis = new Uint8Array(len);
    console.log("vis", vis);
    for (let i = 0; i < len; i++) {
      if (vis[i]) continue;
      (vis[i] = 1), s.push(i);
      console.log(`-----------------------------`);
      while (s.length) {
        console.log(`++++++++++${s.length}+++++++++++++`);
        let curr = s.pop(),
          edges = graph[curr];
        for (let j = 0; j < edges.length; j++) {
          let next = edges[j];
          console.log("vis[curr] : " + vis[curr], "vis[next] : " + vis[next]);
          if (!vis[next]) (vis[next] = vis[curr] ^ 3), s.push(next);
          else if (vis[curr] === vis[next]) return false;
        }
      }
    }
    return true;
    //     let box = []
    //     for(let i = 0 ; i < graph.length ; i++){
    //         box.push(graph[i].toString())
    //     }
    //     console.log(box)
    //     let set = new Set(box);
    //     console.log(set.size)

    //     return set.size == (graph.length / 2) ? true :false
  },
  calcEquation(equations, values, queries) {
    var calcEquation = function (equations, values, queries) {
      let neighbors = {};

      equations.forEach(([nom, denom], idx) => {
        const curValue = values[idx];
        neighbors[nom] = neighbors[nom] || [];
        neighbors[nom].push([denom, curValue]);

        neighbors[denom] = neighbors[denom] || [];
        neighbors[denom].push([nom, 1 / curValue]);
      });

      let result = [];
      for (let query of queries) {
        result.push(evaluate(query, neighbors));
      }

      return result;
    };

    function evaluate(query, neighbors) {
      const [nom, denom] = query;
      if (!(nom in neighbors) || !(denom in neighbors)) return -1;
      if (nom === denom) return 1;

      let queue = neighbors[nom].slice();
      let visited = new Set();

      while (queue.length) {
        const [variable, value] = queue.shift();

        if (variable === denom) return value;
        visited.add(variable);

        const next = neighbors[variable];
        next.forEach(([next, nextValue]) => {
          if (visited.has(next)) return;
          queue.push([next, nextValue * value]);
        });
      }

      return -1;
    }
    return calcEquation(equations, values, queries);
    // let ansBox = [];
    // let allChar = [];
    // for (let i = 0; i < equations.length; i++) {
    //   ansBox.push(false);
    //   for (let k = 0; k < equations[i].length; k++) {
    //     allChar.push(equations[i][k]);
    //   }
    // }
    // let setChar = new Set(allChar);
    // setChar = Array.from(setChar);
    // console.log("setChar", setChar);
    // let setCharWithValue = [];
    // for (let i = 0; i < setChar.length; i++) {
    //   setCharWithValue.push({ name: setChar[i], value: 0, ans: 0 });
    // }
    // console.log("setCharWithValue", setCharWithValue);

    // let last = setCharWithValue.length - 1;
    // let checker = (arr) => arr.every((v) => v === true);
    // while (setCharWithValue[0].value < 20) {
    //   //////
    //   let main = 0;
    //   let sec = 0;
    //   for (let i = 0; i < equations.length; i++) {
    //     for (let k = 0; k < setCharWithValue.length; k++) {
    //       if (setCharWithValue[k].name == equations[i][0]) {
    //         main = setCharWithValue[k].value;
    //       }
    //       if (setCharWithValue[k].name == equations[i][1]) {
    //         sec = setCharWithValue[k].value;
    //       }
    //     }
    //     // console.log('main / sec == values[i]',main , sec , values[i])
    //     if (main / sec == values[i]) {
    //       ansBox[i] = true;
    //       for (let k = 0; k < setCharWithValue.length; k++) {
    //         if (setCharWithValue[k].name == equations[i][0]) {
    //           setCharWithValue[k].ans = main;
    //         }
    //         if (setCharWithValue[k].name == equations[i][1]) {
    //           setCharWithValue[k].ans = sec;
    //         }
    //       }
    //     } else {
    //       ansBox[i] = false;
    //       // for(let k = 0;k < setCharWithValue.length ;k++){
    //       //  if(setCharWithValue[k].name == equations[i][0]){setCharWithValue[k].ans = 0}
    //       //  if(setCharWithValue[k].name == equations[i][1]){setCharWithValue[k].ans = 0}
    //       //  }
    //     }

    //     if (checker(ansBox)) {
    //       console.log(
    //         "equations",
    //         equations[i] + " : " + main + "/" + sec + " = ",
    //         values[i]
    //       );
    //       console.log("answer", setCharWithValue);
    //     }
    //   }
    //   if (checker(ansBox)) {
    //     break;
    //   }
    //   //////
    //   setCharWithValue[last].value = setCharWithValue[last].value + 1;
    //   if (setCharWithValue[last].value == 20) {
    //     let plus = true;
    //     for (let k = last - 1; k >= 0; k--) {
    //       if (plus == true) {
    //         setCharWithValue[k].value = setCharWithValue[k].value + 1;
    //         plus = false;
    //         if (setCharWithValue[k].value == 20) {
    //           if (k == 0) return;
    //           setCharWithValue[k].value = 0;
    //           plus = true;
    //         }
    //       }
    //     }
    //     setCharWithValue[last].value = 0;
    //   }
    // }
    // let answerQueries = [];
    // for (let i = 0; i < queries.length; i++) {
    //   let main = 0;
    //   let sec = 0;
    //   for (let k = 0; k < setCharWithValue.length; k++) {
    //     if (setCharWithValue[k].name == queries[i][0]) {
    //       main = setCharWithValue[k].ans;
    //     }
    //     if (setCharWithValue[k].name == queries[i][1]) {
    //       sec = setCharWithValue[k].ans;
    //     }
    //   }
    //   if (main / sec > -1 && main / sec < 1000000) {
    //     answerQueries.push(main / sec);
    //   } else {
    //     answerQueries.push(-1.0);
    //   }
    // }
    // console.log("answerQueries", answerQueries);
    // return answerQueries;
  },
  backspaceCompare(s, t) {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    const getHashBackPointer = (input, p) => {
      if (input[p] === "#") {
        let hashBackCounter = 2;
        while (hashBackCounter > 0) {
          hashBackCounter--;
          p--;
          if (input[p] === "#") {
            hashBackCounter += 2;
          }
        }
      }
      return p;
    };
    const backSpaceCompareThirdWay = (s, t) => {
      let p1 = s.length - 1;
      let p2 = t.length - 1;
      while (p1 >= 0 || p2 >= 0) {
        p1 = getHashBackPointer(s, p1);
        p2 = getHashBackPointer(t, p2);
        if (s[p1] !== t[p2]) {
          return false;
        } else {
          p1--;
          p2--;
        }
      }
      return true;
    };
    return backSpaceCompareThirdWay(s, t);
    //     const getFormattedString = (input) => {
    //   const output = [];
    //   for (let i = 0; i < input.length; i++) {
    //     if (input[i] === '#') {
    //       output.pop();
    //     } else {
    //       output.push(input[i]);
    //     }
    //   }
    //   return output.join('');
    // };
    // const backSpaceCompareFirstWay = (stringOne, stringTwo) => {
    //   const s = getFormattedString(stringOne);
    //   const t = getFormattedString(stringTwo);
    //   if (s === t) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    //     return backSpaceCompareFirstWay(s,t)
    // let box = [s,t]
    // for(let k = 0; k < box.length ; k++){
    //     for(let i = 0 ; i < box[k].length ;i++){
    //         if(i+1 < box[k].length && box[k][i+1] == "#"){
    //             box[k] = box[k].split('');
    //             box[k][i] = ''
    //             box[k][i+1] = ''
    //             box[k] =  box[k].join("");
    //             i = -1
    //            }
    //         if(i == box[k].length-1){
    //            box[k] = box[k].replace('#', '');
    //            }
    //     }
    // }
    // // console.log('res',box)
    // return box[0] == box[1] ? true : false
  },
  Glife() {
    let life = ["goal"];

    if (life.includes("goal")) life.push("pain/suffering");

    if (life.includes("pain/suffering")) life.push("experience");

    if (life.includes("experience"))
      life.push(["pattern", "perspective", "understanding"]);
  },
  sortArrayByParity(nums) {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    let even = [];
    let odd = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 == 0) {
        even.push(nums[i]);
      } else {
        odd.push(nums[i]);
      }
    }
    let res = even.concat(odd);
    // console.log(res)
    return res;
  },
  containsDuplicate(nums) {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    let arr = [];
    let dup = false;
    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) {
        dup = true;
        break;
      } else {
        arr.push(nums[i]);
      }
    }
    return dup;
  },
  implement_stack_using_queues() {
    var Queue = function () {
      const queue = [];
      return {
        get length() {
          return queue.length;
        },
        push: (x) => queue.push(x),
        pop: () => queue.shift(),
        top: () => queue[0],
      };
    };

    var MyStack = function () {
      this.queue = Queue();
    };

    /**
     * @param {number} x
     * @return {void}
     */
    MyStack.prototype.push = function (x) {
      if (this.queue.length === 0) {
        this.queue.push(x);
      } else {
        this.queue.push(x);
        for (let i = 1; i <= this.queue.length - 1; i++) {
          this.queue.push(this.queue.pop());
        }
      }
    };

    /**
     * @return {number}
     */
    MyStack.prototype.pop = function () {
      return this.queue.pop();
    };

    /**
     * @return {number}
     */
    MyStack.prototype.top = function () {
      return this.queue.top();
    };

    /**
     * @return {boolean}
     */
    MyStack.prototype.empty = function () {
      return this.queue.length === 0;
    };

    /**
     * Your MyStack object will be instantiated and called as such:
     * var obj = new MyStack()
     * obj.push(x)
     * var param_2 = obj.pop()
     * var param_3 = obj.top()
     * var param_4 = obj.empty()
     */
  },
  removeDuplicatesII(S, K) {
    /**
     * @param {string} s
     * @param {number} k
     * @return {string}
     */
    let SC = S.split(""),
      st = [0],
      i,
      j;
    for (i = 1, j = 1; j < S.length; SC[++i] = SC[++j]) {
      if (SC[i] !== SC[i - 1]) st.push(i);
      else if (i - st[st.length - 1] + 1 === K) i = st.pop() - 1;
    }
    return SC.slice(0, i + 1).join("");
  },
  find132pattern(nums) {
    // let res = false;
    // console.log(nums.length);
    // for (let i = 0; i < nums.length; i++) {
    //   console.log(i);
    //   if (res) break;
    //   for (let k = i + 1; k < nums.length; k++) {
    //     if (res) break;
    //     for (let j = k; j < nums.length; j++) {
    //       if (nums[k] > nums[j] && nums[j] > nums[i]) {
    //         console.log(nums[i], nums[k], nums[j]);
    //         res = true;
    //         break;
    //       }
    //     }
    //   }
    // }
    // console.log(res);
    // return res;
    let max = -Infinity;
    const stack = [];
    for (let i = nums.length - 1; i >= 0; i--) {
      while (nums[i] > stack[stack.length - 1]) {
        max = stack.pop();
      }
      if (nums[i] < max) {
        return true;
      }
      stack.push(nums[i]);
    }
    return false;
  },
  NestedIteratorFuntion() {
    /**
     * // This is the interface that allows for creating nested lists.
     * // You should not implement it, or speculate about its implementation
     * function NestedInteger() {
     *
     *     Return true if this NestedInteger holds a single integer, rather than a nested list.
     *     @return {boolean}
     *     this.isInteger = function() {
     *         ...
     *     };
     *
     *     Return the single integer that this NestedInteger holds, if it holds a single integer
     *     Return null if this NestedInteger holds a nested list
     *     @return {integer}
     *     this.getInteger = function() {
     *         ...
     *     };
     *
     *     Return the nested list that this NestedInteger holds, if it holds a nested list
     *     Return null if this NestedInteger holds a single integer
     *     @return {NestedInteger[]}
     *     this.getList = function() {
     *         ...
     *     };
     * };
     */
    /**
     * @constructor
     * @param {NestedInteger[]} nestedList
     */
    const NestedIterator = function (nestedList) {
      const aux = (list = []) =>
        list.reduce(
          (acc, v) =>
            acc.concat(v.isInteger() ? v.getInteger() : aux(v.getList())),
          []
        );
      this.list = aux(nestedList);
      this.count = 0;
    };

    /**
     * @this NestedIterator
     * @returns {boolean}
     */
    NestedIterator.prototype.hasNext = function () {
      return this.count <= this.list.length - 1;
    };

    /**
     * @this NestedIterator
     * @returns {integer}
     */
    NestedIterator.prototype.next = function () {
      return this.list[this.count++];
    };
  },
  containsNearbyDuplicate(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        const j = map.get(nums[i]);

        if (Math.abs(i - j) <= k) {
          return true;
        }
      }

      map.set(nums[i], i);
    }

    return false;
  },
  combinationSum3(k, n) {
    let res = [];
    let avaNum = [];
    for (let i = 1; i <= k; i++) {
      avaNum.push(i);
    }
    const all_9 = (currentValue) => currentValue == 9;
    let check = avaNum.every(all_9);
    while (check == false) {
      let sum = avaNum.reduce((a, b) => a + b, 0);
      if (sum == n) {
        const mySet = new Set(avaNum);
        if (mySet.size == k) {
          let sorted = true;
          let isPattern = true;
          for (let i = 0; i < avaNum.length - 1; i++) {
            if (avaNum[i] + 1 !== avaNum[i + 1]) isPattern = false;
            if (avaNum[i] > avaNum[i + 1]) {
              sorted = false;
              break;
            }
          }
          if (sorted) {
            res.push(avaNum);
            console.log(res);
            if (isPattern) break;
          }
        }
      }
      let str = "";
      for (let i = 0; i < avaNum.length; i++) {
        str = str + avaNum[i];
      }
      if (str[0] + "00000000" == str || str[0] + "0000000" == str) {
        console.log(str);
      }
      str = parseInt(str);
      str = str + 1;
      let convert = (num) => Number(num);
      let intArr = Array.from(String(str), convert);
      avaNum = intArr;
      check = avaNum.every(all_9);
    }
    console.log(res);
    return res;
  },
  countVowelStrings(n) {
    /**
     * @param {number} n
     * @return {number}
     */
    // let checker = (arr) => arr.every((v) => v === 5);
    // let box = [];
    // let max = "";
    // let c = 0;
    // for (let k = 0; k < n; k++) {
    //   box.push(1);
    //   max = max + "5";
    // }
    // max = parseInt(max);
    // while (checker(box) == false) {
    //   let str = box.toString();
    //   str = str.replace(/,/g, "");
    //   let number = parseInt(str);
    //   if (number <= max) {
    //     let sorted = true;
    //     for (let i = 0; i < box.length - 1; i++) {
    //       if (box[i] > box[i + 1]) {
    //         sorted = false;
    //         break;
    //       }
    //     }
    //     if (sorted) {
    //       c = c + 1;
    //       console.log(c + 1);
    //     }
    //   }
    //   if (str[str.length - 1] == "5") {
    //     number = number + 5;
    //   } else {
    //     number = number + 1;
    //   }
    //   let numberStr = number.toString();
    //   let arrayOfDigits = Array.from(String(numberStr), Number);
    //   box = arrayOfDigits;
    // }
    // console.log("fin");
    // return c + 1;
    if (n === 1) return 5;
    let values = [1, 1, 1, 1, 1];
    for (let k = 2; k <= n; k++) {
      for (let i = 1; i < 5; i++) {
        values[i] += values[i - 1];
      }
    }
    let ret = 0;
    for (let e of values) {
      ret += e;
    }
    console.log(ret);
    return ret;
  },
  // var permuteUnique = function(nums) {

  //     let res = []

  //             let a = []
  //         for(let k = 0; k< nums.length ; k++){
  //             a.push(nums[k])
  //         }
  //     res.push(a)

  //     let isReversed = false
  //     let i = 0
  //     while(i < nums.length  && i < 100 ){
  //         let array = []
  //         for(let k = 0; k< nums.length ; k++){
  //             array.push(nums[k])
  //         }
  //          console.log('---------'+i+'---------')
  //         if(1+1 == 3){
  //             res.push(array)
  //             console.log('start',i)
  //             i = i + 1
  //         }else if(i == nums.length -1 ){
  //             console.log('end',i)

  //                  array.reverse()

  //                  res.push(array)
  //             if( isReversed == false){
  //                 i = 0
  //             }else{
  //                 i = i + 1
  //             }

  //             isReversed= true
  //                  }else{
  //                      if(i <= nums.length -2){

  //                      console.log('logic',i)

  //                      let prep = array[i]

  //                      array[i] = array[i+1]
  //                      array[i+1] = prep

  //                      nums = array
  //                      res.push(array)

  //         }
  //                      i = i + 1

  //                  }
  //         nums = array
  //     }
  //     console.log(res)
  //     let ret = []
  //     for(let i = 0 ; i < res.length ; i++){
  //         if(ret.length == 0){
  //             ret.push(res[i])
  //         }else{
  //             let dup = false
  //         for(let k = 0 ; k < ret.length ; k++){
  //         if(res[i].toString() == ret[k].toString()){
  //            dup = true
  //            }
  //        }
  //                         if(dup == false){
  //                 ret.push(res[i])
  //             }
  // }

  //     }
  //     console.log(ret)
  //     return ret
  // };
  permuteUnique(nums) {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    var permuteUnique = function (nums) {
      var res = [];

      nums.sort((a, b) => a - b);
      dfs(res, [], nums);

      return res;
    };

    var dfs = function (res, arr, nums) {
      var len = nums.length;
      var tmp1 = null;
      var tmp2 = null;

      if (!len) return res.push(arr);

      for (var i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) continue;

        tmp1 = Array.from(arr);
        tmp1.push(nums[i]);

        tmp2 = Array.from(nums);
        tmp2.splice(i, 1);

        dfs(res, tmp1, tmp2);
      }
    };
    return permuteUnique(nums);
  },
  findWords(words) {
    let keyboard = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let ret = [];
    let checker = (arr) => arr.every((v) => v === true);
    for (let i = 0; i < words.length; i++) {
      let a = [];
      let b = [];
      let c = [];
      for (let k = 0; k < words[i].length; k++) {
        a.push(keyboard[0].includes(words[i][k].toLowerCase()));
        b.push(keyboard[1].includes(words[i][k].toLowerCase()));
        c.push(keyboard[2].includes(words[i][k].toLowerCase()));
      }
      // console.log(a , b , c)
      // console.log(checker(a) , checker(b) , checker(c))
      if (checker(a) && !checker(b) && !checker(c)) {
        ret.push(words[i]);
      }
      if (!checker(a) && checker(b) && !checker(c)) {
        ret.push(words[i]);
      }
      if (!checker(a) && !checker(b) && checker(c)) {
        ret.push(words[i]);
      }
    }
    // console.log(ret)
    return ret;
  },
  maxProfit(prices) {
    // my very slow code
    let ret = [];
    for (let i = 0; i < prices.length; i++) {
      for (let k = i + 1; k < prices.length; k++) {
        if (prices[i] < prices[k]) {
          ret.push(prices[k] - prices[i]);
        }
      }
    }

    // console.log("ret", ret.length);

    return ret.length > 0 ? Math.max(...ret) : 0;
  },
  shortestPathBinaryMatrix(grid) {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    let n = grid.length - 1,
      q = [0];
    if (grid[0][0] || grid[n][n]) return -1;
    grid[0][0] = 1;
    while (q.length) {
      let curr = q.shift(),
        i = curr & ((1 << 7) - 1),
        j = curr >> 7;
      if (i === n && j === n) return grid[n][n];
      for (let a = Math.max(i - 1, 0); a <= Math.min(i + 1, n); a++)
        for (let b = Math.max(j - 1, 0); b <= Math.min(j + 1, n); b++)
          if (grid[a][b] === 0)
            (grid[a][b] = grid[i][j] + 1), q.push(a + (b << 7));
    }
    return -1;
  },

  getTargetCopy(original, cloned, target) {
    /**
     * Definition for a binary tree node.
     * function TreeNode(val) {
     *     this.val = val;
     *     this.left = this.right = null;
     * }
     */
    /**
     * @param {TreeNode} original
     * @param {TreeNode} cloned
     * @param {TreeNode} target
     * @return {TreeNode}
     */
    // corner case
    if (original === null || original === target) {
      return cloned;
    }

    // normal case
    var res = getTargetCopy(original.left, cloned.left, target);
    if (res !== null) {
      return res;
    }
    return getTargetCopy(original.right, cloned.right, target);
  },
  reverseString(s) {
    return s ? s.reverse() : false;
  },
  getConcatenation(nums) {
    return nums.concat(nums);
  },
  buildArray(nums) {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
      ans.push(nums[nums[i]]);
    }
    return ans;
  },
  runningSum(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let k = 0; k <= i; k++) {
        sum = sum + nums[k];
      }
      ans.push(sum);
    }
    return ans;
  },
  finalValueAfterOperations(operations) {
    let ans = 0;
    for (let i = 0; i < operations.length; i++) {
      if (operations[i].includes("+")) {
        ans = ans + 1;
      } else {
        ans = ans - 1;
      }
    }
    return ans;
  },
  maximumWealth(accounts) {
    let most = 0;
    for (let i = 0; i < accounts.length; i++) {
      let sum = accounts[i].reduce((a, b) => a + b, 0);
      if (most < sum) {
        most = sum;
      }
    }
    return most;
  },
  DebouncedEffect() {
    const useDebouncedEffect = (effect, deps, delay) => {
      useEffect(() => {
        const handler = setTimeout(() => effect(), delay);

        return () => clearTimeout(handler);
      }, [...(deps || []), delay]);
    };
    const [value, setValue] = useState(0);

    useDebouncedEffect(() => console.log(value), [value], 1000);

    return <button onClick={() => setValue(value + 1)}>{value}</button>;
  },
  defangIPaddr(address) {
    let res = "";
    for (let i = 0; i < address.length; i++) {
      if (address[i] == ".") {
        res = res + "[.]";
      } else {
        res = res + address[i];
      }
    }
    return res;
  },
  mostWordsFound(sentences) {
    let max = 0;
    for (let i = 0; i < sentences.length; i++) {
      let len = sentences[i].split(" ").length;
      if (len > max) {
        max = len;
      }
    }
    return max;
  },
  minimumSum(num) {
    function solve(arr, n) {
      arr.sort();

      let a = 0,
        b = 0;
      for (let i = 0; i < n; i++) {
        if (i % 2 != 0) a = a * 10 + arr[i];
        else b = b * 10 + arr[i];
      }

      return a + b;
    }

    var myArr = String(num)
      .split("")
      .map((num) => {
        return Number(num);
      });

    return solve(myArr, myArr.length);
  },
  transposeMatrix(matrix) {
    let i = 0;
    let b = [];

    while (i < matrix[0].length) {
      let ii = 0;
      let arr = [];
      while (ii < matrix.length) {
        arr.push(matrix[ii][i]);
        ii = ii + 1;
      }
      b.push(arr);
      i = i + 1;
    }

    return b;
  },
  splitArrayEqual(array, n) {
    let [...arr] = array;
    var res = [];
    while (arr.length) {
      res.push(arr.splice(0, n));
    }
    return res;
  },
  shuffle(nums, n) {
    let left = [];
    let right = [];
    for (let i = 0; i < nums.length - n; i++) left.push(nums[i]);
    for (let i = n; i < nums.length; i++) right.push(nums[i]);
    let box = [];
    for (let i = 0; i < left.length; i++) {
      box.push(left[i]);
      box.push(right[i]);
    }
    return box;
  },
};

export class NumMatrix {
  constructor(M) {
    let ylen = M.length + 1,
      xlen = M[0].length + 1;
    this.dp = Array.from({ length: ylen }, () => new Array(xlen).fill(0));
    for (let i = 1; i < ylen; i++)
      for (let j = 1; j < xlen; j++)
        this.dp[i][j] =
          M[i - 1][j - 1] +
          this.dp[i - 1][j] +
          this.dp[i][j - 1] -
          this.dp[i - 1][j - 1];
    // console.log(this.dp)
  }

  sumRegion(R1, C1, R2, C2) {
    return (
      this.dp[R2 + 1][C2 + 1] -
      this.dp[R2 + 1][C1] -
      this.dp[R1][C2 + 1] +
      this.dp[R1][C1]
    );
  }
}

export class SubrectangleQueries {
  constructor(rectangle) {
    this.rectangle = rectangle;
    console.log(this.rectangle);
  }

  updateSubrectangle = function (row1, col1, row2, col2, newValue) {
    // console.log('xxx',row1, col1, row2, col2, newValue)
    // let box = []
    for (let i = row1; i <= row2; i++) {
      // let arr = []
      for (let j = col1; j <= col2; j++) {
        // arr.push(this.rectangle[i][j])
        this.rectangle[i][j] = newValue;
      }
      // box.push(arr)
    }
    // console.log(box)
  };

  getValue(row, col) {
    return this.rectangle[row][col];
  }
}
