const fs = require('fs');
const path = require('path');

const articlesJson = [
  { id: "article-01", title: "2026年白月光机场深度测评：BGP IPLC专线与AI上网极速体验指南", tag: "品牌深度测评", desc: "深入评测白月光(baiyueguangjc.homes)的网络表现、IPLC中继架构、4K视频秒开与OpenAI/ChatGPT解锁能力。" },
  { id: "article-02", title: "2026年机场推荐：如何挑选高性价比、零日志的IPLC高速梯子", tag: "机场选购指南", desc: "2026年最新的科学上网与技术上网节点选购要点，教你识别真实IPLC专线与虚假宣传。" },
  { id: "article-03", title: "高速梯子推荐：解析4K流媒体与游戏低延迟加速的技术原理", tag: "技术原理解析", desc: "探讨视频秒开背后的BGP中继与路由协议优化，如何实现低延迟、零抖动的技术上网体验。" },
  { id: "article-04", title: "AI上网节点配置 - 解锁ChatGPT | 白月光官网", tag: "AI工具解锁", desc: "专为AI从业者与创作者打造的AI上网指南，避免IP被封与响应超时的最佳解决方案。" },
  { id: "article-05", title: "科学上网新趋势：2026年防封锁与IEPL专线节点配置实战", tag: "防封锁技术", desc: "面对最新的GWW检测机制，如何选择具备IEPL/IPLC内网专线的高稳定性加速服务。" },
  { id: "article-06", title: "技术上网必看：Shadowrocket、Clash与Surge一键订阅导入详解", tag: "客户端配置", desc: "全平台客户端配置图文教程，包含iOS小火箭、Android Clash及Mac Surge订阅使用技巧。" },
  { id: "article-07", title: "2026年机场推荐榜单：解决4K视频缓冲与跨国丢包的终极方案", tag: "机场排行榜", desc: "全面测评2026年主流机场晚高峰表现，为你推荐真正不掉线、无卡顿的优质网络梯子。" },
  { id: "article-08", title: "高速梯子推荐：为什么IPLC内网专线比公网中继更加稳定安全", tag: "专线对比", desc: "详解IPLC专线与普通公网隧道的本质区别，为什么高要求用户首选IPLC内网中继。" },
  { id: "article-09", title: "AI上网节点选择技巧：如何避开OpenAI风控IP封锁", tag: "OpenAI风控避坑", desc: "分析OpenAI对代理IP的封锁原理，推荐原生住宅IP与干净IPLC节点的配置方法。" },
  { id: "article-10", title: "科学上网小白指南：从零基础入门到高效全平台代理部署", tag: "零基础入门", desc: "适合初学者的科学上网与技术上网科普，三分钟搞懂订阅地址、节点协议与客户端选择。" },
  { id: "article-11", title: "技术上网安全手册：Zero-Log零日志政策与AES-256高强度加密解析", tag: "网络安全与隐私", desc: "数据隐私保护必看：零日志协议如何防止网络监控，保障您的跨国访问痕迹不留痕。" },
  { id: "article-12", title: "2026年机场推荐：适合跨境电商、外贸办公与独立站运营的优质网络", tag: "外贸办公专线", desc: "外贸从业者与跨境电商团队必备加速器推荐，多设备并发、固定IP与全天候稳定保障。" },
  { id: "article-13", title: "高速梯子推荐：iOS/Android/Windows/macOS多端同步加速指南", tag: "多端同步使用", desc: "如何在手机、电脑、平板和智能电视上同时配置高速梯子，实现多终端无缝网络连接。" },
  { id: "article-14", title: "AI上网首选 - 直连DeepSeek | 白月光官网", tag: "前沿AI加速", desc: "全面测试最新主流AI模型对网络的要求，如何通过高速节点获得零延迟的智能交互。" },
  { id: "article-15", title: "科学上网避坑指南：告别频繁掉线与低价恶劣机场", tag: "避坑指南", desc: "总结网络加速服务中的常见套路，教你避开超卖严重、随时跑路的低劣九块九机场。" },
  { id: "article-16", title: "技术上网协议对比 - 节点协议原理剖析 | 白月光官网", tag: "协议深度剖析", desc: "对比主流代理协议的优缺点、抗封锁能力与传输效率，为你选择最适合的技术上网方案。" },
  { id: "article-17", title: "2026年机场推荐：全网性价比最高的按量与周期订阅套餐对比", tag: "性价比套餐", desc: "精算月付、季付、年付与按流量计费方案，帮助不同用量的用户省钱选对加速套餐。" },
  { id: "article-18", title: "高速梯子推荐：解锁Netflix、Disney+、HBO 4K原生地理解封秘籍", tag: "4K流媒体解封", desc: "揭秘流媒体版权封锁与IP版权检测，如何挑选具备原生解锁能力的优质节点服务商。" },
  { id: "article-19", title: "AI上网高效实操：解决Midjourney画图超时的网络优化方案", tag: "AI绘图网络优化", desc: "Midjourney 与 Stable Diffusion 常用高频节点的网络调优教程，避免生成超时失败。" },
  { id: "article-20", title: "科学上网知识普及：什么是BGP多线中继与原生双 ISP 住宅IP", tag: "网络术语科普", desc: "深入科普BGP入口、IPLC出口与原生住宅IP概念，让你秒懂网络加速器硬件规格。" },
  { id: "article-21", title: "技术上网干货：路由器部署Clash规则实现全屋智能设备无感加速", tag: "路由器硬核配置", desc: "利用OpenWrt、Merlin或Clash路由器固件，打造全家设备免安装客户端的无感科学上网。" },
  { id: "article-22", title: "2026年机场推荐：游戏玩家必备的低延迟、零丢包外服节点选择", tag: "游戏加速专区", desc: "面向 Steam、Epic、PS5、Xbox 玩家的外服游戏节点评测，告别高延迟与掉线重连。" },
  { id: "article-23", title: "高速梯子推荐：高并发与多设备同时在线的稳定性测试报告", tag: "稳定性实测", desc: "实测10台以上设备同时进行4K下载与AI模型问答时的丢包率、带宽占用与连接稳定性。" },
  { id: "article-24", title: "AI上网学术科研 - 谷歌学术与论文加速 | 白月光官网", tag: "学术科研加速", desc: "专为高校师生与科研人员设计的学术资源访问指南，高速下载大模型权重与文献资料。" },
  { id: "article-25", title: "科学上网隐私安全防护：防DNS泄漏与WebRTC真实IP暴露解决方案", tag: "隐私防泄漏", desc: "检测与防范浏览器 WebRTC 和 DNS 隐私泄漏的实操防线，确保上网过程绝对匿名。" },
  { id: "article-26", title: "技术上网性能调优：如何通过PAC规则实现国内直连与国外自动代理", tag: "分流规则优化", desc: "详解PAC分流与GeoIP智能路由规则，实现百度淘宝直连、海外资源自动加速。" },
  { id: "article-27", title: "2026年机场推荐：老牌稳定与新兴黑马机场综合评测指南", tag: "新老机场评测", desc: "横向对比运营多年的老牌资深机场与采用新架构的技术黑马，找出适合你的最佳选择。" },
  { id: "article-28", title: "高速梯子推荐：晚高峰流量拥堵期的专线加速实测数据分享", tag: "晚高峰拥堵测试", desc: "夜间20:00-23:00网络高峰时段的真实带宽速度与延迟数据对比，用数据说话。" },
  { id: "article-29", title: "AI上网必备环境搭建：打造无障碍交互的全球大模型创作平台", tag: "AI环境搭建", desc: "一站式指导如何结合高速代理节点部署 ChatGPT Plus、Claude Pro 以及 Midjourney 订阅。" },
  { id: "article-30", title: "科学上网与技术上网全景图：2026年网络自由与数据安全最佳实践", tag: "行业全景终章", desc: "全面总结2026年科学上网、技术上网、AI上网与机场选择的关键准则与未来趋势。" }
];

