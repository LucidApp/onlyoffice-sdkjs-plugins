'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Log `title` of current active web page
const aPages = document.head.getElementsByTagName('title');
console.log('[.]', aPages);
if (aPages.length > 0) {
  const pageTitle = aPages[0].innerHTML;
  console.log(
    `Page title is: '${pageTitle}' - evaluated by Chrome extension's 'contentScript.js' file`
  );
}

(function(window, undefined){
  console.log('[_]function window script is running', window, window.name);
  if ("frameEditor" == window.name)
  {
    console.log('[_]frameEditor found');
    var _url = chrome.runtime.getURL("main.js");
    _url = _url.substr(0, _url.lastIndexOf("main.js"));

    var _baseUrl = _url + "laplace/";
    var _configUrl = _baseUrl + "config.json";

    function onLoadConfig(_json)
    {
      console.log('[_]onLoadConfig', _json);
      var _obj = _json;
      _obj.baseUrl = _baseUrl;

      var _obj_value = JSON.stringify(_obj);
      _obj_value = _obj_value.replace(/\"/g, '\\\"');

      var _script_content = "\
			(function(window, undefined) {\n\
				var _value = JSON.parse(\"" + _obj_value + "\");\
				window.Asc = window.Asc ? window.Asc : {};\n\
				window.Asc.extensionPlugins = window.Asc.extensionPlugins ? window.Asc.extensionPlugins : [];\n\
				window.Asc.extensionPlugins.push(_value);\n\
				\n\
				if (window.Asc.g_asc_plugins)\n\
				{\n\
					window.Asc.g_asc_plugins.loadExtensionPlugins(window.Asc.extensionPlugins);\n\
					window.Asc.extensionPlugins = [];\n\
				}\n\
			})(window, undefined);";

      var _script = document.createElement('script');
      _script.nonce = 'nonce-laplace';
      _script.appendChild(document.createTextNode(_script_content));
      (document.body || document.head || document.documentElement).appendChild(_script);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', _configUrl, true);
    xhr.responseType = 'json';
    xhr.onload = function()
    {
      if (this.status === 200)
      {
        onLoadConfig(xhr.response);
      }
    };
    xhr.send();
  }
})(window, undefined);

// Communicate with background file by sending a message
chrome.runtime.sendMessage(
  {
    type: 'GREETINGS',
    payload: {
      message: 'Hello, my name is Con. I am from ContentScript.',
    },
  },
  response => {
    console.log(response.message);
  }
);

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({});
  return true;
});
