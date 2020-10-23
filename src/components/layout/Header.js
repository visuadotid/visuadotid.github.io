import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Headerx = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Lander
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Start Free Trial</Button>
      </div>
    </div>
  </header>
);

const menus = [{ url: '#about', key: 'about', label: 'About' }];

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
      className="sticky top-0 w-screen h-16 bg-gray-900 shadow-2xl z-10 md:bg-gray-900">
      <div className="px-4 container mx-auto h-full flex flex-row justify-between items-center text-white sm:justify-start">
        <a href="/">
          <div className="w-12 mr-3">
            <LogoIcon />
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
        <nav data-testid="navigation" className="ml-8 hidden sm:block sm:ml-10 sm:pr-4">
          <ul className="flex flex-row">
            {menus.map((menu) => (
              <li className="ml-5" key={menu.key}>
                <a href={menu.url}>{menu.label}</a>
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
        <div className="rounded-lg shadow-md ">
          <div
            className="rounded-md bg-black shadow-xs overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu">
            <div className="px-2 pt-2 flex items-center justify-between">
              <a href="/">
                <div className="w-12 mr-3">
                  <LogoIcon />
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
            <div className="px-2 pt-2 pb-3">
              {menus.map((menu) => (
                <a
                  onClickCapture={onCloseMenu}
                  key={menu.key}
                  href={menu.url}
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-400 transition duration-150 ease-in-out"
                  role="menuitem">
                  {menu.label}
                </a>
              ))}
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
