import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavbarEn from '../components/Navbar/NavbarEn';
import NavbarId from '../components/Navbar/NavbarId';
import FooterId from '../components/Footer/FooterId';
import FooterEn from '../components/Footer/FooterEn';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const pathMapping: Record<string, string> = {
  '/id/tentang': '/en/about',
  '/id/plans': '/en/plans',
  '/id/galeri': '/en/gallery',
  '/id/promo': '/en/promo',
  '/id/contact': '/en/contact',
};

// Fungsi untuk mendapatkan direct link berdasarkan bahasa
const getDirectLinks = (path: string) => {
  const isEnglishRoute = path.startsWith('/en');
  const isIndonesianRoute = path === '/' || path.startsWith('/id');

  let direct_link_id = path;
  let direct_link_en = path;

  if (isEnglishRoute) {
    // Cek apakah path bahasa Inggris punya pasangan di pathMapping
    direct_link_id = Object.keys(pathMapping).find((idPath) => pathMapping[idPath] === path) || path.replace(/^\/en/, '/id');
  } else if (isIndonesianRoute) {
    // Cek apakah path bahasa Indonesia ada di pathMapping
    direct_link_en = pathMapping[path] || `/en${path === '/' ? '' : path.replace(/^\/id/, '')}`;
  }

  return { direct_link_id, direct_link_en };
};

const MainLayout: React.FC = () => {
  const location = useLocation();
  const { direct_link_id, direct_link_en } = getDirectLinks(location.pathname);

  return (
    <>
      <title>i-Hub Coworking Space</title>
      <meta name="description" content="The Most Strategic & Spacious Coworking Space in Jakarta." />

      <div className="layout-container">
        {location.pathname.startsWith('/en') && <NavbarEn direct_link_id={direct_link_id} direct_link_en={direct_link_en} />}
        {(location.pathname === '/' || location.pathname.startsWith('/id')) && <NavbarId direct_link_id={direct_link_id} direct_link_en={direct_link_en} />}

        <main className="content">
          <Outlet />
        </main>

        {location.pathname.startsWith('/en') && <FooterEn />}
        {(location.pathname === '/' || location.pathname.startsWith('/id')) && <FooterId />}

        <FloatingWhatsApp />
      </div>
    </>
  );
};

export default MainLayout;
