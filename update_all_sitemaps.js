const fs = require('fs');
const path = require('path');

const articlesJson = [
  { id: "article-01", title: "2026年白月光机场深度测评：BGP IPLC专线与AI上网极速体验指南", tag: "品牌深度测评" },
  { id: "article-02", title: "2026年机场推荐：如何挑选高性价比、零日志的IPLC高速梯子", tag: "机场选购指南" },
  { id: "article-03", title: "高速梯子推荐：解析4K流媒体与游戏低延迟加速的技术原理", tag: "技术原理解析" },
  { id: "article-04", title: "AI上网节点配置 - 解锁ChatGPT | 白月光官网", tag: "AI工具解锁" },
  { id: "article-05", title: "科学上网新趋势：2026年防封锁与IEPL专线节点配置实战", tag: "防封锁技术" },
  { id: "article-06", title: "技术上网必看：Shadowrocket、Clash与Surge一键订阅导入详解", tag: "客户端配置" },
  { id: "article-07", title: "2026年机场推荐榜单：解决4K视频缓冲与跨国丢包的终极方案", tag: "机场排行榜" },
  { id: "article-08", title: "高速梯子推荐：为什么IPLC内网专线比公网中继更加稳定安全", tag: "专线对比" },
  { id: "article-09", title: "AI上网节点选择技巧：如何避开OpenAI风控IP封锁", tag: "OpenAI风控避坑" },
  { id: "article-10", title: "科学上网小白指南：从零基础入门到高效全平台代理部署", tag: "零基础入门" },
  { id: "article-11", title: "技术上网安全手册：Zero-Log零日志政策与AES-256高强度加密解析", tag: "网络安全与隐私" },
  { id: "article-12", title: "2026年机场推荐：适合跨境电商、外贸办公与独立站运营的优质网络", tag: "外贸办公专线" },
  { id: "article-13", title: "高速梯子推荐：iOS/Android/Windows/macOS多端同步加速指南", tag: "多端同步使用" },
  { id: "article-14", title: "AI上网首选 - 直连DeepSeek | 白月光官网", tag: "前沿AI加速" },
  { id: "article-15", title: "科学上网避坑指南：告别频繁掉线与低价恶劣机场", tag: "避坑指南" },
  { id: "article-16", title: "技术上网协议对比 - 节点协议原理剖析 | 白月光官网", tag: "协议深度剖析" },
  { id: "article-17", title: "2026年机场推荐：全网性价比最高的按量与周期订阅套餐对比", tag: "性价比套餐" },
  { id: "article-18", title: "高速梯子推荐：解锁Netflix、Disney+、HBO 4K原生地理解封秘籍", tag: "4K流媒体解封" },
  { id: "article-19", title: "AI上网高效实操：解决Midjourney画图超时的网络优化方案", tag: "AI绘图网络优化" },
  { id: "article-20", title: "科学上网知识普及：什么是BGP多线中继与原生双 ISP 住宅IP", tag: "网络术语科普" },
  { id: "article-21", title: "技术上网干货：路由器部署Clash规则实现全屋智能设备无感加速", tag: "路由器硬核配置" },
  { id: "article-22", title: "2026年机场推荐：游戏玩家必备的低延迟、零丢包外服节点选择", tag: "游戏加速专区" },
  { id: "article-23", title: "高速梯子推荐：高并发与多设备同时在线的稳定性测试报告", tag: "稳定性实测" },
  { id: "article-24", title: "AI上网学术科研 - 谷歌学术与论文加速 | 白月光官网", tag: "学术科研加速" },
  { id: "article-25", title: "科学上网隐私安全防护：防DNS泄漏与WebRTC真实IP暴露解决方案", tag: "隐私防泄漏" },
  { id: "article-26", title: "技术上网性能调优：如何通过PAC规则实现国内直连与国外自动代理", tag: "分流规则优化" },
  { id: "article-27", title: "2026年机场推荐：老牌稳定与新兴黑马机场综合评测指南", tag: "新老机场评测" },
  { id: "article-28", title: "高速梯子推荐：晚高峰流量拥堵期的专线加速实测数据分享", tag: "晚高峰拥堵测试" },
  { id: "article-29", title: "AI上网必备环境搭建：打造无障碍交互的全球大模型创作平台", tag: "AI环境搭建" },
  { id: "article-30", title: "科学上网与技术上网全景图：2026年网络自由与数据安全最佳实践", tag: "行业全景终章" }
];

const TARGET_LINK = "https://123pps01.huanqiutiaff.com/#/?code=j5VBUvw0";

