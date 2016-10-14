

onLoad();

setInterval(function(){
    showMonthData();
    showReport();
}
, 200);

var selectMonth = document.getElementById('select-month');
selectMonth.addEventListener('change', monthRightNow);

var hourlyWage = document.getElementById('hourly-wage');
hourlyWage.addEventListener('keyup', hourlyWageRightNow);

var checkBreak = document.getElementById('check-break');
checkBreak.addEventListener('change', checkBreakChange);

var clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearFields);

var addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addNewDay);

