const output = document.getElementById("output");
const outputBtn = document.getElementById("outputBtn");
const modeBtn = document.getElementById("modeBtn");

modeBtn.onclick = function(){
    const body = document.body;
    body.classList.toggle("dark-mode");
}



outputBtn.onclick = function(){
    /*
    let result = 0;
    for (let i=0; i<99999*99999; i++){
        result += i;
    }
   output.textContent = result
     */
    
   const worker = new Worker("./worker.js");
    console.log(worker);
    worker.postMessage("run loop"); // post message to worker thread
    worker.onmessage = function(event){
        const result = event.data;  // receive message
        console.log(result)
        output.textContent = result;
    }

}