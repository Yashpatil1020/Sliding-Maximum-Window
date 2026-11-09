var maxSlidingWindow = function(nums, k) {
    if (!nums || nums.length === 0) return [];
  const result = [];
  const dq = []; 
  for (let i = 0; i < nums.length; i++) {
    if (dq.length > 0 && dq[0] <= i - k) {
      dq.shift(); 
    }
    while (dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) {
      dq.pop();
    }
    dq.push(i);
    if (i >= k - 1) {
      result.push(nums[dq[0]]);
    }
  }
  return result;
};