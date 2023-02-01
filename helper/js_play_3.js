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
}
}
