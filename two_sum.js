// Given an array of integers nums and an integer target , return indices
// of the two numbers such that they add up to target
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// You can return the answer in any order

function twoSum(nums, target) {
    const numIndices = new Map()

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i]
        }

        numIndices.set(nums[i], i)
    }

    // No solution
    return []
}

const nums = [1, 3, 4, 5, 6, 7, 10]
const target = 11
const result = twoSum(nums, target)
console.log(result)