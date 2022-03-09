/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// compare sub-root in single tree, split as two tree to go through the similar process with Same Tree

var isSymmetric = function(root) {
    return symmeTree(root.left, root.right)  
};

var symmeTree = function(p, q) {
    if(!p && q || p && !q) {
        return false
    }
    if(!p && ! q) {
        return true
    }
    
    return p.val === q.val && symmeTree(p.left, q.right) && symmeTree(q.left, p.right)
}