// 1. Build sitemap.html
const sitemapHtmlPath = path.join(__dirname, 'sitemap.html');
const sitemapHtmlContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>网站地图 - 白月光 Cloud (baiyueguangjc.homes)</title>
  <meta name="description" content="白月光加速器(baiyueguangjc.homes)全站地图索引，包含主页功能模块、品牌条款及30篇SEO专栏文章导航。">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Top Header Navigation -->
  <header class="header">
    <div class="container nav-container">
      <a href="index.html" class="logo">
        <div class="logo-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 10.011 10.011 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <span class="logo-text">白月光<span class="logo-badge">Cloud</span></span>
      </a>
      <div class="header-cta">
        <a href="index.html" class="btn btn-secondary btn-sm">返回首页</a>
        <a href="${TARGET_LINK}" target="_blank" class="btn btn-primary btn-sm">立即注册</a>
      </div>
    </div>
  </header>

  <div class="page-header">
    <div class="container">
      <span class="section-tag">SITE MAP</span>
      <h1 class="section-title">网站地图 (HTML & XML Sitemap)</h1>
      <p class="section-subtitle">快速浏览与全站页面导航指引 | XML Sitemap: <a href="sitemap.xml" target="_blank" style="color:var(--accent-blue); text-decoration:underline;">sitemap.xml</a></p>
    </div>
  </div>

  <main class="container page-content">
    
    <!-- 1. 落地页主模块导航 -->
    <div class="content-box">
      <h2>一、 首页核心模块指引</h2>
      <ul>
        <li><a href="index.html#hero" style="color: var(--accent-blue); font-weight: 600;">主视觉区 (Headline & 免费体验)</a></li>
        <li><a href="index.html#features" style="color: var(--accent-blue); font-weight: 600;">产品核心优势 (IPLC专线、零日志、智能分流)</a></li>
        <li><a href="index.html#streaming" style="color: var(--accent-blue); font-weight: 600;">流媒体与 AI 支持 (Netflix, ChatGPT, Claude)</a></li>
        <li><a href="index.html#pricing" style="color: var(--accent-blue); font-weight: 600;">清晰套餐价格表 (月付、季付、年付方案)</a></li>
        <li><a href="index.html#articles" style="color: var(--accent-blue); font-weight: 600;">SEO 30篇精选文章专栏 (卡片总览)</a></li>
        <li><a href="index.html#reviews" style="color: var(--accent-blue); font-weight: 600;">用户真实评价与口碑反馈</a></li>
        <li><a href="index.html#faq" style="color: var(--accent-blue); font-weight: 600;">常见问题解答 (FAQ)</a></li>
      </ul>
    </div>

    <!-- 2. 独立信息页面 -->
    <div class="content-box">
      <h2>二、 独立信息与品牌条款页面</h2>
      <ul>
        <li><a href="about.html" target="_blank" style="color: var(--accent-blue); font-weight: 600;">关于我们 (品牌介绍, 服务理念, 节点覆盖, 客服支持)</a></li>
        <li><a href="terms.html" target="_blank" style="color: var(--accent-blue); font-weight: 600;">服务条款 (禁止事项, 免责声明)</a></li>
        <li><a href="privacy.html" target="_blank" style="color: var(--accent-blue); font-weight: 600;">隐私政策 (零日志记录承诺)</a></li>
        <li><a href="sitemap.html" target="_blank" style="color: var(--accent-blue); font-weight: 600;">网站地图 (HTML 全站导航)</a></li>
        <li><a href="sitemap.xml" target="_blank" style="color: var(--accent-blue); font-weight: 600;">XML 搜索引擎 Sitemap (sitemap.xml)</a></li>
      </ul>
    </div>

    <!-- 3. 快速注册通道 -->
    <div class="content-box">
      <h2>三、 快速注册与官网通道</h2>
      <p>点击下方链接可直达白月光控制面板与节点订阅注册页面：</p>
      <p style="margin-top: 16px;">
        <a href="${TARGET_LINK}" target="_blank" class="btn btn-primary btn-lg">直达白月光官方注册通道</a>
      </p>
    </div>

    <!-- 4. SEO 30篇精选文章索引 -->
    <div class="content-box">
      <h2>四、 2026年机场推荐与科学上网 SEO 30篇专栏索引</h2>
      <ul style="grid-template-columns: repeat(2, 1fr); display: grid; gap: 10px 20px;">
${articlesJson.map(item => `        <li><a href="articles/${item.id}.html" target="_blank" style="color: var(--accent-blue); font-weight: 600;">[${item.tag}] ${item.title}</a></li>`).join('\n')}
      </ul>
    </div>

  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-nav">
        <a href="sitemap.html" target="_blank" class="footer-nav-link">网站地图</a>
        <a href="about.html" target="_blank" class="footer-nav-link">关于我们</a>
        <a href="terms.html" target="_blank" class="footer-nav-link">服务条款</a>
        <a href="privacy.html" target="_blank" class="footer-nav-link">隐私政策</a>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 白月光 (baiyueguangjc.homes). 保留所有权利。</p>
      </div>
    </div>
  </footer>

</body>
</html>
`;

fs.writeFileSync(sitemapHtmlPath, sitemapHtmlContent, 'utf8');
console.log('Successfully updated sitemap.html');

// 2. Build sitemap.xml
const sitemapXmlPath = path.join(__dirname, 'sitemap.xml');
const todayStr = '2026-10-09';
let sitemapXmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://baiyueguangjc.homes/</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Secondary Pages -->
  <url>
    <loc>https://baiyueguangjc.homes/about.html</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://baiyueguangjc.homes/terms.html</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://baiyueguangjc.homes/privacy.html</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://baiyueguangjc.homes/sitemap.html</loc>
    <lastmod>${todayStr}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- SEO 30 Articles -->
${articlesJson.map(item => `  <url><loc>https://baiyueguangjc.homes/articles/${item.id}.html</loc><lastmod>${todayStr}</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapXmlPath, sitemapXmlContent, 'utf8');
console.log('Successfully updated sitemap.xml');
