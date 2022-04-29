function removeDuplicates(nums: number[]): number {
    const set = new Set(nums)
    return set.size
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2,]));
