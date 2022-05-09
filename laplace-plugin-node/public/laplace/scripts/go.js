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

let data = {};

const parseCsv = csv => {
  let lines = csv.split("\n");
  const header = lines[0].split(",")
  lines.shift(); // get rid of definitions
  return lines.map(line => {
    const bits = line.split(",");
    let obj = {};
    header.forEach((h, i) => obj[h] = bits[i]); // or use reduce here
    return obj;
  })
};

(function (window, undefined) {
  console.log("[go]START!");

  window.isInit = false;

  window.Asc.plugin.init = function (text) {
    console.log("[auto]plugin init");
    if (!window.isInit) {
      window.isInit = true;

      window.Asc.plugin.currentText = "";
      window.Asc.plugin.createInputHelper();
      window.Asc.plugin.getInputHelper().createWindow();

      console.log("[auto]window init");

      data = parseCsv(csv_data);
      for (let i in data) {
        const item = data[i]
        item.id = parseInt(item.no);
      }
      console.log("csv data:", data);
    }

    //FIXME: event initional plugin
    //close the plugin (simulate button click)
    this.button(-1);
  };

  let current_cell = null;
  let base_command = '';
  base_command += 'var oSheet = Api.GetActiveSheet();';
  base_command += 'var oSheet = Api.GetActiveSheet();';
  base_command += 'var active = oSheet.GetActiveCell();';
  base_command += 'var row = active.GetRow();';
  base_command += 'var col = active.GetCol();';

  window.Asc.plugin.inputHelper_onSelectItem = function (t) {
    if (!t) return;
    let command = '';
    const item = data.map(i => i).find(i => i.id === t.id);
    console.log("[auto]inputHelper_onSelectItem", t, item);

    command = base_command + 'oSheet.GetRangeByNumber(row, col).SetValue("' + `Item No. ${item.no}` + '");';
    command += 'oSheet.GetRangeByNumber(row, col + 1).SetValue("' + item.name + '");';
    command += 'oSheet.GetRangeByNumber(row, col + 2).SetValue("' + item.specification + '");';
    command += 'oSheet.GetRangeByNumber(row, col + 3).SetValue("' + item.description + '");';
    command += 'oSheet.GetRangeByNumber(row, col + 5).SetNumberFormat("@");';
    command += 'oSheet.GetRangeByNumber(row, col + 5).SetValue("' + item.price + '");';

    // window.Asc.plugin.executeMethod("InputText", [item.text, window.Asc.plugin.currentText]);
    console.log("[auto]READY TO EXECUTE COMMAND:", command);
    window.Asc.plugin.executeMethod("InputText", [`Item No. ${item.no}`, window.Asc.plugin.currentText]);
    window.Asc.plugin.info.recalculate = true;
    window.Asc.plugin.executeCommand('command', command);
    window.Asc.plugin.getInputHelper().unShow();
  };

  window.Asc.plugin.event_onInputHelperClear = function () {
    window.Asc.plugin.currentText = "";
    window.Asc.plugin.getInputHelper().unShow();
  };

  window.Asc.plugin.event_onInputHelperInput = function (data) {
    if (data.add)
      window.Asc.plugin.currentText += data.text;
    else
      window.Asc.plugin.currentText = data.text;

    let get_cell_command = base_command + 'return active;';
    window.Asc.plugin.executeCommand('command', get_cell_command, function (result) {
      console.log("Current Cell:", result);
    });

    // correct by space
    var lastIndexSpace = window.Asc.plugin.currentText.lastIndexOf(" ");
    if (lastIndexSpace >= 0) {
      if (lastIndexSpace == (window.Asc.plugin.currentText.length - 1))
        window.Asc.plugin.currentText = "";
      else
        window.Asc.plugin.currentText = window.Asc.plugin.currentText.substr(lastIndexSpace + 1);
    }

    if (window.Asc.plugin.currentText.length < 2) {
      window.Asc.plugin.getInputHelper().unShow();
      return;
    }

    let variants = window.getAutoComplete(window.Asc.plugin.currentText);
    if (variants.length <= 0) {
      window.Asc.plugin.getInputHelper().unShow();
    } else {
      let items = [];
      for (let i in variants) {
        const item = variants[i];
        items.push({
          id: item.id,
          text: `${item.id}. ${item.name}, ${item.specification}, ￥${item.price}`
        });
      }

      window.Asc.plugin.getInputHelper().setItems(items);
      let _sizes = getInputHelperSize();
      console.log("[auto]inputHelper SHOW");
      window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, false);
    }
  };

  function getInputHelperSize() {
    var _size = window.Asc.plugin.getInputHelper().getScrollSizes();
    var _width = 400; //_size.w;
    var _height = _size.h;
    var _heightMin = window.Asc.plugin.getInputHelper().getItemsHeight(Math.min(5, window.Asc.plugin.getInputHelper().getItems().length));

    if (_width > 400)
      _width = 400;
    if (_height > _heightMin)
      _height = _heightMin;

    _width += 30;

    return {w: _width, h: _height};
  }

  window.isAutoCompleteReady = false;
  window.getAutoComplete = function (text) {
    if (!data) return;

    window.isAutoCompleteReady = true;

    const ret = [];
    data.map(item => {
      if (item.name.includes(text) || item.no.includes(text)
        || item.specification.includes(text) || item.description.includes(text)) {
        ret.push(item);
      }
    });

    return ret;
  };
})(window, undefined);
