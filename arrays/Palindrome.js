// Problem: Palindrome
// Platform: LeetCode
// Difficulty: Easy


/// two pointer approach
function palindrome(num) {

    let str = num.toString();

    let left = 0;
    let right = str.length - 1;

    while (left < right) {

        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


/// Reverse number approach

function palindrome(num) {

    let original = num;
    let reverse = 0;

    while (num > 0) {

        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = Math.floor(num / 10);
    }

    return original === reverse;
}

console.log(palindrome(121));    // true
console.log(palindrome(123));    // false
console.log(palindrome(12321));  // true


///comparison

// | Approach             | Time     | Space |
// | -------------------- | -------- | ----- |
// | Reverse Number       | O(log n) | O(1)  |
// | Two Pointer (String) | O(n)     | O(n)  |

//For interviews:

//Reverse number approach is more optimized.
//Two pointer approach is easier to explain and write quickly.