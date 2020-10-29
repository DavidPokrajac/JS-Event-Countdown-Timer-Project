window.onload = function(){

  var form = document.forms[0];

  var currentDate = document.getElementById("current-date");
  var currentDateValue = new Date().getDate();
  currentDate.value = currentDateValue;
  currentDate.setAttribute("readonly", "readonly");

  var currentMonth = document.getElementById("current-month");
  var currentMonthValue = new Date().getMonth();
  currentMonth.value = currentMonthValue;
  currentMonth.setAttribute("readonly", "readonly");

  var currentYear = document.getElementById("current-year");
  var currentYearValue = new Date().getFullYear();
  currentYear.value = currentYearValue;
  currentYear.setAttribute("readonly", "readonly");

}
