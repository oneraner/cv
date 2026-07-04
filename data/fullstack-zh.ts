export const fullstackZh = {
  title: "趙知遠 - 全端工程師",
  summary:
    "橫跨行動與網頁的全端工程師，使用 React Native、React、Node.js 與 Golang 開發產品。我把程式碼視為工具，真正的價值在於理解商業邏輯並將其轉化為端到端的產品決策。具備 AI 功能開發、可擴充後端設計與小型團隊帶領經驗。",
  skills: [
    "JavaScript",
    "TypeScript",
    "React / Next.js",
    "React Native",
    "Node.js",
    "Go (Golang)",
    "Express",
    "Prisma",
    "RESTful API",
    "GraphQL",
    "PostgreSQL",
    "AWS (EC2, RDS, S3)",
    "TailwindCSS",
    "Docker",
    "AI / LLM 整合",
    "CI/CD",
    "Git",
  ],
  sections: [
    {
      heading: "工作經歷",
      items: [
        {
          role: "軟體工程師",
          company: "瑞迪健康",
          period: "2026 年 3 月 – 至今",
          details: [
            "以全端角色開發健康管理 App（**React Native**）、行銷網頁（**React**）及後台 **CMS**。",
            "使用 **Golang** 後端開發 **AI** 分析健檢報告與線上預約功能。",
            "負責面試並帶領一位中階前端工程師。",
            "從商業需求出發，主導橫跨前後端的產品與資料模型決策，而非僅實作規格。",
          ],
        },
        {
          role: "React 工程師",
          company: "FPT Taiwan Ltd",
          period: "2024 年 11 月 – 2026 年 3 月",
          details: [
            "帶領 **3** 位前端工程師團隊交付正式環境專案。",
            "透過工作流程最佳化，將開發與建置速度提升 **500%**。",
            "進行程式碼審查並製作影片形式技術文件以促進知識分享。",
            "負責 Java 後端修改與團隊指導。",
            "與後端工程師協作設計 **API**。",
          ],
        },
        {
          role: "資深工程師 / 工程師 II",
          company: "Shoalter Technology Ltd",
          period: "2021 年 8 月 – 2024 年 11 月",
          details: [
            "管理 **3–4** 位工程師團隊交付關鍵專案，包括 WebView 整合與具備 WebSocket 的正式環境聊天室。",
            "使用 Turborepo 設計與維護共用元件，加速開發並降低技術債。",
            "將個人資料表單載入時間縮短 3 秒、CPU 尖峰降低 **50%**，解決 UI 延遲問題。",
            "導入 React Testing Library 建立測試，將測試覆蓋率從 **0% 提升至 45%+**。",
            "透過程式碼審查、技術分享與需求釐清指導團隊成員。",
          ],
        },
        {
          role: "React 工程師",
          company: "CloudWare Technology Ltd",
          period: "2020 年 12 月 – 2021 年 7 月",
          details: [
            "最佳化 API 處理，解決過多請求造成的阻塞問題。",
            "整合 Google reCAPTCHA Enterprise 以強化安全性。",
          ],
        },
      ],
    },
    {
      heading: "Side Projects",
      items: [
        {
          name: "Onchain Lens — 區塊鏈瀏覽器、Go indexer 與錢包實驗室",
          url: "https://github.com/oneraner/onchain-lens",
          description:
            "全端鏈上資料平台：Next.js/wagmi/viem 前端、Go + PostgreSQL 事件索引器、Foundry escrow 合約，對齊錢包與交易所的生產架構模式。",
          details: [
            "以 **Go** 打造 ERC-20 Transfer/Approval 事件索引器寫入 **PostgreSQL**——原生 JSON-RPC client（不依賴 SDK）、以 (txHash, logIndex) 為鍵的冪等寫入，首次 backfill 測試索引 **2.8 萬+ 筆事件**。",
            "實作 **chain reorg 處理**：確認數落後索引、block hash chain 驗證、自動回滾至分叉點，並以故障注入實測驗證。",
            "開發 approval 風險掃描器（unlimited allowance 偵測、鏈上即時重讀、一鍵 revoke）與從原始 topics 解碼事件的地址瀏覽器。",
            "打造 HD 錢包實驗室：**BIP-39/44** 推導（對齊已知測試向量驗證）、本地 **EIP-1559** 簽名與 raw tx 廣播、同 nonce **加速/取消** 替換。",
            "以 **Foundry** 撰寫並 fuzz 測試 escrow 合約（含重入攻擊測試）；前端所有寫入皆**先模擬後送出**，revert 解碼為可讀原因。",
          ],
        },
      ],
    },
    {
      heading: "學歷",
      items: [
        {
          school: "佛光大學",
          degree: "經濟學碩士",
          period: "2011 年 9 月 – 2012 年 6 月",
        },
      ],
    },
  ],
};
