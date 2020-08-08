var tableData = data;
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $filter = document.querySelector("#filter-btn");

$filter.addEventListener("click", buttonClick);

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    var $row = $tbody.insertRow(i);
    var data = tableData[i];
    var fields = Object.keys(data);
    for (var j = 0; j < fields.length; j++) {
      var $cell = $row.insertCell(j);
      var field = fields[j];
      $cell.innerText = data[field];
    }
  }
}

function buttonClick(event) {
  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    tableData = data.filter(function (data) {
      var dataDate = data.datetime;
      return dataDate === filterDate;
    });
};
renderTable();
}

renderTable();