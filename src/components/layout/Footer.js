import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoVisuaDark from '../../svg/LogoVisuaDark.svg';
import footerMenus from '../../data/header-menu';

const Footer = () => (
  <footer id="contact" className="w-full bg-primary-darker">
    <div className="flex flex-col items-center justify-center py-8">
      <picture className="mb-4">
        <img src={LogoVisuaDark} alt="logo-visua" />
      </picture>
      <div className="flex-1 flex-row px-3">
        <ul className="flex flex-row flex-wrap items-center justify-center leading-loose">
          {footerMenus.map((menu) => (
            <li className="mx-2" key={menu.key}>
              <AnchorLink
                className="text-white text-sm hover:text-white hover:underline"
                href={menu.url}>
                {menu.title}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="w-full py-4" style={{ backgroundColor: '#040C37' }}>
      <div className="container md:max-w-screen-sm lg:max-w-screen-md mx-auto">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between text-white text-xs">
          <span className="mb-2 sm:mb-0">Copyright © Visua.id 2020. All rights reserved</span>
          <ul className="flex flex-row">
            <li className="mx-2">
              <a className="text-white text-xs underline" href="/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="text-white text-xs underline" href="/">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
