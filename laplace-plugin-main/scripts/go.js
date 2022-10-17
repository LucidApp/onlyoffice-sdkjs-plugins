/**
 * Laplace Plugin Main v0.10.5
 */

let _isSupplierTable = false;
let _isBudgetTable = false;
let budget_mode = false;
let can_show_input_helper = true;
let in_action = false;

(function (window, undefined) {
  let data = [];
  let search_data = [];
  let client;

  const calsberg_keyword = ["嘉士伯", "calsberg"];
  const pepsi_keywords = ["百事", "pepsi"];
  const dingjin_keywords = ["顶津", "dingjing", "康水"];
  const dingyi_keywords = ["顶益", "dingyi", "康面"];
  const jinglongyu_keywords = ["金龙鱼", "jinglongyu"];

  const parseCsv = csv => {
    let lines = csv.split("\n");
    const header = lines[0].split(",");
    lines.shift(); // get rid of definitions
    return lines.map(line => {
      const bits = line.split(",");
      let obj = {};
      header.forEach((h, i) => obj[h] = bits[i]); // or use reduce here
      return obj;
    });
  };

  // 供应商支持
  const data_supplier_build = parseCsv(csv_data_supplier_lpi_build);
  const data_supplier_device = parseCsv(csv_data_supplier_lpi_device);
  const data_supplier_output = parseCsv(csv_data_supplier_lpi_output);
  const data_supplier_wood = parseCsv(csv_data_supplier_lpi_wood_making);
  let data_supplier = [];
  // const data_supplier = [
  //   ...new Set(
  //     [
  //       ...data_supplier_build,
  //       ...data_supplier_device,
  //       ...data_supplier_output,
  //       ...data_supplier_wood,
  //     ],
  //   ),
  // ];

  const supplier_flag = ["供应商", "supplier"];
  const supplier_cate_build_kws = ["搭建", "build"];
  const supplier_cate_device_kws = ["设备", "build"];
  const supplier_cate_output_kws = ["输出", "build"];
  const supplier_cate_wood_kws = ["木制作", "制作", "wood"];
  const supplier_corp_dict = [
    // 木制作 wood
    {
      "id": "wood_1",
      "no": "1",
      "category": "wood making",
      "name": "叁肆玖",
      "price_tag": "349",
      "keywords": ["叁肆玖", "349"],
    },
    {
      "id": "wood_2",
      "no": "2",
      "category": "wood making",
      "name": "卓历尚行 常规品质",
      "price_tag": "zlsx_normal",
      "keywords": ["卓历尚行", "常规品质"],
    },
    {
      "id": "wood_2h",
      "no": "2h",
      "category": "wood making",
      "name": "卓历尚行 高品质",
      "price_tag": "zlsx_high",
      "keywords": ["卓历尚行", "高品质"],
    },
    // 搭建类 build
    {
      "id": "build_1",
      "no": "1",
      "category": "build",
      "name": "桔子",
      "price_tag": "juzi",
      "keywords": ["桔子", "orange", "juzi"],
    },
    {
      "id": "build_2",
      "no": "2",
      "category": "build",
      "name": "孙国江",
      "price_tag": "sunguojiang",
      "keywords": ["孙国江", "guojiang", "sunguojiang"],
    },
    {
      "id": "build_3",
      "no": "3",
      "category": "build",
      "name": "昊诚文化",
      "price_tag": "haocheng",
      "keywords": ["昊诚", "haocheng"],
    },
    // 设备类 device
    {
      "id": "device_1",
      "no": "1",
      "category": "device",
      "name": "鼎呈",
      "price_tag": "dingcheng",
      "keywords": ["鼎呈", "dingcheng"],
    },
    {
      "id": "device_2",
      "no": "2",
      "category": "device",
      "name": "野牛",
      "price_tag": "yeniu",
      "keywords": ["野牛", "yeniu"],
    },
    {
      "id": "device_3",
      "no": "3",
      "category": "device",
      "name": "声准",
      "price_tag": "shengzhun",
      "keywords": ["声准", "shengzhun"],
    },
    {
      "id": "device_4",
      "no": "4",
      "category": "device",
      "name": "梵点",
      "price_tag": "fandian",
      "keywords": ["梵点", "fandian"],
    },
    {
      "id": "device_5",
      "no": "5",
      "category": "device",
      "name": "昊诚文化",
      "price_tag": "haocheng",
      "keywords": ["昊诚", "haocheng"],
    },
    // 输出类 output
    {
      "id": "output_1",
      "no": "1",
      "category": "output",
      "name": "协同",
      "price_tag": "xietong",
      "keywords": ["协同", "xietong"],
    },
    {
      "id": "output_2",
      "no": "2",
      "category": "output",
      "name": "真彩",
      "price_tag": "zhencai",
      "keywords": ["真彩", "zhencai"],
    },
    {
      "id": "output_3",
      "no": "3",
      "category": "output",
      "name": "美港",
      "price_tag": "meigang",
      "keywords": ["美港", "meigang"],
    },
  ];

  // FIXME: supplier
  let supplier_category;
  let supplier_corp = supplier_corp_dict[0];

  // 预算支持
  const budget_flag = ["预算", "budget"];

  let keys_set = new Set();

  // console.log("[go]START!", window.location.pathname, window.location.href, window.location);

  window.isInit = false;

  window.Asc.plugin.init = function (text) {
    console.log("[auto]plugin init");
    if (!window.isInit) {
      window.isInit = true;
      localStorage.clear();

      this.executeMethod("GetAllContentControls", [], function (obj) {
        console.debug("[method]GetAllContentControls: ", obj);
      });

      window.Asc.plugin.currentText = "";
      window.Asc.plugin.currentContentControl = null;
      window.Asc.plugin.createInputHelper();
      window.Asc.plugin.getInputHelper().createWindow();
      console.log("[auto]window init", window.Asc.plugin.info);

      const {documentTitle} = window.Asc.plugin.info;

      if (budget_flag.some(kw => documentTitle.includes(kw))) {
        _isBudgetTable = true;
        client = null;
      }

      if (supplier_flag.some(kw => documentTitle.includes(kw))) {
        _isSupplierTable = true;
        client = null;
      }

      if (!_isSupplierTable) {
        if (pepsi_keywords.some(kw => documentTitle.includes(kw))) client = "pepsi";
        else if (calsberg_keyword.some(kw => documentTitle.includes(kw))) client = "calsberg";
        else if (dingjin_keywords.some(kw => documentTitle.includes(kw))) client = "dingjin";
        else if (dingyi_keywords.some(kw => documentTitle.includes(kw))) client = "dingyi";
        // else client = "calsberg";
        switch (client) {
          case "calsberg":
            const data_calsberg = parseCsv(csv_data_calsberg);
            data_calsberg.map(item => {
              item.id = item.item_no;
            });
            data = data_calsberg;
            break;
          case "pepsi":
            const data_pepsi = parseCsv(csv_data_pepsi);
            data_pepsi.map(item => {
              // item.id = parseInt(item.no);
              item.id = item.item_no;
            });
            data = data_pepsi;
            break;
          case "dingjin":
            const data_dingjin = parseCsv(csv_data_dingjin);
            data_dingjin.map(item => {
              // item.id = parseInt(item.no);
              item.id = item.item_no;
            });
            data = data_dingjin;
            break;
          case "dingyi":
            const data_dingyi = parseCsv(csv_data_dingyi);
            data_dingyi.map(item => {
              // item.id = parseInt(item.no);
              item.id = item.item_no;
            });
            data = data_dingyi;
            break;
          case "jinlongyu":
          default:
            break;
        }
      } else {
        // supplier category
        if (supplier_wood_keywords.some(kw => documentTitle.includes(kw))) supplier_category = "wood";
        switch (supplier_category) {
          case "wood":
            data_supplier_wood.map(item => {
              item.id = item.item_no;
            });
            data = data_supplier_wood;
            break;
          default:
            break;
        }

        // supplier corp
        // FIXME: with issues
        supplier_corp_dict.map(corp => {
          if (corp["keywords"].some(kw => documentTitle.includes(kw))) {
            supplier_corp = corp;
            return true;
          }
        });
      }

      console.log("csv data:", documentTitle, data);
    }

    // if (!in_action) {
    //   in_action = true;
    // getCurrentCursor(true);
    // }

    // FIXME: temporary test
    // search_data = data;
    // can_show_input_helper = true;
  };

  window.Asc.plugin.button = function (id) {
    // FIXME: this.executeCommand("close", "");
  };

  // window.Asc.plugin.onCommandCallback = function (result) {
  //   console.log("[callback]Current Col:", current_col, current_cell);
  //   console.log("[callback]result:", result);
  // };

  // window.Asc.plugin.event_onTargetPositionChanged = function () {
  //   console.debug("[event]onTargetPositionChanged:", this);
    // getCurrentCursor(false);
    // window.Asc.plugin.executeMethod("AddContentControl", [4, {
    //   "Tag": "{tag}",
    //   "Id": 0,
    //   "Lock": 3,
    //   "InternalId": "1_713"
    // }], function (obj) {
    //   console.debug("[onMethodReturn]", obj, window.Asc.plugin.info);
    // });
    // window.Asc.plugin.executeMethod("GetAllContentControls", [], function(obj) {
    //   console.debug("[event]GetAllContentControls:", obj);
    // });
    // window.Asc.plugin.executeMethod("GetCurrentContentControl", [], function(obj) {
    //   console.debug("[event]GetCurrentContentControl:", obj);
    // });
    // window.Asc.plugin.executeMethod("GetCurrentContentControlPr", ["text"], function(obj){
    //   console.debug("[event]GetCurrentContentControlPr:", obj);
    //   window.Asc.plugin.currentContentControl = obj;
    //   console.debug("[event]GetCurrentContentControlPr DATA:", window.Asc, window.Asc.plugin)
    // });
  // };

  // window.Asc.plugin.onEnableMouseEvent = function (isEnabled) {
  //   console.debug("[event]onEnableMouseEvent:", isEnabled);
  //   var _frames = document.getElementsByTagName("iframe");
  //   if (_frames && _frames[0]) {
  //     _frames[0].style.pointerEvents = isEnabled ? "none" : "";
  //   }
  // };
  //
  // window.Asc.plugin.event_onClick = function (isSelectionUse) {
  //   console.debug("[---event]event_onClick:", isSelectionUse);
  //   window.Asc.plugin.executeMethod("GetCurrentContentControlPr", [], function (obj) {
  //     console.debug("[event]event_onClick GetCurrentContentControlPr:", obj);
  //     window.Asc.plugin.currentContentControl = obj;
  //     var controlTag = obj ? obj.Tag : "";
  //     if (isSelectionUse)
  //       controlTag = "";
  //   });
  // };

  window.Asc.plugin.inputHelper_onSelectItem = function (t) {
    if (!t) return;
    const item = search_data.map(i => i).find(i => i.id === t.id || i.item_no === t.id);
    console.log("[auto]inputHelper_onSelectItem", t, item);
    item.price = getItemPrice(item);
    Asc.scope.item = item;

    if (!_isSupplierTable && !budget_mode) {
      switch (client) {
        case "pepsi":
          /**
           * Auto Fill Pepsi Data
           */
          this.callCommand(function () {
            const oSheet = Api.GetActiveSheet();
            const oCell = oSheet.GetActiveCell();
            const item = Asc.scope.item;
            let row = oCell.GetRow();
            let col = oCell.GetCol();
            // 标准名
            oSheet.GetRangeByNumber(row, 5).SetValue(`${item.name}`);
            // 代码
            oSheet.GetRangeByNumber(row, 6).SetValue(`${item.code}`);
            // Item No.
            oSheet.GetRangeByNumber(row, 7).SetValue(`${item.item_no}`);
            // 项目
            oSheet.GetRangeByNumber(row, 8).SetValue(`${item.specification}`);
            // 材料说明
            oSheet.GetRangeByNumber(row, 9).SetValue(`${item.description}`);
            // 单价
            oSheet.GetRangeByNumber(row, 14).SetNumberFormat("_(￥* #,##0.00_)");
            oSheet.GetRangeByNumber(row, 14).SetValue(item.price);
            // 单位
            oSheet.GetRangeByNumber(row, 15).SetValue(item.unit);
            // 总价
            oSheet.GetRangeByNumber(row, 19).SetNumberFormat("_(￥* #,##0.00_)");
            oSheet.GetRangeByNumber(row, 19).SetValue(`=N${row + 1} * O${row + 1} * S${row + 1}`);
            // Select Next Row
            oSheet.GetRangeByNumber(row + 1, 5).Select();
            console.log("[cmd-input]pepsi DONE");
          }, false, true);
          break;

        case "calsberg":
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
            // oSheet.GetRangeByNumber(row, 19).SetValue(`Item No. ${item.item_no}`);
            oSheet.GetRangeByNumber(row, 19).SetValue(`${item.item_no}`);
            // Select Next Row
            // oSheet.GetRangeByNumber(row + 1, 6).Select();
            Api.Save();
            console.log("[cmd-input]cmd DONE");
            // localStorage.setItem('current_cell_row', row);
            // localStorage.setItem('current_cell_col', col);
          }, false, true, function (res, error) {
            console.debug("cell fill done.", res, error, this, localStorage);
          });
          break;

        case "dingjin":
          /**
           * Auto Fill Dingjin Data
           */
          this.callCommand(function () {
            const oSheet = Api.GetActiveSheet();
            const oCell = oSheet.GetActiveCell();
            const item = Asc.scope.item;
            let row = oCell.GetRow();
            let col = oCell.GetCol();
            console.log("[cmd-input]cell:", oCell, row, col);
            console.log("[cmd-input]item:", item);
            // Item No.
            // oSheet.GetRangeByNumber(row, 0).SetValue(`${item.item_no}`);
            // 标准名
            oSheet.GetRangeByNumber(row, 3).SetValue(`${item.name}`);
            // 材料
            oSheet.GetRangeByNumber(row, 4).SetValue(`${item.specification}`);
            // 单位
            oSheet.GetRangeByNumber(row, 10).SetValue(item.unit);
            // 单价
            oSheet.GetRangeByNumber(row, 13).SetNumberFormat("_(￥* #,##0.00_)");
            oSheet.GetRangeByNumber(row, 13).SetValue(item.price);
            // 总价 - 年度议价
            oSheet.GetRangeByNumber(row, 15).SetNumberFormat("_(￥* #,##0.00_)");
            oSheet.GetRangeByNumber(row, 15).SetValue(`=I${row + 1} * J${row + 1} * L${row + 1} * N${row + 1}`);
            // 备注
            // oSheet.GetRangeByNumber(row, 16).SetValue(`${item.description}`);
            console.log("[cmd-input]cmd DONE");
            // localStorage.setItem('current_cell_row', row);
          }, false, true, function (res, error) {
            console.debug("cell fill done.", res, error, this, localStorage);
          });
          break;

        case "dingyi":
          /**
           * Auto Fill Dingyi Data
           */
          this.callCommand(function () {
            const oSheet = Api.GetActiveSheet();
            const oCell = oSheet.GetActiveCell();
            const item = Asc.scope.item;
            let row = oCell.GetRow();
            let col = oCell.GetCol();
            console.log("[cmd-input]cell:", oCell, row, col);
            console.log("[cmd-input]item:", item);
            // Item No.
            // oSheet.GetRangeByNumber(row, 1).SetValue(`${item.item_no}`);
            // 标准名
            oSheet.GetRangeByNumber(row, 5).SetValue(`${item.name}`);
            // 材质
            oSheet.GetRangeByNumber(row, 6).SetValue(`${item.specification}`);
            // 单位
            oSheet.GetRangeByNumber(row, 12).SetValue(item.unit);
            // 单价
            oSheet.GetRangeByNumber(row, 14).SetNumberFormat("_(￥* #,##0.00_)");
            oSheet.GetRangeByNumber(row, 14).SetValue(item.price);
            // 总价 - 年度议价
            oSheet.GetRangeByNumber(row, 15).SetNumberFormat("_(￥* #,##0.00_)");
            oSheet.GetRangeByNumber(row, 15).SetValue(`=K${row + 1} * L${row + 1} * N${row + 1} * O${row + 1}`);
            // 备注
            // oSheet.GetRangeByNumber(row, 16).SetValue(`${item.description}`);
            console.log("[cmd-input]cmd DONE");
            // localStorage.setItem('current_cell_row', row);
          }, false, true, function (res, error) {
            console.debug("cell fill done.", res, error, this, localStorage);
          });
          break;
      }
    } else if (_isSupplierTable) {
      if (supplier_category === "wood") {
        /**
         * Auto Fill Supplier Wood Making Data
         */
        // TODO:
        this.callCommand(function () {
          const oSheet = Api.GetActiveSheet();
          const oCell = oSheet.GetActiveCell();
          const item = Asc.scope.item;
          let row = oCell.GetRow();
          let col = oCell.GetCol();
          // 标准名
          oSheet.GetRangeByNumber(row, 3).SetValue(`${item.name}`);
          // 材料说明
          oSheet.GetRangeByNumber(row, 4).SetValue(`${item.specification}`);
          // 单位
          oSheet.GetRangeByNumber(row, 9).SetValue(item.unit);
          // 单价
          oSheet.GetRangeByNumber(row, 12).SetNumberFormat("_(￥* #,##0.00_)");
          oSheet.GetRangeByNumber(row, 12).SetValue(item.price);
          // 总价
          oSheet.GetRangeByNumber(row, 13).SetNumberFormat("_(￥* #,##0.00_)");
          oSheet.GetRangeByNumber(row, 13).SetValue(`=I${row + 1} * K${row + 1} * M${row + 1}`);
          // Select Next Row
          console.log("[cmd-input]supplier-wood DONE");
        }, false, true);
      }
    } else if (budget_mode) {
      /**
       * Auto Fill Supplier Wood Making Data
       */
      // TODO:
      this.callCommand(function () {
        const oSheet = Api.GetActiveSheet();
        const hRow = oSheet.GetRows(2);
        console.debug("budget hRow Values:", hRow.GetValue(), hRow.GetValue2());
        const oCell = oSheet.ActiveCell;
        const item = Asc.scope.item;
        console.debug("[cmd-input]cell:", oCell);
        let row = oCell.GetRow();
        let col = oCell.GetCol();
        // 标准名
        oSheet.GetRangeByNumber(row, col).SetValue(`${item.name}`);
        // 物料编码
        oSheet.GetRangeByNumber(row, col + 1).SetValue(`${item.item_no}`);
        // 材料说明
        oSheet.GetRangeByNumber(row, col + 2).SetValue(`${item.specification}`);
        // 单位
        oSheet.GetRangeByNumber(row, col + 8).SetValue(item.unit);
        // 单价
        oSheet.GetRangeByNumber(row, col + 10).SetNumberFormat("_(￥* #,##0.00_)");
        oSheet.GetRangeByNumber(row, col + 10).SetValue(item.price);
        // 供应商
        // oSheet.GetRangeByNumber(row, col + 16).SetValue(supplier_corp['name']);
        // 总价
        const totalCell = oSheet.GetRangeByNumber(row, col + 11);
        // not work in plugins
        // const colorBgGreen = Api.CreateRGBColor(99, 190, 123);
        // const colorBgYellow = Api.CreateRGBColor(255, 235, 132);
        // const colorBgRed = Api.CreateRGBColor(248, 105, 107);
        // const fillGreen = Api.CreateSolidFill(colorBgGreen);
        // const fillYellow = Api.CreateSolidFill(colorBgYellow);
        // const fillRed = Api.CreateSolidFill(colorBgRed);
        // const sClassType = oFill.GetClassType();
        // totalCell.SetFillColor(colorBgGreen);
        totalCell.SetNumberFormat("_(￥* #,##0.00_)");
        totalCell.SetValue(`=AE${row + 1} * AG${row + 1} * AH${row + 1}`);
        console.log("[cmd-input]budget-fill DONE");
      }, false, true, function (res, error) {
        in_action = false;
      });
    }

    // window.dispatchEvent(new KeyboardEvent('keydown', {'key':'a'} ));
    // window.dispatchEvent(new KeyboardEvent('keyup', {'key':'a'} ));
    inputReset();
    // window.Asc.plugin.info.recalculate = true;
    // window.Asc.plugin.executeMethod("InputText", [item.name, window.Asc.plugin.currentText]);
    // window.Asc.plugin.getInputHelper().unShow();
  };

  window.Asc.plugin.event_onInputHelperClear = function () {
    // console.log("[event]onInputHelperClear...", keys_set, localStorage, this);
    promiseCursor(false);
    if (isCursorMoved()) {
      inputReset();
    }
  };

  window.Asc.plugin.event_onInputHelperInput = async function (obj) {
    console.debug("[event]onInputHelperInput:", client, "|", supplier_corp);
    console.debug("[event]onInputHelperInput:", obj, obj.add, data);
    if (!client && !supplier_corp) return;

    await promiseCursor(false);
    // .then(() => {
    if (!can_show_input_helper) {
      console.debug('can not show inputHelper cause not in search column');
      window.Asc.plugin.getInputHelper().unShow();
      return;
    }

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

    let variants = window.getAutoCompleteBase(window.Asc.plugin.currentText);
    console.log('variants:', variants);
    if (variants.length <= 0) {
      window.Asc.plugin.getInputHelper().unShow();
    } else {
      let items = [];
      for (let i in variants) {
        const item = variants[i];
        items.push({
          id: item.item_no || item.id,
          text: `${item.item_no}. ${item.name}${item.alias && item.alias.length > 0 ? "(" + item.alias + ")" : ""}, ${item.desc} ,<b style="color:red;">￥${getItemPrice(item)}</b>`,
        });
      }

      window.Asc.plugin.getInputHelper().setItems(items);
      let _sizes = getInputHelperSize();
      console.log("[auto]inputHelper SHOW");
      window.Asc.plugin.getInputHelper().show(_sizes.w, _sizes.h, false);
    }
    // });
  };

  const promiseCursor = async (isCalc) => {
    return await new Promise((resolve) => {
      window.Asc.plugin.callCommand(function () {
          let oSheet = Api.GetActiveSheet();
          let oCell = oSheet.GetActiveCell();
          let row = oCell.GetRow();
          let col = oCell.GetCol();
          // let oValue= oCell.GetValue();
          localStorage.setItem('next_cell_row', row);
          localStorage.setItem('next_cell_col', col);

          let hasBudgetCols =
            localStorage.getItem('budget_category_col')?.length > 0 &&
            localStorage.getItem('budget_supplier_col')?.length > 0 &&
            localStorage.getItem('budget_search_col')?.length > 0;
          if (!hasBudgetCols) {
            let isBudgetMode = false;
            let oHeaderRange = oSheet.GetRange("A1:AQ3");
            oHeaderRange.ForEach((range) => {
              const sVal = range.GetValue();
              const sRow = range.GetRow();
              const sCol = range.GetCol();
              if (sVal.includes('成本预算')) {
                localStorage.setItem('budget_area_col', sCol);
              }
              if (sCol >= localStorage.getItem('budget_area_col') &&
                (sVal.includes('类别') || sVal.includes('分类'))) {
                localStorage.setItem('budget_category_col', sCol);
              }
              if (sCol >= localStorage.getItem('budget_area_col') &&
                sVal.includes('供应商')) {
                localStorage.setItem('budget_supplier_col', sCol);
              }
              if (sCol >= localStorage.getItem('budget_area_col') &&
                (sVal.includes('搜索') || sVal.includes('标准名'))) {
                localStorage.setItem('budget_search_col', sCol);
              }
              console.debug("oHeader:", sVal, sCol);
            })
          }

          const cateCol = parseInt(localStorage.getItem('budget_category_col'));
          const cateVal = oSheet.GetRangeByNumber(row, cateCol).GetValue();
          localStorage.setItem('budget_category', cateVal);

          const supCol = parseInt(localStorage.getItem('budget_supplier_col'));
          const supVal = oSheet.GetRangeByNumber(row, supCol).GetValue();
          localStorage.setItem('budget_supplier', supVal);
          // localStorage.setItem('current_cell_value', oValue);
          console.debug('[cmd]cell position:', row, col);
        }, false, isCalc, () => {
          console.log("[in-callback]localStorage:", localStorage, can_show_input_helper);
          const current_col = localStorage.getItem('cell_col');
          const budget_search_col = localStorage.getItem('budget_search_col');
          const isBudgetMode = (budget_search_col?.length > 0 && parseInt(budget_search_col) > 0);

          if ((current_col === '6' && client === 'calsberg') ||
            (current_col === '5' && client === 'pepsi')) {
            budget_mode = false;
            can_show_input_helper = true;
            search_data = data;
          } else if (isBudgetMode && current_col === budget_search_col) {
            budget_mode = true;
            can_show_input_helper = true;
            const category = localStorage.getItem('budget_category');
            const supplier = localStorage.getItem('budget_supplier');
            if (supplier_cate_build_kws.includes(category)) data_supplier = data_supplier_build;
            else if (supplier_cate_wood_kws.includes(category)) data_supplier = data_supplier_wood;
            else if (supplier_cate_device_kws.includes(category)) data_supplier = data_supplier_device;
            else if (supplier_cate_output_kws.includes(category)) data_supplier = data_supplier_output;
            else can_show_input_helper = false;

            search_data = data_supplier;
            supplier_corp = supplier_corp_dict.find((sup) => sup.keywords.some((k) => supplier.includes(k)));
          } else {
            can_show_input_helper = false;
            console.debug('can not show inputHelper cause not in search column');
            window.Asc.plugin.getInputHelper().unShow();
          }

          isCursorMoved();
          resolve(can_show_input_helper);
        },
      );
    });
  };

  // const promiseCursor = (isCalc) => {
  //   return new Promise((resolve, reject) => {
  //     getCurrentCursor(isCalc);
  //   });
  // };

  const isCursorMoved = async () => {
    let isMoved = false;
    if (localStorage['next_cell_col'] === localStorage['cell_col'] &&
      localStorage['next_cell_row'] === localStorage['cell_row']) {
      // console.debug('[isCursorMoved]cursor not moved');
      return isMoved;
    }
    isMoved = true;
    localStorage.setItem('cell_col', localStorage['next_cell_col']);
    localStorage.setItem('cell_row', localStorage['next_cell_row']);
    keys_set.clear();
    console.warn('[isCursorMoved]cursor moved');
    return isMoved;
  };

  const inputReset = () => {
    keys_set.clear();
    window.Asc.plugin.currentText = "";
    window.Asc.plugin.getInputHelper().unShow();
  };

  // Item Multiple Price Case
  const getItemPrice = item => {
    if (!item) return 0;
    if ((_isSupplierTable || budget_mode) && supplier_corp && supplier_corp["no"]) {
      const item_price_tag = supplier_corp["no"];
      return item[`price_${item_price_tag}`];
    }
    return item["price_1"] || item["price"];
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

    window.isAutoCompleteReady = true;

    const ret = [];

    search_data.map(item => {
      item.hit_count = 0;
      item.is_target = false;
      item.is_missed = false;
      let search_string = item.name + (item.alias || "") + (item.desc || "");
      let search_string_low = search_string.toLowerCase();
      // console.debug("search_string:", search_string);
      for (let key of keys_set) {
        if (search_string_low.includes(key.toLowerCase())
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

  window.getAutoCompleteBase = (text) => {
    // console.debug("base search text:", text, search_data);
    if (search_data?.length <= 0 || text?.length <= 0 || text === "") return [];

    window.isAutoCompleteReady = true;

    const ret = [];

    search_data.map(item => {
      item.hit_count = 0;
      item.is_target = false;
      item.is_missed = false;
      const search_string = item.name + (item.alias || "") + (item.desc || "");
      const search_string_low = search_string.toLowerCase();
      // console.debug("search_string:", search_string);
      if (search_string_low.includes(text.toLowerCase())
        || item.item_no.includes(text)) {
        ret.push(item);
      }
    });

    return ret;
  };
})(window, undefined);
