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
};
