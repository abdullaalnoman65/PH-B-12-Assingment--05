
## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- `getElementById("id")` → Returns a single element with the specified **id**.  
- `getElementsByClassName("class")` → Returns **all elements** with the specified class as an **HTMLCollection** (live list).  
- `querySelector("css-selector")` → Returns the **first matching element** for the given CSS selector.  
- `querySelectorAll("css-selector")` → Returns **all matching elements** as a **NodeList** (not live).  

---

## 2. How to create and insert a new element into the DOM

```javascript
const div = document.createElement("div"); 
div.textContent = "Hello World!";          
document.body.appendChild(div);
```
## 3. Event Bubbling

When an event occurs on a child element, it bubbles up through the parent elements all the way to the document.

Essentially, the event propagates from the innermost element to the outer elements.

## 4. Event Delegation in JavaScript
```js
document.getElementById("list").addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    console.log("Clicked:", e.target.textContent);
  }
});
```
##  5. Difference between preventDefault() and stopPropagation()

preventDefault() → Prevents the element’s default action (e.g., form submission, link navigation).

stopPropagation() → Stops the event from bubbling up to parent elements.
