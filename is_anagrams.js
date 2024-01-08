function isAnagrams(s, t) {
    if (s.length !== t.length) {
        return false // Anagrams must have the same length
    }

    const charCount = {}
    // count characters in string s
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1
    }
    // Decrement character count for string t
    for (let char of t) {
        if (!charCount[char]) {
            return false // Character not present in s
        }
        charCount[char]--
    }

    // Check if all character counts are zero
    for (let count of Object.values(charCount)) {
        if (count !== 0) {
            return false // Character count do not match
        }
    }

    return true
}

const s = "anagrams"
const t = "smragaa"
console.log(isAnagrams(s, t))