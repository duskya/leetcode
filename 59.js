    // const n=3
    // let num = 1;
    // const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // let left = 0, right = n - 1, top = 0, bottom = n - 1;
    // while (left <= right && top <= bottom) {
    //     for (let a = left; a <= right; a++) {
    //         arr[top][a] = num;
    //         num++;
    //     }
    //     for (let b = top + 1; b <= bottom; b++) {
    //         arr[b][right] = num;
    //         num++;
    //     }
    //     if (left < right && top < bottom) {
    //         for (let c = right - 1; c > left; c--) {
    //             arr[bottom][c] = num;
    //             num++;
    //         }
    //         for (let d = bottom; d > top; d--) {
    //             arr[d][left] = num;
    //             num++;
    //         }
    //     }
    //     left++;
    //     right--;
    //     top++;
    //     bottom--;
    // }
    // console.log(arr) 

// // 链接：https://leetcode-cn.com/problems/spiral-matrix-ii/solution/luo-xuan-ju-zhen-ii-by-leetcode-solution-f7fp/
const n = 3  
const arr = new Array(n).fill(0).map(()=>new Array(n).fill(0));
let left=0,right=n-1,top=0,bottom=n-1
let num =1

while(left<=right && top<=bottom){
    for(let a = left;a<=right ; a++){
        arr[top][a]=num;
        num++;
      
    }
    for(let b=top+1 ; b<=bottom;b++){
        arr[b][right] = num;
        num++;
        
    }
    if(left<right && top<bottom){
        for(let c = right-1 ; c>left;c--){
            arr[bottom][c] = num;
            num++;
           
        }
        for(let d= bottom; d>top;d--){
            arr[d][left] = num;
            num++;
            
        }
    }
    left++;
    right--;
    top++;
    bottom--;
    
}
console.log(arr) 
