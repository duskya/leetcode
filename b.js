nums=[1,2,3,4,3]
const n = nums.length;
const ret = new Array(n).fill(-1);
const stk = [];
for (let i = 0; i < n * 2 - 1; i++) {
  
    while (stk.length && nums[stk[stk.length - 1]] < nums[i % n]) {
        ret[stk[stk.length - 1]] = nums[i % n];
        stk.pop();
    }
    stk.push(i % n);
   
}
console.log(ret,stk)
return ret;