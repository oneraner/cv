export const fullstack = {
  title: "Chih-Yuan Chao - Full Stack Engineer",
  summary:
    "Full Stack Engineer who ships across mobile and web with React Native, React, Node.js, and Golang. I treat code as a tool—the real value is understanding the business logic and translating it into product decisions end to end. Experienced in building AI-driven features, scalable backends, and leading small teams.",
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
    "AI / LLM Integration",
    "CI/CD",
    "Git",
  ],
  sections: [
    {
      heading: "Work Experience",
      items: [
        {
          role: "Software Engineer",
          company: "Ready Health (瑞迪健康)",
          period: "Mar 2026 – Present",
          details: [
            "Built a health-management mobile app (**React Native**) and marketing website (**React**), plus an internal **CMS**, as a full stack engineer.",
            "Developed **AI**-powered analysis of health-checkup reports and an appointment-booking system with a **Golang** backend.",
            "Interviewed candidates and led a mid-level frontend engineer.",
            "Owned features end to end—turning business requirements into product and data-model decisions, not just implementing specs.",
          ],
        },
        {
          role: "React Developer",
          company: "FPT Taiwan Ltd",
          period: "Nov 2024 – Mar 2026",
          details: [
            "Led a team of **3** frontend engineers to deliver production-ready projects.",
            "Increased development and build speed by **500%** via workflow optimization.",
            "Reviewed code and created video-based technical docs for knowledge sharing.",
            "Handled Java backend modifications and mentoring.",
            "Collaborated with backend engineers to design **APIs**.",
          ],
        },
        {
          role: "Senior Programmer / Programmer II",
          company: "Shoalter Technology Ltd",
          period: "Aug 2021 – Nov 2024",
          details: [
            "Managed teams of **3–4** engineers to deliver key projects, including webview integration and production-ready chatroom with WebSocket.",
            "Designed and maintained shared components with Turborepo, accelerating development and reducing technical debt.",
            "Reduced profile form load time by 3s and CPU peaks by **50%**, resolving UI latency issues.",
            "Implemented React Testing Library to set up tests, raising coverage from **0% to 45%+**.",
            "Mentored team members via code reviews, technical sharing, and requirement clarification.",
          ],
        },
        {
          role: "React Developer",
          company: "CloudWare Technology Ltd",
          period: "Dec 2020 – Jul 2021",
          details: [
            "Optimized API handling to fix blocking issues from excessive requests.",
            "Integrated Google reCAPTCHA Enterprise for enhanced security.",
          ],
        },
      ],
    },
    {
      heading: "Side Projects",
      items: [
        {
          name: "Onchain Lens — blockchain explorer, Go indexer & wallet lab",
          url: "https://github.com/oneraner/onchain-lens",
          description:
            "Full-stack onchain data platform: Next.js/wagmi/viem frontend, Go + PostgreSQL event indexer, Foundry escrow contract. Built to production patterns used by wallets and exchanges.",
          details: [
            "Built a **Go** indexer ingesting ERC-20 Transfer/Approval event logs into **PostgreSQL** — raw JSON-RPC client (no SDK), idempotent writes keyed by (txHash, logIndex), **28k+ events** indexed in the first backfill test.",
            "Implemented **chain-reorg handling**: confirmation-lag indexing, block-hash chain verification, automatic fork-point rollback — verified by fault injection.",
            "Shipped an approval-risk scanner (unlimited-allowance detection, live on-chain re-reads, one-click revoke) and address explorer decoding event logs from raw topics.",
            "Built an HD-wallet lab: **BIP-39/44** derivation (validated against known test vectors), local **EIP-1559** signing and raw-tx broadcast, same-nonce **speed-up/cancel** replacement.",
            "Wrote and fuzz-tested an escrow contract with **Foundry** (incl. reentrancy attack test); all frontend writes are **simulation-gated** with decoded custom-error reasons.",
          ],
        },
      ],
    },
    {
      heading: "Education",
      items: [
        {
          school: "Fo Guang University",
          degree: "Master of Arts in Economics",
          period: "Sep 2011 – Jun 2012",
        },
      ],
    },
  ],
};
