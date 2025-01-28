/**
 * 
 *  Document     : controller.js
 *  Created on   : Marn9, 2017, 4:35:25 PM
 *  Author       : Subir Sekhar
 *  Co-Author    : Pabitra K Jana
 *  Organization : IIT Khatagpur
 *  
 */

// Initialize Simulation on page load
function initializeSimulation() {
    CUBEScene.init();
    animate();
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize")
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function trigger_generator() {

    getIndex();

    window.setTimeout(function () {
        CUBEScene.sphere1.position.set(7.5, 2.5, 0);
        CUBEScene.sphere2.position.set(7.5, -48.5, 0);
        render();
    }, 500);
    window.setTimeout(function () {
        CUBEScene.sphere1.position.set(7.5, 2, 0);
        CUBEScene.sphere2.position.set(7.5, -47, 0);
        render();
    }, 1000);

    window.setTimeout(function () {
        CUBEScene.sphere1.position.set(7.5, 1.5, 0);
        CUBEScene.sphere2.position.set(7.5, -45.5, 0);
        render();
    }, 1500);

    window.setTimeout(function () {
        CUBEScene.sphere1.position.set(7.5, 1, 0);
        CUBEScene.sphere2.position.set(7.5, -44, 0);
        render();
    }, 2000);

    window.setTimeout(function () {
        CUBEScene.sphere1.position.set(7.5, 0.5, 0);
        CUBEScene.sphere2.position.set(7.5, -42.5, 0);
        render();
    }, 2500);

    window.setTimeout(function () {
        CUBEScene.sphere1.position.set(7.5, 0, 0);
        CUBEScene.sphere2.position.set(7.5, -41, 0);
        render();
    }, 3000);

    window.setTimeout(function () {
        CUBEScene.sphere1.position.set(7.5, +0.5, 0);
        CUBEScene.sphere2.position.set(7.5, -39.5, 0);
        render();
    }, 3500);




    window.setTimeout(function () {
        CUBEScene.star.position.set(2.5, 32.5, -85);
        CUBEScene.cylinder16.position.set(330, -105, 350);
        CUBEScene.cylinder166.position.set(230, -105, 350);

        render();
        audio();
    }, 3500);


    window.setTimeout(function () {
        CUBEScene.cylinder16.rotation.x = Math.PI * 0;
        CUBEScene.cylinder166.rotation.x = Math.PI * 0;
        CUBEScene.cylinder16.material.color.setHex(0xffffff);
        CUBEScene.cylinder166.material.color.setHex(0xffffff);
        CUBEScene.cylinder17.material.color.setHex(0xffffff);
        CUBEScene.cube1.material.color.setHex(0xff0000);
        CUBEScene.star.position.set(2.5, 62, -85);
        CUBEScene.sphere1.position.set(7.5, 2.5, 0);
        CUBEScene.sphere2.position.set(7.5, -50, 0);
        CUBEScene.cube11.material.color.setHex(0xC0C0C0);
        CUBEScene.cube12.material.color.setHex(0xC0C0C0);
        CUBEScene.cube13.material.color.setHex(0xC0C0C0);
        CUBEScene.cylinder5.material.color.setHex(0x666666);
        CUBEScene.cylinder42.material.color.setHex(0x666666);
        CUBEScene.cylinder41.material.color.setHex(0x666666);
        CUBEScene.cylinder45.material.color.setHex(0x666666);
        CUBEScene.cylinder12.material.color.setHex(0xffffff);
        CUBEScene.cylinder13.material.color.setHex(0xffffff);
        CUBEScene.cylinder29.material.color.setHex(0x666666);
        CUBEScene.cylinder26.material.color.setHex(0x666666);
        CUBEScene.cylinder27.material.color.setHex(0x666666);
        CUBEScene.cylinder28.material.color.setHex(0x666666);
        CUBEScene.cylinder166.material.color.setHex(0x666666);
        CUBEScene.cylinder17.material.color.setHex(0xffffff);
        CUBEScene.cylinder23.material.color.setHex(0xffffff);
        CUBEScene.cylinder24.material.color.setHex(0xffffff);
        render();
        document.getElementById("meter").hidden = true;
    }, 4000);

//    window.setTimeout(function () {
//
//        graphGenerator();
//
//
//    }, 4500);


    document.getElementById("buttn3").disabled = true;

    window.setTimeout(function () {
        displayMap();
document.getElementById("buttn").disabled = false;
    }, 5000);

}


function audio() {
    var audio = new Audio('images/flash_sound.mp3');
    audio.play();
}



function displayMap() {
    document.getElementById('graph').style.display = "block";
    graphGenerator();
    document.getElementById('dwnldGraph').innerHTML = "";
     var linkk = "<a href='"+graphURI+"' download='mypanting.png' target='_blank' >Save Graph</a>";
      document.getElementById('dwnldGraph').innerHTML = linkk;
}

function ground_switch() {


    CUBEScene.cylinder16.rotation.x = Math.PI / 2;
    CUBEScene.cylinder16.position.set(330, -105, 375);
    CUBEScene.cylinder16.material.color.setHex(0x666666);
    CUBEScene.cylinder166.rotation.x = Math.PI / 2;
    CUBEScene.cylinder166.position.set(230, -105, 375);
    CUBEScene.cylinder166.material.color.setHex(0x666666);
    CUBEScene.cylinder17.material.color.setHex(0x666666);
    CUBEScene.cylinder23.material.color.setHex(0x666666);
    CUBEScene.cylinder24.material.color.setHex(0x666666);
    render();

    window.setTimeout(function () {

        document.getElementById("buttn1").disabled = true;
    }, 500);
    document.getElementById("buttn2").disabled = false;
}



var chargeCapacitorTimer = null, chargeCapacitorCount = 0;

function charge_capacitor() {
    window.setTimeout(function () {
        CUBEScene.cylinder19.material.color.setHex(0xffffff);

        CUBEScene.cylinder12.material.color.setHex(0xffffff);
        CUBEScene.cylinder13.material.color.setHex(0xffffff);
        CUBEScene.cylinder29.material.color.setHex(0xffffff);
        CUBEScene.cylinder26.material.color.setHex(0xffffff);
        CUBEScene.cylinder27.material.color.setHex(0xffffff);
        CUBEScene.cylinder28.material.color.setHex(0xffffff);
        CUBEScene.cube11.material.color.setHex(0xffffff);
        CUBEScene.cube12.material.color.setHex(0xffffff);
        CUBEScene.cube13.material.color.setHex(0xffffff);
        document.getElementById("meter").hidden = false;
        document.getElementById("charge-msg").innerText = "Charging...";
    }, 300);


    window.setTimeout(function () {
        CUBEScene.cube1.material.color.setHex(0x00ff00);
        CUBEScene.cylinder5.material.color.setHex(0xffffff);
        CUBEScene.cylinder42.material.color.setHex(0xffffff);
        CUBEScene.cylinder41.material.color.setHex(0xffffff);
        CUBEScene.cylinder45.material.color.setHex(0xffffff);
        document.getElementById("buttn3").disabled = false;
        document.getElementById("buttn2").disabled = true;
        render();
    }, 5000);
    if (!chargeCapacitorTimer) {
        chargeCapacitorTimer = setInterval(function () {
            chargeCapacitorCount = chargeCapacitorCount + 2;
            if (chargeCapacitorCount == 100) {
                clearInterval(chargeCapacitorTimer);
                chargeCapacitorCount = 0;
                chargeCapacitorTimer = null;
                document.getElementById("charge-msg").innerText = "Charged";
            } else
                document.getElementById("charge-progress").value = chargeCapacitorCount;
        }, 100);
    }
}

/* function start() {
    document.getElementById("buttn").value = "Restart";
    document.getElementById("buttn1").disabled = false;
}
function restart() {
    document.getElementById("buttn").value = "Start Experiment";
    document.getElementById("buttn1").disabled = true;
    document.getElementById("buttn2").disabled = true;
    document.getElementById("buttn3").disabled = true;
    document.getElementById('buttn').addEventListener('click', function () {

        start();
    });
}

function toggleButton() {
    var bval = document.getElementById("buttn").value;
    if (bval === "Start Experiment") {
        start();
    } else {
        window.location.href = window.location.href;
    }

} */
function aaa() {
    document.getElementById("demo").value = document.getElementById("Rf").value;
}
function aaa1() {
    document.getElementById("demo1").value = document.getElementById("Rt").value;
}
function aaa2() {
    document.getElementById("demo2").value = document.getElementById("Cg").value;
}
function aaa3() {
    document.getElementById("demo3").value = document.getElementById("C1").value;
}
function aaa4() {
    document.getElementById("demo4").value = document.getElementById("V0").value;
}
function aaa8() {
    document.getElementById("demo8").value = document.getElementById("d").value;
}



/*  function graphGenerator() {
    var Rf = Number(document.getElementById('Rf').value);
    var Rt = Number(document.getElementById('Rt').value);
    var Cg = Number(document.getElementById('Cg').value);
    var C1 = Number(document.getElementById('C1').value);
    var V0 = Number(document.getElementById('V0').value);
    var d = Number(document.getElementById('d').value);
    var I = [];
    var t = [];
    var z = [];
    var RF = Rt;
    var RT = Rf;
   
    var v = 10 * V0;
    var a = 1 / ((Cg + C1) * RT + (RF * Cg));
    var b = ((Cg + C1) * RT + (RF * Cg)) / (RF * RT * Cg * C1);

    var c = Rf + Rt;
    var e = (C1 + d) ;
    
     var w = Math.sqrt((1/Cg * e) - ((c *c )/(4 * e *e)));
     
    for (var i = 0; i < 50; i++)
    {
        t[i] = i;
//        V[i] = (((v * 2.5) * (Math.exp(-a * t[i]) - Math.exp(-b * t[i]))) / (RF * C1 * (b - a)));
        I[i] = ((V0 / w * e) * (Math.sin(w * t[i])) * (Math.exp((-c / 2 * e) * t[i])));

        z[i] = "[" + t[i] + " ," + I[i] + "]";
    }
    z[i] = "[" + t[i] + " ," + I[i] + "]";
    console.log(z);
    var len = data.getNumberOfRows(); // ET NUMBER OF ROWS IN ARRAY 
    if (len > 0) {
        data.removeRows(0, len); // REMOVE THE PREVIOUS DATA
    }
    for (var i = 0; i < t.length; i++)
        data.addRow([t[i], I[i]]);
    //alert("After add: "+data.);
    var options = {
        title: 'I - T Curve',
        explorer: {maxZoomOut: 20},
        displayAnnotations: true,
        showArea: true,
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
            title: 'Current ( Amp )'
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
            focusTarget: 'category',
            sortColumn: 0,
            sortAscending: false,
            sort: 'enable'
        }

    };
    
    chart.clearChart();
    chart.draw(data, options);
}  */




function getIndex() {
    if (index === 1) {
        document.getElementById("graphTitle").innerHTML = "R1";
        document.getElementById("graphTitle1").innerHTML = document.getElementById("demo1").value;
    } else if (index === 2) {
        document.getElementById("graphTitle").innerHTML = "Rf";
        document.getElementById("graphTitle1").innerHTML = document.getElementById("demo").value;
    } else if (index === 3) {
        document.getElementById("graphTitle").innerHTML = "Lf";
        document.getElementById("graphTitle1").innerHTML = document.getElementById("demo3").value;
//        alert(index);
    }
}
    
    function start() {
//    document.getElementById("buttn").value = "Restart";
    document.getElementById("buttn").disabled = true;
    document.getElementById("buttn1").disabled = false;
}
function restart() {
    document.getElementById("buttn").value = "Start Experiment";
    document.getElementById("buttn1").disabled = true;
    document.getElementById("buttn2").disabled = true;
    document.getElementById("buttn3").disabled = true;
    document.getElementById('buttn').addEventListener('click', function () {

        start();
    });
}

function toggleButton() {
    
     document.getElementById('graph').style.display = "none";
//    var bval = document.getElementById("buttn").value;
//    if (bval === "Start Experiment") {
         if (index === 0){
        alert('Please select a parameter first');
    } else{
  
    start();
    
}
}