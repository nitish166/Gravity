
// Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// time complexity: O(n)
// space complexity: O(n)


function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}


// Example usage:
const nums = [2, 7, 11, 15];

const target = 9;

console.log(twoSum(nums, target));