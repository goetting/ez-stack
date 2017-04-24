/* @flow */
import React from 'react';

type Props = { children?: Object, label: string, className?: string};

export default function Collapsable({ children, label, className = '' }: Props) {
  return (
    <div className={`ric-collapsable ric-collapse--open ${className}`}>
      <a className="ric-collapsable__toggle collapsable" >
        <h4 className="ric-sidebar__menu_heading ric-collapsable__label">{label}</h4>
        <i className="material-icons ric-collapsable__label__arrows-icon">keyboard_arrow_down</i>
      </a>
      <div className="ric-collapsable__elements">
        {children}
      </div>
    </div>
  );
}
