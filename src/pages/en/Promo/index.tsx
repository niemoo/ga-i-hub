import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import PromoPageLayout from '../../../layouts/Promo';

export default function PromoPageEN() {
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
      title: 'i-Hub Promo EN',
    });
  }, []);

  return <PromoPageLayout lang_code="en" />;
}
