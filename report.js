
function showReport(){
    var workingDay = 0;
    var totalHours = 0;
    var hours100 = 0;
    var hours125 = 0;
    var hours150 = 0;
    var payment = 0;

    for (var i = 0; i < daysData.length; i++){
        if (daysData[i].month == currentMonth){
            if (daysData[i].logonTime !== "" || daysData[i].exitingTime !== ""){
                workingDay++;
                totalHours += daysData[i].totalHours;
                hours100 += daysData[i].hours100;
                hours125 += daysData[i].hours125;
                hours150 += daysData[i].hours150;
                payment += daysData[i].payment;
            }
            
        }
    }

    document.getElementById('working-day').textContent = workingDay;
    document.getElementById('total-hours').textContent = totalHours.toFixed(2);
    document.getElementById('hours-100').textContent = hours100.toFixed(2);
    document.getElementById('hours-125').textContent = hours125.toFixed(2);
    document.getElementById('hours-150').textContent = hours150.toFixed(2);
    document.getElementById('payment').textContent = payment.toFixed(2);

}