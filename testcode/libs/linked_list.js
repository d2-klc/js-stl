// C++ STL, 생활코딩 등 참고.
let Node = function(value) {
  this.data = value;
  this.next = null;
};

const LinkedList = function() {
  this.length = 0;
  this.head = null;
  this.tail = null;
};

// append on the front of the list
LinkedList.prototype.appendHead = function(value) {
  let node = new Node(value);
  node.next = this.head;
  this.head = node;
  if(this.tail === null) this.tail = node;
  this.length++;
};

// append on the last of the list
LinkedList.prototype.appendTail = function(value) {
  let node = new Node(value);
  let curNode;

  if(this.head === null) { // if head is null, make head to point new node.
    this.head = node;
    this.tail = node;
  } else { // else,
    curNode = this.tail;
    curNode.next = node;
    this.tail = node;
  }
  this.length++;
};

// find node that has the 'value'.
LinkedList.prototype.find = function(value) {
  let curNode = this.head;
  // let index = 1;
  while(curNode.data !== value) { // if it has value return node, else return null.
    curNode = curNode.next;
    // index++;
  }
  return curNode;
  // return index;
};

// the index of the list starts from 1 for normal user.
LinkedList.prototype.insert = function(pos, value) {
  if(pos > 0 && pos < this.length) {
    let curNode = this.head;
    let prevNode;
    for(let i = 1; i < pos; i++) {
      prevNode = curNode;
      curNode = curNode.next;
    }
    let newNode = new Node(value);
    newNode.next = curNode;
    prevNode.next = newNode;
    this.length++;
  } else if(pos === this.length) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  } else {
    console.log(`error. position should be in 0 < position < ${this.length}`);
    return -1;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.length === 0) return -1;

  let temp = this.head.next;
  // delete this.head;
  this.head = temp;
  this.length--;
  // return temp;
};

LinkedList.prototype.removeTail = function() {
  if (this.length === 0) return -1;
  
  let temp = this.head;
  while(temp) {
    if(temp.next === this.tail) {
      temp.next = null;
      // delete this.tail;
      this.tail = temp;
      this.length--;
      // return temp;
    }
    temp = temp.next;    
  }
};

LinkedList.prototype.remove = function(pos) {
  if (pos <= 0 || pos > this.length || this.length === 0) return -1;
  if (pos === 1) this.removeHead();

  let temp = this.head; // temp = this.head = LinkedList.indexOf(1)
  let prev;
  for(let i = 0; i < pos; i++) { // 0 ~ pos - 1
    if(i === pos - 2) {
      prev = temp;
    }
    temp = temp.next;
  }
  prev.next = temp; // prev = cur - 1, temp = cur + 1
  this.length--;
};

LinkedList.prototype.size = function() {
  return this.length;
};

LinkedList.prototype.toString = function() {
  console.log("========linked list========");
  let curNode = this.head;
  while(curNode !== null) {
    console.log(curNode.data);
    curNode = curNode.next;
  }
};


/* test code */
let newList = new LinkedList();
newList.appendHead(2);
console.log(`length : ${newList.length}`);
newList.appendTail(5);
console.log(`length : ${newList.length}`);
newList.appendHead(1);
// newList.toString();
console.log(`length : ${newList.length}`);
newList.insert(2, 7);
console.log(newList);
console.log(newList.find(1));
console.log(`length : ${newList.length}`);
newList.toString();
newList.removeHead();
newList.toString();
newList.removeTail();
newList.toString();
console.log(`size : ${newList.size()}`);
newList.appendTail(5);
newList.toString();
console.log(`size : ${newList.size()}`);
newList.remove(2);
newList.toString();
console.log(`size : ${newList.size()}`);


// newList.end();
// console.log(`current position's element : ${newList.getElement()}`);
// newList.clear();
// console.log("after clear");
// newList.toString(); 