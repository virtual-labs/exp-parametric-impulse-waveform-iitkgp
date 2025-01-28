/**
 * 
 *  Document     : control.js
 *  Created on   : Feb 17, 2017, 3:40:00 AM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */
//var chart;
//var data;
//google.charts.load("current", {packages: ["corechart", "line"]});
//google.charts.setOnLoadCallback(ivg);
//$(window).resize(function(){
//  ivg();
//});
//
//function ivg() {
//    data = new google.visualization.DataTable();
//    data.addColumn('number', 't');
//    data.addColumn('number', 'I');
//    var options = {
//        title: 'I - T Curve',
//        curveType: 'function',
//        'isStacked': true,
//        pieSliceText: 'percentage',
//        legend: {position: 'none'},
//        chartArea: {
//            left: "5%",
//            top: "8%",
//            height: "80%",
//            width: "90%"
//        },
//        hAxis: {
//            title: 'Time ( Micro Second)'
//        },
//        vAxis: {
//            title: 'Current ( Amp )'
//        },
//        colors: ['#a52714', '#097138'],
//    };
//    chart = new google.visualization.LineChart(document.getElementById('visualization'));
//    chart.draw(data, options);
//
//}

var chart;
var dataTable;
var dataArr = [['t', 'I']];
var options;
var t = [];
var V = [];
google.charts.load("current", {packages: ["corechart", "line"]});
google.charts.setOnLoadCallback(ivg);
$(window).resize(function () {
    ivg();
    graphGenerator();
});

function ivg() {
//    var i;
//    t[i] = i;
//    V = [];
//    V[i] = 0;

    for (var i = 0; i < 200; i++) {
        var arrData = [0, 0];
        arrData[0] = i;
        dataArr.push(arrData);
    }
    console.log(dataArr);
    dataTable = new google.visualization.arrayToDataTable(dataArr);
//    dataTable.addColumn('number', 't');
//    dataTable.addColumn('number', 'V');
    var options = {
        title: 'I - T Curve',
        explorer: {maxZoomOut: 20},
        curveType: 'function',
        legend: {position: 'none'},
        'isStacked': true,
        pieSliceText: 'percentage',
        chartArea: {
            left: "5%",
            top: "8%",
            height: "80%",
            width: "90%"
        },
        hAxis: {
            title: 'Time ( Micro Second )'
        },
        vAxis: {
            title: 'Current ( A )'
        },
        colors: ['#a52714', '#097138'],
        selectionMode: 'multiple',
        tooltip: {trigger: 'both',
            focusTarget: 'category'
        },
        aggregationTarget: 'none',
        crosshair: {
            color: '#000',
            trigger: 'both',

            focused: {color: ['#00ff00']},
            selected: {color: ['#00ffff']},
            focusTarget: 'category'
        }
    };
    chart = new google.visualization.LineChart(document.getElementById('visualization'));
    chart.draw(dataTable, options);

}


function graphGenerator() {
    var Rt = Number(document.getElementById('Rt').value);
    var Rf = Number(document.getElementById('Rf').value);
    var Cg = Number(document.getElementById('Cg').value);
    var C1 = Number(document.getElementById('C1').value);
    var V0 = Number(document.getElementById('V0').value);
    var d = Number(document.getElementById('d').value);
    var I = [];
    var voltArr = [];
    var c = Rf + Rt;
    var e = (C1 + d);
    var w = Math.sqrt((1 / Cg * e) - ((c * c) / (4 * e * e)));
    for (var i = 0; i < 200; i++)
    {
        I[i] = ((V0 / w * e) * (Math.sin(w * i)) * (Math.exp((-c / 2 * e) * i)));
        var xx = [0, 0];
        xx[0] = i;
        xx[1] = I[i];

        voltArr.push(xx);

    }
    console.log(voltArr);

    var cl = dataArr[0].length;
//    alert('length='+cl);
    var titleGraph = document.getElementById("graphTitle").innerHTML;
    var titleGraph1 = document.getElementById("graphTitle1").innerHTML;

    for (var i = 1; i < dataArr.length; i++) {
        dataArr[i][cl] = voltArr[i - 1][1];
    }
    console.log(dataArr);
    dataArr[0][cl] = titleGraph + '=' + titleGraph1;
    dataTable = new google.visualization.arrayToDataTable(dataArr);

    var titleGraph1 = document.getElementById("demo4").value;
    var titleGraph2 = document.getElementById("demo2").value;
    var titleGraph3 = document.getElementById("demo3").value;
    var titleGraph4 = document.getElementById("demo").value;
    var titleGraph5 = document.getElementById("demo1").value;
    var titleGraph6 = document.getElementById("demo8").value;
    options = {
        title: 'I - T Curve' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + 'V =' + ' ' + titleGraph1 + ' ' + 'kV' + '    \xa0\xa0\xa0      ' + 'Cg =' + ' ' + titleGraph2 + ' ' + '\xB5' + 'F' + '   \xa0\xa0\xa0    ' + 'Lf =' + ' ' + '0.6' + ' ' + '\xB5' + 'H' + '  \xa0\xa0\xa0     ' +   'Lt =' + ' ' + titleGraph6 + ' ' + '\xB5' + 'H' + '  \xa0\xa0\xa0'+       'Rf =' + ' ' + '0.6' + ' ' + '\u2126' + '   \xa0\xa0\xa0    ' + 'Rt =' + ' ' + '0.4' + ' ' + '\u2126',
        explorer: {maxZoomOut: 20},
        curveType: 'function',
//        legend: {position: 'none'},
        'isStacked': true,
        pieSliceText: 'percentage',
        chartArea: {
            left: "5%",
            top: "8%",
            height: "80%",
            width: "80%"
        },
        hAxis: {
            title: 'Time ( Micro Second )'
        },
        vAxis: {
            title: 'Current ( A )'
        },
//        colors: ['#a52714', '#097138'],
        selectionMode: 'multiple',
        tooltip: {trigger: 'both',
            focusTarget: 'category'
        },
        aggregationTarget: 'none',
        crosshair: {
            color: '#000',
            trigger: 'both',

            focused: {color: ['#00ff00']},
            selected: {color: ['#00ffff']},
            focusTarget: 'category'
        }
    };
    google.visualization.events.addListener(chart, 'ready', function () {

        graphURI = chart.getImageURI();
        //cng = "'" + png + "'"

    });
//    chart.clearChart();
    chart.draw(dataTable, options);
//    chart.draw(data, options);
}

var arrowSign = "&#x25BC;";
function changeThings() {
    if (arrowSign === "&#x25BC;") {
        document.getElementById("ckt_diagram").style.display = "none";
        document.getElementById("dropdown-content").style.display = "block";
        document.getElementById("circle").innerHTML = "&#916;";
        arrowSign = "&#916;";
    } else {
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("ckt_diagram").style.display = "block";
        document.getElementById("circle").innerHTML = "&#x25BC;";
        arrowSign = "&#x25BC;";
    }
}

