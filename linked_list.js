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
}

let list = new linkedList();

list.prepend(2);
list.prepend(3);
list.append(4);
console.log(list.size());


