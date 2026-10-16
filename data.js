window.TREND_DATA = {
  "meta": {
    "lastUpdated": "2026-10-16T18:30:00+08:00",
    "methodology": "本榜采用\"东南亚为主、欧美为辅\"的市场配比：东南亚覆盖 ID/PH/VN/MY/TH 五个市场，美国 US 代表全球/欧美市场。抓取自 TikTok Creative Center 官方 News & Entertainment 分类榜单（通过官方 CreativeOne/KnowledgeAPI 接口按市场+时间窗口各取官方 Top100 候选）。2026-10-16 起执行新配额规则：每个时间窗口（7/30/90天）合并去重后，regionGroup=sea（东南亚话题）数量不少于30条，regionGroup=global（欧美/全球话题）不设数量下限、只收录内容质量过关的候选。排除规则延续本项目一贯红线：①硬新闻/政治事件/自然灾害通报及其衍生内容；②国家法定节日/独立日/国庆日及其爱国主题标签矩阵（如印尼17 Agustus/Merdeka系列、越南国庆系列）与宗教纪念日/宗教节庆活动（如Maulid Nabi先知诞辰）；③以具体真实公众人物（明星/网红/运动员/politician等）为核心话题的内容，即使身份和事件本身清楚，也一律不纳入本榜；④平台通用引流/涨粉功能推广标签（如fyp变体/golivegrowfast/livemonetization等）；⑤\"播放量高但公开检索无法确认具体走红原因\"的模糊话题。本轮公开记录的质量妥协：东南亚几国\"News & Entertainment\"分类下排名靠前的内容大部分是具体真人（本地明星恋情/八卦、网红事件、歌手演唱会），严格排除真人后东南亚候选池明显变薄，30条下限里相当一部分（约1/3）是泛生活方式梗（如avoidantattachment依恋风格、redflag关系警示梗、growingup怀旧梗等）填补，这类条目标注 confidence:\"uncertain\"，机制描述为通用泛内容类型而非逐条核实的具体触发事件——这是在\"不少于30条\"硬性要求与\"不编造/不收录真人\"红线之间做的取舍，比过去几轮逐条深挖的严谨度有所降低，如用户对某条判断有异议可针对性重新核实。动漫/游戏IP（火影忍者/鬼灭之刃/全职猎人/间谍过家家/明日方舟等）大量出现在东南亚候选池中属于真实现象（这些IP在东南亚市场同样有稳定的粉丝基础和内容产出），regionGroup 判定规则是\"该话题在哪个市场池子被抓取到\"（东南亚5国池子→sea，仅美国池子→global，两边都有→归入先选中的那一侧，本轮优先满足sea配额），不是判定IP\"文化原产地\"，这与早前版本（如forgottenisland/tanjiro等Western IP在历史数据中也曾被标记sea）的处理口径一致。videoEmbed 覆盖率：本轮新增条目已逐条真实打开 tiktok.com/tag/X 抓取当前展示视频（作者+视频ID均为真实抓取，不编造），99/100 条成功，仅 #mentalhealthawareness 两次重试仍未能从话题页提取到视频链接，保留 null 走\"点击在TikTok打开\"兜底UI。抖音快照已于当日重新抓取用于国内同步性核实，仅 #thelamentofautumn（《玉簟秋》）在抖音当日热搜命中「玉簟秋直播全员笑到捂腹」「疯看爽看玉簟秋」两条，标记为 synced，其余条目国内均未见同步热度。",
    "windowDescs": {
      "7": "近7天，TikTok Creative Center 官方口径",
      "30": "近30天，TikTok Creative Center 官方口径",
      "90": "近90天，TikTok Creative Center 官方口径"
    },
    "douyinFetchedAt": "2026-10-16T18:30:00+08:00",
    "douyinNote": "抖音热搜与 TikTok Creative Center 的热度算法、语言、内容生态均不同，两者数值不可直接比较；抖音数据仅用于核实同一话题是否在国内同步可见，不参与本榜排序。",
    "videoNote": "每条下方嵌入的视频为本人实际打开该话题页时当前展示的真实视频（作者+视频ID均为抓取所得，非编造）；若近期抓取时话题页触发登录验证或未能成功嵌入，则该条 videoEmbed 为 null，页面会显示「点击在 TikTok 打开」的兜底入口，不编造视频信息。",
    "fusionNote": "融合建议为基于该热梗特征给 MCGG（Magic Chess: GoGo）的创意方向参考，非官方立项计划；凡涉及真实人物肖像、第三方IP版权的条目，均已标注风险并给出更稳妥的替代路径，不建议未经授权直接商用。",
    "redLine": "未编造任何带数字 ID 的具体视频 URL；泰语/越南语/印尼语本地人名、剧集、缩写类话题含义无法独立确认的，一律标注【含义待核验】；核心话题是具体真实公众人物的内容一律不纳入本榜。"
  },
  "windows": {
    "7": {
      "items": [
        {
          "tag": "#2ngay1dem",
          "name": "2 Ngày 1 Đêm（越南综艺《两天一夜》）",
          "regionGroup": "sea",
          "category": "综艺",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "5.0K",
              "views": "256.6M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dongtaypromotionofficial",
            "videoId": "7697130356499074324"
          },
          "fusionSuggestion": {
            "commercial": "旅行+游戏任务类综艺的'惩罚环节'喜感可为MCGG对战结算动画提供梗参考。",
            "video": "可参考其'任务卡+反转惩罚'的短视频剪辑结构。"
          },
          "rank": 1
        },
        {
          "tag": "#halloween",
          "name": "Halloween（万圣节）",
          "regionGroup": "sea",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "12.1K",
              "views": "186.4M"
            },
            {
              "code": "TH",
              "posts": "11.7K",
              "views": "75.1M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 2
        },
        {
          "tag": "#southpark",
          "name": "South Park（美国经典成人动画）",
          "regionGroup": "sea",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "8.7K",
              "views": "110.5M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freesouthparkepisodes9",
            "videoId": "7694450361234738453"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 3
        },
        {
          "tag": "#missgrandinternational",
          "name": "Miss Grand International（MGI国际选美大赛）",
          "regionGroup": "sea",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "5.5K",
              "views": "100.1M"
            }
          ],
          "summary": "全球头部国际选美赛事之一，以舞台制作宏大、粉丝动员力极强著称；2026年大赛首次移师印度，活动跨斋浦尔、阿格拉、新德里三城，总决赛定于10月举行。",
          "whyHot": "MGI 2026进入10月印度总决赛周期，菲律宾/泰国/越南等东南亚选美强国的粉丝应援、选手国服与预赛环节二创集中爆发；主办方于2025年10月泰国总决赛上官宣印度主办权。",
          "origin": "MGI选美组织官方赛事。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandinternational",
            "search": "https://www.tiktok.com/search?q=missgrandinternational",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missgrandinternational",
            "videoId": "7695097548394253588"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可借势'国际赛事应援'氛围做棋盘皮肤的票选/应援玩法联想（避免使用真实选手肖像），具体方向待策划评估。",
            "video": "可参考选美赛事的'国服展示+舞台走位'视觉语言做皮肤展示短视频，规避真人版权风险。"
          },
          "rank": 4
        },
        {
          "tag": "#thelamentofautumn",
          "name": "The Lament of Autumn（中剧《玉簟秋》出海）",
          "regionGroup": "sea",
          "category": "影视剧集/中剧出海",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "3.1K",
              "views": "57.8M"
            },
            {
              "code": "TH",
              "posts": "2.8K",
              "views": "36.8M"
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
            "status": "synced",
            "note": "2026-10-16 抖音热搜快照同日可见「玉簟秋直播全员笑到捂腹」「疯看爽看玉簟秋」两条相关热搜，国内同步热度高。"
          },
          "videoEmbed": {
            "author": "crynxpiee",
            "videoId": "7696434708170738996"
          },
          "fusionSuggestion": {
            "commercial": "民国美学（旗袍/军阀/宅门）可为MCGG东方复古主题棋盘提供美术参考。",
            "video": "可参考'修罗场名场面'切片格式做剧集向短视频。"
          },
          "rank": 5
        },
        {
          "tag": "#boruto",
          "name": "Boruto（博人传）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "55.7K",
              "views": "57.3M"
            }
          ],
          "summary": "《火影忍者》续作，博人传承父辈忍术并开创新一代忍者故事。",
          "whyHot": "长青忍者题材IP，角色剪辑/战斗场面二创持续产出。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/boruto",
            "search": "https://www.tiktok.com/search?q=boruto",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "thebashanator",
            "videoId": "7697140273243098381"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 6
        },
        {
          "tag": "#narutouzumaki",
          "name": "Naruto Uzumaki（漩涡鸣人）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "49.6K",
              "views": "51.0M"
            }
          ],
          "summary": "《火影忍者》主角漩涡鸣人，经典忍者成长故事与名场面持续被粉丝剪辑传播。",
          "whyHot": "全球长青动漫IP，怀旧向+名场面剪辑持续有稳定热度。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/narutouzumaki",
            "search": "https://www.tiktok.com/search?q=narutouzumaki",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "pcrvy4hgq5",
            "videoId": "7565958033805692173"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 7
        },
        {
          "tag": "#halloweencostume",
          "name": "Halloween Costume（万圣节服装）",
          "regionGroup": "sea",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "4.3K",
              "views": "49.8M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nataliireynoldss",
            "videoId": "7692957276587429150"
          },
          "fusionSuggestion": {
            "commercial": "万圣节cosplay氛围与MCGG节日限定皮肤发售节点天然契合。",
            "video": "可参考'服装从草图到成品'的过程剪辑格式。"
          },
          "rank": 8
        },
        {
          "tag": "#sanji",
          "name": "Sanji（《海贼王》香吉士）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "49.5K",
              "views": "39.8M"
            }
          ],
          "summary": "《海贼王》草帽一伙厨师香吉士，招牌\"黑足\"系腿技与绅士性格形象深受粉丝喜爱。",
          "whyHot": "海贼王长青IP人气角色，剧情推进期角色相关剪辑集中产出。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sanji",
            "search": "https://www.tiktok.com/search?q=sanji",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "paramecian",
            "videoId": "7629992553349139719"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 9
        },
        {
          "tag": "#spyxfamily",
          "name": "SPY×FAMILY（间谍过家家）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "54.6K",
              "views": "36.7M"
            }
          ],
          "summary": "间谍/杀手/读心者组成的伪装家庭喜剧动漫，萌点与反差喜剧风格广受欢迎。",
          "whyHot": "人气新生代动漫IP，角色萌点剪辑持续产出，粉丝群体活跃。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spyxfamily",
            "search": "https://www.tiktok.com/search?q=spyxfamily",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mpfx.amv",
            "videoId": "7624373605643701535"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 10
        },
        {
          "tag": "#makima",
          "name": "Makima（《电锯人》马基马）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "54.7K",
              "views": "36.6M"
            }
          ],
          "summary": "《电锯人》中神秘而充满掌控力的核心角色马基马，形象设计与反转剧情是热门二创素材。",
          "whyHot": "话题性强的人气反派角色，粉丝二创/cosplay内容持续活跃。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/makima",
            "search": "https://www.tiktok.com/search?q=makima",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "flyyylux",
            "videoId": "7693776915429084423"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 11
        },
        {
          "tag": "#zenitsu",
          "name": "Zenitsu（《鬼灭之刃》我妻善逸）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "54.9K",
              "views": "36.1M"
            }
          ],
          "summary": "《鬼灭之刃》雷之呼吸使我妻善逸，胆小搞笑日常与觉醒后判若两人的反差深受喜爱。",
          "whyHot": "鬼灭之刃长青人气角色，反差萌剪辑持续产出。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/zenitsu",
            "search": "https://www.tiktok.com/search?q=zenitsu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ringwitdahoodietwixtor",
            "videoId": "7691324441552375041"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 12
        },
        {
          "tag": "#nezuko",
          "name": "Nezuko（《鬼灭之刃》灶门祢豆子）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "54.7K",
              "views": "35.5M"
            }
          ],
          "summary": "《鬼灭之刃》女主角灶门祢豆子，变成鬼后依然守护人类的温柔形象是粉丝二创重点。",
          "whyHot": "鬼灭之刃长青人气角色，萌系剪辑与仿妆内容持续产出。",
          "origin": "官方动画片段+粉丝二创/仿妆。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/nezuko",
            "search": "https://www.tiktok.com/search?q=nezuko",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "1thinkwwm",
            "videoId": "7695362747814530326"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 13
        },
        {
          "tag": "#sungjinwoo",
          "name": "Sung Jin-Woo（《我独自升级》成镜）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "48.9K",
              "views": "33.6M"
            }
          ],
          "summary": "韩国网漫改编动画《我独自升级》主角成镜，从最弱猎人逆转成长为最强的爽文式剧情广受欢迎。",
          "whyHot": "近年人气新番动漫，战斗场面/成长剧情剪辑持续产出。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sungjinwoo",
            "search": "https://www.tiktok.com/search?q=sungjinwoo",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "whatifuniversed2026",
            "videoId": "7679114818833435925"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 14
        },
        {
          "tag": "#animeclips",
          "name": "Anime Clips（动漫片段剪辑合集）",
          "regionGroup": "global",
          "category": "动漫/泛二创",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "54.6K",
              "views": "33.1M"
            }
          ],
          "summary": "泛用型动漫片段剪辑聚合标签，覆盖多部作品的名场面/催泪/热血剪辑。",
          "whyHot": "标签本身是动漫内容聚合入口，持续有新剪辑投稿。",
          "origin": "粉丝自发剪辑投稿。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/animeclips",
            "search": "https://www.tiktok.com/search?q=animeclips",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "landonr_0609",
            "videoId": "7687709708014144798"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 15
        },
        {
          "tag": "#costumeideas",
          "name": "Costume Ideas（万圣节装扮创意）",
          "regionGroup": "sea",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "661",
              "views": "32.8M"
            }
          ],
          "summary": "万圣节装扮创意灵感分享内容标签，涵盖DIY服装、妆造参考等。",
          "whyHot": "万圣节季节性驱动，装扮灵感类内容集中产出。",
          "origin": "用户自发万圣节装扮创意分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/costumeideas",
            "search": "https://www.tiktok.com/search?q=costumeideas",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nataliireynoldss",
            "videoId": "7692957276587429150"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 16
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
              "posts": "630",
              "views": "32.4M"
            },
            {
              "code": "MY",
              "posts": "509",
              "views": "15.9M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "tekno_edit_",
            "videoId": "7656541594300222727"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 17
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
              "posts": "14.9K",
              "views": "31.4M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hieudeptrai_211",
            "videoId": "7695306672453045522"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 18
        },
        {
          "tag": "#kageyama",
          "name": "Kageyama（《排球少年》影山飞雄）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "48.7K",
              "views": "31.0M"
            }
          ],
          "summary": "《排球少年》天才二传手影山飞雄，与日向翔阳的\"快攻\"配合是系列标志性名场面。",
          "whyHot": "排球少年长青人气IP，热血运动番剪辑持续有稳定受众。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/kageyama",
            "search": "https://www.tiktok.com/search?q=kageyama",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "funoxz",
            "videoId": "7659483025285090567"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 19
        },
        {
          "tag": "#anya",
          "name": "Anya Forger（《间谍过家家》安妮亚）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "54.0K",
              "views": "30.4M"
            }
          ],
          "summary": "《间谍过家家》读心能力小女孩安妮亚，呆萌表情包与\"哇酷哇酷\"口癖是全网热门表情素材。",
          "whyHot": "表情包式萌系角色天然适合二创传播，持续产出表情包/仿妆内容。",
          "origin": "官方动画片段+粉丝表情包/仿妆二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/anya",
            "search": "https://www.tiktok.com/search?q=anya",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "spyxvici",
            "videoId": "7498399335046991126"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 20
        },
        {
          "tag": "#bluearchive",
          "name": "Blue Archive（蔚蓝档案）",
          "regionGroup": "global",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "47.7K",
              "views": "30.0M"
            }
          ],
          "summary": "日本School RPG手游，校园题材+角色养成玩法在亚洲年轻玩家群体中人气很高。",
          "whyHot": "活跃手游IP，角色剪辑/同人内容随版本更新持续产出。",
          "origin": "玩家剪辑/同人二创内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/bluearchive",
            "search": "https://www.tiktok.com/search?q=bluearchive",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "zasuki_sa",
            "videoId": "7695721927037570322"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 21
        },
        {
          "tag": "#tokyorevengers",
          "name": "Tokyo Revengers（东京复仇者）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "48.4K",
              "views": "29.6M"
            },
            {
              "code": "ID",
              "posts": "2.4K",
              "views": "9.4M"
            },
            {
              "code": "TH",
              "posts": "1.0K",
              "views": "7.8M"
            }
          ],
          "summary": "和久井健漫画改编的穿越/帮派题材动漫，佔天愛人、潘东会等角色与剧情名场面受粉丝喜爱。",
          "whyHot": "人气动漫IP，角色剪辑/名场面二创在东南亚粉丝圈持续活跃。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/tokyorevengers",
            "search": "https://www.tiktok.com/search?q=tokyorevengers",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sevensenpai_",
            "videoId": "7697204351898504481"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 22
        },
        {
          "tag": "#fategrandorder",
          "name": "Fate/Grand Order（命运/冠位指定）",
          "regionGroup": "global",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "47.2K",
              "views": "29.4M"
            }
          ],
          "summary": "TYPE-MOON旗下长青手游IP，收集历史/传说英灵进行战斗的策略卡牌玩法。",
          "whyHot": "老牌人气手游，角色剪辑/活动剧情内容随版本更新持续产出。",
          "origin": "玩家剪辑/官方宣传内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fategrandorder",
            "search": "https://www.tiktok.com/search?q=fategrandorder",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fgoproject",
            "videoId": "7697138246035442965"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 23
        },
        {
          "tag": "#arknights",
          "name": "Arknights（明日方舟）",
          "regionGroup": "global",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "47.3K",
              "views": "28.8M"
            }
          ],
          "summary": "鹰角网络出品塔防手游，末日废土世界观与角色塑造深受玩家喜爱，东南亚亦有稳定玩家群体。",
          "whyHot": "活跃手游IP，角色剪辑/剧情向内容随版本更新持续产出。",
          "origin": "玩家剪辑/官方宣传内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/arknights",
            "search": "https://www.tiktok.com/search?q=arknights",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "arknights_en",
            "videoId": "7696398472907328799"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 24
        },
        {
          "tag": "#nikkegoddessofvictory",
          "name": "GODDESS OF VICTORY: NIKKE（手游《胜利女神：妮姬》）",
          "regionGroup": "global",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "47.7K",
              "views": "28.2M"
            }
          ],
          "summary": "Shift Up 出品的枪械少女题材手游 NIKKE 全名标签。",
          "whyHot": "版本更新与角色 PV 二创在多市场同步带动，游戏美术风格利于剪辑传播。",
          "origin": "游戏官方 IP。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/nikkegoddessofvictory",
            "search": "https://www.tiktok.com/search?q=nikkegoddessofvictory",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kainz_vt",
            "videoId": "7661992364281744643"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 25
        },
        {
          "tag": "#azurlane",
          "name": "Azur Lane（碧蓝航线）",
          "regionGroup": "global",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "45.8K",
              "views": "25.1M"
            }
          ],
          "summary": "舰船拟人题材手游，角色设计与联动活动在东南亚玩家圈持续活跃。",
          "whyHot": "长青手游IP，角色剪辑/联动活动内容持续产出。",
          "origin": "玩家剪辑/官方宣传内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/azurlane",
            "search": "https://www.tiktok.com/search?q=azurlane",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "yuuki_my_istri_wangyy",
            "videoId": "7697031290184305940"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 26
        },
        {
          "tag": "#fireflywedding",
          "name": "Firefly Wedding（萤火虫主题婚礼美学）",
          "regionGroup": "sea",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "1.8K",
              "views": "23.8M"
            },
            {
              "code": "PH",
              "posts": "724",
              "views": "9.3M"
            }
          ],
          "summary": "以萤火虫灯饰/夜间户外为主题的婚礼布置美学潮流，新人分享婚礼现场布置与氛围感短视频。",
          "whyHot": "婚礼季+唯美夜景灯饰视觉强，天然适合短视频传播，带动同类主题婚礼内容效仿拍摄。",
          "origin": "新人/婚庆机构自发分享婚礼布置内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/fireflywedding",
            "search": "https://www.tiktok.com/search?q=fireflywedding",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "namharu04",
            "videoId": "7694737506641759494"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 27
        },
        {
          "tag": "#funnymoments",
          "name": "Funny Moments（搞笑片段合集）",
          "regionGroup": "sea",
          "category": "生活方式/幽默",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "537",
              "views": "23.1M"
            }
          ],
          "summary": "泛用型\"搞笑瞬间\"合集标签，覆盖宠物/朋友/日常生活中的意外爆笑片段剪辑。",
          "whyHot": "标签本身是通用幽默内容聚合入口，持续有新素材投稿，带动话题稳定在榜。",
          "origin": "用户自发投稿的日常搞笑片段剪辑。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/funnymoments",
            "search": "https://www.tiktok.com/search?q=funnymoments",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "funnyvideohub5",
            "videoId": "7696843430097341718"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 28
        },
        {
          "tag": "#jojosbizarreadventure",
          "name": "JoJo's Bizarre Adventure（《JOJO的奇妙冒险》）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "643",
              "views": "17.9M"
            }
          ],
          "summary": "荒木飞吕彦经典日本漫画/动画IP，以夸张姿势、替身能力战斗场面与标志性梗图著称。",
          "whyHot": "粉丝持续产出角色剪辑、\"JOJO立\"模仿梗、名场面二创，是长青动漫IP类内容。",
          "origin": "官方动画片段+粉丝模仿/剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/jojosbizarreadventure",
            "search": "https://www.tiktok.com/search?q=jojosbizarreadventure",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "yaruxxi",
            "videoId": "7697184829120564483"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 29
        },
        {
          "tag": "#couplegoals",
          "name": "Couple Goals（情侣理想状态梗）",
          "regionGroup": "sea",
          "category": "生活方式/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "673",
              "views": "17.0M"
            }
          ],
          "summary": "展示情侣间甜蜜互动/贴心举动，塑造\"理想情侣relationship\"标杆的内容标签。",
          "whyHot": "恋爱向内容天然易共鸣传播，情侣博主持续产出同类内容。",
          "origin": "情侣博主自发分享日常互动片段。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/couplegoals",
            "search": "https://www.tiktok.com/search?q=couplegoals",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "youagain_sd",
            "videoId": "7689130150356700424"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 30
        },
        {
          "tag": "#avoidantattachment",
          "name": "Avoidant Attachment（回避型依恋风格话题）",
          "regionGroup": "sea",
          "category": "心理/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "1.9K",
              "views": "14.1M"
            }
          ],
          "summary": "围绕依恋理论中\"回避型依恋\"人格特质的自我剖析/科普向内容标签，常见于情感心理赛道。",
          "whyHot": "心理学科普+自我认知反思类内容在年轻用户中持续有稳定讨论度，不依赖单一触发事件。",
          "origin": "心理科普博主/情感类创作者内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/avoidantattachment",
            "search": "https://www.tiktok.com/search?q=avoidantattachment",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mindchanger9",
            "videoId": "7542166272067325215"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 31
        },
        {
          "tag": "#avoidant",
          "name": "Avoidant（回避型人格行为梗）",
          "regionGroup": "sea",
          "category": "心理/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "1.7K",
              "views": "14.1M"
            }
          ],
          "summary": "围绕\"回避型\"性格在人际/恋爱关系中典型行为表现的自我剖析向内容标签。",
          "whyHot": "心理学科普+自我认知反思类内容持续有稳定讨论度，常与avoidantattachment话题同步出现。",
          "origin": "心理科普博主/情感类创作者内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/avoidant",
            "search": "https://www.tiktok.com/search?q=avoidant",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "louie.exes",
            "videoId": "7688101739932732679"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 32
        },
        {
          "tag": "#killua",
          "name": "Killua（《全职猎人》奇犽）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "1.1K",
              "views": "11.4M"
            }
          ],
          "summary": "《全职猎人》（Hunter x Hunter）人气角色奇犽·揣世，电光系念能力与冷酷外表下重情义的性格受粉丝喜爱。",
          "whyHot": "长青人气动漫角色，粉丝持续产出角色剪辑/手书/台词二创。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/killua",
            "search": "https://www.tiktok.com/search?q=killua",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kepocks",
            "videoId": "7592265444292037944"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 33
        },
        {
          "tag": "#gon",
          "name": "Gon Freecss（《全职猎人》小杰）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "965",
              "views": "10.7M"
            }
          ],
          "summary": "《全职猎人》主角小杰·富力士，天然系猎人与奇犽的友情线是系列经典名场面来源。",
          "whyHot": "长青人气动漫角色，与killua话题常同步上榜，粉丝持续产出剪辑二创。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/gon",
            "search": "https://www.tiktok.com/search?q=gon",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nenebu_2234",
            "videoId": "7696145311454006529"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 34
        },
        {
          "tag": "#redflag",
          "name": "Red Flag（关系警示信号梗）",
          "regionGroup": "sea",
          "category": "生活方式/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "547",
              "views": "9.2M"
            }
          ],
          "summary": "盘点恋爱/交友中值得警惕的\"危险信号\"行为的情感向内容标签。",
          "whyHot": "恋爱警示类内容容易引发共鸣与评论区讨论，是长期活跃的情感内容类别。",
          "origin": "情感类创作者/用户自发分享的恋爱经验内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/redflag",
            "search": "https://www.tiktok.com/search?q=redflag",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dreamersheart1977",
            "videoId": "7689852324126149920"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 35
        },
        {
          "tag": "#thesecretlibrary",
          "name": "The Secret Library（菲律宾主题图书馆咖啡馆）",
          "regionGroup": "sea",
          "category": "生活方式/网红打卡地",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "3.2K",
              "views": "9.0M"
            }
          ],
          "summary": "菲律宾马尼拉地区的爱丽丝梦游仙境主题图书馆咖啡馆，复古书房+奇幻布景适合拍照打卡。",
          "whyHot": "沉浸式主题布景天然适合短视频探店/变装内容，带动用户到店打卡分享。",
          "origin": "网红博主探店打卡内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/thesecretlibrary",
            "search": "https://www.tiktok.com/search?q=thesecretlibrary",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "latteicedmatcha",
            "videoId": "7696598069462191368"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 36
        },
        {
          "tag": "#huntshowdown",
          "name": "Hunt: Showdown（猎杀对决游戏）",
          "regionGroup": "sea",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "2.4K",
              "views": "8.4M"
            }
          ],
          "summary": "Crytek开发的PVPVE猎杀生存射击游戏，哥特式19世纪场景与紧张对局氛围是其特色。",
          "whyHot": "游戏实况/精彩操作集锦类内容持续产出，核心玩家社群活跃。",
          "origin": "玩家实况/集锦剪辑内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/huntshowdown",
            "search": "https://www.tiktok.com/search?q=huntshowdown",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "set_as_known",
            "videoId": "7563968069958176021"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 37
        },
        {
          "tag": "#doraemon",
          "name": "Doraemon（哆啦A梦）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "611",
              "views": "8.1M"
            }
          ],
          "summary": "藤子·F·不二雄经典日本动漫IP，机器猫哆啦A梦与大雄的温情科幻日常故事，东南亚长年拥有大量观众基础。",
          "whyHot": "经典长青IP，怀旧向剪辑+周边内容在东南亚市场持续有稳定热度。",
          "origin": "官方动画片段+粉丝怀旧向二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/doraemon",
            "search": "https://www.tiktok.com/search?q=doraemon",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "doraemon_th08",
            "videoId": "7697100173410897153"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 38
        },
        {
          "tag": "#90s",
          "name": "90s（九十年代复古风潮）",
          "regionGroup": "sea",
          "category": "生活方式/怀旧",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "506",
              "views": "6.4M"
            }
          ],
          "summary": "以九十年代穿搭/音乐/审美为主题的复古风潮内容标签。",
          "whyHot": "复古美学周期性回潮，怀旧向剪辑+穿搭仿妆内容持续产出。",
          "origin": "用户自发复古风穿搭/剪辑内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/90s",
            "search": "https://www.tiktok.com/search?q=90s",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "eurosumm3r",
            "videoId": "7689512354563853600"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 39
        },
        {
          "tag": "#skibiditoilet",
          "name": "Skibidi Toilet（Skibidi厕所人梗）",
          "regionGroup": "sea",
          "category": "网络迷因/游戏",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "529",
              "views": "6.3M"
            }
          ],
          "summary": "源自YouTube动画系列的荒诞\"马桶头\"人物迷因，衍生出大量二创、游戏模组与配乐remix。",
          "whyHot": "全球范围长青网络迷因，持续有新二创/remix内容产出，东南亚年轻用户参与度高。",
          "origin": "原作YouTube动画系列+全球粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/skibiditoilet",
            "search": "https://www.tiktok.com/search?q=skibiditoilet",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dafuqbomtv",
            "videoId": "7694891959697034548"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 40
        },
        {
          "tag": "#trickortreat",
          "name": "Trick or Treat（万圣节讨糖传统）",
          "regionGroup": "sea",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "1.8K",
              "views": "5.0M"
            }
          ],
          "summary": "万圣节经典\"不给糖就捣蛋\"讨糖活动相关的装扮/场景内容标签。",
          "whyHot": "万圣节季节性驱动，家庭/儿童向内容集中产出。",
          "origin": "用户万圣节活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/trickortreat",
            "search": "https://www.tiktok.com/search?q=trickortreat",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fox5_atlanta",
            "videoId": "7696574540687658270"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 41
        },
        {
          "tag": "#growingup",
          "name": "Growing Up（成长怀旧梗）",
          "regionGroup": "sea",
          "category": "生活方式/怀旧",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "561",
              "views": "4.6M"
            }
          ],
          "summary": "围绕\"长大\"主题的怀旧向内容标签，常见童年对比/成长感悟类短视频。",
          "whyHot": "怀旧+共鸣类内容长期有稳定受众，无需单一触发事件。",
          "origin": "用户自发成长怀旧向内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/growingup",
            "search": "https://www.tiktok.com/search?q=growingup",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "explore.america2",
            "videoId": "7696287664386952478"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 42
        },
        {
          "tag": "#strictparents",
          "name": "Strict Parents（严厉父母梗）",
          "regionGroup": "sea",
          "category": "生活方式/家庭",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "850",
              "views": "3.8M"
            }
          ],
          "summary": "调侃\"严厉父母\"管教方式的家庭向幽默内容标签，常见亚洲家庭文化共鸣梗。",
          "whyHot": "家庭教育共鸣类内容在东南亚家庭文化语境下容易引发评论区共鸣讨论。",
          "origin": "用户自发家庭向幽默内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/strictparents",
            "search": "https://www.tiktok.com/search?q=strictparents",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sarelosbackyard",
            "videoId": "7696251639912533279"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 43
        },
        {
          "tag": "#mentalhealthawareness",
          "name": "Mental Health Awareness（心理健康意识）",
          "regionGroup": "sea",
          "category": "健康/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "519",
              "views": "3.6M"
            }
          ],
          "summary": "心理健康科普与自我关怀倡议向内容标签，覆盖情绪管理/心理求助资源分享。",
          "whyHot": "心理健康议题关注度持续上升，科普/个人经历分享类内容稳定产出。",
          "origin": "心理健康倡议组织/个人经历分享内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/mentalhealthawareness",
            "search": "https://www.tiktok.com/search?q=mentalhealthawareness",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 44
        },
        {
          "tag": "#halloweenparty",
          "name": "Halloween Party（万圣节派对）",
          "regionGroup": "sea",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "790",
              "views": "3.0M"
            }
          ],
          "summary": "万圣节主题派对筹备/现场记录内容标签，涵盖装扮、布置、游戏环节。",
          "whyHot": "万圣节季节性驱动，派对筹备/现场记录类内容集中产出。",
          "origin": "用户万圣节派对记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweenparty",
            "search": "https://www.tiktok.com/search?q=halloweenparty",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hotshotboys",
            "videoId": "7675985991961791774"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 45
        },
        {
          "tag": "#deepquotes",
          "name": "Deep Quotes（深度语录/文案）",
          "regionGroup": "sea",
          "category": "生活方式/文案",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "577",
              "views": "2.7M"
            }
          ],
          "summary": "配文案/语录向的内容标签，常搭配氛围感画面展示引发思考的句子。",
          "whyHot": "文案配图类内容格式简单易产出，长期有稳定创作者群体。",
          "origin": "用户自发文案配图内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/deepquotes",
            "search": "https://www.tiktok.com/search?q=deepquotes",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ali20310vhr",
            "videoId": "7651277923248360718"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 46
        },
        {
          "tag": "#savagelove",
          "name": "Savage Love（恋爱毒舌/反套路梗）",
          "regionGroup": "sea",
          "category": "生活方式/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "839",
              "views": "837.9K"
            }
          ],
          "summary": "以毒舌/反套路态度调侃恋爱关系的情感向内容标签。",
          "whyHot": "反套路情感内容风格鲜明，容易在评论区引发讨论互动。",
          "origin": "情感类创作者自发内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/savagelove",
            "search": "https://www.tiktok.com/search?q=savagelove",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "itozux.gh",
            "videoId": "7696105646965443841"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 47
        }
      ]
    },
    "30": {
      "items": [
        {
          "tag": "#southpark",
          "name": "South Park（美国经典成人动画）",
          "regionGroup": "sea",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "259.2K",
              "views": "3.9B"
            },
            {
              "code": "PH",
              "posts": "15.8K",
              "views": "370.4M"
            },
            {
              "code": "MY",
              "posts": "2.7K",
              "views": "83.7M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
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
          "tag": "#southparkedit",
          "name": "South Park 剪辑二创",
          "regionGroup": "global",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "108.6K",
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
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "princeleoww",
            "videoId": "7695675199081008414"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 2
        },
        {
          "tag": "#october",
          "name": "October（十月通用月份标签）",
          "regionGroup": "sea",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "350.3K",
              "views": "981.9M"
            },
            {
              "code": "PH",
              "posts": "31.4K",
              "views": "82.0M"
            },
            {
              "code": "ID",
              "posts": "21.5K",
              "views": "52.2M"
            },
            {
              "code": "MY",
              "posts": "9.2K",
              "views": "20.4M"
            },
            {
              "code": "TH",
              "posts": "6.7K",
              "views": "12.0M"
            },
            {
              "code": "VN",
              "posts": "4.0K",
              "views": "10.7M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "themindaa",
            "videoId": "7691451275795352864"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 3
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
              "views": "836.4M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "tiktokio.ringtone",
            "videoId": "7680510977300860161"
          },
          "fusionSuggestion": {
            "commercial": "'校园舞会'场景可作MCGG青春主题棋盘的视觉母题（注意用研红线：校园题材需谨慎评估受众偏好）。",
            "video": "可参考'提案惊喜瞬间'的反应式剪辑格式。"
          },
          "rank": 4
        },
        {
          "tag": "#missgrandinternational",
          "name": "Miss Grand International（MGI国际选美大赛）",
          "regionGroup": "sea",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "40.5K",
              "views": "823.1M"
            },
            {
              "code": "TH",
              "posts": "25.7K",
              "views": "171.6M"
            },
            {
              "code": "PH",
              "posts": "13.7K",
              "views": "169.5M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missgrandinternational",
            "videoId": "7695097548394253588"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可借势'国际赛事应援'氛围做棋盘皮肤的票选/应援玩法联想（避免使用真实选手肖像），具体方向待策划评估。",
            "video": "可参考选美赛事的'国服展示+舞台走位'视觉语言做皮肤展示短视频，规避真人版权风险。"
          },
          "rank": 5
        },
        {
          "tag": "#2ngay1dem",
          "name": "2 Ngày 1 Đêm（越南综艺《两天一夜》）",
          "regionGroup": "sea",
          "category": "综艺",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.5K",
              "views": "559.4M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dongtaypromotionofficial",
            "videoId": "7697130356499074324"
          },
          "fusionSuggestion": {
            "commercial": "旅行+游戏任务类综艺的'惩罚环节'喜感可为MCGG对战结算动画提供梗参考。",
            "video": "可参考其'任务卡+反转惩罚'的短视频剪辑结构。"
          },
          "rank": 6
        },
        {
          "tag": "#damcuoi",
          "name": "Đám cưới（越南语\"婚礼\"，婚礼相亲真人秀集群）",
          "regionGroup": "sea",
          "category": "真人秀/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "39.7K",
              "views": "455.4M"
            }
          ],
          "summary": "越南语\"婚礼\"，与#utlan2 #wedding同属一组婚恋/婚礼主题真人秀相关标签集群。",
          "whyHot": "真人秀婚礼环节剧情性强、话题度高，是同类节目最受关注的固定桥段，机制清楚。",
          "origin": "越南本地婚恋真人秀节目片段。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/damcuoi",
            "search": "https://www.tiktok.com/search?q=damcuoi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "erikkkofficial",
            "videoId": "7653053181684993301"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 7
        },
        {
          "tag": "#halloween",
          "name": "Halloween（万圣节）",
          "regionGroup": "sea",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "26.8K",
              "views": "421.9M"
            },
            {
              "code": "ID",
              "posts": "22.3K",
              "views": "239.0M"
            },
            {
              "code": "TH",
              "posts": "22.0K",
              "views": "154.6M"
            },
            {
              "code": "VN",
              "posts": "13.0K",
              "views": "109.6M"
            },
            {
              "code": "MY",
              "posts": "4.0K",
              "views": "99.9M"
            }
          ],
          "summary": "万圣节主题内容标签：妆容、变装、装饰、派对与恐怖趣味创作。",
          "whyHot": "10 月进入万圣节预热期，变装/妆容/家居装饰内容集中发布，是欧美市场年度最大的季节创作节点之一。",
          "origin": "西方传统节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloween",
            "search": "https://www.tiktok.com/search?q=halloween",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 8
        },
        {
          "tag": "#halloweenmakeup",
          "name": "Halloween Makeup（万圣节妆容）",
          "regionGroup": "sea",
          "category": "季节/美妆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "63.8K",
              "views": "416.6M"
            },
            {
              "code": "PH",
              "posts": "3.4K",
              "views": "32.1M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bynatalija",
            "videoId": "7695788131643084064"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 9
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
              "posts": "9.1K",
              "views": "398.4M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "singadvisor",
            "videoId": "7690048283472841992"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 10
        },
        {
          "tag": "#missgrandvietnam",
          "name": "Miss Grand Vietnam（MGI越南国赛）",
          "regionGroup": "sea",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "19.4K",
              "views": "383.5M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missgrandvietnamofficial",
            "videoId": "7697200395847765255"
          },
          "fusionSuggestion": {
            "commercial": "同MGI：应援玩法联想，避免真人肖像。",
            "video": "可参考'国服展示'视觉语言，规避真人版权。"
          },
          "rank": 11
        },
        {
          "tag": "#aura",
          "name": "Aura（气场值梗）",
          "regionGroup": "sea",
          "category": "梗/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "29.0K",
              "views": "325.6M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "richard_vision",
            "videoId": "7655890872189390093"
          },
          "fusionSuggestion": {
            "commercial": "'气场值量化'玩法可直译为MCGG棋盘互动彩蛋（如连胜+aura特效）。",
            "video": "可参考'+1000 aura/-500 aura'的字幕计分梗格式。"
          },
          "rank": 12
        },
        {
          "tag": "#utlan2",
          "name": "越南婚恋/相亲类真人秀（第二季，具体节目名待核验）",
          "regionGroup": "sea",
          "category": "真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "6.7K",
              "views": "318.3M"
            }
          ],
          "summary": "标签指向越南本地一档婚恋/相亲主题真人秀节目的第二季，与#damcuoi #wedding等婚礼主题标签同期出现，推测为撮合/婚礼真人秀集群。",
          "whyHot": "真人秀播出期内选手/剧情花絮持续产生讨论，机制清楚，但具体节目名称与详情未能公开检索核实。【含义待核验】",
          "origin": "越南本地真人秀节目（具体制作方待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/utlan2",
            "search": "https://www.tiktok.com/search?q=utlan2",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "gia.nguyen3569",
            "videoId": "7688676127300226310"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 13
        },
        {
          "tag": "#31daysofhalloween",
          "name": "31 Days of Halloween（万圣节31天倒计时）",
          "regionGroup": "global",
          "category": "季节/内容企划",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "26.6K",
              "views": "300.2M"
            }
          ],
          "summary": "万圣节倒计时 31 天日更内容系列标签，亦对应 Freeform 频道十月恐怖片编排季“31 Nights of Halloween”。",
          "whyHot": "创作者按倒计时日更恐怖/万圣节主题内容，系列化发布与电视台编排季同名共振带动标签积累。",
          "origin": "创作者系列企划+电视台编排季共用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/31daysofhalloween",
            "search": "https://www.tiktok.com/search?q=31daysofhalloween",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "suss_fran",
            "videoId": "7695976035778678029"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 14
        },
        {
          "tag": "#patientzero",
          "name": "Patient Zero（Taylor Swift 新单曲话题）",
          "regionGroup": "sea",
          "category": "音乐/新歌",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "64.4K",
              "views": "272.7M"
            },
            {
              "code": "PH",
              "posts": "3.5K",
              "views": "28.3M"
            }
          ],
          "summary": "Taylor Swift 新单曲《Patient Zero》话题标签。",
          "whyHot": "新歌发布带动歌词梗、听歌反应与舞蹈/剪辑二创；单曲信息经媒体报导核实。",
          "origin": "歌手官方新作话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/patientzero",
            "search": "https://www.tiktok.com/search?q=patientzero",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mysteriousjulia_",
            "videoId": "7690719771637075213"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 15
        },
        {
          "tag": "#hispanicheritagemonth",
          "name": "Hispanic Heritage Month（美国拉美传统文化月）",
          "regionGroup": "global",
          "category": "文化庆典",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "45.2K",
              "views": "224.9M"
            }
          ],
          "summary": "美国每年9月15日至10月15日的官方纪念月，庆祝拉美裔美国人的历史与文化贡献。",
          "whyHot": "文化月期间品牌/个人发布拉美文化相关内容形成固定周期性话题，机制清楚（非政治议题，是文化庆典）。",
          "origin": "美国官方文化纪念月+社区自发内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hispanicheritagemonth",
            "search": "https://www.tiktok.com/search?q=hispanicheritagemonth",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "juanabarrios94",
            "videoId": "7695953592045325598"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 16
        },
        {
          "tag": "#blackclover",
          "name": "Black Clover（《黑色五叶草》）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "22.1K",
              "views": "224.2M"
            },
            {
              "code": "PH",
              "posts": "16.2K",
              "views": "177.7M"
            },
            {
              "code": "MY",
              "posts": "2.0K",
              "views": "39.7M"
            }
          ],
          "summary": "田畠裕基的少年漫画《黑色五叶草》及其动画改编，魔法骑士团战斗题材。",
          "whyHot": "长线连载少年 IP，战斗/魔法场面是剪辑二创的高频素材，标签热度由粉丝剪辑与角色讨论维持。",
          "origin": "漫画/动画官方 IP 话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/blackclover",
            "search": "https://www.tiktok.com/search?q=blackclover",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kainzxx_",
            "videoId": "7693959499471654164"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 17
        },
        {
          "tag": "#missuniversevietnam",
          "name": "Miss Universe Vietnam（越南宇宙小姐）",
          "regionGroup": "sea",
          "category": "选美赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "8.8K",
              "views": "216.7M"
            }
          ],
          "summary": "环球小姐越南国家赛区选拔赛事，决出代表越南参加国际总决赛的佳丽。",
          "whyHot": "赛事期间颁奖/泳装/才艺环节片段密集产出，粉丝投票讨论度高。",
          "origin": "官方赛事转播片段+观众剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missuniversevietnam",
            "search": "https://www.tiktok.com/search?q=missuniversevietnam",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missuniversevietnam.org",
            "videoId": "7697190509940460820"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 18
        },
        {
          "tag": "#ggez",
          "name": "\"GG EZ\"（电竞/游戏调侃用语）",
          "regionGroup": "sea",
          "category": "游戏/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "13.1K",
              "views": "192.8M"
            },
            {
              "code": "PH",
              "posts": "2.3K",
              "views": "41.7M"
            }
          ],
          "summary": "电竞圈常用调侃语\"Good Game, Easy\"（好游戏，太简单了），常用于游戏内容或调侃场景。",
          "whyHot": "游戏社区通用梗，适配各类游戏内容二创，机制清楚。",
          "origin": "电竞/游戏社区通用用语。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/ggez",
            "search": "https://www.tiktok.com/search?q=ggez",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "angelinazhq",
            "videoId": "7678730525359623431"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 19
        },
        {
          "tag": "#complexcon",
          "name": "ComplexCon（潮流文化展会）",
          "regionGroup": "global",
          "category": "潮流文化/展会事件",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "15.3K",
              "views": "189.7M"
            }
          ],
          "summary": "Complex 媒体主办的潮流文化大展，覆盖街头服饰、艺术、音乐与限定发售。",
          "whyHot": "2026 届于 10 月 3-4 日在拉斯维加斯会展中心举办，现场限定球鞋/联名发售与名人到场带动打卡、开箱与排队内容。",
          "origin": "官方活动品牌话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/complexcon",
            "search": "https://www.tiktok.com/search?q=complexcon",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ricosofly",
            "videoId": "7692577398709046558"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 20
        },
        {
          "tag": "#loki",
          "name": "Loki（漫威洛基）",
          "regionGroup": "sea",
          "category": "影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "23.2K",
              "views": "144.9M"
            },
            {
              "code": "VN",
              "posts": "4.7K",
              "views": "84.6M"
            },
            {
              "code": "MY",
              "posts": "1.0K",
              "views": "11.4M"
            }
          ],
          "summary": "漫威宇宙反英雄角色洛基，复杂多变的性格与多元宇宙剧情设定持续吸引粉丝剪辑二创。",
          "whyHot": "漫威长青人气角色，剧集/电影片段剪辑持续产出。",
          "origin": "官方剧集/电影片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/loki",
            "search": "https://www.tiktok.com/search?q=loki",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "is3udd",
            "videoId": "7684375027839405333"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 21
        },
        {
          "tag": "#dragraceph",
          "name": "Drag Race Philippines（鲁保罗变装皇后秀菲律宾版）",
          "regionGroup": "sea",
          "category": "真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "6.0K",
              "views": "133.9M"
            }
          ],
          "summary": "RuPaul's Drag Race franchise 的菲律宾本地版。",
          "whyHot": "franchise 本地版播出期表演片段与选手讨论二创带动，PH 市场综艺热度出口。",
          "origin": "官方综艺 IP 本地版。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dragraceph",
            "search": "https://www.tiktok.com/search?q=dragraceph",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "edsaxxtra",
            "videoId": "7695420851746917652"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 22
        },
        {
          "tag": "#octubre",
          "name": "Octubre（西语十月）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "30.2K",
              "views": "125.4M"
            }
          ],
          "summary": "西语‘十月’通用月份标签，拉美裔创作者季节内容聚集。",
          "whyHot": "十月季节内容+西语社区月度 UGC 惯例聚集。",
          "origin": "创作者自发通用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/octubre",
            "search": "https://www.tiktok.com/search?q=octubre",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "yenddimusic",
            "videoId": "7695886052241771789"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 23
        },
        {
          "tag": "#forgottenisland",
          "name": "Forgotten Island（梦工厂动画《忘却之岛》）",
          "regionGroup": "sea",
          "category": "动画电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "6.8K",
              "views": "123.7M"
            },
            {
              "code": "US",
              "posts": "4.6K",
              "views": "60.6M"
            }
          ],
          "summary": "梦工厂原创动画，菲律宾神话‘忘却之岛’冒险题材，2026-09-25 美国上映。",
          "whyHot": "上映窗口期 PH 市场因菲律宾文化元素与女性友谊主题爆发本地化二创与观影打卡。",
          "origin": "片方官方电影话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/forgottenisland",
            "search": "https://www.tiktok.com/search?q=forgottenisland",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fandango",
            "videoId": "7685812894482713886"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 24
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
              "posts": "45.4K",
              "views": "114.9M"
            }
          ],
          "summary": "越南语冬季/转凉季节内容通用标签。",
          "whyHot": "越北进入转凉季节，季节情绪与穿搭内容集中发布。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/muadong",
            "search": "https://www.tiktok.com/search?q=muadong",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hieudeptrai_211",
            "videoId": "7695306672453045522"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 25
        },
        {
          "tag": "#spiritweek",
          "name": "Spirit Week（美国高校精神周）",
          "regionGroup": "global",
          "category": "生活方式/校园文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "23.8K",
              "views": "113.6M"
            }
          ],
          "summary": "美国高校秋季返校节前的\"主题周\"活动，每天不同装扮主题（睡衣日、复古日等）。",
          "whyHot": "返校季固定校园传统，每日主题装扮打卡内容集中产出。",
          "origin": "学生自发校园活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spiritweek",
            "search": "https://www.tiktok.com/search?q=spiritweek",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "notkare4will",
            "videoId": "7692798694663474445"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 26
        },
        {
          "tag": "#halloweencostume",
          "name": "Halloween Costume（万圣节服装）",
          "regionGroup": "sea",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "8.7K",
              "views": "112.8M"
            }
          ],
          "summary": "万圣节服装主题内容标签，聚合服装reveal、DIY制作教程、情侣/团体服装创意等。",
          "whyHot": "10月万圣节季进入服装内容年度峰值期，节前2-3周是服装灵感内容的集中发布窗口，菲/英/美多市场同步上榜。",
          "origin": "创作者自发季节性内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweencostume",
            "search": "https://www.tiktok.com/search?q=halloweencostume",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nataliireynoldss",
            "videoId": "7692957276587429150"
          },
          "fusionSuggestion": {
            "commercial": "万圣节cosplay氛围与MCGG节日限定皮肤发售节点天然契合。",
            "video": "可参考'服装从草图到成品'的过程剪辑格式。"
          },
          "rank": 27
        },
        {
          "tag": "#ธี่หยด",
          "name": "Thee Yod（泰国恐怖片《鬼妈》系列）",
          "regionGroup": "sea",
          "category": "影视IP/恐怖片",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "5.6K",
              "views": "112.8M"
            }
          ],
          "summary": "泰国民间灵异传说改编的恐怖电影系列，围绕\"鬼妈\"形象的乡野恐怖氛围广受泰国观众喜爱。",
          "whyHot": "系列电影上映期带动经典惊悚片段剪辑与讨论热度。",
          "origin": "官方电影片段+观众观影反应剪辑。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/%E0%B8%98%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A2%E0%B8%94",
            "search": "https://www.tiktok.com/search?q=%E0%B8%98%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A2%E0%B8%94",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "majorgroup",
            "videoId": "7684943871557520660"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 28
        },
        {
          "tag": "#coraline",
          "name": "Coraline（《鬼妈妈》）",
          "regionGroup": "sea",
          "category": "影视IP/定格动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "2.4K",
              "views": "103.6M"
            }
          ],
          "summary": "Laika出品经典定格动画惊悚片，讲述女孩柯拉琳发现镜中\"另一个世界\"的诡异故事。",
          "whyHot": "万圣节季经典惊悚IP回潮，怀旧向剪辑与仿妆内容集中产出。",
          "origin": "官方电影片段+粉丝怀旧向剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/coraline",
            "search": "https://www.tiktok.com/search?q=coraline",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "livssupersecret06",
            "videoId": "7695392739692645646"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 29
        },
        {
          "tag": "#midautumnfestival",
          "name": "中秋节 / Tết Trung Thu（东南亚中秋节庆）",
          "regionGroup": "sea",
          "category": "文化节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "31.2K",
              "views": "103.1M"
            },
            {
              "code": "MY",
              "posts": "3.2K",
              "views": "5.7M"
            }
          ],
          "summary": "东亚/东南亚华人及越南社群共同庆祝的传统中秋佳节，赏月、月饼、灯笼游行是核心活动。",
          "whyHot": "节日季节性驱动，家庭团聚/传统活动记录类内容集中产出，非宗教非政治的文化民俗庆典。",
          "origin": "用户自发节庆活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/midautumnfestival",
            "search": "https://www.tiktok.com/search?q=midautumnfestival",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "gardensbythebay",
            "videoId": "7009580492840242434"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 30
        },
        {
          "tag": "#covenacademy",
          "name": "Coven Academy（美剧《女巫团学院》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "8.6K",
              "views": "100.3M"
            }
          ],
          "summary": "Freeform 于 2026-10-01 开播的超自然青春剧，次日上线 Disney+/Hulu，新奥尔良魔法寄宿学校题材，共 10 集分批放出。",
          "whyHot": "新剧上线期叠加 Freeform‘31 Nights of Halloween’十月编排，片段二创与追剧讨论集中；10-08 放出第 5-7 集形成二次峰值。",
          "origin": "电视台官方新剧话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/covenacademy",
            "search": "https://www.tiktok.com/search?q=covenacademy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dummdunn8",
            "videoId": "7694948616057654559"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 31
        },
        {
          "tag": "#octobermood",
          "name": "October Mood（十月情绪）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "73.9K",
              "views": "92.5M"
            }
          ],
          "summary": "十月情绪/氛围标签：秋日穿搭、暖饮、阴天安慰系内容。",
          "whyHot": "季节情绪类内容在十月集中发布，氛围感模板带动跟拍。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/octobermood",
            "search": "https://www.tiktok.com/search?q=octobermood",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sunkissblonde",
            "videoId": "7695954024281001229"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 32
        },
        {
          "tag": "#spookymonth",
          "name": "Spooky Month（恐怖月）",
          "regionGroup": "global",
          "category": "季节/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "16.6K",
              "views": "82.8M"
            }
          ],
          "summary": "十月‘恐怖月’内容标签，恐怖趣味动画/梗图/变装创作聚集。",
          "whyHot": "十月恐怖趣味创作集中释放，与万圣节预热叠加。",
          "origin": "创作者自发季节标签（亦与同名动画梗系列共振）。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spookymonth",
            "search": "https://www.tiktok.com/search?q=spookymonth",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "moximusje",
            "videoId": "7691424012596956448"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 33
        },
        {
          "tag": "#themaskedsinger",
          "name": "The Masked Singer（蒙面歌王格式综艺）",
          "regionGroup": "sea",
          "category": "综艺/真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "2.1K",
              "views": "78.9M"
            }
          ],
          "summary": "全球授权的蒙面唱歌竞猜真人秀格式综艺，猎奇造型+揣测嘉宾身份是核心看点。",
          "whyHot": "综艺播出期猜身份话题性强，揭面环节片段天然适合短视频传播。",
          "origin": "官方综艺片段+观众猜测向剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/themaskedsinger",
            "search": "https://www.tiktok.com/search?q=themaskedsinger",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "viechannel.show",
            "videoId": "7694910200121199924"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 34
        },
        {
          "tag": "#obito",
          "name": "Obito（《火影忍者》宇智波带土）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.6K",
              "views": "70.5M"
            }
          ],
          "summary": "《火影忍者》悲剧性角色宇智波带土，从温柔少年黑化为反派的复杂剧情是系列经典名场面来源。",
          "whyHot": "长青人气反派角色，悲情剧情向剪辑持续被粉丝二创传播。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/obito",
            "search": "https://www.tiktok.com/search?q=obito",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nyelmoyaen",
            "videoId": "7604368958178725127"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 35
        },
        {
          "tag": "#redbullhucfest",
          "name": "Red Bull Hue Fest（红牛顺化节庆活动）",
          "regionGroup": "sea",
          "category": "文化/体育活动",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "2.9K",
              "views": "63.3M"
            }
          ],
          "summary": "红牛品牌在越南顺化（Huế）举办的极限运动/音乐节庆活动，具体赛事细节待核实。",
          "whyHot": "品牌活动现场精彩片段+参与者打卡内容集中产出。",
          "origin": "官方活动转播+参与者打卡剪辑。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/redbullhucfest",
            "search": "https://www.tiktok.com/search?q=redbullhucfest",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "redbullvietnam",
            "videoId": "7693114503302565140"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 36
        },
        {
          "tag": "#pumpkincarving",
          "name": "Pumpkin Carving（刻南瓜灯）",
          "regionGroup": "global",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "4.1K",
              "views": "52.7M"
            }
          ],
          "summary": "万圣节经典传统活动刻南瓜灯（Jack-o-lantern）的创意雕刻过程分享。",
          "whyHot": "万圣节季节性驱动，创意雕刻过程类内容集中产出。",
          "origin": "用户万圣节南瓜雕刻记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/pumpkincarving",
            "search": "https://www.tiktok.com/search?q=pumpkincarving",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "la.maisonmarion",
            "videoId": "7565965068714659075"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 37
        },
        {
          "tag": "#hocoweek",
          "name": "HOCO Week（返校节主题周）",
          "regionGroup": "global",
          "category": "生活方式/校园文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "12.8K",
              "views": "49.2M"
            }
          ],
          "summary": "美国高校秋季返校节（Homecoming）前一周的主题日活动，与Spirit Week同属校园传统。",
          "whyHot": "返校季固定校园传统，每日主题打卡内容集中产出。",
          "origin": "学生自发校园活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hocoweek",
            "search": "https://www.tiktok.com/search?q=hocoweek",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "grwmia.o",
            "videoId": "7697049743196802317"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 38
        },
        {
          "tag": "#october3rd",
          "name": "October 3rd（Mean Girls 梗日）",
          "regionGroup": "global",
          "category": "影视IP/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "23.8K",
              "views": "43.4M"
            }
          ],
          "summary": "《Mean Girls》台词“It's October 3rd”衍生的年度日历梗日标签。",
          "whyHot": "每年 10 月 3 日集中玩梗（截图、台词复刻、穿搭致敬），年度定时回潮。",
          "origin": "粉丝年度梗。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/october3rd",
            "search": "https://www.tiktok.com/search?q=october3rd",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "qandrx",
            "videoId": "7692182630887869729"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 39
        },
        {
          "tag": "#souleater",
          "name": "Soul Eater（噬魂师）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "8.1K",
              "views": "29.9M"
            }
          ],
          "summary": "经典日本动漫，死神武器学院的学生们收集\"噬魂\"对抗邪恶力量的热血故事。",
          "whyHot": "经典怀旧向动漫IP，角色剪辑与原声音乐remix持续有稳定受众。",
          "origin": "官方动画片段+粉丝怀旧向二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/souleater",
            "search": "https://www.tiktok.com/search?q=souleater",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ryavvar",
            "videoId": "7696567468776541461"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 40
        },
        {
          "tag": "#halloween2026",
          "name": "Halloween 2026（2026万圣节）",
          "regionGroup": "sea",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "2.0K",
              "views": "26.4M"
            },
            {
              "code": "TH",
              "posts": "3.1K",
              "views": "13.4M"
            }
          ],
          "summary": "带年份的万圣节标签，2026 年变装/装饰/派对内容的主标签之一。",
          "whyHot": "年份标签用于当季内容归档与挑战赛聚合，预热期增速快。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloween2026",
            "search": "https://www.tiktok.com/search?q=halloween2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "laurenlieven99",
            "videoId": "7690762264902634782"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 41
        },
        {
          "tag": "#fireflywedding",
          "name": "Firefly Wedding（萤火虫主题婚礼美学）",
          "regionGroup": "sea",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "1.8K",
              "views": "24.2M"
            }
          ],
          "summary": "以萤火虫灯饰/夜间户外为主题的婚礼布置美学潮流，新人分享婚礼现场布置与氛围感短视频。",
          "whyHot": "婚礼季+唯美夜景灯饰视觉强，天然适合短视频传播，带动同类主题婚礼内容效仿拍摄。",
          "origin": "新人/婚庆机构自发分享婚礼布置内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/fireflywedding",
            "search": "https://www.tiktok.com/search?q=fireflywedding",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "namharu04",
            "videoId": "7694737506641759494"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 42
        },
        {
          "tag": "#spookyseason",
          "name": "Spooky Season（恐怖季）",
          "regionGroup": "sea",
          "category": "季节/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "1.7K",
              "views": "23.5M"
            }
          ],
          "summary": "‘恐怖季’开启标签：入秋后恐怖/灵异/万圣节氛围内容的季节性宣告梗。",
          "whyHot": "入秋节点的氛围宣告梗，模板化开场（‘it's spooky season’）参与门槛低、传播稳定。",
          "origin": "创作者自发季节梗。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spookyseason",
            "search": "https://www.tiktok.com/search?q=spookyseason",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "jordynnlurie",
            "videoId": "7695912585387969806"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 43
        },
        {
          "tag": "#zombie",
          "name": "Zombie（僵尸题材万圣季内容）",
          "regionGroup": "sea",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "1.9K",
              "views": "22.7M"
            }
          ],
          "summary": "万圣节季驱动的僵尸妆容/场景布置/恐怖主题短视频内容标签。",
          "whyHot": "万圣节季节性驱动，恐怖妆容/场景类内容集中产出。",
          "origin": "用户万圣节妆容/布景记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/zombie",
            "search": "https://www.tiktok.com/search?q=zombie",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ren.d.lucky",
            "videoId": "7691902656524078356"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 44
        },
        {
          "tag": "#huntshowdown",
          "name": "Hunt: Showdown（猎杀对决游戏）",
          "regionGroup": "sea",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "2.9K",
              "views": "10.9M"
            }
          ],
          "summary": "Crytek开发的PVPVE猎杀生存射击游戏，哥特式19世纪场景与紧张对局氛围是其特色。",
          "whyHot": "游戏实况/精彩操作集锦类内容持续产出，核心玩家社群活跃。",
          "origin": "玩家实况/集锦剪辑内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/huntshowdown",
            "search": "https://www.tiktok.com/search?q=huntshowdown",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "set_as_known",
            "videoId": "7563968069958176021"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 45
        },
        {
          "tag": "#trickortreat",
          "name": "Trick or Treat（万圣节讨糖传统）",
          "regionGroup": "sea",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "3.4K",
              "views": "10.7M"
            }
          ],
          "summary": "万圣节经典\"不给糖就捣蛋\"讨糖活动相关的装扮/场景内容标签。",
          "whyHot": "万圣节季节性驱动，家庭/儿童向内容集中产出。",
          "origin": "用户万圣节活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/trickortreat",
            "search": "https://www.tiktok.com/search?q=trickortreat",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fox5_atlanta",
            "videoId": "7696574540687658270"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 46
        },
        {
          "tag": "#winterarc",
          "name": "Winter Arc（冬季自我提升挑战）",
          "regionGroup": "sea",
          "category": "生活方式/自我提升",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "2.1K",
              "views": "10.6M"
            }
          ],
          "summary": "年末冬季期间进行健身/学习/自律习惯养成的\"自我提升季\"挑战内容标签。",
          "whyHot": "年末自我提升主题周期性回潮，健身/习惯打卡类内容集中产出。",
          "origin": "用户自发自我提升打卡内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/winterarc",
            "search": "https://www.tiktok.com/search?q=winterarc",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "motivation.mind.simple",
            "videoId": "7686893639653428502"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 47
        },
        {
          "tag": "#autumn",
          "name": "Autumn（秋天）",
          "regionGroup": "sea",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "943",
              "views": "9.9M"
            }
          ],
          "summary": "秋季通用季节标签：秋景、穿搭、暖饮氛围内容。",
          "whyHot": "北半球入秋季节内容集中释放，GB 等市场秋季美学 UGC 聚集。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/autumn",
            "search": "https://www.tiktok.com/search?q=autumn",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "danielvalko",
            "videoId": "7652136274748312845"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 48
        },
        {
          "tag": "#thesecretlibrary",
          "name": "The Secret Library（菲律宾主题图书馆咖啡馆）",
          "regionGroup": "sea",
          "category": "生活方式/网红打卡地",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "3.4K",
              "views": "9.3M"
            }
          ],
          "summary": "菲律宾马尼拉地区的爱丽丝梦游仙境主题图书馆咖啡馆，复古书房+奇幻布景适合拍照打卡。",
          "whyHot": "沉浸式主题布景天然适合短视频探店/变装内容，带动用户到店打卡分享。",
          "origin": "网红博主探店打卡内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/thesecretlibrary",
            "search": "https://www.tiktok.com/search?q=thesecretlibrary",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "latteicedmatcha",
            "videoId": "7696598069462191368"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 49
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
              "views": "7.0B"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mz.rhia2.0",
            "videoId": "7694153860973219080"
          },
          "fusionSuggestion": {
            "commercial": "秋季暖色调（枫叶橙/南瓜橘）可为MCGG季节限定棋盘配色提供参考。",
            "video": "可参考'秋日氛围感'空镜+穿搭混剪格式。"
          },
          "rank": 1
        },
        {
          "tag": "#halloweencostume",
          "name": "Halloween Costume（万圣节服装）",
          "regionGroup": "sea",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "232.5K",
              "views": "3.0B"
            },
            {
              "code": "PH",
              "posts": "11.0K",
              "views": "150.7M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nataliireynoldss",
            "videoId": "7692957276587429150"
          },
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
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
              "posts": "248.1K",
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
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
          "tag": "#southparkedit",
          "name": "South Park 剪辑二创",
          "regionGroup": "global",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "110.2K",
              "views": "1.8B"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "princeleoww",
            "videoId": "7695675199081008414"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 5
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
              "code": "PH",
              "posts": "182.7K",
              "views": "1.2B"
            },
            {
              "code": "TH",
              "posts": "52.8K",
              "views": "540.4M"
            },
            {
              "code": "MY",
              "posts": "23.0K",
              "views": "471.1M"
            },
            {
              "code": "VN",
              "posts": "106.3K",
              "views": "350.6M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freedom.alias",
            "videoId": "7669320059776486687"
          },
          "fusionSuggestion": {
            "commercial": "涉及漫威第三方IP版权，不建议未经授权直接使用蜘蛛侠形象；可考虑与漫威谈官方授权联名（需版权方合作）。",
            "video": "官方号可发布『如果指挥官有蜘蛛侠战衣』的原创英雄主题概念视频，避免直接使用受版权保护的角色形象。"
          },
          "rank": 6
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
              "posts": "244.9K",
              "views": "1.3B"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "tiktokio.ringtone",
            "videoId": "7680510977300860161"
          },
          "fusionSuggestion": {
            "commercial": "'校园舞会'场景可作MCGG青春主题棋盘的视觉母题（注意用研红线：校园题材需谨慎评估受众偏好）。",
            "video": "可参考'提案惊喜瞬间'的反应式剪辑格式。"
          },
          "rank": 7
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
              "posts": "260.6K",
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "doubledoseduuo",
            "videoId": "7685075567535770910"
          },
          "fusionSuggestion": {
            "commercial": "南瓜地/秋收场景可直接作为MCGG万圣节棋盘皮肤的美术母题。",
            "video": "可参考'南瓜雕刻延时摄影'格式。"
          },
          "rank": 8
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
              "posts": "79.2K",
              "views": "955.8M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "_.twagn",
            "videoId": "7692356574257384725"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 9
        },
        {
          "tag": "#fallvibes",
          "name": "Fall Vibes（秋日氛围感）",
          "regionGroup": "global",
          "category": "生活方式/季节",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "270.7K",
              "views": "899.9M"
            }
          ],
          "summary": "北美秋季氛围感内容通用标签，9月起秋日穿搭、落叶风景、热饮、季节家居布置内容集中爆发（90天窗口5.65亿播放）。",
          "whyHot": "\"秋日氛围感美学\"是北美社交媒体9-10月的固定流量密码，季节切换（夏日户外→秋日室内温暖感）引发大规模创作潮，与#pumpkinseason共同构成秋季内容双引擎。",
          "origin": "创作者自发形成的季节性内容标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fallvibes",
            "search": "https://www.tiktok.com/search?q=fallvibes",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "moments7134",
            "videoId": "7692135039773019423"
          },
          "fusionSuggestion": {
            "commercial": "秋季限定配色/主题活动适合季节性运营排期。",
            "video": "适合做\"秋日温暖感\"主题氛围剪辑。"
          },
          "rank": 10
        },
        {
          "tag": "#christmas",
          "name": "Christmas（圣诞节主题内容）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "215.9K",
              "views": "833.2M"
            }
          ],
          "summary": "菲律宾TikTok上的圣诞节主题内容标签，菲律宾圣诞季传统上从9月即开始，装饰、颂歌、家庭团聚类内容提前升温。",
          "whyHot": "菲律宾以\"全球圣诞季最长的国家\"著称，9月起商场与家庭便开始圣诞装饰与颂歌，是每年规律性的季节性文化热梗。",
          "origin": "全民性节日文化传统，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/christmas",
            "search": "https://www.tiktok.com/search?q=christmas",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nyyxveiill",
            "videoId": "7648617836226694432"
          },
          "fusionSuggestion": {
            "commercial": "可考虑提前布局圣诞主题限定活动/皮肤，契合菲律宾超长圣诞季的营销窗口。",
            "video": "适合做圣诞主题的游戏内装饰/礼物系统预告。"
          },
          "rank": 11
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
              "views": "618.3M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
          },
          "rank": 12
        },
        {
          "tag": "#september",
          "name": "September（九月月份通用标签）",
          "regionGroup": "sea",
          "category": "生活方式/月份标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "316.2K",
              "views": "608.0M"
            },
            {
              "code": "ID",
              "posts": "145.9K",
              "views": "229.9M"
            },
            {
              "code": "PH",
              "posts": "57.5K",
              "views": "149.1M"
            },
            {
              "code": "MY",
              "posts": "25.5K",
              "views": "47.2M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sony",
            "videoId": "7688066557649407263"
          },
          "fusionSuggestion": {
            "commercial": "月度营销日历可借月份标签做规律性活动运营（每月1号\"新月新阵容\"）。",
            "video": "适合做\"九月新开始\"主题活动剪辑。"
          },
          "rank": 13
        },
        {
          "tag": "#halloween",
          "name": "Halloween（万圣节）",
          "regionGroup": "sea",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "33.0K",
              "views": "584.0M"
            },
            {
              "code": "TH",
              "posts": "25.2K",
              "views": "208.5M"
            }
          ],
          "summary": "万圣节主题内容标签：妆容、变装、装饰、派对与恐怖趣味创作。",
          "whyHot": "10 月进入万圣节预热期，变装/妆容/家居装饰内容集中发布，是欧美市场年度最大的季节创作节点之一。",
          "origin": "西方传统节日衍生创作标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloween",
            "search": "https://www.tiktok.com/search?q=halloween",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 14
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
              "posts": "77.9K",
              "views": "518.7M"
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
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bynatalija",
            "videoId": "7695788131643084064"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 15
        },
        {
          "tag": "#patrickjane",
          "name": "Patrick Jane（《超感神探》主角IP）",
          "regionGroup": "sea",
          "category": "影视剧集IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "22.8K",
              "views": "448.5M"
            },
            {
              "code": "VN",
              "posts": "7.0K",
              "views": "294.4M"
            }
          ],
          "summary": "罪案剧《超感神探》(The Mentalist) 主角 Patrick Jane：心理师式观察与读心推理人设。",
          "whyHot": "经典罪案剧 clip 二创与‘观察术/读心’梗模板常青，角色名标签稳定积累。",
          "origin": "剧集官方 IP。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/patrickjane",
            "search": "https://www.tiktok.com/search?q=patrickjane",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "tekno_edit_",
            "videoId": "7656541594300222727"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 16
        },
        {
          "tag": "#pumpkinspice",
          "name": "Pumpkin Spice（南瓜香料季）",
          "regionGroup": "global",
          "category": "生活方式/秋季美食",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "59.4K",
              "views": "439.4M"
            }
          ],
          "summary": "秋季限定南瓜香料风味饮品/甜点的美食分享内容标签，是北美秋季文化标志性符号。",
          "whyHot": "秋季季节性驱动，美食探店/自制饮品内容集中产出。",
          "origin": "用户秋季美食分享内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/pumpkinspice",
            "search": "https://www.tiktok.com/search?q=pumpkinspice",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hamiboom.world",
            "videoId": "7696949168191032597"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 17
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
              "posts": "75.6K",
              "views": "421.9M"
            }
          ],
          "summary": "聚合各类喜剧剧集、喜剧小品片段的通用标签，本周在艾美奖多部喜剧作品获奖（《寡妇湾》《绝望写手》）后热度上升（1.13亿周播放）。",
          "whyHot": "喜剧片段是TikTok最稳定的流量品类之一；颁奖季让优质喜剧内容集中曝光，获奖作品名场面剪辑大量涌现。",
          "origin": "创作者自发使用的通用内容品类标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/comedyseries",
            "search": "https://www.tiktok.com/search?q=comedyseries",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bybywo88",
            "videoId": "7695226098837212446"
          },
          "fusionSuggestion": {
            "commercial": "喜剧片段形态适合品牌轻量化内容营销（低门槛高传播）。",
            "video": "适合做MCGG英雄喜剧小剧场系列。"
          },
          "rank": 18
        },
        {
          "tag": "#august",
          "name": "August（八月月份通用标签）",
          "regionGroup": "sea",
          "category": "生活方式/月份标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "186.1K",
              "views": "414.8M"
            },
            {
              "code": "PH",
              "posts": "62.7K",
              "views": "158.2M"
            },
            {
              "code": "ID",
              "posts": "47.3K",
              "views": "75.6M"
            },
            {
              "code": "MY",
              "posts": "17.7K",
              "views": "35.5M"
            }
          ],
          "summary": "八月月份通用标签，90天窗口覆盖US/ID/PH/MY四市场的月度打卡内容高峰（夏末总结、开学准备、月度目标，4.18亿播放）。",
          "whyHot": "月份标签是TikTok\"月度打卡文化\"的固定流量入口，八月叠加暑假收尾与开学季前置话题。",
          "origin": "创作者自发使用的通用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/august",
            "search": "https://www.tiktok.com/search?q=august",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ricefy_",
            "videoId": "7674359355671579917"
          },
          "fusionSuggestion": {
            "commercial": "同september：月度营销日历运营。",
            "video": "适合做月度总结式活动回顾剪辑。"
          },
          "rank": 19
        },
        {
          "tag": "#dandadan",
          "name": "Dandadan（《胆大党》）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "37.0K",
              "views": "404.5M"
            }
          ],
          "summary": "2026年人气新番，灵异/超能力元素结合搞笑恋爱喜剧的热门漫画改编动画。",
          "whyHot": "当季新番热度正盛，名场面/角色剪辑密集产出。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dandadan",
            "search": "https://www.tiktok.com/search?q=dandadan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "cinnamon.dew",
            "videoId": "7653133888180587790"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 20
        },
        {
          "tag": "#sungjinwoo",
          "name": "Sung Jin-Woo（《我独自升级》成镜）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "352.5K",
              "views": "394.4M"
            },
            {
              "code": "TH",
              "posts": "580.0K",
              "views": "180.2M"
            },
            {
              "code": "PH",
              "posts": "267.1K",
              "views": "150.1M"
            },
            {
              "code": "MY",
              "posts": "172.1K",
              "views": "79.9M"
            }
          ],
          "summary": "韩国网漫改编动画《我独自升级》主角成镜，从最弱猎人逆转成长为最强的爽文式剧情广受欢迎。",
          "whyHot": "近年人气新番动漫，战斗场面/成长剧情剪辑持续产出。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sungjinwoo",
            "search": "https://www.tiktok.com/search?q=sungjinwoo",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "whatifuniversed2026",
            "videoId": "7679114818833435925"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 21
        },
        {
          "tag": "#reddington",
          "name": "Reddington（《谍海黑名单》雷丁顿）",
          "regionGroup": "global",
          "category": "影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "20.2K",
              "views": "388.5M"
            }
          ],
          "summary": "美剧《谍海黑名单》神秘魅力反派角色雷蒙德·雷丁顿，机智台词与复杂身世是粉丝剪辑热点。",
          "whyHot": "剧集长青人气角色，经典台词/名场面剪辑持续产出。",
          "origin": "官方剧集片段+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/reddington",
            "search": "https://www.tiktok.com/search?q=reddington",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "7w.aep",
            "videoId": "7659879304276364566"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 22
        },
        {
          "tag": "#bermonths",
          "name": "Ber Months（菲律宾\"-ber月\"圣诞季开跑梗）",
          "regionGroup": "sea",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "99.8K",
              "views": "386.7M"
            }
          ],
          "summary": "菲律宾人从9月（英文月份名以-ber结尾的第一个月）就开始庆祝圣诞节的独特习俗，每年9月一到就有大量\"又到Ber Months了\"的调侃视频。",
          "whyHot": "菲律宾是全球圣诞季最长的地区，\"-ber月一到就是圣诞季开始\"是菲律宾人尽皆知的文化梗，每年9月初都会形成规律性话题高峰。",
          "origin": "菲律宾民间长期形成的文化习惯，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/bermonths",
            "search": "https://www.tiktok.com/search?q=bermonths",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "zhencarzon",
            "videoId": "7680226152237075720"
          },
          "fusionSuggestion": {
            "commercial": "可考虑\"超长待机圣诞季\"限定活动，契合菲律宾用户提前进入节日消费心态。",
            "video": "适合做\"Ber Months提前过圣诞\"主题短视频。"
          },
          "rank": 23
        },
        {
          "tag": "#tanjiro",
          "name": "Tanjiro（《鬼灭之刃》灶门炭治郎）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "352.4K",
              "views": "384.5M"
            },
            {
              "code": "TH",
              "posts": "582.4K",
              "views": "209.2M"
            },
            {
              "code": "PH",
              "posts": "267.2K",
              "views": "150.4M"
            },
            {
              "code": "MY",
              "posts": "172.8K",
              "views": "89.6M"
            }
          ],
          "summary": "《鬼灭之刃》主角灶门炭治郎角色标签。",
          "whyHot": "franchise 剧场版/新季讨论与角色剪辑二创常青，TH 等市场动漫二创浓度高。",
          "origin": "动漫官方 IP。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/tanjiro",
            "search": "https://www.tiktok.com/search?q=tanjiro",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "noname_999991",
            "videoId": "7688337164630756615"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 24
        },
        {
          "tag": "#sanji",
          "name": "Sanji（《海贼王》香吉士）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "352.1K",
              "views": "380.5M"
            },
            {
              "code": "TH",
              "posts": "582.0K",
              "views": "187.8M"
            },
            {
              "code": "PH",
              "posts": "266.1K",
              "views": "124.8M"
            },
            {
              "code": "MY",
              "posts": "172.5K",
              "views": "76.8M"
            }
          ],
          "summary": "《海贼王》草帽一伙厨师香吉士，招牌\"黑足\"系腿技与绅士性格形象深受粉丝喜爱。",
          "whyHot": "海贼王长青IP人气角色，剧情推进期角色相关剪辑集中产出。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sanji",
            "search": "https://www.tiktok.com/search?q=sanji",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "paramecian",
            "videoId": "7629992553349139719"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 25
        },
        {
          "tag": "#dragonball",
          "name": "Dragon Ball（《龙珠超：比鲁斯》新番）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "352.0K",
              "views": "378.7M"
            },
            {
              "code": "PH",
              "posts": "276.0K",
              "views": "316.0M"
            },
            {
              "code": "TH",
              "posts": "583.7K",
              "views": "242.1M"
            },
            {
              "code": "MY",
              "posts": "175.3K",
              "views": "121.7M"
            },
            {
              "code": "VN",
              "posts": "102.2K",
              "views": "96.9M"
            }
          ],
          "summary": "鸟山明《龙珠》系列标签；新动画《龙珠超：比鲁斯》2026年10月8日在NYCC举行世界首映先行上映，10月11日在富士电视台开播，Prime Video/U-NEXT最速配信。",
          "whyHot": "新番世界首映（NYCC 10月8日）+日本开播（10月11日）双节点带动经典IP讨论回潮，英日市场同步升温，机制清楚。",
          "origin": "东映动画官方新番宣发。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dragonball",
            "search": "https://www.tiktok.com/search?q=dragonball",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "rickgrosman.28",
            "videoId": "6482752163029191950"
          },
          "fusionSuggestion": {
            "commercial": "'战斗力数值+变身形态'体系与MCGG棋子升星视觉逻辑相通，可参考其能量色阶设计。",
            "video": "可参考新番'第一集无剧透安利'格式。"
          },
          "rank": 26
        },
        {
          "tag": "#moana",
          "name": "Moana（《海洋奇缘》）",
          "regionGroup": "sea",
          "category": "影视IP/动画电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "30.5K",
              "views": "372.4M"
            },
            {
              "code": "PH",
              "posts": "11.4K",
              "views": "206.6M"
            }
          ],
          "summary": "迪士尼动画电影，波利尼西亚公主莫娜追寻祖先航海传说、拯救家乡岛屿的冒险故事。",
          "whyHot": "经典迪士尼IP，歌曲remix与剪辑向内容随续作/周边消息持续产出。",
          "origin": "官方电影片段+粉丝剪辑/翻唱二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/moana",
            "search": "https://www.tiktok.com/search?q=moana",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "rezon_ae",
            "videoId": "7639465870045007126"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 27
        },
        {
          "tag": "#gon",
          "name": "Gon Freecss（《全职猎人》小杰）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "351.2K",
              "views": "366.1M"
            },
            {
              "code": "TH",
              "posts": "581.3K",
              "views": "180.7M"
            },
            {
              "code": "VN",
              "posts": "105.2K",
              "views": "116.8M"
            },
            {
              "code": "PH",
              "posts": "265.4K",
              "views": "106.4M"
            }
          ],
          "summary": "《全职猎人》主角小杰·富力士，天然系猎人与奇犽的友情线是系列经典名场面来源。",
          "whyHot": "长青人气动漫角色，与killua话题常同步上榜，粉丝持续产出剪辑二创。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/gon",
            "search": "https://www.tiktok.com/search?q=gon",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nenebu_2234",
            "videoId": "7696145311454006529"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 28
        },
        {
          "tag": "#tokyorevengers",
          "name": "Tokyo Revengers（东京复仇者）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "350.7K",
              "views": "354.7M"
            },
            {
              "code": "TH",
              "posts": "587.7K",
              "views": "244.3M"
            },
            {
              "code": "PH",
              "posts": "284.6K",
              "views": "242.0M"
            },
            {
              "code": "US",
              "posts": "429.5K",
              "views": "151.8M"
            },
            {
              "code": "MY",
              "posts": "177.8K",
              "views": "128.9M"
            },
            {
              "code": "VN",
              "posts": "102.3K",
              "views": "103.9M"
            }
          ],
          "summary": "和久井健漫画改编的穿越/帮派题材动漫，佔天愛人、潘东会等角色与剧情名场面受粉丝喜爱。",
          "whyHot": "人气动漫IP，角色剪辑/名场面二创在东南亚粉丝圈持续活跃。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/tokyorevengers",
            "search": "https://www.tiktok.com/search?q=tokyorevengers",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sevensenpai_",
            "videoId": "7697204351898504481"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 29
        },
        {
          "tag": "#anya",
          "name": "Anya Forger（《间谍过家家》安妮亚）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "350.6K",
              "views": "353.6M"
            },
            {
              "code": "TH",
              "posts": "581.1K",
              "views": "169.7M"
            },
            {
              "code": "US",
              "posts": "429.2K",
              "views": "165.7M"
            },
            {
              "code": "VN",
              "posts": "103.8K",
              "views": "109.3M"
            },
            {
              "code": "PH",
              "posts": "264.7K",
              "views": "91.6M"
            },
            {
              "code": "MY",
              "posts": "171.9K",
              "views": "72.0M"
            }
          ],
          "summary": "《间谍过家家》读心能力小女孩安妮亚，呆萌表情包与\"哇酷哇酷\"口癖是全网热门表情素材。",
          "whyHot": "表情包式萌系角色天然适合二创传播，持续产出表情包/仿妆内容。",
          "origin": "官方动画片段+粉丝表情包/仿妆二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/anya",
            "search": "https://www.tiktok.com/search?q=anya",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "spyxvici",
            "videoId": "7498399335046991126"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 30
        },
        {
          "tag": "#kageyama",
          "name": "Kageyama（《排球少年》影山飞雄）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "350.2K",
              "views": "346.4M"
            },
            {
              "code": "US",
              "posts": "433.5K",
              "views": "192.2M"
            },
            {
              "code": "TH",
              "posts": "582.0K",
              "views": "177.7M"
            },
            {
              "code": "PH",
              "posts": "266.7K",
              "views": "108.2M"
            },
            {
              "code": "VN",
              "posts": "103.3K",
              "views": "106.4M"
            },
            {
              "code": "MY",
              "posts": "172.3K",
              "views": "70.0M"
            }
          ],
          "summary": "《排球少年》天才二传手影山飞雄，与日向翔阳的\"快攻\"配合是系列标志性名场面。",
          "whyHot": "排球少年长青人气IP，热血运动番剪辑持续有稳定受众。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/kageyama",
            "search": "https://www.tiktok.com/search?q=kageyama",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "funoxz",
            "videoId": "7659483025285090567"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 31
        },
        {
          "tag": "#arknights",
          "name": "Arknights（明日方舟）",
          "regionGroup": "sea",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "348.1K",
              "views": "338.7M"
            },
            {
              "code": "TH",
              "posts": "562.3K",
              "views": "175.3M"
            },
            {
              "code": "US",
              "posts": "426.5K",
              "views": "163.6M"
            }
          ],
          "summary": "鹰角网络出品塔防手游，末日废土世界观与角色塑造深受玩家喜爱，东南亚亦有稳定玩家群体。",
          "whyHot": "活跃手游IP，角色剪辑/剧情向内容随版本更新持续产出。",
          "origin": "玩家剪辑/官方宣传内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/arknights",
            "search": "https://www.tiktok.com/search?q=arknights",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "arknights_en",
            "videoId": "7696398472907328799"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 32
        },
        {
          "tag": "#fategrandorder",
          "name": "Fate/Grand Order（命运/冠位指定）",
          "regionGroup": "sea",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "344.7K",
              "views": "322.9M"
            },
            {
              "code": "TH",
              "posts": "561.8K",
              "views": "169.7M"
            },
            {
              "code": "US",
              "posts": "424.7K",
              "views": "166.0M"
            },
            {
              "code": "VN",
              "posts": "103.0K",
              "views": "103.0M"
            }
          ],
          "summary": "TYPE-MOON旗下长青手游IP，收集历史/传说英灵进行战斗的策略卡牌玩法。",
          "whyHot": "老牌人气手游，角色剪辑/活动剧情内容随版本更新持续产出。",
          "origin": "玩家剪辑/官方宣传内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fategrandorder",
            "search": "https://www.tiktok.com/search?q=fategrandorder",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fgoproject",
            "videoId": "7697138246035442965"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 33
        },
        {
          "tag": "#nikkegoddessofvictory",
          "name": "GODDESS OF VICTORY: NIKKE（手游《胜利女神：妮姬》）",
          "regionGroup": "sea",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "345.0K",
              "views": "319.3M"
            },
            {
              "code": "TH",
              "posts": "566.6K",
              "views": "171.4M"
            },
            {
              "code": "US",
              "posts": "428.1K",
              "views": "154.0M"
            },
            {
              "code": "VN",
              "posts": "102.4K",
              "views": "99.8M"
            }
          ],
          "summary": "Shift Up 出品的枪械少女题材手游 NIKKE 全名标签。",
          "whyHot": "版本更新与角色 PV 二创在多市场同步带动，游戏美术风格利于剪辑传播。",
          "origin": "游戏官方 IP。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/nikkegoddessofvictory",
            "search": "https://www.tiktok.com/search?q=nikkegoddessofvictory",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kainz_vt",
            "videoId": "7661992364281744643"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 34
        },
        {
          "tag": "#hocoproposal",
          "name": "HOCO Proposal（返校节邀约\"求爱\"文化）",
          "regionGroup": "global",
          "category": "生活方式/校园文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "20.2K",
              "views": "284.8M"
            }
          ],
          "summary": "美国高校返校节前流行的创意邀约\"求舞伴\"文化（Promposal同类），常伴有精心策划的惊喜告白。",
          "whyHot": "返校季固定校园传统，创意邀约过程类内容集中产出。",
          "origin": "学生自发校园邀约记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hocoproposal",
            "search": "https://www.tiktok.com/search?q=hocoproposal",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "emm.loll1",
            "videoId": "7689939478479244558"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 35
        },
        {
          "tag": "#patientzero",
          "name": "Patient Zero（Taylor Swift 新单曲话题）",
          "regionGroup": "global",
          "category": "音乐/新歌",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "64.5K",
              "views": "272.9M"
            }
          ],
          "summary": "Taylor Swift 新单曲《Patient Zero》话题标签。",
          "whyHot": "新歌发布带动歌词梗、听歌反应与舞蹈/剪辑二创；单曲信息经媒体报导核实。",
          "origin": "歌手官方新作话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/patientzero",
            "search": "https://www.tiktok.com/search?q=patientzero",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mysteriousjulia_",
            "videoId": "7690719771637075213"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 36
        },
        {
          "tag": "#fallseason",
          "name": "Fall Season（秋季季节内容）",
          "regionGroup": "global",
          "category": "生活方式/季节",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "80.9K",
              "views": "258.3M"
            }
          ],
          "summary": "秋季到来相关的穿搭/氛围/活动分享内容标签，与autumn/fall系列同属季节性泛内容。",
          "whyHot": "季节性驱动，氛围感vlog类内容集中产出。",
          "origin": "用户自发秋季生活记录分享。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/fallseason",
            "search": "https://www.tiktok.com/search?q=fallseason",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ariffhakim493",
            "videoId": "7695620718792330503"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 37
        },
        {
          "tag": "#trickortreat",
          "name": "Trick or Treat（万圣节讨糖传统）",
          "regionGroup": "global",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "63.2K",
              "views": "250.2M"
            }
          ],
          "summary": "万圣节经典\"不给糖就捣蛋\"讨糖活动相关的装扮/场景内容标签。",
          "whyHot": "万圣节季节性驱动，家庭/儿童向内容集中产出。",
          "origin": "用户万圣节活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/trickortreat",
            "search": "https://www.tiktok.com/search?q=trickortreat",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fox5_atlanta",
            "videoId": "7696574540687658270"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 38
        },
        {
          "tag": "#hispanicheritagemonth",
          "name": "Hispanic Heritage Month（美国拉美传统文化月）",
          "regionGroup": "global",
          "category": "文化庆典",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "49.3K",
              "views": "242.0M"
            }
          ],
          "summary": "美国每年9月15日至10月15日的官方纪念月，庆祝拉美裔美国人的历史与文化贡献。",
          "whyHot": "文化月期间品牌/个人发布拉美文化相关内容形成固定周期性话题，机制清楚（非政治议题，是文化庆典）。",
          "origin": "美国官方文化纪念月+社区自发内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hispanicheritagemonth",
            "search": "https://www.tiktok.com/search?q=hispanicheritagemonth",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "juanabarrios94",
            "videoId": "7695953592045325598"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 39
        },
        {
          "tag": "#halloweenthegame",
          "name": "Halloween the Game（万圣节派对游戏）",
          "regionGroup": "global",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "42.3K",
              "views": "234.2M"
            }
          ],
          "summary": "万圣节派对现场的互动游戏环节分享内容标签。",
          "whyHot": "万圣节季节性驱动，派对游戏环节记录内容集中产出。",
          "origin": "用户万圣节派对游戏记录分享。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweenthegame",
            "search": "https://www.tiktok.com/search?q=halloweenthegame",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "barbiebitez",
            "videoId": "7681937303111060766"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 40
        },
        {
          "tag": "#halloweenparty",
          "name": "Halloween Party（万圣节派对）",
          "regionGroup": "global",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "45.2K",
              "views": "227.9M"
            }
          ],
          "summary": "万圣节主题派对筹备/现场记录内容标签，涵盖装扮、布置、游戏环节。",
          "whyHot": "万圣节季节性驱动，派对筹备/现场记录类内容集中产出。",
          "origin": "用户万圣节派对记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweenparty",
            "search": "https://www.tiktok.com/search?q=halloweenparty",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hotshotboys",
            "videoId": "7675985991961791774"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 41
        },
        {
          "tag": "#toystory5",
          "name": "Toy Story 5（玩具总动员5）",
          "regionGroup": "global",
          "category": "影视IP/动画电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "15.9K",
              "views": "227.3M"
            }
          ],
          "summary": "皮克斯《玩具总动员》系列第五部作品相关内容。",
          "whyHot": "电影IP新作消息/预告带动话题，机制清楚。",
          "origin": "迪士尼皮克斯官方IP。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/toystory5",
            "search": "https://www.tiktok.com/search?q=toystory5",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "moviecentral196",
            "videoId": "7696756105489288479"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 42
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
              "posts": "65.9K",
              "views": "215.3M"
            }
          ],
          "summary": "越南语冬季/转凉季节内容通用标签。",
          "whyHot": "越北进入转凉季节，季节情绪与穿搭内容集中发布。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/muadong",
            "search": "https://www.tiktok.com/search?q=muadong",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hieudeptrai_211",
            "videoId": "7695306672453045522"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 43
        },
        {
          "tag": "#bluearchive",
          "name": "Blue Archive（蔚蓝档案）",
          "regionGroup": "sea",
          "category": "游戏IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "574.1K",
              "views": "209.0M"
            },
            {
              "code": "US",
              "posts": "428.1K",
              "views": "178.4M"
            },
            {
              "code": "MY",
              "posts": "174.6K",
              "views": "82.6M"
            }
          ],
          "summary": "日本School RPG手游，校园题材+角色养成玩法在亚洲年轻玩家群体中人气很高。",
          "whyHot": "活跃手游IP，角色剪辑/同人内容随版本更新持续产出。",
          "origin": "玩家剪辑/同人二创内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/bluearchive",
            "search": "https://www.tiktok.com/search?q=bluearchive",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "zasuki_sa",
            "videoId": "7695721927037570322"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 44
        },
        {
          "tag": "#narutouzumaki",
          "name": "Naruto Uzumaki（漩涡鸣人）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "581.2K",
              "views": "195.0M"
            },
            {
              "code": "PH",
              "posts": "270.5K",
              "views": "164.8M"
            },
            {
              "code": "MY",
              "posts": "172.8K",
              "views": "108.6M"
            }
          ],
          "summary": "《火影忍者》主角漩涡鸣人，经典忍者成长故事与名场面持续被粉丝剪辑传播。",
          "whyHot": "全球长青动漫IP，怀旧向+名场面剪辑持续有稳定热度。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/narutouzumaki",
            "search": "https://www.tiktok.com/search?q=narutouzumaki",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "pcrvy4hgq5",
            "videoId": "7565958033805692173"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 45
        },
        {
          "tag": "#winterarc",
          "name": "Winter Arc（冬季自我提升挑战）",
          "regionGroup": "global",
          "category": "生活方式/自我提升",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "64.0K",
              "views": "188.1M"
            }
          ],
          "summary": "年末冬季期间进行健身/学习/自律习惯养成的\"自我提升季\"挑战内容标签。",
          "whyHot": "年末自我提升主题周期性回潮，健身/习惯打卡类内容集中产出。",
          "origin": "用户自发自我提升打卡内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/winterarc",
            "search": "https://www.tiktok.com/search?q=winterarc",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "motivation.mind.simple",
            "videoId": "7686893639653428502"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 46
        },
        {
          "tag": "#killua",
          "name": "Killua（《全职猎人》奇犽）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "582.2K",
              "views": "183.0M"
            },
            {
              "code": "PH",
              "posts": "269.1K",
              "views": "113.9M"
            },
            {
              "code": "MY",
              "posts": "172.3K",
              "views": "70.3M"
            }
          ],
          "summary": "《全职猎人》（Hunter x Hunter）人气角色奇犽·揣世，电光系念能力与冷酷外表下重情义的性格受粉丝喜爱。",
          "whyHot": "长青人气动漫角色，粉丝持续产出角色剪辑/手书/台词二创。",
          "origin": "官方动画片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/killua",
            "search": "https://www.tiktok.com/search?q=killua",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kepocks",
            "videoId": "7592265444292037944"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 47
        },
        {
          "tag": "#midautumnfestival",
          "name": "中秋节 / Tết Trung Thu（东南亚中秋节庆）",
          "regionGroup": "sea",
          "category": "文化节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "52.1K",
              "views": "155.6M"
            },
            {
              "code": "MY",
              "posts": "4.2K",
              "views": "8.2M"
            }
          ],
          "summary": "东亚/东南亚华人及越南社群共同庆祝的传统中秋佳节，赏月、月饼、灯笼游行是核心活动。",
          "whyHot": "节日季节性驱动，家庭团聚/传统活动记录类内容集中产出，非宗教非政治的文化民俗庆典。",
          "origin": "用户自发节庆活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/midautumnfestival",
            "search": "https://www.tiktok.com/search?q=midautumnfestival",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "gardensbythebay",
            "videoId": "7009580492840242434"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 48
        },
        {
          "tag": "#fallactivities",
          "name": "Fall Activities（秋季活动清单）",
          "regionGroup": "global",
          "category": "生活方式/季节",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "21.4K",
              "views": "152.0M"
            }
          ],
          "summary": "秋季限定活动清单分享内容标签，涵盖赏枫、果园采摘、南瓜田等季节性户外活动。",
          "whyHot": "季节性驱动，活动清单/vlog类内容集中产出。",
          "origin": "用户自发秋季活动记录分享。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/fallactivities",
            "search": "https://www.tiktok.com/search?q=fallactivities",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kate.ontario",
            "videoId": "7678368941214813461"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 49
        },
        {
          "tag": "#octubre",
          "name": "Octubre（西语十月）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "32.5K",
              "views": "145.9M"
            }
          ],
          "summary": "西语‘十月’通用月份标签，拉美裔创作者季节内容聚集。",
          "whyHot": "十月季节内容+西语社区月度 UGC 惯例聚集。",
          "origin": "创作者自发通用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/octubre",
            "search": "https://www.tiktok.com/search?q=octubre",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "yenddimusic",
            "videoId": "7695886052241771789"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 50
        },
        {
          "tag": "#forgottenisland",
          "name": "Forgotten Island（梦工厂动画《忘却之岛》）",
          "regionGroup": "sea",
          "category": "动画电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "7.7K",
              "views": "138.4M"
            }
          ],
          "summary": "梦工厂原创动画，菲律宾神话‘忘却之岛’冒险题材，2026-09-25 美国上映。",
          "whyHot": "上映窗口期 PH 市场因菲律宾文化元素与女性友谊主题爆发本地化二创与观影打卡。",
          "origin": "片方官方电影话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/forgottenisland",
            "search": "https://www.tiktok.com/search?q=forgottenisland",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fandango",
            "videoId": "7685812894482713886"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 51
        },
        {
          "tag": "#octobermood",
          "name": "October Mood（十月情绪）",
          "regionGroup": "global",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "87.0K",
              "views": "127.8M"
            }
          ],
          "summary": "十月情绪/氛围标签：秋日穿搭、暖饮、阴天安慰系内容。",
          "whyHot": "季节情绪类内容在十月集中发布，氛围感模板带动跟拍。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/octobermood",
            "search": "https://www.tiktok.com/search?q=octobermood",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sunkissblonde",
            "videoId": "7695954024281001229"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 52
        },
        {
          "tag": "#october",
          "name": "October（十月通用月份标签）",
          "regionGroup": "sea",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "34.6K",
              "views": "110.6M"
            },
            {
              "code": "ID",
              "posts": "22.1K",
              "views": "64.3M"
            },
            {
              "code": "MY",
              "posts": "9.7K",
              "views": "24.5M"
            }
          ],
          "summary": "十月通用内容标签，聚合换季穿搭、月度总结、秋景等季节性生活内容。",
          "whyHot": "北半球入秋叠加万圣节预热，十月是季节内容的集中释放期，通用月份标签按惯例汇聚全月 UGC。",
          "origin": "创作者自发通用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/october",
            "search": "https://www.tiktok.com/search?q=october",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "themindaa",
            "videoId": "7691451275795352864"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 53
        },
        {
          "tag": "#80s",
          "name": "80s（八十年代怀旧剪辑）",
          "regionGroup": "sea",
          "category": "怀旧/剪辑",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "40.2K",
              "views": "78.5M"
            }
          ],
          "summary": "1980 年代影视/音乐/美学怀旧剪辑通用标签。",
          "whyHot": "复古美学剪辑常青题材，老片素材+滤镜模板参与门槛低，跨市场通用。",
          "origin": "创作者自发怀旧标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/80s",
            "search": "https://www.tiktok.com/search?q=80s",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nostalgicvibes888",
            "videoId": "7676428886460173585"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 54
        },
        {
          "tag": "#hocoweek",
          "name": "HOCO Week（返校节主题周）",
          "regionGroup": "global",
          "category": "生活方式/校园文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "14.0K",
              "views": "59.0M"
            }
          ],
          "summary": "美国高校秋季返校节（Homecoming）前一周的主题日活动，与Spirit Week同属校园传统。",
          "whyHot": "返校季固定校园传统，每日主题打卡内容集中产出。",
          "origin": "学生自发校园活动记录分享。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hocoweek",
            "search": "https://www.tiktok.com/search?q=hocoweek",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "grwmia.o",
            "videoId": "7697049743196802317"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 55
        },
        {
          "tag": "#autumn",
          "name": "Autumn（秋天）",
          "regionGroup": "sea",
          "category": "季节/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "12.3K",
              "views": "49.8M"
            }
          ],
          "summary": "秋季通用季节标签：秋景、穿搭、暖饮氛围内容。",
          "whyHot": "北半球入秋季节内容集中释放，GB 等市场秋季美学 UGC 聚集。",
          "origin": "创作者自发季节标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/autumn",
            "search": "https://www.tiktok.com/search?q=autumn",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-16 抖音热搜快照（top49）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "danielvalko",
            "videoId": "7652136274748312845"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 56
        }
      ]
    }
  },
  "douyinRef": [
    {
      "rank": 1,
      "keyword": "英雄联盟S16世界赛开赛",
      "hotValue": 11650725,
      "url": "https://www.douyin.com/search/%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FS16%E4%B8%96%E7%95%8C%E8%B5%9B%E5%BC%80%E8%B5%9B"
    },
    {
      "rank": 2,
      "keyword": "古早感美式复古秋冬穿搭",
      "hotValue": 10413398,
      "url": "https://www.douyin.com/search/%E5%8F%A4%E6%97%A9%E6%84%9F%E7%BE%8E%E5%BC%8F%E5%A4%8D%E5%8F%A4%E7%A7%8B%E5%86%AC%E7%A9%BF%E6%90%AD"
    },
    {
      "rank": 3,
      "keyword": "中国方案赋能全球算力",
      "hotValue": 10203951,
      "url": "https://www.douyin.com/search/%E4%B8%AD%E5%9B%BD%E6%96%B9%E6%A1%88%E8%B5%8B%E8%83%BD%E5%85%A8%E7%90%83%E7%AE%97%E5%8A%9B"
    },
    {
      "rank": 4,
      "keyword": "天水幼儿血铅案一审宣判",
      "hotValue": 9203390,
      "url": "https://www.douyin.com/search/%E5%A4%A9%E6%B0%B4%E5%B9%BC%E5%84%BF%E8%A1%80%E9%93%85%E6%A1%88%E4%B8%80%E5%AE%A1%E5%AE%A3%E5%88%A4"
    },
    {
      "rank": 5,
      "keyword": "淡人早秋穿搭",
      "hotValue": 8706649,
      "url": "https://www.douyin.com/search/%E6%B7%A1%E4%BA%BA%E6%97%A9%E7%A7%8B%E7%A9%BF%E6%90%AD"
    },
    {
      "rank": 6,
      "keyword": "一块会飞上天的滑板简直太酷了",
      "hotValue": 8682942,
      "url": "https://www.douyin.com/search/%E4%B8%80%E5%9D%97%E4%BC%9A%E9%A3%9E%E4%B8%8A%E5%A4%A9%E7%9A%84%E6%BB%91%E6%9D%BF%E7%AE%80%E7%9B%B4%E5%A4%AA%E9%85%B7%E4%BA%86"
    },
    {
      "rank": 7,
      "keyword": "解放军南北六海域同时集训",
      "hotValue": 7737001,
      "url": "https://www.douyin.com/search/%E8%A7%A3%E6%94%BE%E5%86%9B%E5%8D%97%E5%8C%97%E5%85%AD%E6%B5%B7%E5%9F%9F%E5%90%8C%E6%97%B6%E9%9B%86%E8%AE%AD"
    },
    {
      "rank": 8,
      "keyword": "国防部回应菲方多次挑衅行径",
      "hotValue": 7726593,
      "url": "https://www.douyin.com/search/%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E8%8F%B2%E6%96%B9%E5%A4%9A%E6%AC%A1%E6%8C%91%E8%A1%85%E8%A1%8C%E5%BE%84"
    },
    {
      "rank": 9,
      "keyword": "胡塞袭击利雅得机场致17死333伤",
      "hotValue": 7706128,
      "url": "https://www.douyin.com/search/%E8%83%A1%E5%A1%9E%E8%A2%AD%E5%87%BB%E5%88%A9%E9%9B%85%E5%BE%97%E6%9C%BA%E5%9C%BA%E8%87%B417%E6%AD%BB333%E4%BC%A4"
    },
    {
      "rank": 10,
      "keyword": "特斯拉发布第二代Roadster跑车",
      "hotValue": 7703389,
      "url": "https://www.douyin.com/search/%E7%89%B9%E6%96%AF%E6%8B%89%E5%8F%91%E5%B8%83%E7%AC%AC%E4%BA%8C%E4%BB%A3Roadster%E8%B7%91%E8%BD%A6"
    },
    {
      "rank": 11,
      "keyword": "如果人生总是后知后觉",
      "hotValue": 7697498,
      "url": "https://www.douyin.com/search/%E5%A6%82%E6%9E%9C%E4%BA%BA%E7%94%9F%E6%80%BB%E6%98%AF%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89"
    },
    {
      "rank": 12,
      "keyword": "网传赴泰游客遭谋杀系谣言",
      "hotValue": 7693036,
      "url": "https://www.douyin.com/search/%E7%BD%91%E4%BC%A0%E8%B5%B4%E6%B3%B0%E6%B8%B8%E5%AE%A2%E9%81%AD%E8%B0%8B%E6%9D%80%E7%B3%BB%E8%B0%A3%E8%A8%80"
    },
    {
      "rank": 13,
      "keyword": "这一步闪进景区宣传片了",
      "hotValue": 7691397,
      "url": "https://www.douyin.com/search/%E8%BF%99%E4%B8%80%E6%AD%A5%E9%97%AA%E8%BF%9B%E6%99%AF%E5%8C%BA%E5%AE%A3%E4%BC%A0%E7%89%87%E4%BA%86"
    },
    {
      "rank": 14,
      "keyword": "美人余李一桐扇渣男提离婚",
      "hotValue": 7689178,
      "url": "https://www.douyin.com/search/%E7%BE%8E%E4%BA%BA%E4%BD%99%E6%9D%8E%E4%B8%80%E6%A1%90%E6%89%87%E6%B8%A3%E7%94%B7%E6%8F%90%E7%A6%BB%E5%A9%9A"
    },
    {
      "rank": 15,
      "keyword": "嫁金钗开播",
      "hotValue": 7688709,
      "url": "https://www.douyin.com/search/%E5%AB%81%E9%87%91%E9%92%97%E5%BC%80%E6%92%AD"
    },
    {
      "rank": 16,
      "keyword": "玉簟秋直播全员笑到捂腹",
      "hotValue": 7684725,
      "url": "https://www.douyin.com/search/%E7%8E%89%E7%B0%9F%E7%A7%8B%E7%9B%B4%E6%92%AD%E5%85%A8%E5%91%98%E7%AC%91%E5%88%B0%E6%8D%82%E8%85%B9"
    },
    {
      "rank": 17,
      "keyword": "星月也开始打复活赛了",
      "hotValue": 7682811,
      "url": "https://www.douyin.com/search/%E6%98%9F%E6%9C%88%E4%B9%9F%E5%BC%80%E5%A7%8B%E6%89%93%E5%A4%8D%E6%B4%BB%E8%B5%9B%E4%BA%86"
    },
    {
      "rank": 18,
      "keyword": "全三角洲都在老太巡猎",
      "hotValue": 7676107,
      "url": "https://www.douyin.com/search/%E5%85%A8%E4%B8%89%E8%A7%92%E6%B4%B2%E9%83%BD%E5%9C%A8%E8%80%81%E5%A4%AA%E5%B7%A1%E7%8C%8E"
    },
    {
      "rank": 19,
      "keyword": "萌宝特攻队集结拯救世界",
      "hotValue": 7672722,
      "url": "https://www.douyin.com/search/%E8%90%8C%E5%AE%9D%E7%89%B9%E6%94%BB%E9%98%9F%E9%9B%86%E7%BB%93%E6%8B%AF%E6%95%91%E4%B8%96%E7%95%8C"
    },
    {
      "rank": 20,
      "keyword": "测试盲盒拆完揭晓你是好友的谁",
      "hotValue": 7667772,
      "url": "https://www.douyin.com/search/%E6%B5%8B%E8%AF%95%E7%9B%B2%E7%9B%92%E6%8B%86%E5%AE%8C%E6%8F%AD%E6%99%93%E4%BD%A0%E6%98%AF%E5%A5%BD%E5%8F%8B%E7%9A%84%E8%B0%81"
    },
    {
      "rank": 21,
      "keyword": "小城良方的笑点像鬼一样追着我",
      "hotValue": 7663074,
      "url": "https://www.douyin.com/search/%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E7%9A%84%E7%AC%91%E7%82%B9%E5%83%8F%E9%AC%BC%E4%B8%80%E6%A0%B7%E8%BF%BD%E7%9D%80%E6%88%91"
    },
    {
      "rank": 22,
      "keyword": "宋茜唱跳真神回归",
      "hotValue": 7657330,
      "url": "https://www.douyin.com/search/%E5%AE%8B%E8%8C%9C%E5%94%B1%E8%B7%B3%E7%9C%9F%E7%A5%9E%E5%9B%9E%E5%BD%92"
    },
    {
      "rank": 23,
      "keyword": "嫁金钗全员扇巴掌转场",
      "hotValue": 7656189,
      "url": "https://www.douyin.com/search/%E5%AB%81%E9%87%91%E9%92%97%E5%85%A8%E5%91%98%E6%89%87%E5%B7%B4%E6%8E%8C%E8%BD%AC%E5%9C%BA"
    },
    {
      "rank": 24,
      "keyword": "让你爱上我要多久",
      "hotValue": 7654452,
      "url": "https://www.douyin.com/search/%E8%AE%A9%E4%BD%A0%E7%88%B1%E4%B8%8A%E6%88%91%E8%A6%81%E5%A4%9A%E4%B9%85"
    },
    {
      "rank": 25,
      "keyword": "特斯拉Roadster意向金33.2万",
      "hotValue": 7652029,
      "url": "https://www.douyin.com/search/%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E6%84%8F%E5%90%91%E9%87%9133.2%E4%B8%87"
    },
    {
      "rank": 26,
      "keyword": "肖战刘铮亮搁家跟前儿上班",
      "hotValue": 7651572,
      "url": "https://www.douyin.com/search/%E8%82%96%E6%88%98%E5%88%98%E9%93%AE%E4%BA%AE%E6%90%81%E5%AE%B6%E8%B7%9F%E5%89%8D%E5%84%BF%E4%B8%8A%E7%8F%AD"
    },
    {
      "rank": 27,
      "keyword": "列车带起的风吹出了女主感",
      "hotValue": 7650122,
      "url": "https://www.douyin.com/search/%E5%88%97%E8%BD%A6%E5%B8%A6%E8%B5%B7%E7%9A%84%E9%A3%8E%E5%90%B9%E5%87%BA%E4%BA%86%E5%A5%B3%E4%B8%BB%E6%84%9F"
    },
    {
      "rank": 28,
      "keyword": "当你在偷吃大赛被特殊关照",
      "hotValue": 7649609,
      "url": "https://www.douyin.com/search/%E5%BD%93%E4%BD%A0%E5%9C%A8%E5%81%B7%E5%90%83%E5%A4%A7%E8%B5%9B%E8%A2%AB%E7%89%B9%E6%AE%8A%E5%85%B3%E7%85%A7"
    },
    {
      "rank": 29,
      "keyword": "蛋仔派对的视角也太萌了吧",
      "hotValue": 7649433,
      "url": "https://www.douyin.com/search/%E8%9B%8B%E4%BB%94%E6%B4%BE%E5%AF%B9%E7%9A%84%E8%A7%86%E8%A7%92%E4%B9%9F%E5%A4%AA%E8%90%8C%E4%BA%86%E5%90%A7"
    },
    {
      "rank": 30,
      "keyword": "想家了就home一下",
      "hotValue": 7648526,
      "url": "https://www.douyin.com/search/%E6%83%B3%E5%AE%B6%E4%BA%86%E5%B0%B1home%E4%B8%80%E4%B8%8B"
    }
  ]
};
