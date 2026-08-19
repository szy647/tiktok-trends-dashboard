# TikTok 热梗监测台 - 版本记录

版本号由用户主动认定并告知，每次用户说"这是 vX.X 版本"时，需要：
1. 把当前 `index.html` + `data.js` 完整快照到 `versions/vX.X/` 目录
2. 在本文件追加一条记录，写清楚这个版本包含哪些功能/数据状态
3. 如果用户要求"回退到 vX.X"，直接用 `versions/vX.X/index.html` + `versions/vX.X/data.js` 覆盖回根目录的同名文件

## v2.0 (2026-08-17 20:02 快照)

**数据状态：**
- `meta.lastUpdated`: 2026-08-17T18:00:00+08:00
- 7天窗口 24 条 / 30天窗口 22 条 / 90天窗口 20 条，共 66 条真实数据（US/GB/BR/ID/TH/PH/VN 七市场 Creative Center 官方数据合并去重排序）
- 11 条与更早版本重叠的话题复用了旧的 summary/whyHot/origin/fusionSuggestion/videoEmbed，只刷新了 regions 播放量数字
- 55 条新话题（46 条联网核验 + 4 条 MCGG 自有品牌 tag）补齐完整字段
- 真实参考视频：50 个新话题中实际抓到 36 个真实视频，14 个因验证码受阻标记为 `videoEmbed: null`
- 抖音参照快照已刷新（20 条，2026-08-17 17:05 抓取）

**功能状态：**
- 时间窗口筛选：近7天 / 近30天 / 近90天
- 地区筛选：全部 / 全球·欧美 / 东南亚
- **歌舞类/非歌舞类筛选**（本版本新增，在这次数据刷新之外、由另一次会话添加）：每条 item 有 `danceCategory` 字段（`dance`/`non_dance`），按内容语义人工判定是否音乐/舞蹈/演唱会/音乐综艺主题，不是按 category 原文字面。当前 66 条里仅 4 条是歌舞类：Lollapalooza音乐节、Ariana Grande新专辑Petal、音乐人Oliver Tree、越南音乐真人秀tinhhasayhi。filter tab 逻辑与地区筛选完全对称（严格 `===` 比较）。
- 排序：综合排名 / 按播放量 / 按投稿量
- 关键词搜索（匹配 name+category+summary+whyHot）
- 热度排行总览横向柱状图（随筛选联动）
- 每条卡片：TikTok 官方 embed 真实视频（或诚实的"暂无可展示"兜底）、地区 Posts/Views 对比小柱图、简介/火的原因/原梗出处、置信度标签（official/uncertain）、国内核实徽标（synced/not_found/nonapplicable）、MCGG 融合建议区块（商业化+短视频两个方向）
- 页面底部：抖音热搜榜快照区块

**已知遗留问题：**
- 14 条新话题 videoEmbed 为 null（验证码阻断，未来可重新尝试抓取补全，不算功能缺陷）
- 自动化任务（routineId=2）的 prompt 尚未同步更新，包含：(a) 多时间窗口刷新方法、(b) danceCategory 字段的判定规则——否则下次自动刷新新抓取的数据会缺 danceCategory 字段，导致歌舞类筛选下这些新条目不可见
