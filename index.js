const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 


function superbowlWin(array){
  if (array.find(object => object.result === "W")){
    return array.find(object => object.result === "W").year
  }
}


 



