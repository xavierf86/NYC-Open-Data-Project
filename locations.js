let data, mapObj;

async function init(){
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
  
  let cards_output = get("cards_output");
  let build = "";
  for(let i = 0; i < data.length; i+=1) {
    let sq = data[i];
    build += card(sq);
  }
  cards_output.innerHTML = build;
}