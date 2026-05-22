// Problem: Remove Duplicates
// Platform: LeetCode
// Difficulty: Easy



///using set method
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}



///using reduce()
const removeDuplicates = (arr) => {
    return arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);
}


///for loop
const removeDuplicates = (arr) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        let isDuplicate = false;

        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}


console.log(removeDuplicates([1,2,1,3,5,2]));


