window.TREND_DATA = {
  "meta": {
    "lastUpdated": "2026-09-12T00:15:00+08:00",
    "methodology": "TikTok 官方不提供「全球娱乐总榜」，本榜为 5 个市场（美国 US 代表全球+欧美，印尼 ID / 菲律宾 PH / 越南 VN / 马来西亚 MY 代表东南亚）娱乐类（News & Entertainment）榜单合并去重、按官方播放量排序得出，不是某一张官方榜的原生前N条。每个市场每个时间窗口在合并前均已抓取≥30条候选，并排除三类内容：①硬新闻/政治事件/自然灾害通报及其衍生的\"灾情居家/避灾\"类内容、刑事案件等新闻类；②\"播放量高但公开检索无法确认具体走红原因\"的模糊话题（不满足\"火的原因写得清楚明白\"的最低标准）；③以某个具体真实公众人物（明星/网红/运动员等）为核心话题的内容，即使该人物身份或事件本身是清楚的，也不纳入本榜——本榜聚焦泛娱乐梗/文化庆典/影视综艺IP/生活方式潮流，不做真人物话题的榜单化处理。国家法定节日的全民庆典类内容视为文化娱乐范畴保留。TikTok Creative Center 官方仅提供 7天/30天/90天 三个时间窗口档位（无120天档位，无效period参数会静默回退到7天档，需注意）。官方页面排序采用其自有trending算法而非单纯按播放量降序，本榜的\"按播放量重排\"是本站自定口径，与官方页面顺序不完全一致属正常现象。",
    "windowDescs": {
      "7": "近7天，TikTok Creative Center 官方口径",
      "30": "近30天，TikTok Creative Center 官方口径",
      "90": "近90天，TikTok Creative Center 官方口径"
    },
    "douyinFetchedAt": "2026-09-10T10:11:22+08:00",
    "douyinNote": "抖音热搜与 TikTok Creative Center 的热度算法、语言、内容生态均不同，两者数值不可直接比较；抖音数据仅用于核实同一话题是否在国内同步可见，不参与本榜排序。",
    "videoNote": "每条下方嵌入的视频为本人实际打开该话题页时当前展示的真实视频（作者+视频ID均为抓取所得，非编造）；若近期抓取时话题页触发登录验证或未能成功嵌入，则该条 videoEmbed 为 null，页面会显示「点击在 TikTok 打开」的兜底入口，不编造视频信息。",
    "fusionNote": "融合建议为基于该热梗特征给 MCGG（Magic Chess: GoGo）的创意方向参考，非官方立项计划；凡涉及真实人物肖像、第三方IP版权的条目，均已标注风险并给出更稳妥的替代路径，不建议未经授权直接商用。",
    "redLine": "未编造任何带数字 ID 的具体视频 URL；泰语/越南语/印尼语本地人名、剧集、缩写类话题含义无法独立确认的，一律标注【含义待核验】。"
  },
  "windows": {
    "7": {
      "items": [
        {
          "rank": 1,
          "tag": "#khaigiang",
          "name": "Khai Giảng（越南语\"开学典礼\"）",
          "regionGroup": "sea",
          "category": "校园/生活",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "70.9K",
              "views": "333.8M"
            }
          ],
          "summary": "越南9月5日左右全国统一开学典礼相关内容，是越南每年固定的教育系统仪式性活动。",
          "whyHot": "越南教育部规定每年9月5日为全国统一开学日，各地学校举行升旗、致辞等开学典礼，家长和学生大量发布相关记录视频，是每年周期性话题。",
          "origin": "越南教育系统官方固定节庆日，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/khaigiang",
            "search": "https://www.tiktok.com/search?q=khaigiang",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
          }
        },
        {
          "rank": 2,
          "tag": "#buddy",
          "name": "Buddy（PokéDance舞蹈挑战主题曲）",
          "regionGroup": "global",
          "category": "舞蹈挑战",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "21.2K",
              "views": "309.2M"
            }
          ],
          "summary": "美国TikTok近期热门舞蹈挑战\"PokéDance\"的主题曲话题标签，用户跟着歌词\"Buddy buddy boom boom / Hey you're my my ma my buddy\"编排简单肢体动作，常搭配AI宠物/卡通滤镜特效拍摄。",
          "whyHot": "歌词简单重复、编舞门槛低，适合泛年龄层跟拍，配合TikTok AI特效工具形成低门槛强互动的传播组合，是典型的舞蹈类挑战热梗。",
          "origin": "创作者自发编排的舞蹈挑战，非官方品牌发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/buddy",
            "search": "https://www.tiktok.com/search?q=buddy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "brooklynguy01",
            "videoId": "7682297188982050061"
          },
          "fusionSuggestion": {
            "commercial": "可考虑让MCGG英雄IP角色用同款\"Buddy\"舞蹈动作剪辑二创，蹭舞蹈挑战流量。",
            "video": "适合做游戏角色跳舞版PokéDance模仿视频。"
          }
        },
        {
          "rank": 3,
          "tag": "#missworld",
          "name": "Miss World 2026（第73届世界小姐总决赛，越南芽庄举办）",
          "regionGroup": "sea",
          "category": "选美赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "9.3K",
              "views": "290.1M"
            }
          ],
          "summary": "第73届世界小姐(Miss World)总决赛于2026年9月5日在越南芽庄举行，来自111个国家/地区的佳丽参赛，多米尼加共和国选手Joheirry Mola夺冠，该国时隔44年再获此项赛事冠军。",
          "whyHot": "赛事在越南本土举办带动东南亚地区大量围观和转发；阿根廷选手礄穿绣有梅西肖像的礄服登场也引发额外话题讨论，赛事本身为历史悠久的国际选美赛事(1951年创办)，具备天然的全球关注度。",
          "origin": "真实官方国际赛事，有多方媒体报道确认(包括赛事官方账号发布的加冕视频)。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missworld",
            "search": "https://www.tiktok.com/search?q=missworld",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "nhanstudio97",
            "videoId": "7682236274169679124"
          },
          "fusionSuggestion": {
            "commercial": "选美赛事本身可考虑\"荣耀加冕\"主题外观设计灵感，避免直接使用真人肖像。",
            "video": "可做\"东南亚主场荣耀\"主题短视频，不直接使用赛事真实画面。"
          }
        },
        {
          "rank": 4,
          "tag": "#anime",
          "name": "Anime（泛动漫内容合集标签）",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "51.8K",
              "views": "150.1M"
            }
          ],
          "summary": "马来西亚TikTok上泛动漫内容的合集类标签，覆盖各类日本动画剪辑、二创与讨论，不指向单一具体事件。",
          "whyHot": "动漫爱好者社群基数大，剪辑/吐槽/角色扮演等内容持续产出，是常年活跃的泛娱乐标签而非单一热点事件。",
          "origin": "泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/anime",
            "search": "https://www.tiktok.com/search?q=anime",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "xhenxz76",
            "videoId": "7623728626411769109"
          },
          "fusionSuggestion": {
            "commercial": "可考虑动漫风格插画/角色设计与MCGG联动，蹭泛动漫受众。",
            "video": "适合做动漫风格英雄二创短片。"
          }
        },
        {
          "rank": 5,
          "tag": "#spongebob",
          "name": "海绵宝宝（SpongeBob SquarePants）",
          "regionGroup": "sea",
          "category": "动画/影视",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "9.8K",
              "views": "142.7M"
            }
          ],
          "summary": "经典美国动画《海绵宝宝》相关话题，梗图、台词剪辑与表情包在TikTok长期具有稳定的二创热度。",
          "whyHot": "作为国民级动画IP，其经典片段常被用作各类吐槽/反转类视频的素材，具体本轮爆量原因【待核验】。",
          "origin": "IP官方内容衍生传播。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spongebob",
            "search": "https://www.tiktok.com/search?q=spongebob",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "phillyknowstv",
            "videoId": "7682470965724318989"
          },
          "fusionSuggestion": {
            "commercial": "可考虑与Nickelodeon官方联动做限时活动皮肤，需走版权合作路径。",
            "video": "适合借用海绵宝宝经典梗做游戏角色的搞笑混剪。"
          }
        },
        {
          "rank": 6,
          "tag": "#michaelmyers",
          "name": "Michael Myers（《月光光心慌慌》系列反派角色）",
          "regionGroup": "global",
          "category": "影视/万圣节",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "11.5K",
              "views": "95.8M"
            }
          ],
          "summary": "美国恐怖电影系列《Halloween》标志性反派角色，随万圣节季节临近，相关cosplay、混剪内容在TikTok升温。",
          "whyHot": "万圣节季节性话题，经典恐怖IP角色具有稳定的季节性二创热度。",
          "origin": "IP官方内容衍生传播，具有季节性规律。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/michaelmyers",
            "search": "https://www.tiktok.com/search?q=michaelmyers",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "dnastyeditz",
            "videoId": "7682735549228141854"
          },
          "fusionSuggestion": {
            "commercial": "可考虑万圣节限定恐怖风格皮肤/活动，蹭季节性话题。",
            "video": "适合做万圣节主题的游戏角色cosplay混剪。"
          }
        },
        {
          "rank": 7,
          "tag": "#virall",
          "name": "Virall（泛\"求上热门\"标签）",
          "regionGroup": "sea",
          "category": "泛流量标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "31.1K",
              "views": "92.5M"
            }
          ],
          "summary": "越南TikTok上常见的泛流量标签（\"viral\"的口语拼写变体），创作者常用于给内容打标希望获得推荐流量，不指向具体单一事件。",
          "whyHot": "属于创作者常规蹭流量标签打法，非具体热点事件。",
          "origin": "泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/virall",
            "search": "https://www.tiktok.com/search?q=virall",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "kostqrw_0",
            "videoId": "7617401766916738312"
          },
          "fusionSuggestion": {
            "commercial": "泛流量标签，不适合单独做商业化联动。",
            "video": "可作为常规发布小技巧参考，非内容方向。"
          }
        },
        {
          "rank": 8,
          "tag": "#spongebobsquarepants",
          "name": "海绵宝宝（SpongeBob SquarePants，全名标签）",
          "regionGroup": "sea",
          "category": "动画/影视",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "8.7K",
              "views": "83.7M"
            }
          ],
          "summary": "经典美国动画《海绵宝宝》相关话题（全名标签），梗图、台词剪辑与表情包在TikTok长期具有稳定的二创热度。",
          "whyHot": "作为国民级动画IP，其经典片段常被用作各类吐槽/反转类视频的素材，具体本轮爆量原因【待核验】。",
          "origin": "IP官方内容衍生传播。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/spongebobsquarepants",
            "search": "https://www.tiktok.com/search?q=spongebobsquarepants",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "brain.thot",
            "videoId": "7563946851674737942"
          },
          "fusionSuggestion": {
            "commercial": "可考虑与Nickelodeon官方联动做限时活动皮肤，需走版权合作路径。",
            "video": "适合借用海绵宝宝经典梗做游戏角色的搞笑混剪。"
          }
        },
        {
          "rank": 9,
          "tag": "#macha",
          "name": "Macha（抹茶风味饮品/甜品热潮，\"matcha\"的口语拼写变体）",
          "regionGroup": "sea",
          "category": "美食",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "8K",
              "views": "77M"
            }
          ],
          "summary": "印尼TikTok上围绕抹茶（matcha）风味饮品与甜品的美食内容标签，涵盖抹茶饮品测评、甜品制作教程等。",
          "whyHot": "抹茶风味饮品/甜品是近年持续流行的美食潮流，测评与制作类内容长期具有稳定关注度，非单一突发事件。",
          "origin": "美食潮流类泛话题，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/macha",
            "search": "https://www.tiktok.com/search?q=macha",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "arunartist07",
            "videoId": "6806577416291536130"
          },
          "fusionSuggestion": {
            "commercial": "可考虑抹茶配色的游戏内联名周边/皮肤视觉参考。",
            "video": "适合做美食探店/甜品测评风格的游戏周边内容。"
          }
        },
        {
          "rank": 10,
          "tag": "#sabilutaubah",
          "name": "Sabilut Taubah（印尼语\"忏悔/回归正道之路\"，宗教主题内容）",
          "regionGroup": "sea",
          "category": "宗教/文化",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "5.3K",
              "views": "73.4M"
            }
          ],
          "summary": "印尼语宗教用语，直译\"忏悔/回归正道之路\"，多用于伊斯兰教宗教反思、劝善类内容标签。",
          "whyHot": "印尼作为穆斯林人口大国，宗教反思/劝善类内容长期具有稳定受众基础，非单一突发事件。",
          "origin": "宗教文化类泛话题，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sabilutaubah",
            "search": "https://www.tiktok.com/search?q=sabilutaubah",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "ilhamfirdausaa",
            "videoId": "7373122756721806597"
          },
          "fusionSuggestion": {
            "commercial": "涉及宗教内容，不建议做商业化联动。",
            "video": "不建议制作相关二创内容。"
          }
        },
        {
          "rank": 11,
          "tag": "#halloweenthegame",
          "name": "Halloween The Game（万圣节主题游戏/挑战梗）",
          "regionGroup": "global",
          "category": "游戏/万圣节",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "10.5K",
              "views": "73.1M"
            }
          ],
          "summary": "随万圣节季节临近，以\"万圣节游戏\"为主题的挑战类内容标签，涵盖恐怖主题小游戏实况、装扮挑战等。",
          "whyHot": "季节性话题，万圣节临近带动恐怖题材游戏实况、装扮挑战类内容集中爆发，是每年10月万圣节前的规律性游戏/装扮热梗。",
          "origin": "季节性泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/halloweenthegame",
            "search": "https://www.tiktok.com/search?q=halloweenthegame",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "barbiebitez",
            "videoId": "7681937303111060766"
          },
          "fusionSuggestion": {
            "commercial": "可考虑万圣节限定恐怖风格活动皮肤，蹭季节性话题。",
            "video": "适合做万圣节主题的游戏内小游戏/装扮挑战预告。"
          }
        },
        {
          "rank": 12,
          "tag": "#sidehustlelive",
          "name": "Side Hustle Live（副业直播带货主题）",
          "regionGroup": "sea",
          "category": "生活方式/电商",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "43.3K",
              "views": "68.7M"
            }
          ],
          "summary": "越南TikTok上聚焦\"副业直播\"的内容标签，创作者分享通过TikTok Live带货/兼职增收的经验与实况片段。",
          "whyHot": "东南亚创作者经济与直播电商持续升温，\"副业变现\"类内容长期具有稳定关注度，非单一突发事件。",
          "origin": "创作者经济类泛话题，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/sidehustlelive",
            "search": "https://www.tiktok.com/search?q=sidehustlelive",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "nhuquynhtran2k",
            "videoId": "7663087375886732564"
          },
          "fusionSuggestion": {
            "commercial": "可关注直播带货类内容形式，探索游戏内商城/皮肤的直播带货式推广。",
            "video": "适合做\"游戏主播副业\"角度的内容策划参考。"
          }
        },
        {
          "rank": 13,
          "tag": "#livecanbeeasy",
          "name": "Live Can Be Easy（TikTok直播\"开播不难\"创作者梗）",
          "regionGroup": "global",
          "category": "创作者/直播",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "34.5K",
              "views": "49.1M"
            },
            {
              "code": "PH",
              "posts": "15.4K",
              "views": "18M"
            },
            {
              "code": "VN",
              "posts": "35.9K",
              "views": "67.3M"
            }
          ],
          "summary": "TikTok创作者社群常用鼓励性短语\"开直播其实很简单\"，与#liveiseasy/#livewithlowfollowers等同属一组鼓励新人开播的创作者互助话题。",
          "whyHot": "低粉创作者群体庞大，互相鼓励\"哪怕粉丝少也可以开播\"的内容形成稳定的社群互助型热梗，跨美国/菲律宾/越南多市场同步出现。",
          "origin": "创作者社群自发形成的鼓励型话题，无官方发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/livecanbeeasy",
            "search": "https://www.tiktok.com/search?q=livecanbeeasy",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "chaigocmit",
            "videoId": "7641094587108396305"
          },
          "fusionSuggestion": {
            "commercial": "可关注创作者互助文化，探索游戏官方账号\"陪伴新主播开播\"类互动活动。",
            "video": "适合做\"新主播开播小技巧\"系列内容参考。"
          }
        },
        {
          "rank": 14,
          "tag": "#animeedit",
          "name": "Anime Edit（泛动漫剪辑合集标签）",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "43.9K",
              "views": "64.8M"
            }
          ],
          "summary": "马来西亚TikTok上泛动漫剪辑类内容的合集标签，涵盖各类动画片段卡点混剪、角色向AMV等二创，不指向单一具体事件。",
          "whyHot": "动漫剪辑长期是TikTok稳定的泛娱乐内容品类，创作者持续产出卡点/AMV类作品。",
          "origin": "泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/animeedit",
            "search": "https://www.tiktok.com/search?q=animeedit",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "zynix207",
            "videoId": "7681966193149807880"
          },
          "fusionSuggestion": {
            "commercial": "可考虑MCGG英雄技能特效做卡点混剪素材，蹭泛动漫剪辑受众。",
            "video": "适合做英雄技能卡点AMV风格短片。"
          }
        },
        {
          "rank": 15,
          "tag": "#thanhxuan",
          "name": "Thanh Xuân（越南语\"青春\"，怀旧主题标签）",
          "regionGroup": "sea",
          "category": "生活方式/怀旧",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "18.1K",
              "views": "61.7M"
            }
          ],
          "summary": "越南语\"青春\"，用于怀旧向内容标签，创作者常用其分享校园/年少时期的回忆向内容与老歌翻唱。",
          "whyHot": "怀旧类内容长期是TikTok稳定的情感共鸣品类，非单一突发事件。",
          "origin": "泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/thanhxuan",
            "search": "https://www.tiktok.com/search?q=thanhxuan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "300000778_",
            "videoId": "7682001881727651092"
          },
          "fusionSuggestion": {
            "commercial": "可关注怀旧情绪营销，做\"青春回忆\"角度的游戏怀旧向内容。",
            "video": "适合做青春怀旧风格的游戏角色成长向短片。"
          }
        },
        {
          "rank": 16,
          "tag": "#chimpanzee",
          "name": "Chimpanzee（黑猩猩相关动物内容）",
          "regionGroup": "global",
          "category": "动物",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "2.4K",
              "views": "59.4M"
            }
          ],
          "summary": "美国TikTok上黑猩猩相关的动物内容标签，涵盖动物园/野生动物纪录类片段及趣味互动视频。",
          "whyHot": "动物类内容长期是TikTok稳定的泛娱乐品类，具体本轮爆量单一视频【待核验】。",
          "origin": "泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/chimpanzee",
            "search": "https://www.tiktok.com/search?q=chimpanzee",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "criminal__acttv",
            "videoId": "7683280135788825870"
          },
          "fusionSuggestion": {
            "commercial": "可关注动物拟人化萌趣内容形式做泛化参考。",
            "video": "适合做萌趣动物向的游戏宠物/坐骑系统内容参考。"
          }
        },
        {
          "rank": 17,
          "tag": "#khaigiangnamhocmoi",
          "name": "Khai Giảng Năm Học Mới（越南语\"新学年开学典礼\"，完整表述）",
          "regionGroup": "sea",
          "category": "教育/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "18.5K",
              "views": "54.6M"
            }
          ],
          "summary": "越南语\"新学年开学典礼\"的完整表述，与#khaigiang为同一开学季主题的不同变体。",
          "whyHot": "与#khaigiang同源，越南教育部规定每年9月5日为全国统一开学日，各地学校举行开学典礼，是庆典矩阵中的完整表述变体。",
          "origin": "越南教育部规定的全国性开学日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/khaigiangnamhocmoi",
            "search": "https://www.tiktok.com/search?q=khaigiangnamhocmoi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可关注开学季情绪营销节点，做轻松向内容。",
            "video": "适合做开学季主题的短视频文案参考。"
          }
        },
        {
          "rank": 18,
          "tag": "#manifest",
          "name": "Manifest（\"显化/心想事成\"自我实现内容潮流）",
          "regionGroup": "sea",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "20K",
              "views": "49.9M"
            }
          ],
          "summary": "\"manifestation\"（显化）是TikTok长期流行的自我成长内容品类，用户分享通过正向思考、可视化目标来\"心想事成\"的经历和方法。",
          "whyHot": "泛心理健康/自我提升类内容长期具有稳定受众，用户通过分享显化实现的具体案例（涨薪、恋爱、考试通过等）持续产出，是常年活跃的评论区互动型泛娱乐标签，非单一突发事件。",
          "origin": "源自西方新时代自我实现理念，在TikTok被泛用为生活方式内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/manifest",
            "search": "https://www.tiktok.com/search?q=manifest",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "souuuyyyaaa",
            "videoId": "7680917169860807954"
          },
          "fusionSuggestion": {
            "commercial": "可关注\"心想事成\"正向情绪营销角度，做游戏内愿望/抽卡系统的轻松向内容。",
            "video": "适合做\"显化愿望成真瞬间\"风格的游戏内容参考。"
          }
        },
        {
          "rank": 19,
          "tag": "#naruto",
          "name": "火影忍者 Naruto",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "39K",
              "views": "31.7M"
            }
          ],
          "summary": "经典日本动漫IP《火影忍者》相关内容合集标签，涵盖角色剪辑、名场面二创等。",
          "whyHot": "作为长青国民级动漫IP，拥有稳定的全球粉丝基础，角色/剧情相关剪辑内容长期持续产出，是常年活跃的泛娱乐标签而非单一热点事件。",
          "origin": "长青动漫IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/naruto",
            "search": "https://www.tiktok.com/search?q=naruto",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "aaa..edits",
            "videoId": "7682839469489212694"
          },
          "fusionSuggestion": {
            "commercial": "可考虑忍者风格皮肤/技能特效做泛化联动参考。",
            "video": "适合做忍术风格的英雄技能卡点混剪。"
          }
        },
        {
          "rank": 20,
          "tag": "#onepiece",
          "name": "海贼王 One Piece",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "42.4K",
              "views": "31.3M"
            }
          ],
          "summary": "日本长青动漫IP《海贼王》相关内容合集标签。",
          "whyHot": "作为全球发行量最高的漫画IP之一，粉丝群体庞大，剪辑/角色扮演/名场面二创内容长期持续产出，是常年活跃的泛娱乐标签。",
          "origin": "长青动漫IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/onepiece",
            "search": "https://www.tiktok.com/search?q=onepiece",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "netflixvn",
            "videoId": "7275585530400640274"
          },
          "fusionSuggestion": {
            "commercial": "可考虑海盗风格皮肤做泛化联动参考。",
            "video": "适合做冒险主题的英雄剧情向短片。"
          }
        },
        {
          "rank": 21,
          "tag": "#dragoncon",
          "name": "Dragon Con 2026（美国亚特兰大流行文化盛会，40周年）",
          "regionGroup": "global",
          "category": "展会",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "6.3K",
              "views": "29.7M"
            }
          ],
          "summary": "北美规模最大的科幻、漫画与流行文化盛会之一，2026年迎来40周年，于劳动节假期（9月4日-7日）在美国亚特兰大举行。",
          "whyHot": "本届吸引约7.5万参会者，为当地慈善机构筹款超32万美元，cosplay游行、明星见面会及展区内容在TikTok集中涌现，是每年劳动节假期的固定重磅流行文化活动。",
          "origin": "官方流行文化盛会，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dragoncon",
            "search": "https://www.tiktok.com/search?q=dragoncon",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "lizzyy_bee",
            "videoId": "7682533194880830733"
          },
          "fusionSuggestion": {
            "commercial": "可考虑参与同类展会做cosplay/角色扮演主题线下联动。",
            "video": "适合做游戏角色cosplay风格的展会向内容参考。"
          }
        },
        {
          "rank": 22,
          "tag": "#chiikawa",
          "name": "Chiikawa（吉伊卡哇，日本人气可爱角色IP）",
          "regionGroup": "sea",
          "category": "动画角色",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "3.1K",
              "views": "28.6M"
            }
          ],
          "summary": "日本插画家原创的人气角色IP\"Chiikawa\"（吉伊卡哇），以治愈系可爱画风走红全球。",
          "whyHot": "该IP周边、动画短片、表情包长期在TikTok获得高传播，治愈系萌系内容具有稳定的跨市场受众基础，是常年活跃的泛娱乐IP标签。",
          "origin": "日本独立插画家原创IP，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/chiikawa",
            "search": "https://www.tiktok.com/search?q=chiikawa",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "billythe.bean",
            "videoId": "7682307719977520404"
          },
          "fusionSuggestion": {
            "commercial": "可考虑萌系吉祥物风格周边做泛化视觉参考。",
            "video": "适合做治愈系萌趣风格的游戏内容参考。"
          }
        },
        {
          "rank": 23,
          "tag": "#jjk",
          "name": "咒术回战 Jujutsu Kaisen（缩写标签）",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "33.9K",
              "views": "24.3M"
            }
          ],
          "summary": "日本人气动漫《咒术回战》的缩写标签，相关内容合集。",
          "whyHot": "作为近年热度最高的动漫IP之一，角色剪辑/AMV/cosplay内容长期活跃，是常年稳定的泛娱乐标签。",
          "origin": "长青动漫IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/jjk",
            "search": "https://www.tiktok.com/search?q=jjk",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "._._._yz._._._",
            "videoId": "7683129232364522773"
          },
          "fusionSuggestion": {
            "commercial": "可考虑咒力风格技能特效做泛化联动参考。",
            "video": "适合做暗黑风格英雄技能卡点混剪。"
          }
        },
        {
          "rank": 24,
          "tag": "#tiktokdoyourmagic",
          "name": "TikTok Do Your Magic（TikTok官方创作者激励活动标签）",
          "regionGroup": "sea",
          "category": "创作者活动",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "8.8K",
              "views": "20M"
            },
            {
              "code": "VN",
              "posts": "1.9K",
              "views": "2.2M"
            }
          ],
          "summary": "TikTok平台官方发起的创作者激励活动标签，鼓励用户发挥创意、展示才艺参与平台推广。",
          "whyHot": "作为平台官方运营向标签，创作者广泛使用以获得算法流量倾斜，是常规的平台创作者激励型标签，非具体单一事件驱动。",
          "origin": "TikTok平台官方发起，非创作者自发。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/tiktokdoyourmagic",
            "search": "https://www.tiktok.com/search?q=tiktokdoyourmagic",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "hayif7",
            "videoId": "7683339730884267282"
          },
          "fusionSuggestion": {
            "commercial": "泛平台运营标签，不适合单独做商业化联动。",
            "video": "可作为常规发布小技巧参考，非内容方向。"
          }
        },
        {
          "rank": 25,
          "tag": "#demonslayer",
          "name": "鬼灭之刃 Demon Slayer",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "41.3K",
              "views": "18.9M"
            }
          ],
          "summary": "日本人气动漫《鬼灭之刃》相关内容合集标签。",
          "whyHot": "作为近年现象级动漫/剧场版IP，角色剪辑、剧场版相关内容持续在TikTok获得高传播，是稳定的泛娱乐动漫标签。",
          "origin": "长青动漫IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/demonslayer",
            "search": "https://www.tiktok.com/search?q=demonslayer",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "choppem.edits",
            "videoId": "7683536466017881357"
          },
          "fusionSuggestion": {
            "commercial": "可考虑刀剑风格技能特效做泛化联动参考。",
            "video": "适合做剑术风格的英雄技能卡点混剪。"
          }
        },
        {
          "rank": 26,
          "tag": "#labor",
          "name": "Labor（美国劳动节，9月第一个星期一）",
          "regionGroup": "global",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "3K",
              "views": "17.6M"
            }
          ],
          "summary": "美国劳动节（Labor Day）是联邦法定假日，落在每年9月第一个星期一，象征夏季结束。",
          "whyHot": "劳动节长周末期间家庭聚会、烧烤、outlet促销季、返校季相关内容集中涌现，是美国每年周期性的季节性话题标签。",
          "origin": "美国联邦法定节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/labor",
            "search": "https://www.tiktok.com/search?q=labor",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "bazoka858",
            "videoId": "7677990420055362847"
          },
          "fusionSuggestion": {
            "commercial": "可考虑劳动节长周末促销活动联动。",
            "video": "适合做劳动节主题的游戏内促销活动预告。"
          }
        },
        {
          "rank": 27,
          "tag": "#greenflag",
          "name": "Green Flag（\"关系里的好信号\"梗，与Red Flag相对）",
          "regionGroup": "sea",
          "category": "情感/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "7K",
              "views": "17M"
            }
          ],
          "summary": "源自\"red flag\"（危险信号/警示行为）的反义梗，用户用\"green flag\"分享恋爱、社交关系中值得称赞的正向行为。",
          "whyHot": "情感/两性关系类内容长期是TikTok的稳定评论区互动品类，用户通过列举\"green flag\"行为进行共鸣式讨论和二创，是长期流行的泛娱乐情感标签，非单一突发事件。",
          "origin": "网络流行语，源自\"red flag\"梗的反义延伸，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/greenflag",
            "search": "https://www.tiktok.com/search?q=greenflag",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "jjkwifey_yy",
            "videoId": "7682094120504020244"
          },
          "fusionSuggestion": {
            "commercial": "可关注\"good teammate green flag\"角度做游戏内组队/社交系统轻松向内容。",
            "video": "适合做\"游戏队友的green flag瞬间\"风格短视频。"
          }
        },
        {
          "rank": 28,
          "tag": "#boruto",
          "name": "博人传 Boruto（《火影忍者》续作）",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "25.5K",
              "views": "16.2M"
            }
          ],
          "summary": "《火影忍者》续作动漫《博人传》相关内容合集标签。",
          "whyHot": "承接《火影忍者》的粉丝基础，角色剪辑/剧情讨论内容持续产出，是常年活跃的泛娱乐动漫标签。",
          "origin": "长青动漫IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/boruto",
            "search": "https://www.tiktok.com/search?q=boruto",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "cindyngl__",
            "videoId": "7684114438764498197"
          },
          "fusionSuggestion": {
            "commercial": "可考虑忍者风格皮肤/技能特效做泛化联动参考。",
            "video": "适合做忍术风格的英雄技能卡点混剪。"
          }
        },
        {
          "rank": 29,
          "tag": "#haikyuu",
          "name": "排球少年 Haikyuu!!",
          "regionGroup": "sea",
          "category": "动漫",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "32.9K",
              "views": "15.3M"
            }
          ],
          "summary": "日本人气排球题材动漫《排球少年》相关内容合集标签。",
          "whyHot": "作为长青体育题材动漫IP，角色剪辑/名场面二创内容长期具有稳定粉丝群体支持，是常年活跃的泛娱乐标签。",
          "origin": "长青动漫IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/haikyuu",
            "search": "https://www.tiktok.com/search?q=haikyuu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "kiranichan7",
            "videoId": "7683694178798243090"
          },
          "fusionSuggestion": {
            "commercial": "可关注热血团队竞技风格做泛化联动参考。",
            "video": "适合做团队协作竞技风格的短片。"
          }
        },
        {
          "rank": 30,
          "tag": "#honkaistarrail",
          "name": "崩坏：星穹铁道 Honkai: Star Rail",
          "regionGroup": "sea",
          "category": "游戏",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "33.3K",
              "views": "14.7M"
            }
          ],
          "summary": "米哈游旗下人气回合制RPG游戏《崩坏：星穹铁道》相关内容合集标签，涵盖角色宣传PV、剧情剪辑、二创同人内容。",
          "whyHot": "作为近年全球发行量领先的二次元手游之一，持续的新角色/版本更新带动玩家实况、角色宣传向内容长期活跃，是稳定的泛娱乐游戏IP标签。",
          "origin": "游戏官方IP衍生内容标签，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/honkaistarrail",
            "search": "https://www.tiktok.com/search?q=honkaistarrail",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=7&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "lunarkyryll",
            "videoId": "7683686157884067080"
          },
          "fusionSuggestion": {
            "commercial": "可关注同类二次元回合制RPG的角色包装/抽卡玩法做同行业对标参考。",
            "video": "适合做角色PV风格的英雄宣传短片。"
          }
        }
      ]
    },
    "30": {
      "items": [
        {
          "rank": 1,
          "tag": "#merdeka",
          "name": "Merdeka（印尼语\"独立\"，印尼独立日主题泛用词，与#17agustus同源）",
          "regionGroup": "sea",
          "category": "节日/时事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "488.4K",
              "views": "1.1B"
            },
            {
              "code": "MY",
              "posts": "200.9K",
              "views": "827.1M"
            }
          ],
          "summary": "印尼独立日(8月17日)主题泛用标签，与#17agustus/#lomba17agustus同属独立日庆典内容矩阵，具体使用场景（庆典/致辞/游行等）视标签字面而定。",
          "whyHot": "每年8月围绕印尼国庆的庆典活动会持续产生大量周边标签，本条是这一庆典矩阵中的一个具体变体，热度逻辑与已核实的#17agustus/#lomba17agustus一致。",
          "origin": "印尼国家法定节日主题词，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/merdeka",
            "search": "https://www.tiktok.com/search?q=merdeka",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "tpdnell",
            "videoId": "7680063232890981650"
          },
          "fusionSuggestion": {
            "commercial": "可作为年度固定节日营销节点，提前规划MCGG\"独立日庆典\"限定内容与皮肤；国旗配色/图案使用需过法务合规审核。",
            "video": "适合作为8月固定节日内容日历项，产出\"MCGG玩家如何庆祝印尼独立日\"系列内容。"
          }
        },
        {
          "rank": 2,
          "tag": "#maulidnabi",
          "name": "Maulid Nabi（先知穆罕默德诞辰纪念日）",
          "regionGroup": "sea",
          "category": "宗教/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "228K",
              "views": "659.7M"
            },
            {
              "code": "MY",
              "posts": "11.3K",
              "views": "39.9M"
            }
          ],
          "summary": "2026年伊斯兰教先知穆罕默德诞辰纪念日（圣纪节）落在8月25日前后，印尼作为全球最大穆斯林人口国家迎来集中庆祝。",
          "whyHot": "各地举行诵经、游行、宗教讲座等庆祝活动，恰逢近7天窗口内的节日高峰，带动大量宗教纪念类短视频集中涌现。",
          "origin": "伊斯兰教传统宗教节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/maulidnabi",
            "search": "https://www.tiktok.com/search?q=maulidnabi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "印尼本地宗教节日，非抖音热搜可比对对象。"
          },
          "videoEmbed": {
            "author": "suarajepara",
            "videoId": "7683481670263000340"
          },
          "fusionSuggestion": {
            "commercial": "宗教节日不建议做游戏商业化联动，避免文化敏感风险。",
            "video": "不建议制作娱乐化二创内容。"
          }
        },
        {
          "rank": 3,
          "tag": "#d23",
          "name": "D23 Expo 2026（迪士尼官方粉丝盛会）",
          "regionGroup": "global",
          "category": "娱乐展会",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "24.4K",
              "views": "603.8M"
            }
          ],
          "summary": "D23: The Ultimate Disney Fan Event是迪士尼官方粉丝盛会，2026年场次于8月14日至16日在美国加州阿纳海姆会议中心举行，公布了迪士尼乐园、迪士尼邮轮等多项新项目。",
          "whyHot": "展会公布多项迪士尼影视/乐园新计划，粉丝现场实拍及官方发布内容在TikTok广泛传播，是迪士尼粉丝群体每两年一次的固定重磅活动。",
          "origin": "迪士尼官方举办的大型展会，非虚构。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/d23",
            "search": "https://www.tiktok.com/search?q=d23",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "asantemadrigal",
            "videoId": "7674176868039331103"
          },
          "fusionSuggestion": {
            "commercial": "涉及迪士尼第三方IP版权，不建议未经授权使用相关形象。",
            "video": "可考虑\"如果指挥官参加粉丝盛会\"原创概念视频，避免使用受版权保护的迪士尼角色。"
          }
        },
        {
          "rank": 4,
          "tag": "#buddy",
          "name": "Buddy（PokéDance舞蹈挑战主题曲）",
          "regionGroup": "global",
          "category": "舞蹈挑战",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "US",
              "posts": "34.2K",
              "views": "595.5M"
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
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "brooklynguy01",
            "videoId": "7682297188982050061"
          },
          "fusionSuggestion": {
            "commercial": "可考虑让MCGG英雄IP角色用同款\"Buddy\"舞蹈动作剪辑二创，蹭舞蹈挑战流量。",
            "video": "适合做游戏角色跳舞版PokéDance模仿视频。"
          }
        },
        {
          "rank": 5,
          "tag": "#missworld",
          "name": "Miss World 2026（第73届世界小姐总决赛，越南芽庄举办）",
          "regionGroup": "sea",
          "category": "选美赛事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "23.6K",
              "views": "569.5M"
            }
          ],
          "summary": "第73届世界小姐(Miss World)总决赛于2026年9月5日在越南芽庄举行，来自111个国家/地区的佳丽参赛，多米尼加共和国选手Joheirry Mola夺冠，该国时隔44年再获此项赛事冠军。",
          "whyHot": "赛事在越南本土举办带动东南亚地区大量围观和转发；阿根廷选手礄穿绣有梅西肖像的礄服登场也引发额外话题讨论，赛事本身为历史悠久的国际选美赛事(1951年创办)，具备天然的全球关注度。",
          "origin": "真实官方国际赛事，有多方媒体报道确认(包括赛事官方账号发布的加冕视频)。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/missworld",
            "search": "https://www.tiktok.com/search?q=missworld",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "nhanstudio97",
            "videoId": "7682236274169679124"
          },
          "fusionSuggestion": {
            "commercial": "选美赛事本身可考虑\"荣耀加冕\"主题外观设计灵感，避免直接使用真人肖像。",
            "video": "可做\"东南亚主场荣耀\"主题短视频，不直接使用赛事真实画面。"
          }
        },
        {
          "rank": 6,
          "tag": "#dirgahayuindonesia",
          "name": "Dirgahayu Indonesia（印尼语\"祝印尼生日快乐\"，独立日祝福语）",
          "regionGroup": "sea",
          "category": "文化/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "198.1K",
              "views": "489.1M"
            }
          ],
          "summary": "印尼语传统独立日祝福用语，每年8月17日前后印尼TikTok用户大量使用该标签发布爱国主题、庆祝活动内容。",
          "whyHot": "印尼国庆季节性固定热词，全民参与度高，是每年8月的规律性文化热梗。",
          "origin": "官方国家纪念日衍生的全民自发庆祝内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dirgahayuindonesia",
            "search": "https://www.tiktok.com/search?q=dirgahayuindonesia",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "azamiami28",
            "videoId": "7670890259474877703"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 7,
          "tag": "#lanterns",
          "name": "Lanterns《灯侠》（HBO Max绿灯侠题材新剧）",
          "regionGroup": "global",
          "category": "影视",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "21.3K",
              "views": "442.5M"
            }
          ],
          "summary": "由James Gunn监制的DC宇宙新剧《Lanterns》（灯侠/绿灯军团），2026年8月16日在HBO Max首播，聚焦哈尔·乔丹与约翰·斯图尔特两代绿灯侠调查一起谋杀案的故事，融合硬派警探剧风格。",
          "whyHot": "作为新DC宇宙首部真人剧集、詹姆斯·古恩执掌后的重要作品，开播前后预告片、剪辑及角色讨论在TikTok获得大量关注。",
          "origin": "HBO Max官方剧集宣传衍生传播（已通过公开新闻核实：2026年8月16日/21日首播）。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/lanterns",
            "search": "https://www.tiktok.com/search?q=lanterns",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "cykl0psfilm",
            "videoId": "7683207538749213966"
          },
          "fusionSuggestion": {
            "commercial": "可考虑绿灯侠戒指/能量场视觉元素做联名皮肤特效参考（需版权合作）。",
            "video": "适合做游戏英雄的\"能量武器\"主题混剪，呼应绿灯侠的意念构造能力。"
          }
        },
        {
          "rank": 8,
          "tag": "#khaigiang",
          "name": "Khai Giảng（越南语\"开学典礼\"）",
          "regionGroup": "sea",
          "category": "校园/生活",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "78.8K",
              "views": "440.3M"
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
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
          }
        },
        {
          "rank": 9,
          "tag": "#loveislandreunion",
          "name": "Love Island Reunion（真人秀《恋爱岛》同学会特辑）",
          "regionGroup": "global",
          "category": "综艺",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "13.4K",
              "views": "430.2M"
            }
          ],
          "summary": "美国版真人秀《Love Island》季后同学会特辑相关话题，参赛选手重聚片段、感情线后续讨论在TikTok传播。",
          "whyHot": "真人秀忠实粉丝群体活跃，季后同学会环节历来是全季最容易产生冲突/告白等爆点画面的环节，剪辑内容常规性地在TikTok获得高传播，是该真人秀品类的固定收官热点。",
          "origin": "综艺节目官方内容衍生传播。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/loveislandreunion",
            "search": "https://www.tiktok.com/search?q=loveislandreunion",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "abbyabigalee",
            "videoId": "7680388328541146399"
          },
          "fusionSuggestion": {
            "commercial": "可关注真人秀式\"团综重聚\"内容形式做泛化参考。",
            "video": "暂不建议直接使用节目片段二创。"
          }
        },
        {
          "rank": 10,
          "tag": "#nghihesonghihuu",
          "name": "Nghỉ Hè Xong Nghỉ Hưu（\"放完暑假就退休\"越南语调侃梗）",
          "regionGroup": "sea",
          "category": "生活方式/校园",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "23.3K",
              "views": "391.9M"
            }
          ],
          "summary": "越南语调侃短语，直译\"放完暑假紧接着退休\"，学生/老师用来自嘲暑假结束后开学的疲惫与不情愿心态。",
          "whyHot": "开学季固定情绪共鸣梗，用夸张的\"退休\"说法制造反差幽默感，是每年8-9月开学季的规律性校园热梗。",
          "origin": "网络自发调侃用语，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/nghihesonghihuu",
            "search": "https://www.tiktok.com/search?q=nghihesonghihuu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "sunseeshowbiz",
            "videoId": "7683906780681751816"
          },
          "fusionSuggestion": {
            "commercial": "可关注开学季情绪营销节点，做\"开学后如何靠游戏放松\"角度的轻松内容。",
            "video": "适合做开学季自嘲/共鸣类短视频文案参考。"
          }
        },
        {
          "rank": 11,
          "tag": "#christmas",
          "name": "Christmas（圣诞节主题内容）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "102.3K",
              "views": "365.3M"
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
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "nyyxveiill",
            "videoId": "7648617836226694432"
          },
          "fusionSuggestion": {
            "commercial": "可考虑提前布局圣诞主题限定活动/皮肤，契合菲律宾超长圣诞季的营销窗口。",
            "video": "适合做圣诞主题的游戏内装饰/礼物系统预告。"
          }
        },
        {
          "rank": 12,
          "tag": "#vietnamtoiyeu",
          "name": "Việt Nam Tôi Yêu（\"我爱越南\"爱国主题标签）",
          "regionGroup": "sea",
          "category": "文化/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "82.1K",
              "views": "357.8M"
            }
          ],
          "summary": "越南语\"我爱越南\"，围绕2026年9月2日越南国庆前后的爱国主题内容标签，涵盖风光展示、传统文化与庆典片段。",
          "whyHot": "越南国庆季节性固定热词，全民参与度高，是每年9月初的规律性文化热梗。",
          "origin": "官方国家纪念日衍生的全民自发庆祝内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/vietnamtoiyeu",
            "search": "https://www.tiktok.com/search?q=vietnamtoiyeu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "thecatlovesthemouse",
            "videoId": "7683907761247178002"
          },
          "fusionSuggestion": {
            "commercial": "可考虑越南国庆限定红黄配色活动皮肤/庆典元素联动。",
            "video": "适合做越南国庆主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 13,
          "tag": "#maulidnabimuhamammadsaw",
          "name": "Maulid Nabi Muhammad SAW（先知穆罕默德诞辰纪念日，全称标签）",
          "regionGroup": "sea",
          "category": "宗教/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "136.6K",
              "views": "343.7M"
            },
            {
              "code": "MY",
              "posts": "5K",
              "views": "13.8M"
            }
          ],
          "summary": "先知穆罕默德诞辰纪念日的完整名称标签，与#maulidnabi为同一宗教节日，2026年该纪念日落在8月25日前后。",
          "whyHot": "各地举行诵经、游行、宗教讲座等庆祝活动，节日高峰期带动大量宗教纪念类短视频集中涌现，与#maulidnabi同源同期。",
          "origin": "伊斯兰教传统宗教节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/maulidnabimuhamammadsaw",
            "search": "https://www.tiktok.com/search?q=maulidnabimuhamammadsaw",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "khzulfamustofaofficial",
            "videoId": "7684180439468100881"
          },
          "fusionSuggestion": {
            "commercial": "宗教节日不建议做游戏商业化联动，避免文化敏感风险。",
            "video": "不建议制作娱乐化二创内容。"
          }
        },
        {
          "rank": 14,
          "tag": "#toquoctrongtim",
          "name": "Tổ Quốc Trong Tim（越南语\"祖国在心中\"，爱国主题标签）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "27.9K",
              "views": "322.7M"
            }
          ],
          "summary": "越南语爱国主题短语\"祖国在心中\"，常用于越南国庆季节的庆典类内容。",
          "whyHot": "与#vietnamtoiyeu/#2thang9同属越南国庆季爱国主题标签矩阵，全民参与度高，是每年9月初的规律性文化热梗。",
          "origin": "越南国庆季通用爱国主题短语，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/toquoctrongtim",
            "search": "https://www.tiktok.com/search?q=toquoctrongtim",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "nguoiyeunuoc2310",
            "videoId": "7684068341446757639"
          },
          "fusionSuggestion": {
            "commercial": "可考虑越南国庆限定红黄配色活动皮肤/庆典元素联动。",
            "video": "适合做越南国庆主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 15,
          "tag": "#quockhanh",
          "name": "Quốc Khánh（越南语\"国庆\"通用说法）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "93K",
              "views": "308.7M"
            }
          ],
          "summary": "越南语\"国庆\"的通用表述，与#2thang9为同一节日的不同表述。",
          "whyHot": "与#2thang9/#toquoctrongtim同属越南国庆主题标签矩阵，是通用说法变体，热度逻辑一致。",
          "origin": "越南官方法定节日通用说法，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/quockhanh",
            "search": "https://www.tiktok.com/search?q=quockhanh",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "vanhien1970",
            "videoId": "7679319030708260103"
          },
          "fusionSuggestion": {
            "commercial": "可考虑越南国庆限定红黄配色活动皮肤/庆典元素联动。",
            "video": "适合做越南国庆主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 16,
          "tag": "#vulanbaohieu",
          "name": "Vu Lan Báo Hiếu（越南盂兰盆节/报孝节）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "95.7K",
              "views": "262.6M"
            }
          ],
          "summary": "越南传统佛教节日\"报孝节\"，落在农历七月十五前后，是感念父母恩情的重要节日。",
          "whyHot": "节日期间越南民众普遍前往寺庙祈福、家庭团聚，感恩父母主题内容集中涌现，是每年周期性的文化宗教节日。",
          "origin": "越南传统佛教节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/vulanbaohieu",
            "search": "https://www.tiktok.com/search?q=vulanbaohieu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "nguyennhongghai19",
            "videoId": "7677709247882251527"
          },
          "fusionSuggestion": {
            "commercial": "涉及宗教文化内容，不建议做商业化联动。",
            "video": "不建议制作娱乐化二创内容。"
          }
        },
        {
          "rank": 17,
          "tag": "#fypシ゚viral__",
          "name": "FYP Viral（泛\"求上推荐页\"标签）",
          "regionGroup": "sea",
          "category": "泛流量标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "207.5K",
              "views": "195.8M"
            },
            {
              "code": "VN",
              "posts": "12.7K",
              "views": "33.9M"
            },
            {
              "code": "MY",
              "posts": "60.8K",
              "views": "85.2M"
            }
          ],
          "summary": "多地区TikTok上常见的泛流量标签变体（For You Page + viral的关键词堆叠拼法），创作者用于给内容打标希望获得推荐流量，不指向具体单一事件。",
          "whyHot": "属于创作者常规蹭流量标签打法，非具体热点事件，在美国/印尼/菲律宾/马来西亚等多市场同步高频出现。",
          "origin": "泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fyp%E3%82%B7%E3%82%9Aviral__",
            "search": "https://www.tiktok.com/search?q=fyp%E3%82%B7%E3%82%9Aviral__",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "may_hmue_thazin",
            "videoId": "7682400377861360904"
          },
          "fusionSuggestion": {
            "commercial": "泛流量标签，不适合单独做商业化联动。",
            "video": "可作为常规发布小技巧参考，非内容方向。"
          }
        },
        {
          "rank": 18,
          "tag": "#2thang9",
          "name": "2 Tháng 9（越南国庆日，9月2日）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "42.6K",
              "views": "181M"
            }
          ],
          "summary": "越南语\"9月2日\"，即越南国庆日，纪念1945年胡志明主席宣布越南民主共和国独立。",
          "whyHot": "每年9月2日是越南最重要的法定节日，全国举行升旗仪式、庆典活动，爱国主题内容在节日前后集中涌现，与#vietnamtoiyeu同属庆典季内容矩阵。",
          "origin": "越南官方法定节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/2thang9",
            "search": "https://www.tiktok.com/search?q=2thang9",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "mai750210",
            "videoId": "7676887804823080213"
          },
          "fusionSuggestion": {
            "commercial": "可考虑越南国庆限定红黄配色活动皮肤/庆典元素联动。",
            "video": "适合做越南国庆主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 19,
          "tag": "#buwanngwika",
          "name": "Buwan ng Wika（菲律宾语言月，8月）",
          "regionGroup": "sea",
          "category": "节日/教育",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "46.8K",
              "views": "171.3M"
            }
          ],
          "summary": "菲律宾语\"语言月\"，菲律宾政府将每年8月定为语言月，纪念和推广菲律宾国语（Filipino）。",
          "whyHot": "语言月期间学校普遍举办演讲比赛、传统服饰（Filipiniana）展示、传统游戏等活动，师生记录相关活动内容在这一时期集中涌现，是每年周期性的教育文化月主题。",
          "origin": "菲律宾政府官方文化教育月，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/buwanngwika",
            "search": "https://www.tiktok.com/search?q=buwanngwika",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "totaybueno",
            "videoId": "7678602530099563796"
          },
          "fusionSuggestion": {
            "commercial": "可关注传统文化服饰/游戏元素做泛化视觉参考。",
            "video": "适合做菲律宾传统文化主题的游戏内活动预告。"
          }
        },
        {
          "rank": 20,
          "tag": "#frozen3",
          "name": "Frozen 3《冰雪奇缘3》（迪士尼动画新作，D23首曝）",
          "regionGroup": "global",
          "category": "影视",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "11.2K",
              "views": "138.8M"
            }
          ],
          "summary": "迪士尼在2026年8月D23 Expo粉丝盛会上首次公布《冰雪奇缘3》概念画面，剧情涉及安娜与克里斯托夫的婚礼被新反派搅局，正式定档2027年11月24日北美上映。",
          "whyHot": "D23现场首曝概念图，主创伊迪娜·门泽尔、克里斯汀·贝尔现场献唱经典曲目，粉丝现场实拍及官方发布片段在TikTok广泛传播，是D23盛会当期最受关注的迪士尼新片公告之一。",
          "origin": "迪士尼官方在D23 Expo 2026上正式公布，非创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/frozen3",
            "search": "https://www.tiktok.com/search?q=frozen3",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "m8teox",
            "videoId": "7675718881276693783"
          },
          "fusionSuggestion": {
            "commercial": "涉及第三方迪士尼IP，不建议直接商业化联动。",
            "video": "可关注其\"婚礼被搅局\"式反转叙事结构做泛化剧情灵感参考。"
          }
        },
        {
          "rank": 21,
          "tag": "#karnaval17agustus",
          "name": "Karnaval 17 Agustus（印尼独立日狂欢游行）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "19.1K",
              "views": "136.4M"
            }
          ],
          "summary": "印尼语\"8月17日狂欢游行\"，指独立日期间社区组织的化装游行/彩车巡游活动，是庆典矩阵中的具体活动类型标签。",
          "whyHot": "印尼独立日期间各地社区自发组织化装游行、创意彩车巡游，视觉效果强、参与度高，与#pawai/#gerakjalan/#17agustus同属庆典矩阵。",
          "origin": "印尼独立日庆典的固定活动形式，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/karnaval17agustus",
            "search": "https://www.tiktok.com/search?q=karnaval17agustus",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "ikyy00547",
            "videoId": "7674966692564372754"
          },
          "fusionSuggestion": {
            "commercial": "可考虑游行彩车/化装元素做游戏内团队协作宣传素材。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 22,
          "tag": "#upacara17agustus",
          "name": "Upacara 17 Agustus（印尼独立日升旗仪式）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "16.1K",
              "views": "123.4M"
            }
          ],
          "summary": "印尼语\"8月17日升旗仪式\"，指独立日当天全国统一举行的升旗典礼。",
          "whyHot": "印尼独立日当天，从总统府到各地学校、机关、社区都会同步举行升旗仪式，是全民参与度最高的庆典环节，与#17agustus/#gerakjalan同属庆典矩阵。",
          "origin": "印尼独立日固定仪式环节，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/upacara17agustus",
            "search": "https://www.tiktok.com/search?q=upacara17agustus",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "jurandaj",
            "videoId": "7674488538942950677"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 23,
          "tag": "#maulid",
          "name": "Maulid（先知诞辰纪念日简称标签）",
          "regionGroup": "sea",
          "category": "宗教/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "45.7K",
              "views": "112.1M"
            },
            {
              "code": "MY",
              "posts": "2.2K",
              "views": "6.3M"
            }
          ],
          "summary": "先知穆罕默德诞辰纪念日的简称标签，与#maulidnabi/#maulidnabimuhamammadsaw为同一宗教节日。",
          "whyHot": "节日期间用户更倾向用简称标签搭配诵经/庆典内容发布，是同一节日热度矩阵的简称变体。",
          "origin": "伊斯兰教传统宗教节日简称标签，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/maulid",
            "search": "https://www.tiktok.com/search?q=maulid",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "iyanseleo",
            "videoId": "7679311356276772116"
          },
          "fusionSuggestion": {
            "commercial": "宗教节日不建议做游戏商业化联动，避免文化敏感风险。",
            "video": "不建议制作娱乐化二创内容。"
          }
        },
        {
          "rank": 24,
          "tag": "#pawai",
          "name": "Pawai（印尼语\"游行\"，独立日游行活动）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "23.3K",
              "views": "108.7M"
            }
          ],
          "summary": "印尼语\"游行\"，指独立日期间社区/学校组织的游行庆祝活动，与#gerakjalan类似但更泛用。",
          "whyHot": "印尼独立日期间全国社区、学校普遍组织游行活动记录并上传，是庆典矩阵中的具体活动类型标签，热度逻辑与已核实的#gerakjalan/#17agustus一致。",
          "origin": "印尼独立日庆典的固定活动形式，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/pawai",
            "search": "https://www.tiktok.com/search?q=pawai",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "mochi_klepon1",
            "videoId": "7679816189685550357"
          },
          "fusionSuggestion": {
            "commercial": "可考虑\"整齐划一\"的游行视觉元素做游戏内团队协作宣传素材。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 25,
          "tag": "#independenceday",
          "name": "Independence Day（印尼独立日的英文通用说法）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "21.9K",
              "views": "99.4M"
            },
            {
              "code": "MY",
              "posts": "5.8K",
              "views": "23.6M"
            }
          ],
          "summary": "印尼独立日（8月17日）的英文表述标签，与#merdeka/#17agustus为同一节日的不同语言变体。",
          "whyHot": "每年8月围绕印尼独立日的庆典活动会同时带动印尼语和英语版标签，是庆典矩阵中的英文变体，热度逻辑与已核实的#17agustus/#merdeka一致。",
          "origin": "印尼官方法定节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/independenceday",
            "search": "https://www.tiktok.com/search?q=independenceday",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "zshanmalick",
            "videoId": "7673616713467923720"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 26,
          "tag": "#17agustus",
          "name": "17 Agustus（印尼独立日，8月17日）",
          "regionGroup": "sea",
          "category": "节日/时事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "2.8K",
              "views": "94.7M"
            }
          ],
          "summary": "17 Agustus即印尼独立日(8月17日)，是最大规模的印尼本地节日标签，承载各类庆典内容。",
          "whyHot": "1945年8月17日印尼宣布独立，此后每年8月17日成为全国最重要的法定节日，从升旗仪式、总统府庆典到街头趣味比赛、校园游行，几乎所有独立日相关内容都会打上此标签，是该批数据中体量最大的话题(近30天内50万+发布、总播放达2B)。",
          "origin": "印尼国家法定节日，官方历史事件纪念日，全民共用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/17agustus",
            "search": "https://www.tiktok.com/search?q=17agustus",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=MY"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "印尼国家法定节日泛用标签，非抖音热搜可比对的话题类型。"
          },
          "videoEmbed": {
            "author": "rinisini2",
            "videoId": "7674263628660509959"
          },
          "fusionSuggestion": {
            "commercial": "可作为年度固定节日营销节点，提前规划MCGG\"独立日庆典\"限定内容与皮肤；国旗配色/图案使用需过法务合规审核。",
            "video": "适合作为8月固定节日内容日历项，产出\"MCGG玩家如何庆祝印尼独立日\"系列内容。"
          }
        },
        {
          "rank": 27,
          "tag": "#harikebangsaan",
          "name": "Hari Kebangsaan（马来西亚国庆日，8月31日）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "MY",
              "posts": "25.7K",
              "views": "83.1M"
            }
          ],
          "summary": "马来语\"国庆日\"，纪念1957年8月31日马来亚联合邦独立，是马来西亚最重要的法定节日。",
          "whyHot": "每年8月围绕马来西亚国庆的庆典活动持续产生大量周边标签，游行、升旗、爱国主题内容集中涌现，与#malaysiamerdeka同源同期。",
          "origin": "马来西亚官方法定节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/harikebangsaan",
            "search": "https://www.tiktok.com/search?q=harikebangsaan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=MY"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "efjey1624",
            "videoId": "7680144194945502484"
          },
          "fusionSuggestion": {
            "commercial": "可考虑马来西亚国庆限定配色活动皮肤/庆典元素联动。",
            "video": "适合做马来西亚国庆主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 28,
          "tag": "#minnesotastatefair",
          "name": "Minnesota State Fair（明尼苏达州年度州博览会）",
          "regionGroup": "global",
          "category": "节日/生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "7.4K",
              "views": "68M"
            }
          ],
          "summary": "美国明尼苏达州的年度州博览会，被当地人称为\"the Great Minnesota Get-Together\"，是全美规模最大的州级博览会之一，历年惯例在8月末至劳动节假期期间举办。",
          "whyHot": "博览会期间游乐设施、特色炸物小吃、农业展览等内容是美国中西部秋季固定的地方文化盛事，游客打卡内容在这段时间规律性增多，与#fairs同属秋季集市季内容矩阵。",
          "origin": "美国明尼苏达州官方年度博览会，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/minnesotastatefair",
            "search": "https://www.tiktok.com/search?q=minnesotastatefair",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=30&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "theerichammer",
            "videoId": "7682051039817731341"
          },
          "fusionSuggestion": {
            "commercial": "可结合集市游乐设施元素设计限时活动皮肤(摩天轮/炸物摊位等)。",
            "video": "适合做\"秋季游乐集市\"主题短视频。"
          }
        }
      ]
    },
    "90": {
      "items": [
        {
          "rank": 1,
          "tag": "#17agustus",
          "name": "17 Agustus（印尼独立日，8月17日）",
          "regionGroup": "sea",
          "category": "节日/时事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "1.4M",
              "views": "6.6B"
            }
          ],
          "summary": "17 Agustus即印尼独立日(8月17日)，是最大规模的印尼本地节日标签，承载各类庆典内容。",
          "whyHot": "1945年8月17日印尼宣布独立，此后每年8月17日成为全国最重要的法定节日，从升旗仪式、总统府庆典到街头趣味比赛、校园游行，几乎所有独立日相关内容都会打上此标签，是该批数据中体量最大的话题(近30天内50万+发布、总播放达2B)。",
          "origin": "印尼国家法定节日，官方历史事件纪念日，全民共用标签。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/17agustus",
            "search": "https://www.tiktok.com/search?q=17agustus",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "印尼国家法定节日泛用标签，非抖音热搜可比对的话题类型。"
          },
          "videoEmbed": {
            "author": "rinisini2",
            "videoId": "7674263628660509959"
          },
          "fusionSuggestion": {
            "commercial": "可作为年度固定节日营销节点，提前规划MCGG\"独立日庆典\"限定内容与皮肤；国旗配色/图案使用需过法务合规审核。",
            "video": "适合作为8月固定节日内容日历项，产出\"MCGG玩家如何庆祝印尼独立日\"系列内容。"
          }
        },
        {
          "rank": 2,
          "tag": "#lomba17agustus",
          "name": "Lomba 17 Agustus（8月17日独立日趣味比赛）",
          "regionGroup": "sea",
          "category": "节日/趣味赛",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "478.4K",
              "views": "3.9B"
            }
          ],
          "summary": "印尼独立日(8月17日)传统街头趣味比赛合集，如爬椰子树、吃克拉克面包比赛等庆典活动。",
          "whyHot": "每年8月17日印尼独立日前后，全国社区、学校会举办\"Lomba 17 Agustus\"趣味竞赛，包括爬油杆(panjat pinang)、蒙眼吃克拉克面包(makan kerupuk)、夹弹珠赛跑等传统项目。这些活动可追溯至荷兰殖民时期，象征民众争取独立后的奋斗精神，因此每年这个节点会在TikTok集中爆发大量记录视频。",
          "origin": "印尼全国性独立日民俗传统，非单一创作者发起，新华社、腾讯新闻等中国官媒也曾多次报道爬油杆等相关活动。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/lomba17agustus",
            "search": "https://www.tiktok.com/search?q=lomba17agustus",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "印尼本地独立日民俗活动，主要在印尼语TikTok语境传播，非抖音热搜可直接比对的话题。"
          },
          "videoEmbed": {
            "author": "_core.id_",
            "videoId": "7674109469277850901"
          },
          "fusionSuggestion": {
            "commercial": "可为MCGG指挥官皮肤设计红白配色的\"庆典款\"外观，或推出椰子树/面包元素的限时趣味竞赛活动图标，呼应独立日节庆氛围；需避免直接复刻真实宗教或殖民历史符号。",
            "video": "适合做\"印尼传统独立日趣味挑战 x MCGG\"联动短视频，展示游戏角色搭配传统竞赛场景，蹭节日流量。"
          }
        },
        {
          "rank": 3,
          "tag": "#tinhhasayhi",
          "name": "tinhhasayhi（Tình Hà Say Hi，越南音乐真人秀节目，与《Anh Trai Say Hi》《Em Xinh Say Hi》同系列制作）",
          "regionGroup": "sea",
          "category": "综艺节目",
          "danceCategory": "dance",
          "regions": [
            {
              "code": "VN",
              "posts": "440K",
              "views": "3.9B"
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
            "note": "越南本土综艺节目，无对应抖音内容体系，不适用核实。"
          },
          "videoEmbed": {
            "author": "thekidminhsu__",
            "videoId": "7674650443720445202"
          },
          "fusionSuggestion": {
            "commercial": "可考虑借势越南年轻观众聚集的音乐综艺氛围，联动越南本地KOL做MCGG越南区推广活动，但需事先确认节目方合作意愿及授权，避免未经授权蹭综艺IP。",
            "video": "可制作「游戏角色如果参加音乐选秀」类整活短视频，借综艺选秀的热闹氛围做泛化娱乐内容，无需指涉具体选手真人形象。"
          }
        },
        {
          "rank": 4,
          "tag": "#catinthehat",
          "name": "The Cat in the Hat（华纳兄弟动画电影，迈克·梅耶斯主演）",
          "regionGroup": "global",
          "category": "影视/电影",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "130.9K",
              "views": "1.4B"
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
            "note": "该片未在中国大陆院线上映，非抖音热搜可比对对象。"
          },
          "videoEmbed": {
            "author": "user395184074815",
            "videoId": "7682339495177424159"
          },
          "fusionSuggestion": {
            "commercial": "涉及第三方电影IP版权，不建议直接商用；如需联动应走正规版权合作路径。",
            "video": "不建议未经授权使用电影素材。"
          }
        },
        {
          "rank": 5,
          "tag": "#merdeka",
          "name": "Merdeka（印尼语\"独立\"，印尼独立日主题泛用词，与#17agustus同源）",
          "regionGroup": "sea",
          "category": "节日/时事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "574.2K",
              "views": "1.4B"
            },
            {
              "code": "MY",
              "posts": "266.7K",
              "views": "972.5M"
            }
          ],
          "summary": "印尼独立日(8月17日)主题泛用标签，与#17agustus/#lomba17agustus同属独立日庆典内容矩阵，具体使用场景（庆典/致辞/游行等）视标签字面而定。",
          "whyHot": "每年8月围绕印尼国庆的庆典活动会持续产生大量周边标签，本条是这一庆典矩阵中的一个具体变体，热度逻辑与已核实的#17agustus/#lomba17agustus一致。",
          "origin": "印尼国家法定节日主题词，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/merdeka",
            "search": "https://www.tiktok.com/search?q=merdeka",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "tpdnell",
            "videoId": "7680063232890981650"
          },
          "fusionSuggestion": {
            "commercial": "可作为年度固定节日营销节点，提前规划MCGG\"独立日庆典\"限定内容与皮肤；国旗配色/图案使用需过法务合规审核。",
            "video": "适合作为8月固定节日内容日历项，产出\"MCGG玩家如何庆祝印尼独立日\"系列内容。"
          }
        },
        {
          "rank": 6,
          "tag": "#spidermanbrandnewday",
          "name": "Spider-Man: Brand New Day",
          "regionGroup": "sea",
          "category": "影视",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "204.1K",
              "views": "1.3B"
            },
            {
              "code": "PH",
              "posts": "182.4K",
              "views": "1.2B"
            },
            {
              "code": "VN",
              "posts": "106K",
              "views": "358.4M"
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
            "note": "本轮抖音热搜快照未见相同关键词。"
          },
          "videoEmbed": {
            "author": "freedom.alias",
            "videoId": "7669320059776486687"
          },
          "fusionSuggestion": {
            "commercial": "涉及漫威第三方IP版权，不建议未经授权直接使用蜘蛛侠形象；可考虑与漫威谈官方授权联名（需版权方合作）。",
            "video": "官方号可发布『如果指挥官有蜘蛛侠战衣』的原创英雄主题概念视频，避免直接使用受版权保护的角色形象。"
          }
        },
        {
          "rank": 7,
          "tag": "#hutri",
          "name": "HUTRI（印尼\"共和国独立纪念日\"缩写，与#17agustus同源）",
          "regionGroup": "sea",
          "category": "节日/时事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "280.8K",
              "views": "1.2B"
            }
          ],
          "summary": "印尼独立日(8月17日)主题泛用标签，与#17agustus/#lomba17agustus同属独立日庆典内容矩阵，具体使用场景（庆典/致辞/游行等）视标签字面而定。",
          "whyHot": "每年8月围绕印尼国庆的庆典活动会持续产生大量周边标签，本条是这一庆典矩阵中的一个具体变体，热度逻辑与已核实的#17agustus/#lomba17agustus一致。",
          "origin": "印尼国家法定节日主题词，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/hutri",
            "search": "https://www.tiktok.com/search?q=hutri",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "tiktok.sherly.laos2",
            "videoId": "7676611216818588948"
          },
          "fusionSuggestion": {
            "commercial": "可作为年度固定节日营销节点，提前规划MCGG\"独立日庆典\"限定内容与皮肤；国旗配色/图案使用需过法务合规审核。",
            "video": "适合作为8月固定节日内容日历项，产出\"MCGG玩家如何庆祝印尼独立日\"系列内容。"
          }
        },
        {
          "rank": 8,
          "tag": "#agustusan",
          "name": "Agustusan（印尼语\"八月庆典\"，印尼独立日主题泛用词）",
          "regionGroup": "sea",
          "category": "节日/时事",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "287.8K",
              "views": "1.2B"
            }
          ],
          "summary": "印尼独立日(8月17日)主题泛用标签，与#17agustus/#lomba17agustus同属独立日庆典内容矩阵，具体使用场景（庆典/致辞/游行等）视标签字面而定。",
          "whyHot": "每年8月围绕印尼国庆的庆典活动会持续产生大量周边标签，本条是这一庆典矩阵中的一个具体变体，热度逻辑与已核实的#17agustus/#lomba17agustus一致。",
          "origin": "印尼国家法定节日主题词，非单一创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/agustusan",
            "search": "https://www.tiktok.com/search?q=agustusan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "alinahasna.r",
            "videoId": "7674829636248898836"
          },
          "fusionSuggestion": {
            "commercial": "可作为年度固定节日营销节点，提前规划MCGG\"独立日庆典\"限定内容与皮肤；国旗配色/图案使用需过法务合规审核。",
            "video": "适合作为8月固定节日内容日历项，产出\"MCGG玩家如何庆祝印尼独立日\"系列内容。"
          }
        },
        {
          "rank": 9,
          "tag": "#fairs",
          "name": "Fairs（美国秋季州/县集市季相关内容）",
          "regionGroup": "global",
          "category": "生活方式",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "287.1K",
              "views": "1.1B"
            }
          ],
          "summary": "美国秋季州集市(State Fair)/县集市(County Fair)相关内容泛用标签，涵盖游乐设施、集市小吃、农产品展等主题短视频。",
          "whyHot": "美国大部分州/县的秋季集市集中在8-9月举办，是每年周期性的季节活动，家庭出游打卡内容在这个时间段规律性增多。",
          "origin": "季节性/周期性活动泛用标签，非单一事件发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fairs",
            "search": "https://www.tiktok.com/search?q=fairs",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "no_gull5",
            "videoId": "7654117748905233686"
          },
          "fusionSuggestion": {
            "commercial": "可结合秋季集市元素设计限时活动皮肤(摩天轮/爆米花等元素)。",
            "video": "适合做\"秋季游乐集市\"主题短视频。"
          }
        },
        {
          "rank": 10,
          "tag": "#fypfyypシfyp",
          "name": "FYP堆叠标签（泛用算法引流标签组合，非真实事件）",
          "regionGroup": "sea",
          "category": "泛用引流标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "1.1M",
              "views": "1B"
            }
          ],
          "summary": "由多个\"For You Page\"变体拼接而成的泛用引流标签组合，创作者用它来尝试获得更多推荐流量，不对应任何具体新闻事件或话题内容。",
          "whyHot": "属于创作者常规的算法优化行为，播放量高是因为被大量不同内容的视频广泛叠加使用，本身不是一个真实的\"热梗\"。",
          "origin": "非事件类标签，是平台使用习惯衍生的泛用标签组合。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fypfyyp%E3%82%B7fyp",
            "search": "https://www.tiktok.com/search?q=fypfyyp%E3%82%B7fyp",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "lyn.yong34",
            "videoId": "7667412608269716757"
          },
          "fusionSuggestion": {
            "commercial": "非真实热点，不具备联动价值。",
            "video": "不建议制作相关内容。"
          }
        },
        {
          "rank": 11,
          "tag": "#kemerdekaan",
          "name": "Kemerdekaan（印尼语\"独立\"，印尼81周年独立日相关话题）",
          "regionGroup": "sea",
          "category": "文化/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "230.1K",
              "views": "886.2M"
            }
          ],
          "summary": "印尼语\"独立\"，与#merdeka同属2026年8月17日印尼独立81周年纪念活动相关话题群。",
          "whyHot": "印尼国庆季节性固定热词，全民参与度高，是每年8月的规律性文化热梗。",
          "origin": "官方国家纪念日衍生的全民自发庆祝内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/kemerdekaan",
            "search": "https://www.tiktok.com/search?q=kemerdekaan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "esraj17",
            "videoId": "7679835944702299412"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 12,
          "tag": "#maulidnabi",
          "name": "Maulid Nabi（先知穆罕默德诞辰纪念日）",
          "regionGroup": "sea",
          "category": "宗教/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "237.1K",
              "views": "732.2M"
            }
          ],
          "summary": "2026年伊斯兰教先知穆罕默德诞辰纪念日（圣纪节）落在8月25日前后，印尼作为全球最大穆斯林人口国家迎来集中庆祝。",
          "whyHot": "各地举行诵经、游行、宗教讲座等庆祝活动，恰逢近7天窗口内的节日高峰，带动大量宗教纪念类短视频集中涌现。",
          "origin": "伊斯兰教传统宗教节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/maulidnabi",
            "search": "https://www.tiktok.com/search?q=maulidnabi",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "nonapplicable",
            "note": "印尼本地宗教节日，非抖音热搜可比对对象。"
          },
          "videoEmbed": {
            "author": "suarajepara",
            "videoId": "7683481670263000340"
          },
          "fusionSuggestion": {
            "commercial": "宗教节日不建议做游戏商业化联动，避免文化敏感风险。",
            "video": "不建议制作娱乐化二创内容。"
          }
        },
        {
          "rank": 13,
          "tag": "#panitia17agustus",
          "name": "Panitia 17 Agustus（印尼独立日筹备委员会主题）",
          "regionGroup": "sea",
          "category": "文化/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "152.1K",
              "views": "731.6M"
            }
          ],
          "summary": "印尼语\"8月17日（独立日）筹备委员会\"，指社区/校园自发组织独立日庆典活动的志愿者团队，相关趣味筹备花絮、活动现场内容在TikTok传播。",
          "whyHot": "印尼独立日全民参与度极高，社区筹备过程本身也成为轻松幽默的内容素材，属于每年8月的规律性文化热梗。",
          "origin": "民间自发的节日筹备活动内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/panitia17agustus",
            "search": "https://www.tiktok.com/search?q=panitia17agustus",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "dwimanunggalofficial88_",
            "videoId": "7672289785318362388"
          },
          "fusionSuggestion": {
            "commercial": "可考虑\"社区团队协作\"主题做游戏内公会/组队活动宣传素材。",
            "video": "适合做趣味团队协作花絮风格的游戏内容预告。"
          }
        },
        {
          "rank": 14,
          "tag": "#fypシ゚viral__",
          "name": "FYP Viral（泛\"求上推荐页\"标签）",
          "regionGroup": "global",
          "category": "泛流量标签",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "US",
              "posts": "372.2K",
              "views": "545.7M"
            },
            {
              "code": "ID",
              "posts": "609.3K",
              "views": "705.6M"
            },
            {
              "code": "PH",
              "posts": "228.9K",
              "views": "211.6M"
            },
            {
              "code": "MY",
              "posts": "70.2K",
              "views": "96M"
            }
          ],
          "summary": "多地区TikTok上常见的泛流量标签变体（For You Page + viral的关键词堆叠拼法），创作者用于给内容打标希望获得推荐流量，不指向具体单一事件。",
          "whyHot": "属于创作者常规蹭流量标签打法，非具体热点事件，在美国/印尼/菲律宾/马来西亚等多市场同步高频出现。",
          "origin": "泛类别标签，无单一发起人。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/fyp%E3%82%B7%E3%82%9Aviral__",
            "search": "https://www.tiktok.com/search?q=fyp%E3%82%B7%E3%82%9Aviral__",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=US"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "may_hmue_thazin",
            "videoId": "7682400377861360904"
          },
          "fusionSuggestion": {
            "commercial": "泛流量标签，不适合单独做商业化联动。",
            "video": "可作为常规发布小技巧参考，非内容方向。"
          }
        },
        {
          "rank": 15,
          "tag": "#gerakjalan",
          "name": "Gerak Jalan（印尼独立日游行/踢正步方阵表演）",
          "regionGroup": "sea",
          "category": "文化/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "69.5K",
              "views": "703.5M"
            }
          ],
          "summary": "印尼语\"踢正步游行\"，指学校/社区在印尼独立日期间组织的方阵游行表演，是独立日庆典的传统项目之一。",
          "whyHot": "印尼独立日全民参与度极高，整齐划一的游行方阵表演视觉效果强，是每年8月的规律性文化热梗。",
          "origin": "官方国家纪念日衍生的全民自发庆祝内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/gerakjalan",
            "search": "https://www.tiktok.com/search?q=gerakjalan",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "paskibraprajuritkartika_",
            "videoId": "7673414260466257160"
          },
          "fusionSuggestion": {
            "commercial": "可考虑\"整齐划一\"的方阵视觉元素做游戏内团队协作宣传素材。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 16,
          "tag": "#agustus",
          "name": "Agustus（印尼语\"八月\"，独立日庆典季通用月份标签）",
          "regionGroup": "sea",
          "category": "文化/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "235.3K",
              "views": "679.7M"
            }
          ],
          "summary": "印尼语\"八月\"，作为印尼独立日（8月17日）庆典季的通用月份标签，与#merdeka/#kemerdekaan等同属一组节日内容矩阵。",
          "whyHot": "印尼国庆季节性固定热词，全民参与度高，是每年8月的规律性文化热梗。",
          "origin": "官方国家纪念日衍生的全民自发庆祝内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/agustus",
            "search": "https://www.tiktok.com/search?q=agustus",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "alinahasna.r",
            "videoId": "7674829636248898836"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 17,
          "tag": "#dirgahayuindonesia",
          "name": "Dirgahayu Indonesia（印尼语\"祝印尼生日快乐\"，独立日祝福语）",
          "regionGroup": "sea",
          "category": "文化/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "246.5K",
              "views": "587.9M"
            }
          ],
          "summary": "印尼语传统独立日祝福用语，每年8月17日前后印尼TikTok用户大量使用该标签发布爱国主题、庆祝活动内容。",
          "whyHot": "印尼国庆季节性固定热词，全民参与度高，是每年8月的规律性文化热梗。",
          "origin": "官方国家纪念日衍生的全民自发庆祝内容。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/dirgahayuindonesia",
            "search": "https://www.tiktok.com/search?q=dirgahayuindonesia",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "azamiami28",
            "videoId": "7670890259474877703"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 18,
          "tag": "#kemerdekaanindonesia",
          "name": "Kemerdekaan Indonesia（印尼独立，完整表述变体）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "149.8K",
              "views": "510.4M"
            }
          ],
          "summary": "印尼语\"印尼独立\"的完整表述，与#merdeka/#kemerdekaan为同一独立日主题的不同变体。",
          "whyHot": "与#merdeka/#kemerdekaan/#17agustus同属独立日庆典矩阵中的完整表述标签变体，热度逻辑一致。",
          "origin": "印尼独立日主题通用表述，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/kemerdekaanindonesia",
            "search": "https://www.tiktok.com/search?q=kemerdekaanindonesia",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "lokalpride035",
            "videoId": "7674105411422883092"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 19,
          "tag": "#khaigiang",
          "name": "Khai Giảng（越南语\"开学典礼\"）",
          "regionGroup": "sea",
          "category": "校园/生活",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "81.9K",
              "views": "493.2M"
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
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "fellingthesound",
            "videoId": "7681846777221221653"
          },
          "fusionSuggestion": {
            "commercial": "可参考类似#lomba17agustus的处理方式，设计\"开学季\"限时活动，避免使用真实校园肖像。",
            "video": "适合做\"越南开学季\"主题短视频联动。"
          }
        },
        {
          "rank": 20,
          "tag": "#nghihesonghihuu",
          "name": "Nghỉ Hè Xong Nghỉ Hưu（\"放完暑假就退休\"越南语调侃梗）",
          "regionGroup": "sea",
          "category": "生活方式/校园",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "25.4K",
              "views": "456.4M"
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
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "sunseeshowbiz",
            "videoId": "7683906780681751816"
          },
          "fusionSuggestion": {
            "commercial": "可关注开学季情绪营销节点，做\"开学后如何靠游戏放松\"角度的轻松内容。",
            "video": "适合做开学季自嘲/共鸣类短视频文案参考。"
          }
        },
        {
          "rank": 21,
          "tag": "#maulidnabimuhamammadsaw",
          "name": "Maulid Nabi Muhammad SAW（先知穆罕默德诞辰纪念日，全称标签）",
          "regionGroup": "sea",
          "category": "宗教/节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "141K",
              "views": "382.2M"
            }
          ],
          "summary": "先知穆罕默德诞辰纪念日的完整名称标签，与#maulidnabi为同一宗教节日，2026年该纪念日落在8月25日前后。",
          "whyHot": "各地举行诵经、游行、宗教讲座等庆祝活动，节日高峰期带动大量宗教纪念类短视频集中涌现，与#maulidnabi同源同期。",
          "origin": "伊斯兰教传统宗教节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/maulidnabimuhamammadsaw",
            "search": "https://www.tiktok.com/search?q=maulidnabimuhamammadsaw",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "khzulfamustofaofficial",
            "videoId": "7684180439468100881"
          },
          "fusionSuggestion": {
            "commercial": "宗教节日不建议做游戏商业化联动，避免文化敏感风险。",
            "video": "不建议制作娱乐化二创内容。"
          }
        },
        {
          "rank": 22,
          "tag": "#quockhanh",
          "name": "Quốc Khánh（越南语\"国庆\"通用说法）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "95.5K",
              "views": "347M"
            }
          ],
          "summary": "越南语\"国庆\"的通用表述，与#2thang9为同一节日的不同表述。",
          "whyHot": "与#2thang9/#toquoctrongtim同属越南国庆主题标签矩阵，是通用说法变体，热度逻辑一致。",
          "origin": "越南官方法定节日通用说法，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/quockhanh",
            "search": "https://www.tiktok.com/search?q=quockhanh",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "vanhien1970",
            "videoId": "7679319030708260103"
          },
          "fusionSuggestion": {
            "commercial": "可考虑越南国庆限定红黄配色活动皮肤/庆典元素联动。",
            "video": "适合做越南国庆主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 23,
          "tag": "#vulanbaohieu",
          "name": "Vu Lan Báo Hiếu（越南盂兰盆节/报孝节）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "VN",
              "posts": "100.7K",
              "views": "294.3M"
            }
          ],
          "summary": "越南传统佛教节日\"报孝节\"，落在农历七月十五前后，是感念父母恩情的重要节日。",
          "whyHot": "节日期间越南民众普遍前往寺庙祈福、家庭团聚，感恩父母主题内容集中涌现，是每年周期性的文化宗教节日。",
          "origin": "越南传统佛教节日，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/vulanbaohieu",
            "search": "https://www.tiktok.com/search?q=vulanbaohieu",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=VN"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "nguyennhongghai19",
            "videoId": "7677709247882251527"
          },
          "fusionSuggestion": {
            "commercial": "涉及宗教文化内容，不建议做商业化联动。",
            "video": "不建议制作娱乐化二创内容。"
          }
        },
        {
          "rank": 24,
          "tag": "#agustusmerdeka",
          "name": "Agustus Merdeka（印尼语\"独立八月\"，独立日庆典变体）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "89.6K",
              "views": "265.7M"
            }
          ],
          "summary": "印尼语\"独立八月\"，将\"八月\"与\"独立\"两个独立日核心词组合的合成标签。",
          "whyHot": "与#agustus/#merdeka同源，是独立日庆典矩阵中的合成词变体标签，热度逻辑一致。",
          "origin": "印尼独立日主题合成词变体，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/agustusmerdeka",
            "search": "https://www.tiktok.com/search?q=agustusmerdeka",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "zivana_queen",
            "videoId": "7669974731071802641"
          },
          "fusionSuggestion": {
            "commercial": "可考虑印尼独立日限定红白配色活动皮肤/庆典元素联动。",
            "video": "适合做印尼独立日主题的游戏内庆典活动预告。"
          }
        },
        {
          "rank": 25,
          "tag": "#buwanngwika",
          "name": "Buwan ng Wika（菲律宾语言月，8月）",
          "regionGroup": "sea",
          "category": "节日/教育",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "PH",
              "posts": "60.9K",
              "views": "254.8M"
            }
          ],
          "summary": "菲律宾语\"语言月\"，菲律宾政府将每年8月定为语言月，纪念和推广菲律宾国语（Filipino）。",
          "whyHot": "语言月期间学校普遍举办演讲比赛、传统服饰（Filipiniana）展示、传统游戏等活动，师生记录相关活动内容在这一时期集中涌现，是每年周期性的教育文化月主题。",
          "origin": "菲律宾政府官方文化教育月，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/buwanngwika",
            "search": "https://www.tiktok.com/search?q=buwanngwika",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=PH"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "totaybueno",
            "videoId": "7678602530099563796"
          },
          "fusionSuggestion": {
            "commercial": "可关注传统文化服饰/游戏元素做泛化视觉参考。",
            "video": "适合做菲律宾传统文化主题的游戏内活动预告。"
          }
        },
        {
          "rank": 26,
          "tag": "#harimerdeka",
          "name": "Hari Merdeka（马来语/印尼语\"独立日\"通用说法）",
          "regionGroup": "sea",
          "category": "节日",
          "danceCategory": "non_dance",
          "regions": [
            {
              "code": "ID",
              "posts": "38.4K",
              "views": "125.3M"
            },
            {
              "code": "MY",
              "posts": "22.1K",
              "views": "59.9M"
            }
          ],
          "summary": "马来语/印尼语\"独立日\"的通用说法，可指印尼8月17日独立日或马来西亚8月31日国庆日，具体归属地区视发布账号地域而定。",
          "whyHot": "与#merdeka/#harikebangsaan同属独立日主题标签矩阵的通用说法变体，各地8月庆典季同步带动此类通用标签走高。",
          "origin": "印尼语/马来语独立日通用说法，非营销或创作者发起。",
          "confidence": "official",
          "links": {
            "tag": "https://www.tiktok.com/tag/harimerdeka",
            "search": "https://www.tiktok.com/search?q=harimerdeka",
            "rankingSource": "https://ads.tiktok.com/creative/creativeCenter/trends/hashtag?period=90&region=ID"
          },
          "douyinCheck": {
            "status": "not_found",
            "note": "本轮抖音热搜快照未见直接对应条目。"
          },
          "videoEmbed": {
            "author": "ceritarania_",
            "videoId": "7675233741530287381"
          },
          "fusionSuggestion": {
            "commercial": "可考虑独立日限定配色活动皮肤/庆典元素联动。",
            "video": "适合做独立日主题的游戏内庆典活动预告。"
          }
        }
      ]
    }
  },
  "douyinRef": [
    {
      "rank": 1,
      "keyword": "2026苹果秋季新品发布会",
      "url": "https://www.douyin.com/search/2026%E8%8B%B9%E6%9E%9C%E7%A7%8B%E5%AD%A3%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A",
      "hotValue": "12,136,868"
    },
    {
      "rank": 2,
      "keyword": "今天是教师节",
      "url": "https://www.douyin.com/search/%E4%BB%8A%E5%A4%A9%E6%98%AF%E6%95%99%E5%B8%88%E8%8A%82",
      "hotValue": "12,125,237"
    },
    {
      "rank": 3,
      "keyword": "我国不断加大民生保障力度",
      "url": "https://www.douyin.com/search/%E6%88%91%E5%9B%BD%E4%B8%8D%E6%96%AD%E5%8A%A0%E5%A4%A7%E6%B0%91%E7%94%9F%E4%BF%9D%E9%9A%9C%E5%8A%9B%E5%BA%A6",
      "hotValue": "11,810,884"
    },
    {
      "rank": 4,
      "keyword": "燕麦系秋天的神",
      "url": "https://www.douyin.com/search/%E7%87%95%E9%BA%A6%E7%B3%BB%E7%A7%8B%E5%A4%A9%E7%9A%84%E7%A5%9E",
      "hotValue": "11,727,525"
    },
    {
      "rank": 5,
      "keyword": "郑钦文止步美网八强",
      "url": "https://www.douyin.com/search/%E9%83%91%E9%92%A6%E6%96%87%E6%AD%A2%E6%AD%A5%E7%BE%8E%E7%BD%91%E5%85%AB%E5%BC%BA",
      "hotValue": "10,000,627"
    },
    {
      "rank": 6,
      "keyword": "抖音达人直击苹果发布会现场",
      "url": "https://www.douyin.com/search/%E6%8A%96%E9%9F%B3%E8%BE%BE%E4%BA%BA%E7%9B%B4%E5%87%BB%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E7%8E%B0%E5%9C%BA",
      "hotValue": "9,902,500"
    },
    {
      "rank": 7,
      "keyword": "幸福是一堆娃娃排排坐",
      "url": "https://www.douyin.com/search/%E5%B9%B8%E7%A6%8F%E6%98%AF%E4%B8%80%E5%A0%86%E5%A8%83%E5%A8%83%E6%8E%92%E6%8E%92%E5%9D%90",
      "hotValue": "8,661,598"
    },
    {
      "rank": 8,
      "keyword": "在太空拧湿毛巾有多神奇",
      "url": "https://www.douyin.com/search/%E5%9C%A8%E5%A4%AA%E7%A9%BA%E6%8B%A7%E6%B9%BF%E6%AF%9B%E5%B7%BE%E6%9C%89%E5%A4%9A%E7%A5%9E%E5%A5%87",
      "hotValue": "8,591,008"
    },
    {
      "rank": 9,
      "keyword": "教师节创意贺卡",
      "url": "https://www.douyin.com/search/%E6%95%99%E5%B8%88%E8%8A%82%E5%88%9B%E6%84%8F%E8%B4%BA%E5%8D%A1",
      "hotValue": "7,776,246"
    },
    {
      "rank": 10,
      "keyword": "中国女篮挺进世界杯八强",
      "url": "https://www.douyin.com/search/%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E6%8C%BA%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%85%AB%E5%BC%BA",
      "hotValue": "7,734,103"
    },
    {
      "rank": 11,
      "keyword": "伊朗打击美军基地和战舰",
      "url": "https://www.douyin.com/search/%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E5%92%8C%E6%88%98%E8%88%B0",
      "hotValue": "7,727,028"
    },
    {
      "rank": 12,
      "keyword": "iPhone折叠屏真机上手",
      "url": "https://www.douyin.com/search/iPhone%E6%8A%98%E5%8F%A0%E5%B1%8F%E7%9C%9F%E6%9C%BA%E4%B8%8A%E6%89%8B",
      "hotValue": "7,724,376"
    },
    {
      "rank": 13,
      "keyword": "警惕开学季常见骗术",
      "url": "https://www.douyin.com/search/%E8%AD%A6%E6%83%95%E5%BC%80%E5%AD%A6%E5%AD%A3%E5%B8%B8%E8%A7%81%E9%AA%97%E6%9C%AF",
      "hotValue": "7,713,614"
    },
    {
      "rank": 14,
      "keyword": "iPhone 18 Pro系列价格公布",
      "url": "https://www.douyin.com/search/iPhone%2018%20Pro%E7%B3%BB%E5%88%97%E4%BB%B7%E6%A0%BC%E5%85%AC%E5%B8%83",
      "hotValue": "7,712,615"
    },
    {
      "rank": 15,
      "keyword": "今日人设是可可美人",
      "url": "https://www.douyin.com/search/%E4%BB%8A%E6%97%A5%E4%BA%BA%E8%AE%BE%E6%98%AF%E5%8F%AF%E5%8F%AF%E7%BE%8E%E4%BA%BA",
      "hotValue": "7,684,978"
    },
    {
      "rank": 16,
      "keyword": "王者万象棋正式上线",
      "url": "https://www.douyin.com/search/%E7%8E%8B%E8%80%85%E4%B8%87%E8%B1%A1%E6%A3%8B%E6%AD%A3%E5%BC%8F%E4%B8%8A%E7%BA%BF",
      "hotValue": "7,679,829"
    },
    {
      "rank": 17,
      "keyword": "敢于收拾自己 也是一种成长",
      "url": "https://www.douyin.com/search/%E6%95%A2%E4%BA%8E%E6%94%B6%E6%8B%BE%E8%87%AA%E5%B7%B1%20%E4%B9%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E6%88%90%E9%95%BF",
      "hotValue": "7,673,973"
    },
    {
      "rank": 18,
      "keyword": "属于教师节的仪式感",
      "url": "https://www.douyin.com/search/%E5%B1%9E%E4%BA%8E%E6%95%99%E5%B8%88%E8%8A%82%E7%9A%84%E4%BB%AA%E5%BC%8F%E6%84%9F",
      "hotValue": "7,670,980"
    },
    {
      "rank": 19,
      "keyword": "解析苹果华为小米折叠屏三国杀",
      "url": "https://www.douyin.com/search/%E8%A7%A3%E6%9E%90%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E6%8A%98%E5%8F%A0%E5%B1%8F%E4%B8%89%E5%9B%BD%E6%9D%80",
      "hotValue": "7,668,728"
    },
    {
      "rank": 20,
      "keyword": "杜兰特在抖音潜水被发现了",
      "url": "https://www.douyin.com/search/%E6%9D%9C%E5%85%B0%E7%89%B9%E5%9C%A8%E6%8A%96%E9%9F%B3%E6%BD%9C%E6%B0%B4%E8%A2%AB%E5%8F%91%E7%8E%B0%E4%BA%86",
      "hotValue": "7,661,283"
    }
  ]
};
