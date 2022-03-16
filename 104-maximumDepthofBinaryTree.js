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
 * @return {number}
 */
 var maxDepth = function(root) {  
    if(!root) {
        return 0; 
    }
    // let r1 = maxDepth(root.left);
    // let r2 = maxDepth(root.right);
    let max = Math.max(maxDepth(root.left), maxDepth(root.right));
    return max + 1;
};


// var calculateDep = function (root) {
//     if(!root) {
//         return 0; 
//     }
//     let r1 = calculateDep(root.left);
//     let r2 = calculateDep(root.right);
//     let max = Math.max(r1, r2);
//     return max + 1;
    
    
    // if(!root.left && !root.right) {
    //     return 1
    // }
    // else if(!r1 && r2) {
    //     curDepth ++；
    //     calculateDep(r2.left, r2.right) 
    // } else if(r1 && r2) {
    //     curDepth ++；
    //     calculateDep(root.left);
    //     calculateDep(root.right); 
    // } else {
    //     depth = depth1 >= depth2 ? depth1 : depth2
    //     return depth;  
    // }
// }