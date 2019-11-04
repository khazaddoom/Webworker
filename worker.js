self.postMessage('I am the greatest worker...');

self.onmessage = function(event) {
    console.log(event.data);
    console.log('Sure! Let me find something...')
}