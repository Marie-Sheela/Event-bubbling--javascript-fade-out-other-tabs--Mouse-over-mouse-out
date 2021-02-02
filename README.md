# Mouse-over-mouse-out-javascript-fade-out-other-tabs

Overview:
I worked with common event listener to the parent of all 3 divs.
I capture the event in the bubbling phase.
===

Mouse over event:
I find the element where event happened using e.target, 
I find its siblings,
I change opacity to 0.5 for all siblings except this one.
===

Mouse out event:
I reset opacity to 1.
===

Advantage:
Advantage of attaching event listener on parent is 
1. if i add 10 more divs, I dont need to attach event listener to every div. the code will work as it is.

