class Node {
    constructor(val, next){
        this.val = val ;
        this.next = next || null;
    }
}

class LinkedList {
    head;
    constructor(node){
        this.head = new Node(node);
    }

    printList(){
        let node = this.head;
        while(node !== null){
            console.log(`${node.val} -->`);
            node = node.next;
        }
    }

    append(val){
        let newNode = new Node(val);
        let node = this.head;
        while(node.next !== null){
            node = node.next;
        }
        node.next = newNode;
    }

    addAtHead(val){
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    addAfterNode(prevNode, val){
        let newNode = new Node(val);
        if(!prevNode || !newNode)
            return;
        newNode.next = prevNode.next;
        prevNode.next = newNode;
    }
    
    get(index){
        let currNode = this.head;
        let i=0;
        while(currNode.next !== null){
            if(i === index){
                return currNode.val;
            }
            currNode = currNode.next;
            i++;
        }
    }

    getNode(index){
        let currNode = this.head;
        let i=0;
        while(currNode.next !== null){
            if(i === index){
                return currNode;
            }
            currNode = currNode.next;
            i++;
        }
    }

    addAtIndex(index,val){
        let i=1;
        let currNode = this.head;
        let newNode = new Node(val);
        
        if(index === 0 ){
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
    
    }
    deleteAtIndex(index){
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
    }
    deleteNode(value){
        let currNode = this.head;
        let prev = null;
        if(currNode != null && currNode.val === value){
            this.head = currNode.next;
            return;
        } 

        while(currNode !== null && currNode.val !== value){
            prev = currNode;
            currNode = currNode.next;
        }

        if(!!currNode){
            prev.next = currNode.next;
        } else {
            console.log('Nothhing to delete');
        }

    }
    
}

// let linked = new LinkedList(null);
// linked.addAtHead(7);
// linked.addAtHead(2);
// linked.addAtHead(1);
// linked.addAtIndex(3,0);



// linked.deleteAtIndex(2);
// linked.printList();
// linked.addAtHead(6);
// linked.append(4);
// //  console.log('1',linked.get(4));
//  linked.addAtHead(4);
//  linked.addAtIndex(5,0);
//  linked.addAtHead(6);
// linked.addAtHead(6);
// linked.append(2);
// console.log('3',linked.get(3));
// linked.append(1);
// console.log('5',linked.get(5));
// linked.addAtHead(2);
// console.log('2',linked.get(2));
// linked.addAtHead(6);


// "addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
// [7],            [2],        [1],        [3,0],      [2],            [6],        [4],       [4],     [4],       [5,0],       [6]]


const checkInter = (headA, headB) => {
    while(headA.next !== null && headB.next !== null){
        
        if(headA.val === headB.val){
            return headA.val;
        }
        headA = headA.next;
        headB = headB.next;
    }

    if(headA.val === headB.val){
        return headA.val;
    }

    return null;
}
//[4,1,8,4,5]
let li = new LinkedList(4);
li.append(1);
li.append(8);
li.append(4);
li.append(5);
//[5,0,1,8,4,5]
let lin = new LinkedList(5);
lin.append(0);
lin.append(1);
lin.append(8);
lin.append(4);
lin.append(5);

console.log(checkInter(li.getNode(0), lin.getNode(0)));

//NEED TO LEARN REGEX, TYPESCRIPT, VERSIONING, SASSS, ES6, TRY CATCH nested, PROMISE, OBSERVABLE