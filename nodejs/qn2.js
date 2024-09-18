function twoSum(nums, target) {

    if (!Array.isArray(nums)) {
        throw new Error("First argument must be an array");
    }
    if (typeof target !== "number") {
        throw new Error("Second argument must be a number");
    }
    
    const numMap = {}; 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }

        numMap[num] = i;
    }

   
    throw new Error("No two sum solution found");
}


const nums = [2, 7, 11, 15];
const target = 9;

try {
    const result = twoSum(nums, target);
    console.log(result); 
} catch (error) {
    console.error(error.message);
}
