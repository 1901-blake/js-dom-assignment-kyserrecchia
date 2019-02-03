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
Find all checked options in the 'hobbies' select element.
Print the value and the contents.

*/

function getHobbies(){
    //set up variable for desired select
    let selObj;
    //get collection of select items
    const selCollection = document.getElementsByTagName('select');
    //find right one with 'skills' as name attribute
    for(sel of selCollection){
        if(sel.getAttribute('name')==='hobbies'){
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
                console.log(`Selected hobbie value: ${child.getAttribute('value')}`);
                console.log(`Hobbie contents: ${child.innerHTML}`);
            }
        }
    }
}

//test
// getHobbies();

/*

5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.

*/

function getCustomAttribute(){
    const domCollection = document.querySelectorAll('*');
    for(elem of domCollection){
        if(elem.hasAttribute('data-customAttr')){
            console.log(`Value of data-customAttr: ${elem.getAttribute('data-customAttr')}`);
            console.log(`Element that has that attribute: ${elem.innerHTML}`);
        }
    }
}

// getCustomAttribute();

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

let runSum = 0;
let number1 = 0;
let number2 = 0;
function setSum(val){
    if(!isNaN(val)){
        sum.innerText = runSum;
    }else{
        sum.innerText = 'Cannot add';
    }
}

num1.addEventListener('change', function(e){
    console.log(e.target.id);
    runSum = Number(num2.value);
    number1 = 0;
    number1 = Number(num1.value);
    runSum += number1;
    setSum(runSum);
});

num2.addEventListener('change', function(e){
    runSum = Number(num1.value);
    number2 = 0;
    number2 = Number(num2.value);
    runSum += number2;
    setSum(runSum);
});


/*

7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.

*/

function skillsEvent(){
    const skillList = document.getElementsByName('skills');
    const skills = skillList[0];
    
    skills.addEventListener('change', function(e){
        let selIndex = skills.selectedIndex;
        let skill = skills.options[selIndex].value;
        alert(`Are you sure ${skill.toUpperCase()} is one of your skills?`);
    });   
}

skillsEvent();

/*

8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

*/


var UID = {
	_current: 0,
	getNew: function(){
		this._current++;
		return this._current;
	}
};

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
	var _this = this;
	var _sheetId = "pseudoStyles";
	var _head = document.head || document.getElementsByTagName('head')[0];
	var _sheet = document.getElementById(_sheetId) || document.createElement('style');
	_sheet.id = _sheetId;
	var className = "pseudoStyle" + UID.getNew();
	
	_this.className +=  " "+className; 
	
	_sheet.innerHTML += " ."+className+":"+element+"{"+prop+":"+value+"}";
	_head.appendChild(_sheet);
	return this;
};


function favColorEvent() {
    const favColors = document.getElementsByName('favoriteColor');
    let oldFavColor;
    // do not run first time because there is nothing to compare to!
    let firstRun = true;
    // add event listeners to each color because you can't put a listener on the nodelist they're all in
    for(color of favColors) {
        color.addEventListener('change', function(e) {
            if(firstRun) {
                firstRun = false;
                oldFavColor = this.value;
                setBackColor(favColors, this.value);
            } else {
                alert(`So you like ${this.value} more than ${oldFavColor} now?`);
                oldFavColor = this.value;
                setBackColor(favColors, this.value);
            }
        }); 
    }
}

function setBackColor(favColors, favColor) {
    for(color of favColors) {
        color.pseudoStyle("before", "content", "'__________'")
        color.pseudoStyle("before","background-color", favColor);
    }
}


favColorEvent();

/*

9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
    Show the name if hidden.
    
*/

const empNames = document.getElementsByClassName('empName');
for(emp of empNames) {
    emp.style.opacity = '1';
}

for(emp of empNames) {
    emp.addEventListener('mouseover', function(e) {
        if(this.style.opacity==='1') {
            this.style.opacity = '0';
        } else {
            this.style.opacity = '1';
        }
    });
}

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





