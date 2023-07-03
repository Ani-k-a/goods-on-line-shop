import React from 'react';
import css from './Hero.module.css';
import Section from 'Section/Section';
import img from '../../images/bg-image.png';

export default function Hero() {
  return (
    <div className={css.hero}>
      <Section>
        <div className={css.backgroundImage}>
          <h1 className={css.visuallyHidden}>
            We are offering the best green products
          </h1>
          <div>
            <h2 className={css.title}>Sale</h2>
            <p className={css.description}>New season</p>
            <a href="#sale" className={css.link}>
              Sale
            </a>
          </div>
          <img src={img} alt="tree" className={css.img}></img>
        </div>
      </Section>
    </div>
  );
}
