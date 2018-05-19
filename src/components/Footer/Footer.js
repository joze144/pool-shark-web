import React from 'react';
import Icon from '../Icon/Icon';
import { ICONS } from '../../icons/Icons';

// const openLink = (link) => {
//   // let window = window.open(link, '_blank');
//   // window.focus();
// };

export const Footer = () => (
  <footer>
    <div className="footer-div-1">
      <div className="foot-left">Shark of The Pool</div>
      <div className="foot-right">
        <a className="foot-icon-button" href="https://medium.com/@jozhe/" target="_blank" rel="noopener noreferrer">
          <Icon icon={ICONS.MEDIUM} color="white" />
        </a>
      </div>
    </div>
  </footer>
);