
    // var bookElement = document.getElementById('bookName').value;
    // var issueElement = document.getElementById('issueName').value;
    var btn = document.getElementById('btn')
    
    var list1 = [];
    var list2 = [];
    var list3 = [];
    var list4 = [];
    var list5 = [];
    var options = {  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
var currentDateTime = new Date().toLocaleString('en-US', options);
var statusRate = document.getElementById('returned').textContent="Not Returned"

    var n = 1;
    var x = 0;
    function mainFunction(){
          
        var addRow = document.getElementById('show');
        var newRow = addRow.insertRow(n);
        list1[x] = n;
        list2[x] = document.getElementById('bookName').value;
        list3[x] = document.getElementById('issueName').value;
        list4[x] = currentDateTime;
        list5[x] = statusRate;
       
        var cel1 = newRow.insertCell(0);
		var cel2 = newRow.insertCell(1);
		var cel3 = newRow.insertCell(2);
		var cel4 = newRow.insertCell(3);
		var cel5 = newRow.insertCell(4);
            cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
			cel5.innerHTML = list5[x];

            n++;
			x++;
            
    }



    btn.addEventListener('click',mainFunction)
   
