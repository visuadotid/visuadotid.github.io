import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoVisua from '../../svg/LogoVisuaWhite.svg';
import LogoVisuaDark from '../../svg/LogoVisua.svg';
import menus from '../../data/header-menu';

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const onCloseMenu = () => {
    setOpen(false);
  };

  const onOpenMenu = () => {
    setOpen(true);
  };

  return (
    <header
      data-testid="app-header"
      className="sticky top-0 w-screen h-16 bg-primary shadow-xs z-10">
      <div className="px-4 container mx-auto h-full flex flex-row justify-between items-center text-white sm:justify-between">
        <a href="/">
          <div className="flex h-16 mr-3 items-center justify-center">
            <img src={LogoVisua} alt="logo-visua" />
          </div>
        </a>
        <div className={`${isOpen && 'hidden'} -mr-2 flex items-center sm:hidden`}>
          <button
            onClick={onOpenMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            id="main-menu"
            aria-label="Main menu"
            aria-haspopup="true">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav data-testid="navigation" className="hidden sm:block">
          <ul className="flex flex-row">
            {menus.map((menu) => (
              <li className="ml-2 sm:ml-4 md:ml-6 lg:ml-8" key={menu.key}>
                <AnchorLink
                  onClickCapture={onCloseMenu}
                  className="text-white text-base hover:text-opacity-75 hover:text-white"
                  href={menu.url}>
                  {menu.title}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* // Mobile menu, show/hide based on menu open state. // Entering: "duration-150 ease-out" //
      From: "opacity-0 scale-95" // To: "opacity-100 scale-100" // Leaving: "duration-100 ease-in"
      // From: "opacity-100 scale-100" // To: "opacity-0 scale-95" */}

      <div
        className={`${
          !isOpen && 'hidden'
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right sm:hidden`}>
        <div className="rounded-lg shadow-xs ">
          <div
            className="rounded-md bg-white shadow overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu">
            <div className="px-2 flex items-center justify-between">
              <a href="/">
                <div className="flex h-16 mr-3 items-center justify-center">
                  <img src={LogoVisuaDark} alt="logo-visua" />
                </div>
              </a>
              <div className="-mr-2">
                <button
                  onClick={onCloseMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu">
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="pt-2 pb-3">
              <ul>
                {menus.map((menu) => (
                  <li className="md:ml-6 lg:ml-8" key={menu.key}>
                    <AnchorLink
                      onClickCapture={onCloseMenu}
                      className="mt-1 block p-2 text-base font-medium bg-white text-gray-900 hover:text-opacity-75 hover:text-gray-900 focus:outline-none transition duration-150 ease-in-out"
                      href={menu.url}>
                      {menu.title}
                    </AnchorLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        header {
          height: 64px;
        }
      `}</style>
    </header>
  );
};
export default Header;
