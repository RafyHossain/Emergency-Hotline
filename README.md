<h3>Question No-1:</h3>
<p>What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</p>
<h4>ANSWER</h4>
<p>getElementById = returns one element by id.<br>

getElementsByClassName = returns all elements with a class.

querySelector = returns first match by CSS selector.

querySelectorAll = returns all matches by CSS selector.</p>

 <br>
 <br>
 
<h3>Question No-2:</h3>
<p>How do you create and insert a new element into the DOM?</p>
<h4>ANSWER</h4>
<p>
    First, use document.createElement("tagName") to create a new element.
Then set its content or attributes (like innerText, id, or class).
Finally, insert it into the DOM using appendChild() or append().
</p>

 <br>
 <br>


 <h3>Question No-3:</h3>
<p>What is Event Bubbling and how does it work?</p>
<h4>ANSWER</h4>
<p>
Event bubbling is a process in JavaScript where an event starts from the target element and then bubbles up to its parent and so on up to the document.

It works as:<br>
Suppose ,if I click on a button inside a div.First, the event runs on the button.Then it moves to the div, then body, and finally the document.
</p>

 <br>
 <br>




  <h3>Question No-4:</h3>
<p>What is Event Delegation in JavaScript? Why is it useful?</p>
<h4>ANSWER</h4>
<p>
Event delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of each child element. The parent handles events for its children using event bubbling.

USEFULL: <br>
It is usefull because it Reduces memory usage by avoiding multiple listeners.
Works for dynamically added elements that don’t exist when the page loads.
Makes code cleaner and easier to manage.
    
</p>

 <br><br>

  <h3>Question No-5:</h3>
<p>What is the difference between preventDefault() and stopPropagation() methods?</p>
<h4>ANSWER</h4>
<p>
<ins>preventDefault():</ins><br>

Stops the browser’s default action for an event.

Ex:
document.querySelector("btn").addEventListener("click", function(e){
    e.preventDefault();
});<br>

<ins>stopPropagation()</ins><br>
Stops the event from bubbling or capturing to parent elements.

Ex:
document.querySelector("btn").addEventListener("click", function(e){
    e.stopPropagation();
});
<br>
    
</p>

 <br>
