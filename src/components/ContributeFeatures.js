import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '英語学習のアップデート',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        質が高く手軽に使える文法書を無料で公開することで、日本人の英語学習を加速させたい。参入障壁を下げ、学習の負担を減らすことで、知のエコシステムを広げます。
      </>
    ),
  },
  {
    title: '媒体のアップデート',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        ウェブでは、紙の媒体と比べてはるかに簡単に、たくさんのことをできるようになります。全文検索を使えば、目次や索引を引くことなく、知りたい情報に直接アクセス。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
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
        <h2 className="text--center">開発コンセプト</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
