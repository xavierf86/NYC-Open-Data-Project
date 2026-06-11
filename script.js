let data, output, result;

async function init(){
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
}


