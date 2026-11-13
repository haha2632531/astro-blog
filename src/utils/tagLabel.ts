// 标签显示名映射：只影响界面文字，不改变 frontmatter 里的标签值与 /tags/ 路由 slug
const tagLabels: Record<string, string> = {
  docs: "使用文档",
  release: "版本发布",
  "color-schemes": "配色方案",
  configuration: "站点配置",
  faq: "常见问题",
  "forestry-cms": "Forestry CMS",
  "astro-paper": "AstroPaper",
  nextjs: "Next.js",
  tailwindcss: "Tailwind CSS",
  headlesscms: "无头 CMS",
  blog: "博客",
  typescript: "TypeScript",
  astro: "Astro",
  javascript: "JavaScript",
  reactjs: "React",
  contextapi: "Context API",
  "styled-components": "Styled Components",
  some: "示例",
  example: "示例",
  tags: "标签",
  others: "其他",
};

export const tagLabel = (tag: string): string => {
  const key = Object.keys(tagLabels).find(
    k => k === tag.toLowerCase().replace(/\s+/g, "-")
  );
  return key ? tagLabels[key] : tag;
};

export default tagLabel;
