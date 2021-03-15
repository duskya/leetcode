//给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
//螺旋矩阵
// 链接：https://leetcode-cn.com/problems/spiral-matrix/solution/luo-xuan-ju-zhen-by-leetcode-solution/
matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const m = matrix.length
const n = matrix[0].length
let arr = []
if(!m || !n){
    return [];
}
let left=0 , right =n-1 , top=0 , bottom=m -1;
while(left <=right && top<=bottom){
    for(let n = left;n<=right;n++){
        arr.push(matrix[top][n])
    }
    for(let m = top+1 ; m <=bottom ; m++){
        arr.push(matrix[m][right])
    }
    if(left<right &&top<bottom){
        for(let n = right -1; n>left ;n--){
            arr.push(matrix[bottom][n])
        }
        for(let m = bottom;m >top ;m--){
                arr.push(matrix[m][left])
            }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
}
console.log(arr)
