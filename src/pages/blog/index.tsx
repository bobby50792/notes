import React from 'react';
import { Redirect } from '@docusaurus/router';
import useGlobalData from '@docusaurus/useGlobalData';

export default function BlogRedirect() {
  const gd = useGlobalData() as any;

  // 这里直接读官方博客插件的数据：
  // 名字是 'docusaurus-plugin-content-blog'，默认 id 为 'default'
  const blog = gd['docusaurus-plugin-content-blog']?.default;
  const posts = blog?.blogPosts ?? [];

  // 计算“最新一篇”
  let target = '/blog';
  if (posts.length > 0) {
    const latest = [...posts].sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime()
    )[0];
    target = latest.metadata.permalink;
  } else {
    // 如果你启用了分页（postsPerPage 不是 'ALL'），兜底用 '/blog/1'
    // 没有分页就保持 '/blog'
    // target = '/blog/1';
    target = '/blog';
  }

  return <Redirect to={target} />;
}
