document.getElementById('connect').addEventListener('click', function() {
    console.log('Initial setup working');

    var worker = new Worker('/worker.js');

    worker.addEventListener('message', onmessage);

});

function onmessage(event) {
    console.log(`Message from worker: ${event.data}`)
}