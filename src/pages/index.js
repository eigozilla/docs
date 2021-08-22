import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Logo from '../../static/img/icon_temporary.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Logo className="margin-bottom--md" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/menu">
            📕 使い始める
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFooter() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <footer className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Link
          className="button button--secondary button--lg"
          to="/menu">
          📕 使い始める
        </Link>
      </div>
    </footer>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <HomepageFooter />
    </Layout>
  );
}
