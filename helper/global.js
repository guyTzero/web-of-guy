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
};
