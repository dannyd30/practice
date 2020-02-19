/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.createNode = function(val){return {val:val, next: null}};
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let currNode = this.head;
    let i=0;
    while(currNode.next !== null){
        if(i === index){
            return currNode.val;
        }
        currNode = currNode.next;
        i++;
    }
    
    if(i === index){
        return currNode.val;
    }
    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head === null){
        this.head = this.createNode(val);
    } else {
        const newNode = this.createNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let tempNode = this.head;
    while(tempNode.next !== null){
        tempNode = tempNode.next;
    }
    tempNode.next = this.createNode(val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let i=1;
    let currNode = this.head;
    let newNode = this.createNode(val);
    
    if(index === 0){
        newNode.next= this.head;
        this.head = newNode;
        return;
    }
    while(currNode.next !== null ){
        if(i === index){
            newNode.next = currNode.next;
            currNode.next = newNode;
            return;
        }
        currNode = currNode.next;
        i++;
    }
    if(i === index){
            currNode.next = newNode;
        }
    
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let i=1;
    if(index === 0){
        this.head = this.head.next;
        return;
    }
    if(!this.head.next)
        return;
    let currNode = this.head.next;
    let prevNode = this.head;
    while(currNode.next !== null){
        if(i === index){
            prevNode.next = currNode.next;
            return;
        }
        prevNode = currNode;
        currNode = currNode.next;
        i++;
        
    }
    
    if(i === index){
        prevNode.next = null;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
