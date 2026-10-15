window.TREND_DATA = {
  "meta": {
    "lastUpdated": "2026-10-15T11:30:31+08:00",
    "methodology": "TikTok 官方不提供「全球娱乐总榜」，本榜为 5 个市场（美国 US 代表全球+欧美，印尼 ID / 菲律宾 PH / 越南 VN / 马来西亚 MY 代表东南亚）娱乐类（News & Entertainment）榜单合并去重、按官方播放量排序得出，不是某一张官方榜的原生前N条。每个市场每个时间窗口在合并前均已抓取≥30条候选，并排除四类内容：①硬新闻/政治事件/自然灾害通报及其衍生的\"灾情居家/避灾\"类内容、刑事案件等新闻类；②\"播放量高但公开检索无法确认具体走红原因\"的模糊话题（不满足\"火的原因写得清楚明白\"的最低标准）；③以某个具体真实公众人物（明星/网红/运动员等）为核心话题的内容，即使该人物身份或事件本身是清楚的，也不纳入本榜；④**政治类内容**（含国家法定节日/独立日/国庆日及其衍生的爱国主题标签矩阵，如印尼17 Agustus/Merdeka系列、越南国庆系列等，即使体量很大也一律排除）与**宗教类内容**（宗教纪念日/宗教修行主题/宗教节庆活动，如Maulid Nabi先知诞辰、Vu Lan盂兰盆节等）——本榜聚焦泛娱乐梗/影视综艺IP/生活方式潮流/舞蹈挑战等纯娱乐内容，不做政治、宗教、真人物话题的榜单化处理（2026-09-15起收紧，此前版本曾将国家法定节日的全民庆典类内容视为文化娱乐范畴保留，现已纠正）。TikTok Creative Center 官方仅提供 7天/30天/90天 三个时间窗口档位（无120天档位，无效period参数会静默回退到7天档，需注意）。官方页面排序采用其自有trending算法而非单纯按播放量降序，本榜的\"按播放量重排\"是本站自定口径，与官方页面顺序不完全一致属正常现象。 2026-09-24刷新：新增排除平台通用引流/直播涨粉类标签（如golivegrowfast/asktiktok/fyp变体等，均为平台功能推广非真实热梗）及\"含义完全无法追溯\"的模糊标签；Miss Grand International等赛事具体场次信息本轮未能逐一核实，已标注待核验。 2026-10-09刷新：恢复7市场口径（US/GB/BR/ID/TH/PH/VN，Creative Center 官方 News & Entertainment 分类，每市场每窗口抓取官方榜前60-80条后合并）；按红线排除巴西大选政治话题（lula/bolsonaro/eleicoes 系列等）、泰/越/印尼洪灾与森林火災类灾情话题、真人八卦与偶像团体话题、平台引流标签（fyp 变体/tiktokgrowthchallenge/livewithlowfollowers 等）与含义无法核实的本地语标签（traibuonnguoi/naparabang/rindupurnama 等，宁缺勿滥不标待核验）；排除后 7/30/90 天窗口分别入榜 23/20/20 条；抖音快照已同步刷新用于国内同步性核实。 2026-10-15刷新：延续7市场口径（US/GB/BR/ID/TH/PH/VN × 7/30/90天，官方News & Entertainment分类）；本次在重建登录态后直接调用Creative Center官方榜单接口（KnowledgeAPI/GetHashtagList，industryID=23000000000），每组合抓取官方榜top100（21组合共2100条，逐组合与页面内存数据做行数+数值校验和比对，全部一致），并验证三个时间窗口参数各自返回独立数据（无静默回退）。红线排除项包括：巴西大选第二轮政治话题矩阵（lula/bolsonaro/segundoturno/eleicoes系列）、泰/印尼/巴西洪灾与林火及火山灾情（น้ำท่วม/karhutla/queimadas/anakkrakatau等）、2026飓风季Isaias灾情（hurricane/isaias等）、泰国王室纪念与宗教仪式（13ตุลาคม系列/ทรงพระเจริญ/แห่เทียนพรรษา/ม้าทรง等）、印尼独立日矩阵与先知诞辰（17agustus/merdeka/maulidnabi/hutri等）、越南国庆矩阵（quockhanh系列/toquoctrongtim等）、印尼建国意识形态日（pancasila/g30spki系列）、康奈尔性侵案#IAmJaneDoe声援运动（刑事案件类）、Lindsay Clancy杀子案庭审狂欢（真实罪案类）、真人名人/偶像/乐队话题（The Weeknd、A7X、Dolly Parton、Trường Giang、Jimin、Glen Powell、Dua Lipa等）、平台引流与疑似运营标签（fyp变体/xyzcba/golive系列/tiktokgrowthchallenge/musiconstage/createsightinsight等）、含义无法核实的本地语与模糊标签（traibuonnguoi/cloverboys/malevola/uncledags/saoconcert/fakesituation等，宁缺勿滥）。排除后7/30/90天窗口分别入榜24/22/20条。本轮新核实入榜：Carrie限定剧（10/7 Prime Video全季上线）、Avatar: Seven Havens（10/9 Paramount+首播）、Haunted Hotel S2（10/9 Netflix）、NYCC二十周年（10/8-11，龙珠超比鲁斯世界首映）、South Park S29改名'South America'梗（10/14第3集）、爱情假说电影（9/23）、A Different World重启（9/24）、生化危机电影（9/18）、DWTS S34（9/15首播）、Lanterns绿灯侠剧（8/16 HBO）、Rock in Rio 2026（9/4-13）、Pestapora雅加达音乐节（9月）、MGI 2026印度总决赛（10月）、玉簟秋中剧出海（10/11开播，抖音热搜同日第17位国内外同步）等；实习医生格蕾新一季10/15回归（ABC官方秋季排期）。抖音参考快照已同步刷新（2026-10-15 top30）。",
    "windowDescs": {
      "7": "近7天，TikTok Creative Center 官方口径",
      "30": "近30天，TikTok Creative Center 官方口径",
      "90": "近90天，TikTok Creative Center 官方口径"
    },
    "douyinFetchedAt": "2026-10-15T11:30:31+08:00",
    "douyinNote": "抖音热搜与 TikTok Creative Center 的热度算法、语言、内容生态均不同，两者数值不可直接比较；抖音数据仅用于核实同一话题是否在国内同步可见，不参与本榜排序。",
    "videoNote": "每条下方嵌入的视频为本人实际打开该话题页时当前展示的真实视频（作者+视频ID均为抓取所得，非编造）；若近期抓取时话题页触发登录验证或未能成功嵌入，则该条 videoEmbed 为 null，页面会显示「点击在 TikTok 打开」的兜底入口，不编造视频信息。",
    "fusionNote": "融合建议为基于该热梗特征给 MCGG（Magic Chess: GoGo）的创意方向参考，非官方立项计划；凡涉及真实人物肖像、第三方IP版权的条目，均已标注风险并给出更稳妥的替代路径，不建议未经授权直接商用。",
    "redLine": "未编造任何带数字 ID 的具体视频 URL；泰语/越南语/印尼语本地人名、剧集、缩写类话题含义无法独立确认的，一律标注【含义待核验】。"
  },
  "windows": {
    "7": {
      "items": [
        {
          "tag": "#missgrandinternational",
          "name": "Miss Grand International（MGI国际选美大赛）",
          "regionGroup": "global",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "19.1K",
              "views": "421.9M"
            },
            {
              "code": "PH",
              "posts": "7.1K",
              "views": "111.4M"
            },
            {
              "code": "TH",
              "posts": "11.2K",
              "views": "100.7M"
            }
          ],
          "summary": "全球头部国际选美赛事之一，以舞台制作宏大、粉丝动员力极强著称；2026年大赛首次移师印度，活动跨斋浦尔、阿格拉、新德里三城，总决赛定于10月举行。",
          "whyHot": "MGI 2026进入10月印度总决赛周期，菲律宾/泰国/越南等东南亚选美强国的粉丝应援、选手国服与预赛环节二创集中爆发；主办方于2025年10月泰国总决赛上官宣印度主办权。",
          "origin": "MGI选美组织官方赛事。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandinternational",
            "search": "https://www.tiktok.com/search?q=missgrandinternational",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可借势'国际赛事应援'氛围做棋盘皮肤的票选/应援玩法联想（避免使用真实选手肖像），具体方向待策划评估。",
            "video": "可参考选美赛事的'国服展示+舞台走位'视觉语言做皮肤展示短视频，规避真人版权风险。"
          },
          "rank": 1
        },
        {
          "tag": "#greysanatomy",
          "name": "Grey's Anatomy（《实习医生格蕾》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "12.7K",
              "views": "389.0M"
            }
          ],
          "summary": "美国电视史最长寿的黄金档医疗剧，2005年起在ABC播出，以西雅图格雷斯医院医生的职业与情感群像为主线。",
          "whyHot": "ABC官方2026秋季档排期显示该剧新一季于10月15日（周四）回归，首播周带动剧集讨论与经典场面剪辑二创；该剧已播出超450集，是秋季档回归事件中体量最大的医疗剧IP。",
          "origin": "ABC官方剧集+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/greysanatomy",
            "search": "https://www.tiktok.com/search?q=greysanatomy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "医疗剧'高压职业群像'叙事可为MCGG棋子角色背景故事提供参考，具体待策划评估。",
            "video": "可参考其'病例单元剧+情感线穿插'的剪辑节奏做角色向短视频。"
          },
          "rank": 2
        },
        {
          "tag": "#diadascrianças",
          "name": "Dia das Crianças（巴西儿童节）",
          "regionGroup": "global",
          "category": "节日/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "BR",
              "posts": "86.1K",
              "views": "288.6M"
            }
          ],
          "summary": "巴西儿童节（10 月 12 日）节日标签：礼物开箱、亲子互动内容聚集。",
          "whyHot": "节前礼物种草与亲子内容集中释放，商业节点+家庭 UGC 双驱动。",
          "origin": "巴西法定节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/diadascrianças",
            "search": "https://www.tiktok.com/search?q=diadascrian%C3%A7as",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=BR"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "pracinhadecimafutebol",
            "videoId": "7695815202498940167"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 3
        },
        {
          "tag": "#2ngay1dem",
          "name": "2 Ngày 1 Đêm（越南综艺《两天一夜》）",
          "regionGroup": "global",
          "category": "综艺",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "4.9K",
              "views": "248.6M"
            }
          ],
          "summary": "越南热门旅行真人秀综艺，引进韩国《两天一夜》模式，由Dong Tay Promotion制作、HTV播出，以喜剧演员Trường Giang为首的固定嘉宾团在越南各地旅行并完成游戏任务。",
          "whyHot": "节目处于常规周更播出期，搞笑游戏环节与嘉宾互动切片在越南TikTok持续二创传播，属越南头部国民综艺的稳定话题（本周具体爆点集数待核验）。",
          "origin": "Dong Tay Promotion/HTV官方综艺。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/2ngay1dem",
            "search": "https://www.tiktok.com/search?q=2ngay1dem",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "旅行+游戏任务类综艺的'惩罚环节'喜感可为MCGG对战结算动画提供梗参考。",
            "video": "可参考其'任务卡+反转惩罚'的短视频剪辑结构。"
          },
          "rank": 4
        },
        {
          "tag": "#carrie",
          "name": "Carrie（2026《魔女嘉莉》限定剧）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "11.0K",
              "views": "238.1M"
            },
            {
              "code": "BR",
              "posts": "2.1K",
              "views": "38.7M"
            },
            {
              "code": "GB",
              "posts": "1.2K",
              "views": "35.2M"
            }
          ],
          "summary": "改编自斯蒂芬·金同名小说的超自然恐怖限定剧，迈克·弗拉纳根（《鬼入侵》《睡梦医生》）主创执导，萨默·H·豪厄尔主演，8集于2026年10月7日在Prime Video一次性上线。",
          "whyHot": "首播周（10月7日全季上线）恰好在本轮抓取窗口内，烂番茄开分85%好评；剧版将经典'毕业舞会血洗'故事移植到社交媒体霸凌时代，名场面复刻与新旧版对比讨论在美英巴多市场同步发酵。",
          "origin": "Amazon/Prime Video官方上线。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/carrie",
            "search": "https://www.tiktok.com/search?q=carrie",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'被霸凌者觉醒反杀'的黑暗童话张力可为MCGG暗黑系棋盘皮肤提供情绪基调参考（避免血腥直给）。",
            "video": "可参考其'平静日常→超自然爆发'的对比剪辑手法。"
          },
          "rank": 5
        },
        {
          "tag": "#halloween",
          "name": "Halloween（万圣节）",
          "regionGroup": "global",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "11.7K",
              "views": "182.1M"
            },
            {
              "code": "ID",
              "posts": "10.9K",
              "views": "106.7M"
            },
            {
              "code": "TH",
              "posts": "11.1K",
              "views": "72.5M"
            }
          ],
          "summary": "万圣节主题内容标签：妆容、变装、装饰、派对与恐怖趣味创作。",
          "whyHot": "10 月进入万圣节预热期，变装/妆容/家居装饰内容集中发布，是欧美市场年度最大的季节创作节点之一。",
          "origin": "西方传统节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloween",
            "search": "https://www.tiktok.com/search?q=halloween",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 6
        },
        {
          "tag": "#missgrandvietnam",
          "name": "Miss Grand Vietnam（MGI越南国赛）",
          "regionGroup": "global",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "8.0K",
              "views": "152.7M"
            }
          ],
          "summary": "MGI国际大赛的越南国家选拔赛；2026年冠军Emoura Phạm（胡志明市代表）于8月1日加冕，将代表越南出征印度MGI 2026总决赛。",
          "whyHot": "MGI 2026进入10月印度总决赛期，越南粉丝为本国选手造势，国赛标签与送行/回顾内容再次升温；越南是MGI体系关注度最高的市场之一。",
          "origin": "MGI Vietnam官方赛事。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandvietnam",
            "search": "https://www.tiktok.com/search?q=missgrandvietnam",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "同MGI：应援玩法联想，避免真人肖像。",
            "video": "可参考'国服展示'视觉语言，规避真人版权。"
          },
          "rank": 7
        },
        {
          "tag": "#missgrandinternational2026",
          "name": "Miss Grand International 2026（MGI 2026印度总决赛）",
          "regionGroup": "global",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "5.2K",
              "views": "148.6M"
            },
            {
              "code": "TH",
              "posts": "7.3K",
              "views": "69.0M"
            },
            {
              "code": "PH",
              "posts": "1.8K",
              "views": "37.2M"
            }
          ],
          "summary": "2026年度MGI赛事专属标签：大赛首次登陆印度，活动跨斋浦尔、阿格拉、新德里三城，总决赛2026年10月举行。",
          "whyHot": "总决赛期（10月）赛事内容密集释出，各国选手国服、预赛表现与夺冠预测在菲泰越等市场讨论度高企；本届还伴随Miss Grand USA冠军8月被除名改派等赛事话题。",
          "origin": "MGI官方赛事。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandinternational2026",
            "search": "https://www.tiktok.com/search?q=missgrandinternational2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "同MGI：赛事应援氛围玩法参考。",
            "video": "可参考赛事舞台的金色/华丽视觉系做皮肤概念。"
          },
          "rank": 8
        },
        {
          "tag": "#henrydanger",
          "name": "Henry Danger（《超能小子亨利》）",
          "regionGroup": "global",
          "category": "影视剧集/IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "9.0K",
              "views": "136.5M"
            }
          ],
          "summary": "尼克儿童频道2014-2020年播出的青少年超级英雄动作喜剧：13岁少年亨利·哈特成为超级英雄'船长侠'的见习搭档，在打击犯罪与隐藏双重身份间周旋；2025年1月推出衍生电影《Henry Danger: The Movie》（Paramount+）。",
          "whyHot": "童年怀旧剪辑在美区TikTok流行（与childhoodshows等怀旧标签同波），本周未见新官方内容发布，走红触发点判断为Z世代怀旧二创潮（具体导火索待核验）。",
          "origin": "Nickelodeon剧集IP+粉丝怀旧剪辑。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/henrydanger",
            "search": "https://www.tiktok.com/search?q=henrydanger",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'少年英雄双重身份'设定与MCGG棋子角色叙事天然契合，可作皮肤人设参考。",
            "video": "可参考其'日常搞笑+超能力反转'的短剧节奏。"
          },
          "rank": 9
        },
        {
          "tag": "#spiderman",
          "name": "Spider-Man（《蜘蛛侠：崭新之日》相关）",
          "regionGroup": "global",
          "category": "影视/IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "15.1K",
              "views": "133.4M"
            }
          ],
          "summary": "漫威电影《蜘蛛侠：崭新之日》（2026年7月31日上映，全球票房大爆、其预告曾创影史单日播放纪录）相关内容标签，本周以菲律宾市场的剪辑与二创为主。",
          "whyHot": "暑期档上映后的长尾二创，叠加《复仇者联盟5：毁灭之日》（12月18日上映，同宇宙联动）预告宣发的热度外溢；PH市场单周冲高的具体触发（如流媒体上线/重映）待核验。",
          "origin": "Marvel Studios电影IP粉丝内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/spiderman",
            "search": "https://www.tiktok.com/search?q=spiderman",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "蜘蛛侠IP版权在漫威/索尼，MCGG不可直接使用；可参考'城市楼宇穿梭'的空间感做原创棋盘设计。",
            "video": "可参考其预告片'彩蛋逐帧解析'的互动式剪辑玩法。"
          },
          "rank": 10
        },
        {
          "tag": "#greysanatomyedit",
          "name": "Grey's Anatomy Edit（《实习医生格蕾》剪辑二创）",
          "regionGroup": "global",
          "category": "影视剧集/二创",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "4.8K",
              "views": "124.8M"
            }
          ],
          "summary": "《实习医生格蕾》的粉丝剪辑标签，聚焦剧中高冲击力的医疗场面与情感台词混剪。",
          "whyHot": "随秋季档新一季10月15日回归同步升温；格蕾的台词剪辑（尤其经典角色独白）是美剧二创的长青格式，本轮与新季首播周重叠。",
          "origin": "粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/greysanatomyedit",
            "search": "https://www.tiktok.com/search?q=greysanatomyedit",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "同#greysanatomy：职业群像叙事可作MCGG角色故事参考。",
            "video": "台词混剪格式可直接借鉴：金句字幕卡+情绪递进配乐。"
          },
          "rank": 11
        },
        {
          "tag": "#southpark",
          "name": "South Park（美国经典成人动画）",
          "regionGroup": "global",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "8.5K",
              "views": "112.1M"
            },
            {
              "code": "BR",
              "posts": "2.1K",
              "views": "34.4M"
            },
            {
              "code": "ID",
              "posts": "1.2K",
              "views": "26.9M"
            }
          ],
          "summary": "自1997年播出至今的Comedy Central成人向讽刺动画，以粗糙手绘风格+社会时事讽刺著称。",
          "whyHot": "第29季于2026年9月16日开播（官方整季玩梗改名'South America'，讽刺安大略湖改名事件），隔周更新共6集，第3集恰于10月14日播出；新集上线与改名梗带动经典恶搞片段、角色台词剪辑二创，多市场同步上榜。",
          "origin": "Comedy Central官方剧集+观众剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southpark",
            "search": "https://www.tiktok.com/search?q=southpark",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freesouthparkepisodes9",
            "videoId": "7694450361234738453"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 12
        },
        {
          "tag": "#barbie",
          "name": "Barbie（芭比IP）",
          "regionGroup": "global",
          "category": "影视/IP梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "38.0K",
              "views": "99.5M"
            },
            {
              "code": "GB",
              "posts": "6.0K",
              "views": "19.4M"
            }
          ],
          "summary": "美泰芭比娃娃IP及2023年真人电影《芭比》的长尾内容标签；《芭比2》尚未立项（Skydance联席CEO、前美泰CEO Ynon Kreiz 2026年公开回应'谈续集还太早'）。",
          "whyHot": "近期TikTok兴起复古芭比仿妆/穿搭模仿视频（9月有单条破千万播放），芭比核（Barbie-core）粉色美学内容持续长尾产出；本周无官方新发布，具体触发待核验。",
          "origin": "美泰IP+创作者自发仿妆/美学内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/barbie",
            "search": "https://www.tiktok.com/search?q=barbie",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "粉色芭比核美学与MCGG女性向棋盘皮肤方向契合，但需规避美泰商标，建议做'灵感同类'原创粉色系。",
            "video": "可参考'真人等比复刻娃娃造型'的变身剪辑格式。"
          },
          "rank": 13
        },
        {
          "tag": "#childhoodshows",
          "name": "Childhood Shows（童年剧集怀旧剪辑）",
          "regionGroup": "global",
          "category": "怀旧/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "4.7K",
              "views": "65.1M"
            }
          ],
          "summary": "盘点'小时候看过的电视节目'的怀旧内容标签，覆盖尼克儿童频道、迪士尼频道、卡通频道等千禧一代/Z世代的童年剧集记忆。",
          "whyHot": "怀旧剪辑是美区TikTok的长青内容格式，本轮与henrydanger等具体IP怀旧标签形成同一波热度；'你的童年片单'互动格式天然适合评论区讨论，机制清楚。",
          "origin": "创作者自发怀旧剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/childhoodshows",
            "search": "https://www.tiktok.com/search?q=childhoodshows",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'童年IP回忆杀'情绪可为MCGG老玩家召回campaign提供切入角度。",
            "video": "可参考'片头曲一响就DNA动了'的金曲混剪格式。"
          },
          "rank": 14
        },
        {
          "tag": "#hauntedhotel",
          "name": "Haunted Hotel（Netflix动画《闹鬼旅馆》第二季）",
          "regionGroup": "global",
          "category": "影视/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "4.2K",
              "views": "64.8M"
            }
          ],
          "summary": "Netflix成人向恐怖喜剧动画《Haunted Hotel》第二季于2026年10月9日上线（首季2025年播出），讲述一家人经营闹鬼旅馆的黑色幽默故事。",
          "whyHot": "第二季上线周（10月9日）恰逢万圣节季预热期，恐怖题材内容在10月集中放量，新季上线带动美区标签冲榜。",
          "origin": "Netflix官方上线。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hauntedhotel",
            "search": "https://www.tiktok.com/search?q=hauntedhotel",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'闹鬼旅馆'场景与MCGG万圣节主题棋盘皮肤高度契合，可做'旅馆大堂棋盘'概念。",
            "video": "可参考其'恐怖+喜剧'反差基调做节日向短视频。"
          },
          "rank": 15
        },
        {
          "tag": "#nycc",
          "name": "New York Comic Con 2026（纽约漫展20周年）",
          "regionGroup": "global",
          "category": "潮流文化/展会事件",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "9.6K",
              "views": "60.7M"
            }
          ],
          "summary": "北美最大流行文化展会，2026年10月8-11日在贾维茨中心举行，适逢创办20周年，主题联动纽约科尼岛。",
          "whyHot": "展会恰在本轮抓取窗口内举行：《龙珠超：比鲁斯》世界首映、高达SEED前传定档2027年2月、NARUTO/Percy Jackson S3/星际迷航等重磅panel密集释出，是本周全球ACGN话题的策源地。",
          "origin": "官方展会活动。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/nycc",
            "search": "https://www.tiktok.com/search?q=nycc",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "漫展'限定周边+cosplay巡游'氛围可为MCGG线下活动/皮肤发售节奏提供参考。",
            "video": "可参考展会'一日盘点'快剪格式做活动预热内容。"
          },
          "rank": 16
        },
        {
          "tag": "#avatarsevenhavens",
          "name": "Avatar: Seven Havens（《降世神通：七重天堂》）",
          "regionGroup": "global",
          "category": "影视/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "3.6K",
              "views": "57.7M"
            }
          ],
          "summary": "Paramount+《降世神通》宇宙全新2D动画剧集，由原版主创迪马蒂诺与科尼茨科打造，故事设于《科拉传奇》之后的破碎时代：年轻御土师帕维发现自己是被预言为'人类毁灭者'的新任神通；共26集分两卷，2026年10月9日首播。",
          "whyHot": "首播周（10月9日）+《科拉传奇》完结12年来首个正统续作的情怀效应，叠加同期《安昂传说》电影与NYCC动漫周热度，粉丝解析与二创集中爆发。",
          "origin": "Paramount+/Avatar Studios官方上线。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/avatarsevenhavens",
            "search": "https://www.tiktok.com/search?q=avatarsevenhavens",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'元素御术'体系与MCGG棋子元素属性设计天然呼应，可作技能视觉参考（注意规避派拉蒙IP直接挪用）。",
            "video": "可参考'世界观速览'科普剪辑格式做皮肤背景故事视频。"
          },
          "rank": 17
        },
        {
          "tag": "#randymarsh",
          "name": "Randy Marsh（《南方公园》角色梗）",
          "regionGroup": "global",
          "category": "影视/动画梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "4.9K",
              "views": "55.6M"
            },
            {
              "code": "GB",
              "posts": "755",
              "views": "10.5M"
            }
          ],
          "summary": "《南方公园》中主角斯坦的父亲Randy Marsh的角色标签，以荒诞脱线行为与名场面著称，是粉丝二创最爱素材之一。",
          "whyHot": "随《南方公园》第29季（9月16日开播、官方整季玩梗改名'South America'、隔周更共6集）播出升温，第3集恰于10月14日播出，角色切片与名场面剪辑同步冲榜。",
          "origin": "Comedy Central/Paramount+剧集IP粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/randymarsh",
            "search": "https://www.tiktok.com/search?q=randymarsh",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'荒诞中年老爹'角色梗可启发MCGG趣味棋子人设。",
            "video": "可参考角色名场面+台词字幕的快节奏切片格式。"
          },
          "rank": 18
        },
        {
          "tag": "#halloweencostume",
          "name": "Halloween Costume（万圣节服装）",
          "regionGroup": "global",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "3.9K",
              "views": "47.8M"
            }
          ],
          "summary": "万圣节服装主题内容标签，聚合服装reveal、DIY制作教程、情侣/团体服装创意等。",
          "whyHot": "10月万圣节季进入服装内容年度峰值期，节前2-3周是服装灵感内容的集中发布窗口，菲/英/美多市场同步上榜。",
          "origin": "创作者自发季节性内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweencostume",
            "search": "https://www.tiktok.com/search?q=halloweencostume",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "万圣节cosplay氛围与MCGG节日限定皮肤发售节点天然契合。",
            "video": "可参考'服装从草图到成品'的过程剪辑格式。"
          },
          "rank": 19
        },
        {
          "tag": "#muadong",
          "name": "Mùa Đông（越南语‘冬天’）",
          "regionGroup": "sea",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "15.2K",
              "views": "33.9M"
            }
          ],
          "summary": "越南语冬季/转凉季节内容通用标签。",
          "whyHot": "越北进入转凉季节，季节情绪与穿搭内容集中发布。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/muadong",
            "search": "https://www.tiktok.com/search?q=muadong",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hieudeptrai_211",
            "videoId": "7695306672453045522"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 20
        },
        {
          "tag": "#thelamentofautumn",
          "name": "The Lament of Autumn（中剧《玉簟秋》出海）",
          "regionGroup": "global",
          "category": "影视剧集/中剧出海",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "2.2K",
              "views": "33.4M"
            },
            {
              "code": "TH",
              "posts": "2.1K",
              "views": "24.2M"
            }
          ],
          "summary": "民国情感剧《玉簟秋》（丞磊、徐若晗主演，改编自灵希同名小说）的英文标签，2026年10月11日在湖南卫视/芒果TV开播，标签在印尼、泰国市场同步升温。",
          "whyHot": "开播周（10月11日）民国剧切片与CP内容在东南亚华语剧观众圈层扩散；抖音热搜同日出现'玉簟秋修罗场开局好刺激'（第17位），国内外热度同步，机制清楚。",
          "origin": "湖南卫视/芒果TV官方剧集。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/thelamentofautumn",
            "search": "https://www.tiktok.com/search?q=thelamentofautumn",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "found",
            "note": "2026-10-15 抖音热搜快照第17位\"玉簟秋修罗场开局好刺激\"，同剧集国内热度同步。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "民国美学（旗袍/军阀/宅门）可为MCGG东方复古主题棋盘提供美术参考。",
            "video": "可参考'修罗场名场面'切片格式做剧集向短视频。"
          },
          "rank": 21
        },
        {
          "tag": "#patrickjane",
          "name": "Patrick Jane（《超感神探》主角IP）",
          "regionGroup": "sea",
          "category": "影视剧集IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "649",
              "views": "32.9M"
            }
          ],
          "summary": "罪案剧《超感神探》(The Mentalist) 主角 Patrick Jane：心理师式观察与读心推理人设。",
          "whyHot": "经典罪案剧 clip 二创与‘观察术/读心’梗模板常青，角色名标签稳定积累。",
          "origin": "剧集官方 IP。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/patrickjane",
            "search": "https://www.tiktok.com/search?q=patrickjane",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "tekno_edit_",
            "videoId": "7656541594300222727"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 22
        },
        {
          "tag": "#attackontitan",
          "name": "Attack on Titan（《进击的巨人》）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "GB",
              "posts": "18.7K",
              "views": "31.2M"
            }
          ],
          "summary": "谏山创漫画改编的全球现象级动画IP，正传动画已完结，粉丝剪辑、名场面混剪与解说内容长期活跃。",
          "whyHot": "动漫剪辑长尾稳定话题，本周与NYCC动漫周（东映展区等）热度重叠；无新官方企划公布，本周走红具体触发待核验。",
          "origin": "讲谈社/动画制作委员会IP+粉丝二创。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/attackontitan",
            "search": "https://www.tiktok.com/search?q=attackontitan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=GB"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'巨人对人类'的压迫感尺度对比可为MCGG棋盘视觉层次提供参考。",
            "video": "可参考其'高燃名场面+泽野弘之配乐'的经典混剪公式。"
          },
          "rank": 23
        },
        {
          "tag": "#dragonball",
          "name": "Dragon Ball（《龙珠超：比鲁斯》新番）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "GB",
              "posts": "18.4K",
              "views": "28.5M"
            }
          ],
          "summary": "鸟山明《龙珠》系列标签；新动画《龙珠超：比鲁斯》2026年10月8日在NYCC举行世界首映先行上映，10月11日在富士电视台开播，Prime Video/U-NEXT最速配信。",
          "whyHot": "新番世界首映（NYCC 10月8日）+日本开播（10月11日）双节点带动经典IP讨论回潮，英日市场同步升温，机制清楚。",
          "origin": "东映动画官方新番宣发。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dragonball",
            "search": "https://www.tiktok.com/search?q=dragonball",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=GB"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'战斗力数值+变身形态'体系与MCGG棋子升星视觉逻辑相通，可参考其能量色阶设计。",
            "video": "可参考新番'第一集无剧透安利'格式。"
          },
          "rank": 24
        }
      ]
    },
    "30": {
      "items": [
        {
          "tag": "#southpark",
          "name": "South Park（美国经典成人动画）",
          "regionGroup": "global",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "248.6K",
              "views": "3.8B"
            },
            {
              "code": "GB",
              "posts": "32.8K",
              "views": "661.1M"
            },
            {
              "code": "PH",
              "posts": "15.0K",
              "views": "357.7M"
            }
          ],
          "summary": "自1997年播出至今的Comedy Central成人向讽刺动画，以粗糙手绘风格+社会时事讽刺著称。",
          "whyHot": "第29季于2026年9月16日开播（官方整季玩梗改名'South America'，讽刺安大略湖改名事件），隔周更新共6集，第3集恰于10月14日播出；新集上线与改名梗带动经典恶搞片段、角色台词剪辑二创，多市场同步上榜。",
          "origin": "Comedy Central官方剧集+观众剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southpark",
            "search": "https://www.tiktok.com/search?q=southpark",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freesouthparkepisodes9",
            "videoId": "7694450361234738453"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 1
        },
        {
          "tag": "#dwts",
          "name": "Dancing with the Stars（美版《与星共舞》第34季）",
          "regionGroup": "global",
          "category": "真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "72.5K",
              "views": "2.3B"
            }
          ],
          "summary": "ABC长寿名人舞蹈竞技真人秀；第34季2026年9月15-16日两晚首播（ABC/Disney+同步直播），11月25日总决赛，本季有Robert Irwin等名人参赛。",
          "whyHot": "第34季正在播出期（9-11月），每周直播的舞蹈片段、评分争议与投票话题持续产出；节目刚获十年来首个艾美奖最佳竞技真人秀提名，国民度高。",
          "origin": "ABC官方节目。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dwts",
            "search": "https://www.tiktok.com/search?q=dwts",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'名人+职业舞伴'的双人协作赛制可类比MCGG双人模式玩法设计。",
            "video": "可参考其'舞台运镜+慢动作定格'的舞蹈剪辑格式。"
          },
          "rank": 2
        },
        {
          "tag": "#southparkedit",
          "name": "South Park 剪辑二创",
          "regionGroup": "global",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "104.0K",
              "views": "1.7B"
            },
            {
              "code": "GB",
              "posts": "3.1K",
              "views": "271.0M"
            }
          ],
          "summary": "与#southpark同源，专指粉丝对该剧经典片段/台词做的剪辑向二创内容标签。",
          "whyHot": "剪辑类内容天然自带话题标签便于归类传播，跟随剧集热度同步上涨。",
          "origin": "观众自发剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southparkedit",
            "search": "https://www.tiktok.com/search?q=southparkedit",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "princeleoww",
            "videoId": "7695675199081008414"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 3
        },
        {
          "tag": "#southamerica",
          "name": "South America（《南方公园》改名梗）",
          "regionGroup": "global",
          "category": "影视/动画梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "86.8K",
              "views": "1.3B"
            },
            {
              "code": "GB",
              "posts": "2.9K",
              "views": "197.0M"
            }
          ],
          "summary": "源自《南方公园》主创帕克/斯通在第29季开播前宣布把剧名改成'South America'——讽刺特朗普把安大略湖改名'美国湖'、苹果谷歌地图随即跟进的操作；S29首集标题即《South American Biker Gangs》。",
          "whyHot": "改名梗本身成为可传播话题，粉丝以southamerica标签玩梗应援；第29季9月16日起隔周更新（共6集），10月14日第3集播出带动标签30天窗口累计13亿播放。",
          "origin": "Comedy Central/Paramount+官方玩梗营销+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southamerica",
            "search": "https://www.tiktok.com/search?q=southamerica",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'官方自黑玩梗'的营销胆量值得MCGG社区运营借鉴（改名/整活式公告）。",
            "video": "可参考其'声明体玩梗'的公告视频格式。"
          },
          "rank": 4
        },
        {
          "tag": "#halloween",
          "name": "Halloween（万圣节）",
          "regionGroup": "global",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "GB",
              "posts": "173.3K",
              "views": "1.2B"
            },
            {
              "code": "BR",
              "posts": "100.2K",
              "views": "715.3M"
            },
            {
              "code": "PH",
              "posts": "25.5K",
              "views": "399.8M"
            },
            {
              "code": "ID",
              "posts": "20.7K",
              "views": "225.2M"
            },
            {
              "code": "TH",
              "posts": "20.3K",
              "views": "144.6M"
            },
            {
              "code": "VN",
              "posts": "12.2K",
              "views": "105.0M"
            }
          ],
          "summary": "万圣节主题内容标签：妆容、变装、装饰、派对与恐怖趣味创作。",
          "whyHot": "10 月进入万圣节预热期，变装/妆容/家居装饰内容集中发布，是欧美市场年度最大的季节创作节点之一。",
          "origin": "西方传统节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloween",
            "search": "https://www.tiktok.com/search?q=halloween",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=GB"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 5
        },
        {
          "tag": "#october",
          "name": "October（十月通用月份标签）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "338.9K",
              "views": "942.4M"
            },
            {
              "code": "GB",
              "posts": "64.1K",
              "views": "158.5M"
            },
            {
              "code": "PH",
              "posts": "30.9K",
              "views": "80.4M"
            },
            {
              "code": "ID",
              "posts": "20.6K",
              "views": "50.6M"
            },
            {
              "code": "BR",
              "posts": "4.3K",
              "views": "37.8M"
            },
            {
              "code": "TH",
              "posts": "6.5K",
              "views": "11.5M"
            },
            {
              "code": "VN",
              "posts": "3.9K",
              "views": "10.3M"
            }
          ],
          "summary": "十月通用内容标签，聚合换季穿搭、月度总结、秋景等季节性生活内容。",
          "whyHot": "北半球入秋叠加万圣节预热，十月是季节内容的集中释放期，通用月份标签按惯例汇聚全月 UGC。",
          "origin": "创作者自发通用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/october",
            "search": "https://www.tiktok.com/search?q=october",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "themindaa",
            "videoId": "7691451275795352864"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 6
        },
        {
          "tag": "#afazenda",
          "name": "A Fazenda（巴西真人秀《农场》）",
          "regionGroup": "global",
          "category": "真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "BR",
              "posts": "47.7K",
              "views": "865.4M"
            }
          ],
          "summary": "巴西 Record TV 的农场隔离真人秀 franchise，每年约 9-12 月播出新季。",
          "whyHot": "新季播出期冲突 clip 与观众投票讨论集中爆发，是巴西市场年度综艺节点。",
          "origin": "电视台官方综艺 IP。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/afazenda",
            "search": "https://www.tiktok.com/search?q=afazenda",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=BR"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dieguinhotv",
            "videoId": "7695953728955796757"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 7
        },
        {
          "tag": "#homecoming",
          "name": "Homecoming（美国校园返校节）",
          "regionGroup": "global",
          "category": "校园/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "192.9K",
              "views": "845.7M"
            }
          ],
          "summary": "美国中学与大学的返校节传统活动（多在9-10月），包含橄榄球赛、舞会、游行与返校国王/皇后评选，是秋季校园文化的核心事件。",
          "whyHot": "9-10月为全美返校节集中期，提案视频（hocoproposal）、服装转场（hocotransition）、舞会片段等衍生内容批量产出，多市场（美/巴/印尼/泰/越）上榜。",
          "origin": "美国校园传统活动+创作者自发记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/homecoming",
            "search": "https://www.tiktok.com/search?q=homecoming",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'校园舞会'场景可作MCGG青春主题棋盘的视觉母题（注意用研红线：校园题材需谨慎评估受众偏好）。",
            "video": "可参考'提案惊喜瞬间'的反应式剪辑格式。"
          },
          "rank": 8
        },
        {
          "tag": "#missgrandinternational",
          "name": "Miss Grand International（MGI国际选美大赛）",
          "regionGroup": "global",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "40.1K",
              "views": "803.0M"
            },
            {
              "code": "TH",
              "posts": "25.5K",
              "views": "166.1M"
            },
            {
              "code": "PH",
              "posts": "13.6K",
              "views": "164.1M"
            }
          ],
          "summary": "全球头部国际选美赛事之一，以舞台制作宏大、粉丝动员力极强著称；2026年大赛首次移师印度，活动跨斋浦尔、阿格拉、新德里三城，总决赛定于10月举行。",
          "whyHot": "MGI 2026进入10月印度总决赛周期，菲律宾/泰国/越南等东南亚选美强国的粉丝应援、选手国服与预赛环节二创集中爆发；主办方于2025年10月泰国总决赛上官宣印度主办权。",
          "origin": "MGI选美组织官方赛事。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandinternational",
            "search": "https://www.tiktok.com/search?q=missgrandinternational",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可借势'国际赛事应援'氛围做棋盘皮肤的票选/应援玩法联想（避免使用真实选手肖像），具体方向待策划评估。",
            "video": "可参考选美赛事的'国服展示+舞台走位'视觉语言做皮肤展示短视频，规避真人版权风险。"
          },
          "rank": 9
        },
        {
          "tag": "#vmas",
          "name": "MTV VMAs（2026 MTV音乐录影带大奖）",
          "regionGroup": "global",
          "category": "音乐/颁奖礼",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "17.8K",
              "views": "633.3M"
            },
            {
              "code": "GB",
              "posts": "3.3K",
              "views": "84.3M"
            }
          ],
          "summary": "MTV音乐录影带大奖，2026年颁奖礼于9月27日举行（CBS/Paramount+同步），是美国乐坛年度最重要的颁奖礼之一。",
          "whyHot": "颁奖礼（9月27日）在30天窗口内，现场表演切片、红毯造型与获奖/失利讨论集中传播。",
          "origin": "MTV官方颁奖礼。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/vmas",
            "search": "https://www.tiktok.com/search?q=vmas",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "颁奖礼'舞台视觉系'可为MCGG音乐主题皮肤提供参考。",
            "video": "可参考'最佳舞台TOP5'盘点剪辑格式。"
          },
          "rank": 10
        },
        {
          "tag": "#uni",
          "name": "Uni（英国大学开学季内容）",
          "regionGroup": "global",
          "category": "校园/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "GB",
              "posts": "73.3K",
              "views": "560.3M"
            }
          ],
          "summary": "英国大学生对'university'的口语简称标签，聚合开学搬家、宿舍生活、课程与社团内容。",
          "whyHot": "英国大学9月下旬开学，新生周（Freshers' Week）与开学季内容集中发布，带动通用校园标签冲榜（与freshers标签同波）。",
          "origin": "创作者自发校园内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/uni",
            "search": "https://www.tiktok.com/search?q=uni",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=GB"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "开学季'装备清单/宿舍改造'内容形态可为MCGG赛季开启宣发提供节奏参考。",
            "video": "可参考'开学第一天vlog'格式。"
          },
          "rank": 11
        },
        {
          "tag": "#diadascrianças",
          "name": "Dia das Crianças（巴西儿童节）",
          "regionGroup": "global",
          "category": "节日/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "BR",
              "posts": "192.5K",
              "views": "547.8M"
            }
          ],
          "summary": "巴西儿童节（10 月 12 日）节日标签：礼物开箱、亲子互动内容聚集。",
          "whyHot": "节前礼物种草与亲子内容集中释放，商业节点+家庭 UGC 双驱动。",
          "origin": "巴西法定节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/diadascrianças",
            "search": "https://www.tiktok.com/search?q=diadascrian%C3%A7as",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=BR"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "pracinhadecimafutebol",
            "videoId": "7695815202498940167"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 12
        },
        {
          "tag": "#2ngay1dem",
          "name": "2 Ngày 1 Đêm（越南综艺《两天一夜》）",
          "regionGroup": "global",
          "category": "综艺",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.2K",
              "views": "534.8M"
            }
          ],
          "summary": "越南热门旅行真人秀综艺，引进韩国《两天一夜》模式，由Dong Tay Promotion制作、HTV播出，以喜剧演员Trường Giang为首的固定嘉宾团在越南各地旅行并完成游戏任务。",
          "whyHot": "节目处于常规周更播出期，搞笑游戏环节与嘉宾互动切片在越南TikTok持续二创传播，属越南头部国民综艺的稳定话题（本周具体爆点集数待核验）。",
          "origin": "Dong Tay Promotion/HTV官方综艺。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/2ngay1dem",
            "search": "https://www.tiktok.com/search?q=2ngay1dem",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "旅行+游戏任务类综艺的'惩罚环节'喜感可为MCGG对战结算动画提供梗参考。",
            "video": "可参考其'任务卡+反转惩罚'的短视频剪辑结构。"
          },
          "rank": 13
        },
        {
          "tag": "#thelovehypothesis",
          "name": "The Love Hypothesis（2026电影《爱情假说》）",
          "regionGroup": "global",
          "category": "影视",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "32.2K",
              "views": "440.2M"
            }
          ],
          "summary": "改编自Ali Hazelwood同名畅销小说（原身为星球大战Reylo同人文）的爱情喜剧电影，克莱尔·斯坎伦执导，莉莉·莱因哈特、汤姆·贝特曼主演，2026年9月23日Prime Video上线。",
          "whyHot": "9月23日上线带动BookTok原著读者盘与爱情片观众同时发酵，'假扮情侣'经典桥段切片广泛传播；主演lilireinhart标签同步上榜。",
          "origin": "Amazon MGM官方上线。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/thelovehypothesis",
            "search": "https://www.tiktok.com/search?q=thelovehypothesis",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'STEM学霸恋爱'人设反差可作MCGG角色CP营销参考。",
            "video": "可参考'原著vs电影'对比剪辑格式。"
          },
          "rank": 14
        },
        {
          "tag": "#pestapora",
          "name": "Pestapora 2026（雅加达音乐节）",
          "regionGroup": "global",
          "category": "音乐/节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "17.4K",
              "views": "437.6M"
            }
          ],
          "summary": "印尼大型年度音乐节Pestapora，2026年于9月中下旬在雅加达举行，汇集印尼本土与国际音乐人，是印尼年轻人年度音乐节盛事之一。",
          "whyHot": "音乐节（9月周末）在窗口期内，现场演出切片与乐迷vlog集中传播；同期雅加达还有The Weeknd演唱会等大型演出，9月为印尼演出大月。",
          "origin": "官方音乐节活动。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/pestapora",
            "search": "https://www.tiktok.com/search?q=pestapora",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "音乐节'多舞台+人群狂欢'场景可为MCGG周年庆主题棋盘提供氛围参考。",
            "video": "可参考'音乐节穿搭+现场直拍'混剪格式。"
          },
          "rank": 15
        },
        {
          "tag": "#asiad2026",
          "name": "第20届亚洲运动会（2026名古屋亚运会）",
          "regionGroup": "sea",
          "category": "体育赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "9.3K",
              "views": "396.3M"
            }
          ],
          "summary": "2026年9月19日-10月4日在日本爱知县·名古屋市举行的第20届亚洲运动会，由亚洲奥林匹克理事会主办。",
          "whyHot": "2026年9月19日-10月4日在日本爱知县·名古屋市举行的第20届亚洲运动会（亚洲奥林匹克理事会主办）；赛事已于10月4日闭幕，窗口内夺牌瞬间与高光集锦内容持续长尾传播。",
          "origin": "亚洲奥林匹克理事会官方赛事+观众/媒体剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/asiad2026",
            "search": "https://www.tiktok.com/search?q=asiad2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "singadvisor",
            "videoId": "7690048283472841992"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 16
        },
        {
          "tag": "#adifferentworld",
          "name": "A Different World（Netflix重启版《别样世界》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "19.9K",
              "views": "393.4M"
            }
          ],
          "summary": "Netflix对1987-93年NBC经典HBCU（传统黑人大学）校园喜剧的续集重启：围绕原版主角Whitley与Dwayne的小女儿Deborah进入父母母校Hillman学院展开，共10集，2026年9月24日上线，原版卡司（Jasmine Guy、Kadeem Hardison、Jada Pinkett Smith等）大量回归。",
          "whyHot": "新剧上线月（9月24日，恰为原版首播39周年纪念日）带动经典IP怀旧盘与新一代校园剧观众同时讨论，怀旧混剪与新剧片段同步传播。",
          "origin": "Netflix官方上线。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/adifferentworld",
            "search": "https://www.tiktok.com/search?q=adifferentworld",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'两代同堂'的传承叙事可为MCGG老带新活动提供情感框架。",
            "video": "可参考'原版vs重启'同框对比剪辑。"
          },
          "rank": 17
        },
        {
          "tag": "#halloweenmakeup",
          "name": "Halloween Makeup（万圣节妆容）",
          "regionGroup": "global",
          "category": "季节/美妆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "59.9K",
              "views": "391.1M"
            },
            {
              "code": "GB",
              "posts": "17.5K",
              "views": "108.8M"
            },
            {
              "code": "BR",
              "posts": "8.5K",
              "views": "92.8M"
            },
            {
              "code": "PH",
              "posts": "3.1K",
              "views": "29.3M"
            }
          ],
          "summary": "万圣节仿妆/特效妆创作标签。",
          "whyHot": "万圣节前妆容教程与仿妆变装进入年度高峰期，妆前妆后反差模板参与门槛低。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweenmakeup",
            "search": "https://www.tiktok.com/search?q=halloweenmakeup",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bynatalija",
            "videoId": "7695788131643084064"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 18
        },
        {
          "tag": "#missgrandvietnam",
          "name": "Miss Grand Vietnam（MGI越南国赛）",
          "regionGroup": "global",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "19.3K",
              "views": "378.1M"
            }
          ],
          "summary": "MGI国际大赛的越南国家选拔赛；2026年冠军Emoura Phạm（胡志明市代表）于8月1日加冕，将代表越南出征印度MGI 2026总决赛。",
          "whyHot": "MGI 2026进入10月印度总决赛期，越南粉丝为本国选手造势，国赛标签与送行/回顾内容再次升温；越南是MGI体系关注度最高的市场之一。",
          "origin": "MGI Vietnam官方赛事。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandvietnam",
            "search": "https://www.tiktok.com/search?q=missgrandvietnam",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "同MGI：应援玩法联想，避免真人肖像。",
            "video": "可参考'国服展示'视觉语言，规避真人版权。"
          },
          "rank": 19
        },
        {
          "tag": "#aura",
          "name": "Aura（气场值梗）",
          "regionGroup": "global",
          "category": "梗/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "29.4K",
              "views": "329.2M"
            }
          ],
          "summary": "Z世代流行语梗：把个人'气场/魅力值'量化为aura points，帅气行为赚aura、丢脸行为扣aura，衍生出aura farming等大量自嘲与炫技内容。",
          "whyHot": "aura梗自2024-25年起在越南等市场持续发酵，衍生标签（aurafarming）同步上榜；梗含义清楚，属社群自发内容的长尾热度。",
          "origin": "创作者自发梗。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/aura",
            "search": "https://www.tiktok.com/search?q=aura",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'气场值量化'玩法可直译为MCGG棋盘互动彩蛋（如连胜+aura特效）。",
            "video": "可参考'+1000 aura/-500 aura'的字幕计分梗格式。"
          },
          "rank": 20
        },
        {
          "tag": "#comedyseries",
          "name": "Comedy Series（喜剧剧集片段通用标签）",
          "regionGroup": "global",
          "category": "搞笑/影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "64.8K",
              "views": "291.4M"
            }
          ],
          "summary": "聚合各类喜剧剧集、喜剧小品片段的通用标签，本周在艾美奖多部喜剧作品获奖（《寡妇湾》《绝望写手》）后热度上升（1.13亿周播放）。",
          "whyHot": "喜剧片段是TikTok最稳定的流量品类之一；颁奖季让优质喜剧内容集中曝光，获奖作品名场面剪辑大量涌现。",
          "origin": "创作者自发使用的通用内容品类标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/comedyseries",
            "search": "https://www.tiktok.com/search?q=comedyseries",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bybywo88",
            "videoId": "7695226098837212446"
          },
          "fusionSuggestion": {
            "commercial": "喜剧片段形态适合品牌轻量化内容营销（低门槛高传播）。",
            "video": "适合做MCGG英雄喜剧小剧场系列。"
          },
          "rank": 21
        },
        {
          "tag": "#missgrandinternational2026",
          "name": "Miss Grand International 2026（MGI 2026印度总决赛）",
          "regionGroup": "global",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.6K",
              "views": "286.9M"
            },
            {
              "code": "TH",
              "posts": "15.4K",
              "views": "114.3M"
            },
            {
              "code": "PH",
              "posts": "2.9K",
              "views": "52.1M"
            }
          ],
          "summary": "2026年度MGI赛事专属标签：大赛首次登陆印度，活动跨斋浦尔、阿格拉、新德里三城，总决赛2026年10月举行。",
          "whyHot": "总决赛期（10月）赛事内容密集释出，各国选手国服、预赛表现与夺冠预测在菲泰越等市场讨论度高企；本届还伴随Miss Grand USA冠军8月被除名改派等赛事话题。",
          "origin": "MGI官方赛事。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandinternational2026",
            "search": "https://www.tiktok.com/search?q=missgrandinternational2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "同MGI：赛事应援氛围玩法参考。",
            "video": "可参考赛事舞台的金色/华丽视觉系做皮肤概念。"
          },
          "rank": 22
        }
      ]
    },
    "90": {
      "items": [
        {
          "tag": "#fall",
          "name": "Fall（秋天通用季节标签）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "1.9M",
              "views": "6.9B"
            },
            {
              "code": "GB",
              "posts": "148.1K",
              "views": "774.2M"
            }
          ],
          "summary": "美式英语'秋天'通用标签，聚合换季穿搭、秋景、南瓜季与开学季内容。",
          "whyHot": "秋分至10月是北半球秋季内容的集中释放期，美英市场fall标签按惯例汇聚全季UGC，90天窗口以69亿播放居榜首，与autumn/fallvibes等变体标签同属秋季内容潮。",
          "origin": "创作者自发通用季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fall",
            "search": "https://www.tiktok.com/search?q=fall",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "秋季暖色调（枫叶橙/南瓜橘）可为MCGG季节限定棋盘配色提供参考。",
            "video": "可参考'秋日氛围感'空镜+穿搭混剪格式。"
          },
          "rank": 1
        },
        {
          "tag": "#halloweencostume",
          "name": "Halloween Costume（万圣节服装）",
          "regionGroup": "global",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "224.6K",
              "views": "2.8B"
            },
            {
              "code": "GB",
              "posts": "13.0K",
              "views": "412.6M"
            },
            {
              "code": "PH",
              "posts": "10.2K",
              "views": "143.0M"
            }
          ],
          "summary": "万圣节服装主题内容标签，聚合服装reveal、DIY制作教程、情侣/团体服装创意等。",
          "whyHot": "10月万圣节季进入服装内容年度峰值期，节前2-3周是服装灵感内容的集中发布窗口，菲/英/美多市场同步上榜。",
          "origin": "创作者自发季节性内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweencostume",
            "search": "https://www.tiktok.com/search?q=halloweencostume",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "万圣节cosplay氛围与MCGG节日限定皮肤发售节点天然契合。",
            "video": "可参考'服装从草图到成品'的过程剪辑格式。"
          },
          "rank": 2
        },
        {
          "tag": "#lovestory",
          "name": "Love Story（越南TikTok热门爱情故事内容标签）",
          "regionGroup": "sea",
          "category": "音乐/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "1.2M",
              "views": "2.7B"
            }
          ],
          "summary": "越南TikTok上体量最大的情感向内容标签之一，用户配以浪漫爱情歌曲讲述/演绎爱情故事片段。",
          "whyHot": "情歌+爱情叙事是越南TikTok长期稳定的高播放内容组合，\"Love Story\"作为通用标签持续被大量使用。",
          "origin": "泛用户自发内容聚合标签，非单一创作者/事件发起。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/lovestory",
            "search": "https://www.tiktok.com/search?q=lovestory",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "seth_weir",
            "videoId": "7648057901180931350"
          },
          "fusionSuggestion": {
            "commercial": "可考虑情侣向游戏内活动/角色CP剪辑联动。",
            "video": "适合做游戏角色爱情故事向短剧。"
          },
          "rank": 3
        },
        {
          "tag": "#brez",
          "name": "BRĒZ（无酒精饮料品牌话题）",
          "regionGroup": "global",
          "category": "品牌营销/消费品",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "245.7K",
              "views": "2.4B"
            }
          ],
          "summary": "美国市场无酒精饮料品牌 BRĒZ 的 TikTok 品牌话题，KOL 矩阵+素人种草 UGC 驱动。",
          "whyHot": "品牌达人矩阵持续种草与直播带货转化，品牌话题下 UGC 积累明显（属商业campaign性质，机制清楚）。",
          "origin": "品牌官方营销话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/brez",
            "search": "https://www.tiktok.com/search?q=brez",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "brezful",
            "videoId": "7632574246438407445"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 4
        },
        {
          "tag": "#halloween",
          "name": "Halloween（万圣节）",
          "regionGroup": "global",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "GB",
              "posts": "270.7K",
              "views": "1.8B"
            },
            {
              "code": "BR",
              "posts": "121.1K",
              "views": "1.0B"
            },
            {
              "code": "PH",
              "posts": "31.4K",
              "views": "558.6M"
            },
            {
              "code": "TH",
              "posts": "23.3K",
              "views": "198.0M"
            }
          ],
          "summary": "万圣节主题内容标签：妆容、变装、装饰、派对与恐怖趣味创作。",
          "whyHot": "10 月进入万圣节预热期，变装/妆容/家居装饰内容集中发布，是欧美市场年度最大的季节创作节点之一。",
          "origin": "西方传统节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloween",
            "search": "https://www.tiktok.com/search?q=halloween",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=GB"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 5
        },
        {
          "tag": "#southparkedit",
          "name": "South Park 剪辑二创",
          "regionGroup": "global",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "105.6K",
              "views": "1.7B"
            }
          ],
          "summary": "与#southpark同源，专指粉丝对该剧经典片段/台词做的剪辑向二创内容标签。",
          "whyHot": "剪辑类内容天然自带话题标签便于归类传播，跟随剧集热度同步上涨。",
          "origin": "观众自发剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southparkedit",
            "search": "https://www.tiktok.com/search?q=southparkedit",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "princeleoww",
            "videoId": "7695675199081008414"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 6
        },
        {
          "tag": "#christmas",
          "name": "Christmas（圣诞节主题内容）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "GB",
              "posts": "279.5K",
              "views": "1.5B"
            },
            {
              "code": "PH",
              "posts": "213.7K",
              "views": "828.0M"
            }
          ],
          "summary": "菲律宾TikTok上的圣诞节主题内容标签，菲律宾圣诞季传统上从9月即开始，装饰、颂歌、家庭团聚类内容提前升温。",
          "whyHot": "菲律宾以\"全球圣诞季最长的国家\"著称，9月起商场与家庭便开始圣诞装饰与颂歌，是每年规律性的季节性文化热梗。",
          "origin": "全民性节日文化传统，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/christmas",
            "search": "https://www.tiktok.com/search?q=christmas",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=GB"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nyyxveiill",
            "videoId": "7648617836226694432"
          },
          "fusionSuggestion": {
            "commercial": "可考虑提前布局圣诞主题限定活动/皮肤，契合菲律宾超长圣诞季的营销窗口。",
            "video": "适合做圣诞主题的游戏内装饰/礼物系统预告。"
          },
          "rank": 7
        },
        {
          "tag": "#spidermanbrandnewday",
          "name": "Spider-Man: Brand New Day（漫威电影《蜘蛛侠：崭新的一天》）",
          "regionGroup": "sea",
          "category": "影视",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "204.9K",
              "views": "1.3B"
            },
            {
              "code": "GB",
              "posts": "311.4K",
              "views": "1.2B"
            },
            {
              "code": "PH",
              "posts": "182.7K",
              "views": "1.2B"
            },
            {
              "code": "BR",
              "posts": "268.7K",
              "views": "897.6M"
            },
            {
              "code": "TH",
              "posts": "52.7K",
              "views": "542.5M"
            },
            {
              "code": "VN",
              "posts": "106.3K",
              "views": "350.5M"
            }
          ],
          "summary": "漫威电影《蜘蛛侠：崭新的一天》(Spider-Man: Brand New Day) 相关话题，英国娱乐榜前列。",
          "whyHot": "这是漫威影业新蜘蛛侠电影的官方标题相关话题，新片官宣/预告/选角消息通常会在漫画粉丝群体中引发大量讨论和二创内容，属于大IP电影宣发驱动型热度。",
          "origin": "漫威电影《蜘蛛侠：崭新的一天》相关话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spidermanbrandnewday",
            "search": "https://www.tiktok.com/search?q=spidermanbrandnewday",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freedom.alias",
            "videoId": "7669320059776486687"
          },
          "fusionSuggestion": {
            "commercial": "涉及漫威第三方IP版权，不建议未经授权直接使用蜘蛛侠形象；可考虑与漫威谈官方授权联名（需版权方合作）。",
            "video": "官方号可发布『如果指挥官有蜘蛛侠战衣』的原创英雄主题概念视频，避免直接使用受版权保护的角色形象。"
          },
          "rank": 8
        },
        {
          "tag": "#homecoming",
          "name": "Homecoming（美国校园返校节）",
          "regionGroup": "global",
          "category": "校园/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "243.1K",
              "views": "1.3B"
            },
            {
              "code": "ID",
              "posts": "51.0K",
              "views": "84.8M"
            },
            {
              "code": "BR",
              "posts": "77.5K",
              "views": "42.6M"
            },
            {
              "code": "VN",
              "posts": "70.5K",
              "views": "36.9M"
            },
            {
              "code": "TH",
              "posts": "50.2K",
              "views": "15.0M"
            }
          ],
          "summary": "美国中学与大学的返校节传统活动（多在9-10月），包含橄榄球赛、舞会、游行与返校国王/皇后评选，是秋季校园文化的核心事件。",
          "whyHot": "9-10月为全美返校节集中期，提案视频（hocoproposal）、服装转场（hocotransition）、舞会片段等衍生内容批量产出，多市场（美/巴/印尼/泰/越）上榜。",
          "origin": "美国校园传统活动+创作者自发记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/homecoming",
            "search": "https://www.tiktok.com/search?q=homecoming",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'校园舞会'场景可作MCGG青春主题棋盘的视觉母题（注意用研红线：校园题材需谨慎评估受众偏好）。",
            "video": "可参考'提案惊喜瞬间'的反应式剪辑格式。"
          },
          "rank": 9
        },
        {
          "tag": "#quietonthecreek",
          "name": "Quiet on the Creek（Saucy Santana 金句/新歌）",
          "regionGroup": "global",
          "category": "音乐/梗",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "350.0K",
              "views": "1.2B"
            },
            {
              "code": "GB",
              "posts": "10.6K",
              "views": "76.6M"
            }
          ],
          "summary": "说唱歌手 Saucy Santana 的 viral 金句‘quiet on the creek’（溪边要安静=闭嘴低调），后被做成新歌。",
          "whyHot": "金句音频被模板化用于‘让人闭嘴/低调’场景梗，新歌发行二次点燃二创。",
          "origin": "创作者金句衍生音乐话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/quietonthecreek",
            "search": "https://www.tiktok.com/search?q=quietonthecreek",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "jessifaye15",
            "videoId": "7695955130591546654"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 10
        },
        {
          "tag": "#rockinrio",
          "name": "Rock in Rio 2026（里约摇滚音乐节）",
          "regionGroup": "global",
          "category": "音乐/节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "BR",
              "posts": "95.5K",
              "views": "1.2B"
            }
          ],
          "summary": "全球最大规模音乐节品牌里约edizione：2026年9月4-7日、11-13日在里约奥林匹克公园举行，头牌包括Foo Fighters、Maroon 5、Demi Lovato、Twenty One Pilots、Avenged Sevenfold、Elton John、Gilberto Gil等。",
          "whyHot": "音乐节七个演出日（9月上中旬）产生海量现场切片与明星直拍，是巴西国民级文化事件；A7X等参演乐队的标签在巴西/印尼/泰国同步升温。",
          "origin": "官方音乐节活动。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/rockinrio",
            "search": "https://www.tiktok.com/search?q=rockinrio",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=BR"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "音乐节'日落主舞台'视觉可为MCGG夏日/狂欢主题棋盘提供美术参考。",
            "video": "可参考'一日 lineup 速览'剪辑格式。"
          },
          "rank": 11
        },
        {
          "tag": "#autumn",
          "name": "Autumn（秋天）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "GB",
              "posts": "446.6K",
              "views": "1.2B"
            },
            {
              "code": "VN",
              "posts": "12.1K",
              "views": "49.3M"
            }
          ],
          "summary": "秋季通用季节标签：秋景、穿搭、暖饮氛围内容。",
          "whyHot": "北半球入秋季节内容集中释放，GB 等市场秋季美学 UGC 聚集。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/autumn",
            "search": "https://www.tiktok.com/search?q=autumn",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=GB"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "danielvalko",
            "videoId": "7652136274748312845"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 12
        },
        {
          "tag": "#lanterns",
          "name": "Lanterns（HBO DC剧《绿灯侠》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "65.1K",
              "views": "1.2B"
            }
          ],
          "summary": "HBO出品的DC宇宙绿灯侠真人剧集：凯尔·钱德勒饰哈尔·乔丹、亚伦·皮埃尔饰约翰·斯图尔特，两位绿灯侠以'宇宙交警'身份调查美国腹地的谋杀悬案；共8集，2026年8月16日首播，林德洛夫/Chris Mundy/Tom King打造。",
          "whyHot": "首播收视创DC新剧强劲开局且口碑正面（媒体称赞双主演化学反应与'聪明动作喜剧'基调），8-9月播出期讨论与切片持续上榜。",
          "origin": "HBO/DC Studios官方上线。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/lanterns",
            "search": "https://www.tiktok.com/search?q=lanterns",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'绿光具象化'视觉与MCGG能量系技能特效方向契合。",
            "video": "可参考'双主角拌嘴破案'的CP向剪辑格式。"
          },
          "rank": 13
        },
        {
          "tag": "#pumpkinseason",
          "name": "Pumpkin Season（南瓜季）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "255.8K",
              "views": "1.1B"
            }
          ],
          "summary": "北美秋季南瓜主题内容标签：南瓜地打卡、南瓜雕刻、南瓜风味饮食（PSL等）的季节性生活方式内容。",
          "whyHot": "9-10月南瓜收获季与万圣节季预热叠加，南瓜地拍照与雕刻教程类季节内容集中释放。",
          "origin": "创作者自发季节性内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/pumpkinseason",
            "search": "https://www.tiktok.com/search?q=pumpkinseason",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "南瓜地/秋收场景可直接作为MCGG万圣节棋盘皮肤的美术母题。",
            "video": "可参考'南瓜雕刻延时摄影'格式。"
          },
          "rank": 14
        },
        {
          "tag": "#diadospais",
          "name": "Dia dos Pais（巴西父亲节）",
          "regionGroup": "global",
          "category": "节日/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "BR",
              "posts": "237.2K",
              "views": "1.0B"
            }
          ],
          "summary": "巴西父亲节（8月第二个周日，2026年为8月9日）主题内容标签，聚合送礼、家庭聚餐与父子/父女情感内容。",
          "whyHot": "8月父亲节节点内容集中释放，巴西式家庭情感剪辑与礼物开箱大规模传播，热度在90天窗口内长尾延续。",
          "origin": "巴西传统节日+创作者自发内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/diadospais",
            "search": "https://www.tiktok.com/search?q=diadospais",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=BR"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "'父亲节送礼'节点可为MCGG巴西市场本地化运营日历提供参考。",
            "video": "可参考'给老爸的惊喜反应'格式。"
          },
          "rank": 15
        },
        {
          "tag": "#dauxuantuoisang",
          "name": "\"Dấu Xuân Tươi Sáng\"（越南语歌曲/内容标签，具体出处待核验）",
          "regionGroup": "sea",
          "category": "音乐/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "79.1K",
              "views": "952.0M"
            }
          ],
          "summary": "越南语短语，直译\"明亮的春天印记\"，推测与某首歌曲或季节性内容企划相关。",
          "whyHot": "标签结构类似歌曲/企划推广标签，具体机制与出处未能公开检索核实。【含义待核验】",
          "origin": "具体出处待核验。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/dauxuantuoisang",
            "search": "https://www.tiktok.com/search?q=dauxuantuoisang",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "_.twagn",
            "videoId": "7692356574257384725"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 16
        },
        {
          "tag": "#diadascrianças",
          "name": "Dia das Crianças（巴西儿童节）",
          "regionGroup": "global",
          "category": "节日/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "BR",
              "posts": "241.5K",
              "views": "627.6M"
            }
          ],
          "summary": "巴西儿童节（10 月 12 日）节日标签：礼物开箱、亲子互动内容聚集。",
          "whyHot": "节前礼物种草与亲子内容集中释放，商业节点+家庭 UGC 双驱动。",
          "origin": "巴西法定节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/diadascrianças",
            "search": "https://www.tiktok.com/search?q=diadascrian%C3%A7as",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=BR"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "pracinhadecimafutebol",
            "videoId": "7695815202498940167"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 17
        },
        {
          "tag": "#khaigiang",
          "name": "Khai Giảng（越南语\"开学典礼\"）",
          "regionGroup": "sea",
          "category": "校园/生活",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "84.2K",
              "views": "617.1M"
            }
          ],
          "summary": "越南9月5日左右全国统一开学典礼相关内容，是越南每年固定的教育系统仪式性活动。",
          "whyHot": "越南教育部规定每年9月5日为全国统一开学日，各地学校举行升旗、致辞等开学典礼，家长和学生大量发布相关记录视频，是每年周期性话题。",
          "origin": "越南教育系统官方固定节庆日，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/khaigiang",
            "search": "https://www.tiktok.com/search?q=khaigiang",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
          },
          "rank": 18
        },
        {
          "tag": "#september",
          "name": "September（九月月份通用标签）",
          "regionGroup": "global",
          "category": "生活方式/月份标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "316.0K",
              "views": "606.7M"
            },
            {
              "code": "ID",
              "posts": "145.9K",
              "views": "229.5M"
            },
            {
              "code": "GB",
              "posts": "73.4K",
              "views": "160.3M"
            },
            {
              "code": "PH",
              "posts": "57.5K",
              "views": "148.9M"
            },
            {
              "code": "TH",
              "posts": "7.9K",
              "views": "12.1M"
            }
          ],
          "summary": "九月月份通用标签，5个市场（US/ID/PH/VN/MY）用户集中发布初秋氛围、开学季、月度总结与新月愿望内容，形成规律性月度流量高峰（30天窗口3.31亿播放）。",
          "whyHot": "月份标签是TikTok\"月度打卡文化\"的固定流量入口（月初总结/新月愿望/月份氛围感），九月叠加北半球初秋与开学季话题，全市场共振。",
          "origin": "创作者自发使用的通用标签，非单一事件发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/september",
            "search": "https://www.tiktok.com/search?q=september",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sony",
            "videoId": "7688066557649407263"
          },
          "fusionSuggestion": {
            "commercial": "月度营销日历可借月份标签做规律性活动运营（每月1号\"新月新阵容\"）。",
            "video": "适合做\"九月新开始\"主题活动剪辑。"
          },
          "rank": 19
        },
        {
          "tag": "#halloweenmakeup",
          "name": "Halloween Makeup（万圣节妆容）",
          "regionGroup": "global",
          "category": "季节/美妆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "73.5K",
              "views": "491.0M"
            },
            {
              "code": "GB",
              "posts": "21.2K",
              "views": "132.9M"
            }
          ],
          "summary": "万圣节仿妆/特效妆创作标签。",
          "whyHot": "万圣节前妆容教程与仿妆变装进入年度高峰期，妆前妆后反差模板参与门槛低。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweenmakeup",
            "search": "https://www.tiktok.com/search?q=halloweenmakeup",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-15 抖音热搜快照（top30）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bynatalija",
            "videoId": "7695788131643084064"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 20
        }
      ]
    }
  },
  "douyinRef": [
    {
      "rank": 1,
      "keyword": "中朝新鸭绿江大桥今日开通",
      "hotValue": 12090730,
      "url": "https://www.douyin.com/search/%E4%B8%AD%E6%9C%9D%E6%96%B0%E9%B8%AD%E7%BB%BF%E6%B1%9F%E5%A4%A7%E6%A1%A5%E4%BB%8A%E6%97%A5%E5%BC%80%E9%80%9A"
    },
    {
      "rank": 2,
      "keyword": "小鹏正式宣布对外卖技术",
      "hotValue": 12085269,
      "url": "https://www.douyin.com/search/%E5%B0%8F%E9%B9%8F%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E5%AF%B9%E5%A4%96%E5%8D%96%E6%8A%80%E6%9C%AF"
    },
    {
      "rank": 3,
      "keyword": "我国风电装机规模稳居世界第一",
      "hotValue": 11406970,
      "url": "https://www.douyin.com/search/%E6%88%91%E5%9B%BD%E9%A3%8E%E7%94%B5%E8%A3%85%E6%9C%BA%E8%A7%84%E6%A8%A1%E7%A8%B3%E5%B1%85%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80"
    },
    {
      "rank": 4,
      "keyword": "火遍外网的ChinaHaul是什么",
      "hotValue": 11285777,
      "url": "https://www.douyin.com/search/%E7%81%AB%E9%81%8D%E5%A4%96%E7%BD%91%E7%9A%84ChinaHaul%E6%98%AF%E4%BB%80%E4%B9%88"
    },
    {
      "rank": 5,
      "keyword": "考研报名今天正式开始",
      "hotValue": 10560023,
      "url": "https://www.douyin.com/search/%E8%80%83%E7%A0%94%E6%8A%A5%E5%90%8D%E4%BB%8A%E5%A4%A9%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%A7%8B"
    },
    {
      "rank": 6,
      "keyword": "工厂工人回应撞脸陈小春走红",
      "hotValue": 10286570,
      "url": "https://www.douyin.com/search/%E5%B7%A5%E5%8E%82%E5%B7%A5%E4%BA%BA%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E9%99%88%E5%B0%8F%E6%98%A5%E8%B5%B0%E7%BA%A2"
    },
    {
      "rank": 7,
      "keyword": "皇马4:3逆转罗马",
      "hotValue": 9203394,
      "url": "https://www.douyin.com/search/%E7%9A%87%E9%A9%AC4%3A3%E9%80%86%E8%BD%AC%E7%BD%97%E9%A9%AC"
    },
    {
      "rank": 8,
      "keyword": "我的古早味秋冬穿搭",
      "hotValue": 9155389,
      "url": "https://www.douyin.com/search/%E6%88%91%E7%9A%84%E5%8F%A4%E6%97%A9%E5%91%B3%E7%A7%8B%E5%86%AC%E7%A9%BF%E6%90%AD"
    },
    {
      "rank": 9,
      "keyword": "A股",
      "hotValue": 8897477,
      "url": "https://www.douyin.com/search/A%E8%82%A1"
    },
    {
      "rank": 10,
      "keyword": "央行将开展7000亿元买断式逆回购",
      "hotValue": 8612302,
      "url": "https://www.douyin.com/search/%E5%A4%AE%E8%A1%8C%E5%B0%86%E5%BC%80%E5%B1%957000%E4%BA%BF%E5%85%83%E4%B9%B0%E6%96%AD%E5%BC%8F%E9%80%86%E5%9B%9E%E8%B4%AD"
    },
    {
      "rank": 11,
      "keyword": "美国9月CPI同比上涨3.7%",
      "hotValue": 8362766,
      "url": "https://www.douyin.com/search/%E7%BE%8E%E5%9B%BD9%E6%9C%88CPI%E5%90%8C%E6%AF%94%E4%B8%8A%E6%B6%A83.7%25"
    },
    {
      "rank": 12,
      "keyword": "英雄联盟S16 LPL出征片",
      "hotValue": 7965208,
      "url": "https://www.douyin.com/search/%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FS16%20LPL%E5%87%BA%E5%BE%81%E7%89%87"
    },
    {
      "rank": 13,
      "keyword": "小心“人脸授权”背后的陷阱",
      "hotValue": 7833960,
      "url": "https://www.douyin.com/search/%E5%B0%8F%E5%BF%83%E2%80%9C%E4%BA%BA%E8%84%B8%E6%8E%88%E6%9D%83%E2%80%9D%E8%83%8C%E5%90%8E%E7%9A%84%E9%99%B7%E9%98%B1"
    },
    {
      "rank": 14,
      "keyword": "现货黄金跌破4100美元大关",
      "hotValue": 7831960,
      "url": "https://www.douyin.com/search/%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E8%B7%8C%E7%A0%B44100%E7%BE%8E%E5%85%83%E5%A4%A7%E5%85%B3"
    },
    {
      "rank": 15,
      "keyword": "广东宏远官宣凯尔弗格加盟",
      "hotValue": 7831643,
      "url": "https://www.douyin.com/search/%E5%B9%BF%E4%B8%9C%E5%AE%8F%E8%BF%9C%E5%AE%98%E5%AE%A3%E5%87%AF%E5%B0%94%E5%BC%97%E6%A0%BC%E5%8A%A0%E7%9B%9F"
    },
    {
      "rank": 16,
      "keyword": "咪不要那样看着我的眼睛",
      "hotValue": 7818797,
      "url": "https://www.douyin.com/search/%E5%92%AA%E4%B8%8D%E8%A6%81%E9%82%A3%E6%A0%B7%E7%9C%8B%E7%9D%80%E6%88%91%E7%9A%84%E7%9C%BC%E7%9D%9B"
    },
    {
      "rank": 17,
      "keyword": "玉簟秋修罗场开局好刺激",
      "hotValue": 7791769,
      "url": "https://www.douyin.com/search/%E7%8E%89%E7%B0%9F%E7%A7%8B%E4%BF%AE%E7%BD%97%E5%9C%BA%E5%BC%80%E5%B1%80%E5%A5%BD%E5%88%BA%E6%BF%80"
    },
    {
      "rank": 18,
      "keyword": "萌宠比我先学会了跳NEON",
      "hotValue": 7780057,
      "url": "https://www.douyin.com/search/%E8%90%8C%E5%AE%A0%E6%AF%94%E6%88%91%E5%85%88%E5%AD%A6%E4%BC%9A%E4%BA%86%E8%B7%B3NEON"
    },
    {
      "rank": 19,
      "keyword": "DeepSeek崩了",
      "hotValue": 7778917,
      "url": "https://www.douyin.com/search/DeepSeek%E5%B4%A9%E4%BA%86"
    },
    {
      "rank": 20,
      "keyword": "这是我的心尖尖",
      "hotValue": 7753637,
      "url": "https://www.douyin.com/search/%E8%BF%99%E6%98%AF%E6%88%91%E7%9A%84%E5%BF%83%E5%B0%96%E5%B0%96"
    },
    {
      "rank": 21,
      "keyword": "万千气象看辽宁",
      "hotValue": 7752876,
      "url": "https://www.douyin.com/search/%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E8%BE%BD%E5%AE%81"
    },
    {
      "rank": 22,
      "keyword": "跟着凑企鹅哼两句就通透了",
      "hotValue": 7752672,
      "url": "https://www.douyin.com/search/%E8%B7%9F%E7%9D%80%E5%87%91%E4%BC%81%E9%B9%85%E5%93%BC%E4%B8%A4%E5%8F%A5%E5%B0%B1%E9%80%9A%E9%80%8F%E4%BA%86"
    },
    {
      "rank": 23,
      "keyword": "檀健次Drop狼爪舞挑战",
      "hotValue": 7745392,
      "url": "https://www.douyin.com/search/%E6%AA%80%E5%81%A5%E6%AC%A1Drop%E7%8B%BC%E7%88%AA%E8%88%9E%E6%8C%91%E6%88%98"
    },
    {
      "rank": 24,
      "keyword": "无畏契约新赛季通行证夯爆了",
      "hotValue": 7737788,
      "url": "https://www.douyin.com/search/%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E6%96%B0%E8%B5%9B%E5%AD%A3%E9%80%9A%E8%A1%8C%E8%AF%81%E5%A4%AF%E7%88%86%E4%BA%86"
    },
    {
      "rank": 25,
      "keyword": "朱七七沈浪世纪合体",
      "hotValue": 7722589,
      "url": "https://www.douyin.com/search/%E6%9C%B1%E4%B8%83%E4%B8%83%E6%B2%88%E6%B5%AA%E4%B8%96%E7%BA%AA%E5%90%88%E4%BD%93"
    },
    {
      "rank": 26,
      "keyword": "蚩姹新皮肤农味大回归",
      "hotValue": 7716624,
      "url": "https://www.douyin.com/search/%E8%9A%A9%E5%A7%B9%E6%96%B0%E7%9A%AE%E8%82%A4%E5%86%9C%E5%91%B3%E5%A4%A7%E5%9B%9E%E5%BD%92"
    },
    {
      "rank": 27,
      "keyword": "高性价比人生指南",
      "hotValue": 7711455,
      "url": "https://www.douyin.com/search/%E9%AB%98%E6%80%A7%E4%BB%B7%E6%AF%94%E4%BA%BA%E7%94%9F%E6%8C%87%E5%8D%97"
    },
    {
      "rank": 28,
      "keyword": "刀小刀反向求婚孟令辉",
      "hotValue": 7710250,
      "url": "https://www.douyin.com/search/%E5%88%80%E5%B0%8F%E5%88%80%E5%8F%8D%E5%90%91%E6%B1%82%E5%A9%9A%E5%AD%9F%E4%BB%A4%E8%BE%89"
    },
    {
      "rank": 29,
      "keyword": "火影手游迪鲁达全技能爆料",
      "hotValue": 7710009,
      "url": "https://www.douyin.com/search/%E7%81%AB%E5%BD%B1%E6%89%8B%E6%B8%B8%E8%BF%AA%E9%B2%81%E8%BE%BE%E5%85%A8%E6%8A%80%E8%83%BD%E7%88%86%E6%96%99"
    },
    {
      "rank": 30,
      "keyword": "iPhone Duo已完成大模型备案",
      "hotValue": 7704723,
      "url": "https://www.douyin.com/search/iPhone%20Duo%E5%B7%B2%E5%AE%8C%E6%88%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%A4%87%E6%A1%88"
    }
  ]
};
