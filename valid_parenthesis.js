// Given a string s containing just the characters '(' , ')' , '{' , '}' ,
// '[' & ']' , determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.

// Open brackets must be closed in the correct order.

// Every close bracket has a corresponding open bracket of the same type.

/**
 * solution
 * You can use a stack data structure to check if the input string has valid parentheses, 
 * curly braces, and square brackets. Here's a JavaScript function to determine the validity:
 *  */ 

function isValid(s) {
    const stack = []
    const mapping = {
        ")": "(",
        "}" : "{",
        "]" : "["
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (mapping[char]) {
            // If the current character is a closing bracket
            const topElement = stack.length === 0 ? "#" : stack.pop()

            if (topElement !== mapping[char]) {
                return false
            }
        } else {
            // If the current character is an opening bracket, push it onto the stack
            stack.push(char)
        }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0
}

const inputString = "({[]})"
const result = isValid(inputString)
console.log(result)