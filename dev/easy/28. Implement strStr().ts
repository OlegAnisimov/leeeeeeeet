/** Implement strStr().
 Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 Clarification:
 What should we return when needle is an empty string? This is a great question to ask during an interview.
 For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 Example 1:
 Input: haystack = "hello", needle = "ll"
 Output: 2
 Example 2:
 Input: haystack = "aaaaa", needle = "bba"
 Output: -1
 Constraints:
 1 <= haystack.length, needle.length <= 104
 haystack and needle consist of only lowercase English characters.
 * */

function strStr(haystack: string, needle: string): number | undefined {
    if (needle === '') return 0;
    const indexesForCheck:number[] = [];
    const compare = (
        haystack: string,
        needle: string,
        indexHaystack: number,
    ): number | undefined => {
        const comparePartHaystack = haystack.slice(indexHaystack, indexHaystack + needle.length);
        if (comparePartHaystack === needle) {
            return indexHaystack
        }
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] ) {
            const index: number | undefined = compare(haystack, needle, i);
            index ? indexesForCheck.push(index) : null;
        }
    }
    if (indexesForCheck.length === 0) {
        return -1
    } else {
        return indexesForCheck[0]
    }
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
// for (let i = 0; i <= needle.length; i++) {
//     if (i === needle.length) return -1
//     for (let j = 0; j < haystack.length; j++) {
//         if (needle[i] === haystack[j]) {
//             if (needle[needle.length - 1] === haystack[j + needle.length]) {
//                 return j
//             }
//         }
//     }
// }
// return 100


// for (let i = 0; i < needle.length; i++) {
//     // 1. recursion we need here sub haystack.length \ needle.length
//     // and find maybe regExp in 1/2
//     // 2.
// }
