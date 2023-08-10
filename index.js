let countEl= document.getElementById("count-el")
let count=0;
let saveEl= document.getElementById('save-el')
let Message= document.getElementById('message');
function Increment(){
count=count += 1;
countEl.innerText = count; 
if(count===10 ){
    Message.innerText = "hey its 10"
} else{Message.innerText = " "}

}
function save(){
  saveEl.textContent +=count +" - ";
  count=0;
  countEl.innerText = count; 
  Message.innerText = " "
}
function reset(){
    saveEl.textContent ='Previous entries: '
    Message.innerText = " "
}