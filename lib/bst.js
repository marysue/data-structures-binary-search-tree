class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   //constructor needs property root
   constructor () {
    this.root = null;
   }

   findNode(val) {
    let currentNode = this.root;
    let found = false;
    while( !found ) {
        if (val < currentNode.val) {
             if (currentNode.left === null) {
                 return currentNode;
             } else {
                currentNode = currentNode.left;
             }
        } else if (val >= currentNode.val) {
            if (currentNode.right === null) {
                return currentNode;
            } else {
                currentNode = currentNode.right;
            }
        } else {
            console.log(`NOT FOUND!!!`);
            found = true;
        }

    }
   }
   insert(val) {
        let newNode = new TreeNode(val);
        //console.log("This root: ", this.root);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        // find insertion point
        let currentNode = this.findNode(val);

        if (currentNode != undefined ) {
        if (val < currentNode.val) {
            //left is null & right is null;
                currentNode.left = newNode;
            } else { // >=
                currentNode.right = newNode;
            }
        } else {
            return undefined;
        }
    }
}

module.exports = {
    TreeNode,
    BST
};