const TARGET_LINK = "https://123pps01.huanqiutiaff.com/#/?code=j5VBUvw0";

// Generate HTML Cards Section
let cardsHtml = `
    <!-- 4.5 SEO Articles Section (Placed Right Below Pricing) -->
    <section id="articles" class="section" data-name="SEO精选文章">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">SEO KNOWLEDGE BASE</span>
          <h2 class="section-title">2026 科学上网 & 机场推荐 SEO 专栏</h2>
          <p class="section-subtitle">提供全面、专业的高速梯子指南、AI上网技巧与网络技术干货</p>
        </div>

        <div class="articles-grid">
`;

articlesJson.forEach(item => {
  cardsHtml += `
          <!-- Article Card ${item.id} -->
          <div class="article-card">
            <div>
              <span class="article-card-tag">${item.tag}</span>
              <h3 class="article-card-title">
                <a href="articles/${item.id}.html">${item.title}</a>
              </h3>
              <p class="article-card-desc">${item.desc}</p>
            </div>
            <div class="article-card-footer">
              <a href="articles/${item.id}.html" class="article-card-link">阅读全文 →</a>
              <!-- Dofollow Outbound Target Blank Link -->
              <a href="${TARGET_LINK}" target="_blank" class="btn btn-primary btn-sm" style="font-size:0.75rem; padding:4px 10px;">直达机场</a>
            </div>
          </div>
`;
});

cardsHtml += `
        </div>
      </div>
    </section>
`;

// Insert into index.html right after pricing section
const indexPath = path.join(__dirname, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Find </section> closing tag of pricing
const pricingIndex = indexContent.indexOf('</section>', indexContent.indexOf('id="pricing"'));
if (pricingIndex !== -1) {
  const insertPos = pricingIndex + '</section>'.length;
  indexContent = indexContent.slice(0, insertPos) + '\n' + cardsHtml + indexContent.slice(insertPos);
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('Successfully updated index.html with 30 article cards below pricing block.');
} else {
  console.error('Pricing section not found in index.html');
}

// Update sitemap.html with articles
const sitemapPath = path.join(__dirname, 'sitemap.html');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

let sitemapArticlesHtml = `
    <!-- 4. SEO 30篇精选文章索引 -->
    <div class="content-box">
      <h2>四、 2026年机场推荐与科学上网 SEO 30篇专栏索引</h2>
      <ul style="grid-template-columns: repeat(2, 1fr); display: grid; gap: 8px 16px;">
`;

articlesJson.forEach(item => {
  sitemapArticlesHtml += `        <li><a href="articles/${item.id}.html" target="_blank" style="color: var(--accent-blue); font-weight: 600;">${item.title}</a></li>\n`;
});

sitemapArticlesHtml += `      </ul>
    </div>
`;

const mainCloseIndex = sitemapContent.indexOf('</main>');
if (mainCloseIndex !== -1) {
  sitemapContent = sitemapContent.slice(0, mainCloseIndex) + sitemapArticlesHtml + sitemapContent.slice(mainCloseIndex);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('Successfully updated sitemap.html with 30 article links.');
}
