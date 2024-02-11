
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

//     chrome.scripting.executeScript({
//         target: {tabId: tabId},
//         files: ['assets/js/content.js']
//     }).then(function() {
//         console.log('Script injected');
//     }).catch(function(err) {
//         console.error(err);
//     })

// });

//console.log('background running');

// Listen for messages from content scripts
// chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
//     console.log("Message received from content script:", data);
    
//     if(data.message && data.message === 'start_recording'){
//         console.log('start recording');
//         chrome.desktopCapture.chooseDesktopMedia(['screen', 'window'], function(streamId) {
//             if (streamId) {
//                 navigator.mediaDevices.getUserMedia({
//                     audio: false,
//                     video: {
//                         mandatory: {
//                             chromeMediaSource: 'desktop',
//                             chromeMediaSourceId: streamId
//                         }
//                     }
//                 }).then(function(stream) {
//                     // Screen capture started successfully, do something with the stream
//                     console.log('Screen capture started successfully:', stream);
//                 }).catch(function(error) {
//                     console.error('Error starting screen capture:', error);
//                 });
//             } else {
//                 console.error('User canceled screen capture.');
//             }
//         });
//     }

//     // Send a response back to the content script
//     sendResponse({ response: "Message received by background script!" });
// });


// chrome.tabs.onActivated.addListener(function(activeInfo) {
//     console.log('activeInfo', activeInfo);
//     var tabId = activeInfo.tabId;
//     chrome.scripting.executeScript({
//         target: {tabId},
//         files: ["assets/js/content.js"]
//     }).then(()=>{
//         console.log("we have injected the content script")
//     }).catch((err)=>{
//         console.log(err, 'error in background js catch')
//     })
// })



chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
    if(data.message && data.message === 'start_recording'){

        // Define the width and height of the window
        const windowWidth = 800; // Width of the window
        const windowHeight = 600; // Height of the window

        // Open the window at the center position
        chrome.windows.create({
            url: "screen_recorder.html",
            type: "popup",
            width: windowWidth,
            height: windowHeight
        });
        
    }

    // Send a response back to the content script
    sendResponse({ response: "Message received by background script!" });
});