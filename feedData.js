
var daysDataStorage = localStorage;

var daysData = [];

var currentMonth = JSON.parse(daysDataStorage.getItem('currentMonth'));

var currentHourlyWage = JSON.parse(daysDataStorage.getItem('currentHourlyWage'));

var currentBreakCheck = JSON.parse(daysDataStorage.getItem('currentBreakCheck'));

var createDayLocation = daysData.length; 


function onLoad(){
    if (daysDataStorage['daysData']){
        daysData = JSON.parse(daysDataStorage.getItem('daysData'));
    }
    document.getElementById('select-month').value = currentMonth;
    document.getElementById('hourly-wage').value = currentHourlyWage;
    document.getElementById('check-break').checked = currentBreakCheck;
}


function monthRightNow(){
    currentMonth = document.getElementById('select-month').value;
    daysDataStorage.setItem('currentMonth', JSON.stringify(currentMonth));
}


function hourlyWageRightNow(){
    currentHourlyWage = document.getElementById('hourly-wage').value;
    daysDataStorage.setItem('currentHourlyWage', JSON.stringify(currentHourlyWage));
}


function checkBreakChange(){
    currentBreakCheck = document.getElementById('check-break').checked;
    daysDataStorage.setItem('currentBreakCheck', JSON.stringify(currentBreakCheck));
}


function clearFields(){
    document.getElementById('day').value = "";
    document.getElementById('logon-time').value = "";
    document.getElementById('exiting-time').value = "";        
}


function Day(){
    this.month = currentMonth;
    this.day = document.getElementById('day').value;
    this.hourlyWage = currentHourlyWage;
    this.logonTime = document.getElementById('logon-time').value;
    this.exitingTime = document.getElementById('exiting-time').value;

    this.totalHours = function(){
        var totalTime = 0;
        var logonTimeHex = Math.floor(this.logonTime) + ((this.logonTime - Math.floor(this.logonTime))/0.6);
        var exitingTimeHex = Math.floor(this.exitingTime) + ((this.exitingTime - Math.floor(this.exitingTime))/0.6);
        
        if (logonTimeHex < exitingTimeHex){
            totalTime = exitingTimeHex - logonTimeHex;
        }
        else if (logonTimeHex > exitingTimeHex){
            totalTime = (24-logonTimeHex) + exitingTimeHex;
        }

        if (document.getElementById('check-break').checked == true){
            totalTime -= 0.5;
        }
        return this.totalHours = totalTime;
    }

    this.hours100 = function(){
        var hours100 = 0;
        if (this.totalHours > 8.6){
            hours100 = 8;
        }
        else{
            hours100 = this.totalHours;
        }
        return this.hours100 = hours100;
    }

    this.hours125 = function(){
        var hours125 = 0;
        if (this.totalHours > 10){
            hours125 = 2;
        }
        else if (this.totalHours > 8.6){
            hours125 = this.totalHours - 8;
        }
        return this.hours125 = hours125;
    }

    this.hours150 = function(){
        var hours150 = 0;
        if (this.totalHours > 10){
            hours150 = this.totalHours - 10;
        }
        return this.hours150 = hours150;
    }

    this.payment = function(){
        var pay = 0;
        if (this.totalHours > 10){
            pay = 8 * currentHourlyWage + this.hours125 * currentHourlyWage * 1.25 + this.hours150 * currentHourlyWage * 1.5;
        }
        else if (this.totalHours > 8.6){
            pay = 8 * currentHourlyWage + this.hours125 * currentHourlyWage * 1.25;
        }
        else{
            pay = this.totalHours * currentHourlyWage;
        }
         return this.payment = pay;
    }
    
    this.break = function(){
        var isBreak;
        if (document.getElementById('check-break').checked == true){
            isBreak = true;
        }
        else{
            isBreak = false;
        }
        return this.break = isBreak;
    }

}


function addNewDay(){
    var isItOverlap = false;
    var overlapDay;
    var dayInput = document.getElementById('day').value;
    var monthInput = document.getElementById('select-month').value;
    if(dayInput < 1 || dayInput > 31){
        alert('day is a must field');
        return;
    }
    else if (monthInput == ""){
        alert('month is a must field');
        return;
    }
    var tempDay = new Day();
    tempDay.totalHours();
    tempDay.hours100();
    tempDay.hours125();
    tempDay.hours150();
    tempDay.payment();
    tempDay.break();
    for (var i = 0; i < daysData.length; i++ ){
        if (dayInput == daysData[i].day && currentMonth == daysData[i].month){
            isItOverlap = true;
            overlapDay = i;
        }
    }
    if (isItOverlap){
        daysData[overlapDay] = tempDay;
    }
    else{
        daysData.push(tempDay);
    }

    daysDataStorage.setItem('daysData', JSON.stringify(daysData));

    console.log(isItOverlap);

}