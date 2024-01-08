function binarySearch(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid // Target found
        } else if (nums[mid] < target) {
            left = mid + 1 // Target might be in the right half
        } else {
            right = mid - 1 // Target might be in left half
        }
    }

    return -1
}

const nums = [-2, 3, 4, 44, 5, 2, 5]
const target = 44
console.log(binarySearch(nums, target))