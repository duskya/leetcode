//验证二叉树的前序序列化

preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
const n = preorder.length;
    let i = 0;
    const stack = [1];
    while (i < n) {
        if (!stack.length) {
            return false;
        }
        if (preorder[i] === ',') {
            ++i;
        } else if (preorder[i] === '#') {
            stack[stack.length - 1]--;
            if (stack[stack.length - 1] === 0) {
                stack.pop();
            } 
            ++i;
        } else {
            // 读一个数字
            while (i < n && preorder[i] !== ',') {
                ++i;
            }
            stack[stack.length - 1]--;
            if (stack[stack.length - 1] === 0) {
                stack.pop();
            }
            stack.push(2);
        }
    }
    console.log(stack.length === 0)
