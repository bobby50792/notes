import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1rem',
        background:
          'linear-gradient(180deg, var(--ifm-color-primary-lightest) 0%, #ffffff 100%)',
      }}
    >
      {/* 主标题 */}
      <h1
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          color: 'var(--ifm-color-primary-darkest)',
          marginBottom: '1rem',
        }}
      >
        欢迎来到 Bobby 的站点！
      </h1>

      {/* 副标题 */}
      <p
        style={{
          fontSize: '1.2rem',
          color: 'var(--ifm-color-primary-darker)',
          maxWidth: '680px',
          lineHeight: 1.8,
          marginBottom: '2.5rem',
        }}
      >
        这里是一个基于 Docusaurus 构建的文档网站。<br />
      </p>

      {/* 按钮区 */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link className="button button--primary button--lg" to="/docs/intro">
          进入文档
        </Link>
        <Link className="button button--secondary button--lg" to="/blog/intro">
          查看博客
        </Link>
      </div>

      {/* 页脚小字 */}
      <footer
        style={{
          marginTop: '4rem',
          fontSize: '0.9rem',
          color: '#777',
        }}
      >
      </footer>
    </main>
  );
}
