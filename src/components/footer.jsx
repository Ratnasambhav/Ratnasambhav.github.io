import React from 'react';
import style from '../styles/footer.module.css';

export default () => (
  <div className={style.footer}>
    <a href="https://github.com/Ratnasambhav" className={style.footerLink}>Github</a>
    <a href="https://www.linkedin.com/in/ratnasambhav-priyadarshi-496b77108" className={style.footerLink}>LinkedIn</a>
    <a href="https://twitter.com/ratnasambhav732" className={style.footerLink}>Twitter</a>
    <a href="mailto:ratnasambhav@gmail.com" className={style.footerLink}>Email</a>
  </div>
);
