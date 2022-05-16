'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

// For External requests:
chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    console.log(["[go]onMessageExternal:", request, sender]);
    chrome.storage.local.set({[request.key]: request.value});
    // localStorage[request.key] = request.value.id;
    sendResponse({});
  });
