/**
 * 列表卡片元信息用的正文统计：中文按字、英文按词计数，
 * 阅读速度按 300 字/分钟估算。只在构建期运行，不引入运行时依赖。
 */
export function getPostStats(body: string): { count: number; minutes: number } {
  const plain = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s{0,3}[-*+]\s+/gm, "")
    .replace(/[*_~>|]/g, " ")
    .trim();

  const cjk = (plain.match(/[\u3400-\u9fff]/g) ?? []).length;
  const words = (plain.match(/[A-Za-z0-9]+/g) ?? []).length;
  const count = cjk + words;
  const minutes = Math.max(1, Math.round(count / 300));

  return { count, minutes };
}

export function formatCount(count: number): string {
  return count.toLocaleString("en-US");
}

// 与项目内其他 @utils 工具保持一致，同时支持默认导入
export default getPostStats;
