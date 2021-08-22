import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'パワフルな検索機能。',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        知りたい情報にダイレクトにアクセス。目次と索引を探す手間とはおさらばです。
      </>
    ),
  },
  {
    title: '必要な情報を、必要なだけ。',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        まずは要点だけを、わかりやすく。「続きを読む」から詳しい解説にアクセスしましょう。
      </>
    ),
  },
  {
    title: '完全無料。広告ゼロ。',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Eigozillaの運営は寄付によって支えられています。広告に邪魔されずに、学習に専念できます。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
