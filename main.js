var worker;

document.getElementById('connect').addEventListener('click', function() {
    console.log('Initial setup working');

    worker = new Worker('/worker.js');

    worker.addEventListener('message', onmessage);

});

function onmessage(event) {
    console.log(`Message from worker: ${event.data}`)
    worker.postMessage('Oh Hi! Lets cookup something special..')
}