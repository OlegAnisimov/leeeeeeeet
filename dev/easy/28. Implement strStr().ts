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
    ): number => {
        const comparePartHaystack = haystack.slice(indexHaystack, indexHaystack + needle.length);
        if (comparePartHaystack === needle) {
            return indexHaystack
        } else {
            return -1
        }
    }

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] ) {
            const index: number = compare(haystack, needle, i);
            index >= 0 ? indexesForCheck.push(index) : null;
        }
    }
    if (indexesForCheck.length === 0) {
        return -1
    } else {
        return indexesForCheck[0]
    }
};

// console.log(strStr("hello", "ll"));
// console.log(strStr("aaaaa", "bba"));
console.log(strStr("a", "a"));

