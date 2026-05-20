const display = document.getElementById("display");
function append(value){
  display.value += value;
}
function clearDisplay(){
  display.value = "";
}
function deleteLast(){
  display.value = display.value.slice(0,-1);
}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch{
    display.value = "Error";
  }
}
function factorial(){
  let n = parseInt(prompt("Enter number"));
  if(n < 0){
    display.value = "Error";
    return;
  }
  let result = 1;
  for(let i=1;i<=n;i++){
    result *= i;
  }
  display.value = result;
}
function permutation(){
  let n = parseInt(prompt("Enter n"));
  let r = parseInt(prompt("Enter r"));
  display.value = fact(n) / fact(n-r);
}
function combination(){
  let n = parseInt(prompt("Enter n"));
  let r = parseInt(prompt("Enter r"));
  display.value = fact(n) / (fact(r) * fact(n-r));
}
function fact(num){
  let result = 1;
  for(let i=1;i<=num;i++){
    result *= i;
  }
  return result;
}
document.addEventListener("keydown",(e)=>{
  if(!isNaN(e.key) || "+-*/.%()".includes(e.key)){
    append(e.key);
  }
  else if(e.key === "Enter"){
    calculate();
  }
  else if(e.key === "Backspace"){
    deleteLast();
  }
  else if(e.key === "Escape"){
    clearDisplay();
  }
});