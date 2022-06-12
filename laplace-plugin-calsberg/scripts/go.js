/**
 * Laplace Plugin Calsberg v0.6
 */
(function (window, undefined) {
  let data_calsberg = [];
  let data = [];
  let client = "calsberg";
  let keys_set = new Set();

  const calsberg_keyword = ["嘉士伯", "calsberg"];
  const pepsi_keywords = ["百事", "pepsi"];
  const dingjin_keywords = ["顶津", "dingjing", "康水"];
  const dingyi_keywords = ["顶益", "dingyi", "康面"];
  const jinglongyu_keywords = ["金龙鱼", "jinglongyu"];

  let current_col;
  let current_cell;

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

  console.log("[go]START!", window.location.pathname, window.location.href, window.location);

  window.isInit = false;

  window.Asc.plugin.init = function (text) {
    console.log("[auto]plugin init");
    if (!window.isInit) {
      window.isInit = true;

      window.Asc.plugin.currentText = "";
      window.Asc.plugin.createInputHelper();
      window.Asc.plugin.getInputHelper().createWindow();
      console.log("[auto]window init", window.Asc.plugin.info);

      // FIXME: ugly but work
      data_calsberg = parseCsv(csv_data_calsberg);
      data_calsberg.map(item => {
        item.id = item.item_no;
      });
      data = data_calsberg;
      console.log("csv data:", documentTitle, data);
    }
  };

  window.Asc.plugin.button = function (id) {
    // FIXME: this.executeCommand("close", "");
  };

  window.Asc.plugin.onCommandCallback = function (result) {
    console.log("[callback]Current Col:", current_col, current_cell);
    console.log("[callback]result:", result);
  };

  window.Asc.plugin.event_onTargetPositionChanged = function (data) {
    console.log("[event]onTargetPositionChanged:", data, this);
    window.Asc.plugin.executeMethod("GetCurrentContentControl");
  };

  // window.Asc.plugin.event_onClick = function(isSelectionUse) {
  //   window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function(obj) {
  //     window.Asc.plugin.currentContentControl = obj;
  //     console.log("[event]onClick:", isSelectionUse, obj, this);
  //   });
  // };

  // window.Asc.plugin.onMethodReturn = function(data) {
  //   console.log("[event]onMethodReturn:", data, this);
  // };

  window.Asc.plugin.inputHelper_onSelectItem = function (t) {
    if (!t) return;
    const item = data.map(i => i).find(i => i.id === t.id);
    console.log("[auto]inputHelper_onSelectItem", t, item);
    Asc.scope.item = item;

    this.callCommand(function () {
      const oSheet = Api.GetActiveSheet();
      const oCell = oSheet.GetActiveCell();
      const item = Asc.scope.item;
      let row = oCell.GetRow();
      let col = oCell.GetCol();
      console.log("[cmd-input]cell:", oCell, row, col);
      console.log("[cmd-input]item:", item);
      // 标准名
      oSheet.GetRangeByNumber(row, 6).SetValue(`${item.name}`);
      // 描述
      oSheet.GetRangeByNumber(row, 7).SetValue(`${item.name}, ${item.specification}, ${item.description}`);
      // 单价
      oSheet.GetRangeByNumber(row, 12).SetNumberFormat("_(￥* #,##0.00_)");
      oSheet.GetRangeByNumber(row, 12).SetValue(item.price);
      // 单位
      oSheet.GetRangeByNumber(row, 13).SetValue(item.unit);
      // 年度议价
      oSheet.GetRangeByNumber(row, 16).SetNumberFormat("_(￥* #,##0.00_)");
      oSheet.GetRangeByNumber(row, 16).SetValue(`=M${row + 1} * O${row + 1} * P${row + 1}`);
      // 总价
      oSheet.GetRangeByNumber(row, 18).SetNumberFormat("_(￥* #,##0.00_)");
      oSheet.GetRangeByNumber(row, 18).SetValue(`=M${row + 1} * O${row + 1} *  P${row + 1}`);
      // Item No.
      oSheet.GetRangeByNumber(row, 19).SetValue(`Item No. ${item.item_no}`);
      // Select Next Row
      oSheet.GetRangeByNumber(row + 1, 6).Select();
      console.log("[cmd-input]cmd DONE");
      localStorage.setItem('current_cell_row', row);
    }, false, true, function(res, error) {
      console.debug("cell fill done.", res, error, this, localStorage);
    });

    // window.dispatchEvent(new KeyboardEvent('keydown', {'key':'a'} ));
    // window.dispatchEvent(new KeyboardEvent('keyup', {'key':'a'} ));
    // window.Asc.plugin.executeMethod("InputText", [item.name, window.Asc.plugin.currentText]);
    window.Asc.plugin.getInputHelper().unShow();
  };

  window.Asc.plugin.event_onInputHelperClear = function () {
    console.log("[event]onInputHelperClear...");
    keys_set.clear();
    window.Asc.plugin.currentText = "";
    window.Asc.plugin.getInputHelper().unShow();
  };

  window.Asc.plugin.event_onInputHelperInput = function (data) {
    console.debug("[event]onInputHelperInput:", data, data.add);
    if (data.add)
      window.Asc.plugin.currentText += data.text;
    else
      window.Asc.plugin.currentText = data.text;

    // FIXME: May Cause File Save & Co-Editing Issues.
    // this.callCommand(function () {
    //     let oSheet = Api.GetActiveSheet();
    //     let oCell = oSheet.GetActiveCell();
    //     console.log('[cmd]cell:', oCell);
    //     let row = oCell.GetRow();
    //     let col = oCell.GetCol();
    //     let oValue= oCell.GetValue();
    //     // localStorage.setItem('current_cell_row', row);
    //     // localStorage.setItem('current_cell_col', col);
    //     // localStorage.setItem('current_cell_value', oValue);
    //     // console.log('[cmd]cell position:', row, col, '|', oText, ',', oValue);
    //   }, false, false,
    //   function (result, error) {
    //     // current_col = localStorage.getItem('current_cell_col');
    //     // console.log("[in-callback]localStorage:", localStorage);
    //     console.log("[in-callback]Current Col:", current_col, current_cell);
    //     console.log("[in-callback]result:", result, error, this);
    //   }
    // );
    // console.log("Current Col:", current_col, current_cell, localStorage);
    //

    // correct by space
    // var lastIndexSpace = window.Asc.plugin.currentText.lastIndexOf(" ");
    // if (lastIndexSpace >= 0) {
    //   if (lastIndexSpace == (window.Asc.plugin.currentText.length - 1))
    //     window.Asc.plugin.currentText = "";
    //   else
    //     window.Asc.plugin.currentText = window.Asc.plugin.currentText.substr(lastIndexSpace + 1);
    // }

    // if (window.Asc.plugin.currentText.length < 2) {
    //   window.Asc.plugin.getInputHelper().unShow();
    //   return;
    // }

    let variants = window.getAutoComplete(window.Asc.plugin.currentText);
    console.log('variants:', variants);
    if (variants.length <= 0) {
      window.Asc.plugin.getInputHelper().unShow();
    } else {
      let items = [];
      for (let i in variants) {
        const item = variants[i];
        items.push({
          id: item.id,
          text: `${item.id}. ${item.name}${item.alias.length > 0 ? "(" + item.alias + ")" : ""}, ${item.desc} ,<b style="color:red;">￥${item.price}</b>`
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
    text.split(" ").map(t => {
      if (t.length < 1) return;
      for (let key of keys_set) {
        if (t.includes(key)) keys_set.delete(key);
      }
      keys_set.add(t);
    });
    console.debug("_keys_set:", text, "|", keys_set);
    // chrome.storage.local.get(['client'], function(result) {
    //   console.log('Value currently is ', result);
    //   client = result.client;
    // });
    // let client_id = localStorage.getItem('client_id');
    // switch (client_id) {
    //   case '1':
    //     data = data_calsberg;
    //     break;
    //   case '2':
    //     data = data_pepsi;
    //     break;
    // }
    // console.log("current data:", data);

    window.isAutoCompleteReady = true;

    const ret = [];

    data.map(item => {
      item.hit_count = 0;
      item.is_target = false;
      item.is_missed = false;
      let search_string = item.name + (item.alias || "") + (item.desc || "");
      // console.debug("search_string:", search_string);
      for (let key of keys_set) {
        if (search_string.includes(key)
          || item.item_no.includes(key)) {
          item.hit_count++;
          item.is_target = true;
        } else {
          item.is_missed = true;
        }
      }
      if ((item.is_target && !item.is_missed)
        || (item.hit_count >= Math.floor(keys_set.size / 2) && item.hit_count >= 1)) {
        ret.push(item);
      }
    });

    return ret;
  };
})(window, undefined);
