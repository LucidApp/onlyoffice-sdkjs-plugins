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

	window.isInit = false;

	window.Asc.plugin.init = function(text)
	{
		console.log("[auto]plugin.init");
		if (!window.isInit)
		{
			window.isInit = true;

			window.Asc.plugin.currentText = "";
			window.Asc.plugin.createInputHelper();
			window.Asc.plugin.getInputHelper().createWindow();
		}

		//FIXME: [CBR] event initional plugin
		//close the plugin (simulate button click)
		this.button(-1);
	};

	window.Asc.plugin.button = function(id)
	{
		// this.executeCommand("close", "");
		var t = this;
		loadCurrency($('#DP').datepicker('getDate'), null,  function (value) {
			var command = '';
			if (value) {
				try {
					var rates = JSON.parse(value).rates;
					var keys = Object.keys(rates);
					command += 'var oSheet = Api.GetActiveSheet();';
					command += 'var active = oSheet.GetActiveCell();';
					command += 'var row = active.GetRow();';
					command += 'var col = active.GetCol();';
					for (var i = 0; i < keys.length; ++i) {
						command += 'oSheet.GetRangeByNumber(row, col).SetValue("' + keys[i] + '");';
						command += 'oSheet.GetRangeByNumber(row, col + 1).SetNumberFormat("@");';
						command += 'oSheet.GetRangeByNumber(row, col + 1).SetValue("' + rates[keys[i]] + '");';
						command += '++row;';
					}

					window.Asc.plugin.info.recalculate = true;
				} catch (e) {
				}
			}
			//if you need more information check this page https://api.onlyoffice.com/plugin/executecommand
			t.executeCommand('close', command);
		});
	};

	window.Asc.plugin.inputHelper_onSelectItem = function(item)
	{
		if (!item)
			return;

		window.Asc.plugin.executeMethod("InputText", [item.text, window.Asc.plugin.currentText]);
		window.Asc.plugin.getInputHelper().unShow();
	};

	window.Asc.plugin.event_onInputHelperClear = function()
	{
		window.Asc.plugin.currentText = "";
		window.Asc.plugin.getInputHelper().unShow();
	};

	window.Asc.plugin.event_onInputHelperInput = function(data)
	{
		if (data.add)
			window.Asc.plugin.currentText += data.text;
		else
			window.Asc.plugin.currentText = data.text;

		// correct by space
		var lastIndexSpace = window.Asc.plugin.currentText.lastIndexOf(" ");
		if (lastIndexSpace >= 0)
		{
			if (lastIndexSpace == (window.Asc.plugin.currentText.length - 1))
				window.Asc.plugin.currentText = "";
			else
				window.Asc.plugin.currentText = window.Asc.plugin.currentText.substr(lastIndexSpace + 1);
		}

		if (window.Asc.plugin.currentText.length < 3)
		{
			window.Asc.plugin.getInputHelper().unShow();
			return;
		}

		var variants = window.getAutoComplete(window.Asc.plugin.currentText);
		if (variants.length == 0)
		{
			window.Asc.plugin.getInputHelper().unShow();
		}
		else
		{
			var items = [];
			for (var i = 0; i < variants.length; i++)
			{
				items.push({ text : variants[i] });
			}

			window.Asc.plugin.getInputHelper().setItems(items);
			var _sizes = getInputHelperSize();
			window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, false);
		}
	};

	function getInputHelperSize()
	{
		var _size = window.Asc.plugin.getInputHelper().getScrollSizes();
		var _width = 150;// _size.w
		var _height = _size.h;
		var _heightMin = window.Asc.plugin.getInputHelper().getItemsHeight(Math.min(5, window.Asc.plugin.getInputHelper().getItems().length));

		if (_width > 400)
			_width = 400;
		if (_height > _heightMin)
			_height = _heightMin;

		_width += 30;

		return { w: _width, h : _height };
	}

	window.isAutoCompleteReady = false;
	window.getAutoComplete = function(text)
	{
		if (!g_dictionary)
			return;

		window.isAutoCompleteReady = true;
		g_dictionary.sort();

		var textFound = text.toLowerCase();

		var start = 0;
		var end = g_dictionary.length - 1;
		var index = 0;

		while (true)
		{
			var middle = (end + start) >> 1;

			if (middle == start || middle == end)
			{
				index = start;

				while (index != end)
				{
					if (g_dictionary[index] >= textFound)
						break;
					index++;
				}

				break;
			}

			var test = g_dictionary[middle];

			if (test == textFound)
			{
				index = middle;
				break;
			}

			if (test < textFound)
			{
				start = middle;
			}
			else
			{
				end = middle;
			}
		}

		var ret = [];
		end = g_dictionary.length;
		while (index < end)
		{
			var testRec = g_dictionary[index++];
			if (testRec.indexOf(textFound) != 0)
				break;

			ret.push(text + testRec.substr(textFound.length));
			index++;
		}

		return ret;
	};

	var apiCurrency = 'http://data.fixer.io/api/';
	var access_key = 'abd009701042b282bda944c660c90fb2';

	function formatDate(date) {
		var month = '' + (date.getMonth() + 1);
		var day = '' + date.getDate();
		var year = date.getFullYear();

		if (month.length < 2) {
			month = '0' + month;
		}
		if (day.length < 2) {
			day = '0' + day;
		}

		return [year, month, day].join('-');
	}

	function loadCurrency(date, base, callback) {
		base = base ? base : 'RUB';
		//if you need use base then create an account on fixer.io, select  subscription plan BASIC or expensive and paste your access_key
		//default base = EUR
		date = date ? formatDate(date) : 'latest';
		var httpRequest;
		if (window.XMLHttpRequest) { // Mozilla, Safari, ...
			httpRequest = new XMLHttpRequest();
		} else if (window.ActiveXObject) { // IE
			try {
				httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e) {
					console.error("httpRequest died.");
				}
			}
		}

		httpRequest.onreadystatechange = function () {
			if (httpRequest.readyState === 4) {
				callback(httpRequest.status === 200 ? httpRequest.responseText : null);
			}
		};
		httpRequest.open('GET', apiCurrency + date + '?access_key=' + access_key, true);
		//use this reques if your subscription plan is base or expensive
		// httpRequest.open('GET', apiCurrency + date + '?access_key=' + access_key + '&base=' + base, true);
		httpRequest.send();
	}

})(window, undefined);
