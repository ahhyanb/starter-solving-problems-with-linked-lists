/**
 * Given a list and two nodes, swap the position of the two nodes
 * @param {LinkedList} list
 * @param {Node} x
 * @param {Node} y
 */

/* 
function swap
// accepts list - a linked list
           x - a node in the linked list
           y - a node in the linked list

 if the list is empty then
   return  the list

 declare a variable x_next and initialize it to the next pointer of x
 declare a variable x_prev and initialize it to the previous node to x, null if x is the head
 declare a variable y_prev and initialize it to the previous node to y, null if y is the head

 set the next pointer of x to the next pointer of y
 set the next pointer of y to x_next

 if x is not the head  of the list then
   set next pointer of x_prev to y
 else
   set head to y

 if y is not the head  of the list then
   set next pointer of y_prev to x
 else
   set head to x

 return the list
*/
function swap(list, x, y) {

}

module.exports = swap;
