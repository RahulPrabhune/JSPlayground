class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinaryTreeOperations {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root;
        if (node == null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = node => {
                if (node.data > data) {
                    if (node.left == null) {
                        node.left = new Node(data);
                        return;
                    }
                    else {
                        return searchTree(node.left);
                    }
                } else if (node.data < data) {
                    if (node.right == null) {
                        node.right = new Node(data);
                    }
                    else {
                        return searchTree(node.right);
                    }
                }
                else {
                    return null;
                }

            }
            return searchTree(node);
        }
        this.root = node;
    }
    viewTree(){
        return this.root;
    }
}
var binaryTreeOps = new BinaryTreeOperations();
[3,9,20,null,null,15,7].forEach((ele) => binaryTreeOps.add(ele));
console.log(binaryTreeOps.viewTree())

 