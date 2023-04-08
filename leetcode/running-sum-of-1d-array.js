const runningSum = (nums) => {
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) sum[i] = nums[i];
        else sum[i] = sum[i-1] + nums[i];
    }
    return sum;
};