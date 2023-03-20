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
(function(window, undefined) {
	let loader = null;
	let errMessage = 'Invalid Api key.';
	let loadMessage = 'Loading...';
	let isInited = false;

	/* todo: we have some promlems: 
		1) window.Asc.plugin.init not work
		2) we don't have access to translate manages
		3) we don't receave "theme change" event
		4) "window.Asc.plugin.button" doesn't work there and it work only inside plugin, whick chreated this window (and id don't have any prefix or postfix)
	*/ 
	window.addEventListener("DOMContentLoaded", init);

	window.Asc.plugin.init = init;

	function init() {
		if (isInited)
			return;
		
		isInited = true;
		document.getElementById('inp_key').value = localStorage.getItem('OpenAIApiKey') || '';
		document.getElementById('btn_save').onclick = function() {
			document.getElementById('err_message').innerText = '';
			document.getElementById('success_message').classList.add('hidden');
			localStorage.removeItem('OpenAIApiKey');
			let key = document.getElementById('inp_key').value.trim();
			if (key.length) {
				createLoader();
				// check api key by fetching models
				fetch('https://api.openai.com/v1/models', {
					method: 'GET',
					headers: {
						'Authorization': 'Bearer ' + key
					}
				}).
				then(function(response) {
					if (response.ok) {
						localStorage.setItem('OpenAIApiKey', key);
						document.getElementById('success_message').classList.remove('hidden');
					} else {
						createError(new Error(errMessage));
					}
				})
				.catch(function(error) {
					createError(error);
				})
				.finally(function(){
					destroyLoader();
				});
			} else {
				createError(new Error(errMessage));
			}
		}
	};

	function createError(error) {
		document.getElementById('err_message').innerText = error.message;
		console.error(error);
	};

	function createLoader() {
		if (!window.Asc.plugin.theme)
			window.Asc.plugin.theme = {type: 'light'};
		$('#loader-container').removeClass( "hidden" );
		loader && (loader.remove ? loader.remove() : $('#loader-container')[0].removeChild(loader));
		loader = showLoader($('#loader-container')[0], loadMessage);
	};

	function destroyLoader() {
		$('#loader-container').addClass( "hidden" )
		loader && (loader.remove ? loader.remove() : $('#loader-container')[0].removeChild(loader));
		loader = null;
	};

	window.Asc.plugin.button = function(id) {
		this.executeCommand("close", "");
	};

	window.Asc.plugin.onTranslate = function() {
		errMessage = window.Asc.plugin.tr(errMessage);
		loadMessage = window.Asc.plugin.tr(loadMessage);
		let elements = document.querySelectorAll('.i18n');
		elements.forEach(function(element) {
			element.innerText = window.Asc.plugin.tr(element.innerText);
		})
	};

})(window, undefined);
