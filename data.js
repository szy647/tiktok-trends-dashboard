window.TREND_DATA = {
  "meta": {
    "lastUpdated": "2026-09-24T00:00:00+08:00",
    "methodology": "TikTok 官方不提供「全球娱乐总榜」，本榜为 5 个市场（美国 US 代表全球+欧美，印尼 ID / 菲律宾 PH / 越南 VN / 马来西亚 MY 代表东南亚）娱乐类（News & Entertainment）榜单合并去重、按官方播放量排序得出，不是某一张官方榜的原生前N条。每个市场每个时间窗口在合并前均已抓取≥30条候选，并排除四类内容：①硬新闻/政治事件/自然灾害通报及其衍生的\"灾情居家/避灾\"类内容、刑事案件等新闻类；②\"播放量高但公开检索无法确认具体走红原因\"的模糊话题（不满足\"火的原因写得清楚明白\"的最低标准）；③以某个具体真实公众人物（明星/网红/运动员等）为核心话题的内容，即使该人物身份或事件本身是清楚的，也不纳入本榜；④**政治类内容**（含国家法定节日/独立日/国庆日及其衍生的爱国主题标签矩阵，如印尼17 Agustus/Merdeka系列、越南国庆系列等，即使体量很大也一律排除）与**宗教类内容**（宗教纪念日/宗教修行主题/宗教节庆活动，如Maulid Nabi先知诞辰、Vu Lan盂兰盆节等）——本榜聚焦泛娱乐梗/影视综艺IP/生活方式潮流/舞蹈挑战等纯娱乐内容，不做政治、宗教、真人物话题的榜单化处理（2026-09-15起收紧，此前版本曾将国家法定节日的全民庆典类内容视为文化娱乐范畴保留，现已纠正）。TikTok Creative Center 官方仅提供 7天/30天/90天 三个时间窗口档位（无120天档位，无效period参数会静默回退到7天档，需注意）。官方页面排序采用其自有trending算法而非单纯按播放量降序，本榜的\"按播放量重排\"是本站自定口径，与官方页面顺序不完全一致属正常现象。 2026-09-24刷新：新增排除平台通用引流/直播涨粉类标签（如golivegrowfast/asktiktok/fyp变体等，均为平台功能推广非真实热梗）及\"含义完全无法追溯\"的模糊标签；Miss Grand International等赛事具体场次信息本轮未能逐一核实，已标注待核验。",
    "windowDescs": {
      "7": "近7天，TikTok Creative Center 官方口径",
      "30": "近30天，TikTok Creative Center 官方口径",
      "90": "近90天，TikTok Creative Center 官方口径"
    },
    "douyinFetchedAt": "2026-09-17T11:55:00+08:00",
    "douyinNote": "抖音热搜与 TikTok Creative Center 的热度算法、语言、内容生态均不同，两者数值不可直接比较；抖音数据仅用于核实同一话题是否在国内同步可见，不参与本榜排序。",
    "videoNote": "每条下方嵌入的视频为本人实际打开该话题页时当前展示的真实视频（作者+视频ID均为抓取所得，非编造）；若近期抓取时话题页触发登录验证或未能成功嵌入，则该条 videoEmbed 为 null，页面会显示「点击在 TikTok 打开」的兜底入口，不编造视频信息。",
    "fusionNote": "融合建议为基于该热梗特征给 MCGG（Magic Chess: GoGo）的创意方向参考，非官方立项计划；凡涉及真实人物肖像、第三方IP版权的条目，均已标注风险并给出更稳妥的替代路径，不建议未经授权直接商用。",
    "redLine": "未编造任何带数字 ID 的具体视频 URL；泰语/越南语/印尼语本地人名、剧集、缩写类话题含义无法独立确认的，一律标注【含义待核验】。"
  },
  "windows": {
    "7": {
      "items": [
        {
          "tag": "#dwts",
          "name": "Dancing with the Stars（美国ABC老牌真人秀）",
          "regionGroup": "global",
          "category": "真人秀/舞蹈竞技",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "24.8K",
              "views": "730.8M"
            }
          ],
          "summary": "美国ABC台已播出34季的明星交谊舞竞技真人秀，每季邀请体育/影视/网红等名人搭档职业舞者进行舞蹈对决，由观众投票+评委打分决出冠军。",
          "whyHot": "新一季固定播出周期内，每周赛果、名人搭档花絮、经典舞段片段被剪辑二创，是美国长青综艺IP在TikTok的固定流量来源，机制清楚（真人秀周播赛制驱动讨论）。",
          "origin": "ABC电视台官方综艺节目，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dwts",
            "search": "https://www.tiktok.com/search?q=dwts",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 1
        },
        {
          "tag": "#southpark",
          "name": "South Park（美国经典成人动画）",
          "regionGroup": "global",
          "category": "影视剧集/动画",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "28.3K",
              "views": "618.8M"
            }
          ],
          "summary": "自1997年播出至今的Comedy Central成人向讽刺动画，以粗糙手绘风格+社会时事讽刺著称。",
          "whyHot": "新季集数上线后经典恶搞片段、角色台词被大量剪辑二创，是长青动画IP在TikTok的稳定话题来源，机制清楚。",
          "origin": "Comedy Central官方剧集+观众剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southpark",
            "search": "https://www.tiktok.com/search?q=southpark",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 2
        },
        {
          "tag": "#dancingwiththestars",
          "name": "Dancing with the Stars（美国ABC老牌真人秀）",
          "regionGroup": "global",
          "category": "真人秀/舞蹈竞技",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "17.9K",
              "views": "414.6M"
            }
          ],
          "summary": "美国ABC台已播出34季的明星交谊舞竞技真人秀，每季邀请体育/影视/网红等名人搭档职业舞者进行舞蹈对决，由观众投票+评委打分决出冠军。",
          "whyHot": "新一季固定播出周期内，每周赛果、名人搭档花絮、经典舞段片段被剪辑二创，是美国长青综艺IP在TikTok的固定流量来源，机制清楚（真人秀周播赛制驱动讨论）。",
          "origin": "ABC电视台官方综艺节目，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dancingwiththestars",
            "search": "https://www.tiktok.com/search?q=dancingwiththestars",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 3
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
              "posts": "15.3K",
              "views": "316.7M"
            }
          ],
          "summary": "与#southpark同源，专指粉丝对该剧经典片段/台词做的剪辑向二创内容标签。",
          "whyHot": "剪辑类内容天然自带话题标签便于归类传播，跟随剧集热度同步上涨。",
          "origin": "观众自发剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/southparkedit",
            "search": "https://www.tiktok.com/search?q=southparkedit",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 4
        },
        {
          "tag": "#southamerica",
          "name": "\"South America\" 音效/梗图挑战",
          "regionGroup": "global",
          "category": "生活方式/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "13.8K",
              "views": "258.8M"
            }
          ],
          "summary": "围绕\"South America\"这一关键词的音效/字幕梗，常用于制造反差喜剧效果（如\"我朋友以为的xx\" vs \"南美洲版的xx\"类对比剪辑）。",
          "whyHot": "反差喜剧结构简单易复制，配合固定音效即可套用任意主题二创，属于典型的格式化模板梗，具体最初发起者难以追溯。",
          "origin": "格式化梗模板，发起者不可考。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/southamerica",
            "search": "https://www.tiktok.com/search?q=southamerica",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 5
        },
        {
          "tag": "#wolverine",
          "name": "Wolverine（金刚狼，Marvel角色）",
          "regionGroup": "global",
          "category": "影视IP/漫威",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "42.5K",
              "views": "233M"
            },
            {
              "code": "ID",
              "posts": "6.6K",
              "views": "37.1M"
            }
          ],
          "summary": "漫威超级英雄\"金刚狼\"角色相关内容，涵盖《死侍与金刚狼》后续热度及角色剪辑二创。",
          "whyHot": "漫威电影角色长青话题，配合角色经典台词/打斗片段剪辑持续产生热度，机制清楚。",
          "origin": "漫威官方IP+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/wolverine",
            "search": "https://www.tiktok.com/search?q=wolverine",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 6
        },
        {
          "tag": "#residentevil",
          "name": "Resident Evil（生化危机系列）",
          "regionGroup": "global",
          "category": "游戏/影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "27.2K",
              "views": "218.6M"
            },
            {
              "code": "MY",
              "posts": "767",
              "views": "11.5M"
            }
          ],
          "summary": "卡普空经典生存恐怖游戏系列，含游戏实况、电影/剧集衍生内容及角色COS二创。",
          "whyHot": "系列长青IP，新作/剧集消息或怀旧剪辑均能带动话题，机制清楚。",
          "origin": "Capcom官方IP+玩家/影迷二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/residentevil",
            "search": "https://www.tiktok.com/search?q=residentevil",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 7
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
              "posts": "4.3K",
              "views": "184.1M"
            }
          ],
          "summary": "标签指向越南本地一档婚恋/相亲主题真人秀节目的第二季，与#damcuoi #wedding等婚礼主题标签同期出现，推测为撮合/婚礼真人秀集群。",
          "whyHot": "真人秀播出期内选手/剧情花絮持续产生讨论，机制清楚，但具体节目名称与详情未能公开检索核实。【含义待核验】",
          "origin": "越南本地真人秀节目（具体制作方待核验）。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/utlan2",
            "search": "https://www.tiktok.com/search?q=utlan2",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 8
        },
        {
          "tag": "#school",
          "name": "开学季/校园生活",
          "regionGroup": "sea",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "17.2K",
              "views": "165.8M"
            }
          ],
          "summary": "北半球9月开学季相关的校园生活、课堂趣事、师生互动类内容合集标签。",
          "whyHot": "季节性刚需内容，每年9月固定回潮，机制清楚。",
          "origin": "季节性生活方式内容，无单一发起者。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/school",
            "search": "https://www.tiktok.com/search?q=school",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 9
        },
        {
          "tag": "#fomo",
          "name": "FOMO（Fear Of Missing Out，社交焦虑梗）",
          "regionGroup": "global",
          "category": "生活方式/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "25.8K",
              "views": "155.7M"
            }
          ],
          "summary": "\"错失恐惧症\"缩写梗，常用于调侃自己因害怕错过热点/活动而参与某事的心理状态。",
          "whyHot": "通用情绪类梗，适配任意场景二创，传播机制清楚（情绪共鸣+万能适配性）。",
          "origin": "网络流行缩略语，无单一发起者。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fomo",
            "search": "https://www.tiktok.com/search?q=fomo",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 10
        },
        {
          "tag": "#jamda5yrkijogja",
          "name": "\"Jamda 5 Tahun ke Jogja\"（印尼社群5周年日惹聚会，具体主办方待核验）",
          "regionGroup": "sea",
          "category": "生活方式/社群活动",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "30.9K",
              "views": "138.3M"
            }
          ],
          "summary": "标签指向印尼某社群/粉丝群体\"成立5周年赴日惹（Jogja）聚会\"的活动记录内容。",
          "whyHot": "周年庆聚会类内容驱动机制清楚（纪念日+异地集体出行打卡），但具体是哪个社群/账号发起未能公开检索核实。【含义待核验】",
          "origin": "印尼本地社群自发聚会活动。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/jamda5yrkijogja",
            "search": "https://www.tiktok.com/search?q=jamda5yrkijogja",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 11
        },
        {
          "tag": "#manga",
          "name": "漫画/Manga 泛娱乐社区标签",
          "regionGroup": "global",
          "category": "动漫/游戏",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "113K",
              "views": "132.5M"
            }
          ],
          "summary": "泛用于日漫/漫画相关内容的通用社区标签，不指向单一作品。",
          "whyHot": "动漫社区长期活跃话题标签，机制清楚（泛娱乐IP无需追溯单一触发事件）。",
          "origin": "动漫爱好者社区自发使用。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/manga",
            "search": "https://www.tiktok.com/search?q=manga",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 12
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
              "posts": "10.8K",
              "views": "111.7M"
            }
          ],
          "summary": "越南语\"婚礼\"，与#utlan2 #wedding同属一组婚恋/婚礼主题真人秀相关标签集群。",
          "whyHot": "真人秀婚礼环节剧情性强、话题度高，是同类节目最受关注的固定桥段，机制清楚。",
          "origin": "越南本地婚恋真人秀节目片段。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/damcuoi",
            "search": "https://www.tiktok.com/search?q=damcuoi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 13
        },
        {
          "tag": "#wedding",
          "name": "Wedding（婚礼主题内容，含越南真人秀集群）",
          "regionGroup": "sea",
          "category": "真人秀/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "10.4K",
              "views": "110.8M"
            }
          ],
          "summary": "通用\"婚礼\"主题标签，本轮东南亚榜内主要与#damcuoi #utlan2越南婚恋真人秀集群关联。",
          "whyHot": "真人秀婚礼环节话题度高，同时也涵盖普通用户真实婚礼记录内容，机制清楚。",
          "origin": "真人秀节目片段+用户自发婚礼记录。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/wedding",
            "search": "https://www.tiktok.com/search?q=wedding",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 14
        },
        {
          "tag": "#wholesome",
          "name": "Wholesome（\"暖心\"内容梗）",
          "regionGroup": "global",
          "category": "生活方式/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "19.8K",
              "views": "103.7M"
            }
          ],
          "summary": "形容治愈系、暖心、正能量内容的通用标签，常见于宠物互动、家庭温情、善举记录类视频。",
          "whyHot": "情绪向通用标签，适配大量温情类内容二创，机制清楚。",
          "origin": "网络通用形容词标签，无单一发起者。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/wholesome",
            "search": "https://www.tiktok.com/search?q=wholesome",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 15
        },
        {
          "tag": "#aura",
          "name": "Aura（气场积分梗）",
          "regionGroup": "sea",
          "category": "网络热梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "8.7K",
              "views": "103.5M"
            }
          ],
          "summary": "2024年起全球爆红的\"aura points（气场积分）\"梗——为生活中各种帅气或尴尬行为打分（\"这波操作aura+1000\"/\"社死瞬间aura-500\"），在越南TikTok持续走热（本周7360万、30天2.18亿播放）。",
          "whyHot": "aura梗规则简单、场景无限（运动/日常/游戏/社交全适用），天然适配短视频的打分叙事与评论区互动，是全球年轻人通用的\"社交货币\"梗，长生命周期。",
          "origin": "源自美国体育解说与黑人 Twitter 文化，2024年经TikTok全球化扩散。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/aura",
            "search": "https://www.tiktok.com/search?q=aura",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可为MCGG神操作设计\"aura积分\"式互动玩法（高光操作aura+1000），评论区晒分驱动UGC。",
            "video": "适合做\"aura打分\"式对局集锦剪辑，每波操作弹积分特效。"
          },
          "rank": 16
        },
        {
          "tag": "#attackontitan",
          "name": "进击的巨人（Attack on Titan）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "101.7K",
              "views": "96.6M"
            }
          ],
          "summary": "经典日本动漫IP，涵盖角色剪辑、名场面二创等泛娱乐内容。",
          "whyHot": "长青动漫IP，角色/名台词剪辑持续产生热度，机制清楚。",
          "origin": "动漫官方IP+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/attackontitan",
            "search": "https://www.tiktok.com/search?q=attackontitan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 17
        },
        {
          "tag": "#naruto",
          "name": "火影忍者 Naruto",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "7.6K",
              "views": "95.9M"
            }
          ],
          "summary": "经典日本动漫IP《火影忍者》相关内容合集标签，涵盖角色剪辑、名场面二创等。",
          "whyHot": "作为长青国民级动漫IP，拥有稳定的全球粉丝基础，角色/剧情相关剪辑内容长期持续产出，是常年活跃的泛娱乐标签而非单一热点事件。",
          "origin": "长青动漫IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/naruto",
            "search": "https://www.tiktok.com/search?q=naruto",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "aaa..edits",
            "videoId": "7682839469489212694"
          },
          "fusionSuggestion": {
            "commercial": "可考虑忍者风格皮肤/技能特效做泛化联动参考。",
            "video": "适合做忍术风格的英雄技能卡点混剪。"
          },
          "rank": 18
        },
        {
          "tag": "#ggez",
          "name": "\"GG EZ\"（电竞/游戏调侃用语）",
          "regionGroup": "global",
          "category": "游戏/梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "6.4K",
              "views": "94.8M"
            },
            {
              "code": "PH",
              "posts": "827",
              "views": "15M"
            }
          ],
          "summary": "电竞圈常用调侃语\"Good Game, Easy\"（好游戏，太简单了），常用于游戏内容或调侃场景。",
          "whyHot": "游戏社区通用梗，适配各类游戏内容二创，机制清楚。",
          "origin": "电竞/游戏社区通用用语。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/ggez",
            "search": "https://www.tiktok.com/search?q=ggez",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 19
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
              "posts": "3.2K",
              "views": "94.4M"
            }
          ],
          "summary": "2026年9月19日-10月4日在日本爱知县·名古屋市举行的第20届亚洲运动会，由亚洲奥林匹克理事会主办。",
          "whyHot": "本轮抓取窗口正值赛事进行期，各国选手夺牌/精彩瞬间被广泛剪辑传播，机制清楚（真实体育赛事驱动）。",
          "origin": "亚洲奥林匹克理事会官方赛事+观众/媒体剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/asiad2026",
            "search": "https://www.tiktok.com/search?q=asiad2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 20
        },
        {
          "tag": "#missgrandinternational",
          "name": "Miss Grand International（大国小姐国际选美赛，具体2026赛程待核验）",
          "regionGroup": "sea",
          "category": "选美赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "4.7K",
              "views": "92.8M"
            }
          ],
          "summary": "起源于泰国的年度国际选美赛事，聚焦\"反对战争与暴力\"公益主张，与Miss World/Miss Universe并列四大国际选美赛事之一。",
          "whyHot": "赛事进行期内各国代表/决赛花絮持续产生话题，机制清楚，但本届具体举办地/日期未能公开检索核实确认。【含义待核验】",
          "origin": "Miss Grand International官方赛事主办方。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/missgrandinternational",
            "search": "https://www.tiktok.com/search?q=missgrandinternational",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 21
        },
        {
          "tag": "#hunterxhunter",
          "name": "全职猎人（Hunter x Hunter）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "89.5K",
              "views": "89.9M"
            }
          ],
          "summary": "经典日本动漫IP，涵盖角色剪辑、名场面二创等泛娱乐内容。",
          "whyHot": "长青动漫IP，角色/名场面剪辑持续产生热度，机制清楚。",
          "origin": "动漫官方IP+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hunterxhunter",
            "search": "https://www.tiktok.com/search?q=hunterxhunter",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 22
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
              "posts": "22.4K",
              "views": "83.1M"
            }
          ],
          "summary": "美国每年9月15日至10月15日的官方纪念月，庆祝拉美裔美国人的历史与文化贡献。",
          "whyHot": "文化月期间品牌/个人发布拉美文化相关内容形成固定周期性话题，机制清楚（非政治议题，是文化庆典）。",
          "origin": "美国官方文化纪念月+社区自发内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hispanicheritagemonth",
            "search": "https://www.tiktok.com/search?q=hispanicheritagemonth",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 23
        },
        {
          "tag": "#prettylittleliars",
          "name": "Pretty Little Liars（美剧《美少女的谎言》）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "10K",
              "views": "80.1M"
            }
          ],
          "summary": "经典美国青春悬疑剧集，涵盖剧集怀旧剪辑及衍生剧话题。",
          "whyHot": "剧集IP长青话题，怀旧剪辑/衍生剧消息持续产生讨论，机制清楚。",
          "origin": "官方剧集+粉丝怀旧剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/prettylittleliars",
            "search": "https://www.tiktok.com/search?q=prettylittleliars",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 24
        },
        {
          "tag": "#runningmanvietnam",
          "name": "Running Man Vietnam（越南版跑男）",
          "regionGroup": "sea",
          "category": "真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "1.3K",
              "views": "79.9M"
            }
          ],
          "summary": "韩国综艺《Running Man》的越南本土化版本，明星嘉宾完成任务/游戏环节的真人秀节目。",
          "whyHot": "综艺播出期内嘉宾表现/游戏环节花絮持续产生讨论，机制清楚。",
          "origin": "越南本地综艺制作方官方节目。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/runningmanvietnam",
            "search": "https://www.tiktok.com/search?q=runningmanvietnam",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 25
        },
        {
          "tag": "#luffy",
          "name": "路飞（One Piece 海贼王）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "102.6K",
              "views": "76.5M"
            }
          ],
          "summary": "经典日本动漫《海贼王》主角，涵盖角色剪辑、名场面二创等泛娱乐内容。",
          "whyHot": "长青动漫IP角色，机制清楚。",
          "origin": "动漫官方IP+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/luffy",
            "search": "https://www.tiktok.com/search?q=luffy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 26
        },
        {
          "tag": "#hujan",
          "name": "Hujan（印尼语\"雨\"，雨季生活方式内容）",
          "regionGroup": "sea",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "14.9K",
              "views": "76.2M"
            }
          ],
          "summary": "印尼语\"下雨\"，指向雨季相关的生活记录、氛围感短视频内容。",
          "whyHot": "季节性生活方式内容，雨季固定回潮，机制清楚。",
          "origin": "季节性生活方式内容，无单一发起者。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hujan",
            "search": "https://www.tiktok.com/search?q=hujan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 27
        },
        {
          "tag": "#sasuke",
          "name": "佐助（Naruto 火影忍者）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "104.3K",
              "views": "71.5M"
            }
          ],
          "summary": "经典日本动漫《火影忍者》主要角色，涵盖角色剪辑、名场面二创等泛娱乐内容。",
          "whyHot": "长青动漫IP角色，机制清楚。",
          "origin": "动漫官方IP+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sasuke",
            "search": "https://www.tiktok.com/search?q=sasuke",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 28
        },
        {
          "tag": "#sukuna",
          "name": "两面宿傩（Jujutsu Kaisen 咒术回战）",
          "regionGroup": "global",
          "category": "动漫IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "91.6K",
              "views": "69.5M"
            }
          ],
          "summary": "经典日本动漫《咒术回战》人气角色，涵盖角色剪辑、名场面二创等泛娱乐内容。",
          "whyHot": "长青动漫IP角色，机制清楚。",
          "origin": "动漫官方IP+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sukuna",
            "search": "https://www.tiktok.com/search?q=sukuna",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 29
        }
      ]
    },
    "30": {
      "items": [
        {
          "tag": "#dwts",
          "name": "Dancing with the Stars（美国ABC老牌真人秀）",
          "regionGroup": "global",
          "category": "真人秀/舞蹈竞技",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "44K",
              "views": "1.4B"
            }
          ],
          "summary": "美国ABC台已播出34季的明星交谊舞竞技真人秀，每季邀请体育/影视/网红等名人搭档职业舞者进行舞蹈对决，由观众投票+评委打分决出冠军。",
          "whyHot": "新一季固定播出周期内，每周赛果、名人搭档花絮、经典舞段片段被剪辑二创，是美国长青综艺IP在TikTok的固定流量来源，机制清楚（真人秀周播赛制驱动讨论）。",
          "origin": "ABC电视台官方综艺节目，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dwts",
            "search": "https://www.tiktok.com/search?q=dwts",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 1
        },
        {
          "tag": "#catinthehat",
          "name": "The Cat in the Hat（华纳兄弟动画电影，迈克·梅耶斯主演）",
          "regionGroup": "global",
          "category": "影视/电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "113.9K",
              "views": "1.2B"
            }
          ],
          "summary": "根据苏斯博士经典绘本改编、迈克·梅耶斯主演的动画电影《The Cat in the Hat》相关内容在美区持续走高。",
          "whyHot": "该片是2026年华纳兄弟重点动画项目之一，围绕预告片、角色配音、家庭观影反馈的短视频持续产出，属于电影宣发周期内的自然热度。",
          "origin": "电影官方宣发内容与观众自发二创混合。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/catinthehat",
            "search": "https://www.tiktok.com/search?q=catinthehat",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "user395184074815",
            "videoId": "7682339495177424159"
          },
          "fusionSuggestion": {
            "commercial": "涉及第三方电影IP版权，不建议直接商用；如需联动应走正规版权合作路径。",
            "video": "不建议未经授权使用电影素材。"
          },
          "rank": 2
        },
        {
          "tag": "#buddy",
          "name": "Buddy（PokéDance舞蹈挑战主题曲）",
          "regionGroup": "global",
          "category": "舞蹈挑战",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "51K",
              "views": "809.9M"
            }
          ],
          "summary": "美国TikTok近期热门舞蹈挑战\"PokéDance\"的主题曲话题标签，用户跟着歌词\"Buddy buddy boom boom / Hey you're my my ma my buddy\"编排简单肢体动作，常搭配AI宠物/卡通滤镜特效拍摄。",
          "whyHot": "歌词简单重复、编舞门槛低，适合泛年龄层跟拍，配合TikTok AI特效工具形成低门槛强互动的传播组合，是典型的舞蹈类挑战热梗。",
          "origin": "创作者自发编排的舞蹈挑战，非官方品牌发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/buddy",
            "search": "https://www.tiktok.com/search?q=buddy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "brooklynguy01",
            "videoId": "7682297188982050061"
          },
          "fusionSuggestion": {
            "commercial": "可考虑让MCGG英雄IP角色用同款\"Buddy\"舞蹈动作剪辑二创，蹭舞蹈挑战流量。",
            "video": "适合做游戏角色跳舞版PokéDance模仿视频。"
          },
          "rank": 3
        },
        {
          "tag": "#dancingwiththestars",
          "name": "Dancing with the Stars（美国ABC老牌真人秀）",
          "regionGroup": "global",
          "category": "真人秀/舞蹈竞技",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "32.5K",
              "views": "764.1M"
            }
          ],
          "summary": "美国ABC台已播出34季的明星交谊舞竞技真人秀，每季邀请体育/影视/网红等名人搭档职业舞者进行舞蹈对决，由观众投票+评委打分决出冠军。",
          "whyHot": "新一季固定播出周期内，每周赛果、名人搭档花絮、经典舞段片段被剪辑二创，是美国长青综艺IP在TikTok的固定流量来源，机制清楚（真人秀周播赛制驱动讨论）。",
          "origin": "ABC电视台官方综艺节目，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dancingwiththestars",
            "search": "https://www.tiktok.com/search?q=dancingwiththestars",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 4
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
              "posts": "64.9K",
              "views": "759.5M"
            }
          ],
          "summary": "越南语短语，直译\"明亮的春天印记\"，推测与某首歌曲或季节性内容企划相关。",
          "whyHot": "标签结构类似歌曲/企划推广标签，具体机制与出处未能公开检索核实。【含义待核验】",
          "origin": "具体出处待核验。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/dauxuantuoisang",
            "search": "https://www.tiktok.com/search?q=dauxuantuoisang",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 5
        },
        {
          "tag": "#jingboran",
          "name": "Jing Boran 井柏然（中剧《早春晴朗》出海带动）",
          "regionGroup": "sea",
          "category": "影视剧集/中剧出海",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "23.1K",
              "views": "575.5M"
            },
            {
              "code": "PH",
              "posts": "3.7K",
              "views": "84M"
            },
            {
              "code": "VN",
              "posts": "8.1K",
              "views": "143.8M"
            },
            {
              "code": "MY",
              "posts": "1.5K",
              "views": "84.5M"
            }
          ],
          "summary": "中国演员井柏然的姓名标签，因其主演的都市爱情剧《早春晴朗》海外大爆而在东南亚（印尼/菲律宾/越南）暴涨——该剧登顶Netflix新马泰越印尼等多市场非英语剧集榜，其饰演的\"栾念\"被泰国粉丝逐帧解析（本周30天窗口4.84亿播放）。",
          "whyHot": "《早春晴朗》的\"成年人克制式爱情\"叙事在东南亚精准走红：泰国网友逐帧解析机场离别戏、楼梯吻戏， Google搜索量一周环比暴涨超5000%；演员姓名标签成为剧集热度的直接流量出口，\"角色比演员旧标签跑得更快\"。",
          "origin": "中国剧集《早春晴朗》海外发行的二次传播（Netflix东南亚多市场登顶）。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/jingboran",
            "search": "https://www.tiktok.com/search?q=jingboran",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "中剧出海东南亚是当前文化亲和力窗口：MCGG可评估剧集式叙事内容（英雄故事线连载）+中剧美学皮肤方向，借势\"克制式高级感\"审美。",
            "video": "适合做\"成年拉扯感\"剧情向短视频（英雄关系线悬念连载）。"
          },
          "rank": 6
        },
        {
          "tag": "#hulu",
          "name": "Hulu（流媒体平台标签，SLOMW第五季回归带动）",
          "regionGroup": "global",
          "category": "影视剧集/流媒体",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "64.7K",
              "views": "526.3M"
            }
          ],
          "summary": "美国流媒体平台Hulu的标签，本周因平台热门真人秀《摩门教妻子的秘密生活》（The Secret Lives of Mormon Wives）第五季（5集缩短季）9月回归、预告片发布而走热（1.78亿周播放）。",
          "whyHot": "该真人秀上一季以主演Taylor Frankie Paul退出《The Bachelorette》的抓马事件收场，S5预告刚发布即引爆\"MomTok\"圈层讨论，节目相关标签（#slomw、#secretlivesofmormonwiveshulu）与平台标签同步冲高。",
          "origin": "平台内容宣传+真人秀粉丝二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hulu",
            "search": "https://www.tiktok.com/search?q=hulu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "真人秀\"人物关系抓马\"营销打法可参考：为英雄/皮肤设计关系线剧情，制造持续追更动力。",
            "video": "适合做悬念式\"关系抓马揭露\"剪辑，钩子密度拉满。"
          },
          "rank": 7
        },
        {
          "tag": "#sunqian",
          "name": "Sun Qian 孙千（中剧《早春晴朗》出海带动）",
          "regionGroup": "sea",
          "category": "影视剧集/中剧出海",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "16.2K",
              "views": "506.7M"
            },
            {
              "code": "PH",
              "posts": "2.7K",
              "views": "78.8M"
            },
            {
              "code": "VN",
              "posts": "4.4K",
              "views": "99.2M"
            }
          ],
          "summary": "中国演员孙千的姓名标签，同因《早春晴朗》海外走红在印尼/越南暴涨，剧中\"栾念×尚之桃\"CP成为泰越粉丝最上头的嗑点（30天窗口4.29亿播放）。",
          "whyHot": "与#jingboran同源——剧集海外热度外溢至主演标签；女主\"尚之桃\"的职场女性成长线与CP剪辑是粉丝内容两大主力，孙千海外一周涨粉约22万。",
          "origin": "中国剧集《早春晴朗》海外发行的二次传播。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sunqian",
            "search": "https://www.tiktok.com/search?q=sunqian",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "同jingboran：中剧出海窗口期的本地化内容策略。",
            "video": "适合做CP感+职场女性叙事的双线内容参考。"
          },
          "rank": 8
        },
        {
          "tag": "#homecoming",
          "name": "Homecoming（美国高校返校节）",
          "regionGroup": "global",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "72.1K",
              "views": "501.4M"
            }
          ],
          "summary": "美国高中/大学秋季传统返校活动，涵盖返校舞会邀约、装扮、游行等内容。",
          "whyHot": "季节性校园生活方式内容，每年9-10月固定回潮，机制清楚。",
          "origin": "美国校园传统活动，无单一发起者。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/homecoming",
            "search": "https://www.tiktok.com/search?q=homecoming",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 9
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
              "posts": "77.6K",
              "views": "476.4M"
            }
          ],
          "summary": "越南9月5日左右全国统一开学典礼相关内容，是越南每年固定的教育系统仪式性活动。",
          "whyHot": "越南教育部规定每年9月5日为全国统一开学日，各地学校举行升旗、致辞等开学典礼，家长和学生大量发布相关记录视频，是每年周期性话题。",
          "origin": "越南教育系统官方固定节庆日，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/khaigiang",
            "search": "https://www.tiktok.com/search?q=khaigiang",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
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
              "posts": "121.6K",
              "views": "439.9M"
            }
          ],
          "summary": "菲律宾TikTok上的圣诞节主题内容标签，菲律宾圣诞季传统上从9月即开始，装饰、颂歌、家庭团聚类内容提前升温。",
          "whyHot": "菲律宾以\"全球圣诞季最长的国家\"著称，9月起商场与家庭便开始圣诞装饰与颂歌，是每年规律性的季节性文化热梗。",
          "origin": "全民性节日文化传统，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/christmas",
            "search": "https://www.tiktok.com/search?q=christmas",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
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
          "tag": "#gmmtv",
          "name": "GMMTV（泰国知名BL剧电视台）",
          "regionGroup": "sea",
          "category": "影视/综艺",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "100.2K",
              "views": "432M"
            }
          ],
          "summary": "泰国GMMTV出品的BL剧（男男剧）在东南亚粉丝群体中持续走红，衍生大量剪辑和粉丝互动内容。",
          "whyHot": "泰剧BL题材在东南亚拥有庞大粉丝基础，GMMTV旗下多部剧集及演员话题热度长期居高不下。",
          "origin": "泰国电视台官方出品内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/gmmtv",
            "search": "https://www.tiktok.com/search?q=gmmtv",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可考虑与泰剧联动风格的英雄皮肤/情感向宣传素材。",
            "video": "适合做泰剧混剪风格的游戏角色关系向短视频。"
          },
          "rank": 12
        },
        {
          "tag": "#emmys",
          "name": "Emmys（2026黄金时段艾美奖颁奖礼）",
          "regionGroup": "global",
          "category": "娱乐事件/颁奖礼",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "11.9K",
              "views": "419M"
            }
          ],
          "summary": "2026年黄金时段艾美奖于9月14日揭晓：Apple TV+恐怖喜剧《寡妇湾》(Widow's Bay)横扫喜剧类成最大赢家，HBO医疗剧《匹兹堡医护前线》(The Pitt)卫冕剧情类最佳，马修·瑞斯创下单届双料视帝历史纪录，珍·斯玛特凭《绝望写手》五季五夺喜剧视后。",
          "whyHot": "年度电视工业盛事+多个历史性时刻（首位单届双料视帝、五连冠视后），获奖作品高光片段、获奖感言剪辑、\"该不该是他获奖\"争论内容在TikTok集中爆发。",
          "origin": "艾美奖官方活动话题（颁奖礼直播+媒体/粉丝二创）。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/emmys",
            "search": "https://www.tiktok.com/search?q=emmys",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可借\"颁奖季\"热点做MCGG年度评选式UGC活动（最佳阵容/最佳翻盘奖）。",
            "video": "适合做\"获奖时刻\"式活动高光混剪，仪式感拉满。"
          },
          "rank": 13
        },
        {
          "tag": "#loveislandreunion",
          "name": "Love Island 同学会特辑",
          "regionGroup": "global",
          "category": "真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "12.8K",
              "views": "411.3M"
            }
          ],
          "summary": "英美真人秀《Love Island》季终后的选手同学会特别节目，重聚回顾恋爱线发展。",
          "whyHot": "同学会特辑是该真人秀最受关注的固定爆点环节，机制清楚。",
          "origin": "官方真人秀特别节目。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/loveislandreunion",
            "search": "https://www.tiktok.com/search?q=loveislandreunion",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 14
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
              "posts": "247.2K",
              "views": "410M"
            },
            {
              "code": "ID",
              "posts": "108K",
              "views": "146.5M"
            },
            {
              "code": "PH",
              "posts": "44.4K",
              "views": "98.3M"
            },
            {
              "code": "VN",
              "posts": "4.3K",
              "views": "10.3M"
            },
            {
              "code": "MY",
              "posts": "17.6K",
              "views": "30.2M"
            }
          ],
          "summary": "九月月份通用标签，5个市场（US/ID/PH/VN/MY）用户集中发布初秋氛围、开学季、月度总结与新月愿望内容，形成规律性月度流量高峰（30天窗口3.31亿播放）。",
          "whyHot": "月份标签是TikTok\"月度打卡文化\"的固定流量入口（月初总结/新月愿望/月份氛围感），九月叠加北半球初秋与开学季话题，全市场共振。",
          "origin": "创作者自发使用的通用标签，非单一事件发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/september",
            "search": "https://www.tiktok.com/search?q=september",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "月度营销日历可借月份标签做规律性活动运营（每月1号\"新月新阵容\"）。",
            "video": "适合做\"九月新开始\"主题活动剪辑。"
          },
          "rank": 15
        },
        {
          "tag": "#lorelaigilmore",
          "name": "Lorelai Gilmore（《吉尔莫女孩》角色）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "22.8K",
              "views": "363.4M"
            }
          ],
          "summary": "经典美剧《吉尔莫女孩》女主角，涵盖剧集怀旧剪辑及角色台词二创。",
          "whyHot": "剧集IP怀旧话题，机制清楚。",
          "origin": "官方剧集+粉丝怀旧剪辑。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/lorelaigilmore",
            "search": "https://www.tiktok.com/search?q=lorelaigilmore",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 16
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
              "posts": "16.4K",
              "views": "346.4M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
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
              "posts": "53.7K",
              "views": "304M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "喜剧片段形态适合品牌轻量化内容营销（低门槛高传播）。",
            "video": "适合做MCGG英雄喜剧小剧场系列。"
          },
          "rank": 18
        },
        {
          "tag": "#beautyinblack",
          "name": "Beauty in Black（Netflix《黑色丽人》，Tyler Perry制作）",
          "regionGroup": "global",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "28.3K",
              "views": "295.6M"
            }
          ],
          "summary": "Netflix与Tyler Perry Studios联合制作的剧情剧，讲述金蜜与玛洛莉两位不同世界女性的命运交织，S1于2024年10月上线、S2于2025年9月播出，已续订最终季；近期因剧集片段长尾传播与最终季消息走热（30天窗口2.79亿播放）。",
          "whyHot": "Tyler Perry式家族传奇强冲突叙事（阶层跨越、复仇、家族秘密）在美国黑人观众群中基本盘稳固，\"被逐家门逆袭\"\"复仇爽点\"类高光片段剪辑在TikTok持续传播【本轮走热的具体触发点待核验】。",
          "origin": "Netflix官方宣传+观众片段二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/beautyinblack",
            "search": "https://www.tiktok.com/search?q=beautyinblack",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "强冲突家族叙事适合改编为本地化剧情向营销（英雄背景故事连载）。",
            "video": "适合做悬念冲突式短剧剪辑参考。"
          },
          "rank": 19
        },
        {
          "tag": "#aura",
          "name": "Aura（气场积分梗）",
          "regionGroup": "sea",
          "category": "网络热梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "19.5K",
              "views": "292.3M"
            }
          ],
          "summary": "2024年起全球爆红的\"aura points（气场积分）\"梗——为生活中各种帅气或尴尬行为打分（\"这波操作aura+1000\"/\"社死瞬间aura-500\"），在越南TikTok持续走热（本周7360万、30天2.18亿播放）。",
          "whyHot": "aura梗规则简单、场景无限（运动/日常/游戏/社交全适用），天然适配短视频的打分叙事与评论区互动，是全球年轻人通用的\"社交货币\"梗，长生命周期。",
          "origin": "源自美国体育解说与黑人 Twitter 文化，2024年经TikTok全球化扩散。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/aura",
            "search": "https://www.tiktok.com/search?q=aura",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可为MCGG神操作设计\"aura积分\"式互动玩法（高光操作aura+1000），评论区晒分驱动UGC。",
            "video": "适合做\"aura打分\"式对局集锦剪辑，每波操作弹积分特效。"
          },
          "rank": 20
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
              "posts": "81.2K",
              "views": "274.7M"
            }
          ],
          "summary": "菲律宾人从9月（英文月份名以-ber结尾的第一个月）就开始庆祝圣诞节的独特习俗，每年9月一到就有大量\"又到Ber Months了\"的调侃视频。",
          "whyHot": "菲律宾是全球圣诞季最长的地区，\"-ber月一到就是圣诞季开始\"是菲律宾人尽皆知的文化梗，每年9月初都会形成规律性话题高峰。",
          "origin": "菲律宾民间长期形成的文化习惯，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/bermonths",
            "search": "https://www.tiktok.com/search?q=bermonths",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可考虑\"超长待机圣诞季\"限定活动，契合菲律宾用户提前进入节日消费心态。",
            "video": "适合做\"Ber Months提前过圣诞\"主题短视频。"
          },
          "rank": 21
        },
        {
          "tag": "#practicalmagic2",
          "name": "Practical Magic 2（电影《魔法情缘2》上映）",
          "regionGroup": "global",
          "category": "电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "14.2K",
              "views": "270.7M"
            }
          ],
          "summary": "华纳《巫法闯情关》(Practical Magic)时隔27年的续集《魔法情缘2》于2026年9月11日北美上映，桑德拉·布洛克与妮可·基德曼回归饰演欧文斯女巫姐妹，故事设定在前作25年后，家族诅咒重现、新生代力量觉醒。",
          "whyHot": "邪典经典续集+双奥斯卡影后领衔，1998年原版是千禧一代女性的\"世代经典\"，上映前后怀旧营销集中引爆，TikTok上大量\"和妈妈一起看电影\"、原版台词回忆、女巫美学二创内容。",
          "origin": "电影官方宣传+观众怀旧二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/practicalmagic2",
            "search": "https://www.tiktok.com/search?q=practicalmagic2",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "\"跨代怀旧\"营销（母女/亲子共消费IP）思路可参考；女巫/魔法美学适合女性向皮肤设计。",
            "video": "适合做魔法主题英雄的高光演出内容。"
          },
          "rank": 22
        },
        {
          "tag": "#optimusprime",
          "name": "Optimus Prime（擎天柱，变形金刚）",
          "regionGroup": "global",
          "category": "影视IP",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "33.9K",
              "views": "257.5M"
            }
          ],
          "summary": "《变形金刚》系列经典角色，涵盖电影/动画剪辑及角色台词二创。",
          "whyHot": "长青影视IP角色，机制清楚。",
          "origin": "官方IP+粉丝剪辑二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/optimusprime",
            "search": "https://www.tiktok.com/search?q=optimusprime",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 23
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
              "posts": "5.2K",
              "views": "242.7M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 24
        }
      ]
    },
    "90": {
      "items": [
        {
          "tag": "#tinhhasayhi",
          "name": "tinhhasayhi（Tình Hà Say Hi，越南音乐真人秀节目，与《Anh Trai Say Hi》《Em Xinh Say Hi》同系列制作）",
          "regionGroup": "sea",
          "category": "综艺节目",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "482.3K",
              "views": "4.5B"
            }
          ],
          "summary": "《Tình Hà Say Hi》是越南同一制作团队打造的音乐真人秀节目，与热门节目《Anh Trai Say Hi》《Em Xinh Say Hi》属同系列，节目播出带动TikTok大量二创内容。",
          "whyHot": "该节目由曾制作《Anh Trai Say Hi》《Em Xinh Say Hi》的团队打造，节目开播后大量粉丝为选手站台造势，选手表演片段、粉丝应援内容在TikTok持续发酵，90天内越南地区播放量达2.5B，视频数超30万条。",
          "origin": "越南音乐真人秀《Tình Hà Say Hi》官方节目相关话题。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/tinhhasayhi",
            "search": "https://www.tiktok.com/search?q=tinhhasayhi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "thekidminhsu__",
            "videoId": "7674650443720445202"
          },
          "fusionSuggestion": {
            "commercial": "可考虑借势越南年轻观众聚集的音乐综艺氛围，联动越南本地KOL做MCGG越南区推广活动，但需事先确认节目方合作意愿及授权，避免未经授权蹭综艺IP。",
            "video": "可制作「游戏角色如果参加音乐选秀」类整活短视频，借综艺选秀的热闹氛围做泛化娱乐内容，无需指涉具体选手真人形象。"
          },
          "rank": 1
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
              "posts": "1M",
              "views": "2.3B"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可考虑情侣向游戏内活动/角色CP剪辑联动。",
            "video": "适合做游戏角色爱情故事向短剧。"
          },
          "rank": 2
        },
        {
          "tag": "#catinthehat",
          "name": "The Cat in the Hat（华纳兄弟动画电影，迈克·梅耶斯主演）",
          "regionGroup": "global",
          "category": "影视/电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "158.4K",
              "views": "1.8B"
            }
          ],
          "summary": "根据苏斯博士经典绘本改编、迈克·梅耶斯主演的动画电影《The Cat in the Hat》相关内容在美区持续走高。",
          "whyHot": "该片是2026年华纳兄弟重点动画项目之一，围绕预告片、角色配音、家庭观影反馈的短视频持续产出，属于电影宣发周期内的自然热度。",
          "origin": "电影官方宣发内容与观众自发二创混合。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/catinthehat",
            "search": "https://www.tiktok.com/search?q=catinthehat",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "user395184074815",
            "videoId": "7682339495177424159"
          },
          "fusionSuggestion": {
            "commercial": "涉及第三方电影IP版权，不建议直接商用；如需联动应走正规版权合作路径。",
            "video": "不建议未经授权使用电影素材。"
          },
          "rank": 3
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
              "views": "1.4B"
            },
            {
              "code": "PH",
              "posts": "183K",
              "views": "1.2B"
            },
            {
              "code": "VN",
              "posts": "106.2K",
              "views": "356.9M"
            },
            {
              "code": "MY",
              "posts": "23.4K",
              "views": "474.5M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "freedom.alias",
            "videoId": "7669320059776486687"
          },
          "fusionSuggestion": {
            "commercial": "涉及漫威第三方IP版权，不建议未经授权直接使用蜘蛛侠形象；可考虑与漫威谈官方授权联名（需版权方合作）。",
            "video": "官方号可发布『如果指挥官有蜘蛛侠战衣』的原创英雄主题概念视频，避免直接使用受版权保护的角色形象。"
          },
          "rank": 4
        },
        {
          "tag": "#musiconstage",
          "name": "Music On Stage（TikTok LIVE官方全球音乐项目）",
          "regionGroup": "sea",
          "category": "音乐/平台活动",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "48.8K",
              "views": "317.1M"
            },
            {
              "code": "ID",
              "posts": "41.5K",
              "views": "1.2B"
            },
            {
              "code": "PH",
              "posts": "15.7K",
              "views": "19.4M"
            },
            {
              "code": "VN",
              "posts": "15.6K",
              "views": "45.9M"
            },
            {
              "code": "MY",
              "posts": "59.6K",
              "views": "82.8M"
            }
          ],
          "summary": "TikTok LIVE官方发起的全球音乐项目标签，创作者发布舞台/现场演出类内容参与项目，并向SoundOn发行音乐人开放专业发展通道；90天窗口内US/ID/PH/MY四市场合计走热，印尼单市场播放即达12亿。",
          "whyHot": "平台官方流量扶持（参与项目可获LIVE推荐加权）+全球音乐创作者的舞台演出内容供给，使其成为近90天规模最大的平台级音乐内容聚合标签之一。",
          "origin": "TikTok LIVE官方项目发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/musiconstage",
            "search": "https://www.tiktok.com/search?q=musiconstage",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可评估通过BGM/主题曲投放加入平台级音乐项目，蹭官方流量扶持。",
            "video": "适合做英雄主题曲+舞台演出式发布内容。"
          },
          "rank": 5
        },
        {
          "tag": "#atvncg2026",
          "name": "Anh Trai Vượt Ngàn Chông Gai 2026（越南人气男团选秀综艺）",
          "regionGroup": "sea",
          "category": "综艺节目",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "68.2K",
              "views": "1.1B"
            }
          ],
          "summary": "越南知名男艺人选秀综艺节目，与《Anh Trai Say Hi》系列同类型，粉丝制作大量舞台剪辑和花絮内容。",
          "whyHot": "越南音乐综艺选秀近年持续火爆，该节目汇聚多位人气男艺人，是越南年度现象级综艺。",
          "origin": "越南官方电视台/制作方出品综艺节目。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/atvncg2026",
            "search": "https://www.tiktok.com/search?q=atvncg2026",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可参考选秀综艺形式设计MCGG英雄选拔赛主题活动。",
            "video": "适合做选秀舞台风格的游戏角色出场混剪。"
          },
          "rank": 6
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
              "posts": "155.2K",
              "views": "866.6M"
            },
            {
              "code": "PH",
              "posts": "21K",
              "views": "198.4M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 7
        },
        {
          "tag": "#halloweendecor",
          "name": "Halloween Decor（万圣节家居装饰潮流）",
          "regionGroup": "global",
          "category": "生活方式/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "259.9K",
              "views": "818.6M"
            }
          ],
          "summary": "万圣节主题家居装饰布置相关内容标签，博主展示南瓜灯、鬼屋造景等装饰创意。",
          "whyHot": "万圣节季节性家居装饰是美国TikTok每年秋季稳定的生活方式类热门话题。",
          "origin": "季节性生活方式内容，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweendecor",
            "search": "https://www.tiktok.com/search?q=halloweendecor",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可考虑万圣节限定活动皮肤/场景装饰联动。",
            "video": "适合做游戏内万圣节场景布置向短视频。"
          },
          "rank": 8
        },
        {
          "tag": "#wibu",
          "name": "Wibu（东南亚\"动漫宅\"文化圈自称梗）",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "108.3K",
              "views": "786.3M"
            }
          ],
          "summary": "\"Wibu\"是印尼语/越南语圈对\"weeaboo\"（狂热动漫宅）一词的本地化戏称，用户以此自我调侃动漫爱好身份。",
          "whyHot": "东南亚动漫粉丝群体庞大，该词长期作为身份认同梗被大量使用，衍生表情包和自嘲向内容。",
          "origin": "东南亚网络社群自发形成的文化用语。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/wibu",
            "search": "https://www.tiktok.com/search?q=wibu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "可面向核心二次元用户群体做联名宣传。",
            "video": "适合做\"动漫宅自嘲\"风格游戏内容招募短视频。"
          },
          "rank": 9
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
              "posts": "67.2K",
              "views": "777.7M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
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
              "posts": "165.4K",
              "views": "709.6M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
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
          "tag": "#pumpkinseason",
          "name": "Pumpkin Season（南瓜季/秋天开启）",
          "regionGroup": "global",
          "category": "生活方式/季节",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "161.8K",
              "views": "684M"
            }
          ],
          "summary": "北美秋季\"南瓜季\"开启标志的生活方式标签——摘南瓜、南瓜雕刻、南瓜香料拿铁、南瓜田打卡等秋季限定内容9月起集中爆发（90天窗口6.08亿播放）。",
          "whyHot": "南瓜季是北美最强的季节性内容IP之一（类似菲律宾Ber Months），9月美国南瓜农场与南瓜香料限定商品密集上线，形成年度规律性流量高峰，与#fallvibes、#pumpkinspice互相呼应。",
          "origin": "北美民俗季节性内容自然形成。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/pumpkinseason",
            "search": "https://www.tiktok.com/search?q=pumpkinseason",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "秋季限定主题（南瓜配色/温暖质感）适合MCGG季节性皮肤与棋盘活动。",
            "video": "适合做\"秋日氛围感\"主题活动剪辑。"
          },
          "rank": 12
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
              "posts": "165.3K",
              "views": "651M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "秋季限定配色/主题活动适合季节性运营排期。",
            "video": "适合做\"秋日温暖感\"主题氛围剪辑。"
          },
          "rank": 13
        },
        {
          "tag": "#timem",
          "name": "Tìm Em（越南热单《Tìm Em》）",
          "regionGroup": "sea",
          "category": "音乐",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "118.7K",
              "views": "595.5M"
            }
          ],
          "summary": "越南音乐人Hngle的热单《Tìm Em》（寻找你）标签，歌曲当前位列越南nhaccuatui Top 50热歌榜，大量用户使用该曲作BGM创作情感/怀旧向内容（90天窗口6.06亿播放，歌手名标签#hngle同步在榜3.4亿）。",
          "whyHot": "本地热单BGM化传播是越南TikTok最稳定的流量模式之一，《Tìm Em》旋律适配年轻用户偏好的情感叙事剪辑，形成\"听歌→用BGM→再传播\"的滚雪球循环。",
          "origin": "音乐人作品的短视频二次传播。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/timem",
            "search": "https://www.tiktok.com/search?q=timem",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "越南本地热单合作适合做本地化BGM营销（活动主题曲方向）。",
            "video": "适合做越南风情感向剪辑的BGM选型参考。"
          },
          "rank": 14
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
              "posts": "84K",
              "views": "568M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
          },
          "rank": 15
        },
        {
          "tag": "#bb28",
          "name": "Big Brother 28（美版《老大哥》第28季）",
          "regionGroup": "global",
          "category": "综艺/真人秀",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "48K",
              "views": "533.4M"
            }
          ],
          "summary": "CBS经典真人秀《Big Brother》美国版第28季标签，2026夏季档播出，选手策略对抗、提名淘汰仪式与直播切片是主要内容（90天窗口4.8亿播放），与菲律宾PBB(#pbb)、Love Island(#casaamor)构成真人秀流量带。",
          "whyHot": "《老大哥》是美国电视史上最长寿的真人秀之一，\"密室策略博弈+背叛结盟\"叙事与每日直播切片给粉丝提供海量讨论素材，夏季播出季为规律性流量高峰。",
          "origin": "节目官方播出话题+粉丝切片二创。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/bb28",
            "search": "https://www.tiktok.com/search?q=bb28",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "\"结盟与背叛\"叙事与自走棋品类高度契合，可做赛事剧本化包装。",
            "video": "适合做\"联盟与背叛\"式对局叙事剪辑。"
          },
          "rank": 16
        },
        {
          "tag": "#astagabercanda",
          "name": "Astaga Bercanda（印尼感叹梗语）",
          "regionGroup": "sea",
          "category": "网络热梗",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "188.1K",
              "views": "528.9M"
            },
            {
              "code": "MY",
              "posts": "6.1K",
              "views": "59.1M"
            }
          ],
          "summary": "印尼语梗语标签，意为\"天呐，开玩笑的\"（astaga=天呐，bercanda=开玩笑），创作者用作反转玩笑类内容的点睛标签，在印尼和马来西亚市场走热（90天窗口5.16亿播放）。",
          "whyHot": "梗语标签是印尼短视频文化的典型传播形态，\"一本正经开场→玩笑反转收尾\"的结构创作门槛低、互动性强，用户跟风模仿形成滚雪球【具体走红源头待核验】。",
          "origin": "印尼语梗语的自发传播。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/astagabercanda",
            "search": "https://www.tiktok.com/search?q=astagabercanda",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "印尼语梗语本地化适合做幽默向营销文案参考。",
            "video": "适合做\"反转玩笑\"结构短视频（严肃铺垫→游戏神转折）。"
          },
          "rank": 17
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
              "posts": "259.1K",
              "views": "482.1M"
            },
            {
              "code": "ID",
              "posts": "111.8K",
              "views": "178.9M"
            },
            {
              "code": "PH",
              "posts": "48.2K",
              "views": "128.1M"
            },
            {
              "code": "MY",
              "posts": "18K",
              "views": "34.5M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "月度营销日历可借月份标签做规律性活动运营（每月1号\"新月新阵容\"）。",
            "video": "适合做\"九月新开始\"主题活动剪辑。"
          },
          "rank": 18
        },
        {
          "tag": "#nghihesonghihuu",
          "name": "Nghỉ Hè Xong Nghỉ Hưu（\"放完暑假就退休\"越南语调侃梗）",
          "regionGroup": "sea",
          "category": "生活方式/校园",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "26.1K",
              "views": "474.7M"
            }
          ],
          "summary": "越南语调侃短语，直译\"放完暑假紧接着退休\"，学生/老师用来自嘲暑假结束后开学的疲惫与不情愿心态。",
          "whyHot": "开学季固定情绪共鸣梗，用夸张的\"退休\"说法制造反差幽默感，是每年8-9月开学季的规律性校园热梗。",
          "origin": "网络自发调侃用语，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/nghihesonghihuu",
            "search": "https://www.tiktok.com/search?q=nghihesonghihuu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": {
            "author": "sunseeshowbiz",
            "videoId": "7683906780681751816"
          },
          "fusionSuggestion": {
            "commercial": "可关注开学季情绪营销节点，做\"开学后如何靠游戏放松\"角度的轻松内容。",
            "video": "适合做开学季自嘲/共鸣类短视频文案参考。"
          },
          "rank": 19
        },
        {
          "tag": "#parksiwoo",
          "name": "Park Si-woo（《检察官的提案》剧中演员，具体身份待核验）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "91.5K",
              "views": "450M"
            }
          ],
          "summary": "标签与韩剧《검사의 제안/The Prosecutor Proposal》（#theprosecutorsproposal）同期出现，指向该剧主演之一，属\"剧带人\"性质——核心话题是剧集本身。",
          "whyHot": "剧集播出期内主演讨论度随之上涨，机制清楚（剧集驱动）；演员具体身份细节未逐一核实。【含义待核验】",
          "origin": "韩剧官方剧集+观众讨论。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/parksiwoo",
            "search": "https://www.tiktok.com/search?q=parksiwoo",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 20
        },
        {
          "tag": "#kimyoonsik",
          "name": "Kim Yoon-sik（《检察官的提案》剧中演员，具体身份待核验）",
          "regionGroup": "sea",
          "category": "影视剧集",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "95.2K",
              "views": "422.5M"
            }
          ],
          "summary": "标签与韩剧《검사의 제안/The Prosecutor Proposal》（#theprosecutorsproposal）同期出现，指向该剧主演之一，属\"剧带人\"性质——核心话题是剧集本身。",
          "whyHot": "剧集播出期内主演讨论度随之上涨，机制清楚（剧集驱动）；演员具体身份细节未逐一核实。【含义待核验】",
          "origin": "韩剧官方剧集+观众讨论。",
          "confidence": "uncertain",
          "links": {
            "tag": "https://www.tiktok.com/tag/kimyoonsik",
            "search": "https://www.tiktok.com/search?q=kimyoonsik",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "MCGG可结合该热梗特征做轻量联动内容，具体方向待策划团队评估。",
            "video": "可参考该热梗形式做本地化短视频创意，具体脚本待策划。"
          },
          "rank": 21
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
              "posts": "188.3K",
              "views": "420.9M"
            },
            {
              "code": "ID",
              "posts": "47.2K",
              "views": "73.3M"
            },
            {
              "code": "PH",
              "posts": "63.2K",
              "views": "158.8M"
            },
            {
              "code": "MY",
              "posts": "17.6K",
              "views": "35.6M"
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
            "status": "nonapplicable",
            "note": "本轮未重新抓取抖音热搜快照，沿用上次核实结论/暂缺。"
          },
          "videoEmbed": null,
          "fusionSuggestion": {
            "commercial": "同september：月度营销日历运营。",
            "video": "适合做月度总结式活动回顾剪辑。"
          },
          "rank": 22
        }
      ]
    }
  }
};
