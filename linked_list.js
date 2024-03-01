class node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor(node = null) {
        this.head = null;
    }

    prepend(value) {
        let tmp = null;

        if (this.head != null)
        {
            tmp = this.head;
            this.head = new node(value);
            this.head.next = tmp;
        }

        else
        {
            this.head = new node(value);
        }
    }

    append(value) {

        if (this.head == null)
        {
            this.head = new node(value);
        }

        let temp = this.head;

        while(temp.next !== null)
        {
            temp = temp.next;
        }

        temp.next = new node(value);;
    }

    size() {
        let size = 0;
        let temp = this.head;

        while(temp !== null)
        {
            size++;
            temp = temp.next;
        }

        return size;
    }

    top() {
        return this.head;
    }

    tail() {
        let temp = this.head;

        while(temp.next !== null)
        {
            temp = temp.next;
        }

        return temp;
    }

    at(index) {
        let temp = this.head;
        let count = 0;

        while(count != index)
        {
            count++;
            temp = temp.next;
        }

        return temp;
    }

    pop() {
        let temp = this.head;

        while(temp.next.next !== null)
        {
            temp = temp.next;
        }

        temp.next = null;
    }

    contains(value) {
        let temp = this.head;

        while(temp !== null)
        {
            if(temp.value === value)
            {
                return true;
            }
            temp = temp.next;
        }

        return false;
    }

    find(value) {
        let temp = this.head;
        let index = 0;

        while(temp !== null)
        {
            if(temp.value === value)
            {
                return index;
            }

            temp = temp.next;
            index++;
        }

        return null;
    }

    toString() {
        let temp = this.head;
        let string = "";

        while(temp !== null)
        {
            string += (`(${temp.value}) -> `);
            temp = temp.next;
        }

        string += ('(null)');
        return string;
    }
}

let list = new linkedList();

list.prepend(2);
list.prepend(3);
list.append(4);


console.log(list.toString());

let currentNode = list.head;

while(currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}

