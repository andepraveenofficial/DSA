self.onmessage = function(event){
    const message = event.data; // receive message
    console.log(message)
    if (message === "run loop"){

        let result = 0;
        for (let i=0; i<99999*99999; i++){
        result += i;
    }

    console.log(result)
    
    self.postMessage(result); // post message to main thread
    }
}