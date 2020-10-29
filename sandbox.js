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

  var reset  document.querySelector("input[type='reset']");

  var date = document.getElementById("date");
  var month = document.getElementById("month");
  var year = document.getElementById("year");

  form.addEventListener("submit", function(e){

    e.preventDefault();

    var dateValue = date.value;
    var monthValue = month.value - 1;
    var yearValue = year.value;

    var setDate = new Date();
    setDate.setDate(dateValue);
    setDate.setMonth(monthValue);
    setDate.setFullYear(yearValue);

    var currDate = new Date();

    if(dateValue === "" || monthValue === "" || yearValue === ""){
      alert("Please enter valid value");
      time.innerHTML = "";
    }

    if(setDate.getTime() > currDate.getTime()){
      var diff = setDate - currDate;
      const mins = Math.round(diff / 1000 / 60);
      const hours = Math.round(mins / 60);
      const days = Math.round(hours / 24);
      const weeks = Math.round(days / 7);

      var time = document.createElement("p");
      time.classList.add("hi");
      time.innerHTML = "<p>Time left: <br /> " + weeks + " weeks, " + days + " days, " + hours + " hours</p>";
      form.appendChild(time);
    } else{
      var diff = currDate - setDate;
      const mins = Math.round(diff / 1000 / 60);
      const hours = Math.round(mins / 60);
      const days = Math.round(hours / 24)
      const weeks = Math.round(days / 7);
      const months = Math.round(days / 60);

      var time = document.createElement("p");
      time.classList.add("hi");
      time.innerHTML = "<p>Time passed: " + months + " months, " + weeks + " weeks, " + days + " days, " + hours + " hours</p>";
      form.appendChild(time);
     }

     reset.addEventListener("click", function(){
       form.removeChild(time);
     });

  });

}
