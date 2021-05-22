/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var map = {};
    for (const num of nums) {
        map[num] = +Boolean(map[num]) + 1;
    }

    var mapKeys = Object.keys(map);
    for (const key of mapKeys) {
        if (map[key] === 1) {
            return key;
        }
    }
};
// @lc code=end

