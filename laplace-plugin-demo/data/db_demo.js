/**
 * Laplace Data Demo v0.6.3
 */
const csv_data_demo =`category,item_no,name,alias,desc,sub_category_l1,sub_category_l2,sub_category_l3,sub_category,item_name,specification,description,unit,price
Brand Promotion,1,飞行队,,北上...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,北上...,北上...,per person/ day,482.3562928
Brand Promotion,2,飞行队,,北上...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,北上...,北上...,per person/ day,231.2010407
Brand Promotion,3,飞行队,,北上...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,北上...,北上...,per person/ day,284.9217379
Brand Promotion,4,飞行队,,其他...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,其他...,其他...,per person/ day,371.4551906
Brand Promotion,5,飞行队,,其他...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,其他...,其他...,per person/ day,178.205091
Brand Promotion,6,飞行队,,其他...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,其他...,其他...,per person/ day,322.7315575
Brand Promotion,7,飞行队,,二三...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,二三...,二三...,per person/ day,154.5796383
Brand Promotion,8,飞行队,,二三...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,二三...,二三...,per person/ day,479.8141908
Brand Promotion,9,飞行队,,二三...,Event,Event creative and manage fee & Event execution fee,People,Flying team,飞行队,二三...,二三...,per person/ day,40.21366878
Brand Promotion,10,督导,,飞行...,Event,Event creative and manage fee & Event execution fee,People,Flying team,督导,飞行...,飞行...,per person/day,166.9244305
Brand Promotion,11,促销员,,北上...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,促销员,北上...,北上...,per person/ day,62.39987443
Brand Promotion,12,促销员,,北上...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,促销员,北上...,北上...,per person/ day,268.6723876
Brand Promotion,13,促销员,,其他...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,促销员,其他...,其他...,per person/ day,309.8664973
Brand Promotion,14,促销员,,其他...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,促销员,其他...,其他...,per person/day,467.2248826
Brand Promotion,15,促销员,,二三...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,促销员,二三...,二三...,per person/ day,297.6010277
Brand Promotion,16,促销员,,二三...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,促销员,二三...,二三...,per person/day,171.7307246
Brand Promotion,17,礼仪,,北上...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,北上...,北上...,per person/show (4 hours),8.123264383
Brand Promotion,18,礼仪,,北上...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,北上...,北上...,per person/show (4 hours),257.6298333
Brand Promotion,19,礼仪,,北上...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,北上...,北上...,per person/show (4 hours),368.6149812
Brand Promotion,20,礼仪,,省会...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,省会...,省会...,per person/show (4 hours),412.8443714
Brand Promotion,21,礼仪,,省会...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,省会...,省会...,per person/show (4 hours),159.6885347
Brand Promotion,22,礼仪,,省会...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,省会...,省会...,per person/show (4 hours),148.592076
Brand Promotion,23,礼仪,,二三...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,二三...,二三...,per person/show (4 hours),412.1186358
Brand Promotion,24,礼仪,,二三...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,二三...,二三...,per person/show (4 hours),365.8136476
Brand Promotion,25,礼仪,,二三...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,礼仪,二三...,二三...,per person/show (4 hours),291.3914156
Brand Promotion,26,模特,,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台男模特,中籍...,中籍...,per person/show (4 hours),113.7829689
Brand Promotion,27,模特,,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台男模特,中籍...,中籍...,per person/show (4 hours),201.3525497
Brand Promotion,28,模特,,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台男模特,中籍...,中籍...,per person/show (4 hours),290.5836026
Brand Promotion,29,模特,,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台女模特,中籍...,中籍...,per person/show (4 hours),327.8675464
Brand Promotion,30,模特,,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台女模特,中籍...,中籍...,per person/show (4 hours),301.3424704
Brand Promotion,31,模特,,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台女模特,中籍...,中籍...,per person/show (4 hours),280.5771531
Brand Promotion,32,模特,,外籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台男模特,外籍...,外籍...,per person/show (4 hours),81.91349707
Brand Promotion,33,模特,,外籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台男模特,外籍...,外籍...,per person/show (4 hours),220.1937869
Brand Promotion,34,模特,,外籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台男模特,外籍...,外籍...,per person/show (4 hours),356.2892338
Brand Promotion,35,模特,,外籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台女模特,外籍...,外籍...,per person/show (4 hours),185.1341624
Brand Promotion,36,模特,,外籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台女模特,外籍...,外籍...,per person/show (4 hours),352.1168728
Brand Promotion,37,模特,,外籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞台女模特,外籍...,外籍...,per person/show (4 hours),89.33841892
Brand Promotion,38,司仪,主持人,兼职...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,司仪,兼职...,兼职...,per person/show,307.9680702
Brand Promotion,39,司仪,主持人,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,司仪,专业...,专业...,per person/show,364.9122254
Brand Promotion,40,司仪,主持人,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,司仪,普通...,普通...,per person/show,177.354705
Brand Promotion,41,司仪,主持人,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,司仪,专业...,专业...,per person/show,52.62224153
Brand Promotion,42,司仪,主持人,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,司仪,普通...,普通...,per person/show,272.4270604
Brand Promotion,43,DJ,DJ&MC,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,DJ,中籍...,中籍...,per person/show,494.414167
Brand Promotion,44,DJ,DJ&MC,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,DJ,中籍...,中籍...,per person/show,263.4431601
Brand Promotion,45,DJ,DJ&MC,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,DJ,中籍...,中籍...,per person/show,228.1767672
Brand Promotion,46,舞蹈,,当地...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞蹈团队,当地...,当地...,per person/show,391.1149955
Brand Promotion,47,舞蹈,,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞蹈团队,专业...,专业...,per person/show,457.3849778
Brand Promotion,48,舞蹈,,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,舞蹈人员,普通...,普通...,per person/show,365.7561116
Brand Promotion,49,歌手,,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,歌手,专业...,专业...,per person/show,158.8454502
Brand Promotion,50,歌手,,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,歌手,专业...,专业...,per person/show,134.2904985
Brand Promotion,51,歌手,,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,歌手,普通...,普通...,per person/show,23.69961458
Brand Promotion,52,说唱,RAP、RAPPER、摇滚歌手,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,说唱歌手,专业...,专业...,per person/show,464.5618958
Brand Promotion,53,说唱,RAP、RAPPER、摇滚歌手,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,说唱歌手,专业...,专业...,per person/show,260.2032317
Brand Promotion,54,说唱,RAP、RAPPER、摇滚歌手,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,说唱歌手,普通...,普通...,per person/show,433.147715
Brand Promotion,55,乐队,,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,乐队表演,专业...,专业...,per person/show,118.9145846
Brand Promotion,56,乐队,,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,乐队表演,专业...,专业...,per person/show,406.1614926
Brand Promotion,57,乐队,,商演...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,乐队表演,商演...,商演...,per person/show,330.629958
Brand Promotion,58,乐队,,常规...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,乐队表演,常规...,常规...,per person/show,454.2235474
Brand Promotion,59,乐队,,一般...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,爵士乐队,一般...,一般...,per person/show,490.0013416
Brand Promotion,60,乐队,,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,外籍乐队,普通...,普通...,per/show,155.7782273
Brand Promotion,61,乐器表演,大提琴演奏员,含乐...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,大提琴演奏员,含乐...,含乐...,per person/show,197.1094705
Brand Promotion,62,乐器表演,钢琴演奏员,不含...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,钢琴演奏员,不含...,不含...,per person/show,45.79262346
Brand Promotion,63,乐器表演,竖琴表演,1 ...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,竖琴表演,1 ...,1 ...,per person/show,248.2151446
Brand Promotion,64,乐器表演,大小提琴表演、二重奏, 2...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,大小提琴表演, 2..., 2...,per person/show,438.3553104
Brand Promotion,65,乐器表演,民乐演员,表演...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,民乐演员,表演...,表演...,per person/show,5.650168589
Brand Promotion,66,表演,滑板达人,表演...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,滑板达人,表演...,表演...,per person/show,498.1945555
Brand Promotion,67,表演,电音小提琴,表演...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,电音小提琴,表演...,表演...,per person/show,376.9972067
Brand Promotion,68,表演,川剧变脸,表演...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,川剧变脸,表演...,表演...,per person/show,375.9611456
Brand Promotion,69,摄像师,,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,摄像师,普通...,普通...,per person/show,379.6183001
Brand Promotion,70,摄影师,,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,摄影师,普通...,普通...,per person/show,497.9842677
Brand Promotion,71,现场视频剪辑,,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,现场视频剪辑师,专业...,专业...,per person/show,276.1751061
Brand Promotion,72,云直播,,普通...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,照片云直播,普通...,普通...,per person/show,6.396388812
Brand Promotion,73,航拍,,航拍...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,航拍（含操作）,航拍...,航拍...,set,50.72399089
Brand Promotion,74,视频剪辑,,60...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,视频剪辑师,60...,60...,元/条,189.0610986
Brand Promotion,75,笔译,翻译,中英...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,笔译,中英...,中英...,per thousand word,493.3864318
Brand Promotion,76,项目经理,执行人员,工作...,Event,Event creative and manage fee & Event execution fee,People,Project Manger,项目经理,工作...,工作...,per person/day,368.5889107
Brand Promotion,77,搭建人员（白天）,工人、木工、电工、美工,白天...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,搭建人员费用(木工/电工/美工),白天...,白天...,per person/day,159.5491655
Brand Promotion,78,搭建人员（夜间）,工人、木工、电工、美工,夜间...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,搭建人员费用(木工/电工/美工),夜间...,夜间...,per person/day,341.63904
Brand Promotion,79,制作工作,,工厂...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,工厂制作工人,工厂...,工厂...,per person/day,165.8039608
Brand Promotion,80,焊工,,焊工...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,焊工,焊工...,焊工...,per person/day,467.4100263
Brand Promotion,81,漆工,油漆工,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,油漆工,专业...,专业...,per person/day,458.0050763
Brand Promotion,82,守夜人员,,负责...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,守夜人员,负责...,负责...,per person/day,136.6679131
Brand Promotion,83,保洁,清洁工,负责...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,保洁,负责...,负责...,per person/day,46.30712572
Brand Promotion,84,AV视频师,屏控,带职...,Event,Event creative and manage fee & Event execution fee,People,Event AV  Personnel,AV视频师,带职...,带职...,per person/day,117.5238532
Brand Promotion,85,调音师,音响师、音控,满足...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,调音师,满足...,满足...,per person/day,318.6496776
Brand Promotion,86,调音师,,国产...,Event,Event creative and manage fee & Event execution fee,People,Professionl tuner,专业调音师,国产...,国产...,per person/day,453.871286
Brand Promotion,87,调音师,,进口...,Event,Event creative and manage fee & Event execution fee,People,Professionl tuner,专业调音师,进口...,进口...,per person/day,366.4684245
Brand Promotion,88,灯光师,,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,灯光师,普通...,普通...,per person/day,208.7646391
Brand Promotion,89,灯光师,,专业...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,灯光师,专业...,专业...,per person/day,267.5955576
Brand Promotion,90,保安,,二三...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,保安-普通保安,二三...,二三...,per person/day,110.0641955
Brand Promotion,91,保安,,北上...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,保安-特保,北上...,北上...,per person/day,102.1890698
Brand Promotion,92,艺人保镖,,普通...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,艺人保镖,普通...,普通...,per person/hour,317.8810752
Brand Promotion,93,造型师,,普通...,Event,Event creative and manage fee & Event execution fee,People,Styling designer,造型师,普通...,普通...,per person/day,178.059503
Brand Promotion,94,化妆师,,非明...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,化妆师,非明...,非明...,per person/day,393.2319391
Brand Promotion,95,发型师,,非明...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,发型师,非明...,非明...,per person/day,285.3835512
Brand Promotion,96,副导演(秀导),,现场...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,副导演(秀导),现场...,现场...,per person/day,186.4050633
Brand Promotion,97,医护人员,护士,护士...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,医护人员,护士...,护士...,人／天,295.2565358
Brand Promotion,98,漫画师,插画师,中籍...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,漫画师,中籍...,中籍...,人/天,225.5970554
Brand Promotion,99,住宿补贴,,北上...,Event,Event creative and manage fee & Event execution fee,People,Travel allowance,住宿补贴,北上...,北上...,per person /per night,181.8856228
Brand Promotion,100,住宿补贴,,省会...,Event,Event creative and manage fee & Event execution fee,People,Travel allowance,住宿补贴,省会...,省会...,per person /per night,8.573193617
Brand Promotion,101,住宿补贴,,二三...,Event,Event creative and manage fee & Event execution fee,People,Travel allowance,住宿补贴,二三...,二三...,per person /per night,147.0950955
Brand Promotion,102,市内交通补贴,车补、交通费,不分...,Event,Event creative and manage fee & Event execution fee,People,Travel allowance,市内交通补贴,不分...,不分...,per person/day,129.7344769
Brand Promotion,103,餐费补贴,餐补、餐费,不分...,Event,Event creative and manage fee & Event execution fee,people,Travel allowance,餐费补贴,不分...,不分...,per person/day,117.4186672
Brand Promotion,104,小面包车/2.5m小货车/4.5m货车/5.2m货车,,60...,Event,Event creative and manage fee & Event execution fee,Logistics,Intracity ,小面包车/2.5m小货车/4.5m货车/5.2m货车,60...,60...,per run,174.780922
Brand Promotion,105,6.8m 货车,,60...,Event,Event creative and manage fee & Event execution fee,Logistics,Intracity ,6.8m 货车,60...,60...,per run,423.6958111
Brand Promotion,106,7.2m 货车,,60...,Event,Event creative and manage fee & Event execution fee,Logistics,Intracity ,7.2m 货车,60...,60...,per run,422.0167834
Brand Promotion,107,8.0m 货车,,60...,Event,Event creative and manage fee & Event execution fee,Logistics,Intracity ,8.0m 货车,60...,60...,per run,106.1168592
Brand Promotion,108,9.6m 货车,,60...,Event,Event creative and manage fee & Event execution fee,Logistics,Intracity ,9.6m 货车,60...,60...,per run,223.2536886
Brand Promotion,109,15m 货车,,60...,Event,Event creative and manage fee & Event execution fee,Logistics,Intracity ,15m 货车,60...,60...,per run,402.9505725
Brand Promotion,110,面包车,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,7座（含）以内面包车,车况...,车况...,车/天,257.8806851
Brand Promotion,111,商务车,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,商务车,车况...,车况...,车/天,435.141661
Brand Promotion,112,小面包车/2.5m小货车/4.5m货车/5.2m货车,,超过...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,小面包车/2.5m小货车/4.5m货车/5.2m货车,超过...,超过...,km,44.8712008
Brand Promotion,113,6.8m 货车,,超过...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,6.8m 货车,超过...,超过...,6.8m size truck,422.8859413
Brand Promotion,114,7.2m 货车,,超过...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,7.2m 货车,超过...,超过...,7.2m size truck,114.9514476
Brand Promotion,115,8.0m 货车,,超过...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,8.0m 货车,超过...,超过...,8.0m size truck,470.3752349
Brand Promotion,116,9.6m 货车,,超过...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,9.6m 货车,超过...,超过...,9.6m size truck,272.1267986
Brand Promotion,117,15m 货车,,超过...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,15m 货车,超过...,超过...,15m size truck,258.3677368
Brand Promotion,118,舞台改装车,舞台车、路演车、小篷车,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,5.2m舞台改装车,车况...,车况...,月/辆,301.6127027
Brand Promotion,119,舞台改装车,舞台车、路演车、小篷车,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,7.6m舞台改装车,车况...,车况...,月/辆,322.3885569
Brand Promotion,120,路演车,舞台车、路演车、小篷车,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,10米长大型路演车,车况...,车况...,月/辆,181.2208193
Brand Promotion,121,车辆使用费、保险费、停车费等,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,2.5m小货车/4.5m货车/5.2m货车,车况...,车况...,月/辆,275.5741824
Brand Promotion,122,车辆使用费、保险费、停车费等,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,6.8m 货车,车况...,车况...,月/辆,210.6508251
Brand Promotion,123,车辆使用费、保险费、停车费等,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,7.2m 货车,车况...,车况...,月/辆,193.193234
Brand Promotion,124,车辆使用费、保险费、停车费等,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,8.0m 货车,车况...,车况...,月/辆,94.45232848
Brand Promotion,125,车辆使用费、保险费、停车费等,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,9.6m 货车,车况...,车况...,月/辆,105.8460015
Brand Promotion,126,车辆使用费、保险费、停车费等,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,13M货车,车况...,车况...,月/辆,447.8028815
Brand Promotion,127,车辆使用费、保险费、停车费等,,车况...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,15M（含）以上货车,车况...,车况...,月/辆,110.8980041
Brand Promotion,128,叉车,场地搭建拆除机械,杭叉...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,场地搭建拆除机械,杭叉...,杭叉...,场,207.1705569
Brand Promotion,129,投影机,投影仪,30...,Event,Event creative and manage fee & Event execution fee,AVL,Video,投影机,30...,30...,set,101.925999
Brand Promotion,130,投影机,投影仪,10...,Event,Event creative and manage fee & Event execution fee,AVL,Video,投影机,10...,10...,set,54.98964354
Brand Promotion,131,投影机,投影仪,20...,Event,Event creative and manage fee & Event execution fee,AVL,Video,投影机,20...,20...,set,44.92302983
Brand Promotion,132,投影幕,幕布、投影布,30...,Event,Event creative and manage fee & Event execution fee,AVL,Video,投影幕,30...,30...,set,91.45873297
Brand Promotion,133,投影幕,幕布、投影布,20...,Event,Event creative and manage fee & Event execution fee,AVL,Video,投影幕,20...,20...,set,3.482363016
Brand Promotion,134,投影幕,幕布、投影布,10...,Event,Event creative and manage fee & Event execution fee,AVL,Video,投影幕,10...,10...,set,484.9567748
Brand Promotion,135,投影幕,幕布、投影布,12...,Event,Event creative and manage fee & Event execution fee,AVL,Video,投影幕,12...,12...,set,143.0444378
Brand Promotion,136,VGA矩阵切换器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA矩阵切换器,国产...,国产...,set,144.2085405
Brand Promotion,137,VGA矩阵切换器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA矩阵切换器,进口...,进口...,set,358.4343501
Brand Promotion,138,VGA/AV分配器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA/AV分配器,国产...,国产...,set,394.5862002
Brand Promotion,139,VGA/AV分配器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA/AV分配器,进口...,进口...,set,276.9230216
Brand Promotion,140,VGA视频分频器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA视频分频器,国产...,国产...,set,218.235383
Brand Promotion,141,VGA视频分频器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA视频分频器,进口...,进口...,set,413.7244015
Brand Promotion,142,VGA/AV切换器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA/AV切换器,国产...,国产...,set,113.6443586
Brand Promotion,143,VGA/AV切换器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Video,VGA/AV切换器,进口...,进口...,set,272.0072872
Brand Promotion,144,PPT翻页器,激光笔、翻页笔、翻页器,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Video,PPT翻页器,国产...,国产...,set,369.4716427
Brand Promotion,145,视频矩阵台,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Video,视频矩阵台,国产...,国产...,set,393.6486055
Brand Promotion,146,视频矩阵台,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Video,视频矩阵台,进口...,进口...,set,55.45392801
Brand Promotion,147,视频无缝切换台,,威泰...,Event,Event creative and manage fee & Event execution fee,AVL,Video,视频无缝切换台,威泰...,威泰...,set,42.35229366
Brand Promotion,148,视频分屏拼接器,,微讯...,Event,Event creative and manage fee & Event execution fee,AVL,Video,视频分屏拼接器,微讯...,微讯...,set,162.5526937
Brand Promotion,149,LED屏,,洲明...,Event,Event creative and manage fee & Event execution fee,AVL,Video,P3/4高清屏50*50,洲明...,洲明...,㎡,261.8099807
Brand Promotion,150,LED屏,,洲明...,Event,Event creative and manage fee & Event execution fee,AVL,Video,P5/6高清屏50*50,洲明...,洲明...,㎡,352.3531568
Brand Promotion,151,冰屏,,美亚...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,冰屏,美亚...,美亚...,平米,145.1588309
Brand Promotion,152,LED支撑背架,,专业...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,LED支撑背架,专业...,专业...,米,150.4419626
Brand Promotion,153,LED支撑背架,,专业...,Event,Event creative and manage fee & Event execution fee,AVL,Video,LED支撑背架,专业...,专业...,m²,26.66398546
Brand Promotion,154,监视器,监控、摄像头,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,监视器,表面...,表面...,台/天,230.6821415
Brand Promotion,155,服务器 AXON OR AKS,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,服务器 AXON OR AKS,表面...,表面...,台/天,483.0529879
Brand Promotion,156,液晶电视,电视,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Video,70寸液晶电视,表面...,表面...,天,497.3219978
Brand Promotion,157,液晶电视,电视,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Video,65寸液晶电视,表面...,表面...,天,286.7214951
Brand Promotion,158,电视机,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Video,电视机,表面...,表面...,项,226.3450108
Brand Promotion,159,液晶电视,电视,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Video,50寸液晶电视,表面...,表面...,天,209.3647844
Brand Promotion,160,液晶电视,电视,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Video,30寸液晶电视,表面...,表面...,天,195.9335365
Brand Promotion,161,拼接电视屏,拼接屏,55...,Event,Event creative and manage fee & Event execution fee,AVL,Video,拼接电视屏,55...,55...,元/台,210.9735472
Brand Promotion,162,HDMI线,HDMI数据线、高清线,2....,Event,Event creative and manage fee & Event execution fee,AVL,Video,数据线,2....,2....,元/条,354.148462
Brand Promotion,163,拼接电视屏背架,背架,根据...,Event,Event creative and manage fee & Event execution fee,Material,Steel,拼接电视屏背架,根据...,根据...,元/个,343.7220615
Brand Promotion,164,全频音箱,音响,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,全频音箱,国产...,国产...,元/只,490.1030914
Brand Promotion,165,全频音箱,音响,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,全频音箱,进口...,进口...,元/只,128.42074
Brand Promotion,166,阵列音箱,线阵,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,线性阵列高/中/低音音箱,国产...,国产...,元/只,275.6361939
Brand Promotion,167,阵列音箱,线阵,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,线性阵列高/中/低音音箱,进口...,进口...,元/只,277.925514
Brand Promotion,168,返送音箱,返听、反听,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,返送音箱,国产...,国产...,元/只,294.0326253
Brand Promotion,169,返送音箱,返听、反听,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,返送音箱,进口...,进口...,元/只,297.1290436
Brand Promotion,170,阵列音箱专用处理器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,线性阵列音箱专用处理器,进口...,进口...,元/台,176.3213695
Brand Promotion,171,阵列音箱吊装,,配套...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,线阵列式音箱吊装架,配套...,配套...,元/个,353.7733425
Brand Promotion,172,调音台,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,调音台,进口...,进口...,元/套,134.3395924
Brand Promotion,173,调音台,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,调音台,进口...,进口...,元/套,52.1254922
Brand Promotion,174,音响控制器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,音响控制器,国产...,国产...,元/台,53.44067711
Brand Promotion,175,音响控制器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,音响控制器,进口...,进口...,元/台,302.5408877
Brand Promotion,176,效果器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,效果器,进口...,进口...,元/台,411.3538856
Brand Promotion,177,信号放大器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,信号放大器,国产...,国产...,元/台,435.1051566
Brand Promotion,178,压缩限辐器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,压缩限辐器,国产...,国产...,元/台,377.1366347
Brand Promotion,179,压缩限辐器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,压缩限辐器,进口...,进口...,元/台,395.0285527
Brand Promotion,180,数字分频处理器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,数字分频处理器,国产...,国产...,元/台,83.5948559
Brand Promotion,181,数字分频处理器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,数字分频处理器,进口...,进口...,元/台,81.82265923
Brand Promotion,182,PS-15处理器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,PS-15处理器,国产...,国产...,元/台,477.8808454
Brand Promotion,183,激励器,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,激励器,国产...,国产...,元/台,47.24076925
Brand Promotion,184,激励器,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,激励器,进口...,进口...,元/台,375.7676996
Brand Promotion,185,功放,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,功率放大器/功放,国产...,国产...,元/台,352.3955028
Brand Promotion,186,功放,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,功率放大器/功放,进口...,进口...,元/台,452.2858966
Brand Promotion,187,无线话筒,无线麦、话筒,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,无线麦克风,进口...,进口...,元/只,313.2966443
Brand Promotion,188,拾音话筒,拾音器,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,拾音话筒,进口...,进口...,元/只,440.2177846
Brand Promotion,189,无线领夹,耳麦,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,无线领夹,进口...,进口...,元/只,15.96213681
Brand Promotion,190,讲台话筒,鹅颈麦、鹅颈话筒,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,讲台/鹅颈麦克风,进口...,进口...,元/只,208.2157019
Brand Promotion,191,DI盒,乐器平衡转换盒,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,乐器平衡转换盒,国产...,国产...,元/台,275.4960029
Brand Promotion,192,DI盒,乐器平衡转换盒,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,乐器平衡转换盒,进口...,进口...,元/台,141.1303953
Brand Promotion,193,硅箱,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,数字硅箱,国产...,国产...,元/台,340.3885216
Brand Promotion,194,功放,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,功率放大器,国产...,国产...,元/台,400.7706674
Brand Promotion,195,功放,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,功率放大器,进口...,进口...,元/台,286.0293997
Brand Promotion,196,鼓话筒,鼓麦,铁三...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,鼓话筒,铁三...,铁三...,元/只,399.5690739
Brand Promotion,197,音频线,,五成...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,音频线,五成...,五成...,元/米,53.76038057
Brand Promotion,198,耳返,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,耳返,国产...,国产...,元/台,298.4623396
Brand Promotion,199,耳返,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,耳返,进口...,进口...,元/台,132.6593638
Brand Promotion,200,拉杆音响,,户外...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,拉杆音响,户外...,户外...,元/台,113.5855358
Brand Promotion,201,同传设备,,进口...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,远红外无线同声传译系统主机,进口...,进口...,set,161.2767358
Brand Promotion,202,同传设备,,进口...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,红外线发射机,进口...,进口...,set,379.9847938
Brand Promotion,203,同传设备,,进口...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,译员机,进口...,进口...,set,305.0188628
Brand Promotion,204,同传设备,,进口...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,红外线辐射板,进口...,进口...,set,455.5584725
Brand Promotion,205,直放电箱,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,直放电箱,表面...,表面...,set,429.4393723
Brand Promotion,206,空开箱,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,空开箱,表面...,表面...,set,86.90019082
Brand Promotion,207,网线,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,网线,表面...,表面...,m,393.4773191
Brand Promotion,208,控制台,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,控制台,表面...,表面...,set,18.24734796
Brand Promotion,209,信号连接线,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,信号连接线,表面...,表面...,m,452.2289124
Brand Promotion,210,主电缆,电缆线,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,主电缆,表面...,表面...,m,130.7290447
Brand Promotion,211,音频转换头,,卡农...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,音频转换头,卡农...,卡农...,个/元,91.11542345
Brand Promotion,212,话筒支架,,轻巧...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,话筒支架,轻巧...,轻巧...,元/个,436.1840065
Brand Promotion,213,笔记本电脑,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,笔记本电脑,表面...,表面...,台,103.7839494
Brand Promotion,214,DJ先锋一体碟机,打碟机,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,DJ先锋一体碟机,表面...,表面...,个,469.4165812
Brand Promotion,215,电缆线,电缆,四芯...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,电缆线,四芯...,四芯...,延米,208.2212172
Brand Promotion,216,电动葫芦、方套,电葫芦,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,电动葫芦、方套,表面...,表面...,套,360.4413612
Brand Promotion,217,DI盒,乐队DI,国产...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,DI盒,国产...,国产...,unit,33.88200918
Brand Promotion,218,鼓麦,,7支...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,鼓麦,7支...,7支...,unit,448.7732395
Brand Promotion,219,架子鼓,,5鼓...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,架子鼓,5鼓...,5鼓...,set,289.8095246
Brand Promotion,220,架子鼓航空箱,,5鼓...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,架子鼓航空箱,5鼓...,5鼓...,set,127.2296256
Brand Promotion,221,键盘架,,X形...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,键盘架,X形...,X形...,unit,290.6375175
Brand Promotion,222,键盘+支架,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,键盘+支架,表面...,表面...,set,255.5219141
Brand Promotion,223,吉他,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,吉他,表面...,表面...,unit,260.7905736
Brand Promotion,224,吉他架,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,吉他架,表面...,表面...,unit,237.252687
Brand Promotion,225,卡农线,,20...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,卡农线,20...,20...,set,327.1043809
Brand Promotion,226,乐器线,,20...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,乐器线,20...,20...,set,335.1016999
Brand Promotion,227,吉他音箱,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,吉他音箱,表面...,表面...,unit,257.8260416
Brand Promotion,228,bass音箱,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,bass音箱,表面...,表面...,unit,498.0972046
Brand Promotion,229,手鼓,,标准...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,手鼓,标准...,标准...,元/个,209.1040245
Brand Promotion,230,贝斯,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Instrument Device,贝斯,表面...,表面...,unit,430.9308357
Brand Promotion,231,探照灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,探照灯,表面...,表面...,unit,17.42599064
Brand Promotion,232,回光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,回光灯,表面...,表面...,unit,88.24589953
Brand Promotion,233,AC灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,AC灯,表面...,表面...,unit,242.0205429
Brand Promotion,234,八眼灯,观众灯,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,八眼灯,表面...,表面...,unit,15.59657103
Brand Promotion,235,聚光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,聚光灯,表面...,表面...,set,410.2918803
Brand Promotion,236,聚光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,聚光灯,表面...,表面...,unit,156.5119574
Brand Promotion,237,成像灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,成像灯,表面...,表面...,set,93.03823465
Brand Promotion,238,成像灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,成像灯,表面...,表面...,set,16.6711814
Brand Promotion,239,追光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,追光灯,表面...,表面...,set,76.26141828
Brand Promotion,240,追光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,追光灯,表面...,表面...,set,321.0583328
Brand Promotion,241,地排灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,地排灯,表面...,表面...,set,111.2862066
Brand Promotion,242,三色基灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,三色基灯,表面...,表面...,set,229.2474469
Brand Promotion,243,三色基灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,三色基灯,表面...,表面...,set,472.4531618
Brand Promotion,244,单色激光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,单色激光灯,表面...,表面...,set,369.7375263
Brand Promotion,245,单色激光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,单色激光灯,表面...,表面...,set,269.3857991
Brand Promotion,246,全色激光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,全色激光灯,表面...,表面...,set,0.208549013
Brand Promotion,247,全色激光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,全色激光灯,表面...,表面...,set,486.9394435
Brand Promotion,248,闪光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,闪光灯,表面...,表面...,set,338.8867653
Brand Promotion,249,闪光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,闪光灯,表面...,表面...,set,467.5421518
Brand Promotion,250,电脑灯,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑灯,国产...,国产...,set,279.9601207
Brand Promotion,251,电脑灯,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑灯,进口...,进口...,set,270.3232527
Brand Promotion,252,电脑灯,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑灯,国产...,国产...,set,141.9618697
Brand Promotion,253,电脑灯,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑灯,进口...,进口...,set,460.6382953
Brand Promotion,254,电脑灯,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑灯,国产...,国产...,set,356.1156317
Brand Promotion,255,电脑灯,,进口...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑灯,进口...,进口...,set,312.6271379
Brand Promotion,256,电脑灯片,logo灯片,Me...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑灯片,Me...,Me...,unit,390.8600778
Brand Promotion,257,频闪灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,频闪灯,表面...,表面...,unit,440.5998453
Brand Promotion,258,观众灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,观众灯,表面...,表面...,unit,25.96963465
Brand Promotion,259,追光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,追光灯,表面...,表面...,unit,145.3040102
Brand Promotion,260,补光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,补光灯（带脚架）,表面...,表面...,set,57.22681001
Brand Promotion,261,线槽,线槽板、压线槽,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,线槽,表面...,表面...,set,446.1225763
Brand Promotion,262,电脑摇头小BEAM,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑摇头小BEAM,表面...,表面...,unit,212.22094
Brand Promotion,263,电脑摇头图案灯,logo灯,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑摇头图案灯,表面...,表面...,unit,341.4414771
Brand Promotion,264,电脑大光束,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑大光束,表面...,表面...,unit,404.4314405
Brand Promotion,265,电缆,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,电缆,表面...,表面...,m,32.08332868
Brand Promotion,266,灯光控制调台,灯控台,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,灯光控制调台,表面...,表面...,unit,263.9652442
Brand Promotion,267,散光灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,散光灯,表面...,表面...,unit,275.8273821
Brand Promotion,268,摇头光束灯,光束灯,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,摇头光束灯,表面...,表面...,set,383.4666215
Brand Promotion,269,摇头光束灯,光束灯,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,摇头光束灯,表面...,表面...,unit,178.8569955
Brand Promotion,270,天幕效果灯,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,天幕效果灯,表面...,表面...,unit,463.8199037
Brand Promotion,271,品牌墙射灯（夜晚）,,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,品牌墙射灯（夜晚）,表面...,表面...,unit,396.4896975
Brand Promotion,272,信号连接线,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,信号连接线,表面...,表面...,unit,117.7373197
Brand Promotion,273,LOGO灯片,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,LOGO灯片,表面...,表面...,unit,125.6694096
Brand Promotion,274,LED PAR灯,帕灯、趴灯,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED PAR灯,表面...,表面...,unit,332.8422225
Brand Promotion,275,LED PAR灯,帕灯、趴灯,表面...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED PAR灯,表面...,表面...,unit,114.6229024
Brand Promotion,276,4眼观众灯,观众灯,80...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,4眼观众灯,80...,80...,unit,38.21624492
Brand Promotion,277,筒灯,,22...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,筒灯,22...,22...,元/个,370.0445812
Brand Promotion,278,灯光架,站灯架、灯架,租赁...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,灯光架,租赁...,租赁...,元/套,448.6706032
Brand Promotion,279,洗墙灯,,户外...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,洗墙灯,户外...,户外...,元/个,150.9438389
Brand Promotion,280,钢木结构舞台,舞台板,舞台...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,钢木结构舞台,舞台...,舞台...,m²,94.11247798
Brand Promotion,281,钢木结构舞台,舞台板,舞台...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,钢木结构舞台,舞台...,舞台...,m²,273.2952774
Brand Promotion,282,发光舞台,,舞台...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,发光舞台,舞台...,舞台...,m²,466.864475
Brand Promotion,283,发光舞台,,舞台...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,发光舞台,舞台...,舞台...,m²,486.0569735
Brand Promotion,284,发光舞台,,舞台...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,发光舞台,舞台...,舞台...,m²,50.29206684
Brand Promotion,285,舞台梯步,梯步,木工...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,舞台梯步,木工...,木工...,元/个（m2),71.98380862
Brand Promotion,286,地毯,,普通...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,地毯,普通...,普通...,m²,338.0397848
Brand Promotion,287,地毯,,中档...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,地毯,中档...,中档...,m²,215.8292761
Brand Promotion,288,地毯,,塑料...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,地毯,塑料...,塑料...,m²,388.5365194
Brand Promotion,289,地毯,,普通...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,地毯,普通...,普通...,m²,281.0819179
Brand Promotion,290,金属桁架,桁架,22...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,租赁搭建（普通）金属桁架,22...,22...,m,317.9215356
Brand Promotion,291,TRUSS架（铝合金）,,60...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,TRUSS架（铝合金）,60...,60...,m,104.3446433
Brand Promotion,292,TRUSS架（铝合金）,,76...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,TRUSS架（铝合金）,76...,76...,m,477.6268544
Brand Promotion,293,TRUSS架（铝合金）,,40...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,TRUSS架（铝合金）,40...,40...,m,235.0800214
Brand Promotion,294,弧形truss架,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Steel,弧形truss架,铝合...,铝合...,套,459.3291536
Brand Promotion,295,弧形truss架,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Steel,弧形truss架,铝合...,铝合...,套,67.90232044
Brand Promotion,296,弧形truss架,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Steel,弧形truss架,铝合...,铝合...,套,267.3177388
Brand Promotion,297,S网架,雷亚架,S网...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,S网架,S网...,S网...,unit,254.1689618
Brand Promotion,298,吊车,,10...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,吊车,10...,10...,次,418.331173
Brand Promotion,299,叉车,,3吨...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,叉车,3吨...,3吨...,次,331.2555499
Brand Promotion,300,铁马,,铁马...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁马,铁马...,铁马...,根,454.880574
Brand Promotion,301,防爆铁马,,表面...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,防爆铁马,表面...,表面...,m,384.8079892
Brand Promotion,302,移动厕所,,表面...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,移动厕所,表面...,表面...,套,474.1961251
Brand Promotion,303,信号缆,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,信号缆,表面...,表面...,m,162.7311271
Brand Promotion,304,雪花机,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,雪花机,表面...,表面...,set,451.4734236
Brand Promotion,305,干冰机,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,干冰机,表面...,表面...,set,28.41014002
Brand Promotion,306,皇家礼炮,,国标...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,皇家礼炮,国标...,国标...,unit,482.4827466
Brand Promotion,307,烟雾机,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,烟雾机,表面...,表面...,set,115.5675047
Brand Promotion,308,泡泡机,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,泡泡机,表面...,表面...,unit,127.8127962
Brand Promotion,309,气柱机,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,气柱机,表面...,表面...,set,277.4452487
Brand Promotion,310,鼓风机,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,鼓风机,表面...,表面...,set,292.7869193
Brand Promotion,311,普通室内烟机,烟机,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,普通室内烟机,表面...,表面...,set,308.037881
Brand Promotion,312,摇臂,,12...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,摇臂,12...,12...,unit,183.5763248
Brand Promotion,313,摄影机,,佳能...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,摄影机,佳能...,佳能...,unit,40.75081652
Brand Promotion,314,彩虹机,,国产...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,彩虹机,国产...,国产...,unit,428.8948729
Brand Promotion,315,室外重型烟机,,30...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,室外重型烟机及薄雾机+风扇,30...,30...,unit,188.4435295
Brand Promotion,316,喷火机,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,喷火机,表面...,表面...,unit,310.7994008
Brand Promotion,317,云朵机,,50...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,云朵机,50...,50...,unit,98.71151053
Brand Promotion,318,IBM桌子,条桌,表面...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,IBM桌子,表面...,表面...,套,225.5673895
Brand Promotion,319,油桶,,氛围...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,油桶,氛围...,氛围...,个,443.5644358
Brand Promotion,320,灭火器,,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,灭火器,表面...,表面...,个,455.4909434
Brand Promotion,321,漏电开关,空开,表面...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,漏电开关,表面...,表面...,个,349.1937285
Brand Promotion,322,普通喷绘,,玉龙...,Event,Event creative and manage fee & Event execution fee,Material,Printing,普通喷绘,玉龙...,玉龙...,㎡,281.2593216
Brand Promotion,323,高精度喷绘,,苏龙...,Event,Event creative and manage fee & Event execution fee,Material,Printing,高精度喷绘,苏龙...,苏龙...,㎡,23.28267185
Brand Promotion,324,苏龙内打灯布,,（高...,Event,Event creative and manage fee & Event execution fee,Material,Printing,苏龙内打灯布,（高...,（高...,㎡,221.7291286
Brand Promotion,325,黑白布,,克重...,Event,Event creative and manage fee & Event execution fee,Material,Printing,黑白布,克重...,克重...,㎡,278.119048
Brand Promotion,326,相纸写真,写真,22...,Event,Event creative and manage fee & Event execution fee,Material,Printing,相纸写真,22...,22...,㎡,393.6219652
Brand Promotion,327,写真灯片,,背喷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,写真灯片,背喷...,背喷...,㎡,101.3278188
Brand Promotion,328,可移背胶写真,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,可移背胶写真,11...,11...,㎡,336.4055477
Brand Promotion,329,单孔透,单透,12...,Event,Event creative and manage fee & Event execution fee,Material,Printing,单孔透,12...,12...,㎡,263.3479504
Brand Promotion,330,透明贴,,12...,Event,Event creative and manage fee & Event execution fee,Material,Printing,透明贴,12...,12...,㎡,249.2293947
Brand Promotion,331,反光材料,,国产...,Event,Event creative and manage fee & Event execution fee,Material,Printing,反光材料,国产...,国产...,㎡,16.67592504
Brand Promotion,332,平板彩喷,UV打印,在任...,Event,Event creative and manage fee & Event execution fee,Material,Printing,平板彩喷,在任...,在任...,㎡,321.9339252
Brand Promotion,333,写真画面,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,写真画面覆纸塑板(单面),11...,11...,㎡,53.36839029
Brand Promotion,334,写真画面,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,写真画面覆3mmPVC板(单面),11...,11...,㎡,365.4405991
Brand Promotion,335,写真画面,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,写真画面覆5mmPVC板(单面),11...,11...,㎡,485.7898613
Brand Promotion,336,写真画面,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,写真画面覆KT板(单面),11...,11...,㎡,494.5002269
Brand Promotion,337,写真画面,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,写真画面覆超卡板(单面),11...,11...,㎡,141.0859258
Brand Promotion,338,写真画面,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,写真画面覆亮板(单面),11...,11...,㎡,205.3307805
Brand Promotion,339,户外写真,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,户外写真画面覆纸塑板(单面),11...,11...,㎡,277.2313652
Brand Promotion,340,户外写真,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,户外写真画面覆5mmPVC板(单面),11...,11...,㎡,189.331502
Brand Promotion,341,户外写真,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,户外写真画面覆超卡板(单面),11...,11...,㎡,119.2339218
Brand Promotion,342,户外写真,,11...,Event,Event creative and manage fee & Event execution fee,Material,Printing,户外写真画面覆亮板(单面),11...,11...,㎡,376.8902795
Brand Promotion,343,堆箱插牌,插卡,8m...,Event,Event creative and manage fee & Event execution fee,Material,Painting,堆箱插牌,8m...,8m...,平方,425.7298261
Brand Promotion,344,车贴,,精喷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,车贴,精喷...,精喷...,㎡,180.3914609
Brand Promotion,345,地贴,,加厚...,Event,Event creative and manage fee & Event execution fee,Material,Painting,地贴,加厚...,加厚...,米,64.21126665
Brand Promotion,346,可移除黑胶车贴,,18...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,可移除黑胶车贴,18...,18...,㎡,236.9789285
Brand Promotion,347,高清画面地贴,,黑底...,Event,Event creative and manage fee & Event execution fee,Material,Font production,高清画面地贴,黑底...,黑底...,㎡,401.8053676
Brand Promotion,348,车贴+斜纹防滑地贴,,精喷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,车贴+斜纹防滑地贴,精喷...,精喷...,㎡,315.8367729
Brand Promotion,349,pvc地胶,,耐磨...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,pvc地胶,耐磨...,耐磨...,平米,298.4427601
Brand Promotion,350,软膜,,白色...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,软膜,白色...,白色...,元/平方,124.0577105
Brand Promotion,351,磨砂帖,,磨砂...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,磨砂帖,磨砂...,磨砂...,元/平方,315.2926004
Brand Promotion,352,UV透明贴,,12...,Event,Event creative and manage fee & Event execution fee,Material,Font production,UV透明贴,12...,12...,㎡,383.441664
Brand Promotion,353,灯箱画面软膜,,户外...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,灯箱画面软膜,户外...,户外...,㎡,89.2886612
Brand Promotion,354,防滑地胶,,PV...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,防滑地胶,PV...,PV...,平方米,341.2452932
Brand Promotion,355,木纹贴纸,,欧风...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,木纹贴纸,欧风...,欧风...,㎡,313.3704377
Brand Promotion,356,波音纸,,威诗...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,波音纸,威诗...,威诗...,元/平方,29.76572158
Brand Promotion,357,丝印条幅,横幅,丝印...,Event,Event creative and manage fee & Event execution fee,Material,Printing,丝印条幅,丝印...,丝印...,米,158.3558682
Brand Promotion,358,丝印条幅,横幅,丝印...,Event,Event creative and manage fee & Event execution fee,Material,Printing,丝印条幅,丝印...,丝印...,米,193.5133859
Brand Promotion,359,旗帜布,,加厚...,Event,Event creative and manage fee & Event execution fee,Material,Printing,旗帜布,加厚...,加厚...,㎡,142.7195299
Brand Promotion,360,丝印LOGO,,单色...,Event,Event creative and manage fee & Event execution fee,Material,Printing,丝印LOGO,单色...,单色...,cm,286.7693819
Brand Promotion,361,刀刮布UV,,PV...,Event,Event creative and manage fee & Event execution fee,Material,Printing,刀刮布UV,PV...,PV...,元/平方,490.8881515
Brand Promotion,362,网格布,,玻璃...,Event,Event creative and manage fee & Event execution fee,Material,Printing,网格布,玻璃...,玻璃...,元/平方,495.4595478
Brand Promotion,363,莱卡布,,纯棉...,Event,Event creative and manage fee & Event execution fee,Material,Printing,莱卡布,纯棉...,纯棉...,元/平方,396.8218212
Brand Promotion,364,烤漆,,木质...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,烤漆,木质...,木质...,㎡,441.2829786
Brand Promotion,365,喷塑,,木质...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,喷塑,木质...,木质...,㎡,300.9132524
Brand Promotion,366,油漆,,木质...,Event,Event creative and manage fee & Event execution fee,Material,Printing,油漆,木质...,木质...,m²,14.26384661
Brand Promotion,367,印刷工艺,,印刷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,印刷工艺,印刷...,印刷...,元/版,243.2585401
Brand Promotion,368,印刷工艺,,印刷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,印刷工艺,印刷...,印刷...,元/刀,180.0752938
Brand Promotion,369,印刷工艺,,印刷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,印刷工艺,印刷...,印刷...,元/线,228.1276868
Brand Promotion,370,印刷工艺,,印刷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,印刷工艺,印刷...,印刷...,元/1000号,312.473088
Brand Promotion,371,印刷工艺,,印刷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,印刷工艺,印刷...,印刷...,元/厘米,43.64841863
Brand Promotion,372,印刷工艺,,印刷...,Event,Event creative and manage fee & Event execution fee,Material,Printing,印刷工艺,印刷...,印刷...,元/厘米,303.7492664
Brand Promotion,373,128g铜版纸,,A4...,Event,Event creative and manage fee & Event execution fee,Material,Printing,128g铜版纸,A4...,A4...,元/张,444.6988879
Brand Promotion,374,128g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,128g铜版纸,A5...,A5...,元/张,357.4204807
Brand Promotion,375,128g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,128g铜版纸,A5...,A5...,元/张,468.8099108
Brand Promotion,376,157g铜版纸,,A4...,Event,Event creative and manage fee & Event execution fee,Material,Printing,157g铜版纸,A4...,A4...,元/张,229.9508745
Brand Promotion,377,157g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,157g铜版纸,A5...,A5...,元/张,85.24268257
Brand Promotion,378,157g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,157g铜版纸,A5...,A5...,元/张,33.33409478
Brand Promotion,379,250g铜版纸,,A4...,Event,Event creative and manage fee & Event execution fee,Material,Printing,250g铜版纸,A4...,A4...,元/张,304.3304091
Brand Promotion,380,250g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,250g铜版纸,A5...,A5...,元/张,460.1165746
Brand Promotion,381,250g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,250g铜版纸,A5...,A5...,元/张,337.4464284
Brand Promotion,382,300g铜版纸,,A4...,Event,Event creative and manage fee & Event execution fee,Material,Printing,300g铜版纸,A4...,A4...,元/张,121.8584086
Brand Promotion,383,300g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,300g铜版纸,A5...,A5...,元/张,275.1937766
Brand Promotion,384,300g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,300g铜版纸,A5...,A5...,元/张,75.11511669
Brand Promotion,385,350g铜版纸,,A4...,Event,Event creative and manage fee & Event execution fee,Material,Printing,350g铜版纸,A4...,A4...,元/张,390.790588
Brand Promotion,386,350g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,350g铜版纸,A5...,A5...,元/张,8.456155521
Brand Promotion,387,350g铜版纸,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,350g铜版纸,A5...,A5...,元/张,11.01703807
Brand Promotion,388,吊旗,,35...,Event,Event creative and manage fee & Event execution fee,Material,Printing,吊旗,35...,35...,米,192.8579945
Brand Promotion,389,串旗,,33...,Event,Event creative and manage fee & Event execution fee,Material,Printing,串旗,33...,33...,串,271.9244839
Brand Promotion,390,A4彩色菜单,,双面...,Event,Event creative and manage fee & Event execution fee,Material,Printing,A4彩色菜单（内页）,双面...,双面...,page,389.4254841
Brand Promotion,391,DM单,,A4...,Event,Event creative and manage fee & Event execution fee,Material,Printing,DM单,A4...,A4...,个,54.62340492
Brand Promotion,392,DM单,,A5...,Event,Event creative and manage fee & Event execution fee,Material,Printing,DM单,A5...,A5...,元/张,67.49635648
Brand Promotion,393,赠酒券,,15...,Event,Event creative and manage fee & Event execution fee,Material,Printing,赠酒券,15...,15...,元/张,52.00157069
Brand Promotion,394,赠酒券,,15...,Event,Event creative and manage fee & Event execution fee,Material,Printing,赠酒券,15...,15...,元/张,424.0341353
Brand Promotion,395,抽奖券,,15...,Event,Event creative and manage fee & Event execution fee,Material,Printing,抽奖券,15...,15...,元/张,201.6231933
Brand Promotion,396,抽奖券,,15...,Event,Event creative and manage fee & Event execution fee,Material,Printing,抽奖券,15...,15...,元/张,473.944088
Brand Promotion,397,立牌,,立式...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,立牌,立式...,立式...,个,140.913791
Brand Promotion,398,台卡,,亚克...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,台卡,亚克...,亚克...,个,304.8003217
Brand Promotion,399,圣诞树,,1....,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,圣诞树（含装饰）,1....,1....,set,440.9887129
Brand Promotion,400,圣诞树,,3m...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,圣诞树（含装饰）,3m...,3m...,set,280.6735108
Brand Promotion,401,圣诞树,,5m...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,圣诞树（含装饰）,5m...,5m...,set,7.526101901
Brand Promotion,402,便携式农药喷雾器,,国产...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,便携式农药喷雾器,国产...,国产...,unit,244.8510239
Brand Promotion,403,木制栅栏 ,,各色...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,木制栅栏 ,各色...,各色...,m,249.6554277
Brand Promotion,404,全铝合金伸缩雨棚,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,全铝合金伸缩雨棚,铝合...,铝合...,㎡,228.7471137
Brand Promotion,405,大冰桶,,大冰...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,大冰桶（塑料）,大冰...,大冰...,个,455.1873328
Brand Promotion,406,工作人员T恤,工作服,工作...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,工作人员T恤,工作...,工作...,套,397.8169474
Brand Promotion,407,定制PG服装,,定制...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,定制PG服装,定制...,定制...,套,304.6911867
Brand Promotion,408,单面超薄灯箱,,倒光...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,单面超薄灯箱,倒光...,倒光...,㎡,309.7017125
Brand Promotion,409,双面超薄灯箱,,倒光...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,双面超薄灯箱（小铝双面超薄灯箱）,倒光...,倒光...,㎡,102.8404026
Brand Promotion,410,吸塑灯箱,,倒光...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,吸塑灯箱（长方形吸塑灯箱/正方形吸塑灯箱/圆形/椭圆形/圆形弧面吸塑灯箱）,倒光...,倒光...,㎡,347.0536278
Brand Promotion,411,亚克力灯箱,,平面...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,亚克力灯箱,平面...,平面...,㎡,340.528827
Brand Promotion,412,亚克力发光灯箱调节器,,国标...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,亚克力发光灯箱调节器,国标...,国标...,个,428.8368024
Brand Promotion,413,卡布灯箱,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,卡布灯箱,铝合...,铝合...,㎡,230.2093544
Brand Promotion,414,拉布灯箱,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,拉布灯箱,铝合...,铝合...,㎡,32.96488877
Brand Promotion,415,软膜灯箱,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,软膜灯箱,铝合...,铝合...,平方,123.4779004
Brand Promotion,416,X展架,,1....,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,X展架,1....,1....,unit,83.94615383
Brand Promotion,417,L架,,1....,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,L架（1.6*0.6m） 高度可以调节,1....,1....,unit,437.1816144
Brand Promotion,418,门形展架,,1....,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,铁底门形展架,1....,1....,unit,372.9974371
Brand Promotion,419,拉网展架,,加粗...,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,拉网展架（高档铝合金；含画面，不含灯具3 格 × 4 格）,加粗...,加粗...,set,2.220451301
Brand Promotion,420,画架,,1....,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,画架,1....,1....,unit,300.1170684
Brand Promotion,421,易拉宝,,1....,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,易拉宝,1....,1....,个,476.5599674
Brand Promotion,422,铁质伸缩画架,,1....,Event,Event creative and manage fee & Event execution fee,Material,Accessory,铁质伸缩画架,1....,1....,个,317.3435548
Brand Promotion,423,旗杆,,落地...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,旗杆,落地...,落地...,套,490.1163267
Brand Promotion,424,道旗,,5m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,道旗,5m...,5m...,套,436.6897882
Brand Promotion,425,刀旗,,5米...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,刀旗（含画面）,5米...,5米...,元/套,491.9456328
Brand Promotion,426,门型展架,,铁质...,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,门型展架（含PVC胶片）,铁质...,铁质...,套,320.0965432
Brand Promotion,427,A型展架,,60...,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,A型展架,60...,60...,个,81.12820531
Brand Promotion,428,丽屏展架,,1....,Event,Event creative and manage fee & Event execution fee,Material,Display Rack,丽屏展架,1....,1....,个,24.84150083
Brand Promotion,429,亚克力台卡,,双面...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,亚克力台卡,双面...,双面...,块,113.529977
Brand Promotion,430,合影抱牌,亚克力抱牌,5m...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,留影道具-合影抱牌,5m...,5m...,个,424.8699813
Brand Promotion,431,飞盘,,雪弗...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,飞盘制作,雪弗...,雪弗...,unit,204.1433452
Brand Promotion,432,亚克力字,,国产...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,亚克力字（水晶字8毫米透明亚克力+3毫米亚克力面板,国产...,国产...,cm,135.033446
Brand Promotion,433,亚克力字,,国产...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,亚克力字（水晶字12毫米透明亚克力+3毫米亚克力面板,国产...,国产...,cm,330.6070767
Brand Promotion,434,普通不锈钢发光字,,80...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,普通不锈钢发光字,80...,80...,cm,103.2352549
Brand Promotion,435,金属LOGO,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Printing,金属LOGO,不锈...,不锈...,unit,425.4767555
Brand Promotion,436,精品不锈钢发光字,,1毫...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,精品不锈钢发光字,1毫...,1毫...,cm,16.32359127
Brand Promotion,437,黑钛金发光字,,80...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,黑钛金发光字,80...,80...,cm,402.85154
Brand Promotion,438,铁皮烤漆发光字,,80...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,铁皮烤漆发光字,80...,80...,cm,451.9922387
Brand Promotion,439,发光字,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,发光字,铝合...,铝合...,元/厘米,229.4831597
Brand Promotion,440,发光字变压器,,22...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,发光字-变压器,22...,22...,unit,82.21729098
Brand Promotion,441,发光字副套线,红黑线,国标...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,发光字-副套线,国标...,国标...,unit,117.0674795
Brand Promotion,442,树脂发光字,,80...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,树脂发光字,80...,80...,cm,486.0326818
Brand Promotion,443,树脂发光字,,80...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,树脂发光字（面板UV打印）,80...,80...,cm,288.0145961
Brand Promotion,444,无边框发光字,,铝合...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,无边框发光字,铝合...,铝合...,cm,301.7270811
Brand Promotion,445,mini发光字,,2厘...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,mini发光字,2厘...,2厘...,m,391.4585549
Brand Promotion,446,塑边发光字,,专用...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,塑边发光字,专用...,专用...,cm,171.38565
Brand Promotion,447,pvc字,,8m...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,pvc字,8m...,8m...,元/厘米,348.0226879
Brand Promotion,448,雕刻做漆,,最长...,Event,Event creative and manage fee & Event execution fee,Material,Painting,雕刻做漆1cm/1.5cm/2cmPVC,最长...,最长...,cm,426.1426103
Brand Promotion,449,4mm亚克力印高清UV藏LED发光软条定制,定制灯牌,15...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,4mm亚克力印高清UV藏LED发光软条定制,15...,15...,元/ 米,186.1839214
Brand Promotion,450,5mm亚克力印高清UV藏LED发光软条定制,定制灯牌,L2...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,5mm亚克力印高清UV藏LED发光软条定制,L2...,L2...,m²,239.174379
Brand Promotion,451,5mm亚克力印高清UV藏LED发光软条定制,定制灯牌,L2...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,5mm亚克力印高清UV藏LED发光软条定制,L2...,L2...,m²,293.9394697
Brand Promotion,452,霓虹灯牌,,LE...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,霓虹灯牌,LE...,LE...,米,150.7870287
Brand Promotion,453,霓虹灯带,,上海...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,霓虹灯带,上海...,上海...,元/米,253.5924103
Brand Promotion,454,霓虹灯造型,,上海...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,霓虹灯造型,上海...,上海...,米,163.5519361
Brand Promotion,455,圆盘光源,,LE...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,圆盘光源,LE...,LE...,元/米,171.7739715
Brand Promotion,456,激光光源发射器,,激光...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,激光光源发射器,激光...,激光...,unit,168.8193609
Brand Promotion,457,LED铁片灯条,,国标...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED铁片灯条,国标...,国标...,m,96.61261328
Brand Promotion,458,灯带控制器,,国标...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,灯带控制器,国标...,国标...,unit,396.8556973
Brand Promotion,459,LED信号控制器,,国标...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED信号控制器,国标...,国标...,unit,106.575102
Brand Promotion,460,led灯带软件编程,,le...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,led灯带软件编程,le...,le...,元/路,85.08842076
Brand Promotion,461,律动LED屏,,国产...,Event,Event creative and manage fee & Event execution fee,AVL,Video,律动LED屏,国产...,国产...,元/块,437.5146931
Brand Promotion,462,群组变压适配器,,国标...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,群组变压适配器,国标...,国标...,unit,436.2880247
Brand Promotion,463,电子镇流器,,le...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电子镇流器,le...,le...,unit,91.21364907
Brand Promotion,464,电子镇流器,,.....,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,电子镇流器,...,.....,个,44.87891087
Brand Promotion,465,可充电式电源,充电宝,小米...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,可充电式电源,小米...,小米...,unit,418.563094
Brand Promotion,466,光纤灯管,,国标...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,光纤灯管,国标...,国标...,m,56.27544856
Brand Promotion,467,LED射灯,,国标...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED射灯,国标...,国标...,项,340.5304664
Brand Promotion,468,铝方管,支撑,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝方管,30...,30...,unit,185.869243
Brand Promotion,469,铝方管,支撑,40...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝方管,40...,40...,unit,9.464848192
Brand Promotion,470,铝方管,支撑,50...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝方管,50...,50...,unit,310.3405955
Brand Promotion,471,铝方管造型,,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝方管造型,30...,30...,元/平方,260.8091418
Brand Promotion,472,铝合金,,5c...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝合金,5c...,5c...,元/米,380.8998955
Brand Promotion,473,铝合金直角,,直角...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝合金直角,直角...,直角...,元/米,64.45207356
Brand Promotion,474,铁方管,支撑,25...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁方管,25...,25...,unit,433.899896
Brand Promotion,475,铁方管,支撑,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁方管,30...,30...,unit,380.8091803
Brand Promotion,476,铁方管,支撑,40...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁方管,40...,40...,unit,49.25157361
Brand Promotion,477,铁方管,支撑,50...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁方管,50...,50...,unit,53.78525219
Brand Promotion,478,铁圆管,支撑,80...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁圆管,80...,80...,unit,451.3709353
Brand Promotion,479,40角铁,,壁厚...,Event,Event creative and manage fee & Event execution fee,Material,Steel,40角铁,壁厚...,壁厚...,unit,147.2379117
Brand Promotion,480,方管,,壁厚...,Event,Event creative and manage fee & Event execution fee,Material,Steel,2.0*2.0cm方管/2.5*3.8cm方管,壁厚...,壁厚...,unit,401.571457
Brand Promotion,481,镀锌方管,,40...,Event,Event creative and manage fee & Event execution fee,Material,Steel,40*40镀锌方管,40...,40...,unit,124.2548729
Brand Promotion,482,无缝钢管,,15...,Event,Event creative and manage fee & Event execution fee,Material,Steel,15mm无缝钢管,15...,15...,m,114.8701911
Brand Promotion,483,方管,,30...,Event,Event creative and manage fee & Event execution fee,Material,Font production,优质铁管材料,30...,30...,unit,92.2213855
Brand Promotion,484,不锈钢方管/圆管,,25...,Event,Event creative and manage fee & Event execution fee,Material,Steel,不锈钢方管/圆管,25...,25...,元/ 米,20.05533084
Brand Promotion,485,不锈钢方管/圆管,,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,不锈钢方管/圆管,30...,30...,元/米,7.383241127
Brand Promotion,486,不锈钢方管/圆管,,40...,Event,Event creative and manage fee & Event execution fee,Material,Steel,不锈钢方管/圆管,40...,40...,元/米,351.1529466
Brand Promotion,487,不锈钢方管/圆管,,50...,Event,Event creative and manage fee & Event execution fee,Material,Steel,不锈钢方管/圆管,50...,50...,元/米,143.609094
Brand Promotion,488,不锈钢方管/圆管,,60...,Event,Event creative and manage fee & Event execution fee,Material,Steel,不锈钢方管/圆管,60...,60...,元/米,100.057358
Brand Promotion,489,镜面不锈钢,,1....,Event,Event creative and manage fee & Event execution fee,Material,Steel,镜面不锈钢,1....,1....,元/平方,72.19043203
Brand Promotion,490,拉丝不锈钢,,1....,Event,Event creative and manage fee & Event execution fee,Material,Steel,拉丝不锈钢,1....,1....,元/平方,107.7572653
Brand Promotion,491,拉丝金色边条,,35...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,拉丝金色边条,35...,35...,元/米,425.2600853
Brand Promotion,492,不锈钢板材,,1....,Event,Event creative and manage fee & Event execution fee,Material,Steel,不锈钢板材,1....,1....,㎡,265.4805674
Brand Promotion,493,铁管/不锈钢,,初加...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁管/不锈钢等,初加...,初加...,m,83.38728945
Brand Promotion,494,铁管/不锈钢,,拉丝...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁管/不锈钢等,拉丝...,拉丝...,m,429.9608649
Brand Promotion,495,铁管/不锈钢,,镀色...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁管/不锈钢等,镀色...,镀色...,m,210.1467458
Brand Promotion,496,铁管/不锈钢,,防指...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁管/不锈钢等,防指...,防指...,m,104.8057286
Brand Promotion,497,金色不锈钢方管,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Steel,金色不锈钢方管（宽）,不锈...,不锈...,元/米,236.5764752
Brand Promotion,498,圆管,,25...,Event,Event creative and manage fee & Event execution fee,Material,Steel,圆管,25...,25...,元/米,327.0452595
Brand Promotion,499,铝合金支撑,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝合金支撑,不锈...,不锈...,元/米,251.3462616
Brand Promotion,500,冷扎板,,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,冷扎板,30...,30...,元/张,51.03787517
Brand Promotion,501,钢板底座,,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钢板底座,30...,30...,元/个,157.5822514
Brand Promotion,502,支撑钢板,,1m...,Event,Event creative and manage fee & Event execution fee,Material,Steel,支撑钢板,1m...,1m...,元/块,269.4092908
Brand Promotion,503,底部铁板配重,,10...,Event,Event creative and manage fee & Event execution fee,Material,Steel,底部铁板配重,10...,10...,unit,85.58977565
Brand Promotion,504,钢板切割,,1m...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钢板切割,1m...,1m...,元/平方,283.4577882
Brand Promotion,505,钢架槽钢,,黑碳...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钢架槽钢,黑碳...,黑碳...,元/米,66.78309473
Brand Promotion,506,钢板,,2厘...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钢板,2厘...,2厘...,元/平方,379.9899664
Brand Promotion,507,钛金板,,tc...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钛金板,tc...,tc...,元/平方,452.5802005
Brand Promotion,508,304不锈钢镀钛框架,,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,304不锈钢镀钛框架,30...,30...,kg,487.6844134
Brand Promotion,509,支撑货架,,40...,Event,Event creative and manage fee & Event execution fee,Material,Steel,支撑货架,40...,40...,unit,305.8930727
Brand Promotion,510,304不锈钢长合页排铰,,30...,Event,Event creative and manage fee & Event execution fee,Material,Steel,304不锈钢长合页排铰,30...,30...,unit,487.421151
Brand Promotion,511,金属条烤金属色包边,,(L...,Event,Event creative and manage fee & Event execution fee,Material,Steel,金属条烤金属色包边,(L...,(L...,m,39.77082689
Brand Promotion,512,金属方管烤金属色,,L1...,Event,Event creative and manage fee & Event execution fee,Material,Steel,25mm+15mm金属方管烤金属色,L1...,L1...,m,367.0604026
Brand Promotion,513,金属圆管烤金属色,,20...,Event,Event creative and manage fee & Event execution fee,Material,Steel,10mm金属圆管烤金属色,20...,20...,m,203.1281369
Brand Promotion,514,金属方管烤金属色,,(L...,Event,Event creative and manage fee & Event execution fee,Material,Steel,25mm+15mm金属方管烤金属漆,(L...,(L...,m,212.0600464
Brand Promotion,515,铝合金网,,6菱...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铝合金网,6菱...,6菱...,元/平方,228.7261154
Brand Promotion,516,钢网,,钢网...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钢网,钢网...,钢网...,元/平米,471.3696543
Brand Promotion,517,钢网,,钢网...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钢网,钢网...,钢网...,元/平米,52.3651023
Brand Promotion,518,镀锌板,,10...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,镀锌板,10...,10...,unit,0.718085456
Brand Promotion,519,镀锌板,,10...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,镀锌板,10...,10...,unit,186.2445094
Brand Promotion,520,铁丝网,,12...,Event,Event creative and manage fee & Event execution fee,Material,Steel,铁丝网,12...,12...,平米,401.3426309
Brand Promotion,521,整体地台面,,钢木...,Event,Event creative and manage fee & Event execution fee,Material,Steel,整体地台面,钢木...,钢木...,m²,491.7546758
Brand Promotion,522,,,塑料...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,PVC片,塑料...,塑料...,㎡,133.0656504
Brand Promotion,523,木工板,细木板,中等...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,1.0cm/1.5cm细木工板,中等...,中等...,unit,40.22333951
Brand Promotion,524,密度板,,1....,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,12mm中密度板,1....,1....,unit,351.247019
Brand Promotion,525,木工板,细木板,中等...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,1.8cm木工板,中等...,中等...,unit,136.0104598
Brand Promotion,526,多层板,,18...,Event,Event creative and manage fee & Event execution fee,Material,Font production,18mm多层板,18...,18...,unit,450.6032947
Brand Promotion,527,三聚氰胺板,,.....,Event,Event creative and manage fee & Event execution fee,Material,Raw Material,三聚氰胺板,...,.....,平方,182.1765307
Brand Promotion,528,软木板,,软木...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,软木板,软木...,软木...,平方米,72.5588886
Brand Promotion,529,软木板防水油漆,,软木...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,软木板防水油漆,软木...,软木...,桶,151.3020362
Brand Promotion,530,防火板,,1....,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,红、黄、蓝、白色防火板,1....,1....,m²,331.2920607
Brand Promotion,531,防火板,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,防火板,12...,12...,m²,434.512658
Brand Promotion,532,防火板,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,防火板,12...,12...,m²,479.0628259
Brand Promotion,533,有机板,,1....,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,3mm有机板,1....,1....,m²,39.57407699
Brand Promotion,534,PVC板,,1....,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,8mmPVC板,1....,1....,m²,10.28115408
Brand Promotion,535,铝塑板,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,铝塑板,12...,12...,m²,68.30016977
Brand Promotion,536,铝塑板,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,铝塑板,12...,12...,m²,142.9195548
Brand Promotion,537,木地板,,木地...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,木地板,木地...,木地...,元/平方,215.2475613
Brand Promotion,538,大理石,,0....,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,大理石,0....,0....,元/平方,408.2593913
Brand Promotion,539,美颜板,,进口...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,美颜板,进口...,进口...,元/平方,464.439575
Brand Promotion,540,防腐木,,实木...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,防腐木,实木...,实木...,平米,212.9818517
Brand Promotion,541,木龙骨,,3c...,Event,Event creative and manage fee & Event execution fee,Material,Font production,木龙骨,3c...,3c...,根,216.3507438
Brand Promotion,542,木条,,30...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,木条,30...,30...,m,203.6547011
Brand Promotion,543,木条,,40...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,木条,40...,40...,unit,36.46534747
Brand Promotion,544,圆木条,,φ1...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,圆木条,φ1...,φ1...,m,455.2292251
Brand Promotion,545,防水卷材,,丙纶...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,防水卷材,丙纶...,丙纶...,元/平方,489.186379
Brand Promotion,546,透明亚克力,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,透明亚克力,12...,12...,m²,148.377827
Brand Promotion,547,透明亚克力,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,透明亚克力,12...,12...,m²,368.0088738
Brand Promotion,548,透明亚克力,,1....,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,透明亚克力,1....,1....,m²,116.0155314
Brand Promotion,549,透明亚克力,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,透明亚克力,12...,12...,张,71.92236089
Brand Promotion,550,透明亚克力,,12...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,透明亚克力,12...,12...,m²,456.1150447
Brand Promotion,551,半透磨砂亚克力,,1....,Event,Event creative and manage fee & Event execution fee,Material,Accessory,半透磨砂亚克力,1....,1....,m²,488.6565189
Brand Promotion,552,半透磨砂亚克力,,12...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,半透磨砂亚克力,12...,12...,m²,232.2169472
Brand Promotion,553,半透磨砂亚克力,,12...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,半透磨砂亚克力,12...,12...,m²,215.9971541
Brand Promotion,554,亚克力吸塑,,横宽...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,亚克力吸塑（大面积吸塑）,横宽...,横宽...,㎡,59.36184022
Brand Promotion,555,3mm厚亚克力吸塑灯片,,吸塑...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,3mm厚亚克力吸塑灯片,吸塑...,吸塑...,㎡,399.6769772
Brand Promotion,556,亚克力彩喷,UV打印,5M...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,亚克力彩喷,5M...,5M...,㎡,351.530902
Brand Promotion,557,亚克力热弯,,根据...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,亚克力热弯,根据...,根据...,unit,271.2367323
Brand Promotion,558,1cm-1.2cm亚克力板,,12...,Event,Event creative and manage fee & Event execution fee,Material,Font production,1cm-1.2cm亚克力板,12...,12...,m²,100.693027
Brand Promotion,559,水纹玻璃,,5毫...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,水纹玻璃,5毫...,5毫...,m²,143.2745874
Brand Promotion,560,水纹玻璃,,8毫...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,水纹玻璃,8毫...,8毫...,m²,455.7894325
Brand Promotion,561,水纹玻璃,,10...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,水纹玻璃,10...,10...,m²,376.5376314
Brand Promotion,562,普通平面白/蓝玻璃,普通玻璃,5m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,普通平面白/蓝玻璃,5m...,5m...,m²,280.0489797
Brand Promotion,563,普通平面白/蓝玻璃,普通玻璃,8m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,普通平面白/蓝玻璃,8m...,8m...,m²,474.3405559
Brand Promotion,564,普通平面白/蓝玻璃,普通玻璃,12...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,普通平面白/蓝玻璃,12...,12...,m²,232.738522
Brand Promotion,565,玻璃钢化,钢化玻璃,按照...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,玻璃钢化,按照...,按照...,m²,449.4854623
Brand Promotion,566,玻璃磨边,,按照...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,玻璃磨边,按照...,按照...,m²,436.9954765
Brand Promotion,567,玻璃打孔,,按照...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,玻璃打孔,按照...,按照...,个,361.7739593
Brand Promotion,568,钢化玻璃固定螺丝,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,钢化玻璃固定螺丝,不锈...,不锈...,元/个,410.2088605
Brand Promotion,569,钢化玻璃专用胶,,3m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,钢化玻璃专用胶,3m...,3m...,元/筒,457.018299
Brand Promotion,570,钢化玻璃,,12...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,玻璃,12...,12...,元/平方,32.03691278
Brand Promotion,571,钢化玻璃,,12...,Event,Event creative and manage fee & Event execution fee,Material,Steel,白玻璃,12...,12...,平米,243.089082
Brand Promotion,572,钢化玻璃,,1m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,1cm钢化玻璃,1m...,1m...,元/平方,118.1233618
Brand Promotion,573,普通玻璃（含磨边）,,5m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,普通玻璃（含磨边）,5m...,5m...,㎡,113.8031546
Brand Promotion,574,彩钢瓦,,AS...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,彩钢瓦,AS...,AS...,元/张,174.6539671
Brand Promotion,575,珍珠棉,,3m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,珍珠棉,3m...,3m...,m²,439.665297
Brand Promotion,576,物料保护膜,,缠绕...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,物料保护膜,缠绕...,缠绕...,m²,467.0385819
Brand Promotion,577,物料保护膜,,气泡...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,物料保护膜,气泡...,气泡...,m²,360.4539927
Brand Promotion,578,气泡膜,,优信...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,气泡膜,优信...,优信...,项,384.5772003
Brand Promotion,579,腻子,,腻子...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,腻子,腻子...,腻子...,元/平方,436.7386935
Brand Promotion,580,做旧处理,,手工...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,旧处理,手工...,手工...,unit,6.729740526
Brand Promotion,581,滑轮,,6m...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,滑轮,6m...,6m...,unit,169.8475288
Brand Promotion,582,管道,,∅1...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,管道,∅1...,∅1...,unit,104.1877741
Brand Promotion,583,管道,,∅2...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,管道,∅2...,∅2...,unit,352.8072911
Brand Promotion,584,管道,,∅3...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,管道,∅3...,∅3...,unit,71.52531209
Brand Promotion,585,PVC管 ,,直径...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,PVC管 ,直径...,直径...,m,217.1909834
Brand Promotion,586,PVC连接件,,φ2...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,PVC连接件,φ2...,φ2...,unit,257.7590601
Brand Promotion,587,中性胶,,30...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,中性胶,30...,30...,unit,138.6561812
Brand Promotion,588,水泥钉,,40...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,水泥钉,40...,40...,box,251.6613046
Brand Promotion,589,焊条,,大西...,Event,Event creative and manage fee & Event execution fee,Material,Steel,焊条φ2.5*5KG,大西...,大西...,unit,220.4198992
Brand Promotion,590,焊丝,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Steel,焊丝,不锈...,不锈...,元/KG,244.3850709
Brand Promotion,591,扎带,,3*...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,扎带,3*...,3*...,bag,162.2697236
Brand Promotion,592,气动码钉,,国标...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,气动码钉,国标...,国标...,box,468.882256
Brand Promotion,593,广告钉,,φ1...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,广告钉,φ1...,φ1...,box,15.24369049
Brand Promotion,594,普通水泥,,国标...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,普通水泥,国标...,国标...,kg,451.6607522
Brand Promotion,595,鹅卵石,,5K...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,鹅暖石（白色）,5K...,5K...,元/袋,414.2671943
Brand Promotion,596,沙子,,白色...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,沙子,白色...,白色...,元/袋,424.1103597
Brand Promotion,597,万向轮,,辰诺...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,万向轮,辰诺...,辰诺...,个,29.18951685
Brand Promotion,598,膨胀螺丝,,固特...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,膨胀螺丝,固特...,固特...,颗,330.249129
Brand Promotion,599,电工胶,,公牛...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,电工胶,公牛...,公牛...,卷,391.198062
Brand Promotion,600,玻璃胶,,德国...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,玻璃胶,德国...,德国...,只,426.7703204
Brand Promotion,601,单相电表,,不低...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,单相电表,不低...,不低...,unit,25.24580831
Brand Promotion,602,丝杆,,∮1...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,丝杆,∮1...,∮1...,m,332.4289245
Brand Promotion,603,线卡,,φ1...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,线卡,φ1...,φ1...,bag,382.0270259
Brand Promotion,604,负导线,,铜芯...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,负导线,铜芯...,铜芯...,米,446.7660425
Brand Promotion,605,负导线,,6平...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,负导线,6平...,6平...,米,269.7789032
Brand Promotion,606,插线板,,6孔...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,插线板,6孔...,6孔...,unit,348.0366427
Brand Promotion,607,飞利浦5孔插座,,飞利...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,飞利浦5孔插座,飞利...,飞利...,元/个,422.4480542
Brand Promotion,608,飞利浦开关,,飞利...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,飞利浦开关,飞利...,飞利...,元/个,199.8988814
Brand Promotion,609,T4日光灯具,灯管,16...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,T4日光灯具,16...,16...,set,258.5796822
Brand Promotion,610,T5日光灯具,灯管,14...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,T5日光灯具,14...,14...,set,179.1020769
Brand Promotion,611,LED灯管,,雷士...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED灯管,雷士...,雷士...,元/套,382.9159374
Brand Promotion,612,数码管,,24...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,数码管,24...,24...,m,132.6725873
Brand Promotion,613,日光灯整流器,镇流器,日光...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,日光灯整流器,日光...,日光...,unit,222.7452478
Brand Promotion,614,LED铁片灯条,,每米...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED铁片灯条,每米...,每米...,m,463.232665
Brand Promotion,615,LED柔性灯条,,6m...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED柔性灯条,6m...,6m...,m,434.466456
Brand Promotion,616,LED灯串,,灯珠...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED灯串,灯珠...,灯珠...,m,90.79972
Brand Promotion,617,LED调节器,,一进...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,LED调节器,一进...,一进...,个,249.1903905
Brand Promotion,618,LED灯泡,,飞利...,Event,Event creative and manage fee & Event execution fee,Material,Font production,LED灯泡,飞利...,飞利...,unit,10.04752111
Brand Promotion,619,LED射灯,,LE...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,LED射灯,LE...,LE...,个,255.6526793
Brand Promotion,620,软管灯带,,12...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,软管灯带,12...,12...,米,282.0523454
Brand Promotion,621,变压器,,室外...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,变压器,室外...,室外...,元/个,50.33319104
Brand Promotion,622,变压器,,低压...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,变压器,低压...,低压...,元/套,257.9102413
Brand Promotion,623,配电系统,空开,施耐...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,配电系统,施耐...,施耐...,套,256.493694
Brand Promotion,624,三相插头,,公牛...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,三相插头,公牛...,公牛...,个,187.3075168
Brand Promotion,625,跑马灯,,LE...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,跑马灯，单灯泡,LE...,LE...,个,135.5601211
Brand Promotion,626,跑马灯,,LE...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,跑马灯，带状,LE...,LE...,米,277.7961126
Brand Promotion,627,灯罩,,铁艺...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,灯罩,铁艺...,铁艺...,套,495.4285882
Brand Promotion,628,装饰灯,,艺术...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,装饰灯,艺术...,艺术...,元/盏,215.7858646
Brand Promotion,629,路灯,,22...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,路灯,22...,22...,元/盏,293.4171898
Brand Promotion,630,装饰充电灯球,,装饰...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,装饰充电灯球,装饰...,装饰...,元/个,419.3727529
Brand Promotion,631,灯泡,,LE...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,灯泡,LE...,LE...,元/个,60.23107018
Brand Promotion,632,医疗箱,,含药...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,医疗箱,含药...,含药...,套,301.6370601
Brand Promotion,633,防疫物品,一次性医用口罩,一次...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,防疫物品-一次性医用口罩,一次...,一次...,个,165.6179156
Brand Promotion,634,防疫物品,一次性手套,一次...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,防疫物品-一次性手套,一次...,一次...,盒,6.715329761
Brand Promotion,635,防疫物品,便携式消毒酒精,75...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,防疫物品-便携式消毒酒精,75...,75...,瓶,32.71529708
Brand Promotion,636,防疫物品,体温枪,博朗...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,体温枪,博朗...,博朗...,个,155.4096492
Brand Promotion,637,硬质拉杆箱,,20...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,硬质拉杆箱,20...,20...,个,160.4365644
Brand Promotion,638,IC卡,,IC...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,IC卡,IC...,IC...,元/张,294.2852018
Brand Promotion,639,抱枕,,尺寸...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,抱枕,尺寸...,尺寸...,个,71.05943316
Brand Promotion,640,围挡,,PV...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,1米栏围档租赁,PV...,PV...,个,427.0436872
Brand Promotion,641,锁具,,小五...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,锁具,小五...,小五...,unit,171.4296896
Brand Promotion,642,空盒气压表,,川仪...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,空盒气压表,川仪...,川仪...,unit,20.97041161
Brand Promotion,643,地毯胶,,得力...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,地毯胶,得力...,得力...,个,259.5516769
Brand Promotion,644,顶棚透明胶片,,面积...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,顶棚透明胶片,面积...,面积...,片,369.4389344
Brand Promotion,645,安装辅料,,（包...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,安装辅料,（包...,（包...,套/场,363.432224
Brand Promotion,646,包装材料,气泡膜、物料保护膜,（每...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,包装材料,（每...,（每...,套/场,438.2614218
Brand Promotion,647,充电宝,,30...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,可充电式电源,30...,30...,套,121.8767101
Brand Promotion,648,啤酒台板及灯,,亚克...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,啤酒台板及灯,亚克...,亚克...,台,83.17534857
Brand Promotion,649,门板缓冲合页,,液压...,Event,Event creative and manage fee & Event execution fee,Material,Accessory,门板缓冲何叶,液压...,液压...,个,324.0002544
Brand Promotion,650,启动球,,亚克...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,启动球,亚克...,亚克...,元/个,318.5680059
Brand Promotion,651,泡沫云朵,,婚庆...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,泡沫云朵,婚庆...,婚庆...,元/个,495.6805
Brand Promotion,652,气球,,金属...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,气球,金属...,金属...,元/个,121.4641131
Brand Promotion,653,荧光棒,,直径...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,荧光棒,直径...,直径...,元/个,68.53285378
Brand Promotion,654,荧光头饰,,塑料...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,荧光头饰,塑料...,塑料...,元/个,493.2840125
Brand Promotion,655,发光小麦,,高4...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,发光小麦,高4...,高4...,根,309.0666546
Brand Promotion,656,发光手牌,,pv...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,发光手牌,pv...,pv...,元/个,171.2908151
Brand Promotion,657,开孔,打孔,直径...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,麦穗开孔,直径...,直径...,个,424.9054489
Brand Promotion,658,真实麦穗,,干麦...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,真实麦穗,干麦...,干麦...,元/支,295.423786
Brand Promotion,659,汽油桶,,装饰...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,汽油桶,装饰...,装饰...,元/个,183.0660691
Brand Promotion,660,酒瓶,,立体...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,酒瓶,立体...,立体...,unit,77.43930222
Brand Promotion,661,话筒套,,5m...,Event,Event creative and manage fee & Event execution fee,AVL,Audio,话筒套,5m...,5m...,元/个,396.1734858
Brand Promotion,662,蓄电池,电瓶,蓄电...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,蓄电池,蓄电...,蓄电...,元/块,381.4186721
Brand Promotion,663,氦气罐,,飘空...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,氦气罐,飘空...,飘空...,罐,259.8631837
Brand Promotion,664,对讲机,,租赁...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,对讲机,租赁...,租赁...,元/个,293.2315868
Brand Promotion,665,警戒线,,  ...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,警戒线,  ...,  ...,个,260.6001776
Brand Promotion,666,烟雾器,,30...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,烟雾器,30...,30...,元/台,272.7504223
Brand Promotion,667,分贝仪,,壁挂...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,分贝仪,壁挂...,壁挂...,元/个,258.5144061
Brand Promotion,668,桌花,,花店...,Event,Event creative and manage fee & Event execution fee,Material,Atmosphere Material,桌花,花店...,花店...,元/个,3.010518302
Brand Promotion,669,桌布,,纯色...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,桌布,纯色...,纯色...,元/张,268.8943637
Brand Promotion,670,条桌,,1....,Event,Event creative and manage fee & Event execution fee,Material,Functional material,条桌（含桌布）,1....,1....,元/套,232.8162298
Brand Promotion,671,火锅桌,,一桌...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,火锅桌,一桌...,一桌...,套,1.650421508
Brand Promotion,672,桌子,,组装...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,桌子,组装...,组装...,套,252.2824209
Brand Promotion,673,吧桌,,进口...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,吧桌,进口...,进口...,元/套,154.8506804
Brand Promotion,674,吧凳,,北欧...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,吧凳,北欧...,北欧...,元/个,182.7814209
Brand Promotion,675,发光吧台,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,发光吧台,不锈...,不锈...,元/套,419.8385388
Brand Promotion,676,茶几,,租赁...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,茶几,租赁...,租赁...,元/套,156.7639036
Brand Promotion,677,单人沙发,,租赁...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,单人沙发,租赁...,租赁...,元/套,211.9677034
Brand Promotion,678,沙发凳,,租凭...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,沙发凳,租凭...,租凭...,元/个,52.09673196
Brand Promotion,679,懒人沙发,,lu...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,懒人沙发,lu...,lu...,元/张,154.4233317
Brand Promotion,680,景观植物,绿植,碎石...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,景观植物,碎石...,碎石...,套,32.08394982
Brand Promotion,681,仿真火锅道具,,仿真...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,仿真火锅道具,仿真...,仿真...,套,136.2868339
Brand Promotion,682,拍照泳池,,钢化...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,拍照泳池,钢化...,钢化...,m²,219.0497432
Brand Promotion,683,试饮杯,,底部...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,试饮杯,底部...,底部...,盒,217.7198932
Brand Promotion,684,杯子,, 磨...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,杯子, 磨..., 磨...,个,160.637386
Brand Promotion,685,酒杯,,定制...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,酒杯,定制...,定制...,个,6.150919024
Brand Promotion,686,玻璃酒杯,,定制...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,玻璃酒杯,定制...,定制...,个,261.2544994
Brand Promotion,687,调酒杯,,55...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,调酒杯,55...,55...,元/个,236.6941306
Brand Promotion,688,鸡尾酒杯子,,15...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,鸡尾酒杯子,15...,15...,元/个,191.9678964
Brand Promotion,689,托盘,,长3...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,试饮托盘,长3...,长3...,个,342.1841689
Brand Promotion,690,托盘,,0....,Event,Event creative and manage fee & Event execution fee,Material,Functional material,托盘+托盘布,0....,0....,元/套,196.9108904
Brand Promotion,691,食用冰,冰块,食品...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,食用冰,食品...,食品...,袋,166.648471
Brand Promotion,692,工业冰,冰块,工业...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,工业冰,工业...,工业...,块,407.3185682
Brand Promotion,693,冰沙机,,试饮...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,冰沙机,试饮...,试饮...,台,250.1687218
Brand Promotion,694,冰箱,,水冷...,Event,Event creative and manage fee & Event execution fee,Equipment,Equipment,冰箱,水冷...,水冷...,台,221.7205656
Brand Promotion,695,艺术吸管,,食品...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,艺术吸管,食品...,食品...,元/包,29.94018654
Brand Promotion,696,干冰,,温度...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,干冰,温度...,温度...,元/场,396.5024301
Brand Promotion,697,不锈钢量酒器,,30...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,不锈钢量酒器,30...,30...,元/个,338.31317
Brand Promotion,698,吧勺,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,吧勺,不锈...,不锈...,元/个,376.309267
Brand Promotion,699,特调鸡尾酒,调酒师, 现...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,特调鸡尾酒团队及其他调酒材料, 现..., 现...,人/天,361.8970927
Brand Promotion,700,特调鸡尾酒,调酒师, 现...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,特调鸡尾酒团队及其他调酒材料, 现..., 现...,杯,434.4231988
Brand Promotion,701,草坪,,仿真...,Event,Event creative and manage fee & Event execution fee,Material,Sheet Material,草坪,仿真...,仿真...,平方米,490.5765624
Brand Promotion,702,相框,,白色...,Event,Event creative and manage fee & Event execution fee,Material,Printing,相框,白色...,白色...,元/个,341.0302185
Brand Promotion,703,打印机,,租用...,Event,Event creative and manage fee & Event execution fee,Material,Printing,现场打印机,租用...,租用...,元/个,185.0425712
Brand Promotion,704,打印相纸,,单面...,Event,Event creative and manage fee & Event execution fee,Material,Printing,打印相纸,单面...,单面...,元/个,28.05879887
Brand Promotion,705,抽水机器,循环水泵,国产...,Event,Event creative and manage fee & Event execution fee,Material,Font production,抽水机器,国产...,国产...,unit,46.49984204
Brand Promotion,706,工作牌,工作证, p...,Event,Event creative and manage fee & Event execution fee,Material,Printing,工作牌, p..., p...,元/个,289.005198
Brand Promotion,707,飞镖,,采买...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,飞镖,采买...,采买...,套,137.2637248
Brand Promotion,708,平衡盘,健身道具,木质...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,平衡盘,木质...,木质...,套,337.5070214
Brand Promotion,709,抽奖箱,,异性...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,抽奖箱,异性...,异性...,元/个,371.4548022
Brand Promotion,710,温馨提示牌,,超卡...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,温馨提示牌,超卡...,超卡...,元/套,27.21306475
Brand Promotion,711,垃圾桶,,高8...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,垃圾桶,高8...,高8...,元/个,269.3045671
Brand Promotion,712,垃圾袋,,大号...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,垃圾袋,大号...,大号...,包,265.9220236
Brand Promotion,713,警示三角锥桶,,三角...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,警示三角锥桶,三角...,三角...,元/个,211.9084532
Brand Promotion,714,一次性纹身贴,,烫金...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,一次性纹身贴,烫金...,烫金...,元/张,187.0579675
Brand Promotion,715,渠道礼品仓储费用,,标准...,Event,Event creative and manage fee & Event execution fee,Logistics,Warehouse,渠道礼品仓储费用,标准...,标准...,平米/天,48.48161392
Brand Promotion,716,仓储,,标准...,Event,Event creative and manage fee & Event execution fee,Logistics,logistics,仓储,标准...,标准...,M2 /day,56.53482335
Brand Promotion,717,手举牌,,小型...,Event,Event creative and manage fee & Event execution fee,Material,Printing,手举牌,小型...,小型...,块,165.7775323
Brand Promotion,718,口布,,16...,Event,Event creative and manage fee & Event execution fee,Material,Printing,口布,16...,16...,块,344.4999953
Brand Promotion,719,罗马伞,大伞,3m...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,罗马伞,3m...,3m...,把,46.39042418
Brand Promotion,720,欧式白色大型篷房,欧式蓬,5m...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,欧式白色大型篷房,5m...,5m...,个,289.3202951
Brand Promotion,721,帐篷,,3m...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,帐篷,3m...,3m...,顶,29.4474453
Brand Promotion,722,帐篷围挡,,钢架...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,帐篷围挡,钢架...,钢架...,个,378.3991609
Brand Promotion,723,售酒蓬,,铝制...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,售酒蓬,铝制...,铝制...,个,185.7824203
Brand Promotion,724,印章,,具有...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,印章,具有...,具有...,个,205.7866838
Brand Promotion,725,现场视频剪辑,, 含...,Event,Event creative and manage fee & Event execution fee,People,Event Specific Personnel,现场视频剪辑师, 含..., 含...,人/天,192.1742047
Brand Promotion,726,产品造型展示台,,pV...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,产品造型展示台,pV...,pV...,元/套,80.47029245
Brand Promotion,727,浮空摆台,,订制...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,浮空摆台,订制...,订制...,元/个,211.2721018
Brand Promotion,728,花箱,花台,1....,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,花箱,1....,1....,套,480.8565094
Brand Promotion,729,现场试饮道具,,（试...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,现场试饮道具,（试...,（试...,套,361.1712063
Brand Promotion,730,每站物料包装及画面维护,物料翻新,简单...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,每站物料包装及画面维护,简单...,简单...,set,50.27397812
Brand Promotion,731,桁架,,sp...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,桁架,sp...,sp...,个,270.6186177
Brand Promotion,732,陈列架,,亚克...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,陈列架,亚克...,亚克...,个,448.827418
Brand Promotion,733,物料翻新,,损耗...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,物料翻新,损耗...,损耗...,项,337.0683534
Brand Promotion,734,物料翻新,,损耗...,Event,Event creative and manage fee & Event execution fee,Material,Fabrication,物料翻新,损耗...,损耗...,项,264.8613155
Brand Promotion,735,异性钢木地台,,50...,Event,Event creative and manage fee & Event execution fee,Material,Steel,异性钢木地台,50...,50...,套,12.30668101
Brand Promotion,736,钢架槽钢,,黑碳...,Event,Event creative and manage fee & Event execution fee,Material,Steel,钢架槽钢,黑碳...,黑碳...,元/米,68.05239673
Brand Promotion,737,电脑程序控制灯带 ,,LE...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,电脑程序控制灯带 ,LE...,LE...,项,214.2698168
Brand Promotion,738,零散物料采购,,清洁...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,零散物料采购,清洁...,清洁...,项,411.0944006
Brand Promotion,739,展示架,,不锈...,Event,Event creative and manage fee & Event execution fee,Material,Steel,金属烤金属色定制展示架,不锈...,不锈...,unit,349.1120333
Brand Promotion,740,单瓶陈列立柱顶部,,烤金...,Event,Event creative and manage fee & Event execution fee,Material,Steel,单瓶陈列立柱顶部,烤金...,烤金...,unit,107.9409554
Brand Promotion,741,单瓶陈列立柱顶部,,底部...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,单瓶陈列立柱顶部,底部...,底部...,unit,230.5502194
Brand Promotion,742,单瓶陈列立柱顶部,,4m...,Event,Event creative and manage fee & Event execution fee,AVL,Lighting,单瓶陈列立柱顶部,4m...,4m...,m²,175.2536996
Brand Promotion,743,单瓶陈列立柱,,25...,Event,Event creative and manage fee & Event execution fee,Material,Steel,单瓶陈列立柱,25...,25...,m,357.1185073
Brand Promotion,744,单瓶陈列立柱,,亚克...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,单瓶陈列立柱,亚克...,亚克...,unit,192.5729453
Brand Promotion,745,雪弗板,PVC,一平...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,雪弗板,一平...,一平...,unit,147.1341119
Brand Promotion,746,酒瓶立柱发光特陈（门头）,,亚克...,Event,Event creative and manage fee & Event execution fee,Material,Functional material,酒瓶立柱发光特陈（门头）,亚克...,亚克...,套,339.5960102
Brand Promotion,747,Logo霓虹灯,,LE...,Event,Event creative and manage fee & Event execution fee,Material,Font Production,Logo霓虹灯,LE...,LE...,个,264.0082619
Brand Promotion,748,软膜灯箱画面,,UV...,Event,Event creative and manage fee & Event execution fee,Material,Light Box,软膜灯箱画面,UV...,UV...,个,274.103136
Brand Promotion,749,黑色镜面不锈钢,,一平...,Event,Event creative and manage fee & Event execution fee,Material,Steel,黑色镜面不锈钢,一平...,一平...,面,312.6254246
Brand Promotion,750,铁架底漆,喷漆,环氧...,Event,Event creative and manage fee & Event execution fee,Material,Printing,铁架底漆,环氧...,环氧...,kg,274.8955984
Brand Promotion,751,铁架面漆,喷漆,PU...,Event,Event creative and manage fee & Event execution fee,Material,Printing,铁架面漆,PU...,PU...,kg,62.52760229
Brand Promotion,752,木质底漆,喷漆,PU...,Event,Event creative and manage fee & Event execution fee,Material,Printing,木质底漆,PU...,PU...,kg,388.6984471
Brand Promotion,753,木质面漆,喷漆,PU...,Event,Event creative and manage fee & Event execution fee,Material,Printing,木质面漆,PU...,PU...,kg,496.5514267
Brand Promotion,754,服务费,,服务...,Event,Event creative and manage fee & Event execution fee,service Fee,service Fee,服务费,服务...,服务...,per case,443.2439774
`;
