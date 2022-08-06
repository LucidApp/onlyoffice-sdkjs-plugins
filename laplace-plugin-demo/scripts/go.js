/**
 * Laplace Plugin DEMO v0.7.5d
 */

(function (window, undefined) {
  let data = [];
  let search_data = [];
  let keys_set = new Set();

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

  window.isInit = false;

  window.Asc.plugin.init = function (text) {
    console.log("[auto]plugin init");
    if (!window.isInit) {
      window.isInit = true;

      this.executeMethod("GetAllContentControls", [], function (obj) {
        console.debug("[method]GetAllContentControls: ", obj);
      });

      window.Asc.plugin.currentText = ""
      window.Asc.plugin.currentContentControl = null;
      window.Asc.plugin.createInputHelper();
      window.Asc.plugin.getInputHelper().createWindow();
      console.log("[auto]window init", window.Asc.plugin.info);

      const {documentTitle} = window.Asc.plugin.info;

      const data_demo = parseCsv(csv_data_demo);
      data_demo.map(item => {
        item.id = item.item_no;
      })
      data = data_demo;

      console.log("csv data:", documentTitle, data);
    }
  };

  window.Asc.plugin.button = function (id) {
    // FIXME: this.executeCommand("close", "");
  };

  window.Asc.plugin.onCommandCallback = function (result) {
    console.log("[callback]Current Col:", current_col, current_cell);
  };

  window.Asc.plugin.inputHelper_onSelectItem = function (t) {
    if (!t) return;
    const item = data.map(i => i).find(i => i.id === t.id || i.item_no === t.id);
    Asc.scope.item = item;

    /**
     * Auto Fill Calsberg Data
     */
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
      // oSheet.GetRangeByNumber(row + 1, 6).Select();
      Api.Save();
      console.log("[cmd-input]cmd DONE");
      // localStorage.setItem('current_cell_row', row);
      // localStorage.setItem('current_cell_col', col);
    }, false, true, function (res, error) {
      console.debug("cell fill done.", res, error, this, localStorage);
    });

    inputReset();
  };

  window.Asc.plugin.event_onInputHelperClear = function () {
    inputReset();
  };

  window.Asc.plugin.event_onInputHelperInput = function (obj) {
    if (obj.add)
      window.Asc.plugin.currentText += obj.text;
    else
      window.Asc.plugin.currentText = obj.text;

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
          id: item.item_no || item.id,
          text: `${item.item_no}. ${item.name}${item.alias && item.alias.length > 0 ? "(" + item.alias + ")" : ""}, ${item.desc} ,<b style="color:red;">￥${item.price}</b>`
        });
      }

      window.Asc.plugin.getInputHelper().setItems(items);
      let _sizes = getInputHelperSize();
      console.log("[auto]inputHelper SHOW");
      window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, false);
    }
  };

  const inputReset = () => {
    keys_set.clear();
    window.Asc.plugin.currentText = "";
    window.Asc.plugin.getInputHelper().unShow();
  }

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

    window.isAutoCompleteReady = true;

    const ret = [];

    data.map(item => {
      item.hit_count = 0;
      item.is_target = false;
      item.is_missed = false;
      let search_string = item.name + (item.alias || "") + (item.desc || "");
      let search_string_low = search_string.toLowerCase();
      // console.debug("search_string:", search_string);
      for (let key of keys_set) {
        if (search_string_low.includes(key.toLowerCase())) {
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
