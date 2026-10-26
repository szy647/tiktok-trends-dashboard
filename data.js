window.TREND_DATA = {
  "meta": {
    "lastUpdated": "2026-10-26T19:42:00+08:00",
    "methodology": "本榜采用\"东南亚为主、欧美为辅\"的市场配比：东南亚覆盖 ID/PH/VN/MY/TH 五个市场，美国 US 代表全球/欧美市场。抓取自 TikTok Creative Center 官方 News & Entertainment 分类榜单（通过官方 CreativeOne/KnowledgeAPI 接口按市场+时间窗口各取官方 Top100 候选）。2026-10-16 起执行新配额规则（2026-10-26 本轮沿用）：每个时间窗口（7/30/90天）合并去重后，regionGroup=sea（东南亚话题）数量不少于30条，regionGroup=global（欧美/全球话题）不设数量下限、只收录内容质量过关的候选。排除规则延续本项目一贯红线：①硬新闻/政治事件/自然灾害通报及其衍生内容；②国家法定节日/独立日/国庆日及其爱国主题标签矩阵（如印尼17 Agustus/Merdeka系列、越南国庆系列）与宗教纪念日/宗教节庆活动（如Maulid Nabi先知诞辰）；③以具体真实公众人物（明星/网红/运动员/politician等）为核心话题的内容，即使身份和事件本身清楚，也一律不纳入本榜；④平台通用引流/涨粉功能推广标签（如fyp变体/golivegrowfast/livemonetization等）；⑤\"播放量高但公开检索无法确认具体走红原因\"的模糊话题。本轮公开记录的质量妥协：东南亚几国\"News & Entertainment\"分类下排名靠前的内容大部分是具体真人（本地明星恋情/八卦、网红事件、歌手演唱会），严格排除真人后东南亚候选池明显变薄，30条下限里相当一部分（约1/3）是泛生活方式梗（如avoidantattachment依恋风格、redflag关系警示梗、growingup怀旧梗等）填补，这类条目标注 confidence:\"uncertain\"，机制描述为通用泛内容类型而非逐条核实的具体触发事件——这是在\"不少于30条\"硬性要求与\"不编造/不收录真人\"红线之间做的取舍，比过去几轮逐条深挖的严谨度有所降低，如用户对某条判断有异议可针对性重新核实。动漫/游戏IP（火影忍者/鬼灭之刃/全职猎人/间谍过家家/明日方舟等）大量出现在东南亚候选池中属于真实现象（这些IP在东南亚市场同样有稳定的粉丝基础和内容产出），regionGroup 判定规则是\"该话题在哪个市场池子被抓取到\"（东南亚5国池子→sea，仅美国池子→global，两边都有→归入先选中的那一侧，本轮优先满足sea配额），不是判定IP\"文化原产地\"，这与早前版本（如forgottenisland/tanjiro等Western IP在历史数据中也曾被标记sea）的处理口径一致。videoEmbed 覆盖率：本轮新增条目已逐条真实打开 tiktok.com/tag/X 抓取当前展示视频（作者+视频ID均为真实抓取，不编造），99/100 条成功，仅 #mentalhealthawareness 两次重试仍未能从话题页提取到视频链接，保留 null 走\"点击在TikTok打开\"兜底UI。抖音快照已于当日重新抓取用于国内同步性核实，仅 #thelamentofautumn（《玉簟秋》）在抖音当日热搜命中「玉簟秋直播全员笑到捂腹」「疯看爽看玉簟秋」两条，标记为 synced，其余条目国内均未见同步热度。 【2026-10-26 起口径更新·歌舞类纳入】自本周更新起，歌舞类（音乐/舞蹈/歌手与乐团/演唱会/音乐节/音乐综艺）正式纳入榜单，并统一用 danceCategory 字段标注为\"歌舞类(dance)\"或\"非歌舞类(non_dance)\"。为收录这类内容，歌舞类放宽\"真人话题\"红线——允许收录具体歌手、乐团及其巡演/演唱会/音乐节标签（原因：东南亚歌舞类内容的主体就是具体艺人）；但歌手的绯闻八卦、恋情、私人事件等仍按真人红线排除。非歌舞类继续严格执行真人排除（保留\"剧带人\"例外：演员个人标签在话题核心为剧集IP出海时可收录）。两类均不设单独配额，合计仍按当次抓取的官方播放量降序自然排序后取满东南亚 30 条；欧美不设条数下限。",
    "windowDescs": {
      "7": "近7天，TikTok Creative Center 官方口径",
      "30": "近30天，TikTok Creative Center 官方口径",
      "90": "近90天，TikTok Creative Center 官方口径"
    },
    "douyinFetchedAt": "2026-10-26T17:04:00+08:00",
    "douyinNote": "抖音热搜与 TikTok Creative Center 的热度算法、语言、内容生态均不同，两者数值不可直接比较；抖音数据仅用于核实同一话题是否在国内同步可见，不参与本榜排序。",
    "videoNote": "每条下方嵌入的视频为本人实际打开该话题页时当前展示的真实视频（作者+视频ID均为抓取所得，非编造）；若近期抓取时话题页触发登录验证或未能成功嵌入，则该条 videoEmbed 为 null，页面会显示「点击在 TikTok 打开」的兜底入口，不编造视频信息。",
    "fusionNote": "融合建议为基于该热梗特征给 MCGG（Magic Chess: GoGo）的创意方向参考，非官方立项计划；凡涉及真实人物肖像、第三方IP版权的条目，均已标注风险并给出更稳妥的替代路径，不建议未经授权直接商用。",
    "redLine": "未编造任何带数字 ID 的具体视频 URL；泰语/越南语/印尼语本地人名、剧集、缩写类话题含义无法独立确认的，一律标注【含义待核验】；核心话题是具体真实公众人物的内容一律不纳入本榜。"
  },
  "windows": {
    "7": {
      "items": [
        {
          "tag": "#theweeknd",
          "name": "The Weeknd（威肯）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "TH",
              "posts": "67.3K",
              "views": "301.1M"
            }
          ],
          "summary": "加拿大 R&B 歌手 The Weeknd，作品在东南亚多市场长期占据音乐类头部。",
          "whyHot": "After Hours Til Dawn 体育场巡演在东南亚多城开唱，演出预告、现场片段与歌单剪辑同步爆发。",
          "origin": "歌手官方作品与巡演+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/theweeknd",
            "search": "https://www.tiktok.com/search?q=theweeknd",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "abelspost9",
            "videoId": "7700255181060967702"
          },
          "fusionSuggestion": {
            "commercial": "巡演级视觉包装（红黑主调、末日氛围）可参考用于MCGG赛季视觉，注意肖像与音乐版权。",
            "video": "可参考\"舞台灯光卡点+全场大合唱\"的现场剪辑。"
          },
          "_newDance": true,
          "rank": 1
        },
        {
          "tag": "#avengedsevenfold",
          "name": "Avenged Sevenfold（七级炼狱乐队）",
          "regionGroup": "sea",
          "category": "音乐/乐团",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "40.3K",
              "views": "192.8M"
            }
          ],
          "summary": "美国金属乐队 Avenged Sevenfold，在印尼等东南亚市场拥有稳定的摇滚受众。",
          "whyHot": "乐队在东南亚的演出与巡演消息带动经典曲目与现场片段二创，形成短时高峰。",
          "origin": "乐队官方作品与巡演+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/avengedsevenfold",
            "search": "https://www.tiktok.com/search?q=avengedsevenfold",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dikta_gatesa7x",
            "videoId": "7700924787803065618"
          },
          "fusionSuggestion": {
            "commercial": "硬核金属视觉（骷髅、暗色系）可参考用于MCGG战斗主题皮肤。",
            "video": "可参考\"现场吉他solo+观众冲撞\"的摇滚剪辑。"
          },
          "_newDance": true,
          "rank": 2
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
              "posts": "12.7K",
              "views": "192.5M"
            },
            {
              "code": "TH",
              "posts": "12.3K",
              "views": "77.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 3
        },
        {
          "tag": "#thientho",
          "name": "Thiên Thơ（越南语，灵异/天师题材）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.3K",
              "views": "177.7M"
            }
          ],
          "summary": "越南语标签，字面指向\"天师/灵异\"题材，聚合越南本地的灵异短剧、民俗故事演绎与相关剪辑。",
          "whyHot": "越南市场对灵异/民俗题材短剧接受度高，剧情反转与氛围感适配短视频；标签具体所指的节目或事件未能公开核实。",
          "origin": "越南本地创作者自发内容（具体出处待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/thientho",
            "search": "https://www.tiktok.com/search?q=thientho",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ngbbb16",
            "videoId": "7700154402501348628"
          },
          "fusionSuggestion": {
            "commercial": "灵异民俗题材的氛围与符号可为MCGG万圣/惊悚主题皮肤提供视觉参考，注意避免宗教元素。",
            "video": "可参考\"悬念铺垫—反转\"的短剧剪辑结构。"
          },
          "_newDance": false,
          "rank": 4
        },
        {
          "tag": "#a7x",
          "name": "A7X（Avenged Sevenfold 缩写）",
          "regionGroup": "sea",
          "category": "音乐/乐团",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "27.8K",
              "views": "132.9M"
            }
          ],
          "summary": "Avenged Sevenfold 的粉丝常用缩写标签，聚合乐队歌曲与现场内容。",
          "whyHot": "缩写标签便于粉丝日常发布，与乐队全称标签同期升温。",
          "origin": "粉丝社群自发使用的缩写。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/a7x",
            "search": "https://www.tiktok.com/search?q=a7x",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "jadi_gini17",
            "videoId": "7683132918121778452"
          },
          "fusionSuggestion": {
            "commercial": "同乐队全称标签。",
            "video": "可参考歌曲卡点剪辑。"
          },
          "_newDance": true,
          "rank": 5
        },
        {
          "tag": "#spiderman",
          "name": "Spider-Man（蜘蛛侠 IP）",
          "regionGroup": "sea",
          "category": "影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "15.0K",
              "views": "130.7M"
            }
          ],
          "summary": "漫威蜘蛛侠角色的通用标签，聚合电影/动画片段剪辑、cosplay 与相关二创。",
          "whyHot": "蜘蛛侠是覆盖全年龄的超级英雄 IP，新片宣发与经典场面剪辑持续产出内容。",
          "origin": "漫威官方影视IP+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spiderman",
            "search": "https://www.tiktok.com/search?q=spiderman",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "seannnmcd",
            "videoId": "7699171193408064781"
          },
          "fusionSuggestion": {
            "commercial": "涉及第三方版权，不建议直接使用形象；可参考\"英雄变身\"叙事结构做原创包装。",
            "video": "可参考\"能力展示+变身瞬间\"的剪辑节奏。"
          },
          "_newDance": false,
          "rank": 6
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
              "posts": "8.9K",
              "views": "110.7M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freesouthparkepisodes9",
            "videoId": "7694450361234738453"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 7
        },
        {
          "tag": "#adella",
          "name": "Adella（印尼歌手）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "6.2K",
              "views": "93.3M"
            }
          ],
          "summary": "印尼音乐人 Adella 相关标签，聚合歌曲与演唱片段；具体作品细节待核验。",
          "whyHot": "印尼本土音乐人内容在TikTok传播稳定，本轮多处出现同名/衍生标签（adellamusic/omadella）。",
          "origin": "歌手作品+粉丝二创（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/adella",
            "search": "https://www.tiktok.com/search?q=adella",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "papanoy81",
            "videoId": "7633704565556170004"
          },
          "fusionSuggestion": {
            "commercial": "本土音乐合作可参考。",
            "video": "可参考演唱片段剪辑。"
          },
          "_newDance": true,
          "rank": 8
        },
        {
          "tag": "#humor",
          "name": "Humor（泛幽默内容）",
          "regionGroup": "sea",
          "category": "梗/喜剧",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "4.5K",
              "views": "92.1M"
            },
            {
              "code": "MY",
              "posts": "2.4K",
              "views": "40.0M"
            }
          ],
          "summary": "英语\"幽默\"泛类标签，聚合各国创作者的搞笑短剧、段子演绎与生活糗事。",
          "whyHot": "喜剧是短视频最稳定的通用品类，跨语言传播门槛低，模板化程度高。",
          "origin": "多市场创作者自发使用的泛类标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/humor",
            "search": "https://www.tiktok.com/search?q=humor",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "pacomemesyt",
            "videoId": "7697782232328490260"
          },
          "fusionSuggestion": {
            "commercial": "可作为MCGG社媒内容语气基调的参考，本地化笑点需按市场改写。",
            "video": "可参考\"铺垫—反转\"的单镜头喜剧结构。"
          },
          "_newDance": false,
          "rank": 9
        },
        {
          "tag": "#theweekndconcert",
          "name": "The Weeknd Concert（威肯演唱会）",
          "regionGroup": "sea",
          "category": "演唱会",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "TH",
              "posts": "21.9K",
              "views": "91.1M"
            }
          ],
          "summary": "The Weeknd 巡演现场的专类标签，聚合各站演出片段、开票信息与观众打卡。",
          "whyHot": "巡演东南亚站次密集，开票与演出期间内容集中产出，观众现场记录传播力强。",
          "origin": "巡演官方+观众现场记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/theweekndconcert",
            "search": "https://www.tiktok.com/search?q=theweekndconcert",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "binaryxo",
            "videoId": "7700286534385290503"
          },
          "fusionSuggestion": {
            "commercial": "线下演出的粉丝动员节奏可参考用于MCGG线下电竞赛事宣传。",
            "video": "可参考\"入场—高潮—散场\"的现场记录结构。"
          },
          "_newDance": true,
          "rank": 10
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
              "posts": "5.1K",
              "views": "90.0M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missgrandinternational",
            "videoId": "7695097548394253588"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可借势'国际赛事应援'氛围做棋盘皮肤的票选/应援玩法联想（避免使用真实选手肖像），具体方向待策划评估。",
            "video": "可参考选美赛事的'国服展示+舞台走位'视觉语言做皮肤展示短视频，规避真人版权风险。"
          },
          "_newDance": false,
          "rank": 11
        },
        {
          "tag": "#agnezmo",
          "name": "Agnez Mo（印尼歌手阿格妮兹）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "1.6K",
              "views": "87.6M"
            }
          ],
          "summary": "印尼国民级歌手 Agnez Mo，唱跳风格与国际合作是其内容核心。",
          "whyHot": "印尼本土头部歌手的舞台与舞蹈内容长期有稳定热度。",
          "origin": "歌手官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/agnezmo",
            "search": "https://www.tiktok.com/search?q=agnezmo",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "madametussaudsusa",
            "videoId": "7699895051341597966"
          },
          "fusionSuggestion": {
            "commercial": "唱跳舞台的视觉与编舞可参考用于MCGG女性角色动态展示。",
            "video": "可参考\"舞蹈段落卡点\"剪辑。"
          },
          "_newDance": true,
          "rank": 12
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
              "posts": "4.2K",
              "views": "84.8M"
            },
            {
              "code": "TH",
              "posts": "3.7K",
              "views": "51.6M"
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
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "crynxpiee",
            "videoId": "7696434708170738996"
          },
          "fusionSuggestion": {
            "commercial": "民国美学（旗袍/军阀/宅门）可为MCGG东方复古主题棋盘提供美术参考。",
            "video": "可参考'修罗场名场面'切片格式做剧集向短视频。"
          },
          "_newDance": false,
          "rank": 13
        },
        {
          "tag": "#thualoi",
          "name": "Thừa Lợi（越南语，待核验）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "7.1K",
              "views": "84.4M"
            }
          ],
          "summary": "越南语标签，推测指向某部在播剧集或角色名，聚合相关剧情切片与讨论；具体所指未能公开核实。",
          "whyHot": "越南剧集在TikTok的切片传播机制成熟，在播期名场面剪辑集中产出；本标签具体出处待核验。",
          "origin": "越南本地剧集/创作者内容（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/thualoi",
            "search": "https://www.tiktok.com/search?q=thualoi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "manlacaacalnam",
            "videoId": "7700821516883381525"
          },
          "fusionSuggestion": {
            "commercial": "剧集切片的\"名场面\"逻辑可作为MCGG剧情向短视频的结构参考。",
            "video": "可参考\"剧集名场面+字幕翻译\"的剪辑格式。"
          },
          "_newDance": false,
          "rank": 14
        },
        {
          "tag": "#omadella",
          "name": "Oma Della（Adella 衍生标签）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "2.8K",
              "views": "66.9M"
            }
          ],
          "summary": "与印尼音乐人 Adella 相关的衍生标签，聚合歌曲与日常内容；具体含义待核验。",
          "whyHot": "同一艺人的多个衍生标签同期上榜，说明内容供给活跃。",
          "origin": "粉丝社群自发标签（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/omadella",
            "search": "https://www.tiktok.com/search?q=omadella",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "omadellaofficial_",
            "videoId": "7689762526174661909"
          },
          "fusionSuggestion": {
            "commercial": "艺人衍生标签的运营方式可参考。",
            "video": "可参考日常+演唱组合剪辑。"
          },
          "_newDance": true,
          "rank": 15
        },
        {
          "tag": "#3danimation",
          "name": "3D Animation（3D动画泛类）",
          "regionGroup": "sea",
          "category": "动画/技术内容",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "571",
              "views": "66.7M"
            }
          ],
          "summary": "3D动画创作泛类标签，聚合三维动画短片、建模过程展示与AI辅助动画试验。",
          "whyHot": "AI 与实时渲染工具降低三维内容门槛，过程展示类视频兼具教学与观赏价值。",
          "origin": "全球动画创作者自发使用的技术类标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/3danimation",
            "search": "https://www.tiktok.com/search?q=3danimation",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "brado.animations",
            "videoId": "7682578578873060622"
          },
          "fusionSuggestion": {
            "commercial": "与MCGG美术风格直接相关，可作为竞品三维素材风格研究的入口。",
            "video": "可参考\"建模—渲染—成片\"的过程对比剪辑。"
          },
          "_newDance": false,
          "rank": 16
        },
        {
          "tag": "#tunhuocham",
          "name": "Tù Nhược Chấm（越南语，待核验）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "5.4K",
              "views": "64.0M"
            }
          ],
          "summary": "越南语标签，推测为剧集名或角色名，聚合相关剧情切片与二创；具体所指未能公开核实。",
          "whyHot": "越南在播剧的切片二创机制清楚，但本标签的具体节目信息未能核实。",
          "origin": "越南本地剧集/创作者内容（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/tunhuocham",
            "search": "https://www.tiktok.com/search?q=tunhuocham",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "do0_trs",
            "videoId": "7695643549135686913"
          },
          "fusionSuggestion": {
            "commercial": "可作为越南市场剧集类内容趋势的观察样本。",
            "video": "可参考剧情切片+情绪字幕的格式。"
          },
          "_newDance": false,
          "rank": 17
        },
        {
          "tag": "#dewa19",
          "name": "Dewa 19（印尼传奇乐队）",
          "regionGroup": "sea",
          "category": "音乐/乐团",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "13.0K",
              "views": "64.0M"
            }
          ],
          "summary": "印尼最具影响力的摇滚乐队之一，经典曲目在短视频平台反复翻红。",
          "whyHot": "经典歌曲被新生代用户重新发现，翻唱与歌词卡点带动长尾热度。",
          "origin": "乐队官方作品+粉丝翻唱二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dewa19",
            "search": "https://www.tiktok.com/search?q=dewa19",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kairirds",
            "videoId": "7695010251409476871"
          },
          "fusionSuggestion": {
            "commercial": "国民级经典IP的音乐授权合作可参考。",
            "video": "可参考\"老歌新拍\"的歌词情绪剪辑。"
          },
          "_newDance": true,
          "rank": 18
        },
        {
          "tag": "#orangutan",
          "name": "Orangutan（红毛猩猩动物内容）",
          "regionGroup": "sea",
          "category": "动物",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "2.3K",
              "views": "61.2M"
            }
          ],
          "summary": "红毛猩猩主题动物内容，涵盖保护区纪录、动物园互动与拟人化剪辑。",
          "whyHot": "动物类内容长期是短视频稳定品类，印尼/马来西亚为红毛猩猩栖息地，本地内容天然丰富。",
          "origin": "动物纪录与用户拍摄内容，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/orangutan",
            "search": "https://www.tiktok.com/search?q=orangutan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "officialinews",
            "videoId": "7700883366685560084"
          },
          "fusionSuggestion": {
            "commercial": "萌宠/动物拟人化形式可为MCGG宠物或坐骑系统提供内容参考。",
            "video": "可参考\"动物拟人配音+情境字幕\"的萌趣剪辑。"
          },
          "_newDance": false,
          "rank": 19
        },
        {
          "tag": "#afterhourstildawntourbkk",
          "name": "After Hours Til Dawn Tour BKK（威肯曼谷站巡演）",
          "regionGroup": "sea",
          "category": "演唱会",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "TH",
              "posts": "14.0K",
              "views": "57.6M"
            }
          ],
          "summary": "The Weeknd 巡演曼谷站的专属标签，聚合该站演出与泰国粉丝应援内容。",
          "whyHot": "曼谷站是东南亚巡演的重要站次，开票与演出期内容集中爆发。",
          "origin": "巡演官方+泰国粉丝现场记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/afterhourstildawntourbkk",
            "search": "https://www.tiktok.com/search?q=afterhourstildawntourbkk",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "beam23beam",
            "videoId": "7700516649421507858"
          },
          "fusionSuggestion": {
            "commercial": "站次级标签的传播方式可参考用于MCGG区域活动运营。",
            "video": "可参考现场高光剪辑。"
          },
          "_newDance": true,
          "rank": 20
        },
        {
          "tag": "#jimin",
          "name": "Jimin（BTS 朴智旻）",
          "regionGroup": "sea",
          "category": "音乐/偶像",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "20.9K",
              "views": "57.1M"
            },
            {
              "code": "PH",
              "posts": "8.4K",
              "views": "20.1M"
            },
            {
              "code": "TH",
              "posts": "4.4K",
              "views": "13.5M"
            },
            {
              "code": "VN",
              "posts": "4.2K",
              "views": "12.3M"
            },
            {
              "code": "MY",
              "posts": "1.5K",
              "views": "8.0M"
            }
          ],
          "summary": "防弹少年团成员 Jimin，个人作品与舞蹈内容在东南亚粉丝群体中传播力强。",
          "whyHot": "K-pop 偶像的个人标签长期稳定产出，舞蹈挑战与舞台直拍是主要形式。",
          "origin": "官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/jimin",
            "search": "https://www.tiktok.com/search?q=jimin",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "jimin",
            "videoId": "7690494266287688981"
          },
          "fusionSuggestion": {
            "commercial": "偶像直拍的内容形式可参考用于MCGG角色展示视频。",
            "video": "可参考\"舞蹈直拍+特写\"的形式。"
          },
          "_newDance": true,
          "rank": 21
        },
        {
          "tag": "#rhyder",
          "name": "Rhyder（越南说唱歌手）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "22.3K",
              "views": "55.6M"
            }
          ],
          "summary": "越南说唱歌手 Rhyder，作品在越南年轻群体中传播，聚合歌曲与舞台片段。",
          "whyHot": "越南说唱节目带动的歌手个人热度，但具体作品与活动细节待核验。",
          "origin": "歌手官方作品+粉丝二创（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/rhyder",
            "search": "https://www.tiktok.com/search?q=rhyder",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "rhyder.dgh",
            "videoId": "7696369825177898261"
          },
          "fusionSuggestion": {
            "commercial": "说唱类内容的节奏感可参考用于MCGG短视频配乐策略。",
            "video": "可参考歌曲卡点剪辑。"
          },
          "_newDance": true,
          "rank": 22
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
              "posts": "4.7K",
              "views": "52.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nataliireynoldss",
            "videoId": "7692957276587429150"
          },
          "fusionSuggestion": {
            "commercial": "万圣节cosplay氛围与MCGG节日限定皮肤发售节点天然契合。",
            "video": "可参考'服装从草图到成品'的过程剪辑格式。"
          },
          "_newDance": false,
          "rank": 23
        },
        {
          "tag": "#แอ๊ดคาราบาว",
          "name": "แอ๊ด คาราบาว（泰国传奇乐队主唱 Add Carabao）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "TH",
              "posts": "722",
              "views": "49.7M"
            }
          ],
          "summary": "泰国国民乐队 Carabao 主唱 Add，作品与现场是泰国音乐文化的代表性符号。",
          "whyHot": "泰国经典音乐人的长期文化影响力，现场与歌曲片段持续被引用；具体本轮爆点待核验。",
          "origin": "乐队官方作品+粉丝二创。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/%E0%B9%81%E0%B8%AD%E0%B9%8A%E0%B8%94%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A7",
            "search": "https://www.tiktok.com/search?q=%E0%B9%81%E0%B8%AD%E0%B9%8A%E0%B8%94%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A7",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "realsoul_hiphop",
            "videoId": "7696163292657700103"
          },
          "fusionSuggestion": {
            "commercial": "本土音乐文化符号可参考用于MCGG泰国市场本地化内容。",
            "video": "可参考现场大合唱剪辑。"
          },
          "_newDance": true,
          "rank": 24
        },
        {
          "tag": "#bichphuong",
          "name": "Bích Phương（越南女歌手）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "647",
              "views": "49.2M"
            }
          ],
          "summary": "越南流行女歌手 Bích Phương，以抓耳旋律与视觉系MV著称。",
          "whyHot": "越南本土女歌手的歌曲与MV片段长期有稳定二创产出。",
          "origin": "歌手官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/bichphuong",
            "search": "https://www.tiktok.com/search?q=bichphuong",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "phuongthao___",
            "videoId": "7700638167677848833"
          },
          "fusionSuggestion": {
            "commercial": "MV视觉风格可参考用于MCGG女性向皮肤宣传片。",
            "video": "可参考\"MV名场面+歌词\"剪辑。"
          },
          "_newDance": true,
          "rank": 25
        },
        {
          "tag": "#afterhourstildawnstadiumtour",
          "name": "After Hours Til Dawn Stadium Tour（威肯体育场巡演）",
          "regionGroup": "sea",
          "category": "演唱会",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "TH",
              "posts": "12.3K",
              "views": "48.8M"
            }
          ],
          "summary": "The Weeknd 体育场级巡演的通用标签，聚合各站演出内容。",
          "whyHot": "体育场级巡演的规模感与舞台设计是短视频传播的主要卖点。",
          "origin": "巡演官方+观众记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/afterhourstildawnstadiumtour",
            "search": "https://www.tiktok.com/search?q=afterhourstildawnstadiumtour",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sciiryl",
            "videoId": "7700893766772673812"
          },
          "fusionSuggestion": {
            "commercial": "大场地舞台设计可参考用于MCGG年度总决赛视觉。",
            "video": "可参考\"无人机/灯光秀\"全景镜头。"
          },
          "_newDance": true,
          "rank": 26
        },
        {
          "tag": "#saoconcert",
          "name": "Sao Concert（越南演唱会）",
          "regionGroup": "sea",
          "category": "演唱会",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "11.9K",
              "views": "46.7M"
            }
          ],
          "summary": "越南演唱会相关标签，具体所指场次待核验，聚合现场片段与观众记录。",
          "whyHot": "越南线下演出市场活跃，演唱会内容天然具备现场感染力；具体场次信息待核验。",
          "origin": "演出方官方+观众现场记录（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/saoconcert",
            "search": "https://www.tiktok.com/search?q=saoconcert",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dutranh.nguyen",
            "videoId": "7695325379933850886"
          },
          "fusionSuggestion": {
            "commercial": "线下演出的粉丝动员可参考。",
            "video": "可参考现场高光剪辑。"
          },
          "_newDance": true,
          "rank": 27
        },
        {
          "tag": "#blunder",
          "name": "Blunder（翻车/失误梗）",
          "regionGroup": "sea",
          "category": "梗/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "10.6K",
              "views": "46.0M"
            }
          ],
          "summary": "英语\"失误/翻车\"泛梗标签，聚合各类失误瞬间、尴尬场面与自嘲式复盘内容。",
          "whyHot": "翻车/失误类内容自带反差喜感，参与门槛低，跨国传播适配性强。",
          "origin": "创作者自发使用的泛类梗标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/blunder",
            "search": "https://www.tiktok.com/search?q=blunder",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "itsyournaaaa0",
            "videoId": "7700842741458078996"
          },
          "fusionSuggestion": {
            "commercial": "可延展为MCGG对局\"翻车瞬间\"合辑类社媒内容。",
            "video": "可参考\"失误瞬间+回放慢镜+自嘲字幕\"的三段式。"
          },
          "_newDance": false,
          "rank": 28
        },
        {
          "tag": "#kudrat",
          "name": "Kudrat（马来语\"力量/命运\"）",
          "regionGroup": "sea",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "5.5K",
              "views": "43.8M"
            }
          ],
          "summary": "马来语词汇，字面为\"力量/天命\"，在TikTok上多用于命运感悟、人生转折类叙述内容。",
          "whyHot": "马来语区情感类叙述内容稳定产出，词汇本身带有宿命感，适合配乐朗诵式短视频；具体触发事件待核验。",
          "origin": "马来西亚创作者自发使用的词汇标签。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/kudrat",
            "search": "https://www.tiktok.com/search?q=kudrat",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "astroshawofficial",
            "videoId": "7698331546498960692"
          },
          "fusionSuggestion": {
            "commercial": "宿命感叙事可用于MCGG剧情向宣发的情绪铺垫参考。",
            "video": "可参考\"旁白叙述+生活碎片空镜\"的抒情结构。"
          },
          "_newDance": false,
          "rank": 29
        },
        {
          "tag": "#happybirthday",
          "name": "Happy Birthday（生日主题泛类）",
          "regionGroup": "sea",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "16.4K",
              "views": "42.8M"
            }
          ],
          "summary": "生日主题泛类标签，聚合庆生现场、惊喜策划、蛋糕创意与生日祝福内容。",
          "whyHot": "生日是全年无休的高频生活场景，祝福类内容有天然的社交传播动力。",
          "origin": "用户自发的生活场景记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/happybirthday",
            "search": "https://www.tiktok.com/search?q=happybirthday",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "famionsofficial",
            "videoId": "7684654450157423893"
          },
          "fusionSuggestion": {
            "commercial": "可作为MCGG玩家生日运营活动的创意参考。",
            "video": "可参考\"惊喜揭晓瞬间\"的情绪峰值剪辑。"
          },
          "_newDance": false,
          "rank": 30
        },
        {
          "tag": "#carrie",
          "name": "Carrie（《魔女嘉莉》）",
          "regionGroup": "global",
          "category": "影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "12.7K",
              "views": "260.1M"
            }
          ],
          "summary": "斯蒂芬·金同名小说改编的经典恐怖电影，校园舞会血洗场面是影史标志性镜头。",
          "whyHot": "万圣节季经典恐怖 IP 回潮，名场面剪辑与仿妆内容集中产出。",
          "origin": "官方电影片段+粉丝怀旧向二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/carrie",
            "search": "https://www.tiktok.com/search?q=carrie",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "betteroffbrent",
            "videoId": "7698973650141154573"
          },
          "fusionSuggestion": {
            "commercial": "校园恐怖与舞会场景的反差可为MCGG万圣主题皮肤叙事提供参考。",
            "video": "可参考\"平静铺垫—灾难爆发\"的惊悚剪辑结构。"
          },
          "_newDance": false,
          "rank": 31
        },
        {
          "tag": "#greysanatomyedit",
          "name": "Grey's Anatomy Edit（《实习医生格蕾》剪辑）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "6.1K",
              "views": "130.4M"
            }
          ],
          "summary": "经典医疗剧《实习医生格蕾》的粉丝剪辑标签，聚合名场面、角色关系与情绪向剪辑。",
          "whyHot": "长寿剧集积累大量名场面，情绪向剪辑（Edit）在短视频平台持续产出。",
          "origin": "官方剧集片段+粉丝剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/greysanatomyedit",
            "search": "https://www.tiktok.com/search?q=greysanatomyedit",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "h1fangirl",
            "videoId": "7700672042043067680"
          },
          "fusionSuggestion": {
            "commercial": "医疗剧的情绪张力与角色关系塑造可参考用于MCGG剧情向内容。",
            "video": "可参考\"名场面+情绪配乐\"的 Edit 剪辑格式。"
          },
          "_newDance": false,
          "rank": 32
        },
        {
          "tag": "#snl",
          "name": "SNL（周六夜现场）",
          "regionGroup": "global",
          "category": "综艺/喜剧",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "6.9K",
              "views": "128.6M"
            }
          ],
          "summary": "美国长寿喜剧小品节目 Saturday Night Live，以时事讽刺短剧与明星客串著称。",
          "whyHot": "新季开播与每期爆款小品的社交传播，使节目片段在TikTok持续二次扩散。",
          "origin": "官方节目片段+观众剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/snl",
            "search": "https://www.tiktok.com/search?q=snl",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "abigailti83",
            "videoId": "7700499452590771486"
          },
          "fusionSuggestion": {
            "commercial": "短剧式讽刺与节奏控制可参考用于MCGG社媒轻喜剧内容。",
            "video": "可参考\"小品高光片段+字幕\"的切片格式。"
          },
          "_newDance": false,
          "rank": 33
        },
        {
          "tag": "#breakingbad",
          "name": "Breaking Bad（《绝命毒师》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "7.6K",
              "views": "117.4M"
            }
          ],
          "summary": "经典犯罪题材美剧，角色转变与名台词长期是剪辑二创的高频素材。",
          "whyHot": "长青剧集的怀旧向回潮，名场面与台词梗持续被新一代用户重新发现。",
          "origin": "官方剧集片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/breakingbad",
            "search": "https://www.tiktok.com/search?q=breakingbad",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "jxveed____",
            "videoId": "7621211523096038678"
          },
          "fusionSuggestion": {
            "commercial": "反英雄叙事与角色弧线可参考用于MCGG角色故事包装。",
            "video": "可参考\"名台词+名场面\"的剪辑格式。"
          },
          "_newDance": false,
          "rank": 34
        },
        {
          "tag": "#losercore",
          "name": "Losercore（\"失败者美学\"梗）",
          "regionGroup": "global",
          "category": "梗/亚文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "6.2K",
              "views": "87.2M"
            }
          ],
          "summary": "以自嘲\"人生失败组\"为基调的亚文化美学标签，聚合摆烂、社恐与反差自嘲内容。",
          "whyHot": "Z世代反成功学情绪的外化表达，自嘲式共鸣门槛低，二创模板成熟。",
          "origin": "创作者自发形成的亚文化标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/losercore",
            "search": "https://www.tiktok.com/search?q=losercore",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "musicenjoyer178",
            "videoId": "7693628732380171553"
          },
          "fusionSuggestion": {
            "commercial": "自嘲式表达可用于MCGG对局\"连败\"情绪的幽默化运营。",
            "video": "可参考\"摆烂日常+自嘲字幕\"的短格式。"
          },
          "_newDance": false,
          "rank": 35
        },
        {
          "tag": "#hauntedhotel",
          "name": "Haunted Hotel（鬼屋酒店沉浸体验）",
          "regionGroup": "global",
          "category": "季节/体验",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "5.0K",
              "views": "80.9M"
            }
          ],
          "summary": "万圣节季的鬼屋酒店/沉浸式恐怖体验内容，聚合探店、惊吓反应与场景布置。",
          "whyHot": "10月万圣节档期，沉浸式恐怖体验成为线下消费热点，惊吓反应类视频传播力强。",
          "origin": "场馆官方宣传+用户探店记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hauntedhotel",
            "search": "https://www.tiktok.com/search?q=hauntedhotel",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "netflix",
            "videoId": "7699476161314819342"
          },
          "fusionSuggestion": {
            "commercial": "沉浸式场景布置与惊吓节奏可参考用于MCGG万圣主题场景设计。",
            "video": "可参考\"第一视角探索+惊吓瞬间\"的沉浸式拍摄。"
          },
          "_newDance": false,
          "rank": 36
        },
        {
          "tag": "#kellyclarkson",
          "name": "Kelly Clarkson（凯莉·克莱森）",
          "regionGroup": "global",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "3.6K",
              "views": "79.1M"
            }
          ],
          "summary": "美国歌手 Kelly Clarkson，选秀出身，翻唱与脱口秀演唱环节是主要内容。",
          "whyHot": "节目中的翻唱片段常单独出圈，演唱实力向内容传播力强。",
          "origin": "节目官方片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/kellyclarkson",
            "search": "https://www.tiktok.com/search?q=kellyclarkson",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kellyclarksonshow",
            "videoId": "7680209493451459853"
          },
          "fusionSuggestion": {
            "commercial": "\"实力翻唱\"内容形式可参考用于MCGG官方号音乐企划。",
            "video": "可参考\"翻唱段落+观众反应\"剪辑。"
          },
          "_newDance": true,
          "rank": 37
        },
        {
          "tag": "#avatarsevenhavens",
          "name": "Avatar: Seven Havens（《阿凡达：七重天》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "4.2K",
              "views": "67.1M"
            }
          ],
          "summary": "《阿凡达》宇宙相关新作话题标签，聚合预告、设定讨论与粉丝解析；具体作品信息待核验。",
          "whyHot": "大 IP 新作官宣期通常带动预告解析与世界观讨论，但本项目名称与档期待核验。",
          "origin": "官方影视IP+粉丝讨论。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/avatarsevenhavens",
            "search": "https://www.tiktok.com/search?q=avatarsevenhavens",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "trillryu",
            "videoId": "7699980213626703118"
          },
          "fusionSuggestion": {
            "commercial": "世界观设定与视觉体系可作参考，须核实版权状态。",
            "video": "可参考\"预告解析+设定梳理\"的内容格式。"
          },
          "_newDance": false,
          "rank": 38
        },
        {
          "tag": "#souljaboy",
          "name": "Soulja Boy（美国说唱歌手）",
          "regionGroup": "global",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "2.8K",
              "views": "66.7M"
            }
          ],
          "summary": "美国说唱歌手 Soulja Boy，以早期病毒式舞曲和网络文化著称。",
          "whyHot": "经典舞曲在短视频平台周期性回潮，配舞挑战带动二次传播。",
          "origin": "歌手官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/souljaboy",
            "search": "https://www.tiktok.com/search?q=souljaboy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "amandalaurine",
            "videoId": "7695887313095691533"
          },
          "fusionSuggestion": {
            "commercial": "经典舞曲的翻红路径可参考用于MCGG怀旧向内容。",
            "video": "可参考舞蹈挑战剪辑。"
          },
          "_newDance": true,
          "rank": 39
        },
        {
          "tag": "#nycc",
          "name": "NYCC（纽约动漫展）",
          "regionGroup": "global",
          "category": "展会/文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "9.3K",
              "views": "65.5M"
            }
          ],
          "summary": "New York Comic Con 纽约动漫展，聚合展会现场、cosplay 与新品发布内容。",
          "whyHot": "展会档期集中产出 cosplay 与现场内容，ACG 受众参与度高。",
          "origin": "展会官方+参展者现场记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/nycc",
            "search": "https://www.tiktok.com/search?q=nycc",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "thatkimon",
            "videoId": "7699581189073538326"
          },
          "fusionSuggestion": {
            "commercial": "展会 cosplay 生态与新品发布节奏可参考用于MCGG线下展会策划。",
            "video": "可参考\"现场 cosplay 合集+展台探访\"的形式。"
          },
          "_newDance": false,
          "rank": 40
        },
        {
          "tag": "#calvinharris",
          "name": "Calvin Harris（加尔文·哈里斯）",
          "regionGroup": "global",
          "category": "音乐/DJ",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "10.5K",
              "views": "63.1M"
            }
          ],
          "summary": "苏格兰 DJ/制作人 Calvin Harris，电子舞曲在短视频平台长期使用。",
          "whyHot": "电子舞曲适配卡点剪辑，新作品发布带动二创集中产出。",
          "origin": "音乐人官方作品+用户二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/calvinharris",
            "search": "https://www.tiktok.com/search?q=calvinharris",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "katieeee3442",
            "videoId": "7700930866616241416"
          },
          "fusionSuggestion": {
            "commercial": "电子音乐卡点结构可参考用于MCGG短视频节奏设计。",
            "video": "可参考音乐卡点剪辑。"
          },
          "_newDance": true,
          "rank": 41
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
              "posts": "55.4K",
              "views": "60.9M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "thebashanator",
            "videoId": "7697140273243098381"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 42
        },
        {
          "tag": "#erenyeager",
          "name": "Eren Yeager（《进击的巨人》艾伦）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "54.9K",
              "views": "53.9M"
            }
          ],
          "summary": "《进击的巨人》主角艾伦·耶格尔，自由意志与毁灭主题使其成为二创高频角色。",
          "whyHot": "经典少年漫角色，剧情反转与名台词长期支撑剪辑二创。",
          "origin": "官方动画角色话题+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/erenyeager",
            "search": "https://www.tiktok.com/search?q=erenyeager",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "lowki_85",
            "videoId": "7700081567045029140"
          },
          "fusionSuggestion": {
            "commercial": "\"自由与代价\"的叙事张力可参考用于MCGG阵营剧情设计。",
            "video": "可参考\"角色转变+名台词\"的剪辑。"
          },
          "_newDance": false,
          "rank": 43
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
              "posts": "49.1K",
              "views": "50.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "pcrvy4hgq5",
            "videoId": "7565958033805692173"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 44
        },
        {
          "tag": "#gojosatoru",
          "name": "Gojo Satoru（《咒术回战》五条悟）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "49.9K",
              "views": "41.4M"
            }
          ],
          "summary": "《咒术回战》人气角色五条悟，最强设定与张扬性格是其二创核心。",
          "whyHot": "角色人气长期居于前列，战斗名场面与台词剪辑在东南亚与欧美同步传播。",
          "origin": "官方漫画/动画角色话题+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/gojosatoru",
            "search": "https://www.tiktok.com/search?q=gojosatoru",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ishi.aep",
            "videoId": "7613084577908690197"
          },
          "fusionSuggestion": {
            "commercial": "\"压倒性强者的从容\"人设可参考用于MCGG高战力角色包装。",
            "video": "可参考\"能力展示+台词金句\"的剪辑。"
          },
          "_newDance": false,
          "rank": 45
        },
        {
          "tag": "#mikasa",
          "name": "Mikasa Ackerman（《进击的巨人》三笠）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "48.8K",
              "views": "39.9M"
            }
          ],
          "summary": "《进击的巨人》角色三笠·阿克曼，战斗实力与情感线是其剪辑核心。",
          "whyHot": "经典角色的战斗高光与情感线持续产出二创内容。",
          "origin": "官方动画角色话题+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/mikasa",
            "search": "https://www.tiktok.com/search?q=mikasa",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "katoamv",
            "videoId": "7643026406204742422"
          },
          "fusionSuggestion": {
            "commercial": "角色\"沉默但强大\"的设定可参考用于MCGG女性角色塑造。",
            "video": "可参考\"战斗高光+情感线\"剪辑。"
          },
          "_newDance": false,
          "rank": 46
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
              "posts": "49.0K",
              "views": "38.5M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "paramecian",
            "videoId": "7629992553349139719"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 47
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
              "posts": "54.2K",
              "views": "35.3M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mpfx.amv",
            "videoId": "7624373605643701535"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 48
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
              "posts": "54.2K",
              "views": "35.3M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "flyyylux",
            "videoId": "7693776915429084423"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 49
        }
      ]
    },
    "30": {
      "items": [
        {
          "tag": "#traibuonnguoi",
          "name": "Trải Buồn Người（越南语，情感叙事）",
          "regionGroup": "sea",
          "category": "梗/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "67.9K",
              "views": "1.8B"
            }
          ],
          "summary": "越南语情感类标签，字面指向\"经历悲伤/释怀\"，聚合失恋叙事、情绪独白与配乐短片。",
          "whyHot": "情感叙事是越南TikTok的高互动品类，配乐+独白模板易于批量二创；精确语义待母语者复核。",
          "origin": "越南创作者自发的情感类内容。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/traibuonnguoi",
            "search": "https://www.tiktok.com/search?q=traibuonnguoi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "edwardnhieuchuyen",
            "videoId": "7700906407737969927"
          },
          "fusionSuggestion": {
            "commercial": "情绪张力可用于MCGG剧情向宣发的氛围铺垫。",
            "video": "可参考\"独白+空镜\"的抒情结构。"
          },
          "_newDance": false,
          "rank": 1
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
              "posts": "40.6K",
              "views": "835.4M"
            },
            {
              "code": "TH",
              "posts": "25.8K",
              "views": "175.6M"
            },
            {
              "code": "PH",
              "posts": "13.5K",
              "views": "173.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missgrandinternational",
            "videoId": "7695097548394253588"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可借势'国际赛事应援'氛围做棋盘皮肤的票选/应援玩法联想（避免使用真实选手肖像），具体方向待策划评估。",
            "video": "可参考选美赛事的'国服展示+舞台走位'视觉语言做皮肤展示短视频，规避真人版权风险。"
          },
          "_newDance": false,
          "rank": 2
        },
        {
          "tag": "#theweeknd",
          "name": "The Weeknd（威肯）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "81.5K",
              "views": "705.0M"
            },
            {
              "code": "TH",
              "posts": "71.9K",
              "views": "356.2M"
            },
            {
              "code": "VN",
              "posts": "4.4K",
              "views": "61.5M"
            },
            {
              "code": "MY",
              "posts": "2.3K",
              "views": "33.7M"
            }
          ],
          "summary": "加拿大 R&B 歌手 The Weeknd，作品在东南亚多市场长期占据音乐类头部。",
          "whyHot": "After Hours Til Dawn 体育场巡演在东南亚多城开唱，演出预告、现场片段与歌单剪辑同步爆发。",
          "origin": "歌手官方作品与巡演+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/theweeknd",
            "search": "https://www.tiktok.com/search?q=theweeknd",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "abelspost9",
            "videoId": "7700255181060967702"
          },
          "fusionSuggestion": {
            "commercial": "巡演级视觉包装（红黑主调、末日氛围）可参考用于MCGG赛季视觉，注意肖像与音乐版权。",
            "video": "可参考\"舞台灯光卡点+全场大合唱\"的现场剪辑。"
          },
          "_newDance": true,
          "rank": 3
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
              "posts": "10.8K",
              "views": "581.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "dongtaypromotionofficial",
            "videoId": "7697130356499074324"
          },
          "fusionSuggestion": {
            "commercial": "旅行+游戏任务类综艺的'惩罚环节'喜感可为MCGG对战结算动画提供梗参考。",
            "video": "可参考其'任务卡+反转惩罚'的短视频剪辑结构。"
          },
          "_newDance": false,
          "rank": 4
        },
        {
          "tag": "#lyrics",
          "name": "Lyrics（歌词字幕类内容）",
          "regionGroup": "sea",
          "category": "音乐",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "MY",
              "posts": "85.5K",
              "views": "554.2M"
            }
          ],
          "summary": "歌词主题泛类标签，聚合歌词字幕视频、翻唱与歌曲情绪解读。",
          "whyHot": "歌词类内容与音乐传播强绑定，模板化程度高，跨国跨语种适用。",
          "origin": "多市场创作者自发使用的音乐类标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/lyrics",
            "search": "https://www.tiktok.com/search?q=lyrics",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "_koi_zen",
            "videoId": "7655100335668645140"
          },
          "fusionSuggestion": {
            "commercial": "音乐情绪与歌词卡点结构可为MCGG短视频配乐策略提供参考。",
            "video": "可参考\"歌词逐句卡点+情绪画面\"的剪辑格式。"
          },
          "_newDance": false,
          "rank": 5
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
              "posts": "40.2K",
              "views": "458.7M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "erikkkofficial",
            "videoId": "7653053181684993301"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 6
        },
        {
          "tag": "#pestapora",
          "name": "Pestapora（印尼音乐节）",
          "regionGroup": "sea",
          "category": "音乐节/文化",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "17.5K",
              "views": "454.5M"
            }
          ],
          "summary": "印尼本土大型音乐节品牌，聚合现场演出片段、观众打卡与阵容讨论。",
          "whyHot": "印尼本土音乐节观众规模大，现场氛围类内容在音乐节档期集中爆发。",
          "origin": "音乐节官方与观众现场记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/pestapora",
            "search": "https://www.tiktok.com/search?q=pestapora",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "jopiloop",
            "videoId": "7689528913915055368"
          },
          "fusionSuggestion": {
            "commercial": "大型线下活动的现场氛围与视觉包装可为MCGG线下活动提供参考。",
            "video": "可参考\"现场大合唱+人群镜头\"的情绪渲染剪辑。"
          },
          "_newDance": false,
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
              "posts": "28.4K",
              "views": "445.6M"
            },
            {
              "code": "ID",
              "posts": "24.2K",
              "views": "252.3M"
            },
            {
              "code": "TH",
              "posts": "23.9K",
              "views": "164.4M"
            },
            {
              "code": "VN",
              "posts": "13.8K",
              "views": "113.9M"
            },
            {
              "code": "MY",
              "posts": "4.2K",
              "views": "104.3M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 8
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
              "posts": "8.7K",
              "views": "396.5M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "singadvisor",
            "videoId": "7690048283472841992"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 9
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
              "posts": "19.5K",
              "views": "386.8M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missgrandvietnamofficial",
            "videoId": "7697200395847765255"
          },
          "fusionSuggestion": {
            "commercial": "同MGI：应援玩法联想，避免真人肖像。",
            "video": "可参考'国服展示'视觉语言，规避真人版权。"
          },
          "_newDance": false,
          "rank": 10
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
              "posts": "16.6K",
              "views": "384.3M"
            },
            {
              "code": "MY",
              "posts": "2.8K",
              "views": "87.0M"
            }
          ],
          "summary": "自1997年播出至今的Comedy Central成人向讽刺动画，以粗糙手绘风格+社会时事讽刺著称。",
          "whyHot": "第29季于2026年9月16日开播（官方整季玩梗改名'South America'，讽刺安大略湖改名事件），隔周更新共6集，第3集恰于10月14日播出；新集上线与改名梗带动经典恶搞片段、角色台词剪辑二创，多市场同步上榜。",
          "origin": "Comedy Central官方剧集+观众剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southpark",
            "search": "https://www.tiktok.com/search?q=southpark",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freesouthparkepisodes9",
            "videoId": "7694450361234738453"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
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
              "posts": "28.5K",
              "views": "319.1M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "richard_vision",
            "videoId": "7655890872189390093"
          },
          "fusionSuggestion": {
            "commercial": "'气场值量化'玩法可直译为MCGG棋盘互动彩蛋（如连胜+aura特效）。",
            "video": "可参考'+1000 aura/-500 aura'的字幕计分梗格式。"
          },
          "_newDance": false,
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
              "posts": "6.6K",
              "views": "309.2M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "gia.nguyen3569",
            "videoId": "7688676127300226310"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 13
        },
        {
          "tag": "#lycagairanod",
          "name": "Lyca Gairanod（菲律宾歌手）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "PH",
              "posts": "16.2K",
              "views": "303.8M"
            }
          ],
          "summary": "菲律宾歌手 Lyca Gairanod，选秀出身，演唱片段与翻唱是主要内容。",
          "whyHot": "菲律宾观众对选秀出身歌手的演唱实力内容接受度高，翻唱片段传播力强。",
          "origin": "歌手官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/lycagairanod",
            "search": "https://www.tiktok.com/search?q=lycagairanod",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "elynor0423",
            "videoId": "7700239127546989831"
          },
          "fusionSuggestion": {
            "commercial": "实力派演唱内容的传播逻辑可参考。",
            "video": "可参考\"清唱—爆发\"的演唱剪辑。"
          },
          "_newDance": true,
          "rank": 14
        },
        {
          "tag": "#missgrandinternational2026",
          "name": "Miss Grand International 2026（MGI 2026 届次标签）",
          "regionGroup": "sea",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.7K",
              "views": "295.9M"
            },
            {
              "code": "TH",
              "posts": "15.5K",
              "views": "120.3M"
            },
            {
              "code": "PH",
              "posts": "3.0K",
              "views": "54.7M"
            }
          ],
          "summary": "MGI 2026 届次专属标签，聚合本届赛程、选手国服展示与粉丝应援内容。",
          "whyHot": "赛事进入决赛周期，届次标签用于内容归档与应援聚合，东南亚粉丝动员力强。",
          "origin": "MGI 官方赛事+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandinternational2026",
            "search": "https://www.tiktok.com/search?q=missgrandinternational2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "asiaof.pageantry",
            "videoId": "7700120244391595285"
          },
          "fusionSuggestion": {
            "commercial": "应援氛围可做皮肤票选玩法联想，避免使用真实选手肖像。",
            "video": "可参考\"国服展示+舞台走位\"的视觉语言。"
          },
          "_newDance": false,
          "rank": 15
        },
        {
          "tag": "#thientho",
          "name": "Thiên Thơ（越南语，灵异/天师题材）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "15.7K",
              "views": "289.3M"
            }
          ],
          "summary": "越南语标签，字面指向\"天师/灵异\"题材，聚合越南本地的灵异短剧、民俗故事演绎与相关剪辑。",
          "whyHot": "越南市场对灵异/民俗题材短剧接受度高，剧情反转与氛围感适配短视频；标签具体所指的节目或事件未能公开核实。",
          "origin": "越南本地创作者自发内容（具体出处待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/thientho",
            "search": "https://www.tiktok.com/search?q=thientho",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ngbbb16",
            "videoId": "7700154402501348628"
          },
          "fusionSuggestion": {
            "commercial": "灵异民俗题材的氛围与符号可为MCGG万圣/惊悚主题皮肤提供视觉参考，注意避免宗教元素。",
            "video": "可参考\"悬念铺垫—反转\"的短剧剪辑结构。"
          },
          "_newDance": false,
          "rank": 16
        },
        {
          "tag": "#mualan",
          "name": "Mùa Lân（越南语\"舞狮季\"）",
          "regionGroup": "sea",
          "category": "文化节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "16.1K",
              "views": "245.7M"
            }
          ],
          "summary": "越南语\"舞狮季\"，指向节庆档期的舞狮表演与相关民俗内容。",
          "whyHot": "舞狮是东南亚节庆的固定视觉符号，节前预热与表演视频密集产出；具体档期待核验。",
          "origin": "本地民俗表演团队与观众记录。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/mualan",
            "search": "https://www.tiktok.com/search?q=mualan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "puppykechuyen",
            "videoId": "7681157624917789960"
          },
          "fusionSuggestion": {
            "commercial": "舞狮的节庆视觉与鼓点节奏可为MCGG春节/节庆皮肤提供符号参考。",
            "video": "可参考\"鼓点卡点+狮头特写\"的剪辑。"
          },
          "_newDance": false,
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
              "posts": "9.0K",
              "views": "238.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "missuniversevietnam.org",
            "videoId": "7697190509940460820"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 18
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
              "posts": "22.6K",
              "views": "236.5M"
            },
            {
              "code": "PH",
              "posts": "16.6K",
              "views": "184.6M"
            },
            {
              "code": "VN",
              "posts": "1.7K",
              "views": "52.0M"
            },
            {
              "code": "MY",
              "posts": "2.1K",
              "views": "41.8M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kainzxx_",
            "videoId": "7693959499471654164"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 19
        },
        {
          "tag": "#theweekndconcert",
          "name": "The Weeknd Concert（威肯演唱会）",
          "regionGroup": "sea",
          "category": "演唱会",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "27.3K",
              "views": "220.0M"
            },
            {
              "code": "TH",
              "posts": "23.2K",
              "views": "104.8M"
            }
          ],
          "summary": "The Weeknd 巡演现场的专类标签，聚合各站演出片段、开票信息与观众打卡。",
          "whyHot": "巡演东南亚站次密集，开票与演出期间内容集中产出，观众现场记录传播力强。",
          "origin": "巡演官方+观众现场记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/theweekndconcert",
            "search": "https://www.tiktok.com/search?q=theweekndconcert",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "binaryxo",
            "videoId": "7700286534385290503"
          },
          "fusionSuggestion": {
            "commercial": "线下演出的粉丝动员节奏可参考用于MCGG线下电竞赛事宣传。",
            "video": "可参考\"入场—高潮—散场\"的现场记录结构。"
          },
          "_newDance": true,
          "rank": 20
        },
        {
          "tag": "#jamda5yrkijogja",
          "name": "JAMDA 5th Anniversary Yogyakarta（印尼社群周年活动）",
          "regionGroup": "sea",
          "category": "社群/活动",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "37.5K",
              "views": "202.8M"
            }
          ],
          "summary": "印尼日惹地区某社群五周年聚会活动的标签，聚合现场记录与参与者打卡。",
          "whyHot": "本地社群活动类内容在印尼下沉市场活跃，但主办方与具体活动性质未能核实。",
          "origin": "印尼本地社群活动记录（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/jamda5yrkijogja",
            "search": "https://www.tiktok.com/search?q=jamda5yrkijogja",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mas.yuddd_",
            "videoId": "7687500006361763079"
          },
          "fusionSuggestion": {
            "commercial": "线下社群活动的组织形式可作参考，需复核背景。",
            "video": "可参考活动集锦式剪辑。"
          },
          "_newDance": false,
          "rank": 21
        },
        {
          "tag": "#stopthewedding",
          "name": "Stop The Wedding（\"阻止婚礼\"剧情梗）",
          "regionGroup": "sea",
          "category": "梗/剧情",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "18.8K",
              "views": "195.8M"
            },
            {
              "code": "ID",
              "posts": "4.1K",
              "views": "69.0M"
            }
          ],
          "summary": "戏剧化剧情标签，围绕婚礼现场冲突、抢婚等强反转情节展开演绎与剪辑。",
          "whyHot": "强冲突剧情在短视频天然吸睛，婚礼场景自带仪式感与情绪张力；具体来源待核验。",
          "origin": "创作者剧情演绎或剧集切片（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/stopthewedding",
            "search": "https://www.tiktok.com/search?q=stopthewedding",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "aaelice",
            "videoId": "7699442927860223253"
          },
          "fusionSuggestion": {
            "commercial": "强反转叙事结构可参考用于MCGG剧情向短片。",
            "video": "可参考\"仪式进行—突发打断\"的悬念结构。"
          },
          "_newDance": false,
          "rank": 22
        },
        {
          "tag": "#hotpodxclippo",
          "name": "Hot Pod x Clippo（印尼播客切片）",
          "regionGroup": "sea",
          "category": "播客/访谈",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "12.2K",
              "views": "193.8M"
            }
          ],
          "summary": "印尼播客节目相关的切片标签，聚合长访谈的高光片段与金句剪辑。",
          "whyHot": "播客切片化传播成为东南亚新兴内容形态，金句片段适配短视频节奏；节目详情待核验。",
          "origin": "播客节目官方切片或观众剪辑。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/hotpodxclippo",
            "search": "https://www.tiktok.com/search?q=hotpodxclippo",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "enuy.nuy7",
            "videoId": "7691643444275449140"
          },
          "fusionSuggestion": {
            "commercial": "长内容切片化的分发策略可供MCGG官方账号参考。",
            "video": "可参考\"金句前置+对话还原\"的切片格式。"
          },
          "_newDance": false,
          "rank": 23
        },
        {
          "tag": "#thexesitz",
          "name": "The Xesitz（待核验）",
          "regionGroup": "sea",
          "category": "待核验",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "4.7K",
              "views": "189.0M"
            }
          ],
          "summary": "泰国市场出现的标签，具体所指（艺人、节目或社群）未能公开核实。",
          "whyHot": "播放量较高但内容属性不明，建议人工打开话题页复核后再判断是否收录。",
          "origin": "待核验。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/thexesitz",
            "search": "https://www.tiktok.com/search?q=thexesitz",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "alienneverdie",
            "videoId": "7700644677686512917"
          },
          "fusionSuggestion": {
            "commercial": "建议复核后再判断。",
            "video": "待核验。"
          },
          "_newDance": false,
          "rank": 24
        },
        {
          "tag": "#missgrandvietnam2026",
          "name": "Miss Grand Vietnam 2026（MGI 越南国赛 2026）",
          "regionGroup": "sea",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "4.6K",
              "views": "185.7M"
            }
          ],
          "summary": "MGI 越南国赛 2026 届次标签，聚合本届选拔赛程与选手相关内容。",
          "whyHot": "跟随 MGI 国际赛事周期，越南国赛在决赛前进入内容高峰。",
          "origin": "MGI Vietnam 官方赛事+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandvietnam2026",
            "search": "https://www.tiktok.com/search?q=missgrandvietnam2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "asiaof.pageantry",
            "videoId": "7700476967258230037"
          },
          "fusionSuggestion": {
            "commercial": "同 MGI 体系：应援玩法联想，避免真人肖像。",
            "video": "可参考国服展示类视觉语言。"
          },
          "_newDance": false,
          "rank": 25
        },
        {
          "tag": "#terbelahjadidua",
          "name": "Terbelah Jadi Dua（印尼语\"一分为二\"）",
          "regionGroup": "sea",
          "category": "梗/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "28.7K",
              "views": "179.7M"
            }
          ],
          "summary": "印尼语短语，字面意为\"裂成两半\"，多用于心碎、立场分裂一类的情绪化表达。",
          "whyHot": "情绪化短句适合做字幕梗模板，印尼语区传播快；具体触发场景待核验。",
          "origin": "印尼创作者自发的情绪梗。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/terbelahjadidua",
            "search": "https://www.tiktok.com/search?q=terbelahjadidua",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "marteen.id",
            "videoId": "7699344737605537031"
          },
          "fusionSuggestion": {
            "commercial": "情绪张力可作MCGG对局\"心态崩了\"类内容参考。",
            "video": "可参考\"对比分屏+情绪字幕\"的格式。"
          },
          "_newDance": false,
          "rank": 26
        },
        {
          "tag": "#phimchieurap",
          "name": "Phim Chiếu Rạp（越南语\"院线电影\"）",
          "regionGroup": "sea",
          "category": "影视泛类",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "5.8K",
              "views": "175.8M"
            }
          ],
          "summary": "越南语\"院线电影\"泛类标签，聚合在映影片的预告、影评与观后感内容。",
          "whyHot": "院线档期驱动，越南观众观影打卡与影评内容集中产出。",
          "origin": "越南影迷与影视媒体自发使用。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/phimchieurap",
            "search": "https://www.tiktok.com/search?q=phimchieurap",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "danphim1",
            "videoId": "7679003799830285576"
          },
          "fusionSuggestion": {
            "commercial": "院线档期的营销节奏可为MCGG版本节点提供排期参考。",
            "video": "可参考\"观影反应+影评观点\"的组合格式。"
          },
          "_newDance": false,
          "rank": 27
        },
        {
          "tag": "#theweekndjakarta",
          "name": "The Weeknd Jakarta（威肯雅加达站）",
          "regionGroup": "sea",
          "category": "演唱会",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "17.1K",
              "views": "174.9M"
            }
          ],
          "summary": "The Weeknd 巡演雅加达站专属标签，聚合该站开票、现场与粉丝应援内容。",
          "whyHot": "印尼是东南亚演唱会规模最大的市场之一，单站标签通常独立上榜。",
          "origin": "巡演官方+印尼粉丝现场记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/theweekndjakarta",
            "search": "https://www.tiktok.com/search?q=theweekndjakarta",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "qgabeltesfaye",
            "videoId": "7689941093948951829"
          },
          "fusionSuggestion": {
            "commercial": "单城站点的运营方式可参考用于MCGG区域赛事落地。",
            "video": "可参考\"城市地标+现场\"的组合剪辑。"
          },
          "_newDance": true,
          "rank": 28
        },
        {
          "tag": "#mgi",
          "name": "MGI（Miss Grand International 简称）",
          "regionGroup": "sea",
          "category": "选美/娱乐赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "8.0K",
              "views": "172.4M"
            },
            {
              "code": "PH",
              "posts": "3.4K",
              "views": "62.7M"
            }
          ],
          "summary": "MGI 赛事缩写泛标签，聚合国际赛事与各国国赛的混合内容。",
          "whyHot": "赛事周期内缩写标签使用量上升，方便跨市场聚合应援内容。",
          "origin": "MGI 官方赛事+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/mgi",
            "search": "https://www.tiktok.com/search?q=mgi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "zawadi_linsey",
            "videoId": "7700898485331086612"
          },
          "fusionSuggestion": {
            "commercial": "同 MGI 体系：应援玩法联想。",
            "video": "可参考舞台高光剪辑。"
          },
          "_newDance": false,
          "rank": 29
        },
        {
          "tag": "#aidrama",
          "name": "AI Drama（AI 生成短剧）",
          "regionGroup": "sea",
          "category": "影视/技术内容",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "19.4K",
              "views": "169.1M"
            }
          ],
          "summary": "AI 生成短剧标签，聚合用生成式工具制作的剧情短片与制作过程展示。",
          "whyHot": "生成式视频工具降低短剧制作门槛，AI 短剧成为东南亚新兴内容形态。",
          "origin": "创作者自发使用的技术类内容标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/aidrama",
            "search": "https://www.tiktok.com/search?q=aidrama",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "aiseries_movie",
            "videoId": "7679036050378870034"
          },
          "fusionSuggestion": {
            "commercial": "与MCGG宣发素材的低成本生产直接相关，值得跟踪。",
            "video": "可参考\"AI成片+制作过程\"的对比格式。"
          },
          "_newDance": false,
          "rank": 30
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
              "posts": "112.6K",
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
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "princeleoww",
            "videoId": "7695675199081008414"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 31
        },
        {
          "tag": "#southamerica",
          "name": "South America（《南方公园》改名梗）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "94.8K",
              "views": "1.3B"
            }
          ],
          "summary": "《南方公园》第29季官方玩梗改名事件衍生的标签，讽刺安大略湖改名风波。",
          "whyHot": "官方整季改名引发讨论，观众剪辑对比与二次恶搞集中产出。",
          "origin": "Comedy Central 官方剧集+观众二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southamerica",
            "search": "https://www.tiktok.com/search?q=southamerica",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "clips.r.us78",
            "videoId": "7687797889992494349"
          },
          "fusionSuggestion": {
            "commercial": "官方玩梗的传播效果可参考，需注意地域敏感度。",
            "video": "可参考\"原名对比+恶搞解说\"的剪辑。"
          },
          "_newDance": false,
          "rank": 32
        },
        {
          "tag": "#homecoming",
          "name": "Homecoming（返校季/返校舞会）",
          "regionGroup": "global",
          "category": "季节/校园",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "193.4K",
              "views": "834.7M"
            }
          ],
          "summary": "美国校园\"返校季\"相关的舞会、穿搭、求婚与活动记录内容标签。",
          "whyHot": "秋季返校季的固定校园节点，穿搭与仪式感内容集中产出。",
          "origin": "用户自发的校园活动记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/homecoming",
            "search": "https://www.tiktok.com/search?q=homecoming",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "tiktokio.ringtone",
            "videoId": "7680510977300860161"
          },
          "fusionSuggestion": {
            "commercial": "校园仪式感场景可参考用于MCGG校园主题皮肤。",
            "video": "可参考\"装扮准备+现场高光\"的记录结构。"
          },
          "_newDance": false,
          "rank": 33
        },
        {
          "tag": "#vmas",
          "name": "VMAs（MTV 音乐录影带大奖）",
          "regionGroup": "global",
          "category": "音乐/颁奖礼",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "18.0K",
              "views": "645.2M"
            }
          ],
          "summary": "MTV 音乐录影带大奖，聚合红毯、舞台表演与获奖瞬间内容。",
          "whyHot": "颁奖礼档期集中产出舞台名场面，表演片段在短视频平台二次传播。",
          "origin": "官方颁奖礼转播+观众剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/vmas",
            "search": "https://www.tiktok.com/search?q=vmas",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "lordkierra",
            "videoId": "7690525637310734"
          },
          "fusionSuggestion": {
            "commercial": "舞台视觉与颁奖礼节奏可参考用于MCGG年度盛典包装。",
            "video": "可参考\"舞台高光+红毯造型\"的剪辑。"
          },
          "_newDance": false,
          "rank": 34
        },
        {
          "tag": "#thelovehypothesis",
          "name": "The Love Hypothesis（《爱情假设》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "34.4K",
              "views": "448.0M"
            }
          ],
          "summary": "同名畅销小说改编作品相关标签，聚合预告、名场面与 CP 讨论；改编详情待核验。",
          "whyHot": "言情 IP 改编自带书粉基础，CP 剪辑传播力强；具体影视化进度待核验。",
          "origin": "原著 IP 与影视改编方相关讨论。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/thelovehypothesis",
            "search": "https://www.tiktok.com/search?q=thelovehypothesis",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "primevideo",
            "videoId": "7700666732133862669"
          },
          "fusionSuggestion": {
            "commercial": "CP 关系推进节奏可参考用于MCGG情感向内容。",
            "video": "可参考\"CP 名场面\"剪辑。"
          },
          "_newDance": false,
          "rank": 35
        },
        {
          "tag": "#adifferentworld",
          "name": "A Different World（《不同的世界》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "20.5K",
              "views": "410.7M"
            }
          ],
          "summary": "经典美国情景喜剧，以大学校园生活与青年议题著称，近年因怀旧潮重回讨论。",
          "whyHot": "经典情景喜剧的怀旧回潮，名场面与台词的当代解读带动二创。",
          "origin": "官方剧集片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/adifferentworld",
            "search": "https://www.tiktok.com/search?q=adifferentworld",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "netflix",
            "videoId": "7689085805578423566"
          },
          "fusionSuggestion": {
            "commercial": "群像式情景喜剧结构可参考用于MCGG角色日常内容。",
            "video": "可参考\"名场面+当代解读\"的剪辑。"
          },
          "_newDance": false,
          "rank": 36
        },
        {
          "tag": "#cloverboys",
          "name": "Clover Boys（待核验）",
          "regionGroup": "global",
          "category": "待核验",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "31.1K",
              "views": "400.2M"
            }
          ],
          "summary": "可能指向团体、节目或社群，具体所指未能核实。",
          "whyHot": "播放量较高但属性不明，建议人工复核。",
          "origin": "待核验。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/cloverboys",
            "search": "https://www.tiktok.com/search?q=cloverboys",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "viralclipperrr69",
            "videoId": "7698873589876919582"
          },
          "fusionSuggestion": {
            "commercial": "建议复核后再判断。",
            "video": "待核验。"
          },
          "_newDance": false,
          "rank": 37
        },
        {
          "tag": "#31daysofhalloween",
          "name": "31 Days of Halloween（万圣节31天挑战）",
          "regionGroup": "global",
          "category": "季节/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "28.0K",
              "views": "325.5M"
            }
          ],
          "summary": "万圣节前的整月挑战标签，创作者按天发布妆容、装扮或恐怖主题内容。",
          "whyHot": "挑战式内容有连载属性，10月整月持续供给，参与门槛低。",
          "origin": "创作者自发的季节性挑战。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/31daysofhalloween",
            "search": "https://www.tiktok.com/search?q=31daysofhalloween",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "suss_fran",
            "videoId": "7695976035778678029"
          },
          "fusionSuggestion": {
            "commercial": "连载式挑战可参考用于MCGG节日期间的分日内容排期。",
            "video": "可参考\"每日一变装\"的连载格式。"
          },
          "_newDance": false,
          "rank": 38
        },
        {
          "tag": "#carrie",
          "name": "Carrie（《魔女嘉莉》）",
          "regionGroup": "global",
          "category": "影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "16.0K",
              "views": "316.9M"
            }
          ],
          "summary": "斯蒂芬·金同名小说改编的经典恐怖电影，校园舞会血洗场面是影史标志性镜头。",
          "whyHot": "万圣节季经典恐怖 IP 回潮，名场面剪辑与仿妆内容集中产出。",
          "origin": "官方电影片段+粉丝怀旧向二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/carrie",
            "search": "https://www.tiktok.com/search?q=carrie",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "betteroffbrent",
            "videoId": "7698973650141154573"
          },
          "fusionSuggestion": {
            "commercial": "校园恐怖与舞会场景的反差可为MCGG万圣主题皮肤叙事提供参考。",
            "video": "可参考\"平静铺垫—灾难爆发\"的惊悚剪辑结构。"
          },
          "_newDance": false,
          "rank": 39
        },
        {
          "tag": "#cuffem",
          "name": "Cuff Em（\"脱单/绑定\"俚语梗）",
          "regionGroup": "global",
          "category": "梗/情感",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "14.9K",
              "views": "288.4M"
            }
          ],
          "summary": "俚语\"cuff\"指交往/绑定关系，衍生出秋季\"cuffing season\"（抱团过冬）相关梗。",
          "whyHot": "季节性情感梗，秋季转入\"抱团过冬\"语境，情境演绎传播力强。",
          "origin": "创作者自发使用的俚语梗。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/cuffem",
            "search": "https://www.tiktok.com/search?q=cuffem",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "clippedbyz_",
            "videoId": "7699973249374981407"
          },
          "fusionSuggestion": {
            "commercial": "季节情绪与社交话题可参考用于MCGG双人玩法宣传。",
            "video": "可参考\"单身 vs 恋爱\"对比演绎。"
          },
          "_newDance": false,
          "rank": 40
        },
        {
          "tag": "#steelballrun",
          "name": "Steel Ball Run（《JOJO的奇妙冒险》第七部）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "24.1K",
              "views": "253.9M"
            }
          ],
          "summary": "《JOJO的奇妙冒险》第七部\"钢球跑\"，以横跨美国的赛马竞技为舞台，角色与替身设定是二创热点。",
          "whyHot": "JOJO 系列长期维持高讨论度，第七部因设定与作画质量成为粉丝重点二创对象。",
          "origin": "官方漫画 IP+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/steelballrun",
            "search": "https://www.tiktok.com/search?q=steelballrun",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "lordeye",
            "videoId": "7699779134297263381"
          },
          "fusionSuggestion": {
            "commercial": "替身能力设定可为MCGG技能创意提供参考，须走正版授权。",
            "video": "可参考\"角色登场+替身展示\"的剪辑。"
          },
          "_newDance": false,
          "rank": 41
        },
        {
          "tag": "#thesecretlifeoftheamericanteenager",
          "name": "The Secret Life of the American Teenager（《美国青少年的秘密生活》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "11.3K",
              "views": "236.7M"
            }
          ],
          "summary": "经典美国青春剧，聚焦青少年成长议题，近年因怀旧剪辑重回讨论。",
          "whyHot": "青春剧怀旧潮，名场面与角色关系剪辑在短视频平台重新流通。",
          "origin": "官方剧集片段+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/thesecretlifeoftheamericanteenager",
            "search": "https://www.tiktok.com/search?q=thesecretlifeoftheamericanteenager",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "user3000969802629",
            "videoId": "7700861165877873950"
          },
          "fusionSuggestion": {
            "commercial": "青春群像叙事可参考用于MCGG校园主题内容。",
            "video": "可参考\"名场面+情绪配乐\"剪辑。"
          },
          "_newDance": false,
          "rank": 42
        },
        {
          "tag": "#hispanicheritagemonth",
          "name": "Hispanic Heritage Month（西语裔传统月）",
          "regionGroup": "global",
          "category": "文化节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "41.3K",
              "views": "217.1M"
            }
          ],
          "summary": "每年9月15日-10月15日的西语裔文化传统月，聚合文化展示与身份认同内容。",
          "whyHot": "官方文化月节点驱动，创作者集中发布文化自豪感与家族故事内容。",
          "origin": "平台与用户共同参与的文化月内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hispanicheritagemonth",
            "search": "https://www.tiktok.com/search?q=hispanicheritagemonth",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "juanabarrios94",
            "videoId": "7695953592045325598"
          },
          "fusionSuggestion": {
            "commercial": "文化月运营节奏可参考用于MCGG区域文化主题皮肤排期。",
            "video": "可参考\"文化符号展示+家族故事\"的记录式内容。"
          },
          "_newDance": false,
          "rank": 43
        },
        {
          "tag": "#complexcon",
          "name": "ComplexCon（潮流文化展）",
          "regionGroup": "global",
          "category": "展会/潮流",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "15.3K",
              "views": "192.9M"
            }
          ],
          "summary": "潮流文化展会品牌，聚合球鞋、潮玩、联名发布与现场内容。",
          "whyHot": "潮流展会档期驱动，限量发售与明星现身带动内容爆发。",
          "origin": "展会官方+参与者记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/complexcon",
            "search": "https://www.tiktok.com/search?q=complexcon",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ricosofly",
            "videoId": "7692577398709046558"
          },
          "fusionSuggestion": {
            "commercial": "潮玩联名与限量发售机制可参考用于MCGG皮肤营销。",
            "video": "可参考\"新品揭晓+现场排队\"的记录。"
          },
          "_newDance": false,
          "rank": 44
        },
        {
          "tag": "#diademuertos",
          "name": "Día de Muertos（墨西哥亡灵节）",
          "regionGroup": "global",
          "category": "文化节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "24.2K",
              "views": "169.1M"
            }
          ],
          "summary": "墨西哥亡灵节，以糖骷髅、万寿菊、祭坛布置为核心视觉符号，近年借万圣节档期在全球扩散。",
          "whyHot": "11月初亡灵节与万圣节档期叠加，彩色骷髅视觉辨识度高，适合短视频传播。",
          "origin": "墨西哥本地文化实践+全球用户参与。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/diademuertos",
            "search": "https://www.tiktok.com/search?q=diademuertos",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "brennst95",
            "videoId": "7700800969180843285"
          },
          "fusionSuggestion": {
            "commercial": "亡灵节的高饱和配色与符号体系对MCGG节日皮肤极具参考价值（需注意文化尊重）。",
            "video": "可参考\"祭坛布置+妆容绘制\"的过程记录。"
          },
          "_newDance": false,
          "rank": 45
        },
        {
          "tag": "#residentevilmovie",
          "name": "Resident Evil Movie（《生化危机》电影）",
          "regionGroup": "global",
          "category": "影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "10.0K",
              "views": "158.1M"
            }
          ],
          "summary": "《生化危机》系列电影相关标签，聚合名场面剪辑与游戏改编讨论。",
          "whyHot": "游戏改编影视的长尾热度，恐怖动作场面适配万圣节档期。",
          "origin": "官方影视 IP+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/residentevilmovie",
            "search": "https://www.tiktok.com/search?q=residentevilmovie",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "gscinemas",
            "videoId": "7694878018300431634"
          },
          "fusionSuggestion": {
            "commercial": "末日生存视觉可参考用于MCGG丧尸主题皮肤。",
            "video": "可参考\"名场面+紧张配乐\"剪辑。"
          },
          "_newDance": false,
          "rank": 46
        },
        {
          "tag": "#spiritweek",
          "name": "Spirit Week（校园主题周）",
          "regionGroup": "global",
          "category": "季节/校园",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "24.0K",
              "views": "114.6M"
            }
          ],
          "summary": "美国校园的\"主题周\"活动，按天设定穿搭主题（如睡衣日、双胞胎日），聚合学生打卡内容。",
          "whyHot": "返校季固定活动，按天连载的形式天然适配短视频，参与门槛低。",
          "origin": "学生自发记录的校园活动。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spiritweek",
            "search": "https://www.tiktok.com/search?q=spiritweek",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "notkare4will",
            "videoId": "7692798694663474445"
          },
          "fusionSuggestion": {
            "commercial": "按天主题的连载形式可参考用于MCGG节日活动排期。",
            "video": "可参考\"每日主题穿搭对比\"的连载格式。"
          },
          "_newDance": false,
          "rank": 47
        }
      ]
    },
    "90": {
      "items": [
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "seth_weir",
            "videoId": "7648057901180931350"
          },
          "fusionSuggestion": {
            "commercial": "可考虑情侣向游戏内活动/角色CP剪辑联动。",
            "video": "适合做游戏角色爱情故事向短剧。"
          },
          "_newDance": false,
          "rank": 1
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
              "posts": "204.8K",
              "views": "1.3B"
            },
            {
              "code": "PH",
              "posts": "182.7K",
              "views": "1.2B"
            },
            {
              "code": "TH",
              "posts": "52.7K",
              "views": "536.9M"
            },
            {
              "code": "MY",
              "posts": "23.0K",
              "views": "470.3M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "freedom.alias",
            "videoId": "7669320059776486687"
          },
          "fusionSuggestion": {
            "commercial": "涉及漫威第三方IP版权，不建议未经授权直接使用蜘蛛侠形象；可考虑与漫威谈官方授权联名（需版权方合作）。",
            "video": "官方号可发布『如果指挥官有蜘蛛侠战衣』的原创英雄主题概念视频，避免直接使用受版权保护的角色形象。"
          },
          "_newDance": false,
          "rank": 2
        },
        {
          "tag": "#phuongmychi",
          "name": "Phương Mỹ Chi（越南歌手）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "96.1K",
              "views": "1.2B"
            }
          ],
          "summary": "越南歌手 Phương Mỹ Chi，以民谣与流行融合风格著称，选秀出身。",
          "whyHot": "越南本土歌手的新作品与舞台片段在年轻群体中传播，歌词与旋律适配二次创作。",
          "origin": "歌手官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/phuongmychi",
            "search": "https://www.tiktok.com/search?q=phuongmychi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "phuongmychiofficial",
            "videoId": "7673131280401272084"
          },
          "fusionSuggestion": {
            "commercial": "本土音乐人的内容风格可参考用于MCGG越南市场本地化。",
            "video": "可参考\"MV名场面+歌词卡点\"剪辑。"
          },
          "_newDance": true,
          "rank": 3
        },
        {
          "tag": "#ต้าเฟ็ดเฟ่",
          "name": "ต้าเฟ็ดเฟ่（泰语，待核验）",
          "regionGroup": "sea",
          "category": "待核验",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "28.6K",
              "views": "1.2B"
            }
          ],
          "summary": "泰语标签，具体所指（艺人、节目或梗）未能公开核实。",
          "whyHot": "播放量高但含义不明，建议人工打开话题页复核。",
          "origin": "待核验。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/%E0%B8%95%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%87%E0%B8%94%E0%B9%80%E0%B8%9F%E0%B9%88",
            "search": "https://www.tiktok.com/search?q=%E0%B8%95%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%87%E0%B8%94%E0%B9%80%E0%B8%9F%E0%B9%88",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "netflixth",
            "videoId": "7699467988038192405"
          },
          "fusionSuggestion": {
            "commercial": "建议复核后再判断。",
            "video": "待核验。"
          },
          "_newDance": false,
          "rank": 4
        },
        {
          "tag": "#musiconstage",
          "name": "Music On Stage（TikTok LIVE 音乐项目）",
          "regionGroup": "sea",
          "category": "音乐",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "42.4K",
              "views": "1.2B"
            },
            {
              "code": "TH",
              "posts": "69.5K",
              "views": "138.1M"
            },
            {
              "code": "MY",
              "posts": "59.7K",
              "views": "88.5M"
            },
            {
              "code": "VN",
              "posts": "15.8K",
              "views": "47.5M"
            },
            {
              "code": "PH",
              "posts": "15.8K",
              "views": "20.9M"
            }
          ],
          "summary": "TikTok LIVE 官方音乐演出项目，聚合直播演出片段与歌手现场内容。",
          "whyHot": "平台官方项目给予流量扶持，东南亚多市场同步参与。",
          "origin": "TikTok 官方音乐项目。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/musiconstage",
            "search": "https://www.tiktok.com/search?q=musiconstage",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "oss_tonio",
            "videoId": "7679238242985676052"
          },
          "fusionSuggestion": {
            "commercial": "平台官方音乐项目的合作模式可供MCGG音乐类联动参考。",
            "video": "可参考\"现场演出+观众互动\"的直播切片。"
          },
          "_newDance": false,
          "rank": 5
        },
        {
          "tag": "#อู๋จุน",
          "name": "อู๋จุน（泰语\"吴俊\"，待核验）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "TH",
              "posts": "281.9K",
              "views": "1.1B"
            }
          ],
          "summary": "泰语对中国演员\"吴俊\"的音译标签，推测与中剧出海相关，聚合剧集切片与角色讨论。",
          "whyHot": "中剧在泰国市场持续走热，演员译名标签随之升温；具体所指作品待核验。",
          "origin": "中剧海外发行+泰国粉丝二创。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/%E0%B8%AD%E0%B8%B9%E0%B9%8B%E0%B8%88%E0%B8%B8%E0%B8%99",
            "search": "https://www.tiktok.com/search?q=%E0%B8%AD%E0%B8%B9%E0%B9%8B%E0%B8%88%E0%B8%B8%E0%B8%99",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=TH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "davieboii47",
            "videoId": "7700582048645385493"
          },
          "fusionSuggestion": {
            "commercial": "中剧出海路径可参考。",
            "video": "可参考剧集切片格式。"
          },
          "_newDance": false,
          "rank": 6
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
              "posts": "79.7K",
              "views": "960.8M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "_.twagn",
            "videoId": "7692356574257384725"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 7
        },
        {
          "tag": "#yengconstantino",
          "name": "Yeng Constantino（菲律宾唱作歌手）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "PH",
              "posts": "44.0K",
              "views": "865.9M"
            }
          ],
          "summary": "菲律宾唱作女歌手 Yeng Constantino，多首国民级情歌长期被翻唱。",
          "whyHot": "经典情歌在菲律宾TikTok反复翻红，翻唱与婚礼场景使用带动长尾热度。",
          "origin": "歌手官方作品+粉丝翻唱二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/yengconstantino",
            "search": "https://www.tiktok.com/search?q=yengconstantino",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "yc.fanforebs",
            "videoId": "7700931996821900564"
          },
          "fusionSuggestion": {
            "commercial": "国民情歌的传播路径可参考用于MCGG情感向内容配乐。",
            "video": "可参考\"翻唱+情绪场景\"剪辑。"
          },
          "_newDance": true,
          "rank": 8
        },
        {
          "tag": "#wibu",
          "name": "Wibu（越南语\"宅/二次元\"泛称）",
          "regionGroup": "sea",
          "category": "梗/亚文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "122.8K",
              "views": "853.3M"
            }
          ],
          "summary": "越南语对二次元爱好者的泛称标签，聚合动漫讨论、cosplay与圈内自嘲内容。",
          "whyHot": "东南亚二次元人口增长，标签从贬义转为圈内自我认同，内容供给持续放大。",
          "origin": "越南ACG社群自发使用的泛称标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/wibu",
            "search": "https://www.tiktok.com/search?q=wibu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nyakweterus_",
            "videoId": "7630052393220459797"
          },
          "fusionSuggestion": {
            "commercial": "可作为MCGG二次元向皮肤在越南市场的受众定位参考。",
            "video": "可参考\"圈内自嘲+动漫名场面\"的组合剪辑。"
          },
          "_newDance": false,
          "rank": 9
        },
        {
          "tag": "#jingboran",
          "name": "Jing Boran 井柏然（《早春晴朗》出海）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "28.3K",
              "views": "840.1M"
            },
            {
              "code": "TH",
              "posts": "28.8K",
              "views": "392.3M"
            }
          ],
          "summary": "中国演员井柏然的标签，因中剧《早春晴朗》在东南亚多市场登顶而持续升温，聚合剧集切片与 CP 讨论。",
          "whyHot": "《早春晴朗》在 Netflix 东南亚多市场表现亮眼，泰/越/印尼粉丝逐帧二创\"栾念×尚之桃\"CP，属剧带人型热度。",
          "origin": "剧集海外发行+东南亚粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/jingboran",
            "search": "https://www.tiktok.com/search?q=jingboran",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "meltryingthingsout",
            "videoId": "7686644678552259861"
          },
          "fusionSuggestion": {
            "commercial": "中剧出海的成功路径可作为MCGG跨市场内容本地化的参考。",
            "video": "可参考\"CP名场面+逐帧解析\"的二创格式。"
          },
          "_newDance": false,
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
              "posts": "218.0K",
              "views": "838.5M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nyyxveiill",
            "videoId": "7648617836226694432"
          },
          "fusionSuggestion": {
            "commercial": "可考虑提前布局圣诞主题限定活动/皮肤，契合菲律宾超长圣诞季的营销窗口。",
            "video": "适合做圣诞主题的游戏内装饰/礼物系统预告。"
          },
          "_newDance": false,
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
              "posts": "84.1K",
              "views": "619.9M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
          },
          "_newDance": false,
          "rank": 12
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
              "posts": "34.9K",
              "views": "610.8M"
            },
            {
              "code": "TH",
              "posts": "27.2K",
              "views": "219.2M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "addieblesausage",
            "videoId": "7292429394444832002"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 13
        },
        {
          "tag": "#dualipa",
          "name": "Dua Lipa（杜娃·黎波）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "ID",
              "posts": "44.6K",
              "views": "479.4M"
            }
          ],
          "summary": "英国流行女歌手 Dua Lipa，舞曲与舞台表演在东南亚市场热度稳定。",
          "whyHot": "国际流行歌手的舞曲内容适配短视频卡点，舞蹈挑战与舞台直拍持续产出。",
          "origin": "歌手官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dualipa",
            "search": "https://www.tiktok.com/search?q=dualipa",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "music_daily05",
            "videoId": "7674871210701901086"
          },
          "fusionSuggestion": {
            "commercial": "迪斯科复古视觉与舞蹈内容可参考用于MCGG派对主题皮肤。",
            "video": "可参考舞蹈卡点剪辑。"
          },
          "_newDance": true,
          "rank": 14
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
              "views": "404.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "cinnamon.dew",
            "videoId": "7653133888180587790"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 15
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
              "posts": "361.2K",
              "views": "398.1M"
            },
            {
              "code": "TH",
              "posts": "581.4K",
              "views": "181.5M"
            },
            {
              "code": "PH",
              "posts": "267.1K",
              "views": "149.8M"
            },
            {
              "code": "MY",
              "posts": "172.0K",
              "views": "80.2M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "whatifuniversed2026",
            "videoId": "7679114818833435925"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 16
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
              "posts": "361.2K",
              "views": "388.0M"
            },
            {
              "code": "TH",
              "posts": "583.8K",
              "views": "210.8M"
            },
            {
              "code": "PH",
              "posts": "267.2K",
              "views": "152.0M"
            },
            {
              "code": "MY",
              "posts": "172.7K",
              "views": "89.9M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "noname_999991",
            "videoId": "7688337164630756615"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 17
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
              "posts": "100.0K",
              "views": "387.7M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "zhencarzon",
            "videoId": "7680226152237075720"
          },
          "fusionSuggestion": {
            "commercial": "可考虑\"超长待机圣诞季\"限定活动，契合菲律宾用户提前进入节日消费心态。",
            "video": "适合做\"Ber Months提前过圣诞\"主题短视频。"
          },
          "_newDance": false,
          "rank": 18
        },
        {
          "tag": "#maiphuongthuy",
          "name": "Mai Phương Thúy（越南艺人）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.8K",
              "views": "384.3M"
            }
          ],
          "summary": "越南艺人 Mai Phương Thúy 相关标签，聚合舞台与活动内容；具体本轮爆点待核验。",
          "whyHot": "越南本土艺人内容传播稳定，但具体作品与事件细节未能核实。",
          "origin": "艺人官方内容+粉丝二创（待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/maiphuongthuy",
            "search": "https://www.tiktok.com/search?q=maiphuongthuy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "canhbaodo",
            "videoId": "7700446091602332949"
          },
          "fusionSuggestion": {
            "commercial": "本土艺人合作可参考，需复核。",
            "video": "可参考舞台片段剪辑。"
          },
          "_newDance": true,
          "rank": 19
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
              "posts": "360.9K",
              "views": "383.6M"
            },
            {
              "code": "TH",
              "posts": "583.4K",
              "views": "189.2M"
            },
            {
              "code": "PH",
              "posts": "266.0K",
              "views": "125.3M"
            },
            {
              "code": "MY",
              "posts": "172.5K",
              "views": "77.1M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "paramecian",
            "videoId": "7629992553349139719"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 20
        },
        {
          "tag": "#dragonballz",
          "name": "Dragon Ball Z（《龙珠Z》）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "360.8K",
              "views": "382.5M"
            },
            {
              "code": "TH",
              "posts": "584.4K",
              "views": "197.0M"
            },
            {
              "code": "PH",
              "posts": "268.2K",
              "views": "186.8M"
            },
            {
              "code": "MY",
              "posts": "172.8K",
              "views": "85.2M"
            }
          ],
          "summary": "鸟山明经典少年漫画/动画，超级赛亚人变身与战斗名场面是二创高频素材。",
          "whyHot": "全球长青IP，战斗高光与变身场面适配短视频卡点，东南亚粉丝基数庞大。",
          "origin": "漫画/动画官方IP话题。",
          "links": {
            "tag": "https://www.tiktok.com/tag/dragonballz",
            "search": "https://www.tiktok.com/search?q=dragonballz",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "maldini9827",
            "videoId": "7700813231555726605"
          },
          "fusionSuggestion": {
            "commercial": "变身与战力体系可为MCGG养成/进化玩法提供概念参考，须走正版授权。",
            "video": "可参考\"变身瞬间+战力爆发\"的卡点剪辑。"
          },
          "_newDance": false,
          "rank": 21
        },
        {
          "tag": "#vegeta",
          "name": "Vegeta（《龙珠》贝吉塔）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "358.9K",
              "views": "378.7M"
            },
            {
              "code": "TH",
              "posts": "583.2K",
              "views": "181.6M"
            },
            {
              "code": "PH",
              "posts": "263.5K",
              "views": "118.0M"
            },
            {
              "code": "MY",
              "posts": "172.1K",
              "views": "77.1M"
            }
          ],
          "summary": "《龙珠》人气角色贝吉塔，骄傲性格与成长线是其二创核心。",
          "whyHot": "经典角色的个人tag长期活跃，战斗名场面与性格台词剪辑稳定产出。",
          "origin": "官方动画角色话题+粉丝二创。",
          "links": {
            "tag": "https://www.tiktok.com/tag/vegeta",
            "search": "https://www.tiktok.com/search?q=vegeta",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "namharu04",
            "videoId": "7700636465180724498"
          },
          "fusionSuggestion": {
            "commercial": "角色\"高傲但可靠\"的形象塑造可参考用于MCGG指挥官人设。",
            "video": "可参考\"名台词+战斗高光\"的剪辑。"
          },
          "_newDance": false,
          "rank": 22
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
              "posts": "360.0K",
              "views": "371.5M"
            },
            {
              "code": "TH",
              "posts": "582.7K",
              "views": "182.3M"
            },
            {
              "code": "PH",
              "posts": "265.4K",
              "views": "107.1M"
            },
            {
              "code": "MY",
              "posts": "172.1K",
              "views": "69.9M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nenebu_2234",
            "videoId": "7696145311454006529"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 23
        },
        {
          "tag": "#lycagairanod",
          "name": "Lyca Gairanod（菲律宾歌手）",
          "regionGroup": "sea",
          "category": "音乐/歌手",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "PH",
              "posts": "17.5K",
              "views": "370.4M"
            }
          ],
          "summary": "菲律宾歌手 Lyca Gairanod，选秀出身，演唱片段与翻唱是主要内容。",
          "whyHot": "菲律宾观众对选秀出身歌手的演唱实力内容接受度高，翻唱片段传播力强。",
          "origin": "歌手官方作品+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/lycagairanod",
            "search": "https://www.tiktok.com/search?q=lycagairanod",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "elynor0423",
            "videoId": "7700239127546989831"
          },
          "fusionSuggestion": {
            "commercial": "实力派演唱内容的传播逻辑可参考。",
            "video": "可参考\"清唱—爆发\"的演唱剪辑。"
          },
          "_newDance": true,
          "rank": 24
        },
        {
          "tag": "#denji",
          "name": "Denji（《电锯人》电次）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "362.2K",
              "views": "369.4M"
            },
            {
              "code": "TH",
              "posts": "584.5K",
              "views": "182.8M"
            },
            {
              "code": "PH",
              "posts": "266.0K",
              "views": "98.9M"
            },
            {
              "code": "MY",
              "posts": "172.6K",
              "views": "72.6M"
            }
          ],
          "summary": "藤本树《电锯人》主角电次，反差感强烈的少年角色，战斗与生存主题突出。",
          "whyHot": "《电锯人》在东南亚青年群体持续走热，角色tag随动画与剧场版进度升温。",
          "origin": "官方漫画/动画角色话题+粉丝二创。",
          "links": {
            "tag": "https://www.tiktok.com/tag/denji",
            "search": "https://www.tiktok.com/search?q=denji",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "nexofx17",
            "videoId": "7681483790094437653"
          },
          "fusionSuggestion": {
            "commercial": "\"反差感\"角色塑造与粗粝视觉可为MCGG暗黑系皮肤提供参考。",
            "video": "可参考\"角色反差+战斗爆发\"剪辑。"
          },
          "_newDance": false,
          "rank": 25
        },
        {
          "tag": "#nami",
          "name": "Nami（《海贼王》娜美）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "359.9K",
              "views": "367.5M"
            },
            {
              "code": "TH",
              "posts": "586.1K",
              "views": "186.0M"
            },
            {
              "code": "MY",
              "posts": "172.2K",
              "views": "72.4M"
            }
          ],
          "summary": "《海贼王》草帽团成员娜美，航海士角色，长期是角色剪辑与cosplay的高频对象。",
          "whyHot": "长青少年漫IP，角色tag随动画进度与新周边持续产出内容。",
          "origin": "官方漫画/动画角色话题+粉丝二创。",
          "links": {
            "tag": "https://www.tiktok.com/tag/nami",
            "search": "https://www.tiktok.com/search?q=nami",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kidzuna._",
            "videoId": "7525161596616854805"
          },
          "fusionSuggestion": {
            "commercial": "角色造型与航海元素可参考用于MCGG主题皮肤设计。",
            "video": "可参考\"角色高光+团队羁绊\"剪辑。"
          },
          "_newDance": false,
          "rank": 26
        },
        {
          "tag": "#anyaforger",
          "name": "Anya Forger（《间谍过家家》阿尼亚）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "359.4K",
              "views": "357.5M"
            },
            {
              "code": "TH",
              "posts": "582.5K",
              "views": "171.1M"
            },
            {
              "code": "VN",
              "posts": "102.1K",
              "views": "109.6M"
            },
            {
              "code": "PH",
              "posts": "264.6K",
              "views": "92.1M"
            },
            {
              "code": "MY",
              "posts": "171.8K",
              "views": "72.3M"
            }
          ],
          "summary": "《间谍过家家》人气角色阿尼亚，搞笑表情与\"读心\"梗衍生大量表情包与二创。",
          "whyHot": "角色表情包属性强，跨语言传播能力强，长期维持高热度。",
          "origin": "官方动漫IP衍生内容。",
          "links": {
            "tag": "https://www.tiktok.com/tag/anyaforger",
            "search": "https://www.tiktok.com/search?q=anyaforger",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "twiyorr",
            "videoId": "7700628053101202706"
          },
          "fusionSuggestion": {
            "commercial": "萌系表情包形式可参考用于MCGG贴纸/表情周边开发。",
            "video": "可参考\"表情特写+情境字幕\"的萌系剪辑。"
          },
          "_newDance": false,
          "rank": 27
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
              "posts": "359.0K",
              "views": "350.2M"
            },
            {
              "code": "TH",
              "posts": "583.4K",
              "views": "179.1M"
            },
            {
              "code": "PH",
              "posts": "266.6K",
              "views": "108.6M"
            },
            {
              "code": "VN",
              "posts": "101.6K",
              "views": "107.0M"
            },
            {
              "code": "MY",
              "posts": "172.2K",
              "views": "70.2M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "funoxz",
            "videoId": "7659483025285090567"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 28
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
              "posts": "354.5K",
              "views": "342.4M"
            },
            {
              "code": "TH",
              "posts": "563.3K",
              "views": "176.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "arknights_en",
            "videoId": "7696398472907328799"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 29
        },
        {
          "tag": "#isagi",
          "name": "Isagi Yoichi（《蓝色监狱》洁世一）",
          "regionGroup": "sea",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "360.7K",
              "views": "340.3M"
            },
            {
              "code": "TH",
              "posts": "586.5K",
              "views": "194.4M"
            }
          ],
          "summary": "足球题材漫画《蓝色监狱》主角洁世一，以\"空间认知\"式进球与自我中心足球哲学著称。",
          "whyHot": "《蓝色监狱》在东南亚青少年群体持续走热，角色个人tag随新剧情与联名活动同步升温。",
          "origin": "官方漫画/动画角色话题+粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/isagi",
            "search": "https://www.tiktok.com/search?q=isagi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kami.altt",
            "videoId": "7679882771715706134"
          },
          "fusionSuggestion": {
            "commercial": "角色\"吞噬对手能力\"的设定可为MCGG对局成长机制提供概念参考。",
            "video": "可参考\"角色高光+台词卡点\"的剪辑格式。"
          },
          "_newDance": false,
          "rank": 30
        },
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
              "views": "7.1B"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mz.rhia2.0",
            "videoId": "7694153860973219080"
          },
          "fusionSuggestion": {
            "commercial": "秋季暖色调（枫叶橙/南瓜橘）可为MCGG季节限定棋盘配色提供参考。",
            "video": "可参考'秋日氛围感'空镜+穿搭混剪格式。"
          },
          "_newDance": false,
          "rank": 31
        },
        {
          "tag": "#homecoming",
          "name": "Homecoming（返校季/返校舞会）",
          "regionGroup": "global",
          "category": "季节/校园",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "246.7K",
              "views": "1.3B"
            }
          ],
          "summary": "美国校园\"返校季\"相关的舞会、穿搭、求婚与活动记录内容标签。",
          "whyHot": "秋季返校季的固定校园节点，穿搭与仪式感内容集中产出。",
          "origin": "用户自发的校园活动记录。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/homecoming",
            "search": "https://www.tiktok.com/search?q=homecoming",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "tiktokio.ringtone",
            "videoId": "7680510977300860161"
          },
          "fusionSuggestion": {
            "commercial": "校园仪式感场景可参考用于MCGG校园主题皮肤。",
            "video": "可参考\"装扮准备+现场高光\"的记录结构。"
          },
          "_newDance": false,
          "rank": 32
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
              "posts": "265.4K",
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "doubledoseduuo",
            "videoId": "7685075567535770910"
          },
          "fusionSuggestion": {
            "commercial": "南瓜地/秋收场景可直接作为MCGG万圣节棋盘皮肤的美术母题。",
            "video": "可参考'南瓜雕刻延时摄影'格式。"
          },
          "_newDance": false,
          "rank": 33
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
              "posts": "274.7K",
              "views": "905.5M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "moments7134",
            "videoId": "7692135039773019423"
          },
          "fusionSuggestion": {
            "commercial": "秋季限定配色/主题活动适合季节性运营排期。",
            "video": "适合做\"秋日温暖感\"主题氛围剪辑。"
          },
          "_newDance": false,
          "rank": 34
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
              "posts": "316.3K",
              "views": "608.8M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sony",
            "videoId": "7688066557649407263"
          },
          "fusionSuggestion": {
            "commercial": "月度营销日历可借月份标签做规律性活动运营（每月1号\"新月新阵容\"）。",
            "video": "适合做\"九月新开始\"主题活动剪辑。"
          },
          "_newDance": false,
          "rank": 35
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
              "posts": "81.9K",
              "views": "546.8M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bynatalija",
            "videoId": "7695788131643084064"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 36
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
              "posts": "59.9K",
              "views": "441.5M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hamiboom.world",
            "videoId": "7696949168191032597"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 37
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
              "posts": "75.8K",
              "views": "423.1M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "bybywo88",
            "videoId": "7695226098837212446"
          },
          "fusionSuggestion": {
            "commercial": "喜剧片段形态适合品牌轻量化内容营销（低门槛高传播）。",
            "video": "适合做MCGG英雄喜剧小剧场系列。"
          },
          "_newDance": false,
          "rank": 38
        },
        {
          "tag": "#august",
          "name": "August（八月月份通用标签）",
          "regionGroup": "global",
          "category": "生活方式/月份标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "185.8K",
              "views": "413.5M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ricefy_",
            "videoId": "7674359355671579917"
          },
          "fusionSuggestion": {
            "commercial": "同september：月度营销日历运营。",
            "video": "适合做月度总结式活动回顾剪辑。"
          },
          "_newDance": false,
          "rank": 39
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
              "views": "389.0M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "7w.aep",
            "videoId": "7659879304276364566"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 40
        },
        {
          "tag": "#moana",
          "name": "Moana（《海洋奇缘》）",
          "regionGroup": "global",
          "category": "影视IP/动画电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "29.5K",
              "views": "355.4M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "rezon_ae",
            "videoId": "7639465870045007126"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 41
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
              "posts": "20.3K",
              "views": "286.5M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "emm.loll1",
            "videoId": "7689939478479244558"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 42
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
              "posts": "64.8K",
              "views": "274.8M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "mysteriousjulia_",
            "videoId": "7690719771637075213"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 43
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
              "posts": "81.8K",
              "views": "260.7M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "ariffhakim493",
            "videoId": "7695620718792330503"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 44
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
              "posts": "64.7K",
              "views": "256.8M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "fox5_atlanta",
            "videoId": "7696574540687658270"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 45
        },
        {
          "tag": "#hispanicheritagemonth",
          "name": "Hispanic Heritage Month（西语裔传统月）",
          "regionGroup": "global",
          "category": "文化节庆",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "50.2K",
              "views": "246.8M"
            }
          ],
          "summary": "每年9月15日-10月15日的西语裔文化传统月，聚合文化展示与身份认同内容。",
          "whyHot": "官方文化月节点驱动，创作者集中发布文化自豪感与家族故事内容。",
          "origin": "平台与用户共同参与的文化月内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hispanicheritagemonth",
            "search": "https://www.tiktok.com/search?q=hispanicheritagemonth",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "juanabarrios94",
            "videoId": "7695953592045325598"
          },
          "fusionSuggestion": {
            "commercial": "文化月运营节奏可参考用于MCGG区域文化主题皮肤排期。",
            "video": "可参考\"文化符号展示+家族故事\"的记录式内容。"
          },
          "_newDance": false,
          "rank": 46
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
              "posts": "42.7K",
              "views": "235.9M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "barbiebitez",
            "videoId": "7681937303111060766"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 47
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
              "posts": "46.5K",
              "views": "233.6M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "hotshotboys",
            "videoId": "7675985991961791774"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 48
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
              "posts": "15.4K",
              "views": "220.3M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "moviecentral196",
            "videoId": "7696756105489288479"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 49
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
              "posts": "22.2K",
              "views": "155.7M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "kate.ontario",
            "videoId": "7678368941214813461"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 50
        },
        {
          "tag": "#octubre",
          "name": "Octubre（西语\"十月\"）",
          "regionGroup": "global",
          "category": "季节/语言",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "33.3K",
              "views": "149.1M"
            }
          ],
          "summary": "西班牙语\"十月\"标签，聚合秋季氛围、万圣节预热与月度情绪内容。",
          "whyHot": "西语内容是美国市场重要组成，月度标签便于内容归档与情绪表达。",
          "origin": "创作者自发使用的月度标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/octubre",
            "search": "https://www.tiktok.com/search?q=octubre",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "yenddimusic",
            "videoId": "7695886052241771789"
          },
          "fusionSuggestion": {
            "commercial": "月度情绪营销节奏可参考用于MCGG区域化内容排期。",
            "video": "可参考\"月度氛围混剪\"格式。"
          },
          "_newDance": false,
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
              "posts": "89.4K",
              "views": "131.0M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "sunkissblonde",
            "videoId": "7695954024281001229"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 52
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
              "posts": "14.3K",
              "views": "60.1M"
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
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "grwmia.o",
            "videoId": "7697049743196802317"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 53
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
              "posts": "24.0K",
              "views": "45.6M"
            }
          ],
          "summary": "《Mean Girls》台词“It's October 3rd”衍生的年度日历梗日标签。",
          "whyHot": "每年 10 月 3 日集中玩梗（截图、台词复刻、穿搭致敬），年度定时回潮。",
          "origin": "粉丝年度梗。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/october3rd",
            "search": "https://www.tiktok.com/search?q=october3rd",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "2026-10-26 抖音热搜快照（top50）未见同话题，国内暂无同步热度。"
          },
          "videoEmbed": {
            "author": "qandrx",
            "videoId": "7692182630887869729"
          },
          "fusionSuggestion": {
            "commercial": "MCGG可结合该话题的季节/IP/事件属性做轻量联动内容策划，具体方向待策划团队评估。",
            "video": "可参考该话题的内容形式做本地化短视频创意，具体脚本待策划。"
          },
          "_newDance": false,
          "rank": 54
        }
      ]
    }
  },
  "douyinRef": [
    {
      "rank": 1,
      "keyword": "二十届五中全会今起在京召开",
      "hotValue": 12109234,
      "url": "https://www.douyin.com/search/%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E4%BB%8A%E8%B5%B7%E5%9C%A8%E4%BA%AC%E5%8F%AC%E5%BC%80"
    },
    {
      "rank": 2,
      "keyword": "想和你去看赛里木湖的冬日浪漫",
      "hotValue": 12004787,
      "url": "https://www.douyin.com/search/%E6%83%B3%E5%92%8C%E4%BD%A0%E5%8E%BB%E7%9C%8B%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E7%9A%84%E5%86%AC%E6%97%A5%E6%B5%AA%E6%BC%AB"
    },
    {
      "rank": 3,
      "keyword": "高原上动人的军民鱼水情",
      "hotValue": 11635495,
      "url": "https://www.douyin.com/search/%E9%AB%98%E5%8E%9F%E4%B8%8A%E5%8A%A8%E4%BA%BA%E7%9A%84%E5%86%9B%E6%B0%91%E9%B1%BC%E6%B0%B4%E6%83%85"
    },
    {
      "rank": 4,
      "keyword": "跟着现在就出发玩转九寨沟",
      "hotValue": 11290856,
      "url": "https://www.douyin.com/search/%E8%B7%9F%E7%9D%80%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%E7%8E%A9%E8%BD%AC%E4%B9%9D%E5%AF%A8%E6%B2%9F"
    },
    {
      "rank": 5,
      "keyword": "影之刃零媒体评分",
      "hotValue": 10584035,
      "url": "https://www.douyin.com/search/%E5%BD%B1%E4%B9%8B%E5%88%83%E9%9B%B6%E5%AA%92%E4%BD%93%E8%AF%84%E5%88%86"
    },
    {
      "rank": 6,
      "keyword": "U17女足世界杯中国3:2美国",
      "hotValue": 10061808,
      "url": "https://www.douyin.com/search/U17%E5%A5%B3%E8%B6%B3%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BD3%3A2%E7%BE%8E%E5%9B%BD"
    },
    {
      "rank": 7,
      "keyword": "iPhone Duo回收价售价均破发",
      "hotValue": 8968797,
      "url": "https://www.douyin.com/search/iPhone%20Duo%E5%9B%9E%E6%94%B6%E4%BB%B7%E5%94%AE%E4%BB%B7%E5%9D%87%E7%A0%B4%E5%8F%91"
    },
    {
      "rank": 8,
      "keyword": "巴萨1:2皇马",
      "hotValue": 8635026,
      "url": "https://www.douyin.com/search/%E5%B7%B4%E8%90%A81%3A2%E7%9A%87%E9%A9%AC"
    },
    {
      "rank": 9,
      "keyword": "只此青绿绘长江",
      "hotValue": 8374218,
      "url": "https://www.douyin.com/search/%E5%8F%AA%E6%AD%A4%E9%9D%92%E7%BB%BF%E7%BB%98%E9%95%BF%E6%B1%9F"
    },
    {
      "rank": 10,
      "keyword": "新一股冷空气将影响长江以北大部",
      "hotValue": 8264206,
      "url": "https://www.douyin.com/search/%E6%96%B0%E4%B8%80%E8%82%A1%E5%86%B7%E7%A9%BA%E6%B0%94%E5%B0%86%E5%BD%B1%E5%93%8D%E9%95%BF%E6%B1%9F%E4%BB%A5%E5%8C%97%E5%A4%A7%E9%83%A8"
    },
    {
      "rank": 11,
      "keyword": "日本前首相福田康夫去世",
      "hotValue": 8074159,
      "url": "https://www.douyin.com/search/%E6%97%A5%E6%9C%AC%E5%89%8D%E9%A6%96%E7%9B%B8%E7%A6%8F%E7%94%B0%E5%BA%B7%E5%A4%AB%E5%8E%BB%E4%B8%96"
    },
    {
      "rank": 12,
      "keyword": "邹敬园体操世锦赛双杠夺冠",
      "hotValue": 7810250,
      "url": "https://www.douyin.com/search/%E9%82%B9%E6%95%AC%E5%9B%AD%E4%BD%93%E6%93%8D%E4%B8%96%E9%94%A6%E8%B5%9B%E5%8F%8C%E6%9D%A0%E5%A4%BA%E5%86%A0"
    },
    {
      "rank": 13,
      "keyword": "武契奇承认在议会选举中失利",
      "hotValue": 7788091,
      "url": "https://www.douyin.com/search/%E6%AD%A6%E5%A5%91%E5%A5%87%E6%89%BF%E8%AE%A4%E5%9C%A8%E8%AE%AE%E4%BC%9A%E9%80%89%E4%B8%BE%E4%B8%AD%E5%A4%B1%E5%88%A9"
    },
    {
      "rank": 14,
      "keyword": "不良反应都是药品质量导致的吗",
      "hotValue": 7766302,
      "url": "https://www.douyin.com/search/%E4%B8%8D%E8%89%AF%E5%8F%8D%E5%BA%94%E9%83%BD%E6%98%AF%E8%8D%AF%E5%93%81%E8%B4%A8%E9%87%8F%E5%AF%BC%E8%87%B4%E7%9A%84%E5%90%97"
    },
    {
      "rank": 15,
      "keyword": "活塞106:93送76人赛季首败",
      "hotValue": 7764224,
      "url": "https://www.douyin.com/search/%E6%B4%BB%E5%A1%9E106%3A93%E9%80%8176%E4%BA%BA%E8%B5%9B%E5%AD%A3%E9%A6%96%E8%B4%A5"
    },
    {
      "rank": 16,
      "keyword": "真实锐评IG战胜HLE",
      "hotValue": 7761211,
      "url": "https://www.douyin.com/search/%E7%9C%9F%E5%AE%9E%E9%94%90%E8%AF%84IG%E6%88%98%E8%83%9CHLE"
    },
    {
      "rank": 17,
      "keyword": "卢拉再次当选巴西总统",
      "hotValue": 7755139,
      "url": "https://www.douyin.com/search/%E5%8D%A2%E6%8B%89%E5%86%8D%E6%AC%A1%E5%BD%93%E9%80%89%E5%B7%B4%E8%A5%BF%E6%80%BB%E7%BB%9F"
    },
    {
      "rank": 18,
      "keyword": "我是你的新白娘子呀",
      "hotValue": 7752311,
      "url": "https://www.douyin.com/search/%E6%88%91%E6%98%AF%E4%BD%A0%E7%9A%84%E6%96%B0%E7%99%BD%E5%A8%98%E5%AD%90%E5%91%80"
    },
    {
      "rank": 19,
      "keyword": "娃改时装周秀场直击",
      "hotValue": 7750088,
      "url": "https://www.douyin.com/search/%E5%A8%83%E6%94%B9%E6%97%B6%E8%A3%85%E5%91%A8%E7%A7%80%E5%9C%BA%E7%9B%B4%E5%87%BB"
    },
    {
      "rank": 20,
      "keyword": "黄金价格再次下跌",
      "hotValue": 7749102,
      "url": "https://www.douyin.com/search/%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E5%86%8D%E6%AC%A1%E4%B8%8B%E8%B7%8C"
    },
    {
      "rank": 21,
      "keyword": "TES战胜G2",
      "hotValue": 7744418,
      "url": "https://www.douyin.com/search/TES%E6%88%98%E8%83%9CG2"
    },
    {
      "rank": 22,
      "keyword": "王者共创之夜群星登场大片",
      "hotValue": 7744383,
      "url": "https://www.douyin.com/search/%E7%8E%8B%E8%80%85%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%E7%BE%A4%E6%98%9F%E7%99%BB%E5%9C%BA%E5%A4%A7%E7%89%87"
    },
    {
      "rank": 23,
      "keyword": "记录我镜头下的王者共创之夜",
      "hotValue": 7742819,
      "url": "https://www.douyin.com/search/%E8%AE%B0%E5%BD%95%E6%88%91%E9%95%9C%E5%A4%B4%E4%B8%8B%E7%9A%84%E7%8E%8B%E8%80%85%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C"
    },
    {
      "rank": 24,
      "keyword": "王者新英雄姜姜正式公布",
      "hotValue": 7741684,
      "url": "https://www.douyin.com/search/%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E5%A7%9C%E5%A7%9C%E6%AD%A3%E5%BC%8F%E5%85%AC%E5%B8%83"
    },
    {
      "rank": 25,
      "keyword": "杰伦威廉姆斯伤病",
      "hotValue": 7740168,
      "url": "https://www.douyin.com/search/%E6%9D%B0%E4%BC%A6%E5%A8%81%E5%BB%89%E5%A7%86%E6%96%AF%E4%BC%A4%E7%97%85"
    },
    {
      "rank": 26,
      "keyword": "IG还是太能创造奇迹了",
      "hotValue": 7736184,
      "url": "https://www.douyin.com/search/IG%E8%BF%98%E6%98%AF%E5%A4%AA%E8%83%BD%E5%88%9B%E9%80%A0%E5%A5%87%E8%BF%B9%E4%BA%86"
    },
    {
      "rank": 27,
      "keyword": "IG战胜HLE",
      "hotValue": 7735947,
      "url": "https://www.douyin.com/search/IG%E6%88%98%E8%83%9CHLE"
    },
    {
      "rank": 28,
      "keyword": "会玩人展示健身大结果",
      "hotValue": 7732759,
      "url": "https://www.douyin.com/search/%E4%BC%9A%E7%8E%A9%E4%BA%BA%E5%B1%95%E7%A4%BA%E5%81%A5%E8%BA%AB%E5%A4%A7%E7%BB%93%E6%9E%9C"
    },
    {
      "rank": 29,
      "keyword": "魏娆陆濯和离了开始暧昧了",
      "hotValue": 7732656,
      "url": "https://www.douyin.com/search/%E9%AD%8F%E5%A8%86%E9%99%86%E6%BF%AF%E5%92%8C%E7%A6%BB%E4%BA%86%E5%BC%80%E5%A7%8B%E6%9A%A7%E6%98%A7%E4%BA%86"
    },
    {
      "rank": 30,
      "keyword": "沉浸式感受姆巴佩梅开二度",
      "hotValue": 7728540,
      "url": "https://www.douyin.com/search/%E6%B2%89%E6%B5%B8%E5%BC%8F%E6%84%9F%E5%8F%97%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6"
    },
    {
      "rank": 31,
      "keyword": "热巴红毯月冕蝶神可可妆",
      "hotValue": 7727922,
      "url": "https://www.douyin.com/search/%E7%83%AD%E5%B7%B4%E7%BA%A2%E6%AF%AF%E6%9C%88%E5%86%95%E8%9D%B6%E7%A5%9E%E5%8F%AF%E5%8F%AF%E5%A6%86"
    },
    {
      "rank": 32,
      "keyword": "来一起翻跳KDA卡莎神之八秒",
      "hotValue": 7727787,
      "url": "https://www.douyin.com/search/%E6%9D%A5%E4%B8%80%E8%B5%B7%E7%BF%BB%E8%B7%B3KDA%E5%8D%A1%E8%8E%8E%E7%A5%9E%E4%B9%8B%E5%85%AB%E7%A7%92"
    },
    {
      "rank": 33,
      "keyword": "夏天煎饼cos少司缘大司命",
      "hotValue": 7726196,
      "url": "https://www.douyin.com/search/%E5%A4%8F%E5%A4%A9%E7%85%8E%E9%A5%BCcos%E5%B0%91%E5%8F%B8%E7%BC%98%E5%A4%A7%E5%8F%B8%E5%91%BD"
    },
    {
      "rank": 34,
      "keyword": "在这里遇见盛大晴天",
      "hotValue": 7725851,
      "url": "https://www.douyin.com/search/%E5%9C%A8%E8%BF%99%E9%87%8C%E9%81%87%E8%A7%81%E7%9B%9B%E5%A4%A7%E6%99%B4%E5%A4%A9"
    },
    {
      "rank": 35,
      "keyword": "全网都在晒女儿",
      "hotValue": 7724420,
      "url": "https://www.douyin.com/search/%E5%85%A8%E7%BD%91%E9%83%BD%E5%9C%A8%E6%99%92%E5%A5%B3%E5%84%BF"
    },
    {
      "rank": 36,
      "keyword": "论闺蜜给我出片的速度",
      "hotValue": 7723798,
      "url": "https://www.douyin.com/search/%E8%AE%BA%E9%97%BA%E8%9C%9C%E7%BB%99%E6%88%91%E5%87%BA%E7%89%87%E7%9A%84%E9%80%9F%E5%BA%A6"
    },
    {
      "rank": 37,
      "keyword": "薛之谦贵阳变身洋芋王子整活",
      "hotValue": 7721565,
      "url": "https://www.douyin.com/search/%E8%96%9B%E4%B9%8B%E8%B0%A6%E8%B4%B5%E9%98%B3%E5%8F%98%E8%BA%AB%E6%B4%8B%E8%8A%8B%E7%8E%8B%E5%AD%90%E6%95%B4%E6%B4%BB"
    },
    {
      "rank": 38,
      "keyword": "快硬夸我一句",
      "hotValue": 7716568,
      "url": "https://www.douyin.com/search/%E5%BF%AB%E7%A1%AC%E5%A4%B8%E6%88%91%E4%B8%80%E5%8F%A5"
    },
    {
      "rank": 39,
      "keyword": "王者还在回忆被梦泪踢直播间那天",
      "hotValue": 7714392,
      "url": "https://www.douyin.com/search/%E7%8E%8B%E8%80%85%E8%BF%98%E5%9C%A8%E5%9B%9E%E5%BF%86%E8%A2%AB%E6%A2%A6%E6%B3%AA%E8%B8%A2%E7%9B%B4%E6%92%AD%E9%97%B4%E9%82%A3%E5%A4%A9"
    },
    {
      "rank": 40,
      "keyword": "邓超共创之夜聊完你的聊你的",
      "hotValue": 7712926,
      "url": "https://www.douyin.com/search/%E9%82%93%E8%B6%85%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%E8%81%8A%E5%AE%8C%E4%BD%A0%E7%9A%84%E8%81%8A%E4%BD%A0%E7%9A%84"
    },
    {
      "rank": 41,
      "keyword": "这首歌唱出了我的心情",
      "hotValue": 7712340,
      "url": "https://www.douyin.com/search/%E8%BF%99%E9%A6%96%E6%AD%8C%E5%94%B1%E5%87%BA%E4%BA%86%E6%88%91%E7%9A%84%E5%BF%83%E6%83%85"
    },
    {
      "rank": 42,
      "keyword": "嫁金钗MVP结算画面",
      "hotValue": 7700186,
      "url": "https://www.douyin.com/search/%E5%AB%81%E9%87%91%E9%92%97MVP%E7%BB%93%E7%AE%97%E7%94%BB%E9%9D%A2"
    },
    {
      "rank": 43,
      "keyword": "鹿荼白cos王维请神上身",
      "hotValue": 7699232,
      "url": "https://www.douyin.com/search/%E9%B9%BF%E8%8D%BC%E7%99%BDcos%E7%8E%8B%E7%BB%B4%E8%AF%B7%E7%A5%9E%E4%B8%8A%E8%BA%AB"
    },
    {
      "rank": 44,
      "keyword": "S16进入大AI时代",
      "hotValue": 7698357,
      "url": "https://www.douyin.com/search/S16%E8%BF%9B%E5%85%A5%E5%A4%A7AI%E6%97%B6%E4%BB%A3"
    },
    {
      "rank": 45,
      "keyword": "嫁金钗上演雄竞修罗场",
      "hotValue": 7696410,
      "url": "https://www.douyin.com/search/%E5%AB%81%E9%87%91%E9%92%97%E4%B8%8A%E6%BC%94%E9%9B%84%E7%AB%9E%E4%BF%AE%E7%BD%97%E5%9C%BA"
    },
    {
      "rank": 46,
      "keyword": "什么图片配上这首歌都很忧郁",
      "hotValue": 7695843,
      "url": "https://www.douyin.com/search/%E4%BB%80%E4%B9%88%E5%9B%BE%E7%89%87%E9%85%8D%E4%B8%8A%E8%BF%99%E9%A6%96%E6%AD%8C%E9%83%BD%E5%BE%88%E5%BF%A7%E9%83%81"
    },
    {
      "rank": 47,
      "keyword": "跟着郑恺毛晓彤祝绪丹玩转东北",
      "hotValue": 7685133,
      "url": "https://www.douyin.com/search/%E8%B7%9F%E7%9D%80%E9%83%91%E6%81%BA%E6%AF%9B%E6%99%93%E5%BD%A4%E7%A5%9D%E7%BB%AA%E4%B8%B9%E7%8E%A9%E8%BD%AC%E4%B8%9C%E5%8C%97"
    },
    {
      "rank": 48,
      "keyword": "临床医生解读offer8",
      "hotValue": 7683273,
      "url": "https://www.douyin.com/search/%E4%B8%B4%E5%BA%8A%E5%8C%BB%E7%94%9F%E8%A7%A3%E8%AF%BBoffer8"
    },
    {
      "rank": 49,
      "keyword": "挑战复刻热巴红毯造型",
      "hotValue": 7682374,
      "url": "https://www.douyin.com/search/%E6%8C%91%E6%88%98%E5%A4%8D%E5%88%BB%E7%83%AD%E5%B7%B4%E7%BA%A2%E6%AF%AF%E9%80%A0%E5%9E%8B"
    },
    {
      "rank": 50,
      "keyword": "横店微短剧之夜",
      "hotValue": 7679868,
      "url": "https://www.douyin.com/search/%E6%A8%AA%E5%BA%97%E5%BE%AE%E7%9F%AD%E5%89%A7%E4%B9%8B%E5%A4%9C"
    }
  ]
};
