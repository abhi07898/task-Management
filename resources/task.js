var arr_for_task = [];
var html='';
var html1 = '';
// hold_val
function hold_val() { 
	var task_input = document.getElementById('inp-task').value;
	if (task_input=='') {
		alert('hey can u pleaseeneter some words related to your tsak');
	} else {
		arr_for_task.push(task_input);	
		show_task();
	}	
}
// show task.........
function show_task () {
	document.getElementById('inp-task').value='';	
	html = "";
	html+= "<table id='table-design'> <tr> <th>Sr-No </th> <th>Done/panding </th><th>Task-Name</th> <th>Edited Content</th><th>Action</th>";
	for (var i=0; i<arr_for_task.length; i++) {
	html+="<tr> <td>"+(i+1)+"</td><td><input type='checkbox' id='doneorpanding("+i+")' onclick='donePend("+i+")'></td><td>"+arr_for_task[i]+"</td><td><input type='text' id='edit-content("+i+")' class = 'edit-content'></td><td> <a href='#' onclick='delet("+i+")'> DELETE</a> <a href='#'onclick='edit("+i+")' id='edit'> EDIT</a> </td></tr>";
	}
	html+="</table>";
	// document.getElementById('entered_task').innerHTML = table_format_data(arr_for_task);
	document.getElementById('entered_task').innerHTML = html;
}
// function table_format_data(arr) {
// 	html1 = "";
// 	html1+= "<table id='table-design'> <tr> <th>Sr-No </th> <th>Done/panding </th><th>Task-Name</th> <th>Edited Content</th><th>Action</th>";
// 	for (var i=0; i<arr.length; i++) {
// 	html1+="<tr> <td>"+(i+1)+"</td><td><input type='checkbox' id='doneorpanding("+i+")' onclick='donePend("+i+")'></td><td>"+arr_for_task[i]+"</td><td><input type='text' id='edit-content("+i+")' class = 'edit-content'></td><td> <a href='#' onclick='delet("+i+")'> DELETE</a> <a href='#'onclick='edit("+i+")' id='edit'> EDIT</a> </td></tr>";
// 	}
// 	html1+="</table>";
// 	return html1;
// }
// delete function
function delet(a){
	for(var i=0;i<arr_for_task.length;i++) {
		if(i==a) {
		arr_for_task.splice(i,1);
		show_task();		
		}
	}
}
// edit funmction
function edit(a) {	
	for(var i=0;i<arr_for_task.length;i++) {
		if (a===i) {			
			// document.getElementById('edit').value = "UPDATE"; 
			if(document.getElementById("edit-content("+i+")").value == '') {
				document.getElementById("edit-content("+i+")").value = arr_for_task[a];
			} else {
				arr_for_task[a] = document.getElementById("edit-content("+i+")").value;
				show_task();
			}
		}
			
	}
}
var done_arr = [];
// done or panding function
function donePend(a) {
	for(var i=0;i<arr_for_task.length;i++) {
		var checkBox = document.getElementById("doneorpanding("+i+")"); 
		if(checkBox.checked == true) {
			debugger;
			if (a===i) {
				// done_val = arr_for_task[a];				
				done_arr.push(arr_for_task[a]);
				arr_for_task.splice(a,1);
				show_task();							
			}	
			show_task_2();	// 
		}
	}
}
function show_task_2() {
	html1 = "";
	html1+= "<table id='table-design'> <tr> <th>Sr-No </th> <th>Done/panding </th><th>Task-Name</th> <th>Edited Content</th><th>Action</th>";
	for (var i=0; i<done_arr.length; i++) {
	html1+="<tr> <td>"+(i+1)+"</td><td><input type='checkbox' id='doneorpanding("+i+")' onclick='donePendd("+i+")' checked></td><td>"+done_arr[i]+"</td><td><input type='text' id='edit-contentt("+i+")' class = 'edit-content'></td><td> <a href='#' onclick='delett("+i+")'> DELETE</a> <a href='#'onclick='editt("+i+")' id='edit'> EDIT</a> </td></tr>";
	}
	html1+="</table>";
	document.getElementById('done_task').innerHTML = html1;
}
function delett(a){
	for(var i=0;i<done_arr.length;i++) {
		if(i==a) {
		done_arr.splice(i,1);
		show_task_2();		
		}
	}
}
// edit function
function editt(a) {	
	for(var i=0;i<done_arr.length;i++) {
		if (a===i) {			
			// document.getElementById('edit').value = "UPDATE"; 
			if(document.getElementById("edit-contentt("+i+")").value == '') {
				document.getElementById("edit-contentt("+i+")").value = done_arr[a];
			} else {	
				done_arr[a] = document.getElementById("edit-contentt("+i+")").value;
				show_task_2();
			}
		}
			
	}
}


function donePendd(a) {
	for(var i=0;i<done_arr.length;i++) {
		var checkBox = document.getElementById("doneorpanding("+i+")"); 
		if(checkBox.checked !== true) {
			debugger;
			if (a===i) {
				// done_val = arr_for_task[a];				
				arr_for_task.push(done_arr[a]);
				done_arr.splice(a,1);
				show_task_2();							
			}	
			show_task();	// 
		}
	}
}