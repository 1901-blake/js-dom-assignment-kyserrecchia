/*-----------------------------------------------------------------------------------
PART II

Part II will focus on Javascript's ability to manipulate the DOM.
Use the provided index.html
-----------------------------------------------------------------------------------

1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.
 
*/

function getUSA(){

    //set up variable for desired uSA element
    let usaElem;
    //get a colletion of every single html element on page to search through
    const domCollection = document.querySelectorAll("*");

    for(elem of domCollection){
        if(elem.innerText === 'USA'){
            usaElem = elem
            break;
        }
    }

    console.log(`Contents of 'USA' Dom element: ${usaElem.innerHTML}`);
}

//test
// getUSA();


/*


2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.

*/

function getPeopleInSales(){

    //get collection of employee names
    const empCollection = document.getElementsByClassName("empName");
    //check if next element sales sales, if so, print that employee!
    for(emp of empCollection){
        if(emp.nextElementSibling.innerText.toLowerCase() === 'sales'){
            console.log(emp.innerHTML)
        }
    }
}

//test
// getPeopleInSales();

/*

 
3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>

*/

function getAnchorChildren(){

    //get collection of anchor elements
    const aCollection = document.getElementsByTagName("a");

    for(a of aCollection){
        //only get span children and print their contents
        getSpanChildren(a);
    }
}

    //helper function 'getSpanChildren' 
function getSpanChildren(parent){
    //get collection of child nodes for a parent
    const childCollection = parent.childNodes;

    for(child of childCollection){
        if(child.nodeName.toLowerCase()==='span'){
            console.log(child.innerHTML);
        }
    }
}

//test
// getAnchorChildren();

/*


4. Hobbies
Define function getHobbies()
Find all checked options in the 'skills' select element.
Print the value and the contents.

*/

function getHobbies(){
    //set up variable for desired select
    let selObj;
    //get collection of select items
    const selCollection = document.getElementsByTagName('select');
    //find right one with 'skills' as name attribute
    for(sel of selCollection){
        if(sel.getAttribute('name')==='skills'){
            selObj = sel;
        }
    }
    //get children collection of this specific select element
    const childCollection = selObj.childNodes;
    //loop through it finding ones with selected as 'selected' attribute
    //  and print their 'value' attribute and contents
    for(child of childCollection){
        //#text objects are also in here as children so filter for only option tags!
        if(child.nodeName.toLowerCase()==='option'){
            if(child.getAttribute('selected')==='selected'){
                console.log("selected hobbie value: " + child.getAttribute('value') +
                            ", hobbie contents: " + child.innerHTML);
            }
        }
    }
}

//test
getHobbies();

/*

5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.

*/


/*

6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element

*/


/*

7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.

*/


/*

8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

*/


/*

9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
    Show the name if hidden.
    
*/


/*

10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.

*/


/*


11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.

*/


/*

12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).


*/



