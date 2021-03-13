//涉及哈希映射
//  ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
//  [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
//  链接：https://leetcode-cn.com/problems/design-hashmap
 
 var MyHashMap = function() {
    this.base = 769
    this.data = new Array(this.base).fill(0).map(()=>new Array())
};

MyHashMap.prototype.put = function(key, value) {
    const a = this.hash(key)
    for(const elements of this.data[a]){
        if(elements[0] === key){
            elements[1] = value
            return
        }
    }
    this.data[a].push([key,value])
};

MyHashMap.prototype.get = function(key) {
    const b = this.hash(key)
    for (const elements of this.data[b]){
        if(elements[0]==key){
            return elements[1]
        }
    }
    return -1;
};

MyHashMap.prototype.remove = function(key) {
    const c =this.hash(key)
     for (const elements of this.data[c]){
        if(elements[0]==key){
            const idx = this.data[c].indexOf(elements)
            this.data[c].splice(idx,1)
            return
        }
    }
};

MyHashMap.prototype.hash = function(key){
    return key % this.base
}
