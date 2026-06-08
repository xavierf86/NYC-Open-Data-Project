let data, output, result;
async function init(){
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
}

function FurColor() {
    let gray = 0, cinnamon = 0, black = 0, unknown = 0;

    for (let i = 0; i < data.length; i++) {
        let squirrel = data[i];

        if (squirrel.primary_fur_color == "Gray") {
            gray++;
        } else if (squirrel.primary_fur_color == "Cinnamon") {
            cinnamon++;
        } else if (squirrel.primary_fur_color == "Black") {
            black++;
        } else {
            unknown++;
        }
    }
    
    let chartData = [
        ["Gray", gray],
        ["Cinnamon", cinnamon],
        ["Black", black],
        ["Unknown", unknown]
    ];

    let chartType = document.getElementById("chartType").value;
    displayChart(chartData, "output", chartType);

    furParagraph.innerHTML = "   "
}

function Age() {
    let adult = 0, juvenile = 0, unknown = 0;

    for (let i = 0; i < data.length; i++) {
        let squirrel = data[i];

        if (squirrel.age == "Adult") {
            adult++;
        } else if (squirrel.age == "Juvenile") {
            juvenile++;
        } else {
            unknown++;
        }
    }

    let chartData = [
        ["Adult", adult],
        ["Juvenile", juvenile],
        ["Unknown", unknown]
    ];

    let chartType = document.getElementById("chartType").value;
    displayChart(chartData, "output", chartType);
}

function Location() {
    let ground = 0, above = 0, unknown = 0;

    for (let i = 0; i < data.length; i++) {
        let squirrel = data[i];

        if (squirrel.location == "Ground Plane") {
            ground++;
        } else if (squirrel.location == "Above Ground") {
            above++;
        } else {
            unknown++;
        }
    }

    let chartData = [
        ["Ground Plane", ground],
        ["Above Ground", above],
        ["Unknown", unknown]
    ];

    let chartType = document.getElementById("chartType").value;
    displayChart(chartData, "output", chartType);
}

function Activities() {
    let running = 0, chasing = 0, climbing = 0, eating = 0, foraging = 0;

    for (let i = 0; i < data.length; i++) {
        let squirrel = data[i];

        if (squirrel.running == true) {
            running++;
        }
        if (squirrel.chasing == true) {
            chasing++;
        }
        if (squirrel.climbing == true) {
            climbing++;
        }
        if (squirrel.eating == true) {
            eating++;
        }
        if (squirrel.foraging == true) {
            foraging++;
        }
    }
    let chartData = [
        ["Running", running],
        ["Chasing", chasing],
        ["Climbing", climbing],
        ["Eating", eating],
        ["Foraging", foraging]
    ];

    let chartType = document.getElementById("chartType").value;
    displayChart(chartData, "output", chartType);
}

function Shift() {
    let am = 0, pm = 0;

    for (let i = 0; i < data.length; i++) {
        let squirrel = data[i];

        if (squirrel.shift == "AM") {
            am++;
        } else if (squirrel.shift == "PM") {
            pm++;
        }
    }

    let chartData = [
        ["AM", am],
        ["PM", pm]
    ];

    let chartType = document.getElementById("chartType").value;
    displayChart(chartData, "output", chartType);
}

function PickGraph() {
    let graphTopic = document.getElementById("topic").value;

    if (graphTopic == "fur") {
        FurColor();
    } else if (graphTopic == "age") {
        Age();
    } else if (graphTopic == "location") {
        Location();
    } else if (graphTopic == "activity") {
        Activities();
    } else if (graphTopic == "shift") {
        Shift();
    }
}
function get(id){
  return document.getElementById(id);
}


function displayChart(chartData, location, chartType) {
    c3.generate({
        bindto: "#" + location,
        data: {
            columns: chartData,
            type: chartType
        }
    });
}