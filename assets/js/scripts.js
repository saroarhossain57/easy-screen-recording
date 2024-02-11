

const startRecordButton = document.getElementById('evr-start-record');

startRecordButton.addEventListener('click', function(e){
    e.preventDefault();


    chrome.runtime.sendMessage({ message: "start_recording" }, function(response) {

        console.log("Response from background script:", response);
    });

    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {action: 'start_recording'}, function(response) {
    //         console.log('Response', response);
    //         // if(response.status === 'success') {
    //         //     console.log(response)
    //         // }
    //     })
    // });

});