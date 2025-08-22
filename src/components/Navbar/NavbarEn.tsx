import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../css/navbar.css';

interface NavbarProps {
  direct_link_id?: string;
  direct_link_en?: string;
}

const Navbar: React.FC<NavbarProps> = ({ direct_link_id = '/id', direct_link_en = '/en' }) => {
  const [dropdown, setDropdown] = useState(false);
  const [navbarMobile, setNavbarMobile] = useState(false);
  const [navbarLangMobile, setNavbarLangMobile] = useState(false);
  const [dropdownPlansMobile, setDropdownPlansMobile] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleNavbarMobile = () => {
    setNavbarMobile(!navbarMobile);
  };

  const toggleNavbarLangMobile = () => {
    setNavbarLangMobile(!navbarLangMobile);
  };

  const toggleDropdownPlansMobile = () => {
    setDropdownPlansMobile(!dropdownPlansMobile);
  };

  return (
    <div className="navbar">
      <div
        className="absolute top-0 h-[260px] w-full z-30"
        style={{
          background: 'linear-gradient(180deg, #f3f7ff 0%, rgba(243, 247, 255, 0) 100%)',
          zIndex: -1,
        }}
      ></div>

      {/* Desktop navbar */}
      <div className="navbar-wrapper px-[72px] mx-auto hidden md:block py-4 10">
        <div className="navbar grid grid-flow-col justify-between">
          <div className="left-navbar flex flex-row space-x-4 items-center">
            <Link to="/en/">
              <img src="/images/logo/logo-ihub.png" alt="logo" className="logo" />
            </Link>
            <div className="navbar-links flex flex-row items-center space-x-4 p-3 font-medium leading-[160%] text-base mt-2">
              <div className="navbar-link px-3">
                <Link to="/en/about">About</Link>
              </div>
              <div className="navbar-link px-3 hover:cursor-pointer" onClick={toggleDropdown}>
                <Link to="#" className="flex flex-row items-center">
                  Plans
                  <img src="/images/icons/expand_more.png" alt="expand" />
                </Link>
                <div className="dropdown-navbar__plans w-[250px] absolute z-[99]" style={{ display: dropdown ? 'block' : 'none' }}>
                  <ul className="ul bg-white p-4 shadow-md rounded-[10px]">
                    <Link to="/en/plans" className="p-2 flex flex-row items-center gap-3">
                      <div className="material-icons color-primary-blue-100">info</div>
                      <p> Plan Overview </p>
                    </Link>
                    <li className="py-2">
                      <div className="w-full h-[1px] border-neutral-light-1"></div>
                    </li>
                    <Link to="/en/plans/daily-coworking" className="p-2 flex flex-row items-center gap-3">
                      <div className="material-icons color-primary-blue-100">looks_one</div>
                      <p> Daily Coworking </p>
                    </Link>
                    <Link to="/en/plans/monthly-coworking" className="p-2 flex flex-row items-center gap-3">
                      <div className="material-icons color-primary-blue-100">date_range</div>
                      <p> Monthly Coworking </p>
                    </Link>
                    <Link to="/en/plans/dedicated-desk" className="p-2 flex flex-row items-center gap-3">
                      <div className="material-icons color-primary-blue-100">laptop_windows</div>
                      <p> Dedicated Desk </p>
                    </Link>
                    <Link to="/en/plans/private-office" className="p-2 flex flex-row items-center gap-3 hover:cursor-pointer">
                      <div className="material-icons color-primary-blue-100">vpn_key</div>
                      <p> Private Office </p>
                    </Link>
                    <Link to="/en/plans/meeting-room" className="p-2 flex flex-row items-center gap-3">
                      <div className="material-icons color-primary-blue-100">event_seat</div>
                      <p> Meeting Room </p>
                    </Link>
                    <Link to="/en/plans/event-space" className="p-2 flex flex-row items-center gap-3">
                      <div className="material-icons color-primary-blue-100">campaign</div>
                      <p> Event Space </p>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="navbar-link px-3">
                <Link to="/en/gallery">Gallery</Link>
              </div>
              <div className="navbar-link px-3">
                <Link to="/en/promo">Promo</Link>
              </div>
              <div className="navbar-link px-3">
                <Link to="/en/faq">FAQ</Link>
              </div>
            </div>
          </div>
          <div className="right-navbar">
            <div className="navbar-links flex flex-row items-center space-x-4 p-3 font-medium leading-[160%] text-base">
              <div className="navbar-link px-4 py-2 font-medium text-white primary-gradient-100 rounded-[6px]">
                <Link to="https://api.whatsapp.com/send?phone=6281511180600" target="_blank" rel="noreferrer">
                  Book Now
                </Link>
              </div>
              <div className="navbar-link rounded-[46px] flex bg-[#ECEFF4] p-1">
                <Link to={direct_link_id} className="lang-en py-2 px-3">
                  <img src="/images/icons/id.png" alt="indonesia" />
                </Link>
                <Link to={direct_link_en} className="lang-id py-2 px-3 bg-[#FFFFFF] rounded-[102px]">
                  <img src="/images/icons/en.png" alt="english" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      <nav className="bg-white border-gray-200 block md:hidden">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <img src="/images/logo/logo-ihub.png" alt="logo" className="logo" />
          </Link>
          <div className="flex items-center md:order-2">
            <button
              type="button"
              onClick={toggleNavbarLangMobile}
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center font-medium justify-center gap-3 px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <div className="rounded-3xl">
                <img src="/images/language/lang-en.png" alt="English" style={{ imageRendering: 'pixelated' }} />
              </div>
              English
            </button>
            {/* Dropdown */}
            <div style={{ display: navbarLangMobile ? 'block' : 'none' }} className="z-50 absolute top-[50px] my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="language-dropdown-menu">
              <ul className="py-2 font-medium" role="none">
                <li>
                  <Link to={direct_link_id} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <div className="inline-flex items-center gap-3">
                      <img src="/images/language/lang-id.png" alt="Indonesia" style={{ imageRendering: 'pixelated' }} />
                      Indonesia
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <button
              onClick={toggleNavbarMobile}
              data-collapse-toggle="mobile-menu-language-select"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-language-select"
              aria-expanded="false"
            >
              <p className="sr-only">Open main menu</p>
              <svg className="w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div style={{ display: navbarMobile ? 'block' : 'none' }} className="items-center justify-between w-full md:w-auto">
            <ul className="flex flex-col font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <Link className="block py-2 pl-3 pr-4" to="/en">
                {' '}
                Home{' '}
              </Link>
              <Link className="block py-2 pl-3 pr-4" to="/en/about">
                About
              </Link>
              <div className="py-2 pl-3 pr-4 flex items-center gap-2 cursor-pointer" onClick={toggleDropdownPlansMobile}>
                Plans
                <img src="/images/icons/expand_more.png" alt="expand" />
              </div>
              <div className="dropdown-plans" style={{ display: dropdownPlansMobile ? 'block' : 'none' }}>
                <Link className="block py-2 pl-6 pr-4" to="/en/plans">
                  Plan Overview
                </Link>
                <Link className="block py-2 pl-6 pr-4" to="/en/plans/daily-coworking">
                  Daily Coworking
                </Link>
                <Link className="block py-2 pl-6 pr-4" to="/en/plans/monthly-coworking">
                  Monthly Coworking
                </Link>
                <Link className="block py-2 pl-6 pr-4" to="/en/plans/dedicated-desk">
                  Dedicated Desk
                </Link>
                <Link className="block py-2 pl-6 pr-4" to="/en/plans/private-office">
                  Private Office
                </Link>
                <Link className="block py-2 pl-6 pr-4" to="/en/plans/meeting-room">
                  Meeting Room
                </Link>
                <Link className="block py-2 pl-6 pr-4" to="/en/plans/event-space">
                  Event Space
                </Link>
              </div>
              <Link className="block py-2 pl-3 pr-4" to="/en/gallery">
                Gallery
              </Link>
              <Link className="block py-2 pl-3 pr-4" to="/en/promo">
                Promo
              </Link>
              <Link className="block py-2 pl-3 pr-4" to="/en/faq">
                FAQ
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
