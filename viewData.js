

function showMonthData(){/*
    
    for (var i = 1; i < 33; i++){
        var tableRow = i;
        document.getElementsByTagName('tr')[tableRow].children[1].textContent = "";
        document.getElementsByTagName('tr')[tableRow].children[2].textContent = "";
        document.getElementsByTagName('tr')[tableRow].children[3].textContent = "";
        document.getElementsByTagName('tr')[tableRow].children[4].textContent = ""; 
    }*/

    dumbCleanData();

    for (var i = 0; i < daysData.length; i++){
        if (daysData[i].month == currentMonth){
            var tableRow = daysData[i].day;
            document.getElementsByTagName('tr')[tableRow].children[1].textContent = daysData[i].logonTime;
            document.getElementsByTagName('tr')[tableRow].children[2].textContent = daysData[i].exitingTime;
            if (daysData[i].exitingTime !== "" || daysData[i].exitingTime !== ""){
                document.getElementsByTagName('tr')[tableRow].children[3].textContent = daysData[i].totalHours.toFixed(2);
                document.getElementsByTagName('tr')[tableRow].children[4].textContent = daysData[i].payment.toFixed(2);
            }
        }
    }
}


function dumbCleanData(){
    document.getElementsByTagName('tr')[1].children[1].textContent = "";
    document.getElementsByTagName('tr')[1].children[2].textContent = "";
    document.getElementsByTagName('tr')[1].children[3].textContent = "";
    document.getElementsByTagName('tr')[1].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[2].children[1].textContent = "";
    document.getElementsByTagName('tr')[2].children[2].textContent = "";
    document.getElementsByTagName('tr')[2].children[3].textContent = "";
    document.getElementsByTagName('tr')[2].children[4].textContent = "";
    document.getElementsByTagName('tr')[3].children[1].textContent = "";
    document.getElementsByTagName('tr')[3].children[2].textContent = "";
    document.getElementsByTagName('tr')[3].children[3].textContent = "";
    document.getElementsByTagName('tr')[3].children[4].textContent = "";
    document.getElementsByTagName('tr')[4].children[1].textContent = "";
    document.getElementsByTagName('tr')[4].children[2].textContent = "";
    document.getElementsByTagName('tr')[4].children[3].textContent = "";
    document.getElementsByTagName('tr')[4].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[5].children[1].textContent = "";
    document.getElementsByTagName('tr')[5].children[2].textContent = "";
    document.getElementsByTagName('tr')[5].children[3].textContent = "";
    document.getElementsByTagName('tr')[5].children[4].textContent = "";
    document.getElementsByTagName('tr')[6].children[1].textContent = "";
    document.getElementsByTagName('tr')[6].children[2].textContent = "";
    document.getElementsByTagName('tr')[6].children[3].textContent = "";
    document.getElementsByTagName('tr')[6].children[4].textContent = "";
    document.getElementsByTagName('tr')[7].children[1].textContent = "";
    document.getElementsByTagName('tr')[7].children[2].textContent = "";
    document.getElementsByTagName('tr')[7].children[3].textContent = "";
    document.getElementsByTagName('tr')[7].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[8].children[1].textContent = "";
    document.getElementsByTagName('tr')[8].children[2].textContent = "";
    document.getElementsByTagName('tr')[8].children[3].textContent = "";
    document.getElementsByTagName('tr')[8].children[4].textContent = "";
    document.getElementsByTagName('tr')[9].children[1].textContent = "";
    document.getElementsByTagName('tr')[9].children[2].textContent = "";
    document.getElementsByTagName('tr')[9].children[3].textContent = "";
    document.getElementsByTagName('tr')[9].children[4].textContent = "";
    document.getElementsByTagName('tr')[10].children[1].textContent = "";
    document.getElementsByTagName('tr')[10].children[2].textContent = "";
    document.getElementsByTagName('tr')[10].children[3].textContent = "";
    document.getElementsByTagName('tr')[10].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[11].children[1].textContent = "";
    document.getElementsByTagName('tr')[11].children[2].textContent = "";
    document.getElementsByTagName('tr')[11].children[3].textContent = "";
    document.getElementsByTagName('tr')[11].children[4].textContent = "";
    document.getElementsByTagName('tr')[12].children[1].textContent = "";
    document.getElementsByTagName('tr')[12].children[2].textContent = "";
    document.getElementsByTagName('tr')[12].children[3].textContent = "";
    document.getElementsByTagName('tr')[12].children[4].textContent = "";
    document.getElementsByTagName('tr')[13].children[1].textContent = "";
    document.getElementsByTagName('tr')[13].children[2].textContent = "";
    document.getElementsByTagName('tr')[13].children[3].textContent = "";
    document.getElementsByTagName('tr')[13].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[14].children[1].textContent = "";
    document.getElementsByTagName('tr')[14].children[2].textContent = "";
    document.getElementsByTagName('tr')[14].children[3].textContent = "";
    document.getElementsByTagName('tr')[14].children[4].textContent = "";
    document.getElementsByTagName('tr')[15].children[1].textContent = "";
    document.getElementsByTagName('tr')[15].children[2].textContent = "";
    document.getElementsByTagName('tr')[15].children[3].textContent = "";
    document.getElementsByTagName('tr')[15].children[4].textContent = "";
    document.getElementsByTagName('tr')[16].children[1].textContent = "";
    document.getElementsByTagName('tr')[16].children[2].textContent = "";
    document.getElementsByTagName('tr')[16].children[3].textContent = "";
    document.getElementsByTagName('tr')[16].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[17].children[1].textContent = "";
    document.getElementsByTagName('tr')[17].children[2].textContent = "";
    document.getElementsByTagName('tr')[17].children[3].textContent = "";
    document.getElementsByTagName('tr')[17].children[4].textContent = "";
    document.getElementsByTagName('tr')[18].children[1].textContent = "";
    document.getElementsByTagName('tr')[18].children[2].textContent = "";
    document.getElementsByTagName('tr')[18].children[3].textContent = "";
    document.getElementsByTagName('tr')[18].children[4].textContent = "";
    document.getElementsByTagName('tr')[19].children[1].textContent = "";
    document.getElementsByTagName('tr')[19].children[2].textContent = "";
    document.getElementsByTagName('tr')[19].children[3].textContent = "";
    document.getElementsByTagName('tr')[19].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[20].children[1].textContent = "";
    document.getElementsByTagName('tr')[20].children[2].textContent = "";
    document.getElementsByTagName('tr')[20].children[3].textContent = "";
    document.getElementsByTagName('tr')[20].children[4].textContent = "";
    document.getElementsByTagName('tr')[21].children[1].textContent = "";
    document.getElementsByTagName('tr')[21].children[2].textContent = "";
    document.getElementsByTagName('tr')[21].children[3].textContent = "";
    document.getElementsByTagName('tr')[21].children[4].textContent = "";
    document.getElementsByTagName('tr')[22].children[1].textContent = "";
    document.getElementsByTagName('tr')[22].children[2].textContent = "";
    document.getElementsByTagName('tr')[22].children[3].textContent = "";
    document.getElementsByTagName('tr')[22].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[23].children[1].textContent = "";
    document.getElementsByTagName('tr')[23].children[2].textContent = "";
    document.getElementsByTagName('tr')[23].children[3].textContent = "";
    document.getElementsByTagName('tr')[23].children[4].textContent = "";
    document.getElementsByTagName('tr')[24].children[1].textContent = "";
    document.getElementsByTagName('tr')[24].children[2].textContent = "";
    document.getElementsByTagName('tr')[24].children[3].textContent = "";
    document.getElementsByTagName('tr')[24].children[4].textContent = "";
    document.getElementsByTagName('tr')[25].children[1].textContent = "";
    document.getElementsByTagName('tr')[25].children[2].textContent = "";
    document.getElementsByTagName('tr')[25].children[3].textContent = "";
    document.getElementsByTagName('tr')[25].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[26].children[1].textContent = "";
    document.getElementsByTagName('tr')[26].children[2].textContent = "";
    document.getElementsByTagName('tr')[26].children[3].textContent = "";
    document.getElementsByTagName('tr')[26].children[4].textContent = "";
    document.getElementsByTagName('tr')[27].children[1].textContent = "";
    document.getElementsByTagName('tr')[27].children[2].textContent = "";
    document.getElementsByTagName('tr')[27].children[3].textContent = "";
    document.getElementsByTagName('tr')[27].children[4].textContent = "";
    document.getElementsByTagName('tr')[28].children[1].textContent = "";
    document.getElementsByTagName('tr')[28].children[2].textContent = "";
    document.getElementsByTagName('tr')[28].children[3].textContent = "";
    document.getElementsByTagName('tr')[28].children[4].textContent = ""; 
    document.getElementsByTagName('tr')[29].children[1].textContent = "";
    document.getElementsByTagName('tr')[29].children[2].textContent = "";
    document.getElementsByTagName('tr')[29].children[3].textContent = "";
    document.getElementsByTagName('tr')[29].children[4].textContent = "";
    document.getElementsByTagName('tr')[30].children[1].textContent = "";
    document.getElementsByTagName('tr')[30].children[2].textContent = "";
    document.getElementsByTagName('tr')[30].children[3].textContent = "";
    document.getElementsByTagName('tr')[30].children[4].textContent = "";
    document.getElementsByTagName('tr')[31].children[1].textContent = "";
    document.getElementsByTagName('tr')[31].children[2].textContent = "";
    document.getElementsByTagName('tr')[31].children[3].textContent = "";
    document.getElementsByTagName('tr')[31].children[4].textContent = ""; 
}