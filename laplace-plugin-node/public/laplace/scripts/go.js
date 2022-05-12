
let data = {};
let current_cell = null;
let current_col = 0;

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
    // Asc.scope.cell = current_cell;
    // Asc.scope.col = 333;
    if (!window.isInit) {
      window.isInit = true;

      window.Asc.plugin.currentText = "";
      window.Asc.plugin.createInputHelper();
      window.Asc.plugin.getInputHelper().createWindow();
      window.Asc.plugin.executeMethod("GetCurrentContentControl");

      console.log("[auto]window init");

      data = parseCsv(csv_data_calsberg);
      data.map(item => {
        item.id = parseInt(item.no);
      })
      console.log("csv data:", data);
    }

    // FIXME: event initial plugin
    //close the plugin (simulate button click)
    // this.button(-1);
  };

  window.Asc.plugin.button = function (id) {
    // FIXME: this.executeCommand("close", "");
  };

  // window.Asc.plugin.onCommandCallback = function(result) {
  //   console.log("[callback]Current Col:", current_col, current_cell);
  //   console.log("[callback]result:", result);
  // };
  //
  // window.Asc.plugin.event_onTargetPositionChanged = function(data) {
  //   window.Asc.plugin.executeMethod("GetCurrentContentControl");
  //   console.log("[event]onTargetPositionChanged:", data, this);
  // };
  //
  // window.Asc.plugin.event_onClick = function(isSelectionUse) {
  //   window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function(obj) {
  //     window.Asc.plugin.currentContentControl = obj;
  //     console.log("[event]onClick:", isSelectionUse, obj, this);
  //   });
  // };
  //
  // window.Asc.plugin.onMethodReturn = function(data) {
  //   console.log("[event]onMethodReturn:", data, this);
  // };

  window.Asc.plugin.inputHelper_onSelectItem = function (t) {
    if (!t) return;
    const item = data.map(i => i).find(i => i.id === t.id);
    console.log("[auto]inputHelper_onSelectItem", t, item);

    Asc.scope.item = item;
    this.callCommand(function (){
      const oSheet = Api.GetActiveSheet();
      const oCell = oSheet.GetActiveCell();
      const item = Asc.scope.item;
      let row = oCell.GetRow();
      let col = oCell.GetCol();
      console.log("[cmd-input]cell:", oCell, row, col);
      console.log("[cmd-input]item:", item);
      oSheet.GetRangeByNumber(row, col).SetValue(`Item No. ${item.no}`);
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
      oSheet.GetRangeByNumber(row, 19).SetValue(`Item No. ${item.no}`);
      console.log("[cmd-input]cmd DONE");
    }, false, true);
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

    // window.Asc.plugin.executeMethod("GetCurrentContentControl", null, function (data) {
    //   console.log("[auto]content_id:", data);
    // });
    //
    // this.callCommand(function() {
    //   let oSheet = Api.GetActiveSheet();
    //   let oCell = oSheet.GetActiveCell();
    //   console.log('[cmd]scope:', Asc.scope);
    //   console.log('[cmd]cell:', oCell);
    //   let row = oCell.GetRow();
    //   let col = oCell.GetCol();
    //   current_cell = oCell;
    //   current_col = col;
    //   console.log('[cmd]cell position:', row, col);
    //   console.log('[cmd]current:', current_cell, current_col);
    //   Asc.scope.cell = oCell;
    //   Asc.scope.col = col;
    //   return oCell;
    // }, false, false,
    //   function (result, error) {
    //     console.log("[in-callback]Current Col:", current_col, current_cell);
    //     console.log("[in-callback]result:", result, error, this);
    //     console.log("[in-callback]scope:", Asc.scope);
    //   }
    // );
    // console.log("Current Col:", current_col, current_cell);

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
          text: `${item.id}. ${item.name}, ${item.specification}, ${item.description} ,￥${item.price}`
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
