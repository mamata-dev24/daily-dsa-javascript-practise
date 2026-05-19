// Problem: Two Sum
// Platform: LeetCode
// Difficulty: Easy


var twoSum = function(nums, target) {
    for(var i=0; i<nums.length; i++){
        for(var j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

// Time Complexity: O(n2)
// Space Complexity: O(1)



function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)

//Map provides O(1) average lookup time, which makes searching very fast.Instead of using nested loops to compare every pair, we can directly check whether the complement exists in the map
// “For example, if target is 9 and current number is 7, then complement is 2.
//I check whether 2 already exists in the map. If yes, I return the indexes immediately.”

//“Map is used for fast lookup using key-value pairs.”