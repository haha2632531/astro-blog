import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

export interface TagWithCount {
  tag: string;
  tagName: string;
  count: number;
}

const getTagsWithCount = (posts: CollectionEntry<"blog">[]) => {
  const counts = new Map<string, { tagName: string; count: number }>();

  posts.filter(postFilter).forEach(post => {
    const seenInPost = new Set<string>();
    post.data.tags.forEach(tag => {
      const slug = slugifyStr(tag);
      if (seenInPost.has(slug)) return; // 同一篇文章内同名标签只计一次
      seenInPost.add(slug);
      const existing = counts.get(slug);
      if (existing) existing.count += 1;
      else counts.set(slug, { tagName: tag, count: 1 });
    });
  });

  return Array.from(counts.entries())
    .map(([tag, { tagName, count }]) => ({ tag, tagName, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
};

export default getTagsWithCount;
