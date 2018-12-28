import React from 'react';
import { Link } from 'gatsby';
import style from '../styles/navbar.module.css';

export default () => (
  <div className={style.navbar}>
    <Link to="/" className={style.logo}>.\Ratnasambhav</Link>
    <Link to="/blog" className={style.navLink}>Blog</Link>
  </div>
);
