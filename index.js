
    // var bookElement = document.getElementById('bookName').value;
    // var issueElement = document.getElementById('issueName').value;
//     var btn = document.getElementById('btn')
    
//     var list1 = [];
//     var list2 = [];
//     var list3 = [];
//     var list4 = [];
//     var list5 = [];
//     var options = {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
// var currentDateTime = new Date().toLocaleString('en-US', options);
// var statusRate = document.getElementById('returned').textContent="Not Returned"

//     var n = 1;
//     var x = 0;
//     function mainFunction(){
          
//         var addRow = document.getElementById('show');
//         var newRow = addRow.insertRow(n);
//         list1[x] = n;
//         list2[x] = document.getElementById('bookName').value;
//         list3[x] = document.getElementById('issueName').value;
//         list4[x] = currentDateTime;
//         list5[x] = statusRate;
       
//         var cel1 = newRow.insertCell(0);
// 		var cel2 = newRow.insertCell(1);
// 		var cel3 = newRow.insertCell(2);
// 		var cel4 = newRow.insertCell(3);
// 		var cel5 = newRow.insertCell(4);
//             cel1.innerHTML = list1[x];
// 			cel2.innerHTML = list2[x];
// 			cel3.innerHTML = list3[x];
// 			cel4.innerHTML = list4[x];
// 			cel5.innerHTML = list5[x];

//             n++;
// 			x++;
            
//     }



//     btn.addEventListener('click',mainFunction)
   
//Start code here ,own code

// Create variable which take input from input book name , issue and button click

const bookElement = document.getElementById("bookName")
const issueElement = document.getElementById("issueName")
const buttonElement = document.getElementById("btn")
//this tbody access the data inside <tbody> tag;
const tableBody = document.querySelector("tbody");
//Now create on empty array for storing book name which user tends to add(use const for good practise)
const books =[
    
];


function createTableRow(data,tableBody,Bookid){
    //now as we have data from user we need to create tr and insiide td to add data in tbody(table);
    //first we will create tr
    const tr = document.createElement('tr');
    //we need to create 5 td element as we have 5 coloumn;
    const idTD = document.createElement('td');
    idTD.textContent = Bookid; //we are providing idTD to id value;

    const bookTD = document.createElement('td');
    bookTD.textContent = data.name;

    const issuedTD = document.createElement('td');
    issuedTD.textContent = data.issuedTo;

    const issueAtTD = document.createElement('td');
    issueAtTD.textContent = data.issuedAT;

    const statusTD = document.createElement('td');
    //now here for making this editable we need to add button and span tag,first we need to create to div and then add button and span
     const div = document.createElement('div');
     const button = document.createElement('button');
     const span = document.createElement('span');
     //add class to button to set its color red and set text content of button and span
     span.classList.add("red");
     button.textContent="Edit"
     span.textContent="Not returned"

     //append span and button to div
     div.appendChild(span);
     div.appendChild(button);
     //append div to statusTD
     statusTD.appendChild(div);
    

    //we are done with seting textcontent of each column of new row ;
    //now need to append td to tr
    tr.appendChild(idTD);
    tr.appendChild(bookTD);
    tr.appendChild(issuedTD);
    tr.appendChild(issueAtTD);
    tr.appendChild(statusTD);
    
    //as all data appended to tr , now append tr to tbody

    tableBody.appendChild(tr);
    
    

}
//now to add click event to add  data
function handelClickEvent (){

    //to handel the repeating nature of same data we need to vacccum tr after adding data to not get repeating one 

    //we make tbody's inner html to blank
    tableBody.innerHTML="";
    //incorporraate bookname and issue value in new const
    const bookClick = bookElement.value;
     //to get blank input field after enetring data need to set value to =""
     bookElement.value = "";
    const issuedClick = issueElement.value;
    issueElement.value = "";
    if(bookClick && issuedClick) 
    {
        //create one object to store key and values 
        const book =
            {
                name:bookClick,
                issuedTo:issuedClick,
                 issuedAT:new Date().toUTCString(),
                 status:"Not returned"
            }
           
        //pushing update and store value to books array above 
        books.push(book);
        renderInsideElement();
    }

    else
    {
        alert("Please fill the required field first")
    }
 
}

buttonElement.addEventListener('click',handelClickEvent);


//Creating a function for rendering inside book array

function renderInsideElement(){
    //we are using map function to traverse alof array
    books.map(function(book,index){

        //This create function will create row and add it to tbody;
        createTableRow(book,tableBody,index+1)
    })
}
//renderInsideElement();

