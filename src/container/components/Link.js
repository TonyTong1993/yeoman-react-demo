/**
 * Created by tongwanhua on 2017/3/4.
 */
import React from 'react';
let Link = ({active,onClick,children}) => {
  if (active) {
   return  <span>{children}</span>
  }
  return (
    <a href="#" onClick={e => {
      e.preventDefault()
      onClick()
    }}>{children}</a>
  );
};
export default Link;
