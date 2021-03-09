
var feildNum = document.getElementById("feild-num"),             // get field number
    feildText = document.getElementById("feild-text"),          // get feild text
    createtBtn = document.getElementById("create"),            // get create button              
    resultDiv = document.createElement("div"),                // create result div
    form = document.querySelector (".js");                   // get form div
    form.appendChild(resultDiv);                            // put result div inside form div

var delBtn  = document.createElement("button");           // create delete button
    textDelete  = document.createTextNode("delete");     // create text for delete button
    delBtn.appendChild(textDelete);                     // append text inside delete button
    delBtn.classList.add("delete");                    // add class for delet button
    delBtn.setAttribute("type", "button");            // set attribute (button) for delet button
    delBtn.setAttribute("id", "deletebtn");          // add id for delet button
    var allElements;                                // declare avariable for  all elements for created divs

//=====================================================================================================//

var searchFeild = document.createElement("input");                                                   // create search feild
searchFeild.setAttribute("id", "search");                                                           // add id for search feild
searchFeild.placeholder = "Search for an Element to delete";
var searchInput = document.getElementById("search");                                              // hold the search feild

//==============================================================================================//

form.onsubmit  = function () {                                                                // start onsubmit event
    form.appendChild(searchFeild);                                                           // onsubmit, show the search feild inside the form
    form.insertBefore(searchFeild, createtBtn );                                            // locate the search feild before the create button
       
    for (var i = 0; i < feildNum.value; i++) {                                            // start the loop for typed numbers and text     
        var createDiv = document.createElement("div");                                   // create div 
            createDiv.className = "myDiv";                                              // add class for created div 
        var span = document.createElement("span");                                     //create a span
        var numberText = document.createTextNode (i);                                 // create node for span (i)
        span.setAttribute("class", "span");                                          // add class for span for styling
        span.appendChild( numberText);                                              // append the created node inside the span
        createDiv.appendChild(span);                                               // append span inside the created div
        createDiv.setAttribute("id", `div-${i}`);                                 // add id for created div
        var createText = document.createTextNode(feildText.value);               // create text node for created div
        createDiv.appendChild(createText);                                      // append text node inside the created div
        resultDiv.appendChild(createDiv);                                      // append created div inside the form
          
            //*****************************************************************************************************//
            searchFeild.oninput = function search() {                                                             // start oninput function inside the onsubmit function
                var searchInput = searchFeild.value;                                                             // get the search feild value and store it in a variable
                var allElements = document.querySelectorAll(".myDiv");                                          // get all created divs with class .myDiv and store them in a variable
               
                    for (var i= 0; i < allElements.length; i++) {                                              // start loop to go through all created divs and search for a div that has the same id as typed inside the search feild
                    
                        if (allElements[i].getAttribute("id")== searchInput) {                               // create an if condition to compare between a div's id and the typed id inside the search input
                            form.appendChild(delBtn);                                                       // show the delete button inside the form
                            form.insertBefore(delBtn, resultDiv );                                         // locate the delete button before the result div
                            allElements[i].classList.add("selected");                                     // add class selected for the selected div
                                   
                            //************************************************************************************************//
                                    delBtn.onclick = function () {                                                           // start onclick function for delete button
                                    var delSelector = document.querySelector(".selected");                                  // get selected div with class selected
                                    delSelector.remove();                                                                  // remove selected div
                                    delBtn.remove();                                                                      // delete the delete button
                                  
                                    return false;
                                }  
                                
                            break; 
                                
                        }
                  
                    }
           
            }    
  
    }
  
    return false;
};



