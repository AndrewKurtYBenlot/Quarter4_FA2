function table() {
	var table = document.getElementById("xTable");
	x = document.getElementById("num1").value;
	y = document.getElementById("num2").value;
	
	table.innerHTML = "";
	
	if (x<2 || x >10 || y<2 || y>10) {
			alert("Please enter another set of values that are between 2 and 10");
			return;
	}

	var html = "<tr><th>*</th>";
	for (var count = 1; count <= y; count++){
		html += `<th>${count}</th>`;
	}
	html += "</tr>";

	for (var count = 1; count <= x; count++){
		html += `<tr><th>${count}</th>`;
		for (var count2 = 1; count2 <= y; count2++){
			html += `<td>${count * count2}</td>`;
		}
		html += "<tr>";
	}
	table.innerHTML = html;
}
