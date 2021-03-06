/*We built plaintext tables in Chapter 6. HTML makes laying out tables quite a
bit easier. An HTML table is built with the following tag structure:

<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>country</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>
For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags,
we can put cell elements: either heading cells (<th>) or regular cells (<td>).

The same source data that was used in Chapter 6 is again available in the
MOUNTAINS variable in the sandbox. It can also be downloaded from the website.

Write a function buildTable that, given an array of objects that all have the
same set of properties, builds up a DOM structure representing a table. The
table should have a header row with the property names wrapped in <th> elements
and should have one subsequent row per object in the array, with its property
values in <td> elements.

The Object.keys function, which returns an array containing the property names
that an object has, will probably be helpful here.

Once you have the basics working, right-align cells containing numbers by
setting their style.textAlign property to "right".*/

<script>
  function buildTable(data) {
    var table = document.createElement('table');
    var row = document.createElement('tr');

    var fields = Object.keys(data[0])

    fields.forEach(function(field){
      var th = document.createElement('th');
      th.appendChild(document.createTextNode(field))
      row.appendChild(th)
    })

    table.appendChild(row);

    data.forEach(function(item){
		var newRow = document.createElement('tr');
        var td = document.createElement('td');
	})


    data.forEach(function(object) {
      var row = document.createElement("tr");
      fields.forEach(function(field) {
        var cell = document.createElement("td");
        cell.textContent = object[field];
        if (typeof object[field] == "number")
          cell.style.textAlign = "right";
        row.appendChild(cell);
      });
      table.appendChild(row);
    });

    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>
