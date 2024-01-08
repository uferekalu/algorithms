class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function invertTree(root) {
    if (root === null) {
        return null
    }

    const temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
}

const root = new TreeNode(4, new TreeNode(3, new TreeNode(6), new TreeNode(7)), new TreeNode(7, new TreeNode(4), new TreeNode(6)))
// console.log(invertTree(root))

function isPalindrome(string) {
    const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '')
    return cleanedString === cleanedString.split('').reverse().join('')
}

function maxProfit(prices) {
    if (prices.length <= 1) {
        return 0
    }

    let minPrice = prices[0]
    let maxProfit = 0
    let buyDay = 0
    let sellDay = 0
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
            buyDay = i
        }

        const currentProfit = prices[i] - minPrice
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit
            sellDay = i
        }
    }

    return `Output: ${maxProfit} (buy at ${prices[buyDay]} and sell at ${prices[sellDay]})`
}

const prices = [7, 8, 10, 1, 22, 3, 89, 9]
// console.log(maxProfit(prices))

class ListNode {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

function validParenthesis(string) {
    const stack = []
    const mapping = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }

    for (let i = 0; i < string.length; i++) {
        const char = string[i]
        if (mapping[char]) {
            const topElement = stack.length === 0 ? '#' : stack.pop()
            if (topElement !== mapping[char]) {
                return false
            }
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
}

const string = "({})"
// console.log(validParenthesis(string))

function twoSum(nums, target) {
    const numIndices = new Map()
    let result = []

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (numIndices.has(complement)) {
            result.push([numIndices.get(complement), i])
        }
        numIndices.set(nums[i], i)
    }
    console.log(numIndices)

    return result || []
}

const nums = [1, 3, 4, 5, 7, 2, 9, 11, 6]
const target = 11
// console.log(twoSum(nums, target))

const obj = {
    a: 2,
    b: 4,
    c: 5
}

console.log(Object.values(obj))
console.log(Object.entries(obj))
