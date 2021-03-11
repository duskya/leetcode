// 基本计算器
//给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
// 整数除法仅保留整数部分。
//trim() 方法用于删除字符串的头尾空白符，
s = "42 "
s = s.trim()
const stack = new Array()
let a = '+'
let num = 0
const n = s.length
for(let i =0 ; i<n ; ++i){
    if(!isNaN(Number(s[i])) && s[i]!==' '){
        console.log(num,'--')
        num = num*10+ s[i].charCodeAt() - '0'.charCodeAt()
    }
    if(isNaN(Number(s[i])) || i === n-1){
        console.log(2)
        switch(a){
            case '+':
                stack.push(num)
                break
            case '-':
                stack.push(-num);
                break
            case '*':
                stack.push(stack.pop()*num)
                break
            case '/':
                stack.push(stack.pop() / num | 0)
                break
        }
        a = s[i]
        num = 0;
    }
}
let ans = 0
while(stack.length){
    ans +=stack.pop()
}
console.log(ans) 


