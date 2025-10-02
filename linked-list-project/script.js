export default function LinkedList() {
    // object
    const list = {
        head: null
    };

    const getList = () => list;

    const logList = () => console.log(list);
    
    // add node end of list by checking for next === null
    const append = (value) => {
        const newNode = Node(value);
        if (!list.head) {
            list.head = newNode;
            return;
        }

        let current = list.head
        while (current.next) {
            current = current.next;
        }
        current.next = newNode
    };

    // add node start of list
    const prepend = (value) => {
        let newNode = Node(value)
        newNode.next = list.head;
        list.head = newNode;
    };

    // size of linked list
    const size = () => {
        let count = 0;
        let current = list.head;
        
        while (current.next) {
            count++;
            current = current.next;
        }
    };

    // return first node in list
    const returnHead = () => {
        return list.head
    };

    // return last node in list
    const returnTail = () => {
        let current = list.head
        while (current.next) {
            current = current.next;
        }
        return current;
    };

    // return node at given index

    const at = (index) => {
        let count = 0;
        let current = list.head;
        while (current) {
            if (count === index) {
                return current
            }
            count++;
            current = current.next;
        }
    };

    // remove last node by accessing 2nd last node and setting value === null
    const pop = () => {
        const secondLastNode = list.at(list.size() - 1);
        secondLastNode.next = null;
    };

    // check for node in list
    const contains = (value) => {
        let current = list.head;
        while (current) {
            if (current.value === value) {
                return true
            }
            current = current.next;
        }
        return false;
    };

    // find function
    const find = (value) => {
        let index = 0;
        let current = list.head;
        while (current) {
            if (current.value === value) {
                return index
            }
            index++;
            current = current.next;
        }
        return null;
    };

    // convert list to string

    const toString = () => {
        let string = ``;
        let current = list.head;
        while (current) {
            string += `(${current.value}) -> `;
            current = current.next;
        }
        // add null to end of string
        string += "null";
        return string;
    }


    return {
        getList,
        logList,
        append,
        prepend,
        size,
        returnHead,
        returnTail,
        at,
        pop,
        contains,
        find,
        toString
    }
}

    
function Node(value = null, next = null) {
    return { value, next};
};

const list1 = LinkedList();
list1.append("dog");
list1.append("cat");
list1.append("parrot");
list1.append("hamster");
list1.append("snake");
list1.append("turtle");
console.log(list1.toString())