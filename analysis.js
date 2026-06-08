let data, output, result;
async function init(){
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
}

let subdata;
function ByBorough(){
  //Discussion 1: Need variables in order to keep tallies of complaints for each borough
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  //Discussion 2: Traverse the data and use decision to determine which tally variable to increase.
  for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.borough == "QUEENS"){
      q++;
    }else if(complaint.borough == "MANHATTAN"){
      m++;
    }else if(complaint.borough == "BROOKLYN"){
      bk++;
    }else if(complaint.borough == "BRONX"){
      bx++;
    }else if(complaint.borough == "STATEN ISLAND"){
      s++;
    }
  }
  //Discussion 3: Build the data structure required for charts.  An array of arrays with the first position in each array representing the data label.
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ]
  
  //Discussion 4: Retrieve the type of chart to produce from the user's selection in the drop down box.
  let chartType = get("chartType").value;
  
  //Discussion 5: Display the chart of the aggregated data
  displayChart(chartData,"output",chartType)
}