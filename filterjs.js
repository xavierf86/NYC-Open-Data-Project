let data;
async function init(){
  
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
  

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let sq = data[i];

    if(sq.primary_fur_color == null){
      sq.primary_fur_color = "N/A"
    }

      if(sq.highlight_fur_color == null){
      sq.highlight_fur_color = "N/A"
    }
    if(sq.age == null){
      sq.age = "N/A"
    }

    if(sq.specific_location == null){
      sq.specific_location = ""
    }

    if(sq.other_activities == null){
      sq.other_activities = ""
    }

    build += `<div class="fitted card">
                  <h1>ID: ${sq.unique_squirrel_id} </h1> 
                  <p>Coordinates: ${sq.x}, ${sq.y}</p>
                  <p>Primary Fur Color: ${sq.primary_fur_color}</p>
                  <p>Highlighted: ${sq.highlight_fur_color}</p>
                  <h3>Age: ${sq.age}</h3>
                  <p>${sq.specific_location}</p>
                  <p>${sq.other_activities}</p>
                  <p>Shift Founded: ${sq.shift}</p>

              </div>`    
            
  }
  output.innerHTML = build;



}




function filterByAge(){
  let output = document.getElementById("output");
  let build = "";
  let result = document.getElementById("result")
  let agefilter = document.getElementById("age-select").value
  let ct = 0;

     for(let i = 0; i < data.length; i+=1){
    let sq = data[i];

    if(sq.primary_fur_color == null){
      sq.primary_fur_color = ""
    }
    if(sq.age == null){
      sq.age = ""
    }

    if(sq.specific_location == null){
      sq.specific_location = ""
    }

    if(sq.other_activities == null){
      sq.other_activities = ""
    }
    if(sq.age == agefilter){
    build += `<div class="fitted card">
                  <h1>ID: ${sq.unique_squirrel_id} </h1> 
                  <p>Coordinates: ${sq.x}, ${sq.y}</p>
                  <p>${sq.primary_fur_color}</p>
                  <h3>${sq.age}</h3>
                  <p>${sq.specific_location}</p>
                  <p>${sq.other_activities}</p>
              </div>`    

              ct +=1 
            
  }
}
result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;



}


  


function filterByColor(){
  let output = document.getElementById("output");
  let build = "";
  let result = document.getElementById("result")
  let color = document.getElementById("color").value
  let ct = 0;
for(let i = 0; i < data.length; i+=1){
    let sq = data[i];

    if(sq.primary_fur_color == null){
      sq.primary_fur_color = ""
    }
    if(sq.age == null){
      sq.age = ""
    }

    if(sq.specific_location == null){
      sq.specific_location = ""
    }

    if(sq.other_activities == null){
      sq.other_activities = ""
    }
    if(sq.primary_fur_color == color){
    build += `<div class="fitted card">
                  <h1>ID: ${sq.unique_squirrel_id} </h1> 
                  <p>Coordinates: ${sq.x}, ${sq.y}</p>
                  <p>${sq.primary_fur_color}</p>
                  <h3>${sq.age}</h3>
                  <p>${sq.specific_location}</p>
                  <p>${sq.other_activities}</p>
              </div>`    

              ct +=1 
            
  }
}
result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;



}



function filterByBoth(){
  let output = document.getElementById("output");
  let build = "";
  let result = document.getElementById("result")
  let agefilter = document.getElementById("age-select").value
  let color = document.getElementById("color").value
  let ct = 0;

     for(let i = 0; i < data.length; i+=1){
    let sq = data[i];

    if(sq.primary_fur_color == null){
      sq.primary_fur_color = ""
    }
    if(sq.age == null){
      sq.age = ""
    }

    if(sq.specific_location == null){
      sq.specific_location = ""
    }

    if(sq.other_activities == null){
      sq.other_activities = ""
    }
    if(sq.age == agefilter && color == sq.primary_fur_color){
    build += `<div class="fitted card">
                  <h1>ID: ${sq.unique_squirrel_id} </h1> 
                  <p>Coordinates: ${sq.x}, ${sq.y}</p>
                  <p>${sq.primary_fur_color}</p>
                  <h3>${sq.age}</h3>
                  <p>${sq.specific_location}</p>
                  <p>${sq.other_activities}</p>
              </div>`    
              ct += 1
            
  }
}
  output.innerHTML = build;



}

function reset(){
    let output = document.getElementById("output");
  let build = "";
  let result = document.getElementById("result")
  let agefilter = document.getElementById("age-select").value
  let color = document.getElementById("color").value
  let ct = 0;

     for(let i = 0; i < data.length; i+=1){
    let sq = data[i];

    if(sq.primary_fur_color == null){
      sq.primary_fur_color = ""
    }
    if(sq.age == null){
      sq.age = ""
    }

    if(sq.specific_location == null){
      sq.specific_location = ""
    }

    if(sq.other_activities == null){
      sq.other_activities = ""
    }

    build += `<div class="fitted card">
                  <h1>ID: ${sq.unique_squirrel_id} </h1> 
                  <p>Coordinates: ${sq.x}, ${sq.y}</p>
                  <p>${sq.primary_fur_color}</p>
                  <h3>${sq.age}</h3>
                  <p>${sq.specific_location}</p>
                  <p>${sq.other_activities}</p>
              </div>`    
              ct +=1 
            
  }
}
  output.innerHTML = build;









function filter(){
  let color = document.getElementById("color").value
  let agefilter = document.getElementById("age-select").value

  if (color == "" && agefilter != ""){
    filterByAge()
  }
  else if(color != "" && agefilter == ""){
    filterByColor()
  }
  else if(color !="" && agefilter != ""){
    filterByBoth()
  }
  else if(color =="" && agefilter==""){
    reset()
  }
}
