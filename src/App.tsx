import { Route, Routes } from 'react-router-dom';
import ReactGA from 'react-ga4';
import MainLayout from './layouts/MainLayout';

import './css/App.css';
import './css/fonts.css';

import HomepageID from './pages/id/Homepage';
import HomepageEN from './pages/en/Homepage';
import NotFoundPage from './pages/NotFound';
import AboutPageID from './pages/id/About';
import AboutPageEN from './pages/en/About';
import GalleryPageID from './pages/id/Gallery';
import GalleryPageEN from './pages/en/Gallery';
import FAQPageID from './pages/id/FAQ';
import FAQPageEN from './pages/en/FAQ';
import PromoPageID from './pages/id/Promo';
import PromoPageEN from './pages/en/Promo';
import PlansPageID from './pages/id/Plans';
import PlansPageEN from './pages/en/Plans';
import PlanDetailspageID from './pages/id/Plans/[slug]';
import PlanDetailspageEN from './pages/en/Plans/[slug]';

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID);

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
  title: 'i-Hub App First Visit',
});

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomepageID />} />
        <Route path="tentang" element={<AboutPageID />} />
        <Route path="plans" element={<PlansPageID />} />
        <Route path="plans/:slug" element={<PlanDetailspageID />} />
        <Route path="galeri" element={<GalleryPageID />} />
        <Route path="promo" element={<PromoPageID />} />
        <Route path="faq" element={<FAQPageID />} />
      </Route>

      <Route path="/id" element={<MainLayout />}>
        <Route index element={<HomepageID />} />
        <Route path="tentang" element={<AboutPageID />} />
        <Route path="plans" element={<PlansPageID />} />
        <Route path="plans/:slug" element={<PlanDetailspageID />} />
        <Route path="galeri" element={<GalleryPageID />} />
        <Route path="promo" element={<PromoPageID />} />
        <Route path="faq" element={<FAQPageID />} />
      </Route>

      <Route path="/en" element={<MainLayout />}>
        <Route index element={<HomepageEN />} />
        <Route path="about" element={<AboutPageEN />} />
        <Route path="plans" element={<PlansPageEN />} />
        <Route path="plans/:slug" element={<PlanDetailspageEN />} />
        <Route path="gallery" element={<GalleryPageEN />} />
        <Route path="promo" element={<PromoPageEN />} />
        <Route path="faq" element={<FAQPageEN />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
