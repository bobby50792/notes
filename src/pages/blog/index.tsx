import React, { useEffect, useMemo } from 'react';
import { Redirect } from '@docusaurus/router';
import useGlobalData from '@docusaurus/useGlobalData';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function BlogIndex() {
  const gd = useGlobalData() as any;

  const blogData = useMemo(() => {
    const entries = Object.entries(gd || {});
    for (const [key, val] of entries) {
      const v = (val as any) ?? {};
      const posts =
        v?.default?.blogPosts ??
        v?.blogPosts ??
        v?.default?.posts ??
        v?.posts;
      if (Array.isArray(posts)) return { key, posts };
    }
    return { key: undefined, posts: [] as any[] };
  }, [gd]);

  const latestPermalink = useMemo(() => {
    const posts = blogData.posts ?? [];
    if (posts.length === 0) return undefined;
    const getDate = (p: any) =>
      new Date((p?.metadata?.date ?? p?.date) || 0).getTime();
    const latest = [...posts].sort((a, b) => getDate(b) - getDate(a))[0];
    return latest?.metadata?.permalink ?? latest?.permalink;
  }, [blogData]);

  const isDebug =
    ExecutionEnvironment.canUseDOM &&
    new URLSearchParams(window.location.search).get('debug') === '1';

  if (isDebug) {
    return (
      <div style={{ padding: 24, fontFamily: 'monospace' }}>
        <h2>/blog 调试模式</h2>
        <p>GlobalData 可用键：{JSON.stringify(Object.keys(gd || {}))}</p>
        <p>匹配到的博客插件键：{String(blogData.key)}</p>
        <p>blogPosts 数量：{blogData.posts?.length ?? 0}</p>
        <p>latest permalink：{latestPermalink || '(未找到)'}</p>
        <p>说明：正常访问 <code>/blog</code> 会自动跳转。加上
          <code>?debug=1</code> 可查看调试信息。
        </p>
      </div>
    );
  }

  // 由于把博客放到 /posts，兜底路径要改成 /posts
  const fallback = '/posts';
  const target = latestPermalink ?? fallback;

  if (!ExecutionEnvironment.canUseDOM) {
    return <Redirect to={target} />;
  }
  useEffect(() => {
    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, [target]);

  return null;
}
