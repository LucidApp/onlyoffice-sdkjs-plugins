/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(window, undefined){
	console.log('[_main]function window script is running', window, window.name);
	if ("frameEditor" == window.name)
	{
		console.log('[_main]frameEditor found');
		var _url = chrome.runtime.getURL("main.js");
		_url = _url.substr(0, _url.lastIndexOf("main.js"));

		var _baseUrl = _url + "laplace/";
		var _configUrl = _baseUrl + "config.json";

		function onLoadConfig(_json)
		{
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
