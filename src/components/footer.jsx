import React from 'react';
import style from '../styles/footer.module.css';

export default () => (
  <div className={style.footer}>
    <a href="https://github.com/Ratnasambhav" className={style.navLink}>Github</a>
    <span className={style.navLink}>&nbsp;/&nbsp;</span>
    <a href="https://www.linkedin.com/in/ratnasambhav-priyadarshi-496b77108" className={style.navLink}>LinkedIn</a>
    <span className={style.navLink}>&nbsp;/&nbsp;</span>
    <a href="https://twitter.com/ratnasambhav732" className={style.navLink}>Twitter</a>
    <span className={style.navLink}>&nbsp;/&nbsp;</span>
    <a href="mailto:ratnasambhav@gmail.com" className={style.navLink}>Email</a>
  </div>
);
