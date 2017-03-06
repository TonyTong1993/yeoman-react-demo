/**
 * Created by tongwanhua on 2017/3/4.
 */
import React from 'react';
import FooterLink from './FooterLink'
const Footer = ()=>{
  return (
    <p>
     Show :
      {' '}
      <FooterLink filter='SHOW_ALL'>All</FooterLink>
      {', '}
      <FooterLink filter='COMPLETED'>Completed</FooterLink>
      {', '}
      <FooterLink filter='ACTIVE'>Active</FooterLink>
    </p>
  );
};
export default Footer;
